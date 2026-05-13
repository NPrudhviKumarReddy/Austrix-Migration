document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(a => a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }));

  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(l => {
    if (l.getAttribute('href') === path) l.classList.add('active');
  });

  const form = document.getElementById('consultationForm');
  if (form) {
    const status = document.getElementById('formStatus');
    const submitButton = form.querySelector('button[type="submit"]');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const scriptUrl = form.dataset.scriptUrl;
      if (!scriptUrl || scriptUrl.includes('PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE')) {
        status.className = 'form-status error';
        status.textContent = 'The enquiry form is being connected. Please contact Austrix by phone, email or WhatsApp.';
        return;
      }
      submitButton.disabled = true;
      submitButton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting...';
      status.className = 'form-status';
      status.textContent = '';
      try {
        const payload = new FormData(form);
        payload.append('Submitted At', new Date().toLocaleString('en-AU', { timeZone: 'Australia/Melbourne' }));
        const response = await fetch(scriptUrl, { method: 'POST', body: payload });
        if (!response.ok) throw new Error('Submission failed');
        form.reset();
        status.className = 'form-status success';
        status.textContent = 'Thank you. Your enquiry has been submitted successfully. Our team will contact you shortly.';
      } catch (error) {
        status.className = 'form-status error';
        status.textContent = 'Something went wrong while submitting the form. Please call, email or message Austrix on WhatsApp.';
      } finally {
        submitButton.disabled = false;
        submitButton.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Submit Enquiry';
      }
    });
  }
});
