document.querySelector('#search').addEventListener('click', getPokemon )

function getPokemon(){
    const name = document.querySelector('#pokemonName').value
    let pokeName = name.toLowerCase()
    

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`).then(Response =>{
        return (Response.json())
        })
        .then(data =>{
            console.log(data)
            document.querySelector('.pokemonBox').innerHTML =`
             <div>
               <img src="${data.sprites.other['official-artwork'].front_default}" alt="${data.weight}">
           </div>
           <div class="pokemonInfo">
               <p>Name:${name}</p>
               <p>weight:${data.weight}</p>
           </div>
                      
                `
        })
        .catch(err =>{
            return('pokemon not found')
        })
    
}
getPokemon()