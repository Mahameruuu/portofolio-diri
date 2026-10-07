// ==========================================================================
// KAMUS MULTI-LANGUAGE (INDONESIA & ENGLISH)
// ==========================================================================
const translations = {
  id: {
    // Navigation
    "nav.brand": "Portofolio",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.contact": "Contact",

    // Hero Section
    "hero.badge": "Backend Developer",
    "hero.title": "Mengembangkan Layanan Backend Terstruktur dan Integrasi API yang Handal",
    "hero.tagline": "Membangun sistem backend yang terstruktur, efisien, dan dapat diandalkan.",
    "hero.desc": "Lulusan S1 Teknik Informatika yang berfokus pada pengembangan backend web dan REST API menggunakan Laravel, Python, MySQL, serta PostgreSQL. Terbiasa merancang skema basis data dan mengintegrasikan alur data aplikasi.",
    "hero.ctaProjects": "Lihat Proyek",
    "hero.ctaContact": "Hubungi Saya",
    "hero.metaSpecLabel": "Spesialisasi",
    "hero.metaStackLabel": "Core Stack",
    "hero.metaDbLabel": "Database",

    // About Section
    "about.subtitle": "Tentang Saya",
    "about.title": "Profil & Pendekatan Pengembangan",
    "about.cardTitle": "Mengenal Saya Lebih Dekat",
    "about.p1": "Saya adalah lulusan S1 Teknik Informatika yang memiliki ketertarikan kuat pada <strong>Backend Development</strong>. Bagi saya, bagian terpenting dari sebuah aplikasi adalah bagaimana data diproses, disimpan, dan dikirimkan secara aman di balik layar.",
    "about.p2": "Dalam mengembangkan aplikasi, saya terbiasa menggunakan <strong>Laravel (PHP)</strong> dan <strong>Python</strong> untuk membuat layanan backend serta <strong>REST API</strong>. Untuk pengelolaan data, saya mengandalkan database relasional seperti <strong>MySQL</strong> dan <strong>PostgreSQL</strong>.",
    "about.p3": "Saya juga menggunakan <strong>Git</strong> untuk mencatat alur kode dan <strong>Docker</strong> agar lingkungan pengembangan tetap teratur dan stabil. Saya senang memecahkan masalah seputar alur data, autentikasi pengguna, dan memastikan API dapat terhubung dengan baik ke aplikasi web maupun mobile.",

    // Skills Section
    "skills.subtitle": "Keahlian Teknis",
    "skills.title": "Teknologi & Lingkungan Kerja",
    "skills.desc": "Keahlian teknis yang saya kuasai dan terapkan dalam membangun sistem aplikasi web.",
    "skills.cat1": "Programming Languages",
    "skills.cat2": "Backend",
    "skills.cat3": "Frontend",
    "skills.cat4": "Database",
    "skills.cat5": "API",
    "skills.cat6": "Tools & DevOps",

    // Projects Section
    "projects.subtitle": "Portfolio Proyek",
    "projects.title": "Hasil Pengerjaan Sistem & API",
    "projects.desc": "Berikut adalah implementasi sistem backend dan integrasi database yang telah saya kerjakan.",
    "projects.badgeP1": "Prioritas Utama",
    "projects.badgeP2": "Prioritas 2",
    "projects.badgeP3": "Prioritas 3",
    "projects.lblProblem": "Masalah yang Diselesaikan",
    "projects.lblSolution": "Solusi",
    "projects.lblFeatures": "Fitur Utama:",
    "projects.lblDevProcess": "Development Process:",
    "projects.lblResult": "Hasil Proyek:",
    "projects.demoPlaceholder": "[Demo: Belum diisi]",
    "projects.githubPlaceholder": "[GitHub: Belum diisi]",
    "projects.docPlaceholder": "[Dokumentasi: Belum diisi]",

    // Project 1
    "projects.p1Role": "Role: Backend & Database Developer",
    "projects.p1Title": "Sistem Informasi Inventaris Berbasis Web",
    "projects.p1Overview": "Aplikasi web pengelolaan inventaris untuk memantau data barang, kategori, pergerakan stok, serta riwayat transaksi secara terpusat.",
    "projects.p1Problem": "[Belum diisi - misal: Pencatatan barang dan stok yang masih manual sehingga rentan terjadi selisih data]",
    "projects.p1Solution": "Membangun sistem backend terpusat yang memvalidasi setiap perubahan stok secara otomatis saat transaksi terjadi serta mengontrol hak akses pengguna.",
    "projects.p1F1": "Autentikasi dan otorisasi pengguna (login)",
    "projects.p1F2": "Manajemen data barang dan pengelompokan kategori",
    "projects.p1F3": "Pencatatan dan kalkulasi pergerakan stok",
    "projects.p1F4": "Pencatatan data riwayat transaksi",
    "projects.p1Process": "Merancang skema relasi database (tabel barang, kategori, transaksi), mengimplementasikan model dan migrasi di Laravel, menyusun logika bisnis transaksi, serta membuat validasi form dan input data.",
    "projects.p1Result": "Sistem inventaris fungsional yang mampu memproses transaksi barang dan mengupdate data stok secara otomatis.",
    "projects.p1Metric": "[Metrik/angka hasil: Belum diisi]",

    // Project 2
    "projects.p2Role": "Role: Backend Developer",
    "projects.p2Title": "REST API untuk Aplikasi Mobile",
    "projects.p2Overview": "Layanan antarmuka pemrograman aplikasi (API) backend yang berfungsi sebagai penyedia data dan pengolah logika bisnis untuk aplikasi mobile.",
    "projects.p2Problem": "[Belum diisi - misal: Kebutuhan integrasi data aplikasi mobile dengan database server secara terstruktur dan aman]",
    "projects.p2Solution": "Mengembangkan endpoint RESTful API terstandarisasi untuk menangani permintaan data dari sisi aplikasi mobile.",
    "projects.p2F1": "Endpoint autentikasi pengguna",
    "projects.p2F2": "Endpoint pengelolaan dan manipulasi data (CRUD)",
    "projects.p2F3": "Format respons JSON terstruktur",
    "projects.p2Process": "Merancang struktur endpoint API, mengonfigurasi mekanisme autentikasi, mengimplementasikan controller untuk query database, serta menguji respons status code (HTTP status codes).",
    "projects.p2Result": "Layanan REST API yang siap dikonsumsi oleh aplikasi mobile untuk kebutuhan login dan transaksi data.",
    "projects.p2Metric": "[Metrik/angka hasil: Belum diisi]",

    // Project 3
    "projects.p3Role": "Role: Backend & Database Developer",
    "projects.p3Title": "Sistem Monitoring Data",
    "projects.p3Overview": "Sistem backend untuk alur penerimaan data, penyimpanan terstruktur, dan penyediaan kembali data monitoring melalui API.",
    "projects.p3Problem": "[Belum diisi - misal: Kebutuhan sistem yang dapat mencatat log/data berkala dan menyajikannya secara terorganisir]",
    "projects.p3Solution": "Membangun pipeline backend menggunakan Python dan PostgreSQL untuk menampung data masuk secara konsisten dan mengeksposnya kembali melalui endpoint API.",
    "projects.p3F1": "Penerimaan dan penampungan data berkala",
    "projects.p3F2": "Penyimpanan data terstruktur pada basis data PostgreSQL",
    "projects.p3F3": "Endpoint API untuk pengambilan data monitoring",
    "projects.p3Process": "Merancang tabel penyimpanan di PostgreSQL, menulis skrip backend Python untuk memvalidasi dan menyimpan payload data, serta membuat API route untuk penyajian data.",
    "projects.p3Result": "Backend monitoring yang dapat menerima dan menyajikan data melalui API secara stabil.",
    "projects.p3Metric": "[Metrik/angka hasil: Belum diisi]",

    // Experience Section
    "exp.subtitle": "Pengalaman",
    "exp.title": "Riwayat Pengerjaan Proyek",
    "exp.role": "Backend Developer",
    "exp.date": "[Belum diisi - contoh: 2023 - Sekarang]",
    "exp.org": "Independent & Academic Projects",
    "exp.duty1": "Merancang dan mengimplementasikan sistem basis data relasional menggunakan MySQL dan PostgreSQL.",
    "exp.duty2": "Membangun logika bisnis aplikasi web dan REST API menggunakan Laravel dan Python.",
    "exp.duty3": "Menggunakan Git untuk version control dan Docker untuk standardisasi environment pengujian.",

    // Education Section
    "edu.subtitle": "Pendidikan",
    "edu.title": "Latar Belakang Akademik",
    "edu.degree": "S1 Teknik Informatika",
    "edu.school": "[Nama Universitas: Belum diisi]",
    "edu.year": "[Periode / Tahun Lulus: Belum diisi]",
    "edu.focusLabel": "Fokus Pembelajaran:",
    "edu.focusText": "Rekayasa Perangkat Lunak, Basis Data, Jaringan Komputer, dan Pemrograman Web.",

    // Contact Section
    "contact.subtitle": "Kontak",
    "contact.title": "Hubungi Saya",
    "contact.desc": "Tertarik untuk berdiskusi mengenai peluang kerja atau kolaborasi teknis?",
    "contact.emailLabel": "Email",
    "contact.emailVal": "[Belum diisi - contoh: nama@email.com]",
    "contact.githubLabel": "GitHub",
    "contact.githubVal": "[Belum diisi - contoh: github.com/username]",
    "contact.linkedinLabel": "LinkedIn",
    "contact.linkedinVal": "[Belum diisi - contoh: linkedin.com/in/username]",
    "contact.locationLabel": "Lokasi",
    "contact.locationVal": "[Belum diisi - contoh: Indonesia]",

    // Footer
    "footer.copy": "&copy; 2026 Portofolio Backend Developer. Dibuat dengan HTML, CSS & JavaScript.",
    "footer.backToTop": "Kembali ke Atas &uarr;"
  },

  en: {
    // Navigation
    "nav.brand": "Portfolio",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.contact": "Contact",

    // Hero Section
    "hero.badge": "Backend Developer",
    "hero.title": "Engineering Structured Backend Systems & Reliable API Integrations",
    "hero.tagline": "Building structured, efficient, and reliable backend systems.",
    "hero.desc": "Informatics Engineering graduate focusing on web backend development and REST APIs using Laravel, Python, MySQL, and PostgreSQL. Experienced in database schema design and application data flow integration.",
    "hero.ctaProjects": "View Projects",
    "hero.ctaContact": "Contact Me",
    "hero.metaSpecLabel": "Specialization",
    "hero.metaStackLabel": "Core Stack",
    "hero.metaDbLabel": "Databases",

    // About Section
    "about.subtitle": "About Me",
    "about.title": "Profile & Engineering Approach",
    "about.cardTitle": "Getting to Know Me",
    "about.p1": "I am an Informatics Engineering graduate with a strong focus on <strong>Backend Development</strong>. To me, the core strength of any application lies in how data is processed, stored, and securely transferred behind the scenes.",
    "about.p2": "In developing applications, I work with <strong>Laravel (PHP)</strong> and <strong>Python</strong> to build backend services and robust <strong>REST APIs</strong>. For data management, I rely on relational databases such as <strong>MySQL</strong> and <strong>PostgreSQL</strong>.",
    "about.p3": "I also utilize <strong>Git</strong> for version control and <strong>Docker</strong> to maintain consistent and reproducible development environments. I enjoy tackling data flow challenges, user authentication, and ensuring seamless API communication with client applications.",

    // Skills Section
    "skills.subtitle": "Technical Skills",
    "skills.title": "Technologies & Development Stack",
    "skills.desc": "Technical capabilities I utilize to architect and develop web applications.",
    "skills.cat1": "Programming Languages",
    "skills.cat2": "Backend",
    "skills.cat3": "Frontend",
    "skills.cat4": "Database",
    "skills.cat5": "API",
    "skills.cat6": "Tools & DevOps",

    // Projects Section
    "projects.subtitle": "Project Portfolio",
    "projects.title": "Backend Systems & API Implementations",
    "projects.desc": "A showcase of backend services and database integrations I have built.",
    "projects.badgeP1": "Featured Project",
    "projects.badgeP2": "Priority 2",
    "projects.badgeP3": "Priority 3",
    "projects.lblProblem": "Problem Addressed",
    "projects.lblSolution": "Solution",
    "projects.lblFeatures": "Key Features:",
    "projects.lblDevProcess": "Development Process:",
    "projects.lblResult": "Project Outcome:",
    "projects.demoPlaceholder": "[Demo: Not provided]",
    "projects.githubPlaceholder": "[GitHub: Not provided]",
    "projects.docPlaceholder": "[Documentation: Not provided]",

    // Project 1
    "projects.p1Role": "Role: Backend & Database Developer",
    "projects.p1Title": "Web-Based Inventory Information System",
    "projects.p1Overview": "A web-based inventory management application to track goods, categories, stock movements, and transaction history centrally.",
    "projects.p1Problem": "[Not provided - e.g.: Manual record keeping prone to stock discrepancies]",
    "projects.p1Solution": "Built a centralized backend that automatically validates stock movements during transactions and enforces user access controls.",
    "projects.p1F1": "User authentication and authorization (login)",
    "projects.p1F2": "Item management and category grouping",
    "projects.p1F3": "Stock movement calculation and logging",
    "projects.p1F4": "Transaction history recording",
    "projects.p1Process": "Designed relational database schema (tables for items, categories, transactions), implemented models and migrations in Laravel, structured business logic, and enforced strict form validation.",
    "projects.p1Result": "A functional inventory system capable of processing item transactions and synchronizing stock data automatically.",
    "projects.p1Metric": "[Metrics/numbers: Not provided]",

    // Project 2
    "projects.p2Role": "Role: Backend Developer",
    "projects.p2Title": "REST API for Mobile Application",
    "projects.p2Overview": "A backend RESTful API service providing business logic execution and structured data exchange for a mobile client.",
    "projects.p2Problem": "[Not provided - e.g.: Requirement for standardized and secure mobile client-server communication]",
    "projects.p2Solution": "Developed standardized RESTful API endpoints to handle mobile client requests reliably.",
    "projects.p2F1": "User authentication endpoints",
    "projects.p2F2": "Data management and CRUD operation endpoints",
    "projects.p2F3": "Structured JSON response formatting",
    "projects.p2Process": "Designed endpoint structure, configured authentication mechanisms, implemented controllers for database queries, and verified standard HTTP status responses.",
    "projects.p2Result": "A production-ready REST API ready to be consumed by mobile client applications for authentication and data transactions.",
    "projects.p2Metric": "[Metrics/numbers: Not provided]",

    // Project 3
    "projects.p3Role": "Role: Backend & Database Developer",
    "projects.p3Title": "Data Monitoring System Backend",
    "projects.p3Overview": "A backend system handling incoming data streams, relational storage, and data provisioning via REST API.",
    "projects.p3Problem": "[Not provided - e.g.: Requirement to systematically ingest and retrieve periodic monitoring logs]",
    "projects.p3Solution": "Constructed a backend pipeline using Python and PostgreSQL to ingest incoming payloads consistently and serve data through API endpoints.",
    "projects.p3F1": "Periodic data ingestion and handling",
    "projects.p3F2": "Structured relational schema in PostgreSQL",
    "projects.p3F3": "Data retrieval API endpoints for monitoring",
    "projects.p3Process": "Designed PostgreSQL storage tables, created Python backend scripts for payload validation and insertion, and built retrieval API routes.",
    "projects.p3Result": "A stable data monitoring backend capable of ingesting and serving monitoring records via API.",
    "projects.p3Metric": "[Metrics/numbers: Not provided]",

    // Experience Section
    "exp.subtitle": "Experience",
    "exp.title": "Project Experience",
    "exp.role": "Backend Developer",
    "exp.date": "[Not provided - e.g.: 2023 - Present]",
    "exp.org": "Independent & Academic Projects",
    "exp.duty1": "Designed and implemented relational database systems using MySQL and PostgreSQL.",
    "exp.duty2": "Built web application business logic and REST APIs using Laravel and Python.",
    "exp.duty3": "Utilized Git for version control and Docker for consistent testing environments.",

    // Education Section
    "edu.subtitle": "Education",
    "edu.title": "Academic Background",
    "edu.degree": "Bachelor of Informatics Engineering (S.Kom)",
    "edu.school": "[University: Not provided]",
    "edu.year": "[Period / Graduation Year: Not provided]",
    "edu.focusLabel": "Core Curriculum:",
    "edu.focusText": "Software Engineering, Database Systems, Computer Networks, and Web Programming.",

    // Contact Section
    "contact.subtitle": "Contact",
    "contact.title": "Get in Touch",
    "contact.desc": "Interested in discussing career opportunities or technical collaboration?",
    "contact.emailLabel": "Email",
    "contact.emailVal": "[Not provided - e.g.: name@email.com]",
    "contact.githubLabel": "GitHub",
    "contact.githubVal": "[Not provided - e.g.: github.com/username]",
    "contact.linkedinLabel": "LinkedIn",
    "contact.linkedinVal": "[Not provided - e.g.: linkedin.com/in/username]",
    "contact.locationLabel": "Location",
    "contact.locationVal": "[Not provided - e.g.: Indonesia]",

    // Footer
    "footer.copy": "&copy; 2026 Backend Developer Portfolio. Built with HTML, CSS & JavaScript.",
    "footer.backToTop": "Back to Top &uarr;"
  }
};

