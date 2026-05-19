const loginScreen = document.getElementById("loginScreen");
const appScreen = document.getElementById("appScreen");
const loginForm = document.getElementById("loginForm");

const openSidebarButton = document.getElementById("openSidebar");
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");

if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    loginScreen.classList.add("hidden");
    appScreen.classList.remove("hidden");
  });
}

if (openSidebarButton && sidebar && sidebarOverlay) {
  openSidebarButton.addEventListener("click", function () {
    sidebar.classList.remove("-translate-x-full");
    sidebarOverlay.classList.remove("hidden");
  });

  sidebarOverlay.addEventListener("click", function () {
    sidebar.classList.add("-translate-x-full");
    sidebarOverlay.classList.add("hidden");
  });
}

const dashboardScreen = document.getElementById("dashboardScreen");
const attendanceEmptyScreen = document.getElementById("attendanceEmptyScreen");
const menuAbsensi = document.getElementById("menuAbsensi");

if (menuAbsensi && dashboardScreen && attendanceEmptyScreen) {
  menuAbsensi.addEventListener("click", function () {
    dashboardScreen.classList.add("hidden");
    attendanceEmptyScreen.classList.remove("hidden");

    if (sidebar && sidebarOverlay) {
      sidebar.classList.add("-translate-x-full");
      sidebarOverlay.classList.add("hidden");
    }
  });
}

const selectClassButton = document.getElementById("selectClassButton");
const attendanceClassScreen = document.getElementById("attendanceClassScreen");

if (selectClassButton && attendanceEmptyScreen && attendanceClassScreen) {
  selectClassButton.addEventListener("click", function () {
    attendanceEmptyScreen.classList.add("hidden");
    attendanceClassScreen.classList.remove("hidden");
  });
}

const startAttendanceButton = document.getElementById("startAttendanceButton");
const attendanceIntegratedScreen = document.getElementById("attendanceIntegratedScreen");
const backToClassButton = document.getElementById("backToClassButton");

if (startAttendanceButton && attendanceClassScreen && attendanceIntegratedScreen) {
  startAttendanceButton.addEventListener("click", function () {
    attendanceClassScreen.classList.add("hidden");
    attendanceIntegratedScreen.classList.remove("hidden");
  });
}

if (backToClassButton && attendanceIntegratedScreen && attendanceClassScreen) {
  backToClassButton.addEventListener("click", function () {
    attendanceIntegratedScreen.classList.add("hidden");
    attendanceClassScreen.classList.remove("hidden");
  });
}

const permitDetailModal = document.getElementById("permitDetailModal");
const closePermitModal = document.getElementById("closePermitModal");
const closePermitModalFooter = document.getElementById("closePermitModalFooter");

const permitStudentName = document.getElementById("permitStudentName");
const permitStatus = document.getElementById("permitStatus");
const permitNote = document.getElementById("permitNote");
const permitSource = document.getElementById("permitSource");

const permitDetailButtons = document.querySelectorAll(".open-permit-detail");

function openPermitModal(button) {
  const name = button.getAttribute("data-name");
  const status = button.getAttribute("data-status");
  const note = button.getAttribute("data-note");
  const source = button.getAttribute("data-source");

  permitStudentName.textContent = name;
  permitStatus.textContent = status;
  permitNote.textContent = note;
  permitSource.textContent = source;

  permitDetailModal.classList.remove("hidden");
  permitDetailModal.classList.add("flex");
}

function closePermitDetailModal() {
  permitDetailModal.classList.add("hidden");
  permitDetailModal.classList.remove("flex");
}

permitDetailButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    openPermitModal(button);
  });
});

if (closePermitModal) {
  closePermitModal.addEventListener("click", closePermitDetailModal);
}

if (closePermitModalFooter) {
  closePermitModalFooter.addEventListener("click", closePermitDetailModal);
}

if (permitDetailModal) {
  permitDetailModal.addEventListener("click", function (event) {
    if (event.target === permitDetailModal) {
      closePermitDetailModal();
    }
  });
}

const statusHelpButton = document.getElementById("statusHelpButton");
const statusHelpModal = document.getElementById("statusHelpModal");
const closeStatusHelpModal = document.getElementById("closeStatusHelpModal");
const closeStatusHelpModalFooter = document.getElementById("closeStatusHelpModalFooter");

