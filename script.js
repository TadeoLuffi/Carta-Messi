/* Este es el listado de la información de las cartas  */
const listadoCartas = [
    {
        id: 1,
        nombre: "Messi Seleccion",
        imagen: "https://media.tycsports.com/files/2023/06/24/584696/messi_1440x810_wmk.webp?v=1",
        descripcion: "Messi Campeon",
    },
    {
        id: 2,
        nombre: "Messi Barca",
        imagen: "https://www.fcbarcelona.com/photo-resources/2022/08/02/ae5252d1-b79b-4950-9e34-6e67fac09bb0/LeoMessi20092010_pic_fcb-arsenal62.jpg?width=1200&height=750",
        descripcion: "Messi Barca Feliz",
    },
    {
        id: 3,
        nombre: "Messi PSG",
        imagen: "https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3ODgzNjcwNTE2NzM3MTk2/messi-espaldas-psg.jpg",
        descripcion: "Tiro libre",
    },
    {
        id: 4,
        nombre: "Messi Inter d' Miami",
        imagen: "https://www.ole.com.ar/2023/08/07/j6Q7hyND2_300x220__1.jpg",
        descripcion: "Messi Debut Inter d' Miami",
    },
    {
        id: 5,
        nombre: "Messi Family",
        imagen: "https://aica.org/imagenes/noticias/messi-y-el-mayor-de-sus-trofeos-la-familia-kHhI.jpg",
        descripcion: "Messi con la familia",
    },
]


/* Selección de los NODOS HTML (etiquetas/elementos html) */
const contenedorCartas = document.querySelector(".listadoCartas")


/* Función que recorre el listado de las cartas */
listadoCartas.forEach(
    (carta) => contenedorCartas.innerHTML += ` <article class="card">
    <img src=${carta.imagen}>
    <div class="info">
      <h2>${carta.nombre}</h2>
      <p>${carta.descripcion}</p>
    </div>
    </article> `
)



