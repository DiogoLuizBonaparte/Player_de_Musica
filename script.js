
let musicas = [
    {
        titulo:'jazz piano',
        artista: 'Fulano',
        src:"musicas/Palms - Text Me Records _ Bobby Renz.mp3",
        img:"images/piano.jpg"
    },
    {
        titulo:'reggae classico',
        artista:'Fulano de tal',
        src:"musicas/Ella Vater - The Mini Vandals.mp3",
        img:"images/imgmusica.jpg"
    },
    {
        titulo:'reggae classico2',
        artista:'Fulano de tal5',
        src:"musicas/Tin Spirit - Freedom Trail Studio.mp3",
        img: "images/reggae.jpg"
    },

    
]



let musica = document.querySelector('audio')
let indexMusica = 0;
let duracaoMusica = document.querySelector('.fim')
let imagem = document.querySelector('img')
let nomeMusica = document.querySelector('.description h2')
let nomeArtista = document.querySelector('.description i')

renderizarMusica(indexMusica)


//EVENTOS

document.querySelector('.play').addEventListener('click', tocarMusica)
document.querySelector('.pause').addEventListener('click', pausarMusica)
musica.addEventListener('timeupdate', atualizarBarra)
document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--
    if(indexMusica < 0) {indexMusica = 2}
    renderizarMusica(indexMusica)
    tocarMusica()
    
})

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++    
    if(indexMusica >= 3) {indexMusica = 0}
    renderizarMusica(indexMusica)
    tocarMusica()
})

//FUNÇÕES

function renderizarMusica(index){
   musica.setAttribute('src', musicas[index].src)
   musica.addEventListener('loadeddata', () => {
       nomeMusica.textContent = musicas[index].titulo
       nomeArtista.textContent = musicas[index].artista
       imagem.src = musicas[index].img      
       duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration))
   })
}
function tocarMusica() {
    musica.play()
    document.querySelector('.pause').style.display = 'block'
    document.querySelector('.play').style.display = 'none'
}

function pausarMusica() {
    musica.pause()
    document.querySelector('.pause').style.display = 'none'
    document.querySelector('.play').style.display = 'block'
}

function atualizarBarra() {
    let barra = document.querySelector('progress')
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%'
    let tempoDecorrido = document.querySelector('.inicio')
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime))
}

function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60)
    let campoSegundos = segundos % 60
    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos
    }

    return campoMinutos + ':' + campoSegundos
}

