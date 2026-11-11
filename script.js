(function () {
  var btn = document.getElementById('lang');
  function apply(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-nl]').forEach(function (el) {
      el.innerHTML = el.getAttribute('data-' + lang);
    });
    btn.textContent = lang === 'nl' ? 'EN' : 'NL';
    // Pages can set their own title per language with data-title-nl / data-title-en on <body>.
    var t = document.body.getAttribute('data-title-' + lang);
    document.title = t || (lang === 'nl'
      ? 'REPAIR – Hoe repareerbaar zijn je spullen eigenlijk?'
      : 'REPAIR – How repairable are your things, really?');
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }
  var saved = 'nl';
  try { saved = localStorage.getItem('lang') || 'nl'; } catch (e) {}
  apply(saved);
  btn.addEventListener('click', function () {
    apply(document.documentElement.lang === 'nl' ? 'en' : 'nl');
  });
})();
