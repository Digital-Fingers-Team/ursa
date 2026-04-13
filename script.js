// ==================== CONSTANTS ====================
const STORAGE_KEYS = {
  users: "ursa_users",
  currentUser: "ursa_current_user",
  theme: "ursa_theme",
  complaints: "ursa_complaints",
  audit: "ursa_audit",
  language: "ursa_lang"
};

const DEFAULT_USER_AUTHORITIES = [
  { id: "prime-ministry", names: { ar: "رئاسة الوزراء", en: "Prime Minister's Office" } },
  { id: "education", names: { ar: "التربية والتعليم", en: "Education" } },
  { id: "youth", names: { ar: "الشباب والرياضة", en: "Youth and Sports" } },
  { id: "interior", names: { ar: "الداخلية", en: "Interior" } },
  { id: "communications", names: { ar: "الاتصالات", en: "Communications" } }
];

const GOVERNORATE_LABELS = {
  Cairo: { ar: "القاهرة", en: "Cairo" },
  Giza: { ar: "الجيزة", en: "Giza" },
  Alexandria: { ar: "الإسكندرية", en: "Alexandria" },
  Dakahlia: { ar: "الدقهلية", en: "Dakahlia" },
  "Red Sea": { ar: "البحر الأحمر", en: "Red Sea" },
  Beheira: { ar: "البحيرة", en: "Beheira" },
  Faiyum: { ar: "الفيوم", en: "Faiyum" },
  Gharbia: { ar: "الغربية", en: "Gharbia" },
  Ismailia: { ar: "الإسماعيلية", en: "Ismailia" },
  Menofia: { ar: "المنوفية", en: "Menofia" },
  Minya: { ar: "المنيا", en: "Minya" },
  Qalyubia: { ar: "القليوبية", en: "Qalyubia" },
  "New Valley": { ar: "الوادي الجديد", en: "New Valley" },
  Suez: { ar: "السويس", en: "Suez" },
  Aswan: { ar: "أسوان", en: "Aswan" },
  Asyut: { ar: "أسيوط", en: "Asyut" },
  "Beni Suef": { ar: "بني سويف", en: "Beni Suef" },
  "Port Said": { ar: "بورسعيد", en: "Port Said" },
  Damietta: { ar: "دمياط", en: "Damietta" },
  Sharqia: { ar: "الشرقية", en: "Sharqia" },
  "South Sinai": { ar: "جنوب سيناء", en: "South Sinai" },
  "Kafr El Sheikh": { ar: "كفر الشيخ", en: "Kafr El Sheikh" },
  Matrouh: { ar: "مطروح", en: "Matrouh" },
  Luxor: { ar: "الأقصر", en: "Luxor" },
  Qena: { ar: "قنا", en: "Qena" },
  "North Sinai": { ar: "شمال سيناء", en: "North Sinai" },
  Sohag: { ar: "سوهاج", en: "Sohag" }
};

