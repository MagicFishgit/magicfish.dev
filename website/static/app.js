const card3d = document.querySelectorAll(".card-3d");
const container3d = document.querySelectorAll(".container-3d");
const valuesImg = document.querySelectorAll(".values img");
const title3d = document.querySelectorAll(".title-3d");
const description3d = document.querySelectorAll(".info-3d h3");

//ToDo: Need to add some loop logic to reduce and reuse code but I just want to get the effect working for now. Maybe 
//make functions that receive and index and act on it etc. Don't judge the nonsense going on here for now. Again, I know this is horrible. Just look away until
//I find time to do it properly.

//Moving Animation Event
container3d[0].addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 40;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 40;
    card3d[0].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;    
  });

  container3d[1].addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 40;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 40;
    card3d[1].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });

  container3d[2].addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 40;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 40;
    card3d[2].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });

//Animate on Mouse In
  container3d[0].addEventListener("mouseenter", (e) => {
      card3d[0].style.transition = 'none';
      valuesImg[0].style.transform = "translateZ(200px) rotateZ(-30deg)";
      title3d[0].style.transform = "translateZ(150px)";
      description3d[0].style.transform = "translateZ(125px)";
  });

  container3d[1].addEventListener("mouseenter", (e) => {
      card3d[1].style.transition = 'none';
      valuesImg[1].style.transform = "translateZ(200px) rotateZ(-30deg)";
      title3d[1].style.transform = "translateZ(150px)";
      description3d[1].style.transform = "translateZ(125px)";
  });

  container3d[2].addEventListener("mouseenter", (e) => {
      card3d[2].style.transition = 'none';
      valuesImg[2].style.transform = "translateZ(200px) rotateZ(-30deg)";
      title3d[2].style.transform = "translateZ(150px)";
      description3d[2].style.transform = "translateZ(125px)";
  });

//Animate on Mouse Out
container3d[0].addEventListener("mouseleave", (e) => {
    card3d[0].style.transform = 'rotateY(0deg) rotateX(0deg)';
    card3d[0].style.transition = 'all 0.5s ease';
    //Popout Reverse
    title3d[0].style.transform = "translateZ(0px)";
    valuesImg[0].style.transform = "translateZ(0px)";
    description3d[0].style.transform = "translateZ(0px)";
  });

container3d[1].addEventListener("mouseleave", (e) => {
    card3d[1].style.transform = 'rotateY(0deg) rotateX(0deg)';
    card3d[1].style.transition = 'all 0.5s ease';
    //Popout Reverse
    title3d[1].style.transform = "translateZ(0px)";
    valuesImg[1].style.transform = "translateZ(0px)";
    description3d[1].style.transform = "translateZ(0px)";
  });

container3d[2].addEventListener("mouseleave", (e) => {
    card3d[2].style.transform = 'rotateY(0deg) rotateX(0deg)';
    card3d[2].style.transition = 'all 0.5s ease';
    //Popout Reverse
    title3d[2].style.transform = "translateZ(0px)";
    valuesImg[2].style.transform = "translateZ(0px)";
    description3d[2].style.transform = "translateZ(0px)";
  });

//Slide on Scroll section:

//Observes when user has element in view
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));