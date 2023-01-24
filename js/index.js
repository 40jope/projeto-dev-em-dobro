const valorBotaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const botaoFechaModal = document.querySelector(".fechar-modal")
const video = document.getElementById("video")
const linkDoVideo = video.src;



function alternarModal (){
     modal.classList.toggle("aberto");
}

valorBotaoTrailer.addEventListener("click", () => {
    alternarModal()
    video.setAttribute("src", linkDoVideo)
})

botaoFechaModal.addEventListener("click", () => {
    alternarModal()
    video.setAttribute("src", "");
})