import { logger } from '../utils/logger.js';

export const botConfig = {
  // =========================
  // BOT PRESENCE (تواجد البوت)
  // =========================
  presence: {
    status: "online", // online, idle, dnd, invisible
    activities: [
      {
        name: "Custom Status", 
        state: "لابوبوووو",     // الحالة التي تظهر للجميع
        type: 4,               // Custom Status
      },
    ],
  },

  // =========================
  // COMMAND BEHAVIOR (إعدادات الأوامر)
  // =========================
  commands: {
    owners: process.env.OWNER_IDS?.split(",").map((id) => id.trim()).filter(Boolean) || [],
    defaultCooldown: 3,
    
    // تم تحويلها إلى true لتحديث الأوامر المائلة تلقائياً عند تشغيل البوت
    deleteCommands: true, 
    
    testGuildId: process.env.TEST_GUILD_ID,
    maintenanceMode: process.env.MAINTENANCE_MODE === "true",
    prefix: process.env.PREFIX || "!",
  },

  // =========================
  // APPLICATIONS SYSTEM (تقديمات الإدارة)
  // =========================
  applications: {
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
  // EMBED COLORS & BRANDING (الألوان والشعارات)
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
  // ECONOMY SETTINGS (نظام نظام الاقتصادي)
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

  shop: {},

  // =========================
  // TICKET SYSTEM (نظام التذاكر)
  // =========================
  tickets: {
    defaultCategory: null,
    supportRoles: [],
    priorities: {
      none: { emoji: "⚪", color: "#95A5A6", label: "بدون" },
      low: { emoji: "🟢", color: "#2ECC71", label: "منخفض" },
      medium: { emoji: "🟡", color: "#F1C40F", label: "متوسط" },
      high: { emoji: "🔴", color: "#E74C3C", label: "عالي" },
      urgent: { emoji: "🚨", color: "#E91E63", label: "طارئ" },
    },
    defaultPriority: "none",
    archiveCategory: null,
    logChannel: 1521241074712969236, // تم الحفاظ على الأي دي الخاص بك
  },

  // =========================
  // GIVEAWAY SETTINGS (إعدادات الجيف اوي)
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

  birthday: {
    defaultRole: null,
    announcementChannel: null,
    timezone: "UTC",
  },

  // =========================
  // VERIFICATION SETTINGS (نظام التوثيق)
  // =========================
  verification: {
    defaultMessage: "اضغط على الزر أدناه لتوثيق حسابك ودخول السيرفر!",
    defaultButtonText: "توثيق الحساب ✅",
    autoVerify: {
      defaultCriteria: "none",
      defaultAccountAgeDays: 7,
      serverSizeThreshold: 1000,
      minAccountAge: 1,
      maxAccountAge: 365,
      sendDMNotification: true,
      criteria: {
        account_age: "يجب أن يكون الحساب قديماً بالأيام المحددة",
        server_size: "توثيق تلقائي إذا كان السيرفر أصغر من 1000 عضو",
        none: "توثيق فوري لجميع الأعضاء"
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
  // WELCOME / GOODBYE (الترحيب والمغادرة)
  // =========================
  welcome: {
    defaultWelcomeMessage: "أهلاً بك {user} في سيرفر {server}! أصبحنا الآن {memberCount} عضوًا!",
    defaultGoodbyeMessage: "غادرنا {user}.. أصبحنا الآن {memberCount} عضوًا.",
    defaultWelcomeChannel: null,
    defaultGoodbyeChannel: null,
  },

  counters: {
    defaults: {
      name: "عداد {name}",
      description: "عداد السيرفر {name}",
      type: "voice",
      channelName: "{name}-{count}",
    },
    permissions: {
      deny: ["VIEW_CHANNEL"],
      allow: ["VIEW_CHANNEL", "CONNECT", "SPEAK"],
    },
    messages: {
      created: "✅ تم إنشاء العداد **{name}**",
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
        description: "إجمالي البوتات في السيرفر",
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
  // GENERIC BOT MESSAGES (رسائل التنبيه بالعربية)
  // =========================
  messages: {
    noPermission: "❌ عذراً، لا تمتلك الصلاحيات الكافية لاستخدام هذا الأمر.",
    cooldownActive: "⏳ برجاء الانتظار {time} قبل استخدام هذا الأمر مجدداً.",
    errorOccurred: "💥 حدث خطأ غير متوقع أثناء تنفيذ هذا الأمر.",
    missingPermissions: "⚠️ البوت يفتقر إلى الصلاحيات المطلوبة لتنفيذ هذا الإجراء.",
    commandDisabled: "🚫 هذا الأمر معطل حالياً من قبل الإدارة.",
    maintenanceMode: "🛠️ البوت في وضع الصيانة حالياً، انتظر حتى ينتهي المطورون.",
  },

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

// [باقي الدوال البرمجية المساعدة أسفل ملفك تبقى كما هي بدون تغيير]
export function validateConfig(config) {
  const errors = [];
  if (process.env.NODE_ENV !== 'production') {
    logger.debug('Environment variables check:');
    logger.debug('DISCORD_TOKEN exists:', !!process.env.DISCORD_TOKEN);
    logger.debug('CLIENT_ID exists:', !!process.env.CLIENT_ID);
  }
  if (!process.env.DISCORD_TOKEN && !process.env.TOKEN) {
    errors.push("Bot token is required");
  }
  if (!process.env.CLIENT_ID) {
    errors.push("Client ID is required");
  }
  return errors;
}

const configErrors = validateConfig(botConfig);
if (configErrors.length > 0) {
  logger.error("Bot configuration errors:", configErrors.join("\n"));
  if (process.env.NODE_ENV === "production") process.exit(1);
}

export const BotConfig = botConfig;
const COMMAND_CATEGORY_FEATURE_MAP = {
  birthday: "birthday", community: "community", economy: "economy", fun: "fun",
  giveaway: "giveaways", jointocreate: "joinToCreate", leveling: "leveling",
  logging: "logging", moderation: "moderation", music: "music", reaction_roles: "reactionRoles",
  search: "search", serverstats: "counter", ticket: "tickets", tools: "tools",
  utility: "utility", verification: "verification", welcome: "welcome",
};
function normalizeCategoryKey(category) { return String(category || "").trim().toLowerCase().replace(/\s+/g, "_"); }
export function getCommandPrefix() { return botConfig.commands?.prefix ?? "!"; }
export function getBotOwners() { return (botConfig.commands?.owners ?? []).map((id) => String(id).trim()).filter(Boolean); }
export function isBotOwner(userId) { return userId ? getBotOwners().includes(String(userId)) : false; }
export function isMaintenanceMode() { return botConfig.commands?.maintenanceMode === true; }
export function getBotMessage(key, replacements = {}) {
  let message = botConfig.messages?.[key] || key;
  for (const [placeholder, value] of Object.entries(replacements)) {
    message = message.replace(new RegExp(`\\{${placeholder}\\}`, "g"), String(value));
  }
  return message;
}
export function isFeatureEnabled(featureKey) { return featureKey ? botConfig.features?.[featureKey] !== false : true; }
export function isCommandCategoryEnabled(category) {
  const normalized = normalizeCategoryKey(category);
  if (!normalized || normalized === "core") return true;
  const featureKey = COMMAND_CATEGORY_FEATURE_MAP[normalized];
  return featureKey ? isFeatureEnabled(featureKey) : true;
}
export function getApplicationStatusColor(status) {
  const colors = botConfig.applications?.statusColors || {};
  const hex = colors[status];
  return hex ? getColor(hex) : getColor(status === "approved" ? "success" : status === "denied" ? "error" : "warning");
}
export function getDefaultApplicationQuestions() {
  return (botConfig.applications?.defaultQuestions || []).map((entry) => typeof entry === "string" ? entry : entry.question).filter(Boolean);
}
export function getColor(path, fallback = "#99AAB5") {
  if (typeof path === "number") return path;
  if (typeof path === "string" && path.startsWith("#")) return parseInt(path.replace("#", ""), 16);
  const result = path.split(".").reduce((obj, key) => (obj && obj[key] !== undefined ? obj[key] : fallback), botConfig.embeds.colors);
  if (typeof result === "string" && result.startsWith("#")) return parseInt(result.replace("#", ""), 16);
  return result;
}
export function getRandomColor() {
  const colors = Object.values(botConfig.embeds.colors).flatMap((color) => typeof color === "string" ? color : Object.values(color));
  return colors[Math.floor(Math.random() * colors.length)];
}
export default botConfig;
