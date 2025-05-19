// Sample job data
const jobsData = [
  {
    id: 1,
    title: "Pediatrician",
    company: "Clínica Los Andes",
    isNew: true,
    daysAgo: null,
    specialty: "Pediatría",
    schedule: "Tiempo Parcial",
    salary: "$1.623.500 (Mensual)",
    location: "Cali, Valle del Cauca",
    logoColor: "#3F83F8"
  },
  {
    id: 2,
    title: "General Practitioner",
    company: "Centro Médico Vida Plena",
    isNew: true,
    daysAgo: null,
    specialty: "Medicina General",
    schedule: "Part-time",
    salary: "$1.423.500 - $2.500.000 (Mensual)",
    location: "Bogotá, Cundinamarca",
    logoColor: "#3F83F8"
  },
  {
    id: 3,
    title: "Telemedicine Doctor",
    company: "Salud Virtual Colombia",
    isNew: false,
    daysAgo: 3,
    specialty: "Family Medicine",
    schedule: "Full-time",
    salary: "$1.423.500 (Mensual)",
    location: "Remote",
    logoColor: "#3F83F8"
  },
  {
    id: 4,
    title: "Cardiologist",
    company: "Clínica Corazón Sano",
    isNew: false,
    daysAgo: 3,
    specialty: "Cardiology",
    schedule: "Full-time",
    salary: "$4.623.500 (Mensual)",
    location: "Medellín, Antioquia",
    logoColor: "#3F83F8"
  },
  {
    id: 5,
    title: "Emergency Room Physician",
    company: "Hospital del Norte",
    isNew: false,
    daysAgo: 12,
    specialty: "Emergency Medicine",
    schedule: "Part-time",
    salary: "$4.423.500 (Mensual)",
    location: "Barranquilla, Atlántico",
    logoColor: "#3F83F8"
  }
];

/**
 * Create HTML for job card
 * @param {Object} job - Job data object
 * @returns {string} HTML string for job card
 */
function createJobCardHTML(job) {
  return `
    <div class="job-card" data-job-id="${job.id}">
      <div class="job-header">
        <div class="company-logo">
          <div class="logo-circle" style="background-color: ${job.logoColor};"></div>
        </div>
        <div class="job-title-container">
          <h3 class="job-title">${job.title}</h3>
          <p class="company-name">${job.company}</p>
        </div>
        ${job.isNew ? 
          '<div class="job-new-tag"><span>Nuevo</span></div>' : 
          `<div class="job-view-count"><span>${job.daysAgo}d</span></div>`
        }
      </div>
      <div class="job-details">
        <div class="job-tag">
          <span class="tag-icon">🩺</span>
          <span class="tag-text">${job.specialty}</span>
        </div>
        <div class="job-tag">
          <span class="tag-icon">🕒</span>
          <span class="tag-text">${job.schedule}</span>
        </div>
        <div class="job-tag">
          <span class="tag-icon">💰</span>
          <span class="tag-text">${job.salary}</span>
        </div>
        <div class="job-tag">
          <span class="tag-icon">📍</span>
          <span class="tag-text">${job.location}</span>
        </div>
      </div>
      <div class="job-action">
        <button class="btn btn-info">Ver Info</button>
      </div>
    </div>
  `;
}

/**
 * Initialize job listings functionality
 */
export function initJobListings() {
  const jobListContainer = document.querySelector('.job-list');
  
  // If container doesn't exist, don't proceed
  if (!jobListContainer) return;
  
  // The HTML is pre-rendered but this function can update the job count dynamically
  const jobCountEl = document.querySelector('.section-title');
  if (jobCountEl) {
    jobCountEl.textContent = `${jobsData.length} Ofertas De Trabajo`;
  }
  
  // This function can be used to programmatically render jobs if needed
  function renderJobs() {
    jobListContainer.innerHTML = '';
    jobsData.forEach(job => {
      jobListContainer.innerHTML += createJobCardHTML(job);
    });
  }
  
  // We won't call renderJobs() here since the job listings are statically pre-rendered
  // But the function is available if we need to update the list dynamically
}