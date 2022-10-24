const card3d = document.querySelector(".card-3d");
const container3d = document.querySelector(".container-3d");
const values = document.querySelector(".values img");
const title3d = document.querySelector(".title-3d");
const description3d = document.querySelector(".info-3d h3");

//Moving Animation Event
container3d.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 40;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 40;
    card3d.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });

//Animate on Mouse In
  container3d.addEventListener("mouseenter", (e) => {
    card3d.style.transition = 'none';
    // Popout Effect
    title3d.style.transform = "translateZ(150px)";
  });

//Animate on Mouse Out
container3d.addEventListener("mouseleave", (e) => {
    card3d.style.transform = 'rotateY(0deg) rotateX(0deg)';
    card3d.style.transition = 'all 0.5s ease';
    //Popout Reverse
    title3d.style.transform = "translateZ(0px)";
  });