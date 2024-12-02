document.addEventListener('DOMContentLoaded', () => {

    const serviceItems = document.querySelectorAll('.service-item');
  

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
     
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.5 
    });
  

    serviceItems.forEach(item => observer.observe(item));
  });
  