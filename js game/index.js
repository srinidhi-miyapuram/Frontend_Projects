let newid = document.getElementsByTagName("li");
for (let i = 0; i < 42; i++) {
    newid[i].setAttribute("id", i);
    console.log(newid[i].id.toString());
}

var player1 = prompt("Enter Player One Name ");
var player2 = prompt("Enter Player Two Name ");

console.log(player1, player2);

var currentPlayer = player1;
document.getElementById("player").innerText = "A : It's your turn.";

var gridContainer = document.querySelector("#grid-content");
let clickCount = 0;
gridContainer.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() == "li") {
        if (currentPlayer == player1) {
            e.target.style.backgroundColor = "blue";
            document.getElementById("player").innerText = "B : It's your turn.";

            currentPlayer = player2;
            clickCount++;
        } else {
            e.target.style.backgroundColor = "red";
            document.getElementById("player").innerText = "A : It's your turn.";
            currentPlayer = player1;
        }
        if (clickCount >= 4) {
            checkTrue();
            clickCount = 0;
        }
    }
});

function checkTrue() {
    for (let i = 6; i < 42; i += 6) {
        let count = 0;
        for (let j = 0; j < i; j++) {
            if (
                document.getElementById(j).style.backgroundColor ==
                document.getElementById(j + 1).style.backgroundColor
            ) {
                count++;
            } else if (count != 0) {
                count--;
            }
            if (count == 3) {
                if (
                    document.getElementById(j).style.backgroundColor == "blue"
                ) {
                    document.getElementById("player").innerText =
                        "Player one won!. Please refresh to play again.";
                } else if (
                    document.getElementById(j).style.backgroundColor == "red"
                ) {
                    document.getElementById("player").innerText =
                        "Player two won!. Please refresh to play again.";
                } else {
                    count = 0;
                }
            }
        }
    }
}
