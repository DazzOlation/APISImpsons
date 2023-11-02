const inputBuscar = document.getElementById('inputBuscar');
const btnBuscar = document.getElementById('btnBuscar');

async function GetSimpsonsData() {
    const response = await fetch("https://apisimpsons.fly.dev/api/personajes?limit=12");
    const data = await response.json();
    ShowSimpsonsData(data.docs);
}

    btnBuscar.addEventListener('click', async function SearchCharacter() {
        const query = inputBuscar.value;
        const url = `https://apisimpsons.fly.dev/api/personajes/find/${query}`;
        const res = await fetch(url);
        console.log(res)
        const searchResult = await res.json();
        console.log(searchResult)
        ShowSimpsonsData(searchResult.result);
        console.log(searchResult.result)
    
    });


function ShowSimpsonsData(characters) {
    const characterCards = document.getElementById("characterCards");
    characterCards.innerHTML = ''; 
    characters.forEach(elem => {
        const card = document.createElement("div");
        card.className = "col-md-12 col-lg-4 col-sm-12";
        card.innerHTML = `
            <div class="card">
                <img src="${elem.Imagen}" class="card-img top" alt="${elem.Nombre}">
                <div class="card-body">
                    <h5 class="card-title">${elem.Nombre}</h5>
                    <p class="card-text">Historia: ${elem.Historia}</p>
                    <p class="card-text">Género: ${elem.Genero}</p>
                    <p class="card-text">Estado: ${elem.Estado}</p>
                    <p class="card-text">Ocupación: ${elem.Ocupacion}</p>
                </div>
            </div>
        `;
        characterCards.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    GetSimpsonsData(); 
});

