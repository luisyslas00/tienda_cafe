// Menu hamburguer

if(document.getElementById("hamburguer")){
    const hamburguer = document.getElementById("hamburguer")
    const menu = document.getElementById("menu")
    hamburguer.addEventListener("click",()=>{
        if(menu.className.includes("desactive")){
            menu.classList.add("activate")
            menu.classList.remove("desactive")
            hamburguer.classList.remove("fa-bars")
            hamburguer.classList.add("fa-x")
        }else{
            menu.classList.add("desactive")
            menu.classList.remove("activate")
            hamburguer.classList.add("fa-bars")
            hamburguer.classList.remove("fa-x")
        }
    })
}

// Scroll

if(document.getElementById('header')){
    const header = document.getElementById('header')
    document.addEventListener('scroll',(e)=>{
        const scrollY = window.scrollY;
        if(scrollY>0){
            header.classList.add('header_new')
        }else{
            header.classList.remove('header_new')
        }
    })
}

// Animation

const handleIntersection = (entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `aparecer-div 1.5s forwards`;
            entry.target.style.animationDelay = `${index * 0.2}s`;
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1
});

const containers = document.querySelectorAll('.container_about');

containers.forEach(container => {
    observer.observe(container);
});

if(document.getElementById('formulario')){
    const formulario = document.getElementById('formulario')
    const btn = document.getElementById('btn_enviar');
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        btn.value = 'Enviando...';
        const serviceID = "service_og6anro";
        const templateID = "template_wsss858";
        emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
           btn.value = 'Enviar';
           Toastify({
            text: "Enviado! 📨",
            duration: 3000,
            gravity: "top",
            position: "right",
            style: {
                background: "black",
            },
            }).showToast();
            formulario.reset()
        },(err) => {
           btn.value = 'Enviar';
           Toastify({
            text: "Error al enviar! ✖️",
            duration: 3000,
            gravity: "top",
            position: "right",
            style: {
              background: "red",
            },
            }).showToast();
        });
    })
}