import { initJobListings } from './jobs.js';
import { initSearchFilters } from './search.js';

// Initialize the application when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('SaludJobs Application Initialized');
  
  // Initialize job listings
  initJobListings();
  
  // Initialize search and filter functionality
  initSearchFilters();
  
  // Add event listener to the "Publicar un trabajo" button
  const publishJobBtn = document.querySelector('.btn-outline');
  if (publishJobBtn) {
    publishJobBtn.addEventListener('click', function() {
      alert('Funcionalidad para publicar trabajos en desarrollo.');
    });
  }

  // Handle view info buttons
  const viewInfoButtons = document.querySelectorAll('.btn-info');
  viewInfoButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Get the closest job card to this button
      const jobCard = this.closest('.job-card');
      const jobTitle = jobCard.querySelector('.job-title').textContent;
      const companyName = jobCard.querySelector('.company-name').textContent;
      
      alert(`Detalles para: ${jobTitle} en ${companyName}\nFuncionalidad en desarrollo.`);
    });
  });
});