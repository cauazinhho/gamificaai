
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

const carregarCases = () => {
    fetch("http://localhost:3000/cases")
    .then( resposta => resposta.json() )
    .then( (dados) => {
        listaCases = dados
        renderizarCases()
    })
    .catch(erro => console.error(erro))
}

////////////////////////////////////////////////////////////////////////////////////

//API do formulario


const solicitarOrcamento = (event) => {
    // Pegar valores do inputs
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorDescricao = document.getElementById("campo-descricao").value

    // Organizar objeto com os valores
    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }

    // Enviar requisição para a api
    //127.0.0.1 -> localhost
    //Método HTTP POST - Create -> Cadastrar ou Criar
    fetch("http://127.0.0.1:3000/solicitacoes", {
    method: "POST", 
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(dadosForm)
    })
    .then(resposta => { 
        console.log(resposta)

        //Limpar os campos (inputs)
        document.querySelector("#contato form").reset()

        //Mostrar alert com msg de sucesso
        alert("Solicitação cadastrada")
    })
    .catch(erro => 
        //CASO ERRO - alert com msg de erro
        {console.error(erro)
        alert("Erro desconhecido")
    }) //caso tenha erro
    
    event.preventDefault()
    
}


