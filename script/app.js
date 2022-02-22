let editPlayerButton = 0;

const players = [
    {
        name:'',
        symbol: 'X'
    },
    {
        name:'',
        symbol: 'O'
    }    
]

const playerOverlay = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const getFormElement = document.querySelector("form");
const errorOutputElement = document.getElementById("config-error");

const editPlayer1btnElement = document.getElementById("edit-player-1-btn");
const editPlayer2btnElement = document.getElementById("edit-player-2-btn");
const cancelButtonElement = document.getElementById("btn-cancel");

editPlayer1btnElement.addEventListener("click", openPlayerConfig);
editPlayer2btnElement.addEventListener("click", openPlayerConfig);
cancelButtonElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);
getFormElement.addEventListener("submit", displayName);
