// ==================== CONSTANTS ====================
const ADMIN_STORAGE_KEYS = {
  users: "ursa_users",
  complaints: "ursa_complaints",
  adminSession: "ursa_admin_logged_in",
  theme: "ursa_theme",
  audit: "ursa_audit"
};

const ADMIN_PASSWORD = "admin123";

// ==================== LAYOUT INJECTION ====================
function injectAdminLayout() {
  const isLoginPage = window.location.pathname.includes('admin-login.html');

  if (!isLoginPage) {
    const sidebarHTML = `
      <div class="overlay" id="overlay"></div>
      <aside class="sidebar" id="sidebar">
        <div class="close-btn" id="closeSidebar">&times;</div>
        <ul>
          <li><a href="admin-home.html" data-nav="admin-home.html"><i class="fas fa-chart-line"></i> <span data-i18n="nav_dashboard">Dashboard</span></a></li>
          <li><a href="admin-users.html" data-nav="admin-users.html"><i class="fas fa-users"></i> <span data-i18n="nav_users">Users</span></a></li>
          <li><a href="admin-reports.html" data-nav="admin-reports.html"><i class="fas fa-list"></i> <span data-i18n="nav_reports">Reports</span></a></li>
          <li><a href="admin-settings.html" data-nav="admin-settings.html"><i class="fas fa-gear"></i> <span data-i18n="nav_settings">Settings</span></a></li>
          <li><a href="#" id="adminLogoutLink"><i class="fas fa-sign-out-alt"></i> <span data-i18n="nav_logout">Logout</span></a></li>
        </ul>
      </aside>
    `;
    document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
  }
  if (document.querySelector('.topbar') || document.querySelector('.top-bar')) {
    return;
  }

  const topBarHTML = `
    <div class="top-bar">
      <div class="logo-area">
        ${!isLoginPage ? '<div class="hamburger" id="openSidebar"><i class="fas fa-bars"></i></div>' : ''}
        <div class="logo-container">
          <div class="logo-image"><img src="URSA 3.png" alt="URSA Logo" /></div>
          <div class="logo" data-i18n="brand_admin">URSA · ADMIN</div>
        </div>
      </div>
      <div style="display:flex;gap:10px;align-items:center;">
        <button id="langToggle" class="glass-btn small" data-i18n="lang_btn">العربية</button>
        <div class="theme-toggle">
          <i class="fas fa-sun" id="lightModeBtn"></i>
          <i class="fas fa-moon active" id="darkModeBtn"></i>
        </div>
      </div>
    </div>
  `;
  
  const container = document.querySelector('.container');
  if (container) {
    container.insertAdjacentHTML('beforebegin', topBarHTML);
  } else {
    document.body.insertAdjacentHTML('afterbegin', topBarHTML);
  }

  // Set Active Nav
  const currentPath = window.location.pathname.split('/').pop();
  document.querySelectorAll('.sidebar a[data-nav]').forEach(link => {
    if (link.getAttribute('data-nav') === currentPath) {
      link.classList.add('active-nav');
    }
  });

  // Logout event
  document.getElementById('adminLogoutLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    adminLogout();
  });
}
const ADMIN_TRANSLATIONS = {
  ar: {
    lang_btn: 'English',
    brand_admin: 'URSA · المسؤول',
    nav_dashboard: 'لوحة التحكم',
    nav_users: 'المستخدمون',
    nav_reports: 'البلاغات',
    nav_settings: 'الإعدادات',
    nav_logout: 'تسجيل الخروج',
    table_name: 'الاسم',
    table_national_id: 'الرقم القومي',
    table_phone: 'الهاتف',
    table_governorate: 'المحافظة',
    table_delete: 'حذف',
    empty_users: 'لا يوجد مستخدمون مسجلون بعد',
    empty_reports: 'لا توجد بلاغات حتى الآن',
    table_id: 'المعرف',
    table_category: 'الفئة',
    table_description: 'الوصف',
    table_location: 'الموقع',
    table_date: 'التاريخ',
    table_status: 'الحالة',
    table_action: 'الإجراء',
    status_pending: 'قيد الانتظار',
    status_inprogress: 'قيد التنفيذ',
    status_resolved: 'تم الحل',
    view_photo: 'عرض الصورة',
    confirm_delete_user: 'هل أنت متأكد من حذف هذا المستخدم؟',
    confirm_delete_report: 'هل أنت متأكد من حذف هذا البلاغ؟',
    invalid_password: 'كلمة المرور غير صحيحة',
    click_to_close: 'اضغط في أي مكان للإغلاق'
    ,admin_dashboard_title: 'لوحة تحكم المسؤول'
    ,stat_total_users: 'إجمالي المستخدمين'
    ,stat_registered_citizens: 'المواطنون المسجلون'
    ,stat_total_reports: 'إجمالي البلاغات'
    ,stat_all_time_reports: 'جميع البلاغات'
    ,stat_pending: 'قيد الانتظار'
    ,stat_awaiting_review: 'في انتظار المراجعة'
    ,stat_resolved: 'تم الحل'
    ,stat_completed_reports: 'بلاغات مكتملة'
    ,quick_actions: 'إجراءات سريعة'
    ,manage_users: 'إدارة المستخدمين'
    ,manage_reports: 'إدارة البلاغات'
    ,view_portal: 'عرض البوابة'
    ,user_management_title: 'إدارة المستخدمين'
    ,registered_citizens_title: 'المواطنون المسجلون'
    ,loading_users: 'جارِ تحميل المستخدمين...'
    ,report_management_title: 'إدارة البلاغات'
    ,all_submitted_complaints: 'كل البلاغات المُقدمة'
    ,loading_reports: 'جارِ تحميل البلاغات...'
    ,table_idcard: 'البطاقة'
    ,view_id_card: 'عرض البطاقة'
  },
  en: {
    lang_btn: 'العربية',
    brand_admin: 'URSA · ADMIN',
    nav_dashboard: 'Dashboard',
    nav_users: 'Users',
    nav_reports: 'Reports',
    nav_settings: 'Settings',
    nav_logout: 'Logout',
    table_name: 'Name',
    table_national_id: 'National ID',
    table_phone: 'Phone',
    table_governorate: 'Governorate',
    table_delete: 'Delete',
    empty_users: 'No users registered yet',
    empty_reports: 'No reports submitted yet',
    table_id: 'ID',
    table_category: 'Category',
    table_description: 'Description',
    table_location: 'Location',
    table_date: 'Date',
    table_status: 'Status',
    table_action: 'Action',
    status_pending: 'Pending',
    status_inprogress: 'In Progress',
    status_resolved: 'Resolved',
    view_photo: 'View Photo',
    confirm_delete_user: 'Are you sure you want to delete this user?',
    confirm_delete_report: 'Are you sure you want to delete this report?',
    invalid_password: 'Invalid password',
    click_to_close: 'Click anywhere to close'
    ,admin_dashboard_title: 'Admin Dashboard'
    ,stat_total_users: 'Total Users'
    ,stat_registered_citizens: 'Registered citizens'
    ,stat_total_reports: 'Total Reports'
    ,stat_all_time_reports: 'All time reports'
    ,stat_pending: 'Pending'
    ,stat_awaiting_review: 'Awaiting review'
    ,stat_resolved: 'Resolved'
    ,stat_completed_reports: 'Completed reports'
    ,quick_actions: 'Quick Actions'
    ,manage_users: 'Manage Users'
    ,manage_reports: 'Manage Reports'
    ,view_portal: 'View Portal'
    ,user_management_title: 'User Management'
    ,registered_citizens_title: 'Registered Citizens'
    ,loading_users: 'Loading users...'
    ,report_management_title: 'Report Management'
    ,all_submitted_complaints: 'All Submitted Complaints'
    ,loading_reports: 'Loading reports...'
    ,table_idcard: 'ID Card'
    ,view_id_card: 'View ID Card'
  }
};
function applyAdminLanguage(lang) {
  document.documentElement.lang = lang === 'ar' ? 'ar' : 'en';
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    var text = ADMIN_TRANSLATIONS[lang][key];
    if (typeof text === 'string') {
      el.textContent = text;
    }
  });
  localStorage.setItem('ursa_lang', lang);
}

