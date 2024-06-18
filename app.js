import apikey from "./apikey";
const button = document.getElementById("button");
const option = document.getElementById("muscles");

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
      "X-Api-Key": apikey
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
 console.log(option.value)
  getData(option.value).then((data)=>{
    console.log(data)
   })
 });

 
 
 


