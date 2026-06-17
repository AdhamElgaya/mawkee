(function () {
  try {
    var lang = localStorage.getItem('mawkee_lang');
    if (!lang || lang === 'en') return;

    document.documentElement.lang = lang;
    if (lang === 'ar') {
      document.documentElement.dir = 'rtl';
    }

    document.documentElement.classList.add('i18n-pending');
    var style = document.createElement('style');
    style.textContent = 'html.i18n-pending body{visibility:hidden}';
    document.head.appendChild(style);
  } catch (e) {}
})();
