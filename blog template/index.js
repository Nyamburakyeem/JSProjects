 let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides');
const totalSlides = slides.length;

function showSlide(index) {
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 4000);

// Initialize
showSlide(currentIndex);
 
 
    const toggleBtn = document.getElementById('toggleMode');
    const body = document.body;
    const icon = document.getElementById('modeIcon');

    // Load saved mode from localStorage
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
      body.classList.add('dark-mode');
      icon.style.color = '#f5e663';
    }

    // Toggle and save mode
    toggleBtn.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      const isDark = body.classList.contains('dark-mode');
      localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
      icon.style.color = isDark ? '#f5e663' : 'inherit';
    });
