//ARRAY DE LOS HECHIZOS

const hechizos = [

    {
        id: "01",
        nombre: "Expelliarmus",
        descripcion: "Hechizo Desarmador",
        imagen: "img/hechizos/HM_Expelliarmus.webp",
        tipo: "ofensivo"
    },
    {
        id: "02",
        nombre: "Protego",
        descripcion: "Hechizo protector",
        imagen: "img/hechizos/HM_Protego.webp",
        tipo: "defensivo"
    },
    {
        id: "03",
        nombre: "Incendio",
        descripcion: "Hechizo de fuego",
        imagen: "img/hechizos/HM_Incendio.webp",
        tipo: "ofensivo"
    },
    {
        id: "04",
        nombre: "Reparo",
        descripcion: "Hechizo Curativo",
        imagen: "img/hechizos/HM_Reparo.webp",
        tipo: "curativo"
    },
    {
        id: "05",
        nombre: "Wingardium Leviosa",
        descripcion: "Hechizo levitatorio",
        imagen: "img/hechizos/HM_Wingardium_Leviosa.webp",
        tipo: "especial"
    },
    {
        id: "06",
        nombre: "Petrificus Totalus",
        descripcion: "Hechizo paralizador",
        imagen: "img/hechizos/HM_Petrificus_Totalus.webp",
        tipo: "ofensivo"
    },
    {
        id: "07",
        nombre: "Desmaius",
        descripcion: "Hechizo aturdidor",
        imagen: "img/hechizos/HM_Desmaius.webp",
        tipo: "furtivo"
    },
    {
        id: "08",
        nombre: "Lumos",
        descripcion: "Hechizo de iluminación",
        imagen: "img/hechizos/HM_Lumos.webp",
        tipo: "especial"
    },
]

const contenedorHechizos = document.querySelector("#contenedorHechizos");

function cargarHechizos() {

    hechizos.forEach(hechizo => {
        const div = document.createElement("div");
        div.classList.add("hechizo")
        div.innerHTML = `
        <div class="row">
            <div
                    class="card mx-2 rounded-0 d-flex align-items-center"
                    style="width: 18rem"
                    id="${hechizo.id}"
                >
                    <img
                        src="${hechizo.imagen}"
                        class="card-img-top mt-4 mb-2"
                        style="width: 75%"
                        alt="..."
                    />
                    <div class="card-body row ">
                        <h5 class="card-title" style="font-weight: bold">
                            ${hechizo.nombre}
                        </h5>
                        <p class="card-text">${hechizo.descripcion}</p>
                        <a href="#" class="btn btn-primary mt-3 rounded-0 "
                            >Aprender</a
                        >
                    </div>
            </div>
        </div>
        `;

        contenedorHechizos.append(div);
    })
}

cargarHechizos();

{/* <div
class="card rounded-0 d-flex align-items-center"
style="width: 18rem"
>
<img
    src="img/hechizos/HM_Expelliarmus.webp"
    class="card-img-top mt-4 mb-2"
    style="width: 75%"
    alt="..."
/>
<div class="card-body row row-cols-1">
    <h5 class="card-title" style="font-weight: bold">
        Expelliarmus
    </h5>
    <p class="card-text">Hechizo desarmador</p>
    <a href="#" class="btn btn-primary mt-3 rounded-0"
        >Aprender</a
    >
</div>
</div> */}


// Formula de filtrar hechizos
//para los botones check
const defensivoFilter = document.getElementById("check1");
const ofensivoFilter = document.getElementById("check2");
const furtivoFilter = document.getElementById("check3");
const especialesFilter = document.getElementById("check4");
const curativoFilter = document.getElementById("check5");

defensivoFilter.addEventListener("click", filtrarHechizos);
ofensivoFilter.addEventListener("click", filtrarHechizos);
furtivoFilter.addEventListener("click", filtrarHechizos);
especialesFilter.addEventListener("click", filtrarHechizos);
curativoFilter.addEventListener("click", filtrarHechizos);

