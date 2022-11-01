/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

/*******************
 * YOUR CODE BELOW *
 *******************/

let resetButton = document.querySelector("#reset-button")

let imageD6 = document.querySelector("#d6-roll");
let meanD6 = document.querySelector("#d6-rolls-mean")
let medianD6 = document.querySelector("#d6-rolls-mean")

let imageDD6 = document.querySelector("#double-d6-roll-1")
let imageDD62 = document.querySelector("#double-d6-roll-2")
let meanDD6 = document.querySelector("#double-d6-rolls-mean")

let imageD12 = document.querySelector("#d12-roll")
let meanD12 = document.querySelector("#d12-rolls-mean")

let imageD20 = document.querySelector("#d20-roll")
let mean20 = document.querySelector("#d20-rolls-mean")


/*******************
 * EVENT LISTENERS *
 *******************/

 imageD6.addEventListener("click", function(){
    console.log("d6 clicked!")
    d6Roll()

})

resetButton.addEventListener("click", function(){
    console.log("Reset clicked!")
    resetDice();
})

imageDD6.addEventListener("click", function(){
    console.log("DoubleD6 clicked!")
     dd6Roll()
})

imageDD62.addEventListener("click", function(){
    console.log("DoubleD6 clicked!")
    dd6Roll()
})

imageD12.addEventListener("click", function(){
    console.log("D12 clicked!")
    d12Roll()
})

imageD20.addEventListener("click", function(){
    console.log("D20 clicked!")
    d20Roll()
})




/******************
 * RESET FUNCTION *
 ******************/


function resetDice(){
    //empty global arrays
sixes = [];
doubleSixes = [];
twelves = [];
twenties = [];

//reset image
// images/start/d6.png
imageD6.src = "./images/start/d6.png"
meanD6.innerText = "N/A";
imageDD6.src = "./images/start/d6.png"
meanDD6.innerText = "N/A";
imageDD62.src = "./images/start/d6.png"
imageD12.src = "./images/start/d12.jpeg"
meanD12.innerText = "N/A"
imageD20.src = "./images/start/d20.jpg"
mean20.innerText = "N/A"
}

resetDice

/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/

function d6Roll(){
let result = getRandomNumber(6)
console.log(result)

imageD6.src = `/images/d6/${result}.png`;

sixes.push(result)

console.log(sixes)

meanD6.innerText = getMean(sixes);

}    
function dd6Roll(){
    let result = getRandomNumber(6)
    console.log(result)

    imageDD6.src = `/images/d6/${result}.png` 

    let result2 =getRandomNumber(6)
    console.log(result2)
    imageDD62.src = `/images/d6/${result2}.png` 
    
    doubleSixes.push(result)
    console.log(doubleSixes)

    meanDD6.innerText = getMean(doubleSixes)
}

function d12Roll(){
    let result = getRandomNumber(12)
    console.log(result)

    imageD12.src = `/images/numbers/${result}.png`

    twelves.push(result)
    console.log(twelves)

    meanD12.innerText = getMean(twelves)
}

function d20Roll(){
    let result = getRandomNumber(20)
    console.log(result)

    imageD20.src = `images/numbers/${result}.png`
    twenties.push(result)
    console.log(twelves)

    mean20.innerText = getMean(twenties)

}


/****************
 * MATH SECTION *
 ****************/

function getMean(array){
     
    let total = 0

    for(let i= 0; i < array.length;i++){
    total = total + array[i];
    }
    return total/array.length;
}

function getMedian(array){
     
    let total = arr.sort((a,b) => a-b)

    for(let i= 0; i < array.length;i++){
    total = total + array[i];
    }
    return total/array.length/2;
}