// ==================== AUTH FUNCTIONS ====================
function adminLogin() {
  const passwordInput = document.getElementById('adminPassword');
  const errorDiv = document.getElementById('adminError');
  
  if (passwordInput.value === ADMIN_PASSWORD) {
    sessionStorage.setItem(ADMIN_STORAGE_KEYS.adminSession, "true");
    window.location.href = 'admin-home.html';
  } else {
    if (errorDiv) {
      var lang = document.documentElement.lang === 'ar' ? 'ar' : 'en';
      errorDiv.textContent = ADMIN_TRANSLATIONS[lang].invalid_password;
      errorDiv.style.display = 'block';
      setTimeout(() => errorDiv.style.display = 'none', 3000);
    }
  }
}

function adminLogout() {
  sessionStorage.removeItem(ADMIN_STORAGE_KEYS.adminSession);
  window.location.href = 'admin-login.html';
}

function checkAdminAuth() {
  const isLoggedIn = sessionStorage.getItem(ADMIN_STORAGE_KEYS.adminSession);
  const isLoginPage = window.location.pathname.includes('admin-login.html');
  
  if (!isLoggedIn && !isLoginPage) {
    window.location.href = 'admin-login.html';
  }
}

// ==================== DATA FUNCTIONS ====================
function getAllUsers() {
  return JSON.parse(localStorage.getItem(ADMIN_STORAGE_KEYS.users) || "[]");
}

