console.log("conectado navbar")

const containerFeatures = document.getElementById('dropdown-features')
const containerCompany = document.getElementById('dropdown-company')
const containerArrow = document.getElementById('arrow')
const containerMenuMobile = document.getElementById('burguer-menu-mobile')
const containerImgMenuMobile = document.getElementById('menu-mobile')
const menuMobileClose = document.getElementById('menu-mobile-close')
const containerFeaturesMobile = document.getElementById('dropdown-features-mobile')

document.addEventListener("click", (event) => {
  // event.preventDefault
  const featureId = event.target.getAttribute("id");
  console.log(featureId)
  switch (featureId) {
    case "navbarDropdownFeatures":
    containerFeatures.innerHTML = ""
    containerFeatures.innerHTML += `
    <ul class="dropdown__features">
    <li><a class="" href="#"><img src="./public/icon-todo.svg" alt=""><i class="fa-solid fa-calendar-minus pe-2" style="color: #5c2dc8;"></i> Todo List</a></li>
    <li><a class="" href="#"><img src="./public/icon-calendar.svg" alt=""><i class="fa-solid fa-calendar-day pe-2" style="color: #19c0cc;"></i> Calendar</a>
    </li>

    <li><a class="" href="#"><img src="./public/icon-reminders.svg" alt=""><i class="fa-solid fa-bell pe-2" style="color: #f1de09;"></i> Reminders</a>
    </li>
    <li><a class="" href="#"><img src="./public/icon-planning.svg" alt=""><i class="fa-solid fa-clock pe-2" style="color: #91139a;"></i> Planing</a>
    </li>
    </ul>
    `;


    containerArrow.innerHTML += ""
    containerArrow.innerHTML += `
    <img src="./public/icon-arrow-up.svg" alt="" id="navbarDropdownFeatures">
    `
    break;

 case "navbarDropdownCompany":
    containerCompany.innerHTML = ""
    containerCompany.innerHTML += `
    <ul class="dropdown__company">
      <li><a class="dropdown-item" href="#">History</a></li>
      <li><a class="dropdown-item" href="#">Our Team</a></li>
      <li><a class="dropdown-item" href="#">Blog</a></li>
    </ul> `

    break;
 case"menu-mobile":
    containerImgMenuMobile.innerHTML = ""
    containerImgMenuMobile.innerHTML += `
    <img src="./app/public/icon-close-menu.svg" alt="X" id="menu-mobile-close">
    `

    console.log('soy menu mobile')
    containerMenuMobile.innerHTML = ""
    containerMenuMobile.innerHTML += `

    <ul class="display__mobile">
      <li class="d-flex justify-content-start">
        <span><a class="" href="#" id="navbarDropdownFeaturesMobile" > Features</a></span>
        <span id="arrow"><img src="./app/public/icon-arrow-down.svg" alt="" id="navbarDropdownFeatures"></span>
      </li>
      <li class="">
        <span><a class="" href="#" id="navbarDropdownCompanyMobile"> Company </a></span>
        <span><img src="./app/public/icon-arrow-down.svg" alt="" id="navbarDropdownCompany"></span>
      </li>

      <li class="">
        <a class=" ">Careers</a>
      </li>
      <li class="">
        <a class="" aria-current="page" href="#">About</a>
      </li>
      <li class="d-flex justify-content-center">
        <a class="" aria-current="page" href="#">Login</a>
      </li>
      <li class="d-flex justify-content-center">
        <button class="btn__link" type="submit">Register</button>
      </li>
    </ul>
    `
    break;
  case "navbarDropdownFeaturesMobile":
    containerMenuMobile.innerHTML = ""
    containerMenuMobile.innerHTML += `
    <ul class="display__mobile">
    <li class="">
      <span><a class="" href="#" id="" > Features</a></span>
      <span id="arrow"><img src="./app/public/icon-arrow-down.svg" alt="" id=""></span>
    </li>
    <li id="">

    <ul class="">
    <li><a class="" href="#"><img src="./public/icon-todo.svg" alt=""><i class="fa-solid fa-calendar-minus pe-2" style="color: #5c2dc8;"></i> Todo List</a></li>
    <li><a class="" href="#"><img src="./public/icon-calendar.svg" alt=""><i class="fa-solid fa-calendar-day pe-2" style="color: #19c0cc;"></i> Calendar</a>
    </li>

    <li><a class="" href="#"><img src="./public/icon-reminders.svg" alt=""><i class="fa-solid fa-bell pe-2" style="color: #f1de09;"></i> Reminders</a>
    </li>
    <li><a class="" href="#"><img src="./public/icon-planning.svg" alt=""><i class="fa-solid fa-clock pe-2" style="color: #91139a;"></i> Planing</a>
    </li>
    </ul>

    </li>

    <li class="">
      <span><a class="" href="#" id="navbarDropdownCompanyMobile"> Company </a></span>
      <span><img src="./app/public/icon-arrow-down.svg" alt="" id="navbarDropdownCompany"></span>
    </li>

    <li class="">
      <a class=" ">Careers</a>
    </li>
    <li class="">
      <a class="" aria-current="page" href="#">About</a>
    </li>
    <li class="d-flex justify-content-center">
      <a class="" aria-current="page" href="#">Login</a>
    </li>
    <li class="d-flex justify-content-center">
      <button class="btn__link" type="submit">Register</button>
    </li>
  </ul>

    `;
    break;
  case "navbarDropdownCompanyMobile":
    containerMenuMobile.innerHTML = ""
    containerMenuMobile.innerHTML += `
    <ul class="display__mobile">
    <li class="">
      <span><a class="" href="#" id="" > Features</a></span>
      <span id="arrow"><img src="./app/public/icon-arrow-down.svg" alt="" id=""></span>
    </li>
    <li id="">

    <ul class="">
    <li><a class="" href="#"><img src="./public/icon-todo.svg" alt=""><i class="fa-solid fa-calendar-minus pe-2" style="color: #5c2dc8;"></i> Todo List</a></li>
    <li><a class="" href="#"><img src="./public/icon-calendar.svg" alt=""><i class="fa-solid fa-calendar-day pe-2" style="color: #19c0cc;"></i> Calendar</a>
    </li>

    <li><a class="" href="#"><img src="./public/icon-reminders.svg" alt=""><i class="fa-solid fa-bell pe-2" style="color: #f1de09;"></i> Reminders</a>
    </li>
    <li><a class="" href="#"><img src="./public/icon-planning.svg" alt=""><i class="fa-solid fa-clock pe-2" style="color: #91139a;"></i> Planing</a>
    </li>
    </ul>

    </li>

    <li class="">
      <span><a class="" href="#" id="navbarDropdownCompanyMobile"> Company </a></span>
      <span><img src="./app/public/icon-arrow-down.svg" alt="" id="navbarDropdownCompany"></span>
    </li>
    <ul class="">
      <li><a class="dropdown-item" href="#">History</a></li>
      <li><a class="dropdown-item" href="#">Our Team</a></li>
      <li><a class="dropdown-item" href="#">Blog</a></li>
    </ul>

    <li class="">
      <a class=" ">Careers</a>
    </li>
    <li class="">
      <a class="" aria-current="page" href="#">About</a>
    </li>
    <li class="d-flex justify-content-center">
      <a class="" aria-current="page" href="#">Login</a>
    </li>
    <li class="d-flex justify-content-center">
      <button class="btn__link" type="submit">Register</button>
    </li>
  </ul>

    `;
    break;
  case "menu-mobile-close":
    location.reload();
    break;

}});