function filtrarHechizos() {
    const hechizosFiltrados = [];

    if (defensivoFilter.checked) {
        // Filtrar hechizos defensivos
        hechizosFiltrados.push(...hechizos.filter(hechizo => /* Condición de filtro para hechizos defensivos */ hechizo.tipo === "defensivo"));
    }

    if (furtivoFilter.checked) {
        // Filtrar hechizos furtivos
        hechizosFiltrados.push(...hechizos.filter(hechizo => /* Condición de filtro para hechizos furtivos */hechizo.tipo === "furtivo"));
    }
    if (ofensivoFilter.checked) {
        // Filtrar hechizos furtivos
        hechizosFiltrados.push(...hechizos.filter(hechizo => /* Condición de filtro para hechizos furtivos */hechizo.tipo === "ofensivo"));
    }
    if (especialesFilter.checked) {
        // Filtrar hechizos furtivos
        hechizosFiltrados.push(...hechizos.filter(hechizo => /* Condición de filtro para hechizos furtivos */hechizo.tipo === "especial"));
    }
    if (curativoFilter.checked) {
        // Filtrar hechizos furtivos
        hechizosFiltrados.push(...hechizos.filter(hechizo => /* Condición de filtro para hechizos furtivos */hechizo.tipo === "curativo"));
    }

    // Limpiar el contenedor de hechizos antes de mostrar los resultados filtrados
    contenedorHechizos.innerHTML = "";

    if (hechizosFiltrados.length > 0) {
        hechizosFiltrados.forEach(hechizo => {
            // Crear y agregar elementos de hechizos filtrados al contenedor, haremos la misma creacion de cards :3
            const div = document.createElement("div");
            // ... código para crear el elemento de hechizo filtrado
            div.innerHTML = `
        <div class="row">
            <div
                    class="card mx-2 rounded-0 d-flex align-items-center"
                    style="width: 18rem"
                    id="${hechizo.id}"
                >
                    <img
                        src="${hechizo.imagen}"
                        class="card-img-top mt-4 mb-2"
                        style="width: 75%"
                        alt="..."
                    />
                    <div class="card-body row ">
                        <h5 class="card-title" style="font-weight: bold">
                            ${hechizo.nombre}
                        </h5>
                        <p class="card-text">${hechizo.descripcion}</p>
                        <a href="#" class="btn btn-primary mt-3 rounded-0 "
                            >Aprender</a
                        >
                    </div>
            </div>
        </div>
        `;
            contenedorHechizos.appendChild(div);
        });
    } else {
        cargarHechizos();
    }
}
// ahora lo mismo pero con los botones de arriba, y asi se activa el filtro

const defensivoButton = document.getElementById("defensivo-button");
const ofensivoButton = document.getElementById("ofensivo-button");
const furtivoButton = document.getElementById("furtivo-button");
const especialesButton = document.getElementById("especial-button");
const curativoButton = document.getElementById("curativo-button");
//obtener elementos a base de los checkbox
defensivoButton.addEventListener("click", () => {
    defensivoFilter.checked = true;
    ofensivoFilter.checked = false;
    furtivoFilter.checked = false;
    especialesFilter.checked = false;
    curativoFilter.checked = false;
    filtrarHechizos();
});

ofensivoButton.addEventListener("click", () => {
    defensivoFilter.checked = false;
    ofensivoFilter.checked = true;
    furtivoFilter.checked = false;
    especialesFilter.checked = false;
    curativoFilter.checked = false;
    filtrarHechizos();
});

furtivoButton.addEventListener("click", () => {
    defensivoFilter.checked = false;
    ofensivoFilter.checked = false;
    furtivoFilter.checked = true;
    especialesFilter.checked = false;
    curativoFilter.checked = false;
    filtrarHechizos();
});

especialesButton.addEventListener("click", () => {
    defensivoFilter.checked = false;
    ofensivoFilter.checked = false;
    furtivoFilter.checked = false;
    especialesFilter.checked = true;
    curativoFilter.checked = false;
    filtrarHechizos();
});
curativoButton.addEventListener("click", () => {
    defensivoFilter.checked = false;
    ofensivoFilter.checked = false;
    furtivoFilter.checked = false;
    especialesFilter.checked = false;
    curativoFilter.checked = true;
    filtrarHechizos();
});