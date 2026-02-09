<!--DOCTYPE html-->
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Subodh Dahal | EdTech Portfolio</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
  <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <h1>From <span>Hi, I’m Subodh Dahal</h1>
      <p>I investigate how educational technologies can be designed to support credible learning. My work shifts the focus from detection-based integrity to process-based integrity, making student engagement visible and meaningful.
      </p>
    </div>
  </section>

  <!-- Trajectory Section -->
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
