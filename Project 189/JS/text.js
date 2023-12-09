const playBtn = document.getElementById("#playButton");
const qNum = document.querySelector("#welcomeText-entity")

playBtn.addEventListener("click", function(){
    qNum.textContent = "Questions"
})