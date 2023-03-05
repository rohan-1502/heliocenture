const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const hamburger = document.querySelector('.hamburger');
const mobNavOpen = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    const visibility = mobNavOpen.getAttribute('data-visible');
    hamburger.classList.toggle('is-active')
    
    if (visibility === "false") {
        mobNavOpen.setAttribute('data-visible', true);
        mobNavOpen.setAttribute('aria-expanded', true);
    } else {
        mobNavOpen.setAttribute('data-visible', false);
        mobNavOpen.setAttribute('aria-expanded', false);
    }
});

mobNavOpen.addEventListener('click', () => {
    hamburger.classList.toggle('is-active')
    mobNavOpen.setAttribute('data-visible', false);
    mobNavOpen.setAttribute('aria-expanded', false);
});