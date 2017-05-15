const personForm = document.querySelector('form')

const handleSubmit = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')
    

    const personName = form.personName.value
    const hairColor = form.hairColor.value
    const age = focus.age.value
    const birthPlace = form.birthPlace.value
    
    const colorDiv = `
        <div style = "height: 50px; width: 100px; backgoround-color: ${hairColor}"></div>
    `
    // details.innerHTML =  `<em>${personName}</em>`

    // const em = document.createElement('em')
    // em.textContent = personName
    // details.appendChild(em)

    details.innerHTML = `
    <ul>
        <li>Name: ${personName}</li>
        <li>hair Color: ${colorDiv}</li>
        <li>Age: ${age}</li>
        <li>Birthplace: ${birthPlace}</li>
    </ul>
    `
}

personForm.onsubmit = handleSubmit