const USER_TRANSLATIONS = {
  ar: {
    lang_btn: "English",
    nav_home: "الرئيسية",
    nav_report: "إرسال طلب",
    nav_myreports: "طلباتي",
    nav_emergency: "الطوارئ",
    nav_settings: "الإعدادات",
    home_title: "لوحة المستخدم",
    quick_report_title: "طلب سريع",
    quick_report_desc: "انتقل مباشرة إلى صفحة إرسال الطلب",
    quick_report_btn: "إرسال سريع",
    safety_stats_title: "حالة الحساب",
    stats_ready: "حسابك جاهز للاستخدام",
    account_title: "الحساب",
    account_logged_in: "تم تسجيل الدخول",
    settings_title: "الملف الشخصي",
    settings_profile_preview: "معاينة ملف URSA الشخصي",
    update_profile_btn: "تحديث الملف الشخصي",
    logout_btn: "تسجيل الخروج",
    login_welcome: "مرحباً بعودتك",
    login_subtitle: "سجل الدخول إلى حسابك في URSA",
    login_identifier_label: "رقم الهاتف أو الرقم القومي",
    login_identifier_placeholder: "رقم الهاتف أو الرقم القومي",
    login_password_label: "كلمة المرور",
    login_password_placeholder: "كلمة المرور",
    login_btn: "تسجيل الدخول",
    create_account_btn: "إنشاء حساب",
    admin_login_btn: "دخول الأدمن",
    register_title: "إنشاء حساب",
    register_subtitle: "سجل حساب مستخدم جديد على URSA",
    register_as_label: "التسجيل كـ",
    role_citizen: "مواطن",
    role_admin: "أدمن",
    full_name_label: "الاسم الكامل",
    full_name_placeholder: "الاسم الكامل",
    national_id_label: "الرقم القومي",
    national_id_placeholder: "الرقم القومي",
    governorate_label: "المحافظة",
    governorate_placeholder: "-- اختر المحافظة --",
    phone_label: "رقم الهاتف",
    phone_placeholder: "رقم الهاتف (11 رقم)",
    id_card_label: "صورة البطاقة",
    password_label: "كلمة المرور",
    password_placeholder: "كلمة المرور",
    confirm_password_label: "تأكيد كلمة المرور",
    confirm_password_placeholder: "تأكيد كلمة المرور",
    password_mismatch: "كلمتا المرور غير متطابقتين",
    register_btn: "تسجيل",
    back_to_login: "العودة لتسجيل الدخول",
    report_title: "إرسال طلب",
    request_type_label: "نوع الطلب",
    request_type_message: "رسالة",
    request_type_complaint: "شكوى",
    description_label: "الوصف",
    description_placeholder: "اكتب تفاصيل الرسالة أو الشكوى...",
    target_authority_label: "الجهة المختصة",
    authority_placeholder: "-- اختر الجهة --",
    select_photo_btn: "اختر صورة من المعرض",
    select_video_btn: "اختر فيديو",
    remove_photo_btn: "إزالة الصورة",
    remove_video_btn: "إزالة الفيديو",
    location_title: "الموقع",
    use_location_btn: "استخدم موقعي الحالي",
    location_label: "الموقع",
    location_placeholder: "العنوان أو الإحداثيات",
    category_label: "التصنيف",
    category_accident: "حادث",
    category_theft: "سرقة",
    category_road_damage: "تلف طريق",
    category_broken_light: "إنارة تالفة",
    general_message_category: "رسالة عامة",
    submit_report_btn: "إرسال الطلب",
    view_reports_btn: "عرض طلباتي",
    my_requests_title: "طلباتي",
    new_request_btn: "طلب جديد",
    no_requests_yet: "لا توجد طلبات حتى الآن",
    report_type_label: "نوع الطلب",
    authority_label: "الجهة",
    status_label: "الحالة",
    submitted_at_label: "تاريخ الإرسال",
    attachment_label: "المرفقات",
    attachment_image: "صورة",
    attachment_video: "فيديو",
    emergency_title: "مركز الطوارئ",
    emergency_police: "الشرطة",
    emergency_ambulance: "الإسعاف",
    emergency_fire: "المطافئ",
    greeting_morning: "صباح الخير",
    greeting_afternoon: "مساء الخير",
    greeting_evening: "مساء النور",
    national_id_value: "الرقم القومي",
    report_type_message_badge: "رسالة",
    report_type_complaint_badge: "شكوى",
    status_pending: "قيد المراجعة",
    status_approved: "معتمد",
    status_resolved: "تم الحل",
    status_in_progress: "جارٍ المتابعة",
    validation_select_type: "اختر نوع الطلب أولاً.",
    validation_select_category: "اختر تصنيف الشكوى.",
    validation_select_authority: "اختر الجهة المختصة.",
    validation_write_description: "اكتب وصف الطلب.",
    validation_login_first: "سجل الدخول أولاً.",
    submit_success: "تم إرسال الطلب بنجاح.",
    profile_updated: "تم تحديث الملف الشخصي.",
    fill_all_fields: "من فضلك أكمل كل الحقول المطلوبة.",
    wrong_credentials: "بيانات الدخول غير صحيحة.",
    register_all_fields: "جميع الحقول مطلوبة.",
    register_upload_id: "من فضلك ارفع صورة البطاقة.",
    register_id_digits: "الرقم القومي يجب أن يكون 14 رقمًا.",
    register_phone_digits: "رقم الهاتف يجب أن يكون 11 رقمًا.",
    register_user_exists: "المستخدم مسجل بالفعل.",
    register_success: "تم إنشاء الحساب بنجاح.",
    register_storage_error: "تعذر حفظ بيانات الحساب. استخدم صورة أصغر ثم حاول مرة أخرى.",
    register_image_error: "تعذر معالجة صورة البطاقة. جرّب صورة أخرى.",
    geolocation_not_supported: "المتصفح لا يدعم تحديد الموقع.",
    geolocation_failed: "تعذر تحديد الموقع الحالي.",
    attachment_save_error: "تعذر حفظ المرفقات. جرّب ملفات أصغر أو أعد المحاولة."
  },
  en: {
    lang_btn: "العربية",
    nav_home: "Home",
    nav_report: "Submit Request",
    nav_myreports: "My Requests",
    nav_emergency: "Emergency",
    nav_settings: "Settings",
    home_title: "User Dashboard",
    quick_report_title: "Quick Request",
    quick_report_desc: "Go directly to the request page",
    quick_report_btn: "Quick Request",
    safety_stats_title: "Account Status",
    stats_ready: "Your account is ready",
    account_title: "Account",
    account_logged_in: "Logged in",
    settings_title: "Profile",
    settings_profile_preview: "URSA profile preview",
    update_profile_btn: "Update Profile",
    logout_btn: "Log Out",
    login_welcome: "Welcome back",
    login_subtitle: "Login to your URSA account",
    login_identifier_label: "Phone or National ID",
    login_identifier_placeholder: "Phone or National ID",
    login_password_label: "Password",
    login_password_placeholder: "Password",
    login_btn: "Login",
    create_account_btn: "Create account",
    admin_login_btn: "Admin Login",
    register_title: "Create account",
    register_subtitle: "Register a new URSA user account",
    register_as_label: "Register as",
    role_citizen: "Citizen",
    role_admin: "Admin",
    full_name_label: "Full name",
    full_name_placeholder: "Full name",
    national_id_label: "National ID",
    national_id_placeholder: "National ID",
    governorate_label: "Governorate",
    governorate_placeholder: "-- Select Governorate --",
    phone_label: "Phone number",
    phone_placeholder: "Phone number (11 digits)",
    id_card_label: "ID Card Image",
    password_label: "Password",
    password_placeholder: "Password",
    confirm_password_label: "Confirm password",
    confirm_password_placeholder: "Confirm password",
    password_mismatch: "Passwords do not match",
    register_btn: "Register",
    back_to_login: "Back to login",
    report_title: "Submit Request",
    request_type_label: "Request type",
    request_type_message: "Message",
    request_type_complaint: "Complaint",
    description_label: "Description",
    description_placeholder: "Write the details of your message or complaint...",
    target_authority_label: "Target authority",
    authority_placeholder: "-- Select authority --",
    select_photo_btn: "Select Photo from Gallery",
    select_video_btn: "Select Video",
    remove_photo_btn: "Remove Photo",
    remove_video_btn: "Remove Video",
    location_title: "Location",
    use_location_btn: "Use my current location",
    location_label: "Location",
    location_placeholder: "Address or coordinates",
    category_label: "Category",
    category_accident: "Accident",
    category_theft: "Theft",
    category_road_damage: "Road Damage",
    category_broken_light: "Broken Light",
    general_message_category: "General Message",
    submit_report_btn: "Submit Request",
    view_reports_btn: "View My Requests",
    my_requests_title: "My Requests",
    new_request_btn: "New Request",
    no_requests_yet: "No requests yet",
    report_type_label: "Request Type",
    authority_label: "Authority",
    status_label: "Status",
    submitted_at_label: "Submitted At",
    attachment_label: "Attachments",
    attachment_image: "Image",
    attachment_video: "Video",
    emergency_title: "Emergency Center",
    emergency_police: "Police",
    emergency_ambulance: "Ambulance",
    emergency_fire: "Fire",
    greeting_morning: "Good morning",
    greeting_afternoon: "Good afternoon",
    greeting_evening: "Good evening",
    national_id_value: "National ID",
    report_type_message_badge: "Message",
    report_type_complaint_badge: "Complaint",
    status_pending: "Pending Review",
    status_approved: "Approved",
    status_resolved: "Resolved",
    status_in_progress: "In Progress",
    validation_select_type: "Please choose the request type first.",
    validation_select_category: "Please choose a complaint category.",
    validation_select_authority: "Please choose the target authority.",
    validation_write_description: "Please write a description.",
    validation_login_first: "Please login first.",
    submit_success: "Request submitted successfully.",
    profile_updated: "Profile updated successfully.",
    fill_all_fields: "Please complete all required fields.",
    wrong_credentials: "Wrong credentials.",
    register_all_fields: "All fields are required.",
    register_upload_id: "Please upload your ID card image.",
    register_id_digits: "National ID must be exactly 14 digits.",
    register_phone_digits: "Phone number must be exactly 11 digits.",
    register_user_exists: "User already exists.",
    register_success: "Account created successfully.",
    register_storage_error: "Unable to save account data. Please use a smaller ID image and try again.",
    register_image_error: "Unable to process the ID image. Please choose another image and try again.",
    geolocation_not_supported: "Geolocation is not supported.",
    geolocation_failed: "Unable to fetch your location.",
    attachment_save_error: "Unable to save attachments. Please try smaller files or retry."
  }
};

