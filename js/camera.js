const botaoIniciarCamer = document.querySelector("[data-video-botao]")
const campoCamera = document.querySelector("[data-camera]")
const video = document.querySelector("[data-video]")
const botaoTirarFoto = document.querySelector("[data-tirar-foto]")
const canvas = document.querySelector("[data-video-canvas]")
const mensagem = document.querySelector("[data-mensagem]")
const enviarFoto = document.querySelector("[data-enviar]")

let ImageURL = "";

botaoIniciarCamer.addEventListener("click", async function(){
    const iniciarVideo = await navigator.mediaDevices
    .getUserMedia({video:true, audio:false})

    botaoIniciarCamer.style.display = "none";
    campoCamera.style.display = "block";

    video.srcObject = iniciarVideo
})

botaoTirarFoto.addEventListener("click", function(){
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)
    ImageURL = canvas.toDataURL("image/jpeg");
    campoCamera.style.display = "none"
    mensagem.style.display = "block"
})

enviarFoto.addEventListener("click", () => {
    const receberDados = localStorage.getItem("cadastro");
    const converteRetorno = JSON.parse(receberDados)

    converteRetorno.imagem = ImageURL;

    localStorage.setItem('cadastro', JSON.stringify(converteRetorno))

    window.location.href = "./abrir-conta-form-3.html"
})