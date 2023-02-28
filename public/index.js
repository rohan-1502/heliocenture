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
const mobNavOpen = document.querySelector('#sidebar');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    mobNavOpen.classList.toggle('ham-open');
});

VirtualSelect.init({ 
    ele: '#service-multiselect' 
  });