import makeACard from "./CardFactory.js";

const button = document.querySelector(".button");
const option = document.getElementById("muscles");
const result = document.querySelector(".result")

// Example POST method implementation:
async function getData(muscle) {
  // Default options are marked with *
  const response = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": "v4YOH2MgQJtM6G0u76hWPA==wl8M0ixevV2myeJF",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    
  });
  // console.log(response.json());
  return response.json(); // parses JSON response into native JavaScript objects
}
 getData("biceps").then((data)=>{
  console.log(data)
 })

 

 button.addEventListener("click",()=>{
  getData(option.value).then((data)=>{
   
    if (result.children.length == 4) {
      result.removeChild(result.children[0]);
      result.removeChild(result.children[0]);
      result.removeChild(result.children[0]);
      result.removeChild(result.children[0]);
    }


    for( let i =0; i < 4; i++){
      console.log(data)
      let title = data[i].name
      let equipment  = data[i].equipment
      let info = data[i].instructions
  
      let card = makeACard(title, equipment , info)
  
      result.appendChild(card)
    }




    
     

   })
 });

 
 
 


