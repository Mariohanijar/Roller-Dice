const diceResults = document.getElementById("diceResults")
const diceImages = document.getElementById("diceImages")
let images = []
let dados = []
let sum = 0;
const diceInput = document.getElementById("diceInput")


function rollDice(){
    if(diceInput.value > 10){
        window.alert("Coloque um número menor que 10")
        return
    }
    for(let i = 0; i<diceInput.value; i++){
        let diceNumbers = Number(Math.floor(Math.random()*6+1))
        dados.push(diceNumbers)
        images.push(`<img src="imagens/dados${diceNumbers}.jpg">`)
        sum = diceNumbers+sum
    }
    
    diceResults.textContent = `the dice results were:  ${dados.join(',  ')} and the sum were: ${sum}`;
    diceImages.innerHTML = images.join('');
    dados = [];
    images = [];
    sum = 0;

}