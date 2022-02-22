function openPlayerConfig(event) {
  editPlayerButton = +event.target.dataset.playerid; //+'1' ==> 1
  playerOverlay.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerOverlay.style.display = "none";
  backdropElement.style.display = "none";
  getFormElement.firstElementChild.classList.remove("error");
  errorOutputElement.textContent = "";
  //reset ketika sudah terinput semua
  getFormElement.firstElementChild.lastElementChild.value = "";
}
//menampilkan nama
function displayName(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredplayerName = formData.get("username").trim();
  //   console.log(enteredplayerName);

  if (!enteredplayerName) {
    //enterredPlayerName === ''
    event.target.firstElementChild.classList.add("error");
    errorOutputElement.textContent = "please enter a valid name";
    return;
  }
  // menampilkan nama ke dalam html
  const updatePlayerName = document.getElementById("player-" + editPlayerButton + "-data");
  updatePlayerName.children[1].textContent = enteredplayerName;

  //akses player
  players[editPlayerButton - 1].name = enteredplayerName;

  // // kode di atas sama dengan
  // if (editPlayerButton == 1) {
  //   players[0].name = enteredplayerName;
  // } else {
  //   players[1].name = enteredplayerName;
  // }

  // close form jika sudah di isi data
  closePlayerConfig();
}
