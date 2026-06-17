(function () {
  try {
    var match = document.cookie.match(/(?:^|;\s*)mawkee_lang=([^;]*)/);
    var lang = match ? decodeURIComponent(match[1]) : null;
    if (!lang) lang = localStorage.getItem('mawkee_lang');

    if (!lang) {
      document.documentElement.classList.add('lang-choice-pending');
      return;
    }

    document.documentElement.lang = lang;
    if (lang === 'ar') {
      document.documentElement.dir = 'rtl';
    }

    if (lang !== 'en') {
      document.documentElement.classList.add('i18n-pending');
      var style = document.createElement('style');
      style.textContent = 'html.i18n-pending body{visibility:hidden}';
      document.head.appendChild(style);
    }
  } catch (e) {}
})();