const USER_PAGE_TITLES = {
  "index.html": { ar: "URSA · الرئيسية", en: "URSA · Home" },
  "login.html": { ar: "URSA · تسجيل الدخول", en: "URSA · Login" },
  "register.html": { ar: "URSA · إنشاء حساب", en: "URSA · Register" },
  "home.html": { ar: "URSA · لوحة المستخدم", en: "URSA · User Dashboard" },
  "report.html": { ar: "URSA · إرسال طلب", en: "URSA · Submit Request" },
  "myreports.html": { ar: "URSA · طلباتي", en: "URSA · My Requests" },
  "settings.html": { ar: "URSA · الإعدادات", en: "URSA · Settings" },
  "emergency.html": { ar: "URSA · الطوارئ", en: "URSA · Emergency" }
};

const ATTACHMENTS_DB_NAME = "ursa_media_db";
const ATTACHMENTS_STORE_NAME = "attachments";
const PENDING_IMAGE_SESSION_KEY = "ursa_pending_report_image";

// ==================== USER FUNCTIONS ====================
function getUsers() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.users) || "[]");
}

function setUsers(users) {
  localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(users));
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.currentUser) || "null");
}

function setCurrentUser(user) {
  localStorage.setItem(STORAGE_KEYS.currentUser, JSON.stringify(user));
}

function clearCurrentUser() {
  localStorage.removeItem(STORAGE_KEYS.currentUser);
}

function pushAudit(type, message, extra) {
  try {
    var log = JSON.parse(localStorage.getItem(STORAGE_KEYS.audit) || '[]');
    var user = getCurrentUser();
    log.push({
      id: Date.now(),
      type: type,
      message: message,
      user: user && user.nationalId ? user.nationalId : null,
      ts: new Date().toISOString(),
      extra: extra || null
    });
    if (log.length > 300) log = log.slice(log.length - 300);
    localStorage.setItem(STORAGE_KEYS.audit, JSON.stringify(log));
  } catch (e) {}
}

function getCurrentLanguage() {
  return localStorage.getItem(STORAGE_KEYS.language) === "en" ? "en" : "ar";
}

function t(key) {
  const lang = getCurrentLanguage();
  return (USER_TRANSLATIONS[lang] && USER_TRANSLATIONS[lang][key]) || key;
}

