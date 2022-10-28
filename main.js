let n = 3;
let winningButton;
const onClick = function() {
    winningButton = winningButton ? winningButton : Math.floor(Math.random() * n);
    if (winningButton == this.id) {
        alert ("Congratulation! You have guessed the button!");
    } else {
        alert ("This is not the right button, keep trying!");
    }
}
for (let i = 0; i < n; ++i) {
    const buton = document.createElement("button");
    document.querySelector("body").appendChild(buton);
    buton.id = i;
    buton.innerText = "Click on me!";
    buton.addEventListener("click", onClick);
    buton.style.height = '150px';
    buton.style.width= '150px';
}
