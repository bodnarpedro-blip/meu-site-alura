document.addEventListener('DOMContentLoaded', () => {
  // Botão para ocultar/exibir o fluxograma
  const toggleBtn = document.getElementById('toggleDiagramBtn');
  const diagramContainer = document.getElementById('diagramContainer');

  if (toggleBtn && diagramContainer) {
    toggleBtn.addEventListener('click', () => {
      diagramContainer.classList.toggle('hidden');
      
      if (diagramContainer.classList.contains('hidden')) {
        toggleBtn.textContent = 'Exibir Fluxograma';
      } else {
        toggleBtn.textContent = 'Ocultar Fluxograma';
      }
    });
  }

  // Rolagem suave para links de navegação interna
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Compensa a altura do menu fixo na rolagem
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetSection.offsetTop - navbarHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});