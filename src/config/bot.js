import { logger } from '../utils/logger.js';

export const botConfig = {
  // =========================
  // BOT PRESENCE (حالة ظهور البوت)
  // =========================
  // خيارات الـ `status`:
  // - "online"    = نقطة خضراء (متصل)
  // - "idle"      = قمر أصفر (خامل)
  // - "dnd"       = علامة حمراء (الرجاء عدم الإزعاج)
  // - "invisible" = يظهر كأنه غير متصل
  presence: {
    // حالة الاتصال الحالية على ديسكورد.
    status: "online",

    // سطر النشاط الذي يظهر أسفل اسم البوت.
    // أنواع النشاطات مدعومة برقم من ديسكورد:
    // 0 = يلعب (Playing)
    // 1 = يبث (Streaming)
    // 2 = يستمع إلى (Listening)
    // 3 = يشاهد (Watching)
    // 4 = مخصص (Custom)
    // 5 = ينافس في (Competing)
    activities: [
      {
        name: "Custom Status", // مطلوب من ديسكورد API، لا يظهر للمستخدمين
        state: "لابوبوووو",     // هذا ما يراه المستخدمون بالفعل
        type: 4,               // مخصص
      },
    ],
  },

  // =========================
  // COMMAND BEHAVIOR (سلوك الأوامر)
  // =========================
  commands: {
    // معرفات مالكي البوت (مفصولة بفاصلة في متغير البيئة OWNER_IDS).
    // يمكن للمالكين الوصول إلى أوامر الإدارة والمالك فقط.
    owners: process.env.OWNER_IDS?.split(",").map((id) => id.trim()).filter(Boolean) || [],

    // وقت الانتظار الافتراضي بين استخدام الأوامر (بالثواني).
    defaultCooldown: 3,

    // إذا تم تفعيلها، سيتم حذف الأوامر القديمة قبل إعادة تسجيلها.
    deleteCommands: false,

    // معرف سيرفر اختياري للتوافق مع الشروحات؛ لا يُستخدم لتسجيل الأوامر.
    testGuildId: process.env.TEST_GUILD_ID,

    // عند تفعيلها (أو عندما تكون MAINTENANCE_MODE=true)، يمكن لمالكي البوت فقط تشغيل الأوامر.
    maintenanceMode: process.env.MAINTENANCE_MODE === "true",

    // بادئة الأوامر النصية (مثال: "!" لأمر "!ping").
    // يدعم كلاً من الأوامر المائلة (Slash Commands) والأوامر النصية التقليدية.
    prefix: process.env.PREFIX || "!",
  },

  // =========================
  // APPLICATIONS SYSTEM (نظام التقديمات)
  // =========================
  applications: {
    // الأسئلة الافتراضية التي تظهر عندما يقوم شخص ما بملء استمارة تقديم.
    defaultQuestions: [
      { question: "ما هو اسمك؟", required: true },
      { question: "كم عمرك؟", required: true },
      { question: "لماذا ترغب في الانضمام إلينا؟", required: true },
    ],

    // ألوان الإمبيد (Embed) بناءً على حالة الطلب.
    statusColors: {
      pending: "#FFA500",  // معلق
      approved: "#00FF00", // مقبول
      denied: "#FF0000",   // مرفوض
    },

    // كم من الوقت يجب على المستخدمين الانتظار قبل تقديم طلب آخر (بالساعات).
    applicationCooldown: 24,

    // الحذف التلقائي للطلبات المرفوضة بعد هذا العدد من الأيام.
    deleteDeniedAfter: 7,

    // الحذف التلقائي للطلبات المقبولة بعد هذا العدد من الأيام.
    deleteApprovedAfter: 30,

    // معرفات الرتب (Roles) المسموح لها بإدارة التقديمات.
    managerRoles: [], // سيتم تعبئتها من البيئة أو قاعدة البيانات
  },

  // =========================
  // EMBED COLORS & BRANDING (ألوان وتصميم الإمبيد)
  // =========================
  // هام: هذا هو المصدر الأساسي والوحيد لجميع ألوان البوت
  embeds: {
    colors: {
      // ألوان الهوية الرئيسية.
      primary: "#336699",
      secondary: "#2F3136",

      // ألوان الحالات القياسية لرسائل النجاح/الخطأ/التحذير/المعلومات.
      success: "#57F287",
      error: "#ED4245",
      warning: "#FEE75C",
      info: "#3498DB",

      // ألوان خدمات عامة ومحايدة.
      light: "#FFFFFF",
      dark: "#202225",
      gray: "#99AAB5",

      // اختصارات لوحة ألوان ديسكورد القياسية.
      blurple: "#5865F2",
      green: "#57F287",
      yellow: "#FEE75C",
      fuchsia: "#EB459E",
      red: "#ED4245",
      black: "#000000",

      // ألوان خاصة بميزات معينة.
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

      // تحديد ألوان تذاكر الدعم حسب الأهمية.
      priority: {
        none: "#95A5A6",
        low: "#3498db",
        medium: "#2ecc71",
        high: "#f1c40f",
        urgent: "#e74c3c",
      },
    },
    footer: {
      // النص الافتراضي في أسفل رسائل البوت (Footer).
      text: "Titan Bot",
      // رابط أيقونة أسفل الرسالة (null = لا توجد أيقونة).
      icon: null,
    },
    // رابط الصورة المصغرة الافتراضية (null = لا توجد صورة).
    thumbnail: null,
    author: {
      // معلومات كاتب الرسالة الافتراضية.
      name: null,
      icon: null,
      url: null,
    },
  },

  // =========================
  // ECONOMY SETTINGS (إعدادات نظام الاقتصاد)
  // =========================
  economy: {
    currency: {
      // الاسم المفرد للعملة.
      name: "عملة",
      // الاسم الجمع للعملة.
      namePlural: "عملات",
      // رمز العملة الذي يظهر بجانب الرصيد.
      symbol: "$",
    },

    // الرصيد الافتتاحي للمستخدمين الجدد.
    startingBalance: 0,

    // السعة القصوى للبنك قبل الترقية (إذا كانت الترقيات مستخدمة).
    baseBankCapacity: 100000,

    // قيمة المكافأة اليومية (Daily).
    dailyAmount: 100,

    // نطاق الأرباح العشوائية لأمر العمل (Work).
    workMin: 10,
    workMax: 100,

    // نطاق الأرباح العشوائية لأمر الشحاذة (Beg).
    begMin: 5,
    begMax: 50,

    // وقت الانتظار للأوامر (بالملي ثانية).
    cooldowns: {
      daily: 24 * 60 * 60 * 1000,
      work: 60 * 60 * 1000,
      crime: 2 * 60 * 60 * 1000,
      rob: 4 * 60 * 60 * 1000,
    },

    // نسبة النجاح عند السرقة (0.4 = 40%).
    robSuccessRate: 0.4,

    // مدة السجن عند فشل السرقة (بالملي ثانية).
    // 3600000 = ساعة واحدة.
    robFailJailTime: 3600000,
  },

  // =========================
  // SHOP SETTINGS (إعدادات المتجر)
  // =========================
  // يمكنك إضافة إعدادات المتجر الافتراضية هنا عند الحاجة.
  shop: {

  },

  // =========================
  // TICKET SYSTEM (نظام التذاكر)
  // =========================
  tickets: {
    // معرف القسم (Category ID) الذي يتم إنشاء التذاكر الجديدة فيه (null = بدون قسم محدد).
    defaultCategory: null,

    // معرفات الرتب المسموح لها بإدارة ودعم التذاكر.
    supportRoles: [],

    // خيارات الأولوية التي يمكن للمستخدمين أو الطاقم تعيينها.
    priorities: {
      none: {
        emoji: "⚪",
        color: "#95A5A6",
        label: "لا يوجد",
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

    // الأولوية الافتراضية للتذاكر الجديدة.
    defaultPriority: "none",

    // معرف القسم الذي يتم أرشفة التذاكر المغلقة فيه.
    archiveCategory: null,

    // معرف الروم (Channel ID) الذي تُرسل إليه سجلات التذاكر (Logs).
    logChannel: 1521241074712969236,
  },

  // =========================
  // GIVEAWAY SETTINGS (إعدادات الجيف اواي)
  // =========================
  giveaways: {
    // المدة الافتراضية للجيف اواي بالملي ثانية.
    // 86400000 = 24 ساعة.
    defaultDuration: 86400000,

    // عدد الفائزين المسموح به.
    minimumWinners: 1,
    maximumWinners: 10,

    // نطاق المدة المسموح بها للجيف اواي بالملي ثانية.
    // 300000 = 5 دقائق.
    minimumDuration: 300000,
    // 2592000000 = 30 يوماً.
    maximumDuration: 2592000000,

    // معرفات الرتب المسموح لها بإنشاء الجيف اواي.
    allowedRoles: [],

    // معرفات الرتب المستثناة من قيود الجيف اواي.
    bypassRoles: [],
  },

  // =========================
  // BIRTHDAY SETTINGS (إعدادات أعياد الميلاد)
  // =========================
  birthday: {
    // الرتبة التي تُعطى للمستخدم في يوم ميلاده.
    defaultRole: null,

    // معرف الروم الذي تُنشر فيه تهنئة عيد الميلاد.
    announcementChannel: null,

    // المنطقة الزمنية المستخدمة لحساب التواريخ.
    timezone: "UTC",
  },

  // =========================
  // VERIFICATION SETTINGS (إعدادات التفعيل / التحقق)
  // =========================
  verification: {
    // الرسالة التي تظهر في لوحة التحقق والتفعيل.
    defaultMessage: "اضغط على الزر أدناه لتفعيل حسابك والحصول على صلاحية الدخول للسيرفر!",

    // النص المكتوب على زر التفعيل.
    defaultButtonText: "تفعيل الحساب",

    // سلوك التحقق والتفعيل التلقائي.
    autoVerify: {
      // كيف يقرر نظام التفعيل التلقائي الموافقة الفورية:
      // - "none"        = يتم تفعيل الجميع فوراً وتلقائياً
      // - "account_age" = يجب أن يكون الحساب أقدم من عدد معين من الأيام
      // - "server_size" = التفعيل التلقائي للجميع فقط في السيرفرات الصغيرة
      defaultCriteria: "none",

      // الأيام المستخدمة عندما تكون شروط التفعيل مبنية على عمر الحساب `account_age`.
      defaultAccountAgeDays: 7,

      // الحد الأقصى لعدد الأعضاء عند اختيار تفعيل بحجم السيرفر `server_size`.
      // مثال: 1000 تعني تفعيل تلقائي إذا كان السيرفر يحتوي على أقل من 1000 عضو.
      serverSizeThreshold: 1000,

      // الحدود الآمنة المسموح بها لمتطلبات عمر الحساب.
      // 1 = الحد الأدنى بالأيام، 365 = الحد الأقصى بالأيام.
      minAccountAge: 1,
      maxAccountAge: 365,

      // إذا تم تفعيلها، سيتلقى المستخدم رسالة في الخاص (DM) بعد التفعيل الناجح.
      sendDMNotification: true,

      // وصف مقروء ومفهوم لكل وضع من أوضاع شروط التفعيل.
      criteria: {
        account_age: "يجب أن يكون الحساب أقدم من عدد الأيام المحدد",
        server_size: "تفعيل كافة المستخدمين إذا كان السيرفر يحتوي على أقل من 1000 عضو",
        none: "تفعيل كافة المستخدمين فوراً"
      }
    },

    // الحد الأدنى للوقت بين محاولات التفعيل (بالملي ثانية).
    // 5000 = 5 ثوانٍ.
    verificationCooldown: 5000,

    // الحد الأقصى للمحاولات الفاشلة المسموح بها داخل النافذة الزمنية أدناه.
    maxVerificationAttempts: 3,

    // النافذة الزمنية لحساب عدد المحاولات (بالملي ثانية).
    // 60000 = دقيقة واحدة.
    attemptWindow: 60000,

    // حدود الأمان للذاكرة المؤقتة (تساعد في تجنب استهلاك رامات السيرفر).
    maxCooldownEntries: 10000,
    maxAttemptEntries: 10000,
    // عدد مرات تنظيف سجلات الانتظار والمحاولات (بالملي ثانية).
    // 300000 = 5 دقائق.
    cooldownCleanupInterval: 300000,
    // الحد الأقصى لحجم بيانات الميتاداتا لسجلات المراجعة والتدقيق (بالبايت).
    maxAuditMetadataBytes: 4096,
    // الحد الأقصى لعدد سجلات التدقيق المحفوظة في الذاكرة.
    maxInMemoryAuditEntries: 1000,
    // إذا تم تفعيلها، سيتم تسجيل كل عملية تفعيل وتوثيقها.
    logAllVerifications: true,
    // إذا تم تفعيلها، سيتم الاحتفاظ بتاريخ سجلات تدقيق التفعيل.
    keepAuditTrail: true,
  },

  // =========================
  // WELCOME / GOODBYE MESSAGES (رسائل الترحيب والمغادرة)
  // =========================
  welcome: {
    // قالب الترحيب عند انضمام عضو جديد.
    // المتغيرات المتاحة: {user}، {server}، {memberCount}
    defaultWelcomeMessage:
      "أهلاً بك {user} في سيرفر {server}! أصبحنا الآن {memberCount} عضواً!",
    // قالب المغادرة عند خروج عضو من السيرفر.
    // المتغيرات المتاحة: {user}، {memberCount}
    defaultGoodbyeMessage:
      "غادر {user} السيرفر. أصبحنا الآن {memberCount} عضواً.",
    // معرف روم رسائل الترحيب الافتراضي.
    defaultWelcomeChannel: null,
    // معرف روم رسائل المغادرة الافتراضي.
    defaultGoodbyeChannel: null,
  },

  // =========================
  // COUNTER CHANNELS (رومات الإحصائيات / العدادات)
  // =========================
  counters: {
    defaults: {
      // القوالب الافتراضية لتسمية ووصف العدادات.
      name: "عداد {name}",
      description: "عداد {name} الخاص بالسيرفر",
      // نوع الروم المستخدم للعدادات (غالباً "voice" صوتي).
      type: "voice",
      // صيغة اسم الروم. يتم استبدال `{count}` تلقائياً بالعدد الإجمالي.
      channelName: "{name}-{count}",
    },
    permissions: {
      // الصلاحيات الممنوعة افتراضياً عن روم العداد.
      deny: ["VIEW_CHANNEL"],
      // الصلاحيات المسموحة افتراضياً لروم العداد.
      allow: ["VIEW_CHANNEL", "CONNECT", "SPEAK"],
    },
    messages: {
      // رسائل الاستجابة الافتراضية لعمليات العدادات.
      created: "✅ تم إنشاء العداد **{name}** بنجاح",
      deleted: "🗑️ تم حذف العداد **{name}** بنجاح",
      updated: "🔄 تم تحديث العداد **{name}** بنجاح",
    },
    types: {
      // أنواع العدادات المدمجة وطريقة احتساب كل عداد.
      members: {
        name: "👥 الأعضاء",
        description: "إجمالي عدد الأعضاء في السيرفر",
        getCount: (guild) => guild.memberCount.toString(),
      },
      bots: {
        name: "🤖 البوتات",
        description: "إجمالي حسابات البوتات في السيرفر",
        getCount: (guild) =>
          guild.members.cache.filter((m) => m.user.bot).size.toString(),
      },
      members_only: {
        name: "👤 البشر",
        description: "إجمالي الأعضاء الحقيقيين (وليس البوتات)",
        getCount: (guild) =>
          guild.members.cache.filter((m) => !m.user.bot).size.toString(),
      },
    },
  },

  // =========================
  // GENERIC BOT MESSAGES (رسائل البوت العامة)
  // =========================
  messages: {
    noPermission: "ليست لديك الصلاحية الكافية لاستخدام هذا الأمر.",
    cooldownActive: "الرجاء الانتظار {time} قبل استخدام هذا الأمر مجدداً.",
    errorOccurred: "حدث خطأ أثناء تنفيذ هذا الأمر.",
    missingPermissions:
      "البوت يفتقر إلى الصلاحيات المطلوبة لتنفيذ هذا الإجراء.",
    commandDisabled: "تم تعطيل هذا الأمر حالياً.",
    maintenanceMode: "البوت في وضع الصيانة حالياً.",
  },

  // =========================
  // FEATURE TOGGLES (تفعيل وإلغاء الميزات)
  // =========================
  // قم بتغيير أي ميزة إلى `false` لتعطيلها بشكل كامل في البوت.
  features: {
    // الأنظمة الأساسية.
    economy: true,      // الاقتصاد
    leveling: true,     // اللفلات والفلر
    moderation: true,   // الإشراف والتحذيرات
    logging: true,      // السجلات واللوق
    welcome: true,      // الترحيب

    // أنظمة التفاعل المجتمعي.
    tickets: true,      // التذاكر
    giveaways: true,    // الجيف اواي
    birthday: true,     // أعياد الميلاد
    counter: true,      // العدادات الإحصائية

    // أنظمة الحماية والخدمة الذاتية.
    verification: true, // التفعيل والتحقق
    reactionRoles: true,// رتب التفاعل
    joinToCreate: true, // رومات صوتية مؤقتة

    // أدوات عامة ووحدات ترفيهية.
    voice: true,        // الصوتيات
    search: true,       // البحث
    tools: true,        // الأدوات
    utility: true,      // الخدمات العامة
    community: true,    // المجتمع
    fun: true,          // الترفيه والالعاب
    music: true,        // الموسيقى
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
    errors.push("توكن البوت مطلوب (عبر متغير البيئة DISCORD_TOKEN أو TOKEN)");
  }

  if (!process.env.CLIENT_ID) {
    errors.push("معرف العميل (Client ID) مطلوب (عبر متغير البيئة CLIENT_ID)");
  }

  if (process.env.NODE_ENV === 'production') {
    const hasConnectionUrl = Boolean(process.env.POSTGRES_URL || process.env.DATABASE_URL);

    if (!hasConnectionUrl) {
      if (!process.env.POSTGRES_HOST) {
        errors.push("اتصال PostgreSQL مطلوب في بيئة الإنتاج (قم بتعيين DATABASE_URL/POSTGRES_URL أو POSTGRES_HOST)");
      }
      if (!process.env.POSTGRES_USER) {
        errors.push("مستخدم PostgreSQL مطلوب في بيئة الإنتاج (قم بتعيين DATABASE_URL/POSTGRES_URL أو POSTGRES_USER)");
      }
      if (!process.env.POSTGRES_PASSWORD) {
        errors.push("كلمة مرور PostgreSQL مطلوبة في بيئة الإنتاج (قم بتعيين DATABASE_URL/POSTGRES_URL أو POSTGRES_PASSWORD)");
      }
    }
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
