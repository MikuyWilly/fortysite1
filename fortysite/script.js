// JavaScript optimizado para el header
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.nav-links a');
    const navHighlight = document.querySelector('.nav-highlight');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-links');
    
    // Efecto scroll
    function updateHeader() {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', updateHeader);
    updateHeader(); // Ejecutar al cargar
    
    // Resaltador de navegación
    function moveHighlight(element) {
        if (!element || window.innerWidth <= 992) return;
        
        navHighlight.style.width = `${element.offsetWidth}px`;
        navHighlight.style.left = `${element.offsetLeft}px`;
        navHighlight.style.opacity = '1';
    }
    
    // Activar elemento al hacer hover o click
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => moveHighlight(link));
        
        link.addEventListener('click', function() {
            if (window.innerWidth <= 992) return;
            
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            moveHighlight(this);
        });
    });
    
    // Activar el primer elemento por defecto (solo desktop)
    if (window.innerWidth > 992 && navLinks.length > 0) {
        navLinks[0].classList.add('active');
        moveHighlight(navLinks[0]);
    }
    
    // Menú móvil
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.innerHTML = navMenu.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
            
            // Prevenir scroll del body cuando el menú está abierto
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }
    
    // Cerrar menú al hacer clic en un enlace (mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 992) {
                navMenu.classList.remove('active');
                if (menuToggle) menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                document.body.style.overflow = '';
            }
        });
    });
    
    // Actualizar en resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            navMenu.classList.remove('active');
            if (menuToggle) menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            document.body.style.overflow = '';
        }
    });
});
        

// Efecto máquina de escribir mejorado
document.addEventListener('DOMContentLoaded', function() {
    const typewriterText = document.getElementById('typewriter-text');
    const phrases = [
        "¡Bienvenido a FortySite!",
        "Diseño web que impulsa tu negocio"
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let pauseBetweenPhrases = 3000;
    
    // Crear cursor inicialmente
    const cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    
    function typeWriter() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            // Borrando
            typewriterText.innerHTML = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            // Escribiendo
            typewriterText.innerHTML = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = charIndex % 3 === 0 ? 150 : 100; // Variación natural
        }
        
        // Agregar cursor después del texto
        typewriterText.appendChild(cursor);
        
        // Determinar siguiente acción
        if (!isDeleting && charIndex === currentPhrase.length) {
            typingSpeed = pauseBetweenPhrases;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500;
        }
        
        setTimeout(typeWriter, typingSpeed);
    }
    
    // Iniciar después de la animación inicial
    setTimeout(() => {
        typewriterText.innerHTML = '';
        typeWriter();
    }, 1300);
});

        // Header scroll effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Scroll animations
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.card, .service-card, .portfolio-item, .testimonial-slide');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    element.classList.add('show');
                }
            });
        };

        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Testimonial slider
        let currentSlide = 0;
        const slides = [
            {
                quote: "FortySite transformó completamente nuestra presencia en línea. Desde que lanzamos nuestro nuevo sitio web, hemos visto un aumento del 40% en leads cualificados.",
                name: "María González",
                position: "CEO, ModaExpress",
                image: "https://randomuser.me/api/portraits/women/45.jpg"
            },
            {
                quote: "El equipo de FortySite entendió exactamente lo que necesitábamos. Nuestra nueva tienda online ha superado todas nuestras expectativas en términos de funcionalidad y diseño.",
                name: "Carlos Mendoza",
                position: "Fundador, TechGadgets",
                image: "https://randomuser.me/api/portraits/men/32.jpg"
            },
            {
                quote: "Trabajar con FortySite fue una experiencia excepcional. Profesionales, creativos y siempre disponibles para resolver cualquier duda.",
                name: "Laura Fernández",
                position: "Directora de Marketing, SaludPlus",
                image: "https://randomuser.me/api/portraits/women/68.jpg"
            }
        ];

        const testimonialSlide = document.querySelector('.testimonial-slide');
        const sliderControls = document.querySelectorAll('.slider-control');

        function showSlide(index) {
            const slide = slides[index];
            testimonialSlide.innerHTML = `
                <i class="fas fa-quote-left"></i>
                <p>"${slide.quote}"</p>
                <div class="client-info">
                    <img src="${slide.image}" alt="${slide.name}">
                    <h4>${slide.name}</h4>
                    <span>${slide.position}</span>
                </div>
            `;
            
            sliderControls.forEach((control, i) => {
                control.classList.toggle('active', i === index);
            });
            
            // Trigger animation
            testimonialSlide.classList.remove('show');
            setTimeout(() => {
                testimonialSlide.classList.add('show');
            }, 10);
        }

        sliderControls.forEach((control, index) => {
            control.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });

        // Auto slide change
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000);

        // Initialize particles.js
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#0066ff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#0066ff",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });

        // Form submission
        document.querySelector(".contact-form").addEventListener("submit", function(e) {
        e.preventDefault();

        const form = e.target;
        const status = document.getElementById("form-status");
        const formData = new FormData(form);

        fetch("send.php", {
            method: "POST",
            body: formData,
        })
            .then(res => res.text())
            .then(response => {
            if (response.trim() === "success") {
                status.innerText = "✅ ¡Mensaje enviado correctamente!";
                status.style.color = "lime";
                form.reset();
            } else {
                status.innerText = "❌ Hubo un error al enviar el mensaje.";
                status.style.color = "red";
            }
            })
            .catch(() => {
            status.innerText = "❌ Error de conexión.";
            status.style.color = "red";
            });
        });

        // Inicializar AOS (animaciones de scroll)
        AOS.init({
            duration: 1200,
            once: true,
        });

        // Inicializar Vanilla Tilt en los elementos con data-tilt
        VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
            max: 18,
            speed: 600,
            glare: true,
            'max-glare': 0.25,
        });