function getAllReports() {
  return JSON.parse(localStorage.getItem(ADMIN_STORAGE_KEYS.complaints) || "[]");
}

function deleteUser(nationalId) {
  var lang = document.documentElement.lang === 'ar' ? 'ar' : 'en';
  if (confirm(ADMIN_TRANSLATIONS[lang].confirm_delete_user)) {
    let users = getAllUsers();
    users = users.filter(u => u.nationalId !== nationalId);
    localStorage.setItem(ADMIN_STORAGE_KEYS.users, JSON.stringify(users));
    loadAdminUsers();
    updateAdminStats();
  }
}

function deleteReport(id) {
  var lang = document.documentElement.lang === 'ar' ? 'ar' : 'en';
  if (confirm(ADMIN_TRANSLATIONS[lang].confirm_delete_report)) {
    let reports = getAllReports();
    reports = reports.filter(r => r.id !== id);
    localStorage.setItem(ADMIN_STORAGE_KEYS.complaints, JSON.stringify(reports));
    loadAdminReports();
    updateAdminStats();
  }
}

function updateReportStatus(id, newStatus) {
  let reports = getAllReports();
  const reportIndex = reports.findIndex(r => r.id === id);
  if (reportIndex !== -1) {
    reports[reportIndex].status = newStatus;
    localStorage.setItem(ADMIN_STORAGE_KEYS.complaints, JSON.stringify(reports));
    loadAdminReports();
    updateAdminStats();
  }
}

function showReportImage(imageUrl) {
  if (!imageUrl) return;
  const modal = document.createElement('div');
  modal.className = 'overlay show';
  modal.style.display = 'flex';
  modal.style.alignItems = 'center';
  modal.style.justifyContent = 'center';
  modal.style.zIndex = '3000'; // Very high z-index
  modal.onclick = () => modal.remove();
  
  const img = document.createElement('img');
  img.src = imageUrl;
  img.style.maxWidth = '90%';
  img.style.maxHeight = '90%';
  img.style.borderRadius = '20px';
  img.style.boxShadow = '0 0 50px rgba(0,0,0,0.8)';
  img.style.border = '2px solid var(--primary)';
  
  // Add a close hint
  const hint = document.createElement('div');
  var langHint = document.documentElement.lang === 'ar' ? 'ar' : 'en';
  hint.innerHTML = ADMIN_TRANSLATIONS[langHint].click_to_close;
  hint.style.position = 'absolute';
  hint.style.bottom = '20px';
  hint.style.color = 'white';
  hint.style.background = 'rgba(0,0,0,0.5)';
  hint.style.padding = '5px 15px';
  hint.style.borderRadius = '20px';
  
  modal.appendChild(img);
  modal.appendChild(hint);
  document.body.appendChild(modal);
}

