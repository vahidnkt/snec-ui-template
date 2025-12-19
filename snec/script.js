// Login Form Handler
document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Simple validation - accepts any email and password for testing
  if (email && password) {
    // Hide login page
    document.getElementById('login-page').style.display = 'none';
    
    // Show dashboard page
    document.getElementById('dashboard-page').style.display = 'block';
    
    // Optional: Store login state in sessionStorage
    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('userEmail', email);
  } else {
    alert('Please enter both email and password');
  }
});

// Password Toggle Visibility
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

if (togglePassword) {
  togglePassword.addEventListener('click', function() {
    // Toggle password visibility
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Toggle icon (optional - you can add different SVG for closed eye)
    this.classList.toggle('active');
  });
}

// Check if user is already logged in (optional)
window.addEventListener('DOMContentLoaded', function() {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');
  
  if (isLoggedIn === 'true') {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('dashboard-page').style.display = 'block';
  }
});

// Sidebar Navigation Active State and Section Switching
const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
const contentArea = document.getElementById('home-section');
const institutionSection = document.querySelector('.institution-section');
const applicationsSection = document.querySelector('.applications-section');
const notificationSection = document.querySelector('.notification-section');
const hallticketSection = document.querySelector('.hallticket-section');
const examresultSection = document.querySelector('.examresult-section');
const studymaterialsSection = document.querySelector('.studymaterials-section');
const activitiesSection = document.querySelector('.activities-section');

sidebarLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Remove active class from all links
    sidebarLinks.forEach(l => l.classList.remove('active'));
    
    // Add active class to clicked link
    this.classList.add('active');
    
    // Get the section to show
    const section = this.getAttribute('data-section');
    
    // Hide all sections
    contentArea.style.display = 'none';
    institutionSection.style.display = 'none';
    applicationsSection.style.display = 'none';
    notificationSection.style.display = 'none';
    hallticketSection.style.display = 'none';
    examresultSection.style.display = 'none';
    studymaterialsSection.style.display = 'none';
    activitiesSection.style.display = 'none';
    
    // Show the selected section
    if (section === 'institution') {
      institutionSection.style.display = 'block';
    } else if (section === 'applications') {
      applicationsSection.style.display = 'block';
    } else if (section === 'notification') {
      notificationSection.style.display = 'block';
    } else if (section === 'hallticket') {
      hallticketSection.style.display = 'block';
    } else if (section === 'examresult') {
      examresultSection.style.display = 'block';
    } else if (section === 'studymaterials') {
      studymaterialsSection.style.display = 'block';
    } else if (section === 'activities') {
      activitiesSection.style.display = 'block';
    } else {
      contentArea.style.display = 'grid';
    }
  });
});

// Study Materials Tab Switching
const studyMaterialsTabs = document.querySelectorAll('.studymaterials-tab');
if (studyMaterialsTabs.length > 0) {
  studyMaterialsTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active class from all tabs
      studyMaterialsTabs.forEach(t => t.classList.remove('active'));
      
      // Add active class to clicked tab
      this.classList.add('active');
      
      // Here you can add logic to switch between Model Question Paper and Study Material content
      const tabType = this.getAttribute('data-tab');
      // You can implement content switching here if needed
    });
  });
}

// Logout Functionality (you can add a logout button later)
function logout() {
  sessionStorage.removeItem('isLoggedIn');
  sessionStorage.removeItem('userEmail');
  
  document.getElementById('dashboard-page').style.display = 'none';
  document.getElementById('login-page').style.display = 'flex';
  
  // Clear form
  document.getElementById('login-form').reset();
}

// Make logout function available globally
window.logout = logout;

// Smooth scroll for any anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');

if (mobileMenuToggle && sidebar && sidebarOverlay) {
  // Toggle sidebar
  mobileMenuToggle.addEventListener('click', function() {
    sidebar.classList.toggle('active');
    sidebarOverlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
  });

  // Close sidebar when clicking overlay
  sidebarOverlay.addEventListener('click', function() {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Close sidebar when clicking a menu item (on mobile)
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Close sidebar on window resize if screen becomes larger
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      sidebar.classList.remove('active');
      sidebarOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// Sidebar Close Button
const sidebarCloseBtn = document.getElementById('sidebarCloseBtn');
if (sidebarCloseBtn && sidebar) {
  sidebarCloseBtn.addEventListener('click', function() {
    sidebar.classList.remove('active');
    if (sidebarOverlay) {
      sidebarOverlay.classList.remove('active');
    }
    document.body.style.overflow = '';
  });
}

