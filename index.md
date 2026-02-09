---
layout: default
title: Home
---

<!-- ================= Research Trajectory ================= -->
<section id="trajectory" class="trajectory">
  <h2>Research Trajectory</h2>

  <div class="steps">
    <div class="step-card">
      <div class="icon">
        <i class="fas fa-graduation-cap"></i>
      </div>
      <h3>Foundations in EdTech & TPACK</h3>
      <p>
        Began by examining teacher preparedness through the TPACK framework.
        My graduate research highlighted that while pedagogical knowledge is
        strong, effective technology integration depends on confidence,
        contextual support, and implementation strategies.
      </p>
    </div>

    <div class="step-card">
      <div class="icon">
        <i class="fas fa-robot"></i>
      </div>
      <h3>The GenAI Challenge</h3>
      <p>
        As generative AI tools became widespread, I identified a critical gap:
        prevailing integrity solutions emphasize detection at submission,
        rather than supporting and evidencing the learning process itself.
      </p>
    </div>

    <div class="step-card">
      <div class="icon">
        <i class="fas fa-network-wired"></i>
      </div>
      <h3>The 3P Framework</h3>
      <p>
        My current work explores the Person–Process–Product framework,
        advocating for educational technologies that surface engagement,
        authorship, and learning decisions in transparent and fair ways.
      </p>
    </div>
  </div>
</section>

<!-- ================= Mission ================= -->
<section class="mission">
  <h2>Core Philosophy</h2>
  <blockquote>
    “Moving beyond detection: designing credible learning evidence
    in the age of generative AI.”
  </blockquote>
</section>

<!-- ================= Research Highlight ================= -->
<section class="highlight container">
  <span class="tag">Graduate Research • TPACK</span>

  <h3>Assessing Teacher ICT Integration in Public Schools</h3>

  <p>
    Conducted an assessment of pedagogical and technological knowledge among
    schoolteachers in Nepal. The study revealed strong subject mastery but
    uneven adoption of digital tools, emphasizing the need for scaffolded,
    context-sensitive professional development in low-resource settings.
  </p>

  <a href="/research.html" class="cta-button">
    Explore Research
  </a>
</section>

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

<!-- rest of homepage sections -->
<section class="hero">
  <div class="container hero-container">
    <div class="hero-left">
      <h1>Hi, I’m <span>Subodh Dahal</span></h1>
      <p>
        I investigate how educational technologies can be designed to support credible learning.
        My work shifts the focus from detection-based integrity to process-based integrity,
        making student engagement visible and meaningful.
      </p>

      <div class="hero-cta">
        <a href="/assets/SubodhDahal_CV.pdf" class="cta-button" target="_blank">View CV</a>
        <a href="/research.html" class="cta-button orange">Research Interests</a>
      </div>
    </div>

    <div class="hero-right">
      <img src="/assets/subodh-hero-image.png" alt="Subodh Dahal">
    </div>
  </div>
</section>


