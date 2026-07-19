const menuBtn = document.querySelector('.menu-btn');

menuBtn?.addEventListener('click', () => {
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !isExpanded);

});
