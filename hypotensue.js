const sides = document.querySelectorAll('.side-input');
const calculateBtn = document.querySelector("#hypotenuse-btn")
const outputE3 = document.querySelector("#output");

function calculateSumOfSquares(a, b){
        const sumOfSquares = a*a + b*b;
        return sumOfSquares;
}

function calculateHypotenuse(){
    if(Number(sides[0].value >= 1 && Number(sides[1].value >=1))){
        const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
        const lengthOfHypotenuse = Math.sqrt(sumOfSquares).toFixed(2);
        outputE3.innerText = "The length of Hypotenuse is "+ lengthOfHypotenuse;
    }
    else{
       outputE3.innerText = "Invalid Data entered!!!"
    }
}


calculateBtn.addEventListener("click", calculateHypotenuse);