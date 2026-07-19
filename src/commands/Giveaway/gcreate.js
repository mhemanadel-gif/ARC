async execute(interaction) {
    try {
        await InteractionHelper.safeDefer(interaction, {
            flags: MessageFlags.Ephemeral,
        });

        if (!interaction.inGuild()) {
            return InteractionHelper.safeReply(interaction, {
                embeds: [
                    errorEmbed(
                        "Error",
                        "This command can only be used inside a server."
                    ),
                ],
                flags: MessageFlags.Ephemeral,
            });
        }

        if (
            !interaction.member.permissions.has(
                PermissionsBitField.Flags.ManageGuild
            )
        ) {
            return InteractionHelper.safeReply(interaction, {
                embeds: [
                    errorEmbed(
                        "Missing Permission",
                        "You need **Manage Server** permission."
                    ),
                ],
                flags: MessageFlags.Ephemeral,
            });
        }

        const durationString = interaction.options.getString("duration", true);
        const winnerCount = interaction.options.getInteger("winners", true);
        const prize = interaction.options.getString("prize", true);

        const targetChannel =
            interaction.options.getChannel("channel") || interaction.channel;

        if (!targetChannel || !targetChannel.isTextBased()) {
            return InteractionHelper.safeReply(interaction, {
                embeds: [
                    errorEmbed(
                        "Invalid Channel",
                        "Please choose a valid text channel."
                    ),
                ],
                flags: MessageFlags.Ephemeral,
            });
        }

        const permissions = targetChannel.permissionsFor(
            interaction.guild.members.me
        );

        if (
            !permissions?.has([
                PermissionFlagsBits.ViewChannel,
                PermissionFlagsBits.SendMessages,
            ])
        ) {
            return InteractionHelper.safeReply(interaction, {
                embeds: [
                    errorEmbed(
                        "Missing Permissions",
                        `I can't send messages in ${targetChannel}.`
                    ),
                ],
                flags: MessageFlags.Ephemeral,
            });
        }

        const durationMs = parseDuration(durationString);
        validateWinnerCount(winnerCount);

        const prizeName = validatePrize(prize);

        const endTime = Date.now() + durationMs;

        const giveawayData = {
            messageId: "",
            channelId: targetChannel.id,
            guildId: interaction.guildId,
            prize: prizeName,
            hostId: interaction.user.id,
            endTime,
            endsAt: endTime,
            winnerCount,
            participants: [],
            isEnded: false,
            ended: false,
            createdAt: new Date().toISOString(),
        };

        const giveawayMessage = await targetChannel.send({
            content: "🎉 **NEW GIVEAWAY** 🎉",
            embeds: [
                createGiveawayEmbed(giveawayData, "active"),
            ],
            components: [
                createGiveawayButtons(false),
            ],
        });

        giveawayData.messageId = giveawayMessage.id;

        await saveGiveaway(
            interaction.client,
            interaction.guildId,
            giveawayData
        );

        try {
            await logEvent({
                client: interaction.client,
                guildId: interaction.guildId,
                eventType: EVENT_TYPES.GIVEAWAY_CREATE,
                data: {
                    description: `Giveaway created: ${prizeName}`,
                    channelId: targetChannel.id,
                    userId: interaction.user.id,
                    fields: [
                        {
                            name: "Prize",
                            value: prizeName,
                            inline: true,
                        },
                        {
                            name: "Winners",
                            value: winnerCount.toString(),
                            inline: true,
                        },
                        {
                            name: "Duration",
                            value: durationString,
                            inline: true,
                        },
                        {
                            name: "Channel",
                            value: targetChannel.toString(),
                            inline: true,
                        },
                    ],
                },
            });
        } catch (err) {
            logger.warn("Failed to log giveaway.", err);
        }

        logger.info(
            `Giveaway ${giveawayMessage.id} created by ${interaction.user.tag}`
        );

        return InteractionHelper.safeReply(interaction, {
            embeds: [
                successEmbed(
                    "🎉 Giveaway Started!",
                    `Successfully started **${prizeName}** in ${targetChannel}.`
                ),
            ],
            flags: MessageFlags.Ephemeral,
        });
    } catch (error) {
        logger.error("Giveaway Error:", error);

        return InteractionHelper.safeReply(interaction, {
            embeds: [
                errorEmbed(
                    "Error",
                    error.message || "An unexpected error occurred."
                ),
            ],
            flags: MessageFlags.Ephemeral,
        });
    }
}
