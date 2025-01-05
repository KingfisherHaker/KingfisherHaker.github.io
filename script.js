const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

var mouse = document.querySelector('.mouse');
window.addEventListener('mousemove',function(event){    
    mouse.style.left = event.clientX - mouse.offsetWidth/2 + 'px' ;
    mouse.style.top = event.clientY -mouse.offsetHeight/2 + 'px';       
})

document.querySelectorAll('.dock li').forEach(li => {
  li.addEventListener('mousemove', e => {
      let item = e.target;
      let itemRect = item.getBoundingClientRect();
      let offset = Math.abs(e.clientX - itemRect.left) / itemRect.width;
      let scale = 0.6;

      restScale();

      if(pre) {
          pre.style.setProperty('--scale', 1 + scale * Math.abs(offset - 1));
      }
      item.style.setProperty('--scale', 1 + scale);
      if(next) {
          next.style.setProperty('--scale', 1 + scale * offset);
      }
  });
});

document.addEventListener('contextmenu', function(event) {

  event.preventDefault(); 

});
event.preventDefault(); 

