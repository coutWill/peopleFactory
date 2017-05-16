const personForm = document.querySelector('form')

const showColor = (hairColor) => {
    
  const details = document.querySelector('.details')  
  const colorDiv = document.createElement("div")
  colorDiv.style.height = "50px"
  colorDiv.style.width =  "100px"
  colorDiv.style.backgroundColor = hairColor
  details.appendChild(colorDiv)
  return hairColor;
}

const showElem = (pName, hColor, hairColor, Age, bPlace) =>{
    const details = document.querySelector('.details')

    details.appendChild(pName)
    details.appendChild(hColor)
    showColor(hairColor);
    details.appendChild(Age)
    details.appendChild(bPlace)
}

const handleSubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const personName = form.personName.value
  const hairColor = form.hairColor.value
  const age = form.age.value
  const birthplace = form.birthplace.value
  
  const pName = document.createElement("li")
  const hColor = document.createElement("li")
  const Age = document.createElement("li")
  const bPlace = document.createElement("li")

  const ptext = document.createTextNode("Name: " + personName)
  const htext = document.createTextNode("Hair color: " )
  const atext = document.createTextNode("Age: " + age)
  const btext = document.createTextNode("Birthplace: " + birthplace)

  pName.appendChild(ptext)
  hColor.appendChild(htext)
  Age.appendChild(atext)
  bPlace.appendChild(btext)

//   details.innerHTML = `
//     <ul>
//       <li>Name: ${personName}</li>
//       <li>Hair Color: ${colorDiv}</li>
//       <li>Age: ${age}</li>
//       <li>Birthplace: ${birthplace}</li>
//     </ul>
//   `

showElem(pName, hColor, hairColor, Age, bPlace)

}

personForm.addEventListener('submit', handleSubmit)