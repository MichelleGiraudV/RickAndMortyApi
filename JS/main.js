const input = document.querySelector('#input');
const sectionCharacters = document.querySelector('#characters');
const btn = document.querySelector('#btn');

function printData(arrayData,sectionDom){
    // vaciar la seccion 
    sectionDom.innerHTML = "";
    for(let character of arrayData){
        printOneCharacter(character,sectionDom)
    }
}

function printOneCharacter(pcharacter,psectionDom){
    console.log(pcharacter)
    psectionDom.innerHTML += ` <article class="col-6 col-md-4">
            <div class="card">
                <img class="card-img-top" src="${pcharacter.image}" alt="${pcharacter.name}">
                <div class="card-body">
                    <h5 class="card-title">${pcharacter.name}</h5>
                </div>
            </div>
        </article>
    `
}

async function getAllCharacters(url){
    const response = await fetch(url);
    const data = await response.json()
    //console.log(data.info);
    //return (data.results)
    //array y seccion donde lo tiene que pintar
    printData(data.results, sectionCharacters);
}

//getAllCharacters('https://rickandmortyapi.com/api/character?page=1');
getAllCharacters('https://rickandmortyapi.com/api/character');

const searchCharactersByName = async(name) => {
    try{
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
        const data = await response.json();
        //console.log(); 
        printData(data.results, sectionCharacters);
    }catch(error){
        console.log(error);
    }
}

//Buscar personajes que se llamen Rick
//searchCharactersByName("Rick"); 

btn.addEventListener('click',getInput);

function getInput(){
    //console.log(input.value);
    searchCharactersByName(input.value);
}
