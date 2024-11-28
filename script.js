  window.addEventListener('scroll', function () {
      const navbar = document.querySelector('.nav');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
    
  // Disable scroll restoration and force scroll to top on page load
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  window.addEventListener("load", function () {
    window.scrollTo(0, 0); // Ensure the page starts at the top
  });

  // Create an Intersection Observer to trigger sliding effect each time it enters the viewport
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Get the delay from the data-delay attribute
          const delay = entry.target.getAttribute('data-delay');
          
          // Add the 'show' class with the delay applied to trigger the animation
          entry.target.style.animationDelay = `${delay}s`;
          entry.target.classList.add('show');
        } else {
          // Remove 'show' class to reset the card position when leaving viewport
          entry.target.classList.remove('show');
        }
      });
    }, {
      threshold: 0.5  // Trigger when 50% of the card is in view
    });

    // Observe each flip card
    const cards = document.querySelectorAll('.flip-card');
    cards.forEach(card => {
      observer.observe(card);
    });

    var items = document.querySelectorAll(".timeline li");

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        if(!items[i].classList.contains("in-view")){
          items[i].classList.add("in-view");
        }
      } else if(items[i].classList.contains("in-view")) {
          items[i].classList.remove("in-view");
      }
    }
  }
  
  window.addEventListener("load", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

  // Get the hamburger and the menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('ul');

// Add click event listener to toggle 'active' class
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active'); // Toggle active class for hamburger
  navMenu.style.display =
    navMenu.style.display === 'flex' ? 'none' : 'flex'; // Show/Hide menu
});