function escapeHtml(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getCurrentPageName() {
  return window.location.pathname.split("/").pop() || "index.html";
}

function setDocumentTitle() {
  const entry = USER_PAGE_TITLES[getCurrentPageName()];
  if (!entry) return;
  document.title = entry[getCurrentLanguage()];
}

function formatLocalizedDate(value) {
  if (!value) return "-";
  try {
    return new Date(value).toLocaleString(getCurrentLanguage() === "ar" ? "ar-EG" : "en-US");
  } catch (error) {
    return String(value);
  }
}

function getAuthorityDisplayName(authority, lang) {
  if (!authority) return "-";
  if (authority.names && authority.names[lang]) return authority.names[lang];
  return authority.displayName || authority.id || "-";
}

function getAvailableAuthorities() {
  try {
    const platformState = JSON.parse(localStorage.getItem("ursa_admin_platform_state_v3") || "null");
    const ministries = platformState && Array.isArray(platformState.ministries) ? platformState.ministries : [];
    const approved = ministries.filter(item => item && item.status === "approved");
    if (approved.length) return approved;
  } catch (error) {}

  try {
    const ministries = JSON.parse(localStorage.getItem("ursa_ministries") || "[]");
    const approved = ministries.filter(item => item && item.status === "approved");
    if (approved.length) return approved;
  } catch (error) {}

  return DEFAULT_USER_AUTHORITIES.slice();
}

function getAuthorityById(authorityId) {
  return getAvailableAuthorities().find(item => item.id === authorityId) || null;
}

function getRequestTypeLabel(type) {
  return type === "message" ? t("request_type_message") : t("request_type_complaint");
}

function getStatusLabel(status) {
  if (status === "approved") return t("status_approved");
  if (status === "resolved") return t("status_resolved");
  if (status === "in_progress") return t("status_in_progress");
  return t("status_pending");
}

function setTranslatedText(element, text) {
  if (!element) return;
  const requiredStar = element.querySelector(".required-star");
  if (requiredStar) {
    const textNode = Array.from(element.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
    if (textNode) {
      textNode.textContent = text + " ";
      return;
    }
  }
  element.textContent = text;
}

function applyUserTranslations() {
  const lang = getCurrentLanguage();
  const entries = USER_TRANSLATIONS[lang];

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (Object.prototype.hasOwnProperty.call(entries, key)) {
      setTranslatedText(element, entries[key]);
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (Object.prototype.hasOwnProperty.call(entries, key)) {
      element.setAttribute("placeholder", entries[key]);
    }
  });

  setDocumentTitle();
  localizeGovernorates();
  populateAuthoritySelect();
  updateReportTypeUI();
}

function localizeGovernorates() {
  const select = document.getElementById("regGovernorate");
  if (!select) return;
  const lang = getCurrentLanguage();
  Array.from(select.options).forEach(option => {
    if (!option.value) {
      option.textContent = t("governorate_placeholder");
      return;
    }
    if (GOVERNORATE_LABELS[option.value]) {
      option.textContent = GOVERNORATE_LABELS[option.value][lang];
    }
  });
}

function populateAuthoritySelect() {
  const select = document.getElementById("reportMinistry");
  if (!select) return;

  const currentValue = select.value;
  const lang = getCurrentLanguage();
  const authorities = getAvailableAuthorities();
  const options = [`<option value="">${escapeHtml(t("authority_placeholder"))}</option>`];

  authorities.forEach(authority => {
    options.push(
      `<option value="${escapeHtml(authority.id)}">${escapeHtml(getAuthorityDisplayName(authority, lang))}</option>`
    );
  });

  select.innerHTML = options.join("");
  if (currentValue && authorities.some(item => item.id === currentValue)) {
    select.value = currentValue;
  }
}

function updateReportTypeUI() {
  const selectedTypeInput = document.getElementById("selectedReportType");
  const categorySection = document.getElementById("reportCategorySection");
  const selectedType = selectedTypeInput ? selectedTypeInput.value : "";
  const selectedCategory = document.getElementById("selectedCategory");

  document.querySelectorAll(".request-type-btn").forEach(button => {
    button.classList.toggle("primary", button.dataset.type === selectedType);
  });

  if (!categorySection || !selectedCategory) return;

  if (selectedType === "message") {
    categorySection.style.display = "none";
    selectedCategory.value = t("general_message_category");
    document.querySelectorAll(".category-btn").forEach(btn => btn.classList.remove("primary"));
    return;
  }

  categorySection.style.display = "block";
  if (selectedType === "complaint" && selectedCategory.value === t("general_message_category")) {
    selectedCategory.value = "";
  }
}

function activateReportTypeButton(button) {
  const selectedTypeInput = document.getElementById("selectedReportType");
  if (!selectedTypeInput) return;
  selectedTypeInput.value = button.dataset.type;
  updateReportTypeUI();
}

function rerenderCurrentPageData() {
  const user = getCurrentUser();
  if (user) {
    populateUserData();
    updateGreeting();
  }
  if (window.location.pathname.includes("myreports.html")) {
    loadReports();
  }
}
// ==================== LAYOUT INJECTION = :root ====================
function injectLayout() {
  const isLoginPage = window.location.pathname.includes('login.html') || 
                     window.location.pathname.includes('register.html') || 
                     window.location.pathname.endsWith('index.html');

  // Skip sidebar for login/register
  if (!isLoginPage) {
    const sidebarHTML = `
      <div class="overlay" id="overlay"></div>
      <aside class="sidebar" id="sidebar">
        <div class="close-btn" id="closeSidebar">&times;</div>
        <ul>
          <li><a href="home.html" data-nav="home.html"><i class="fas fa-house"></i> ${t("nav_home")}</a></li>
          <li><a href="report.html" data-nav="report.html"><i class="fas fa-camera"></i> ${t("nav_report")}</a></li>
          <li><a href="myreports.html" data-nav="myreports.html"><i class="fas fa-clipboard-list"></i> ${t("nav_myreports")}</a></li>
          <li><a href="emergency.html" data-nav="emergency.html"><i class="fas fa-triangle-exclamation"></i> ${t("nav_emergency")}</a></li>
          <li><a href="settings.html" data-nav="settings.html"><i class="fas fa-gear"></i> ${t("nav_settings")}</a></li>
        </ul>
      </aside>
    `;
    document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
  }

  // Top Bar (always present but different icons)
  const topBarHTML = `
    <div class="top-bar">
      <div class="logo-area">
        ${!isLoginPage ? '<div class="hamburger" id="openSidebar"><i class="fas fa-bars"></i></div>' : ''}
        <div class="logo-container">
          <div class="logo-image"><img src="URSA 3.png" alt="URSA Logo" /></div>
          <div class="logo">URSA</div>
        </div>
      </div>
      <div class="theme-toggle">
        <button id="langToggle" class="glass-btn small" style="margin-right:8px;">${t("lang_btn")}</button>
        <i class="fas fa-sun" id="lightModeBtn"></i>
        <i class="fas fa-moon active" id="darkModeBtn"></i>
      </div>
    </div>
  `;
  
  // Inject before container if it exists
  const container = document.querySelector('.container');
  if (container) {
    container.insertAdjacentHTML('beforebegin', topBarHTML);
  } else {
    document.body.insertAdjacentHTML('afterbegin', topBarHTML);
  }

  // Set Active Nav
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar a[data-nav]').forEach(link => {
    if (link.getAttribute('data-nav') === currentPath) {
      link.classList.add('active-nav');
    }
  });
}

// ==================== UI FUNCTIONS ====================
function updateGreeting() {
  const homeGreeting = document.getElementById("homeGreeting");
  if (!homeGreeting) return;
  const hour = new Date().getHours();
  let greeting = t("greeting_evening");
  if (hour < 12) greeting = t("greeting_morning");
  else if (hour < 18) greeting = t("greeting_afternoon");
  homeGreeting.textContent = greeting;
}

function populateUserData() {
  const user = getCurrentUser();
  if (!user) return;
  
  const elements = {
    homeUserName: "fullName",
    homeUserMeta: "nationalId",
    homeGovernorate: "governorate",
    homePhone: "phone",
    accountIdText: "nationalId",
    settingsFullName: "fullName",
    settingsPhone: "phone",
    settingsGovernorate: "governorate"
  };

  for (const [id, key] of Object.entries(elements)) {
    const el = document.getElementById(id);
    if (el) {
      if (el.tagName === "INPUT") {
        el.value = user[key] || "";
      } else if (id === "homeUserMeta" || id === "accountIdText") {
        el.textContent = `${t("national_id_value")}: ${user[key] || "-"}`;
      } else {
        el.textContent = user[key] || (id.includes("Name") ? "-" : "");
      }
    }
  }
}

