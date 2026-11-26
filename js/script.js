let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");

let name1Input = document.getElementById("name1Input");
let startBtn = document.getElementById("startBtn");
let error1 = document.getElementById("error1");

let player1Title = document.getElementById("player1Title");
let num1Input = document.getElementById("num1Input");
let playBtn = document.getElementById("playBtn");
let error2 = document.getElementById("error2");

let name2Input = document.getElementById("name2Input");
let startBtn2 = document.getElementById("startBtn2");
let error3 = document.getElementById("error3");

let player2Title = document.getElementById("player2Title");
let chanceCount = document.getElementById("chanceCount");
let guessInput = document.getElementById("guessInput");
let guessBtn = document.getElementById("guessBtn");
let error4 = document.getElementById("error4");
let resultText = document.getElementById("resultText");

let chance = 5;

startBtn.addEventListener("click", function () {
    if (name1Input.value == "") {
        error1.style.display = "block";
    } else {
        error1.style.display = "none";
        box1.style.display = "none";
        box2.style.display = "block";
        player1Title.innerHTML = name1Input.value;
    }
});

playBtn.addEventListener("click", function () {
    if (num1Input.value == "") {
        error2.innerHTML = "Please give a number";
        error2.style.display = "block";
    } else if (num1Input.value < 1 || num1Input.value > 10) {
        error2.innerHTML = "Number must be 1 to 10";
        error2.style.display = "block";
    } else {
        error2.style.display = "none";
        box2.style.display = "none";
        box3.style.display = "block";
    }
});

startBtn2.addEventListener("click", function () {
    if (name2Input.value == "") {
        error3.style.display = "block";
    } else {
        error3.style.display = "none";
        box3.style.display = "none";
        box4.style.display = "block";
        player2Title.innerHTML = name2Input.value;
    }
});

guessBtn.addEventListener("click", function () {
    if (guessInput.value == "") {
        error4.style.display = "block";
    } else {
        error4.style.display = "none";
        
        if (num1Input.value == guessInput.value) {
            resultText.innerHTML = name2Input.value + " Win!";
            guessBtn.style.display = "none";
            guessInput.style.display = "none";
        } else {
            chance--;
            chanceCount.innerHTML = chance;
            guessInput.value = "";

            if (chance == 0) {
                resultText.innerHTML = name1Input.value + " Win! Number was " + num1Input.value;
                guessBtn.style.display = "none";
                guessInput.style.display = "none";
            }
        }
    }
});