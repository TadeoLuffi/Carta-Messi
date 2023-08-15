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
    {
        id: 6,
        nombre: "Messi Friends",
        imagen: "https://media.gettyimages.com/id/502056676/es/foto/lionel-messi-neymar-and-luis-suarez-of-barcelona-hold-the-winners-trophy-after-the-fifa-club.jpg?s=612x612&w=gi&k=20&c=mwMxxOlX6Rhv0TmmVCYBJB-9JpO-5eMZSkBvK4fre3A=",
        descripcion: "Messi con los amigos",
    },
    {
        id: 7,
        nombre: "Messi Sleeping",
        imagen: "https://www.ole.com.ar/2022/12/21/41skvoT5x_720x0__1.jpg",
        descripcion: "Messi Durmiendo",
    },
    {
        id: 8,
        nombre: "Messi Chill",
        imagen: "https://s.yimg.com/ny/api/res/1.2/1Sb3zmbq2AyyiWwLi5jOjA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MA--/https://media.zenfs.com/es/lanacion.com.ar/7a02765ee3beb1eb80e82e0458a59a60",
        descripcion: "Messi Relajdado",
    },
    {
        id: 9,
        nombre: "Messi with Kun ",
        imagen: "https://tn.com.ar/resizer/W3iuUM9DA_BYxj5-nnSp9U_mMMw=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/J36XKBS2EBAVDGFQDBHFV5UHVY.jfif",
        descripcion: "Messi con el Kun ",
    },
    {
        id: 10,
        nombre: "Messi with Maradona ",
        imagen: "https://img2.rtve.es/i/?w=1600&i=1606329475622.jpg",
        descripcion: "Messi con Maradona ",
    },
    {
        id: 11,
        nombre: "Messi  ",
        imagen: "https://w0.peakpx.com/wallpaper/4/105/HD-wallpaper-messi-argentina-2021-messi-2021-messi-new-2021-messi-2021-messi-argentina-messi-new-messi-argentina-thumbnail.jpg",
        descripcion: "Messi Fachero ",
    },
    {
        id: 12,
        nombre: "Messi con Sus trofeos",
        imagen: "https://pbs.twimg.com/media/FxKb2lTWIAIV4tj.jpg:large",
        descripcion: "Messi Campeon de todo",
    },
]
 


/* Selección de los NODOS HTML (etiquetas/elementos html) */
const contenedorCartas = document.querySelector(".listadoCartas")


/* Función que recorre el listado de las cartas */
function recorrerCartas() {
    
}

listadoCartas.forEach(
    (carta) => contenedorCartas.innerHTML += ` <article class="card">
    <img src=${carta.imagen}>
    <div class="info">
      <h2>${carta.nombre}</h2>
      <p>${carta.descripcion}</p>
    </div>
    </article> `
)
function agregarCarta() {
   const nombre = prompt("Nombre")
   const imagen = prompt("Imagen")
   const descripcion = prompt("Descripcion")

   const carta = {nombre,imagen,descripcion}

   listadoCartas.push(Carta)
}



