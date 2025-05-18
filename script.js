function navigateTo(sectionId) {
  const sections = document.querySelectorAll('.content');
  sections.forEach((section) => {
    section.classList.remove('active');
  });

  document.getElementById(sectionId).classList.add('active');
}