function openEditUserModal(nationalId) {
  const users = getAllUsers();
  const user = users.find(u => u.nationalId === nationalId);
  if (!user) return;

  const modal = document.createElement('div');
  modal.className = 'overlay show';
  modal.style.display = 'flex';
  modal.style.alignItems = 'center';
  modal.style.justifyContent = 'center';
  modal.style.zIndex = '2000';
  
  const card = document.createElement('div');
  card.className = 'glass-card';
  card.style.width = '450px';
  card.style.padding = '40px';
  card.innerHTML = `
    <h2 style="margin-bottom: 20px;"><i class="fas fa-user-edit" style="color: var(--primary);"></i> Edit User Profile</h2>
    <form id="editUserForm">
      <div style="margin-bottom: 15px;">
        <label style="display: block; margin-bottom: 8px; font-weight: 500;">Full Name</label>
        <input class="glass-input" type="text" id="editFullName" value="${user.fullName}" style="margin-bottom: 0;">
      </div>
      <div style="margin-bottom: 15px;">
        <label style="display: block; margin-bottom: 8px; font-weight: 500;">Phone Number</label>
        <input class="glass-input" type="text" id="editPhone" value="${user.phone}" style="margin-bottom: 0;">
      </div>
      <div style="margin-bottom: 25px;">
        <label style="display: block; margin-bottom: 8px; font-weight: 500;">Governorate</label>
        <input class="glass-input" type="text" id="editGovernorate" value="${user.governorate}" style="margin-bottom: 0;">
      </div>
      <div style="display: flex; gap: 15px;">
        <button type="submit" class="glass-btn primary" style="flex: 2; padding: 12px;"><i class="fas fa-save"></i> Save Changes</button>
        <button type="button" class="glass-btn" style="flex: 1; padding: 12px;" onclick="this.closest('.overlay').remove()"><i class="fas fa-times"></i> Cancel</button>
      </div>
    </form>
  `;
  
  modal.appendChild(card);
  document.body.appendChild(modal);

  card.querySelector('#editUserForm').onsubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...user,
      fullName: document.getElementById('editFullName').value.trim(),
      phone: document.getElementById('editPhone').value.trim(),
      governorate: document.getElementById('editGovernorate').value.trim()
    };

    if (!updatedUser.fullName || !updatedUser.phone || !updatedUser.governorate) {
      alert('All fields are required');
      return;
    }
    
    const allUsers = getAllUsers();
    const index = allUsers.findIndex(u => u.nationalId === nationalId);
    allUsers[index] = updatedUser;
    localStorage.setItem(ADMIN_STORAGE_KEYS.users, JSON.stringify(allUsers));
    
    // Also update currentUser if it's the same person
    const currentUser = JSON.parse(localStorage.getItem('ursa_current_user'));
    if (currentUser && currentUser.nationalId === nationalId) {
      localStorage.setItem('ursa_current_user', JSON.stringify(updatedUser));
    }

    modal.remove();
    loadAdminUsers();
    alert('✅ User updated successfully!');
  };
}

// ==================== UI FUNCTIONS ====================
function updateAdminStats() {
  const users = getAllUsers();
  const reports = getAllReports();
  
  const totalUsersEl = document.getElementById('totalUsers');
  const totalReportsEl = document.getElementById('totalReports');
  const pendingReportsEl = document.getElementById('pendingReports');
  const resolvedReportsEl = document.getElementById('resolvedReports');
  
  if (totalUsersEl) totalUsersEl.textContent = users.length;
  if (totalReportsEl) totalReportsEl.textContent = reports.length;
  if (pendingReportsEl) pendingReportsEl.textContent = reports.filter(r => r.status === 'Pending' || r.status === 'قيد الانتظار').length;
  if (resolvedReportsEl) resolvedReportsEl.textContent = reports.filter(r => r.status === 'Resolved' || r.status === 'تم الحل').length;
}