// ==========================================================================
// LOGIKA GANTI BAHASA (I18N)
// ==========================================================================
let currentLang = localStorage.getItem('portfolio_lang') || 'id';

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('portfolio_lang', lang);

  // Update HTML lang attribute
  document.documentElement.setAttribute('lang', lang);

  // Update text content of elements with data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update language toggle buttons active state
  const langIdBtn = document.getElementById('langIdBtn');
  const langEnBtn = document.getElementById('langEnBtn');

  if (langIdBtn && langEnBtn) {
    if (lang === 'id') {
      langIdBtn.classList.add('active');
      langEnBtn.classList.remove('active');
    } else {
      langEnBtn.classList.add('active');
      langIdBtn.classList.remove('active');
    }
  }
}

// ==========================================================================
// DOM INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // 1. Language buttons event listener
  const langIdBtn = document.getElementById('langIdBtn');
  const langEnBtn = document.getElementById('langEnBtn');

  if (langIdBtn) {
    langIdBtn.addEventListener('click', () => setLanguage('id'));
  }
  if (langEnBtn) {
    langEnBtn.addEventListener('click', () => setLanguage('en'));
  }

  // Set initial language from storage or default (id)
  setLanguage(currentLang);

  // 2. Mobile Navigation Toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Close menu when clicking navigation link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // 3. Active navigation highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  
  function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      const activeLink = document.querySelector(`.nav-list a[href*="${sectionId}"]`);

      if (activeLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          activeLink.classList.add('active');
        } else {
          activeLink.classList.remove('active');
        }
      }
    });
  }

  window.addEventListener('scroll', highlightNavigation);
});
