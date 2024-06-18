function makeACard (name, equipment, instructions){
    let Title = document.createElement("h1")
    let equipmentInfo = document.createElement("p")
    let instructionsInfo = document.createElement("p")
    let container = document.createElement("div")


    Title.innerText = name
    equipmentInfo.innerText = equipment
    instructionsInfo.innerText = instructions

    container.appendChild(Title)
    container.appendChild(equipmentInfo)
    container.appendChild(instructionsInfo)

    return container



}

export default makeACard


//made a change