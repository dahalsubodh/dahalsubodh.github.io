<!-- ================= Scroll Animation Hook ================= -->
<script>
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    },
    { threshold: 0.1 }
  );

  document
    .querySelectorAll('.step-card, .mission, .highlight')
    .forEach(el => observer.observe(el));
</script>

<script>
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
</script>
