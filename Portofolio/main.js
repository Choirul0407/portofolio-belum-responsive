var typed = new Typed(".text", {
    strings:["Data Analyst", "Programmer", "AI Speacialist"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
    
    
});
const menuBtn = document.querySelector(".menu-btn");
  const navbar = document.querySelector(".navbar");
  menuBtn.onclick = () => {
    navbar.classList.toggle("active");
  }