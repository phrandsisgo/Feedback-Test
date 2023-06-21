/*
    auf der onclick function wird der text der Farbe grün undd das emoji ändert sich.
    und im div ändert sich ein text
*/
let status = "normal";
function good(){
    document.getElementById("emoji").innerHTML= "&#128513";
    document.getElementById("emojiTitle").innerHTML = "Ich freue mich für dich ich hoffe es bleibt dabei.";
    document.getElementById("emojiTitle").style.color= "green";
}
function bad(){
    //wird ausgeführt wenn bad geclickt wird.
    document.getElementById("emoji").innerHTML = "&#128533";
    document.getElementById("emojiTitle").innerHTML = "Schade ich hoffe es geht dir bald besser!";
    document.getElementById("emojiTitle").style.color= "red";
}
