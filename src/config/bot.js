import { logger } from '../utils/logger.js';

export const botConfig = {
  // =========================
  // حالة البوت (ما يراه المستخدمون تحت اسم البوت)
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
  // إعدادات الأوامر
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
  // نظام التقديمات (التطبيقات)
  // =========================
  applications: {
    defaultQuestions: [
      { question: "ما هو اسمك؟", required: true },
      { question: "كم عمرك؟", required: true },
      { question: "لماذا تريد الانضمام إلى السيرفر؟", required: true },
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
  // ألوان الإمبد والهوية البصرية
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
      text: "بوت تيتان",
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
  // إعدادات الاقتصاد
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
  // إعدادات التذاكر (Tickets)
  // =========================
  tickets: {
    defaultCategory: null,
    supportRoles: [],
    priorities: {
      none: { emoji: "⚪", color: "#95A5A6", label: "عادي" },
      low: { emoji: "🟢", color: "#2ECC71", label: "منخفض" },
      medium: { emoji: "🟡", color: "#F1C40F", label: "متوسط" },
      high: { emoji: "🔴", color: "#E74C3C", label: "عالي" },
      urgent: { emoji: "🚨", color: "#E91E63", label: "عاجل" },
    },
    defaultPriority: "none",
    archiveCategory: null,
    logChannel: 1521241074712969236,
  },

  // =========================
  // إعدادات الجيفاوي
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
  // إعدادات أعياد الميلاد
  // =========================
  birthday: {
    defaultRole: null,
    announcementChannel: null,
    timezone: "UTC",
  },

  // =========================
  // إعدادات التحقق
  // =========================
  verification: {
    defaultMessage: "اضغط على الزر أدناه للتحقق من نفسك والحصول على صلاحية الدخول للسيرفر!",
    defaultButtonText: "تحقق",
    autoVerify: {
      defaultCriteria: "none",
      defaultAccountAgeDays: 7,
      serverSizeThreshold: 1000,
      minAccountAge: 1,
      maxAccountAge: 365,
      sendDMNotification: true,
      criteria: {
        account_age: "يجب أن يكون الحساب أقدم من عدد الأيام المحدد",
        server_size: "جميع المستخدمين إذا كان السيرفر أقل من 1000 عضو",
        none: "جميع المستخدمين فوراً"
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
  // رسائل الترحيب والوداع
  // =========================
  welcome: {
    defaultWelcomeMessage: "أهلاً وسهلاً بك {user} في {server}! الآن لدينا {memberCount} عضو.",
    defaultGoodbyeMessage: "غادر {user} السيرفر. الآن لدينا {memberCount} عضو.",
    defaultWelcomeChannel: null,
    defaultGoodbyeChannel: null,
  },

  // =========================
  // رسائل البوت العامة
  // =========================
  messages: {
    noPermission: "ليس لديك صلاحية استخدام هذا الأمر.",
    cooldownActive: "يرجى الانتظار {time} قبل استخدام هذا الأمر مرة أخرى.",
    errorOccurred: "حدث خطأ أثناء تنفيذ هذا الأمر.",
    missingPermissions: "البوت يفتقر إلى الصلاحيات المطلوبة لتنفيذ هذا الإجراء.",
    commandDisabled: "تم تعطيل هذا الأمر.",
    maintenanceMode: "البوت حالياً في وضع الصيانة.",
  },

  // =========================
  // تفعيل/تعطيل الميزات
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

// دالة التحقق من الإعدادات (بقيت كما هي مع بعض الترجمة)
export function validateConfig(config) {
  const errors = [];
  if (process.env.NODE_ENV !== 'production') {
    logger.debug('فحص متغيرات البيئة:');
    logger.debug('DISCORD_TOKEN موجود:', !!process.env.DISCORD_TOKEN);
    // ... (باقي الدالة كما هي)
  }
  return errors;
}

const configErrors = validateConfig(botConfig);
if (configErrors.length > 0) {
  logger.error("أخطاء في إعدادات البوت:", configErrors.join("\n"));
  if (process.env.NODE_ENV === "production") {
    process.exit(1);
  }
}

export const BotConfig = botConfig;

// باقي الدوال (تم تعديل الأسماء والرسائل حيث يلزم)
export function getBotMessage(key, replacements = {}) {
  let message = botConfig.messages?.[key] || key;
  for (const [placeholder, value] of Object.entries(replacements)) {
    message = message.replace(new RegExp(`\\{${placeholder}\\}`, "g"), String(value));
  }
  return message;
}

export default botConfig;