function loadAdminUsers() {
  const container = document.getElementById('usersList');
  if (!container) return;
  
  const users = getAllUsers();
  if (users.length === 0) {
    var langEmptyUsers = document.documentElement.lang === 'ar' ? 'ar' : 'en';
    container.innerHTML = '<div class="empty-state"><i class="fas fa-users-slash"></i><br>' + ADMIN_TRANSLATIONS[langEmptyUsers].empty_users + '</div>';
    return;
  }
  
  var langUsers = document.documentElement.lang === 'ar' ? 'ar' : 'en';
  let html = `
    <table>
      <thead>
        <tr>
          <th>${ADMIN_TRANSLATIONS[langUsers].table_name}</th>
          <th>${ADMIN_TRANSLATIONS[langUsers].table_national_id}</th>
          <th>${ADMIN_TRANSLATIONS[langUsers].table_phone}</th>
          <th>${ADMIN_TRANSLATIONS[langUsers].table_governorate}</th>
          <th>${ADMIN_TRANSLATIONS[langUsers].table_idcard}</th>
          <th>${ADMIN_TRANSLATIONS[langUsers].table_delete}</th>
        </tr>
      </thead>
      <tbody>
  `;
  
  users.forEach(user => {
    html += `
      <tr>
        <td>${user.fullName}</td>
        <td>${user.nationalId}</td>
        <td>${user.phone}</td>
        <td>${user.governorate}</td>
        <td>${user.idCardImage ? `<button class="action-btn" style="background: var(--secondary); color: white;" onclick="showUserIdImage('${user.nationalId}')"><i class="fas fa-id-card"></i> ${ADMIN_TRANSLATIONS[langUsers].view_id_card}</button>` : '-'}</td>
        <td>
          <button class="action-btn delete-btn" onclick="deleteUser('${user.nationalId}')"><i class="fas fa-trash"></i> ${ADMIN_TRANSLATIONS[langUsers].table_delete}</button>
        </td>
      </tr>
    `;
  });
  
  html += '</tbody></table>';
  container.innerHTML = html;
}

function showUserIdImage(nationalId) {
  var users = getAllUsers();
  var user = users.find(u => u.nationalId === nationalId);
  if (user && user.idCardImage) {
    showReportImage(user.idCardImage);
  }
}

function loadAdminReports() {
  const container = document.getElementById('reportsList');
  if (!container) return;
  
  const reports = getAllReports();
  if (reports.length === 0) {
    var langEmptyReports = document.documentElement.lang === 'ar' ? 'ar' : 'en';
    container.innerHTML = '<div class="empty-state"><i class="fas fa-inbox"></i><br>' + ADMIN_TRANSLATIONS[langEmptyReports].empty_reports + '</div>';
    return;
  }
  
  var langReports = document.documentElement.lang === 'ar' ? 'ar' : 'en';
  let html = `
    <table>
      <thead>
        <tr>
          <th>${ADMIN_TRANSLATIONS[langReports].table_id}</th>
          <th>${ADMIN_TRANSLATIONS[langReports].table_category}</th>
          <th>${ADMIN_TRANSLATIONS[langReports].table_description}</th>
          <th>${ADMIN_TRANSLATIONS[langReports].table_location}</th>
          <th>${ADMIN_TRANSLATIONS[langReports].table_date}</th>
          <th>${ADMIN_TRANSLATIONS[langReports].table_status}</th>
          <th>${ADMIN_TRANSLATIONS[langReports].table_action}</th>
        </tr>
      </thead>
      <tbody>
  `;
  
  reports.reverse().forEach(report => {
    let statusClass = '';
    if (report.status === 'Pending') statusClass = 'status-pending';
    else if (report.status === 'In Progress') statusClass = 'status-inprogress';
    else statusClass = 'status-resolved';
    
    html += `
      <tr data-id="${report.id}">
        <td>${report.id}</td>
        <td>${report.category}</td>
        <td title="${report.description}">${report.description.substring(0, 30)}${report.description.length > 30 ? '...' : ''}</td>
        <td>${report.location}</td>
        <td>${report.date}</td>
        <td>
          <span class="status-badge ${statusClass}">${report.status === 'Pending' ? ADMIN_TRANSLATIONS[langReports].status_pending : report.status === 'In Progress' ? ADMIN_TRANSLATIONS[langReports].status_inprogress : ADMIN_TRANSLATIONS[langReports].status_resolved}</span>
          ${report.image ? `<br><button class="action-btn view-img-btn" style="background: var(--secondary); color: white; margin-top: 5px;"><i class="fas fa-image"></i> ${ADMIN_TRANSLATIONS[langReports].view_photo}</button>` : ''}
        </td>
        <td>
          <select class="status-select" onchange="updateReportStatus(${report.id}, this.value)">
            <option value="${ADMIN_TRANSLATIONS[langReports].status_pending}" ${report.status === 'Pending' ? 'selected' : ''}>${ADMIN_TRANSLATIONS[langReports].status_pending}</option>
            <option value="${ADMIN_TRANSLATIONS[langReports].status_inprogress}" ${report.status === 'In Progress' ? 'selected' : ''}>${ADMIN_TRANSLATIONS[langReports].status_inprogress}</option>
            <option value="${ADMIN_TRANSLATIONS[langReports].status_resolved}" ${report.status === 'Resolved' ? 'selected' : ''}>${ADMIN_TRANSLATIONS[langReports].status_resolved}</option>
          </select>
          <button class="action-btn delete-btn" onclick="deleteReport(${report.id})"><i class="fas fa-trash"></i></button>
        </td>
      </tr>
    `;
  });
  
  html += '</tbody></table>';
  container.innerHTML = html;

  // Add event listeners for image viewing
  container.querySelectorAll('.view-img-btn').forEach(btn => {
    btn.onclick = () => {
      const reportId = parseInt(btn.closest('tr').dataset.id);
      const report = reports.find(r => r.id === reportId);
      if (report && report.image) {
        showReportImage(report.image);
      }
    };
  });
}