// ==================== THEME FUNCTIONS ====================
function applyTheme(mode) {
  const body = document.body;
  const lightModeBtn = document.getElementById("lightModeBtn");
  const darkModeBtn = document.getElementById("darkModeBtn");
  if (mode === "light") {
    body.classList.remove("dark");
    lightModeBtn?.classList.add("active");
    darkModeBtn?.classList.remove("active");
  } else {
    body.classList.add("dark");
    darkModeBtn?.classList.add("active");
    lightModeBtn?.classList.remove("active");
  }
  localStorage.setItem(STORAGE_KEYS.theme, mode);
}

// ==================== SIDEBAR FUNCTIONS ====================
function openSidebar() {
  document.getElementById("sidebar")?.classList.add("open");
  document.getElementById("overlay")?.classList.add("show");
}

function closeSidebar() {
  document.getElementById("sidebar")?.classList.remove("open");
  document.getElementById("overlay")?.classList.remove("show");
}

// ==================== ATTACHMENT FUNCTIONS ====================
function ensureAttachmentState() {
  if (!window.reportAttachments) {
    window.reportAttachments = {
      image: null,
      video: null
    };
  }
  return window.reportAttachments;
}

function dataUrlToBlob(dataUrl) {
  const parts = String(dataUrl || "").split(",");
  const meta = parts[0] || "";
  const mimeMatch = meta.match(/data:(.*?);base64/);
  const mimeType = mimeMatch ? mimeMatch[1] : "application/octet-stream";
  const binary = atob(parts[1] || "");
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new Blob([bytes], { type: mimeType });
}

function openAttachmentsDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(ATTACHMENTS_DB_NAME, 1);
    request.onupgradeneeded = function(event) {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(ATTACHMENTS_STORE_NAME)) {
        db.createObjectStore(ATTACHMENTS_STORE_NAME, { keyPath: "id" });
      }
    };
    request.onsuccess = function() {
      resolve(request.result);
    };
    request.onerror = function() {
      reject(request.error || new Error("Failed to open IndexedDB"));
    };
  });
}

function saveAttachmentRecord(record) {
  return openAttachmentsDb().then(db => new Promise((resolve, reject) => {
    const transaction = db.transaction(ATTACHMENTS_STORE_NAME, "readwrite");
    transaction.oncomplete = function() {
      db.close();
      resolve(record);
    };
    transaction.onerror = function() {
      db.close();
      reject(transaction.error || new Error("Failed to save attachment"));
    };
    transaction.objectStore(ATTACHMENTS_STORE_NAME).put(record);
  }));
}

function getAttachmentRecord(attachmentId) {
  return openAttachmentsDb().then(db => new Promise((resolve, reject) => {
    const transaction = db.transaction(ATTACHMENTS_STORE_NAME, "readonly");
    const request = transaction.objectStore(ATTACHMENTS_STORE_NAME).get(attachmentId);
    request.onsuccess = function() {
      db.close();
      resolve(request.result || null);
    };
    request.onerror = function() {
      db.close();
      reject(request.error || new Error("Failed to load attachment"));
    };
  }));
}

