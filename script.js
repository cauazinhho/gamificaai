
// let menu = document.querySelector("menu")
let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.querySelector("#icone-x")

function abrirFecharMenu() {
    // Se o menu está fechado

    if (menu.classList.contains("menu-fechado")) {
        // Abrir o menu
        menu.classList.remove("menu-fechado")

        // Mostrar icone X
        iconeX.style.display = "inline"

        // Esconder icone Barras
        iconeBarras.style.display = "none"

    } else {
        menu.classList.add("menu-fechado")

        // Esconder icone X
        iconeX.style.display = "none"

        // Mostrar icone Barras
        iconeBarras.style.display = "inline"
    }
}

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconeX.style.display = "inline"
    iconeBarras.style.display = "none"
}

//Funcao Carrosel

let slides = [
    'primeiro-banner',
    'segundo-banner',
    'terceiro-banner'
]

let slideAtual = 0

let numeroSlides = slides.length

let banner = document.querySelector(".banner")

banner.classList.add(slides[slideAtual])


//fazendo uma função aos botões

const mostrarProximoSlide = () => {
    //Remove slide anterior
    banner.classList.remove(slides[slideAtual])

    //verificação para voltar para inicio
    if (slideAtual < (numeroSlides - 1)) {
        slideAtual++
    } else {
        slideAtual = 0
    }

    // Renderiza o slideAtual
    banner.classList.add(slides[slideAtual])
}

const mostrarAnteriorSlide = () => {
    //Remove slide anterior
    banner.classList.remove(slides[slideAtual])

    if (slideAtual > 0) {
        slideAtual--
    } else {
        slideAtual = numeroSlides - 1
    }



    // Renderiza o slideAtual
    banner.classList.add(slides[slideAtual])
}

// Mexendo nas bolinhas que é o indice do slide
const selecionarSlide = (indiceSlide) => {
    slides.forEach(slide => banner.classList.remove(slide))

    slideAtual = indiceSlide

    banner.classList.add(slides[indiceSlide])
}

let listaCases = [
    {
        imagem: "https://unsplash.it/600/400?image=40",
        descricao: "Uma empresa de tecnologia lança um desafio de gamificação onde os funcionarios devem propor e implementar ideias inovadoras."
    },

    {
        imagem: "https://unsplash.it/600/400?image=32",
        descricao: "Uma empresa de consultoria cria uma narrativa interrativa de gamificação para seu programa de treinamento."
    },

    {
        imagem: "https://unsplash.it/600/400?image=64",
        descricao: "Uma empresa de vendas implementa uma competição gamificada entre equipes que competem pelo topo do ranking"
    },

    {
        imagem: "https://unsplash.it/600/400?image=8",
        descricao: "Uma empresa de saúde promove o bem-estar dos funcionarios atravez de um desafio de gamificação de condicionamento físico"
    }
]

const renderizarCases = () => {
    let elementoLista = document.getElementById("lista-cards")

    //Templete Strings
    let template = ""

    listaCases.forEach(cardCase => {
        template += `<div class="card">
        <img src="${cardCase.imagem}" alt="">
        <p>${cardCase.descricao}</p>
        <button>Ver mais</button>
    </div>`
    })

    elementoLista.innerHTML = template
}