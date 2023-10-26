const numEstratti = []
const estraiBtn = document.getElementById("estraiBtn")
const createNumbers = function() {for (let i = 1; i < 77; i++){
    const numeroTabbellone = document.createElement("div")
    const tabbellone = document.getElementById("tabbellone")
    numeroTabbellone.classList.add("numeroTabbellone")
    numeroTabbellone.innerText = i
    tabbellone.appendChild(numeroTabbellone)



}
}


estraiBtn.addEventListener("click", (e) => {
    let numeroEstratto = Math.ceil(Math.random() * 75)
    console.log(numeroEstratto)
    
    document.querySelectorAll(".numeroTabbellone")[numeroEstratto - 1].classList.add("numeroEstratto")
    
})

window.onload = () => {
    createNumbers()
}