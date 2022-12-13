let indScoreEl = document.querySelector("#team-ind > .score");
let brzScoreEl = document.querySelector("#team-brz > .score");


let indScore = 0;

function addOneInd(){
    indScore++;
    indScoreEl.textContent = indScore;
}

function addFourInd(){
    indScore+=4;
    indScoreEl.textContent = indScore;
}

function addSixInd(){
    indScore+=6;
    indScoreEl.textContent = indScore;
}

let brzScore = 0;

function addOneBrz(){
    brzScore++;
    brzScoreEl.textContent = brzScore;
}

function addFourBrz(){
    brzScore+=4;
    brzScoreEl.textContent = brzScore;
}

function addSixBrz(){
    brzScore+=6;
    brzScoreEl.textContent = brzScore;
}
function newGame(){
    indScore = 0;
    brzScore = 0;
    indScoreEl.textContent = 0;
    brzScoreEl.textContent = 0;
}