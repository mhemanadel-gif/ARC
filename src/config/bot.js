import { logger } from '../utils/logger.js';

export const botConfig = {
  // =========================
  // BOT PRESENCE (what users see under the bot name)
  // =========================
  presence: {
    status: "online",
    activities: [
      {
        name: "Custom Status", 
        state: "لابوبوووو",     
        type: 4,               
      },
    ],
  },

  // =========================
  // COMMAND BEHAVIOR
  // =========================
  commands: {
    owners: process.env.OWNER_IDS?.split(",").map((id) => id.trim()).filter(Boolean) || [],
    defaultCooldown: 3,
    deleteCommands: false,
    testGuildId: process.env.TEST_GUILD_ID,
    maintenanceMode: process.env.MAINTENANCE_MODE === "true",
    prefix: process.env.PREFIX || "!",
  },

  // =========================
  // APPLICATIONS SYSTEM (نظام التقديمات)
  // =========================
  applications: {
    // تم تعريب الأسئلة الافتراضية هنا
    defaultQuestions: [
      { question: "ما هو اسمك؟", required: true },
      { question: "كم عمرك؟", required: true },
      { question: "لماذا تريد الانضمام إلينا؟", required: true },
    ],

    statusColors: {
      pending: "#FFA500",
      approved: "#00FF00",
      denied: "#FF0000",
    },

    applicationCooldown: 24,
    deleteDeniedAfter: 7,
    deleteApprovedAfter: 30,
    managerRoles: [], 
  },

  // =========================
  // EMBED COLORS & BRANDING
  // =========================
  embeds: {
    colors: {
      primary: "#336699",
      secondary: "#2F3136",

      success: "#57F287",
      error: "#ED4245",
      warning: "#FEE75C",
      info: "#3498DB",

      light: "#FFFFFF",
      dark: "#202225",
      gray: "#99AAB5",

      blurple: "#5865F2",
      green: "#57F287",
      yellow: "#FEE75C",
      fuchsia: "#EB459E",
      red: "#ED4245",
      black: "#000000",

      giveaway: {
        active: "#57F287",
        ended: "#ED4245",
      },
      ticket: {
        open: "#57F287",
        claimed: "#FAA61A",
        closed: "#ED4245",
        pending: "#99AAB5",
      },
      economy: "#F1C40F",
      birthday: "#E91E63",
      moderation: "#9B59B6",

      priority: {
        none: "#95A5A6",
        low: "#3498db",
        medium: "#2ecc71",
        high: "#f1c40f",
        urgent: "#e74c3c",
      },
    },
    footer: {
      text: "Titan Bot",
      icon: null,
    },
    thumbnail: null,
    author: {
      name: null,
      icon: null,
      url: null,
    },
  },

  // =========================
  // ECONOMY SETTINGS (نظام الاقتصاد)
  // =========================
  economy: {
    currency: {
      name: "عملة",
      namePlural: "عملات",
      symbol: "$",
    },

    startingBalance: 0,
    baseBankCapacity: 100000,
    dailyAmount: 100,
    workMin: 10,
    workMax: 100,
    begMin: 5,
    begMax: 50,

    cooldowns: {
      daily: 24 * 60 * 60 * 1000,
      work: 60 * 60 * 1000,
      crime: 2 * 60 * 60 * 1000,
      rob: 4 * 60 * 60 * 1000,
    },

    robSuccessRate: 0.4,
    robFailJailTime: 3600000,
  },

  // =========================
  // SHOP SETTINGS
  // =========================
  shop: {},

  // =========================
  // TICKET SYSTEM (نظام التذاكر)
  // =========================
  tickets: {
    defaultCategory: null,
    supportRoles: [],

    // تم تعريب تسميات الأهمية هنا ليراها الطاقم باللغة العربية
    priorities: {
      none: {
        emoji: "⚪",
        color: "#95A5A6",
        label: "غير محدد",
      },
      low: {
        emoji: "🟢",
        color: "#2ECC71",
        label: "منخفضة",
      },
      medium: {
        emoji: "🟡",
        color: "#F1C40F",
        label: "متوسطة",
      },
      high: {
        emoji: "🔴",
        color: "#E74C3C",
        label: "عالية",
      },
      urgent: {
        emoji: "🚨",
        color: "#E91E63",
        label: "عاجلة جداً",
      },
    },

    defaultPriority: "none",
    archiveCategory: null,
    logChannel: 1521241074712969236,
  },

  // =========================
  // GIVEAWAY SETTINGS
  // =========================
  giveaways: {
    defaultDuration: 86400000,
    minimumWinners: 1,
    maximumWinners: 10,
    minimumDuration: 300000,
    maximumDuration: 2592000000,
    allowedRoles: [],
    bypassRoles: [],
  },

  // =========================
  // BIRTHDAY SETTINGS
  // =========================
  birthday: {
    defaultRole: null,
    announcementChannel: null,
    timezone: "UTC",
  },

  // =========================
  // VERIFICATION SETTINGS (نظام التفعيل)
  // =========================
  verification: {
    defaultMessage: "اضغط على الزر أدناه لتفعيل حسابك والحصول على صلاحية دخول السيرفر!",
    defaultButtonText: "تفعيل",

    autoVerify: {
      defaultCriteria: "none",
      defaultAccountAgeDays: 7,
      serverSizeThreshold: 1000,
      minAccountAge: 1,
      maxAccountAge: 365,
      sendDMNotification: true,
      criteria: {
        account_age: "يجب أن يكون الحساب أقدم من الأيام المحددة",
        server_size: "تفعيل الجميع تلقائياً إذا كان السيرفر أقل من 1000 عضو",
        none: "تفعيل جميع المستخدمين فوراً"
      }
    },

    verificationCooldown: 5000,
    maxVerificationAttempts: 3,
    attemptWindow: 60000,
    maxCooldownEntries: 10000,
    maxAttemptEntries: 10000,
    cooldownCleanupInterval: 300000,
    maxAuditMetadataBytes: 4096,
    maxInMemoryAuditEntries: 1000,
    logAllVerifications: true,
    keepAuditTrail: true,
  },

  // =========================
  // WELCOME / GOODBYE MESSAGES (الترحيب والمغادرة)
  // =========================
  welcome: {
    defaultWelcomeMessage: "أهلاً بك {user} في سيرفر {server}! أصبحنا الآن {memberCount} عضواً!",
    defaultGoodbyeMessage: "غادر {user} السيرفر. أصبحنا الآن {memberCount} عضواً.",
    defaultWelcomeChannel: null,
    defaultGoodbyeChannel: null,
  },

  // =========================
  // COUNTER CHANNELS
  // =========================
  counters: {
    defaults: {
      name: "عداد {name}",
      description: "عداد {name} الخاص بالسيرفر",
      type: "voice",
      channelName: "{name}-{count}",
    },
    permissions: {
      deny: ["VIEW_CHANNEL"],
      allow: ["VIEW_CHANNEL", "CONNECT", "SPEAK"],
    },
    messages: {
      created: "✅ تم إنشاء العداد **{name}** بنجاح",
      deleted: "🗑️ تم حذف العداد **{name}**",
      updated: "🔄 تم تحديث العداد **{name}**",
    },
    types: {
      members: {
        name: "👥 الأعضاء",
        description: "إجمالي الأعضاء في السيرفر",
        getCount: (guild) => guild.memberCount.toString(),
      },
      bots: {
        name: "🤖 البوتات",
        description: "إجمالي حسابات البوتات في السيرفر",
        getCount: (guild) => guild.members.cache.filter((m) => m.user.bot).size.toString(),
      },
      members_only: {
        name: "👤 البشر",
        description: "إجمالي الأعضاء الحقيقيين (بدون البوتات)",
        getCount: (guild) => guild.members.cache.filter((m) => !m.user.bot).size.toString(),
      },
    },
  },

  // =========================
  // GENERIC BOT MESSAGES (رسائل البوت العامة المعربة)
  // =========================
  messages: {
    noPermission: "عذراً، لا تملك الصلاحيات الكافية لاستخدام هذا الأمر.",
    cooldownActive: "يرجى الانتظار {time} قبل استخدام هذا الأمر مجدداً.",
    errorOccurred: "حدث خطأ غير متوقع أثناء تنفيذ هذا الأمر.",
    missingPermissions: "البوت يفتقر إلى الصلاحيات المطلوبة لتنفيذ هذا الإجراء.",
    commandDisabled: "تم تعطيل هذا الأمر حالياً من قبل الإدارة.",
    maintenanceMode: "البوت في وضع الصيانة حالياً، يرجى المحاولة لاحقاً.",
  },

  // =========================
  // FEATURE TOGGLES
  // =========================
  features: {
    economy: true,
    leveling: true,
    moderation: true,
    logging: true,
    welcome: true,
    tickets: true,
    giveaways: true,
    birthday: true,
    counter: true,
    verification: true,
    reactionRoles: true,
    joinToCreate: true,
    voice: true,
    search: true,
    tools: true,
    utility: true,
    community: true,
    fun: true,
    music: true,
  },
};

