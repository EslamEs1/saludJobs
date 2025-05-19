/**
 * Initialize search and filter functionality
 */
export function initSearchFilters() {
  const searchBtn = document.getElementById('searchBtn');
  const specialtySelect = document.getElementById('specialtySelect');
  const locationInput = document.querySelector('.search-input');
  const salarySelect = document.getElementById('salarySelect');
  
  if (!searchBtn || !specialtySelect || !locationInput || !salarySelect) return;
  
  // Event listener for filter button
  searchBtn.addEventListener('click', function() {
    const specialtyValue = specialtySelect.value;
    const locationValue = locationInput.value.trim().toLowerCase();
    const salaryValue = salarySelect.value;
    
    filterJobs(specialtyValue, locationValue, salaryValue);
  });
  
  // Filter jobs based on selected criteria
  function filterJobs(specialty, location, salary) {
    const jobCards = document.querySelectorAll('.job-card');
    
    // Show all job cards initially
    jobCards.forEach(card => {
      card.style.display = 'block';
    });
    
    // Apply filters
    jobCards.forEach(card => {
      const jobSpecialty = card.querySelector('.job-details .job-tag:nth-child(1) .tag-text').textContent.toLowerCase();
      const jobLocation = card.querySelector('.job-details .job-tag:nth-child(4) .tag-text').textContent.toLowerCase();
      const jobSalary = card.querySelector('.job-details .job-tag:nth-child(3) .tag-text').textContent;
      
      let showCard = true;
      
      // Check specialty filter
      if (specialty && !jobSpecialty.includes(specialty.toLowerCase())) {
        showCard = false;
      }
      
      // Check location filter
      if (location && !jobLocation.includes(location)) {
        showCard = false;
      }
      
      // Check salary filter (this is more complex and would need proper parsing)
      // This is a simplified version
      if (salary) {
        if (salary === '1-2' && !jobSalary.includes('1.')) {
          showCard = false;
        } else if (salary === '2-3' && !jobSalary.includes('2.')) {
          showCard = false;
        } else if (salary === '3-5' && !jobSalary.includes('4.')) {
          showCard = false;
        } else if (salary === '5+' && !parseFloat(jobSalary.match(/\d+\.\d+/)[0]) >= 5) {
          showCard = false;
        }
      }
      
      // Update card visibility
      card.style.display = showCard ? 'block' : 'none';
    });
    
    // Update job count
    const visibleJobs = document.querySelectorAll('.job-card[style="display: block;"]').length;
    const jobCountEl = document.querySelector('.section-title');
    if (jobCountEl) {
      jobCountEl.textContent = `${visibleJobs} Ofertas De Trabajo`;
    }
  }
}