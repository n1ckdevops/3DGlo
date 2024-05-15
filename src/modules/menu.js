const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");

  const toggleMenu = () => {
    menu.classList.toggle("active-menu");
  };
  const  handleMenu = (e) => {
    if(e.target.classList.contains('close-btn')){
      menu.classList.remove('active-menu') 
    }
    if(e.target.closest('ul>li>a')){
      menu.classList.remove('active-menu')  
    }
  };
  
  menuBtn.addEventListener("click", toggleMenu);
  menu.addEventListener("click", handleMenu);
  
};
export default menu;
