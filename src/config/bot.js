import { logger } from '../utils/logger.js';

export const botConfig = {
  // =========================
  // حالة البوت (ما يظهر للمستخدمين أسفل اسم البوت)
  // =========================
  // خيارات الحالة `status`:
  // - "online"    = نقطة خضراء (متصل)
  // - "idle"      = قمر أصفر (خامل)
  // - "dnd"       = دائرة حمراء (الرجاء عدم الإزعاج)
  // - "invisible" = يظهر كأنه غير متصل
  presence: {
    // الحالة الافتراضية للبوت على ديسكورد.
    status: "online",

    // سطر النشاط الذي يظهر أسفل اسم البوت.
    // أرقام أنواع الأنشطة من ديسكورد:
    // 0 = يلعب (Playing)
    // 1 = يبث (Streaming)
    // 2 = يستمع إلى (Listening)
    // 3 = يشاهد (Watching)
    // 4 = مخصص (Custom)
    // 5 = ينافس في (Competing)
    activities: [
      {
        name: "Custom Status", // مطلوب من ديسكورد API، لا يظهر للمستخدمين
        state: "لابوبوووو",     // هذا ما يظهر للمستخدمين بالفعل
        type: 4,               // مخصص
      },
    ],
  },

  // =========================
  // سلوك الأوامر
  // =========================
  commands: {
    // المعرفات الرقمية (IDs) لملاّك البوت (مفصولة بفاصلة في متغير البيئة OWNER_IDS).
    // يمكن للملاّك الوصول إلى أوامر الإدارة العليا للبوت.
    owners: process.env.OWNER_IDS?.split(",").map((id) => id.trim()).filter(Boolean) || [],

    // وقت الانتظار الافتراضي بين استخدام الأوامر (بالثواني).
    defaultCooldown: 3,

    // إذا تم تفعيلها (true)، سيتم حذف الأوامر القديمة قبل إعادة تسجيلها.
    deleteCommands: false,

    // معرف السيرفر التجريبي الاختياري للتوافق؛ لا يُستخدم لتسجيل الأوامر العامة.
    testGuildId: process.env.TEST_GUILD_ID,

    // عند تفعيلها (أو عندما MAINTENANCE_MODE=true)، يمكن لملاّك البوت فقط استخدام الأوامر.
    maintenanceMode: process.env.MAINTENANCE_MODE === "true",

    // البادئة (Prefix) للأوامر النصية التقليدية (مثال: "!" لأمر "!ping").
    // يدعم البوت الأوامر المائلة (Slash Commands) والأوامر النصية بالبادئة معاً.
    prefix: process.env.PREFIX || "!",
  },

  // =========================
  // نظام التقديمات (الطلبات)
  // =========================
  applications: {
    // الأسئلة الافتراضية التي تظهر للمستخدم عند تعبئة طلب التقديم.
    defaultQuestions: [
      { question: "ما هو اسمك؟", required: true },
      { question: "كم عمرك؟", required: true },
      { question: "لماذا ترغب في الانضمام إلينا؟", required: true },
    ],

    // ألوان الرسائل المدمجة (Embeds) حسب حالة الطلب.
    statusColors: {
      pending: "#FFA500",  // قيد الانتظار
      approved: "#00FF00", // مقبول
      denied: "#FF0000",   // مرفوض
    },

    // المدة التي يجب على المستخدم انتظارها قبل تقديم طلب آخر (بالساعات).
    applicationCooldown: 24,

    // حذف الطلبات المرفوضة تلقائيًا بعد مرور هذه الأيام.
    deleteDeniedAfter: 7,

    // حذف الطلبات المقبولة تلقائيًا بعد مرور هذه الأيام.
    deleteApprovedAfter: 30,

    // معرفات الرتب (Role IDs) المسموح لها بإدارة التقديمات والطلبات.
    managerRoles: [], // سيتم ملؤها من البيئة أو قاعدة البيانات
  },

  // =========================
  // ألوان وهواية الرسائل المدمجة (EMBEDS)
  // =========================
  // تنبيه: هذا هو المصدر الرئيسي والوحيد لجميع ألوان البوت
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

      // ألوان الخدمات المحايدة.
      light: "#FFFFFF",
      dark: "#202225",
      gray: "#99AAB5",

      // اختصارات ألوان ديسكورد الرسمية.
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

      // ألوان تحديد أولوية التذاكر.
      priority: {
        none: "#95A5A6",
        low: "#3498db",
        medium: "#2ecc71",
        high: "#f1c40f",
        urgent: "#e74c3c",
      },
    },
    footer: {
      // النص الافتراضي في تذييل رسائل البوت المدمجة.
      text: "تايتان بوت | Titan Bot",
      // رابط أيقونة التذييل (null = بدون أيقونة).
      icon: null,
    },
    // رابط الصورة المصغرة الافتراضية للرسائل المدمجة (null = بدون صورة مصغرة).
    thumbnail: null,
    author: {
      // مربع كاتب الرسالة الافتراضي والاختياري.
      name: null,
      icon: null,
      url: null,
    },
  },

  // =========================
  // إعدادات النظام الاقتصادي
  // =========================
  economy: {
    currency: {
      // اسم العملة المفرد.
      name: "عملة",
      // اسم العملة للجمع.
      namePlural: "عملات",
      // رمز العملة الذي يظهر بجانب الرصيد.
      symbol: "$",
    },

    // الرصيد الافتتاحي للمستخدمين الجدد.
    startingBalance: 0,

    // الحد الأقصى لسعة البنك قبل الترقية (في حال استخدام الترقيات).
    baseBankCapacity: 100000,

    // قيمة المكافأة اليومية (Daily).
    dailyAmount: 100,

    // نطاق أرباح أمر العمل (Work) العشوائي.
    workMin: 10,
    workMax: 100,

    // نطاق أرباح أمر التسول (Beg) العشوائي.
    begMin: 5,
    begMax: 50,

    // أوقات الانتظار للأوامر الاقتصادي (بالملي ثانية).
    cooldowns: {
      daily: 24 * 60 * 60 * 1000, // 24 ساعة
      work: 60 * 60 * 1000,       // ساعة واحدة
      crime: 2 * 60 * 60 * 1000,  // ساعتان
      rob: 4 * 60 * 60 * 1000,    // 4 ساعات
    },

    // نسبة نجاح السرقة (0.4 = 40%).
    robSuccessRate: 0.4,

    // مدة السجن بعد فشل السرقة (بالملي ثانية).
    // 3600000 = ساعة واحدة.
    robFailJailTime: 3600000,
  },

  // =========================
  // إعدادات المتجر
  // =========================
  // أضف قيم المتجر الافتراضية هنا عند الحاجة.
  shop: {

  },

  // =========================
  // نظام التذاكر (Tickets)
  // =========================
  tickets: {
    // معرف الفئة (Category ID) التي يتم إنشاء التذاكر الجديدة تحتها (null = بدون فئة مجبرة).
    defaultCategory: null,

    // معرفات الرتب المسموح لها بإدارة ودعم التذاكر.
    supportRoles: [],

    // خيارات الأولوية التي يمكن للمستخدمين أو طاقم العمل تعيينها.
    priorities: {
      none: {
        emoji: "⚪",
        color: "#95A5A6",
        label: "بدون أولوية",
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

    // معرف الفئة التي يتم أرشفة التذاكر المغلقة فيها.
    archiveCategory: null,

    // معرف الروم (Channel ID) الذي تُرسل إليه سجلات (Logs) التذاكر.
    logChannel: 1521241074712969236,
  },

  // =========================
  // إعدادات المسابقات (Giveaways)
  // =========================
  giveaways: {
    // مدة المسابقة الافتراضية بالملي ثانية.
    // 86400000 = 24 ساعة.
    defaultDuration: 86400000,

    // نطاق عدد الفائزين المسموح به.
    minimumWinners: 1,
    maximumWinners: 10,

    // نطاق مدة المسابقة المسموح بها بالملي ثانية.
    // 300000 = 5 دقائق.
    minimumDuration: 300000,
    // 2592000000 = 30 يوماً.
    maximumDuration: 2592000000,

    // معرفات الرتب المسموح لها بإنشاء المسابقات.
    allowedRoles: [],

    // معرفات الرتب التي تتخطى قيود وشروط المسابقات.
    bypassRoles: [],
  },

  // =========================
  // إعدادات أعياد الميلاد
  // =========================
  birthday: {
    // الرتبة الممنوحة للمستخدم في يوم ميلاده.
    defaultRole: null,

    // معرف الروم الذي تُنشر فيه تهنئات أعياد الميلاد.
    announcementChannel: null,

    // المنطقة الزمنية المستخدمة لحساب تواريخ أعياد الميلاد.
    timezone: "UTC",
  },

  // =========================
  // إعدادات نظام التوثيق (Verification)
  // =========================
  verification: {
    // الرسالة الموضحة عند نشر لوحة التوثيق.
    defaultMessage: "اضغط على الزر أدناه لتوثيق حسابك والحصول على صلاحية دخول السيرفر!",

    // النص المكتوب على زر التوثيق.
    defaultButtonText: "توثيق الحساب",

    // سلوك التوثيق التلقائي.
    autoVerify: {
      // كيف يقرر نظام التوثيق التلقائي من يتم قبوله مباشرة:
      // - "none"        = يتم توثيق الجميع تلقائياً وفوراً
      // - "account_age" = يجب أن يكون عمر الحساب أقدم من الأيام المحددة
      // - "server_size" = التوثيق التلقائي للجميع في السيرفرات الصغيرة فقط
      defaultCriteria: "none",

      // عدد الأيام المستخدمة عندما تكون شروط التوثيق `account_age`.
      defaultAccountAgeDays: 7,

      // الحد الأقصى للأعضاء عندما تكون شروط التوثيق `server_size`.
      // مثال: 1000 تعني التوثيق التلقائي إذا كان السيرفر يحتوي على أقل من 1000 عضو.
      serverSizeThreshold: 1000,

      // الحدود الأمنية المسموح بها لمتطلبات عمر الحساب بالآيام.
      // 1 = الحد الأدنى بالأيام، 365 = الحد الأقصى بالأيام.
      minAccountAge: 1,
      maxAccountAge: 365,

      // إذا كانت true، يتلقى المستخدم رسالة خاصة (DM) بعد التوثيق بنجاح.
      sendDMNotification: true,

      // وصف مقروء لكل نوع من أنواع شروط التوثيق التلقائي.
      criteria: {
        account_age: "يجب أن يكون الحساب أقدم من الأيام المحددة",
        server_size: "جميع المستخدمين إذا كان السيرفر يحتوي على أقل من 1000 عضو",
        none: "جميع المستخدمين فوراً ودون شروط"
      }
    },

    // الحد الأدنى للوقت بين محاولات التوثيق المتتالية (بالملي ثانية).
    // 5000 = 5 ثوانٍ.
    verificationCooldown: 5000,

    // الحد الأقصى للمحاولات الفاشلة المسموح بها خلال النافذة الزمنية أدناه.
    maxVerificationAttempts: 3,

    // النافذة الزمنية لحساب عدد المحاولات (بالملي ثانية).
    // 60000 = دقيقة واحدة.
    attemptWindow: 60000,

    // حدود السلامة في الذاكرة المؤقتة (تمنع التضخم العشوائي للذاكرة).
    maxCooldownEntries: 10000,
    maxAttemptEntries: 10000,
    // فترات تنظيف الذاكرة لقوائم الانتظار والمحاولات (بالملي ثانية).
    // 300000 = 5 دقائق.
    cooldownCleanupInterval: 300000,
    // الحد الأقصى لحجم بيانات سجل التدقيق (بالبايت).
    maxAuditMetadataBytes: 4096,
    // الحد الأقصى لسجلات التدقيق المحفوظة في الذاكرة.
    maxInMemoryAuditEntries: 1000,
    // إذا كانت true، يتم تسجيل كل عملية توثيق تجري.
    logAllVerifications: true,
    // إذا كانت true، يتم الاحتفاظ بسجل تاريخ التدقيق للتوثيق.
    keepAuditTrail: true,
  },

  // =========================
  // رسائل الترحيب والمغادرة (WELCOME / GOODBYE)
  // =========================
  welcome: {
    // قالب الترحيب الذي يُنشر عند انضمام عضو جديد.
    // المتغيرات المدعومة: {user}, {server}, {memberCount}
    defaultWelcomeMessage:
      "أهلاً بك يا {user} في سيرفر {server}! أصبح عددنا الآن {memberCount} عضواً!",
    // قالب المغادرة الذي يُنشر عند خروج العضو.
    // المتغيرات المدعومة: {user}, {memberCount}
    defaultGoodbyeMessage:
      "غادرنا {user} من السيرفر. أصبح عددنا الآن {memberCount} عضواً.",
    // معرف الروم الخاص برسائل الترحيب.
    defaultWelcomeChannel: null,
    // معرف الروم الخاص برسائل المغادرة.
    defaultGoodbyeChannel: null,
  },

  // =========================
  // رومات العدادات الإحصائية (COUNTER CHANNELS)
  // =========================
  counters: {
    defaults: {
      // القوالب الافتراضية لأسماء وأوصاف العدادات.
      name: "عداد {name}",
      description: "عداد {name} الخاص بالسيرفر",
      // نوع الروم المستخدم للعدادات (غالباً "voice" روم صوتي).
      type: "voice",
      // تنسيق اسم الروم. يتم استبدال `{count}` بالرقم تلقائياً.
      channelName: "{name}-{count}",
    },
    permissions: {
      // الصلاحيات الممنوعة افتراضيًا عن روم العداد.
      deny: ["VIEW_CHANNEL"],
      // الصلاحيات المسموح بها افتراضيًا لروم العداد.
      allow: ["VIEW_CHANNEL", "CONNECT", "SPEAK"],
    },
    messages: {
      // رسائل الاستجابة الافتراضية لعمليات العدادات.
      created: "✅ تم إنشاء العداد **{name}** بنجاح",
      deleted: "🗑️ تم حذف العداد **{name}** بنجاح",
      updated: "🔄 تم تحديث العداد **{name}** بنجاح",
    },
    types: {
      // أنواع العدادات المدمجة وطريقة حساب كل عداد.
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
        description: "إجمالي الأعضاء الحقيقيين (غير البوتات)",
        getCount: (guild) =>
          guild.members.cache.filter((m) => !m.user.bot).size.toString(),
      },
    },
  },

  // =========================
  // رسائل البوت العامة
  // =========================
  messages: {
    noPermission: "ليست لديك الصلاحية الكافية لاستخدام هذا الأمر.",
    cooldownActive: "الرجاء الانتظار {time} قبل محاولة استخدام هذا الأمر مجدداً.",
    errorOccurred: "حدث خطأ غير متوقع أثناء تنفيذ هذا الأمر.",
    missingPermissions: "البوت يفتقر إلى الصلاحيات المطلوبة لتنفيذ هذا الإجراء.",
    commandDisabled: "تم تعطيل هذا الأمر حالياً من قبل الإدارة.",
    maintenanceMode: "البوت في وضع الصيانة حالياً، يرجى المحاولة لاحقاً.",
  },

  // =========================
  // تفعيل وإلغاء الميزات والأنظمة
  // =========================
  // قم بتغيير أي ميزة إلى `false` لتعطيلها بالكامل على مستوى البوت.
  features: {
    // الأنظمة الأساسية.
    economy: true,        // الاقتصاد
    leveling: true,       // المستويات والتفاعل
    moderation: true,     // الإشراف والمودريشن
    logging: true,        // السجلات واللوق
    welcome: true,        // الترحيب والمغادرة

    // أنظمة التفاعل المجتمعي.
    tickets: true,        // التذاكر
    giveaways: true,      // المسابقات
    birthday: true,       // أعياد الميلاد
    counter: true,        // العدادات الإحصائية

    // الأنظمة الأمنية والخدمات الذاتية.
    verification: true,   // التوثيق
    reactionRoles: true,  // رتب التفاعل
    joinToCreate: true,   // رومات مؤقتة (ادخل لإنشاء روم)

    // وحدات الأدوات والترفيه العامة.
    voice: true,          // الصوتيات
    search: true,         // البحث
    tools: true,          // الأدوات
    utility: true,        // الخدمات العامة
    community: true,      // المجتمع
    fun: true,            // الترفيه والألعاب
    music: true,          // الموسيقى
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
    errors.push("رمز البوت (Token) مطلوب (عبر متغير البيئة DISCORD_TOKEN أو TOKEN)");
  }

  if (!process.env.CLIENT_ID) {
    errors.push("معرف العميل (Client ID) مطلوب (عبر متغير البيئة CLIENT_ID)");
  }

  if (process.env.NODE_ENV === 'production') {
    // رابط الاتصال الكامل (DATABASE_URL / POSTGRES_URL) يغني عن متطلبات الـ Postgres الأخرى
    const hasConnectionUrl = Boolean(process.env.POSTGRES_URL || process.env.DATABASE_URL);

    if (!hasConnectionUrl) {
      if (!process.env.POSTGRES_HOST) {
        errors.push("مضيق PostgreSQL مطلوب في وضع الإنتاج (قم بتعيين DATABASE_URL/POSTGRES_URL، أو POSTGRES_HOST)");
      }
      if (!process.env.POSTGRES_USER) {
        errors.push("مستخدم PostgreSQL مطلوب في وضع الإنتاج (قم بتعيين DATABASE_URL/POSTGRES_URL، أو POSTGRES_USER)");
      }
      if (!process.env.POSTGRES_PASSWORD) {
        errors.push("كلمة مرور PostgreSQL مطلوبة في وضع الإنتاج (قم بتعيين DATABASE_URL/POSTGRES_URL، أو POSTGRES_PASSWORD)");
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
