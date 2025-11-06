// Diccionario de textos para internacionalización
const TEXTS = {
  es: {
    nav: {
      home: 'Home',
      sobreMi: 'Sobre mi',
      soluciones: 'Soluciones',
      contacto: 'Contacto',
      btn: 'EN'
    },
    headerBtn: 'Contáctame',
    home: {
      h1: 'Hola, soy <span>Fabio Sanchez</span>',
      h3: 'Gerente <span>General</span>',
      p: 'En Sistemas Litográficos tenemos las soluciones que necesitas para tus proyectos',
      btnContacto: 'Contáctame',
      btnSobreMi: 'Sobre mi'
    },
    about: {
      h2: 'Sobre <span>Mi</span>',
      p: 'Más de 20 años liderando procesos de impresión y producción gráfica con enfoque en calidad, innovación y cumplimiento.',
      btn: 'Contáctame'
    },
    proyectos: {
      heading: 'Nuestra <span>Empresa</span>',
      nosotros: 'Nosotros',
      nosotrosDesc: 'Somos una empresa con mas de 20 años transformando ideas en impresiones de alto impacto, con diseños enfocados en la innovación, calidad y usando siempre la tecnología de vanguardia.',
      medio: 'Comprometidos con el medio ambiente',
      medioDesc: 'Diseñamos e imprimimos con responsabilidad ambiental, usando materiales y procesos sostenibles.',
      soluciones: 'Soluciones',
      solucionesDesc: 'Desde agendas, libros y revistas hasta empaques personalizados, material corporativo, publicidad exterior y soluciones POP. Creamos lo que tu marca necesita para destacar.'
    },
    servicios: {
      heading: 'Soluciones',
      editorial: 'Editorial',
      editorialDesc: 'Transformamos ideas en publicaciones memorables. Ideal para libros, revistas y más',
      publicidad: 'Publicidad',
      publicidadDesc: 'Diseños impactantes que venden. Dale presencia a tu marca con piezas promocionales.',
      corporativo: 'Corporativo',
      corporativoDesc: 'Impulsa tu identidad visual con artículos que comunican profesionalismo.',
      empaques: 'Empaques',
      empaquesDesc: 'Crea una experiencia de marca desde el primer contacto. Empaques que destacan.',
      exterior: 'Publicidad Exterior',
      exteriorDesc: 'Atrae miradas con formatos grandes y resistentes. Ideal para calles y eventos.',
      pop: 'Material P.O.P',
      popDesc: 'Destaca en el punto de venta con piezas creativas y funcionales.'
    },
    otros: {
      heading: 'Soluciones Digitales',
      nfc: 'Sistemas NFC',
      nfcDesc: 'Conoce nuestras tarjetas de presentación web personalizadas.',
      nfcBtn: 'Ver más',
      digital: 'Sistemas Digitales',
      digitalDesc: 'Ofrecemos una amplia gama de servicios diseñados para abordar cualquier desafío de marketing que tu empresa pueda enfrentar.',
      digitalBtn: 'Ver más'
    },
    clientes: {
      heading: 'Nuestros <span>Clientes</span>'
    },
    contacto: {
      heading: 'Contácta<span>me</span>'
    },
    footer: {
      copyright: '© Sistemas Litograficos <br> todos los derechos reservados'
    },
    toast: '¡Mensaje enviado! Abriendo WhatsApp…',
    form: {
      nombre: 'Nombre',
      email: 'Correo electrónico',
      telefono: 'Teléfono (opcional)',
      mensaje: 'Tu mensaje',
      enviar: 'Enviar'
    }
  },
  en: {
    nav: {
      home: 'Home',
      sobreMi: 'About',
      soluciones: 'Solutions',
      contacto: 'Contact',
      btn: 'ES'
    },
    headerBtn: 'Contact me',
    home: {
      h1: 'Hi, I am <span>Fabio Sanchez</span>',
      h3: 'General <span>Manager</span>',
      p: 'At Sistemas Litográficos we have the solutions you need for your projects',
      btnContacto: 'Contact me',
      btnSobreMi: 'About'
    },
    about: {
      h2: 'About <span>Me</span>',
      p: 'Over 20 years leading printing and graphic production processes focused on quality, innovation and reliability.',
      btn: 'Contact me'
    },
    proyectos: {
      heading: 'Our <span>Company</span>',
      nosotros: 'About Us',
      nosotrosDesc: 'We are a company with more than 20 years transforming ideas into high-impact prints, with designs focused on innovation, quality and always using cutting-edge technology.',
      medio: 'Committed to the environment',
      medioDesc: 'We design and print with environmental responsibility, using sustainable materials and processes.',
      soluciones: 'Solutions',
      solucionesDesc: 'From planners, books and magazines to custom packaging, corporate material, outdoor advertising and POP solutions. We create what your brand needs to stand out.'
    },
    servicios: {
      heading: 'Solutions',
      editorial: 'Editorial',
      editorialDesc: 'We turn ideas into memorable publications. Ideal for books, magazines and more.',
      publicidad: 'Advertising',
      publicidadDesc: 'Impactful designs that sell. Give your brand presence with promotional pieces.',
      corporativo: 'Corporate',
      corporativoDesc: 'Boost your visual identity with items that communicate professionalism.',
      empaques: 'Packaging',
      empaquesDesc: 'Create a brand experience from the first contact. Packaging that stands out.',
      exterior: 'Outdoor Advertising',
      exteriorDesc: 'Attract attention with large, durable formats. Ideal for streets and events.',
      pop: 'P.O.P Material',
      popDesc: 'Stand out at the point of sale with creative and functional pieces.'
    },
    otros: {
      heading: 'Digital Solutions',
      nfc: 'NFC Systems',
      nfcDesc: 'Discover our personalized web business cards.',
      nfcBtn: 'See more',
      digital: 'Digital Systems',
      digitalDesc: 'We offer a wide range of services designed to address any marketing challenge your company may face.',
      digitalBtn: 'See more'
    },
    clientes: {
      heading: 'Our <span>Clients</span>'
    },
    contacto: {
      heading: 'Contact<span>me</span>'
    },
    footer: {
      copyright: '© Sistemas Litograficos <br> all rights reserved'
    },
    toast: 'Message sent! Opening WhatsApp…',
    form: {
      nombre: 'Name',
      email: 'Email',
      telefono: 'Phone (optional)',
      mensaje: 'Your message',
      enviar: 'Send'
    }
  }
};

