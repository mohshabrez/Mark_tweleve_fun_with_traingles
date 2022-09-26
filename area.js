const inputs = document.querySelectorAll(".inputs");
const calculateBtn = document.querySelector("#calculateButton");
const OutputE4 = document.querySelector("#output")



function calculateSemiPerimeter(a,b,c){
    const semiPerimeter = (a+b+c)/2
    return semiPerimeter;
}

function calculateArea(){
    inputs1 = Number(inputs[0].value);
    inputs2 = Number(inputs[1].value);
    inputs3 = Number(inputs[2].value);
    if(inputs1 >= 1 && inputs2 >=1 && inputs3>=1){
        if(
            inputs1 + inputs2 > inputs3 &&
            inputs2 + inputs3 > inputs1 &&
            inputs1 + inputs3 > inputs2){
                const semiPerimeter = calculateSemiPerimeter(inputs1,inputs2,inputs3);
    
                const res = Math.sqrt(semiPerimeter*(semiPerimeter-inputs1)
                *(semiPerimeter-inputs2)*(semiPerimeter-inputs3)).toFixed(2);
                OutputE4.innerText = "Area of triangle  " + res +" Units";
            }
            else{
                OutputE4.innerText = "Please enter a valid sides for forming Triangle";
            }
    }
    else{
        OutputE4.innerText = "Invalid data entered!!!"
    }
    
}
calculateBtn.addEventListener("click", calculateArea);