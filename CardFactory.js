function makeACard (name, equipment, instructions){
    let Title = document.createElement("h1")
    let equipmentInfo = document.createElement("p")
    let instructionsInfo = document.createElement("p")
    let container = document.createElement("div")
    let card = document.createElement("div")
    let cardBody = document.createElement("div")

// container.className = "mt-5 card-body" 

    card.className = "card"
    cardBody.className = "card-body"

    Title.innerText = name
    equipmentInfo.innerText = equipment
    instructionsInfo.innerText = instructions

    cardBody.appendChild(Title)
    cardBody.appendChild(equipmentInfo)
    cardBody.appendChild(instructionsInfo)

    card.appendChild(cardBody)
    container.appendChild(card)

    return container



}

export default makeACard


//made a change