const inputs = document.querySelectorAll(".angle-input");
// console.log(inputs);
const isTraingleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    // console.log(sumOfAngles);
    return sumOfAngles;
}


function isTriangle(){
   if(Number(inputs[0].value) >=1 && Number(inputs[1].value) >=1 && Number(inputs[2].value>=1)){
      const sumOfAngles =
     calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
     if(sumOfAngles === 180){
        outputEl.innerText = "Yay, The angles form a triangle";
     }
     else{
        outputEl.innerText ="oh oh! The angles dont form a triangle";
     }
   }
   else{
      outputEl.innerText = "Invalid Data entered!!!!"
   }
    
}


isTraingleBtn.addEventListener("click", isTriangle)