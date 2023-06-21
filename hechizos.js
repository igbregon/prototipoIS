//ARRAY DE LOS HECHIZOS

const hechizos = [

    {   
        id:"01",
        nombre:"Expelliarmus",
        descripcion:"Hechizo Desarmador",
        imagen:"img/hechizos/HM_Expelliarmus.webp"
    },
    {   
        id:"02",
        nombre:"Protego",
        descripcion:"Hechizo protector",
        imagen:"img/hechizos/HM_Protego.webp"
    },
    {   
        id:"03",
        nombre:"Incendio",
        descripcion:"Hechizo de fuego",
        imagen:"img/hechizos/HM_Incendio.webp"
    },
    {   
        id:"04",
        nombre:"Reparo",
        descripcion:"Hechizo Curativo",
        imagen:"img/hechizos/HM_Reparo.webp"
    },
    {   
        id:"05",
        nombre:"Wingardium Leviosa",
        descripcion:"Hechizo levitatorio",
        imagen:"img/hechizos/HM_Wingardium_Leviosa.webp"
    },
]

const contenedorHechizos = document.querySelector("#contenedorHechizos");

function cargarHechizos() {

    hechizos.forEach(hechizo => {
        const div = document.createElement("div");
        div.classList.add("hechizo")
        div.innerHTML = `
        <div
                    class="card rounded-0 d-flex align-items-center"
                    style="width: 18rem"
                    id="${hechizo.id}"
                >
                    <img
                        src="${hechizo.imagen}"
                        class="card-img-top mt-4 mb-2"
                        style="width: 75%"
                        alt="..."
                    />
                    <div class="card-body row row-cols-1">
                        <h5 class="card-title" style="font-weight: bold">
                            ${hechizo.nombre}
                        </h5>
                        <p class="card-text">${hechizo.descripcion}</p>
                        <a href="#" class="btn btn-primary mt-3 rounded-0"
                            >Aprender</a
                        >
                    </div>
                </div>
        `;

        contenedorHechizos.append(div);
    })
}

cargarHechizos();