export function validateConfig(config) {
  const errors = [];

  if (process.env.NODE_ENV !== 'production') {
    logger.debug('Environment variables check:');
    logger.debug('DISCORD_TOKEN exists:', !!process.env.DISCORD_TOKEN);
    logger.debug('TOKEN exists:', !!process.env.TOKEN);
    logger.debug('CLIENT_ID exists:', !!process.env.CLIENT_ID);
    logger.debug('GUILD_ID exists:', !!process.env.GUILD_ID);
    logger.debug('POSTGRES_HOST exists:', !!process.env.POSTGRES_HOST);
    logger.debug('NODE_ENV:', process.env.NODE_ENV);
  }

  if (!process.env.DISCORD_TOKEN && !process.env.TOKEN) {
    errors.push("Bot token is required (DISCORD_TOKEN or TOKEN environment variable)");
  }

  if (!process.env.CLIENT_ID) {
    errors.push("Client ID is required (CLIENT_ID environment variable)");
  }

  if (process.env.NODE_ENV === 'production') {
    const hasConnectionUrl = Boolean(process.env.POSTGRES_URL || process.env.DATABASE_URL);

    if (!hasConnectionUrl) {
      if (!process.env.POSTGRES_HOST) {
        errors.push("PostgreSQL connection is required in production (set DATABASE_URL/POSTGRES_URL, or POSTGRES_HOST)");
      }
      if (!process.env.POSTGRES_USER) {
        errors.push("PostgreSQL user is required in production (set DATABASE_URL/POSTGRES_URL, or POSTGRES_USER)");
      }
      if (!process.env.POSTGRES_PASSWORD) {
        errors.push("PostgreSQL password is required in production (set DATABASE_URL/POSTGRES_URL, or POSTGRES_PASSWORD)");
      }
    }
  }

  return errors;
}

