let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let contacto = document.querySelector('#btn-contacto');
let sobreMi = document.querySelector('#btn-sobreMi')


// Carrusel de Clientes
const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const btnLeft = document.querySelector('.carousel-btn.left');
const btnRight = document.querySelector('.carousel-btn.right');
let index = 0;
let visible = window.innerWidth < 700 ? 2 : 3;


for (let i = 0; i < visible; i++) {
  const clone = items[i].cloneNode(true);
  track.appendChild(clone);
}


function updateCarousel(animate = true) {
  const itemWidth = items[0].offsetWidth + 30; // 32px gap
  if (animate) {
    track.style.transition = 'transform 0.5s ease';
  } else {
    track.style.transition = 'none';
  }
  track.style.transform = `translateX(-${index * itemWidth}px)`;
}

/* btnLeft.addEventListener('click', () => {
  if (index > 0) index--;
  updateCarousel();
});
btnRight.addEventListener('click', () => {
  if (index < items.length - visible) index++;
  updateCarousel();
});  */

let autoSlide = setInterval(() => {
  index++;
  updateCarousel();
  // Si llegamos al final de los clones, reseteamos sin animación
  if (index === items.length) {
    setTimeout(() => {
      index = 0;
      updateCarousel(false);
    }, 500); // Espera a que termine la animación
  }
}, 2500);

window.addEventListener('resize', () => {
  visible = window.innerWidth < 700 ? 2 : 3;
  updateCarousel();
});

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

track.addEventListener('mouseenter', () => clearInterval(autoSlide));
track.addEventListener('mouseleave', () => {
  autoSlide = setInterval(() => {
    if (index < items.length - visible) {
      index++;
    } else {
      index = 0;
    }
    updateCarousel();
  }, 2500);
});

updateCarousel();





menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


sobreMi.onclick = () => {
    document.getElementById("sobreMi").scrollIntoView({
        behavior:"smooth"
    });
}

contacto.onclick = (e) => {
  e.preventDefault();
  const section = document.getElementById('contacto');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.location.hash = '#contacto';
  }
};



const vcardData = `
BEGIN:VCARD
VERSION:3.0
FN:Fabio Sanchez
ORG:Sistemas litográficos
TEL;TYPE=CELL:+57 3165281355
EMAIL:gerencia@sistemaslitograficos.com
URL:https://www.sistemaslitograficos.com.co
URL:https://www.instagram.com/sistemaslitograficossas/
URL:https://www.instagram.com/cuatrotorres/
END:VCARD
  `.trim();



  const blob = new Blob([vcardData], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);

  const downloadLink = document.getElementById('downloadContact');
  downloadLink.href = url;

  // Configuración para envío por WhatsApp y guardado en Google Sheets
  const WHATSAPP_NUMBER = '573165281355'; // Formato internacional sin '+'
  const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxNVVkmbX0dGZfoGl8VnmcHdnyaqPNWKMJIMdMMgfigI9lq61OfF20UJbipp4F3GqwV/exec'; // URL de tu Web App de Apps Script

  // Toast helper
  let toastTimer = null;
  function showToast(message = 'Mensaje enviado', duration = 3000) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    // Set text
    toast.textContent = message;
    // Show
    toast.hidden = false;
    toast.classList.add('show');
    // Reset previous timer
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
      // Espera la transición para ocultar del flujo
      setTimeout(() => {
        toast.hidden = true;
      }, 300);
    }, duration);
  }

  // Manejo del formulario de contacto -> WhatsApp + Google Sheets
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const form = e.target;
      const nombre = (form.nombre?.value || '').trim();
      const email = (form.email?.value || '').trim();
      const telefono = (form.telefono?.value || '').trim();
      const mensaje = (form.mensaje?.value || '').trim();

      // 1) Abrir WhatsApp con mensaje prellenado
      const texto = `Hola mi nombre es: ${nombre} estos son mis datos: correo ${email}, ${telefono} estoy interesado en cotizar. ${mensaje}`.trim();
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
      window.open(waUrl, '_blank');
  showToast('¡Mensaje enviado! Abriendo WhatsApp…');

      // 2) Guardar en Google Sheets (Apps Script)
      if (APPS_SCRIPT_URL && APPS_SCRIPT_URL.startsWith('http')) {
        const payload = {
          timestamp: new Date().toISOString(),
          nombre,
          email,
          telefono,
          mensaje,
          origen: 'landing-fabio-sanchez',
          page: window.location.href,
          userAgent: navigator.userAgent
        };
        try {
          // no-cors para evitar bloqueos CORS; el servidor no será legible pero recibirá los datos
          await fetch(APPS_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
        } catch (err) {
          console.warn('No se pudo enviar el lead al Apps Script:', err);
        }
      }
    });
  }