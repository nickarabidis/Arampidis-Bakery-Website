let menu = document.querySelector('#menu-btn');
let navbar= document.querySelector('.header .flex .navbar');

menu.onclick= () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll= () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
  
    let currentDropdown
    if (isDropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]")
      currentDropdown.classList.toggle("active")
    }
  
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
      if (dropdown === currentDropdown) return
      dropdown.classList.remove("active")
    })
  })