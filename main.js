function playSong(idElementAudio) {
  return document.querySelector(`#som_${idElementAudio}`).play();
}

const listKeys = document.querySelectorAll(".tecla");

for (let i = 0; i < listKeys.length; i++) {
  const key = listKeys[i];

  const instrumento = key.classList[1];

  key.onclick = () => {
    playSong(instrumento);
  };
}
