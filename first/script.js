   
      // Scroll Progress
      window.addEventListener("scroll", () => {
        const scrollProgress = document.getElementById("scrollProgress");
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        scrollProgress.style.width = `${scrollPercentage}%`;

        // Header scroll effect
        const header = document.getElementById("header");
        if (scrollTop > 50) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      });

      // Smooth scrolling
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            window.scrollTo({
              top: target.offsetTop - 80,
              behavior: "smooth",
            });
          }
        });
      });

      // Animate skill bars
      const skillsObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const bars = entry.target.querySelectorAll(".horizontal-bar");
              bars.forEach((bar) => {
                const width = bar.getAttribute("data-width");
                bar.style.width = width + "%";
              });
              skillsObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      const skillsSection = document.querySelector("#skills");
      if (skillsSection) {
        skillsObserver.observe(skillsSection);
      }

      // Form submission
      const contactForm = document.getElementById("contactForm");
      if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
          e.preventDefault();
          const submitBtn = this.querySelector('button[type="submit"]');
          const originalText = submitBtn.textContent;
          submitBtn.textContent = "Sending...";
          submitBtn.disabled = true;

          setTimeout(() => {
            alert("Thank you for your message! I will get back to you soon.");
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
          }, 1500);
        });
      }

      // Dynamic year
      const currentYear = new Date().getFullYear();
      document.querySelector(
        ".copyright"
      ).textContent = `© ${currentYear} Alice Mary. All rights reserved.`;
    