// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navigation = document.querySelector('.navigation');
  
  if (menuToggle && navigation) {
    menuToggle.addEventListener('click', function() {
      navigation.classList.toggle('active');
    });
  }
});
