const sides = document.querySelectorAll('.side-input');
const calculateBtn = document.querySelector("#hypotenuse-btn")
const outputE3 = document.querySelector("#output");

function calculateSumOfSquares(a, b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputE3.innerText = "The length of Hypotenuse is "+ lengthOfHypotenuse;
}

calculateBtn.addEventListener("click", calculateHypotenuse);