let currentLang = 'es';

function setLang(lang) {
  currentLang = lang;
  const t = TEXTS[lang];
  // Navbar
  document.getElementById('nav-home').textContent = t.nav.home;
  document.getElementById('nav-sobreMi').textContent = t.nav.sobreMi;
  document.getElementById('nav-soluciones').textContent = t.nav.soluciones;
  document.getElementById('nav-contacto').textContent = t.nav.contacto;
  document.getElementById('lang-toggle').textContent = t.nav.btn;
  // Header button
  const headerBtn = document.querySelector('.gradient-btn');
  if (headerBtn) headerBtn.textContent = t.headerBtn;
  // Home section
  const h1 = document.querySelector('.home-content h1');
  if (h1) h1.innerHTML = t.home.h1;
  const h3 = document.querySelector('.home-content h3');
  if (h3) h3.innerHTML = t.home.h3;
  const homeP = document.querySelector('.home-content p');
  if (homeP) homeP.textContent = t.home.p;
  const btnContacto = document.getElementById('btn-contacto');
  if (btnContacto) btnContacto.textContent = t.home.btnContacto;
  const btnSobreMi = document.getElementById('btn-sobreMi');
  if (btnSobreMi) btnSobreMi.textContent = t.home.btnSobreMi;
  // About section
  const aboutH2 = document.querySelector('.about-content h2');
  if (aboutH2) aboutH2.innerHTML = t.about.h2;
  const aboutP = document.querySelector('.about-content p');
  if (aboutP) aboutP.textContent = t.about.p;
  const aboutBtn = document.querySelector('.about-content .btn');
  if (aboutBtn) aboutBtn.textContent = t.about.btn;
  // Proyectos/Empresa
  const proyectosHeading = document.querySelector('.projects .heading');
  if (proyectosHeading) proyectosHeading.innerHTML = t.proyectos.heading;
  const proyectosCards = document.querySelectorAll('.project-card');
  if (proyectosCards.length === 3) {
    proyectosCards[0].querySelector('h3').textContent = t.proyectos.nosotros;
    proyectosCards[0].querySelector('p').textContent = t.proyectos.nosotrosDesc;
    proyectosCards[1].querySelector('h3').textContent = t.proyectos.medio;
    proyectosCards[1].querySelector('p').textContent = t.proyectos.medioDesc;
    proyectosCards[2].querySelector('h3').textContent = t.proyectos.soluciones;
    proyectosCards[2].querySelector('p').textContent = t.proyectos.solucionesDesc;
  }
  // Servicios
  const serviciosHeading = document.querySelector('.services .heading');
  if (serviciosHeading) serviciosHeading.textContent = t.servicios.heading;
  const serviciosBoxes = document.querySelectorAll('.service-box');
  if (serviciosBoxes.length === 6) {
    const s = t.servicios;
    serviciosBoxes[0].querySelector('h4').textContent = s.editorial;
    serviciosBoxes[0].querySelector('p').textContent = s.editorialDesc;
    serviciosBoxes[1].querySelector('h4').textContent = s.publicidad;
    serviciosBoxes[1].querySelector('p').textContent = s.publicidadDesc;
    serviciosBoxes[2].querySelector('h4').textContent = s.corporativo;
    serviciosBoxes[2].querySelector('p').textContent = s.corporativoDesc;
    serviciosBoxes[3].querySelector('h4').textContent = s.empaques;
    serviciosBoxes[3].querySelector('p').textContent = s.empaquesDesc;
    serviciosBoxes[4].querySelector('h4').textContent = s.exterior;
    serviciosBoxes[4].querySelector('p').textContent = s.exteriorDesc;
    serviciosBoxes[5].querySelector('h4').textContent = s.pop;
    serviciosBoxes[5].querySelector('p').textContent = s.popDesc;
  }
  // Otros servicios
  const otrosHeading = document.querySelector('.other-services .heading');
  if (otrosHeading) otrosHeading.textContent = t.otros.heading;
  const otrosCards = document.querySelectorAll('.other-service-card');
  if (otrosCards.length === 2) {
    otrosCards[0].querySelector('h3').textContent = t.otros.nfc;
    otrosCards[0].querySelector('p').textContent = t.otros.nfcDesc;
    otrosCards[0].querySelector('.btn').textContent = t.otros.nfcBtn;
    otrosCards[1].querySelector('h3').textContent = t.otros.digital;
    otrosCards[1].querySelector('p').textContent = t.otros.digitalDesc;
    otrosCards[1].querySelector('.btn').textContent = t.otros.digitalBtn;
  }
  // Clientes
  const clientesHeading = document.querySelector('.clientes .heading');
  if (clientesHeading) clientesHeading.innerHTML = t.clientes.heading;
  // Contacto
  const contactoHeading = document.querySelector('.contact .heading');
  if (contactoHeading) contactoHeading.innerHTML = t.contacto.heading;
  // Toast
  const toast = document.getElementById('toast');
  if (toast && toast.hidden) toast.textContent = t.toast;
  // Formulario
  const form = document.getElementById('contact-form');
  if (form) {
    form.nombre.placeholder = t.form.nombre;
    form.email.placeholder = t.form.email;
    form.telefono.placeholder = t.form.telefono;
    form.mensaje.placeholder = t.form.mensaje;
    form.querySelector('button[type="submit"]').textContent = t.form.enviar;
  }
  // Footer
  const copyright = document.querySelector('.footer .copyright');
  if (copyright) copyright.innerHTML = t.footer.copyright;
}

document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.onclick = () => {
      setLang(currentLang === 'es' ? 'en' : 'es');
    };
  }
});
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