const personForm = document.querySelector('form')

const handleSubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const details = document.querySelector('.details')
  const personName = form.personName.value
  const hairColor = form.hairColor.value
  const age = form.age.value
  const birthplace = form.birthplace.value

  const colorDiv = `
    <div style="height: 50px; width: 100px; background-color: ${hairColor}"></div>
  `

  const pName = document.createElement("li")
  const hColor = document.createElement("li")
  const Age = document.createElement("li")
  const bPlace = document.createElement("li")

  const haColor = document.create

  const ptext = document.createTextNode("Name: " + personName)
  const htext = document.createTextNode("Hair color: " + hairColor.target)
  const atext = document.createTextNode("Age: " + age)
  const btext = document.createTextNode("Birthplace: " + birthplace)

  pName.appendChild(ptext)
  hColor.appendChild(htext)
  Age.appendChild(atext)
  bPlace.appendChild(btext)

  details.appendChild(pName)
  details.appendChild(hColor)
  details.appendChild(Age)
  details.appendChild(bPlace)

//   details.innerHTML = `
//     <ul>
//       <li>Name: ${personName}</li>
//       <li>Hair Color: ${colorDiv}</li>
//       <li>Age: ${age}</li>
//       <li>Birthplace: ${birthplace}</li>
//     </ul>
//   `


}

personForm.addEventListener('submit', handleSubmit)