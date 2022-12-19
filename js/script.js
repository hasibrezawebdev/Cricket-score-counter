let indScoreEl = document.querySelector("#team-ind > .score");
let brzScoreEl = document.querySelector("#team-brz > .score");
let indLead = document.querySelector(".ind-lead");
let brzLead = document.querySelector(".brz-lead");

let indScore = 0;

function addOneInd(){
    indScore++;
    indScoreEl.textContent = indScore;
    isLeader();
}

function addFourInd(){
    indScore+=4;
    indScoreEl.textContent = indScore;
    isLeader();
}

function addSixInd(){
    indScore+=6;
    indScoreEl.textContent = indScore;
    isLeader();
}

let brzScore = 0;

function addOneBrz(){
    brzScore++;
    brzScoreEl.textContent = brzScore;
    isLeader();
}

function addFourBrz(){
    brzScore+=4;
    brzScoreEl.textContent = brzScore;
    isLeader();
}

function addSixBrz(){
    brzScore+=6;
    brzScoreEl.textContent = brzScore;
    isLeader();
}
function newGame(){
    indScore = 0;
    brzScore = 0;
    indScoreEl.textContent = 0;
    brzScoreEl.textContent = 0;
    indLead.textContent = "";
    brzLead.textContent = "";
}

function isLeader(){
    indLead.textContent = "";
    brzLead.textContent = "";
    if(indScore > brzScore) indLead.textContent = "Leader";
    if(brzScore > indScore) brzLead.textContent = "Leader";
}