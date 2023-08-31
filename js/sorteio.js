var pokemons; 

 fetch('https://dev-api-teste.mandarin.com.br/pokemons')
 .then(res=>res.json())
 .then(dados=>{
    pokemons= dados;
    console.log(pokemons);
 })

function sorteioPok(){
    
     let sorteio = Math.floor((Math.random()*pokemons.length));
     let img = pokemons[sorteio].image_url;
     let imgFundo = pokemons[sorteio].background_image_url;
     let nome = pokemons[sorteio].name;
     let classe = pokemons[sorteio].category;
     
     imagemFundo.src= imgFundo;
     imagemFundo.alt= classe;
    
     imagemPokemon.src = img;

     document.getElementById("nomeDoPokemon").innerHTML = nome;
     document.getElementById("classeDoPokemon").innerHTML = classe + " type Pokémon";

}