const configErrors = validateConfig(botConfig);
if (configErrors.length > 0) {
  logger.error("Bot configuration errors:", configErrors.join("\n"));
  if (process.env.NODE_ENV === "production") {
    process.exit(1);
  }
}

export const BotConfig = botConfig;

const COMMAND_CATEGORY_FEATURE_MAP = {
  birthday: "birthday",
  community: "community",
  economy: "economy",
  fun: "fun",
  giveaway: "giveaways",
  jointocreate: "joinToCreate",
  leveling: "leveling",
  logging: "logging",
  moderation: "moderation",
  music: "music",
  reaction_roles: "reactionRoles",
  search: "search",
  serverstats: "counter",
  ticket: "tickets",
  tools: "tools",
  utility: "utility",
  verification: "verification",
  welcome: "welcome",
};

function normalizeCategoryKey(category) {
  return String(category || "").trim().toLowerCase().replace(/\s+/g, "_");
}

export function getCommandPrefix() {
  return botConfig.commands?.prefix ?? "!";
}

export function getBotOwners() {
  return (botConfig.commands?.owners ?? [])
    .map((id) => String(id).trim())
    .filter(Boolean);
}

export function isBotOwner(userId) {
  if (!userId) {
    return false;
  }
  return getBotOwners().includes(String(userId));
}

export function isMaintenanceMode() {
  return botConfig.commands?.maintenanceMode === true;
}

export function getBotMessage(key, replacements = {}) {
  let message = botConfig.messages?.[key] || key;
  for (const [placeholder, value] of Object.entries(replacements)) {
    message = message.replace(new RegExp(`\\{${placeholder}\\}`, "g"), String(value));
  }
  return message;
}

export function isFeatureEnabled(featureKey) {
  if (!featureKey) {
    return true;
  }
  return botConfig.features?.[featureKey] !== false;
}

export function isCommandCategoryEnabled(category) {
  const normalized = normalizeCategoryKey(category);
  if (!normalized || normalized === "core") {
    return true;
  }
  const featureKey = COMMAND_CATEGORY_FEATURE_MAP[normalized];
  if (!featureKey) {
    return true;
  }
  return isFeatureEnabled(featureKey);
}

export function getApplicationStatusColor(status) {
  const colors = botConfig.applications?.statusColors || {};
  const hex = colors[status];
  return hex ? getColor(hex) : getColor(status === "approved" ? "success" : status === "denied" ? "error" : "warning");
}

export function getDefaultApplicationQuestions() {
  return (botConfig.applications?.defaultQuestions || []).map((entry) =>
    typeof entry === "string" ? entry : entry.question,
  ).filter(Boolean);
}

export function getColor(path, fallback = "#99AAB5") {
  if (typeof path === "number") return path;
  if (typeof path === "string" && path.startsWith("#")) {
    return parseInt(path.replace("#", ""), 16);
  }
  const result = path
    .split(".")
    .reduce(
      (obj, key) => (obj && obj[key] !== undefined ? obj[key] : fallback),
      botConfig.embeds.colors,
    );
  if (typeof result === "string" && result.startsWith("#")) {
    return parseInt(result.replace("#", ""), 16);
  }
  return result;
}

export function getRandomColor() {
  const colors = Object.values(botConfig.embeds.colors).flatMap((color) =>
    typeof color === "string" ? color : Object.values(color),
  );
  return colors[Math.floor(Math.random() * colors.length)];
}

export default botConfig;
