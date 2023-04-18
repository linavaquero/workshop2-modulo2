console.log("conectado navbar")

const containerFeatures = document.getElementById('dropdown-features')
console.log(containerFeatures)
const containerCompany = document.getElementById('dropdown-company')
console.log(containerCompany)

document.addEventListener("click", (event) => {
  // event.preventDefault
  // console.log(event.target)
  const featureId = event.target.getAttribute("id");
  console.log(featureId)
  if (featureId == "navbarDropdownFeatures") {
    containerFeatures.innerHTML = ""
    containerFeatures.innerHTML += `

    <li><a class="" href="#"><img src="../public/icon-todo.svg" alt="Todo list"> Todo List</a></li>
    <li><a class="" href="#"><img src="../public/icon-calendar.svg" alt="calendar"> Calendar</a>
    </li>
    <li><a class="" href="#"><img src="../public/icon-reminders.svg" alt="Reminders"> Reminders</a>
    </li>
    <li><a class="" href="#"><img src="../public/icon-planning.svg" alt="planning"> Planing</a>
    </li>
    `

  } else if (featureId == "navbarDropdownCompany") {
    containerCompany.innerHTML = ""
    containerCompany.innerHTML += `
    <li><a class="dropdown-item" href="#">History</a></li>
    <li><a class="dropdown-item" href="#">Our Team</a></li>
    <li><a class="dropdown-item" href="#">Blog</a></li>
    `
  }

});
