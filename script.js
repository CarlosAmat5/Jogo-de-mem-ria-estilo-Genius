let order=[]
let clickOrder= []
let score=0

//0 = verde 
//1 = vermelho
//2 = amarelo
//3 = azul

const blue= document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')

//Cria ordem aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4)
    order [order.length] = colorOrder
    clickOrder=[]
    for(let i in order){
        let elementColor = createColorElement(order[i])
        lightColor(elementColor, Number(i)+1)
    }
}

//acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500
    setTimeout(() => {
        element.classList.add('selected')
    }, number-250);
    setTimeout(() => {
        element.classList.remove('selected')
    });
}

//checa se os botões clickados são os mesmos na ordem gerada no jogo
let checkOrder = () =>{
    for(let i in clickOrder){
        if(clickOrder[i] != order[i]){
            gameOver()
            break
        }
    }
    if(clickOrder.length==order.length){
        alert(`Pontuação ${score}\nVoce acertou! Iniciando próximo nível`)
        nextLevel()
    }
}

//funcao para o click do usuario
let click= (color)=>{
    clickOrder[clickOrder.length]=color
    createColorElement(color).classList.add('selected')

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        checkOrder()
    },250);
}

//funcao que retorna cor
let createColorElement = (color) =>{
    if(color == 0){
        return green
    } else if(color==1){
        return red
    } else if (color==2){
        return yellow
    } else if (color==3){
        return blue
    }
}

//funcao para o nosso nivel do jogo
let nextLevel= () => {
    score++ //aumenta os pontos
    shuffleOrder() //apos, gera uma nova ordem
}

//funcao para gameover
let gameOver= () => {
    alert(`portuação: ${score}\nVoce perdeu o jogo!\nClique em OK para inicia rum novo jogo`)
    order=[] //zerar a order para recomeñar o jogo
    clickOrder=[]

    playGame()
}

//funcao de inicio do jogo
let playGame=() =>{
    alert(`Bemvindo ao Gennesis! iniciando novo jogo!`)
    score=0

    nextLevel()
}

//criando eventos de clique para cada uma das cores
green.onclick=() => click(0)
red.onclick=() => click(1)
yellow.onclick=() => click(2)
blue.onclick=() => click(3)

//inicio do jogo
playGame()