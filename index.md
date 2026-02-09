<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Subodh Dahal | Edtech Portfolio</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<!-- Hero Section -->
<header class="hero">
  <div class="container hero-flex">
    <img src="assets/subodh-hero-image.png" alt="Subodh Dahal" class="hero-img">

    <div class="hero-text">
      <h1>Hi, I’m Subodh Dahal</h1>
      <p>As an education technology researcher and policy practitioner, I examine how digital environments can be architected to prioritize learning integrity as a process, rather than just an outcome to be detected.

My trajectory spans from assessing TPACK readiness in Nepalese government schools to presenting process-based integrity frameworks at international conferences.
</p>
      <div class="hero-buttons">
      <a href="assets/Subodh Dahal — Academic CV - 3 pager (2026).pdf" class="cta-btn" target="_blank" rel="noopener noreferrer">View CV</a>
        <a href="projects.html" class="cta-btn cta-secondary">View Projects</a>
      </div>
  </div>
</div>
</header>

<!-- About Section -->
<section class="trajectory container">
    <div class="card">
      <div class="icon"><i class="fas fa-graduation-cap"></i></div>
      <h3>Foundations in EdTech & TPACK</h3>
      <p>Began by examining teacher preparedness through the TPACK framework. My thesis revealed that while pedagogy is strong, technological integration depends on confidence and effective implementation strategies.</p>
    </div>
    <div class="card">
      <div class="icon"><i class="fas fa-robot"></i></div>
      <h3>The GenAI Challenge</h3>
      <p>As GenAI tools became widespread, I identified a critical gap: prevailing tools prioritize detecting misconduct at submission rather than supporting the learning journey itself.</p>
    </div>
    <div class="card">
      <div class="icon"><i class="fas fa-network-wired"></i></div>
      <h3>The 3P Framework</h3>
      <p>Currently exploring the Person, Process, Product framework. I advocate for educational tools that address all three dimensions to make integrity decisions more transparent and fair.</p>
    </div>
  </section>
<!-- Mission Callout -->
<section class="mission">
    <blockquote>"Moving beyond detection: Designing credible learning evidence in the age of GenAI."</blockquote>
  </section>

<!-- Highlight Section -->
  <section class="highlight">
    <span class="tag">TPACK Study</span>
    <h3>Assessing Teacher ICT Integration</h3>
    <p>Assessed pedagogical and technological knowledge in Lalitpur. Discovered that teachers possess strong subject mastery but require scaffolded support for meaningful digital integration in low-resource settings.</p>
    <a href="#" class="button">View Research</a>
  </section>

 <!-- Footer -->
 footer>
    <div class="container">
      <h4>Subodh Dahal</h4>
      <p>Researcher & Policy Practitioner • Kathmandu, Nepal</p>
      <div class="social">
        <a href="https://www.linkedin.com/in/subodh-dahal/" target="_blank" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://scholar.google.com/citations?hl=en&user=3pw7tvsAAAAJ" target="_blank" title="Google Scholar"><i class="fas fa-graduation-cap"></i></a>
        <a href="mailto:subodhdotcome@gmail.com" title="Email"><i class="fas fa-envelope"></i></a>
      </div>
      <a href="mailto:subodhdotcome@gmail.com" class="cta-button">Get in Touch</a>
    </div>
  </footer>

  <!-- Scroll Animations -->
  <script>
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card, .mission, .highlight').forEach(el => observer.observe(el));
  </script>
</body>
</html>