function openStatusHelpModal() {
  statusHelpModal.classList.remove("hidden");
  statusHelpModal.classList.add("flex");
}

function closeStatusHelp() {
  statusHelpModal.classList.add("hidden");
  statusHelpModal.classList.remove("flex");
}

if (statusHelpButton) {
  statusHelpButton.addEventListener("click", openStatusHelpModal);
}

if (closeStatusHelpModal) {
  closeStatusHelpModal.addEventListener("click", closeStatusHelp);
}

if (closeStatusHelpModalFooter) {
  closeStatusHelpModalFooter.addEventListener("click", closeStatusHelp);
}

if (statusHelpModal) {
  statusHelpModal.addEventListener("click", function (event) {
    if (event.target === statusHelpModal) {
      closeStatusHelp();
    }
  });
}

const previewAttendanceButton = document.getElementById("previewAttendanceButton");
const previewAttendanceModal = document.getElementById("previewAttendanceModal");
const closePreviewModal = document.getElementById("closePreviewModal");
const backEditFromPreview = document.getElementById("backEditFromPreview");

function openPreviewAttendanceModal() {
  previewAttendanceModal.classList.remove("hidden");
  previewAttendanceModal.classList.add("flex");
}

function closePreviewAttendanceModal() {
  previewAttendanceModal.classList.add("hidden");
  previewAttendanceModal.classList.remove("flex");
}

if (previewAttendanceButton) {
  previewAttendanceButton.addEventListener("click", openPreviewAttendanceModal);
}

if (closePreviewModal) {
  closePreviewModal.addEventListener("click", closePreviewAttendanceModal);
}

if (backEditFromPreview) {
  backEditFromPreview.addEventListener("click", closePreviewAttendanceModal);
}

if (previewAttendanceModal) {
  previewAttendanceModal.addEventListener("click", function (event) {
    if (event.target === previewAttendanceModal) {
      closePreviewAttendanceModal();
    }
  });
}

const saveAttendanceButton = document.getElementById("saveAttendanceButton");
const successModal = document.getElementById("successModal");
const backToDashboardAfterSave = document.getElementById("backToDashboardAfterSave");

const dashboardAttendanceStatus = document.getElementById("dashboardAttendanceStatus");
const dashboardAttendanceSummary = document.getElementById("dashboardAttendanceSummary");
const dashboardStartAttendanceButton = document.getElementById("dashboardStartAttendanceButton");

function openSuccessModal() {
  if (previewAttendanceModal) {
    previewAttendanceModal.classList.add("hidden");
    previewAttendanceModal.classList.remove("flex");
  }

  successModal.classList.remove("hidden");
  successModal.classList.add("flex");
}

function closeSuccessAndReturnDashboard() {
  successModal.classList.add("hidden");
  successModal.classList.remove("flex");

  attendanceIntegratedScreen.classList.add("hidden");
  attendanceClassScreen.classList.add("hidden");
  attendanceEmptyScreen.classList.add("hidden");
  dashboardScreen.classList.remove("hidden");

  if (dashboardAttendanceStatus) {
    dashboardAttendanceStatus.textContent = "Sudah Diabsen";
    dashboardAttendanceStatus.classList.remove("bg-amber-100", "text-amber-700");
    dashboardAttendanceStatus.classList.add("bg-emerald-100", "text-emerald-700");
  }

  if (dashboardAttendanceSummary) {
    dashboardAttendanceSummary.classList.remove("hidden");
  }

  if (dashboardStartAttendanceButton) {
    dashboardStartAttendanceButton.textContent = "Lihat Absensi";
  }
}

if (saveAttendanceButton) {
  saveAttendanceButton.addEventListener("click", openSuccessModal);
}

if (backToDashboardAfterSave) {
  backToDashboardAfterSave.addEventListener("click", closeSuccessAndReturnDashboard);
}

if (dashboardStartAttendanceButton && dashboardScreen && attendanceEmptyScreen) {
  dashboardStartAttendanceButton.addEventListener("click", function () {
    dashboardScreen.classList.add("hidden");
    attendanceEmptyScreen.classList.remove("hidden");
  });
}