function createAttachmentRecord(kind, attachment) {
  if (!attachment) return Promise.resolve(null);

  let blob = attachment.file || null;
  let fileName = attachment.fileName || (kind === "video" ? `video-${Date.now()}.mp4` : `image-${Date.now()}.jpg`);
  let mimeType = attachment.mimeType || (kind === "video" ? "video/mp4" : "image/jpeg");

  if (!blob && attachment.dataUrl) {
    blob = dataUrlToBlob(attachment.dataUrl);
    mimeType = blob.type || mimeType;
  }

  if (!blob) {
    return Promise.resolve(null);
  }

  const record = {
    id: `${kind}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    kind,
    blob,
    fileName,
    mimeType: blob.type || mimeType,
    size: blob.size || 0,
    createdAt: new Date().toISOString()
  };

  return saveAttachmentRecord(record);
}

function renderAttachmentPreview(kind) {
  const state = ensureAttachmentState();
  const attachment = state[kind];
  const preview = document.getElementById(kind === "image" ? "imagePreview" : "videoPreview");
  const removeBtn = document.getElementById(kind === "image" ? "removeImageBtn" : "removeVideoBtn");
  if (!preview || !removeBtn) return;

  if (!attachment) {
    preview.innerHTML = "";
    preview.classList.remove("active");
    removeBtn.style.display = "none";
    return;
  }

  let mediaHtml = "";
  if (kind === "image") {
    mediaHtml = `<img src="${attachment.previewUrl}" alt="preview" style="width:100%; border-radius:24px;">`;
  } else {
    mediaHtml = `<video controls style="width:100%; border-radius:24px;"><source src="${attachment.previewUrl}" type="${attachment.mimeType || "video/mp4"}"></video>`;
  }

  preview.innerHTML = mediaHtml;
  preview.classList.add("active");
  removeBtn.style.display = "block";
}

function setPendingQuickImage(dataUrl) {
  try {
    sessionStorage.setItem(PENDING_IMAGE_SESSION_KEY, dataUrl);
  } catch (error) {}
}

function restorePendingQuickImage() {
  try {
    const dataUrl = sessionStorage.getItem(PENDING_IMAGE_SESSION_KEY);
    if (!dataUrl) return;
    sessionStorage.removeItem(PENDING_IMAGE_SESSION_KEY);
    const state = ensureAttachmentState();
    state.image = {
      kind: "image",
      dataUrl,
      previewUrl: dataUrl,
      fileName: `quick-report-${Date.now()}.jpg`,
      mimeType: "image/jpeg"
    };
    renderAttachmentPreview("image");
  } catch (error) {}
}

function handleAttachmentSelect(kind, event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const state = ensureAttachmentState();
  if (state[kind] && state[kind].previewUrl && state[kind].previewUrl.startsWith("blob:")) {
    URL.revokeObjectURL(state[kind].previewUrl);
  }

  state[kind] = {
    kind,
    file,
    fileName: file.name,
    mimeType: file.type,
    previewUrl: URL.createObjectURL(file)
  };
  renderAttachmentPreview(kind);
}

function removeSelectedAttachment(kind) {
  const state = ensureAttachmentState();
  const current = state[kind];
  if (current && current.previewUrl && current.previewUrl.startsWith("blob:")) {
    URL.revokeObjectURL(current.previewUrl);
  }
  state[kind] = null;

  if (kind === "image") {
    try { sessionStorage.removeItem(PENDING_IMAGE_SESSION_KEY); } catch (error) {}
  }

  const input = document.getElementById(kind === "image" ? "reportImageInput" : "reportVideoInput");
  if (input) input.value = "";
  renderAttachmentPreview(kind);
}

function optimizeImageFile(file, onSuccess, onError) {
  if (!file) {
    onError && onError(new Error('No file selected'));
    return;
  }

  const reader = new FileReader();
  reader.onload = function(ev) {
    const img = new Image();
    img.onload = function() {
      try {
        const maxWidth = 1280;
        const maxHeight = 1280;
        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext('2d');
        if (!context) {
          const dataUrl = ev && ev.target ? ev.target.result : null;
          if (dataUrl) {
            onSuccess && onSuccess(dataUrl);
            return;
          }
          onError && onError(new Error('Canvas is not supported'));
          return;
        }

        context.drawImage(img, 0, 0, width, height);
        const compressed = canvas.toDataURL('image/jpeg', 0.72);
        onSuccess && onSuccess(compressed);
      } catch (error) {
        const dataUrl = ev && ev.target ? ev.target.result : null;
        if (dataUrl) {
          onSuccess && onSuccess(dataUrl);
        } else {
          onError && onError(error);
        }
      }
    };
    img.onerror = function() {
      const dataUrl = ev && ev.target ? ev.target.result : null;
      if (dataUrl) {
        onSuccess && onSuccess(dataUrl);
      } else {
        onError && onError(new Error('Invalid image'));
      }
    };
    img.src = ev && ev.target ? ev.target.result : "";
  };
  reader.onerror = function() {
    try {
      const fallback = new FileReader();
      fallback.onload = function(ev2) {
        const dataUrl = ev2 && ev2.target ? ev2.target.result : null;
        if (dataUrl) {
          onSuccess && onSuccess(dataUrl);
        } else {
          onError && onError(new Error('Failed to read file'));
        }
      };
      fallback.onerror = function() {
        onError && onError(new Error('Failed to read file'));
      };
      fallback.readAsDataURL(file);
    } catch (_) {
      onError && onError(new Error('Failed to read file'));
    }
  };
  reader.readAsDataURL(file);
}

// ==================== REPORT FUNCTIONS ====================
function activateCategoryButton(button) {
  document.querySelectorAll(".category-btn").forEach(btn => btn.classList.remove("primary"));
  button.classList.add("primary");
  const selectedCategoryInput = document.getElementById("selectedCategory");
  if (selectedCategoryInput) selectedCategoryInput.value = button.dataset.category;
}

async function handleReportSubmit(event) {
  event.preventDefault();
  const reportType = document.getElementById("selectedReportType")?.value || "";
  const category = document.getElementById("selectedCategory")?.value || "";
  const description = document.getElementById("reportDescription").value.trim();
  const location = document.getElementById("reportlocation").value.trim() || "Benha";
  const ministryId = document.getElementById("reportMinistry")?.value || "";

  if (!reportType) { alert(t("validation_select_type")); return; }
  if (!ministryId) { alert(t("validation_select_authority")); return; }
  if (reportType === "complaint" && !category) { alert(t("validation_select_category")); return; }
  if (!description) { alert(t("validation_write_description")); return; }

  const user = getCurrentUser();
  if (!user) { alert(t("validation_login_first")); window.location.href = "login.html"; return; }

  const authority = getAuthorityById(ministryId);
  const createdAt = new Date().toISOString();
  const finalCategory = reportType === "message" ? t("general_message_category") : category;
  const attachmentState = ensureAttachmentState();

  let attachments = [];
  try {
    const savedImage = await createAttachmentRecord("image", attachmentState.image);
    const savedVideo = await createAttachmentRecord("video", attachmentState.video);
    attachments = [savedImage, savedVideo].filter(Boolean).map(item => ({
      id: item.id,
      kind: item.kind,
      fileName: item.fileName,
      mimeType: item.mimeType,
      size: item.size
    }));
  } catch (error) {
    console.error("Attachment save error:", error);
    alert(t("attachment_save_error"));
    return;
  }

  const complaint = {
    id: "REP-" + Date.now() + "-" + Math.floor(Math.random() * 1000),
    type: reportType,
    description: description,
    category: finalCategory,
    location: location,
    status: "pending",
    attachments,
    createdAt: createdAt,
    date: createdAt,
    ministryId: ministryId,
    ministryName: getAuthorityDisplayName(authority, getCurrentLanguage()),
    userNationalId: user.nationalId,
    userFullName: user.fullName,
    userPhone: user.phone
  };

  let complaints = JSON.parse(localStorage.getItem(STORAGE_KEYS.complaints) || '[]');
  complaints.push(complaint);
  localStorage.setItem(STORAGE_KEYS.complaints, JSON.stringify(complaints));

  alert(t("submit_success"));
  pushAudit('report', 'Request submitted', { id: complaint.id, type: complaint.type, category: complaint.category, location: complaint.location, ministryId: complaint.ministryId });
  removeSelectedAttachment("image");
  removeSelectedAttachment("video");
  window.location.href = 'myreports.html';
}

function loadReports() {
  const container = document.getElementById('reportsContainer');
  if (!container) return;
  const user = getCurrentUser();
  const reports = JSON.parse(localStorage.getItem(STORAGE_KEYS.complaints) || '[]')
    .filter(report => !user || !report.userNationalId || report.userNationalId === user.nationalId);
  if (reports.length === 0) {
    container.innerHTML = `<p style="text-align: center; color: var(--text-secondary); padding: 20px;">${escapeHtml(t("no_requests_yet"))}</p>`;
    return;
  }
  let html = '';
  reports.slice().reverse().forEach(r => {
    const authority = r.ministryName || getAuthorityDisplayName(getAuthorityById(r.ministryId), getCurrentLanguage());
    const attachmentLabels = (r.attachments || []).map(item => item.kind === "video" ? t("attachment_video") : t("attachment_image"));
    html += `<div class="report-card">
      <p><strong>📝 ${escapeHtml(r.description || "-")}</strong></p>
      <p>📬 ${escapeHtml(t("report_type_label"))}: ${escapeHtml(getRequestTypeLabel(r.type || "complaint"))}</p>
      <p>🏢 ${escapeHtml(t("authority_label"))}: ${escapeHtml(authority || "-")}</p>
      <p>🏷️ ${escapeHtml(t("category_label"))}: ${escapeHtml(r.category || "-")}</p>
      <p>📍 ${escapeHtml(t("location_label"))}: ${escapeHtml(r.location || "-")}</p>
      <p>📎 ${escapeHtml(t("attachment_label"))}: ${escapeHtml(attachmentLabels.length ? attachmentLabels.join(" + ") : "-")}</p>
      <p class="date">📅 ${escapeHtml(t("submitted_at_label"))}: ${escapeHtml(formatLocalizedDate(r.createdAt || r.date))}</p>
      <span class="badge">⏳ ${escapeHtml(getStatusLabel(r.status))}</span>
    </div>`;
  });
  container.innerHTML = html;
}

// ==================== AUTH HANDLERS ====================
function handleLogin(e) {
  e.preventDefault();
  const identifier = document.getElementById('loginIdentifier').value.trim();
  const password = document.getElementById('loginPassword').value;
  const users = getUsers();
  const user = users.find(u => (u.phone === identifier || u.nationalId === identifier) && u.password === password);
  
  if (user) {
    setCurrentUser(user);
    pushAudit('login', 'User logged in', { identifier });
    window.location.href = 'home.html';
  } else {
    const errorEl = document.getElementById('loginError');
    if (errorEl) {
      errorEl.textContent = t("wrong_credentials");
      errorEl.style.display = 'block';
    }
  }
}

async function handleRegister(e) {
  e.preventDefault();
  const errorEl = document.getElementById('registerError');
  const successEl = document.getElementById('registerSuccess');
  const passMatchErr = document.getElementById('passwordMatchError');
  if (errorEl) {
    errorEl.textContent = '';
    errorEl.style.display = 'none';
  }
  if (successEl) {
    successEl.textContent = '';
    successEl.style.display = 'none';
  }
  if (passMatchErr) {
    passMatchErr.style.display = 'none';
  }
  const role = document.getElementById('regRole') ? document.getElementById('regRole').value : 'citizen';
  if (role === 'admin') {
    window.location.href = 'admin-login.html';
    return;
  }
  const fullName = document.getElementById('regFullName').value.trim();
  const nationalId = document.getElementById('regNationalId').value.trim();
  const governorate = document.getElementById('regGovernorate').value;
  const phone = document.getElementById('regPhone').value.trim();
  const password = document.getElementById('regPassword').value;
  const confirmPass = document.getElementById('regConfirmPassword').value;
  const idCardInput = document.getElementById('regIdCard');

  const showErr = (msg) => { if (errorEl) { errorEl.textContent = msg; errorEl.style.display = 'block'; } };

  if (!fullName || !nationalId || !governorate || !phone || !password || !confirmPass) {
    showErr(t("register_all_fields")); return;
  }
  if (!idCardInput || !idCardInput.files || !idCardInput.files[0]) {
    showErr(t("register_upload_id")); return;
  }

  if (!/^\d{14}$/.test(nationalId)) {
    showErr(t("register_id_digits")); return;
  }

  if (!/^\d{11}$/.test(phone)) {
    showErr(t("register_phone_digits")); return;
  }
 

  if (password !== confirmPass) {
    if (passMatchErr) passMatchErr.style.display = 'block';
    return;
  }
  
  const users = getUsers();
  if (users.some(u => u.phone === phone || u.nationalId === nationalId)) {
    showErr(t("register_user_exists"));
    return;
  }

  optimizeImageFile(idCardInput.files[0], async function(idCardImage) {
    try {
      const idCardRecord = await createAttachmentRecord("image", {
        dataUrl: idCardImage,
        file: idCardInput.files[0],
        fileName: idCardInput.files[0].name || `id-card-${Date.now()}.jpg`,
        mimeType: idCardInput.files[0].type || "image/jpeg"
      });

      const newUser = {
        fullName,
        nationalId,
        governorate,
        phone,
        password,
        idCardAttachmentId: idCardRecord ? idCardRecord.id : null,
        role: 'citizen'
      };

      users.push(newUser);
      setUsers(users);
      setCurrentUser(newUser);
      pushAudit('register', 'User registered', { nationalId, governorate, phone });
      if (successEl) { successEl.textContent = t("register_success"); successEl.style.display = 'block'; }
      window.location.href = 'home.html';
    } catch (storageError) {
      console.error('Registration storage error:', storageError);
      showErr(t("register_storage_error"));
    }
  }, function() {
    showErr(t("register_image_error"));
  });
}

function handleSettingsUpdate(e) {
  e.preventDefault();
  const user = getCurrentUser();
  if (!user) return;
  const fullName = document.getElementById('settingsFullName').value.trim();
  const phone = document.getElementById('settingsPhone').value.trim();
  const governorate = document.getElementById('settingsGovernorate').value.trim();
  
  if (!fullName || !phone || !governorate) { alert(t("fill_all_fields")); return; }
  
  const users = getUsers();
  const updatedUser = { ...user, fullName, phone, governorate };
  const updatedUsers = users.map(u => u.nationalId === user.nationalId ? updatedUser : u);
  setUsers(updatedUsers);
  setCurrentUser(updatedUser);
  pushAudit('profile_update', 'Profile updated', { fullName, phone, governorate });
  alert(t("profile_updated"));
}

function applySiteLanguage(lang) {
  const nextLang = lang === "en" ? "en" : "ar";
  document.documentElement.lang = nextLang;
  document.documentElement.dir = nextLang === "ar" ? "rtl" : "ltr";
  localStorage.setItem(STORAGE_KEYS.language, nextLang);
  const btn = document.getElementById("langToggle");
  if (btn) btn.textContent = USER_TRANSLATIONS[nextLang].lang_btn;
  applyUserTranslations();
  rerenderCurrentPageData();
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes("map.html")) {
    window.location.href = "report.html";
    return;
  }

  injectLayout();
  const savedTheme = localStorage.getItem(STORAGE_KEYS.theme) || 'dark';
  applyTheme(savedTheme);
  var savedLang = getCurrentLanguage();
  applySiteLanguage(savedLang);

  var langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.addEventListener('click', function() {
      var current = getCurrentLanguage();
      var next = current === 'ar' ? 'en' : 'ar';
      applySiteLanguage(next);
    });
  }

  const isAuthPage = window.location.pathname.includes('login.html') || window.location.pathname.includes('register.html') || window.location.pathname.endsWith('/');
  const user = getCurrentUser();

  if (!user && !isAuthPage && !window.location.pathname.includes('index.html')) {
    window.location.href = 'login.html';
    return;
  }

  // Sidebar events
  document.getElementById('openSidebar')?.addEventListener('click', openSidebar);
  document.getElementById('closeSidebar')?.addEventListener('click', closeSidebar);
  document.getElementById('overlay')?.addEventListener('click', closeSidebar);

  // Theme toggle events
  document.getElementById('lightModeBtn')?.addEventListener('click', () => applyTheme('light'));
  document.getElementById('darkModeBtn')?.addEventListener('click', () => applyTheme('dark'));

  // Page specific initializations
  if (user) {
    populateUserData();
    updateGreeting();
  }

  if (window.location.pathname.includes('myreports.html')) {
    loadReports();
  }

  // Form event listeners
  document.getElementById('loginForm')?.addEventListener('submit', handleLogin);
  document.getElementById('registerForm')?.addEventListener('submit', handleRegister);
  document.getElementById('reportForm')?.addEventListener('submit', handleReportSubmit);
  document.getElementById('settingsForm')?.addEventListener('submit', handleSettingsUpdate);

  // Attachment events
  document.getElementById('uploadImageButton')?.addEventListener('click', () => {
    document.getElementById('reportImageInput')?.click();
  });
  document.getElementById('uploadVideoButton')?.addEventListener('click', () => {
    document.getElementById('reportVideoInput')?.click();
  });
  document.getElementById('reportImageInput')?.addEventListener('change', event => handleAttachmentSelect('image', event));
  document.getElementById('reportVideoInput')?.addEventListener('change', event => handleAttachmentSelect('video', event));
  document.getElementById('removeImageBtn')?.addEventListener('click', () => removeSelectedAttachment('image'));
  document.getElementById('removeVideoBtn')?.addEventListener('click', () => removeSelectedAttachment('video'));
  
  document.querySelectorAll('.request-type-btn').forEach(btn => {
    btn.addEventListener('click', () => activateReportTypeButton(btn));
  });

  // Category buttons
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => activateCategoryButton(btn));
  });

  // Quick report button on Home
  document.getElementById('quickReportBtn')?.addEventListener('click', () => {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.capture = 'environment';
    input.style.display = 'none';
    document.body.appendChild(input);
    input.addEventListener('change', function() {
      var file = input.files && input.files[0];
      if (file) {
        var reader = new FileReader();
        reader.onload = function(ev) {
          setPendingQuickImage(ev.target.result);
          window.location.href = 'report.html';
        };
        reader.readAsDataURL(file);
      } else {
        window.location.href = 'report.html?autoOpen=true';
      }
      document.body.removeChild(input);
    });
    input.click();
  });
  var useLocBtn = document.getElementById('useLocationBtn');
  if (useLocBtn) {
    useLocBtn.addEventListener('click', function() {
      var locInput = document.getElementById('reportlocation');
      var mapFrame = document.getElementById('reportMapFrame');
      if (!navigator.geolocation) {
        alert(t("geolocation_not_supported"));
        return;
      }
      navigator.geolocation.getCurrentPosition(function(pos) {
        var lat = pos.coords.latitude;
        var lon = pos.coords.longitude;
        locInput && (locInput.value = lat.toFixed(6) + ', ' + lon.toFixed(6));
        var lonMin = (lon - 0.02).toFixed(6);
        var latMin = (lat - 0.02).toFixed(6);
        var lonMax = (lon + 0.02).toFixed(6);
        var latMax = (lat + 0.02).toFixed(6);
        var src = 'https://www.openstreetmap.org/export/embed.html?bbox=' + encodeURIComponent(lonMin) + '%2C' + encodeURIComponent(latMin) + '%2C' + encodeURIComponent(lonMax) + '%2C' + encodeURIComponent(latMax) + '&layer=mapnik&marker=' + encodeURIComponent(lat) + '%2C' + encodeURIComponent(lon);
        if (mapFrame) mapFrame.src = src;
      }, function() {
        alert(t("geolocation_failed"));
      }, { enableHighAccuracy: true, timeout: 8000 });
    });
  }

  // Auto-open gallery if requested
  if (window.location.pathname.includes('report.html') && new URLSearchParams(window.location.search).get('autoOpen') === 'true') {
    setTimeout(() => {
      document.getElementById('reportImageInput')?.click();
    }, 500);
  }

  if (window.location.pathname.includes('report.html')) {
    restorePendingQuickImage();
  }

  // Logout
  document.getElementById('logoutBtn')?.addEventListener('click', () => {
    clearCurrentUser();
    window.location.href = 'login.html';
  });

  // Navigation from login/register
  document.getElementById('goToRegister')?.addEventListener('click', () => window.location.href = 'register.html');
  document.getElementById('backToLogin')?.addEventListener('click', () => window.location.href = 'login.html');
});
