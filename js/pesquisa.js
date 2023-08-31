const nomePesquisa= document.querySelector("#nomeParaPesquisa");
const pesquisaInterna = document.querySelector("#pesquisa");

function primeiraLetra(string){
   return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function pokemonNumero(i){
    let img = pokemons[i].image_url;
         let imgFundo = pokemons[i].background_image_url;
         let nome = pokemons[i].name;
         let classe = pokemons[i].category;
 
         imagemFundo.src= imgFundo;
         imagemFundo.alt= classe;
 
         imagemPokemon.src = img;
 
         document.getElementById("nomeDoPokemon").innerHTML = nome;
         document.getElementById("classeDoPokemon").innerHTML = classe + " type Pokémon";
         console.log(pokemons[i])

}

pesquisaInterna.addEventListener("click", function(e) {
   e.preventDefault();
   let nome = nomePesquisa.value;
   let nomeModificado= primeiraLetra(nome);
   let error = document.getElementById("erro");
   
   let i = 0;

    for(i; i<=14; i++){

      if(pokemons[0].name==nomeModificado){
        error.innerHTML="";
        pokemonNumero(0);
        break;
      }
      else if(pokemons[1].name==nomeModificado){
        error.innerHTML="";
        pokemonNumero(1);
        break;

      }else if(pokemons[2].name==nomeModificado){
        error.innerHTML="";
        pokemonNumero(2);
        break;
        
      }else if(pokemons[3].name==nomeModificado){
        error.innerHTML="";
        pokemonNumero(3);
        break;
        
      }else if(pokemons[4].name==nomeModificado){
        error.innerHTML="";
        pokemonNumero(4);
        break;
        
      }else if(pokemons[5].name==nomeModificado){
        error.innerHTML="";
        pokemonNumero(5);
        break;
        
      }else if(pokemons[6].name==nomeModificado){
        error.innerHTML="";
        pokemonNumero(6);
        break;
        
      }else if(pokemons[7].name==nomeModificado){
        error.innerHTML="";
        pokemonNumero(7);
        break;
        
      }else if(pokemons[8].name==nomeModificado){
        error.innerHTML="";
        pokemonNumero(8);
        break;
        
      }else if(pokemons[9].name==nomeModificado){
        error.innerHTML="";
        pokemonNumero(9);
        break;
        
      }else if(pokemons[10].name==nomeModificado){
        error.innerHTML="";
        pokemonNumero(10);
        break;
        
      }else if(pokemons[11].name==nomeModificado){
        error.innerHTML="";
        pokemonNumero(11);
        break;
        
      }else if(pokemons[12].name==nomeModificado){
        error.innerHTML="";
        pokemonNumero(12);
        break;
        
      }else if(pokemons[13].name==nomeModificado){
        error.innerHTML="";
        pokemonNumero(13);
        break;
        
      }else if(pokemons[14].name==nomeModificado){
        error.innerHTML="";
        pokemonNumero(14);
        break;
        
      }else{
        error.innerHTML="Insira um valor válido!";
       
       break;
      }
   }
})