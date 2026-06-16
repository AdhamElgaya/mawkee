/* ===== Mawkee — Internationalization ===== */

const TRANSLATIONS = {
  en: {
    meta: {
      home: {
        title: 'Mawkee | Web Design & Development Agency',
        description: 'Mawkee — We craft stunning websites that drive results. Book a free consultation today.',
      },
      services: {
        title: 'Services | Mawkee',
        description: 'Mawkee services — web design, development, UI/UX strategy, and brand identity for growing businesses.',
      },
      portfolio: {
        title: 'Portfolio | Mawkee',
        description: 'Mawkee portfolio — selected web design and development projects we\'ve delivered for clients.',
      },
    },
    nav: {
      home: 'Home',
      services: 'Services',
      portfolio: 'Portfolio',
      process: 'Process',
      booking: 'Book a Meeting',
      toggleMenu: 'Toggle menu',
      langSwitch: 'عربي',
    },
    hero: {
      badge: 'Available for new projects',
      title: 'We Build <span class="gradient-text">Digital Experiences</span> That Matter',
      subtitle: 'Mawkee is a web design and development agency crafting fast, beautiful, and conversion-focused websites for ambitious brands.',
      btnConsult: 'Book a Free Consultation',
      btnWork: 'View Our Work',
      scroll: 'Scroll',
      statProjects: 'Projects Delivered',
      statSatisfaction: 'Client Satisfaction',
      statExperience: 'Years Experience',
    },
    process: {
      tag: 'How We Work',
      title: 'Our Process',
      desc: 'A proven framework that turns ideas into exceptional digital products.',
      step1Title: 'Discovery',
      step1Desc: 'We learn about your goals, audience, and vision through a collaborative kickoff session.',
      step2Title: 'Design',
      step2Desc: 'Wireframes evolve into high-fidelity mockups. You approve every detail before we write a line of code.',
      step3Title: 'Develop',
      step3Desc: 'Our engineers build your site with clean, scalable code and rigorous testing across all devices.',
      step4Title: 'Launch',
      step4Desc: 'We deploy, optimize, and hand over — with ongoing support to keep your site performing at its best.',
    },
    booking: {
      tag: "Let's Talk",
      title: 'Book a Meeting',
      desc: "Ready to start your project? Pick a date and time that works for you. We'll send a confirmation with a meeting link.",
      feature1: 'Free 30-minute consultation',
      feature2: 'No commitment required',
      feature3: 'Video call via Google Meet or Zoom',
      stepDate: 'Date & Time',
      stepDetails: 'Your Details',
      prevMonth: 'Previous month',
      nextMonth: 'Next month',
      weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      weekdaysFull: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      availableTimes: 'Available Times',
      continue: 'Continue',
      fullName: 'Full Name',
      email: 'Email Address',
      company: 'Company',
      optional: '(optional)',
      message: 'What would you like to discuss?',
      placeholderName: 'John Doe',
      placeholderEmail: 'john@company.com',
      placeholderCompany: 'Your Company',
      placeholderMessage: 'Tell us about your project...',
      back: 'Back',
      confirm: 'Confirm Booking',
      successTitle: 'Meeting Booked!',
      bookAnother: 'Book Another Meeting',
      datetimeAt: 'at',
      successMsg: 'Thanks, <strong>{name}</strong>! We received your meeting request for<br>{day}, {date} {time}.<br><br>We\'ll confirm shortly at <strong>{email}</strong>.',
      submitting: 'Sending…',
      error: 'Something went wrong. Please try again or email us directly.',
      notConfigured: 'Booking is not set up yet. Please contact us directly.',
      slotsNotConfigured: 'Online scheduling is not fully set up yet. Please contact us directly.',
      slotTaken: 'That time was just booked. Please pick another slot.',
      emailInvalidResponse: 'Email service blocked this request. Add localhost (or your domain) in Web3Forms → Allowed Domains.',
    },
    services: {
      tag: 'What We Do',
      title: 'Services Built for Growth',
      desc: 'From concept to launch, we handle every detail so you can focus on your business.',
      s1Title: 'Web Design',
      s1Desc: 'Stunning, user-centered designs that capture your brand identity and engage your audience from the first click.',
      s2Title: 'Development',
      s2Desc: 'Clean, performant code built with modern frameworks. Fast load times, responsive layouts, and rock-solid reliability.',
      s3Title: 'UI/UX Strategy',
      s3Desc: 'Research-driven experiences that guide users naturally toward action. Every pixel serves a purpose.',
      s4Title: 'Brand Identity',
      s4Desc: 'Cohesive visual systems — logos, color palettes, and typography — that make your brand unforgettable.',
      s5Title: 'E-Commerce',
      s5Desc: 'Online stores built to convert — from product pages and checkout flows to inventory and payment integrations.',
      s6Title: 'Maintenance & Support',
      s6Desc: 'Ongoing updates, security patches, and performance monitoring to keep your site running smoothly.',
      ctaTitle: 'Ready to start your project?',
      ctaDesc: "Book a free consultation and let's discuss how we can help your business grow online.",
    },
    portfolio: {
      tag: 'Portfolio',
      title: 'Selected Work',
      desc: "A glimpse of the digital products we've brought to life for clients across industries.",
      cat1: 'E-Commerce',
      p1Title: 'Luxora Store',
      p1Desc: 'Full-stack e-commerce platform with custom checkout flow',
      cat2: 'SaaS',
      p2Title: 'FlowMetrics',
      p2Desc: 'Analytics dashboard for real-time business intelligence',
      cat3: 'Corporate',
      p3Title: 'NovaTech',
      p3Desc: 'Corporate website with CMS and multilingual support',
      cat4: 'Restaurant',
      p4Title: 'Saffron Kitchen',
      p4Desc: 'Restaurant website with online reservations and menu management',
      cat5: 'Portfolio',
      p5Title: 'Studio Elara',
      p5Desc: 'Creative portfolio for a photography and design studio',
      cat6: 'Healthcare',
      p6Title: 'MediCare Plus',
      p6Desc: 'Patient portal with appointment scheduling and telehealth integration',
      ctaTitle: 'Want results like these?',
      ctaDesc: "Let's talk about your project and build something great together.",
    },
    footer: {
      tagline: 'Crafting digital experiences that drive results.',
      rights: '© 2026 Mawkee. All rights reserved.',
      instagram: 'Follow us on Instagram',
    },
  },
  ar: {
    meta: {
      home: {
        title: 'موقعي | وكالة تصميم وتطوير مواقع',
        description: 'موقعي — نصمم مواقع مذهلة تحقق نتائج. احجز استشارة مجانية اليوم.',
      },
      services: {
        title: 'خدماتنا | موقعي',
        description: 'خدمات موقعي — تصميم مواقع، تطوير، استراتيجية UI/UX، وهوية بصرية للأعمال النامية.',
      },
      portfolio: {
        title: 'أعمالنا | موقعي',
        description: 'معرض أعمال موقعي — مشاريع تصميم وتطوير مواقع مختارة قدمناها لعملائنا.',
      },
    },
    nav: {
      home: 'الرئيسية',
      services: 'خدماتنا',
      portfolio: 'أعمالنا',
      process: 'طريقة العمل',
      booking: 'احجز موعد',
      toggleMenu: 'فتح القائمة',
      langSwitch: 'EN',
    },
    hero: {
      badge: 'متاحون لمشاريع جديدة',
      title: 'نبني <span class="gradient-text">تجارب رقمية</span> تُحدث&nbsp;فرقاً',
      subtitle: 'موقعي وكالة تصميم وتطوير مواقع تصنع مواقع سريعة وجميلة ومركّزة على التحويل للعلامات التجارية الطموحة.',
      btnConsult: 'احجز استشارة مجانية',
      btnWork: 'شاهد أعمالنا',
      scroll: 'مرر',
      statProjects: 'مشروع منجز',
      statSatisfaction: 'رضا العملاء',
      statExperience: 'سنوات خبرة',
    },
    process: {
      tag: 'كيف نعمل',
      title: 'منهجيتنا',
      desc: 'إطار عمل مُجرّب يحوّل الأفكار إلى منتجات رقمية استثنائية.',
      step1Title: 'الاكتشاف',
      step1Desc: 'نتعرف على أهدافك وجمهورك ورؤيتك من خلال جلسة تعاونية لبدء المشروع.',
      step2Title: 'التصميم',
      step2Desc: 'تتطور المخططات إلى تصاميم عالية الدقة. توافق على كل التفاصيل قبل كتابة سطر برمجي واحد.',
      step3Title: 'التطوير',
      step3Desc: 'مهندسونا يبنون موقعك بكود نظيف وقابل للتوسع مع اختبار دقيق على جميع الأجهزة.',
      step4Title: 'الإطلاق',
      step4Desc: 'ننشر ونُحسّن ونسلّم — مع دعم مستمر ليبقى موقعك بأفضل أداء.',
    },
    booking: {
      tag: 'لنتحدث',
      title: 'احجز موعداً',
      desc: 'مستعد لبدء مشروعك؟ اختر التاريخ والوقت المناسبين. سنرسل تأكيداً مع رابط الاجتماع.',
      feature1: 'استشارة مجانية لمدة 30 دقيقة',
      feature2: 'بدون أي التزام',
      feature3: 'مكالمة فيديو عبر Google Meet أو Zoom',
      stepDate: 'التاريخ والوقت',
      stepDetails: 'بياناتك',
      prevMonth: 'الشهر السابق',
      nextMonth: 'الشهر التالي',
      weekdays: ['أحد', 'إثن', 'ثلا', 'أرب', 'خمي', 'جمع', 'سبت'],
      weekdaysFull: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
      months: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
      availableTimes: 'الأوقات المتاحة',
      continue: 'متابعة',
      fullName: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      company: 'الشركة',
      optional: '(اختياري)',
      message: 'ماذا تريد أن تناقش؟',
      placeholderName: 'أحمد محمد',
      placeholderEmail: 'ahmed@company.com',
      placeholderCompany: 'اسم شركتك',
      placeholderMessage: 'أخبرنا عن مشروعك...',
      back: 'رجوع',
      confirm: 'تأكيد الحجز',
      successTitle: 'تم حجز الموعد!',
      bookAnother: 'احجز موعداً آخر',
      datetimeAt: 'في',
      successMsg: 'شكراً <strong>{name}</strong>! استلمنا طلب موعدك<br>{day}، {date} {time}<br><br>سنؤكد قريباً على <strong>{email}</strong>.',
      submitting: 'جاري الإرسال…',
      error: 'حدث خطأ. حاول مرة أخرى أو راسلنا مباشرة.',
      notConfigured: 'الحجز غير مفعّل بعد. تواصل معنا مباشرة.',
      slotsNotConfigured: 'جدولة المواعيد غير مفعّلة بالكامل بعد. تواصل معنا مباشرة.',
      slotTaken: 'هذا الموعد محجوز للتو. اختر وقتاً آخر.',
      emailInvalidResponse: 'خدمة البريد رفضت الطلب. أضف localhost (أو نطاقك) في Web3Forms → Allowed Domains.',
    },
    services: {
      tag: 'ماذا نقدم',
      title: 'خدمات مصممة للنمو',
      desc: 'من الفكرة إلى الإطلاق، نتولى كل التفاصيل لتتفرغ لعملك.',
      s1Title: 'تصميم المواقع',
      s1Desc: 'تصاميم مذهلة تركز على المستخدم وتعكس هوية علامتك وتجذب جمهورك من أول نقرة.',
      s2Title: 'التطوير',
      s2Desc: 'كود نظيف وعالي الأداء بأحدث التقنيات. سرعة تحميل، تصميم متجاوب، وموثوقية عالية.',
      s3Title: 'استراتيجية UI/UX',
      s3Desc: 'تجارب مبنية على البحث توجه المستخدمين بشكل طبيعي نحو الهدف. كل بكسل له غرض.',
      s4Title: 'الهوية البصرية',
      s4Desc: 'أنظمة بصرية متكاملة — شعارات، ألوان، وخطوط — تجعل علامتك لا تُنسى.',
      s5Title: 'التجارة الإلكترونية',
      s5Desc: 'متاجر إلكترونية مصممة للتحويل — من صفحات المنتجات إلى الدفع والمخزون.',
      s6Title: 'الصيانة والدعم',
      s6Desc: 'تحديثات مستمرة، تصحيحات أمنية، ومراقبة الأداء ليبقى موقعك يعمل بسلاسة.',
      ctaTitle: 'مستعد لبدء مشروعك؟',
      ctaDesc: 'احجز استشارة مجانية ودعنا نناقش كيف نساعد عملك على النمو أونلاين.',
    },
    portfolio: {
      tag: 'أعمالنا',
      title: 'مشاريع مختارة',
      desc: 'لمحة عن المنتجات الرقمية التي أنجزناها لعملاء في مختلف المجالات.',
      cat1: 'تجارة إلكترونية',
      p1Title: 'متجر لوكسورا',
      p1Desc: 'منصة تجارة إلكترونية متكاملة مع نظام دفع مخصص',
      cat2: 'SaaS',
      p2Title: 'فلو ميتريكس',
      p2Desc: 'لوحة تحليلات للذكاء التجاري في الوقت الفعلي',
      cat3: 'شركات',
      p3Title: 'نوفاتك',
      p3Desc: 'موقع شركات مع نظام إدارة محتوى ودعم متعدد اللغات',
      cat4: 'مطاعم',
      p4Title: 'مطبخ زعفران',
      p4Desc: 'موقع مطعم مع حجوزات أونلاين وإدارة القائمة',
      cat5: 'معرض أعمال',
      p5Title: 'ستوديو إيلارا',
      p5Desc: 'معرض إبداعي لاستوديو تصوير وتصميم',
      cat6: 'رعاية صحية',
      p6Title: 'ميديكير بلس',
      p6Desc: 'بوابة مرضى مع حجز مواعيد وتكامل للطب عن بُعد',
      ctaTitle: 'تريد نتائج مثل هذه؟',
      ctaDesc: 'لنتحدث عن مشروعك ونبني شيئاً رائعاً معاً.',
    },
    footer: {
      tagline: 'نصنع تجارب رقمية تحقق نتائج.',
      rights: '© 2026 موقعي. جميع الحقوق محفوظة.',
      instagram: 'تابعنا على إنستغرام',
    },
  },
};