// ==================== SIDEBAR FUNCTIONS ====================
function openAdminSidebar() {
  document.getElementById("sidebar")?.classList.add("open");
  document.getElementById("overlay")?.classList.add("show");
}

function closeAdminSidebar() {
  document.getElementById("sidebar")?.classList.remove("open");
  document.getElementById("overlay")?.classList.remove("show");
}

// ==================== THEME FUNCTIONS ====================
function applyAdminTheme(mode) {
  const body = document.body;
  if (mode === "light") {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
  localStorage.setItem(ADMIN_STORAGE_KEYS.theme, mode);
}

function getAuditLog() {
  return JSON.parse(localStorage.getItem(ADMIN_STORAGE_KEYS.audit) || "[]");
}

function renderRecentActivity() {
  const container = document.getElementById('recentActivity');
  if (!container) return;
  const log = getAuditLog().slice().reverse();
  if (log.length === 0) {
    container.innerHTML = '<div class="empty-state">No activity yet</div>';
    return;
  }
  let html = '<div class="profile-summary">';
  log.slice(0, 12).forEach(entry => {
    var icon = entry.type === 'report' ? 'fa-paper-plane' : entry.type === 'register' ? 'fa-user-plus' : entry.type === 'login' ? 'fa-sign-in-alt' : entry.type === 'profile_update' ? 'fa-user-edit' : 'fa-info-circle';
    html += '<div class="profile-chip"><i class="fas '+icon+'"></i> '+(entry.message || entry.type)+' · '+new Date(entry.ts).toLocaleString()+'</div>';
  });
  html += '</div>';
  container.innerHTML = html;
}
// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  // Inject layout
  injectAdminLayout();
  
  checkAdminAuth();
  
  const savedTheme = localStorage.getItem(ADMIN_STORAGE_KEYS.theme) || 'dark';
  applyAdminTheme(savedTheme);
  var savedLang = localStorage.getItem('ursa_lang') || 'ar';
  applyAdminLanguage(savedLang);
  document.getElementById('langToggle')?.addEventListener('click', function() {
    var current = document.documentElement.lang === 'ar' ? 'ar' : 'en';
    var next = current === 'ar' ? 'en' : 'ar';
    applyAdminLanguage(next);
  });
  
  // Stats
  updateAdminStats();
  renderRecentActivity();
  
  // Data lists
  if (window.location.pathname.includes('admin-users.html')) {
    loadAdminUsers();
  }
  if (window.location.pathname.includes('admin-reports.html')) {
    loadAdminReports();
  }
  
  // Sidebar events
  document.getElementById('openSidebar')?.addEventListener('click', openAdminSidebar);
  document.getElementById('closeSidebar')?.addEventListener('click', closeAdminSidebar);
  document.getElementById('overlay')?.addEventListener('click', closeAdminSidebar);
  
  // Theme toggle events
  document.getElementById('lightModeBtn')?.addEventListener('click', () => applyAdminTheme('light'));
  document.getElementById('darkModeBtn')?.addEventListener('click', () => applyAdminTheme('dark'));
});
