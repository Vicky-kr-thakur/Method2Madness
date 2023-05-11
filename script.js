 //javascript for navigation bar effects on scroll
 window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
  });
  
  //javascript for responsive navigation sidebar menu
  const menuBtn = document.querySelector(".menu-btn");
  const navigation = document.querySelector(".navigation");
  const navigationItems = document.querySelectorAll(".navigation a")
  
  menuBtn.addEventListener("click",  () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
  });
  
  navigationItems.forEach((navigationItem) => {
    navigationItem.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      navigation.classList.remove("active");
    });
  });
  
  //javascript for scroll to top button
  const scrollBtn = document.querySelector(".scrollToTop-btn");
  
  window.addEventListener("scroll", function(){
    scrollBtn.classList.toggle("active", window.scrollY > 500);
  });
  
  //javascript for scroll back to top on click scroll-to-top button
  scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
  
  //javascript for reveal website elements on scroll
  window.addEventListener("scroll", reveal);
  
  function reveal(){
    var reveals = document.querySelectorAll(".reveal");
  
    for(var i = 0; i < reveals.length; i++){
      var windowHeight = window.innerHeight;
      var revealTop = reveals[i].getBoundingClientRect().top;
      var revealPoint = 50;
  
      if(revealTop < windowHeight - revealPoint){
        reveals[i].classList.add("active");
      }
    }
  }

// Add event listener to the document
document.addEventListener('click', function(event) {
  // Check if the clicked element has the class 'read-more-btn'
  if (event.target.classList.contains('read-more-btn')) {
    // Find the closest parent element with the class 'card'
    const card = event.target.closest('.card');

    // Find all the elements with the class 'invisible' within the card
    const invisibleItems = card.querySelectorAll('.invisible');

    // Toggle the visibility of each 'invisible' item
    invisibleItems.forEach(function(item) {
      item.classList.toggle('visible');
    });

    // Find the closest <ul> or <ol> element within the card
    const list = card.querySelector('ul, ol');

    // Toggle the 'with-bullets' class to show/hide bullet numbers
    list.classList.toggle('with-bullets');
  }
});



  
        