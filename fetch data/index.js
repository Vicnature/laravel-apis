// fetch=func used to make HTTP requests to fetch resources
// resources include JSON style data,images,Files 
// simplifies async data fetching in js
// used to interact with APIs to retrieve and send data asynchroniously over the web
// arguments:fetch(url,{options}) 
// fetch has 2 parameters:url of the resource and options object(e.g. get,put..)

// fetch returns a promise,hence why .then is used after a response has been received



// The following code fetches pokemon pikachu json data and checks if the key name within the response object has a value of ok.If it does,it returns the response object and logs out the id of the pikachu object.If not,it throws an error which is caught by the last line of the code.


            // fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
            // .then(response => {
            //     if(!response.ok){
            //         throw new Error("could not fetch resource");
            //     }
            //     return response.json();
            // })
            // .then(data=>console.log(data.id))
            // .catch(error=>console.log(error))


//fetching using an async await function
// the code collects the pokemon character name submitted by the user inside a front-end input field in index.html
// it uses the pokemon api to fetch the response object related to the pokemon specified by the user
// the code references the sprites attribute in the response object to get the image of the pokemon
// finally,it places the image inside the src attribute of the image(within index.html) then changes display property to block to make it visible

fetchData()
async function fetchData(){
    try{
        const pokemonName=document.getElementById("pokemonName").value.toLowerCase()
        const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);


        if(!response.ok){
            throw new Error("could not fetch resource")
        }
        const data=await response.json()
        const pokemonSprite=data.sprites.front_default
        const imgElement=document.getElementById("pokemonSprite")

        imgElement.src=pokemonSprite
        imgElement.style.display="block"
        // console.log(data)
    }catch(error){
        console.log(error)
    }
}