const PAGE_META_KEYS = {
  'index.html': 'home',
  '': 'home',
  'services.html': 'services',
  'portfolio.html': 'portfolio',
};

let currentLang = localStorage.getItem('mawkee_lang') || 'en';

function t(key) {
  const keys = key.split('.');
  let value = TRANSLATIONS[currentLang];
  for (const k of keys) {
    value = value?.[k];
  }
  return value ?? key;
}

function getLang() {
  return currentLang;
}

function getPageKey() {
  const path = window.location.pathname.split('/').pop() || '';
  return PAGE_META_KEYS[path] || 'home';
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('mawkee_lang', lang);

  const isRtl = lang === 'ar';
  document.documentElement.lang = lang;
  document.documentElement.dir = isRtl ? 'rtl' : 'ltr';

  const pageKey = getPageKey();
  const meta = TRANSLATIONS[lang].meta[pageKey];
  if (meta) {
    document.title = meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.content = meta.description;
  }

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    el.setAttribute('aria-label', t(el.dataset.i18nAria));
  });

  const langOptions = document.querySelectorAll('.lang-option');
  langOptions.forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive);
  });

  const weekdaysEl = document.querySelector('.calendar-weekdays');
  if (weekdaysEl) {
    const weekdays = t('booking.weekdays');
    weekdaysEl.innerHTML = weekdays.map((d) => `<span>${d}</span>`).join('');
  }

  const companyLabel = document.getElementById('companyLabel');
  if (companyLabel) {
    companyLabel.innerHTML = `${t('booking.company')} <span class="optional">${t('booking.optional')}</span>`;
  }

  document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

function initI18n() {
  applyLanguage(currentLang);

  document.querySelectorAll('.lang-option').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.dataset.lang !== currentLang) {
        applyLanguage(btn.dataset.lang);
      }
    });
  });
}

window.t = t;
window.getLang = getLang;
window.applyLanguage = applyLanguage;
window.initI18n = initI18n;
