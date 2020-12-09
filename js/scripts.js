Array.prototype.remove = function () {

    var what, a = arguments, L = a.length, ax;

    while (L && this.length) {

        what = a[--L];

        while ((ax = this.indexOf(what)) !== -1) {

            this.splice(ax, 1);

        }

    }

    return this;

};



fullAlphabet = Array("A", "Ą", "B", "C", "Č", "D", "E", "Ę", "Ė", "F", "G", "I", "Į", "Y", "H", "J", "N", "O", "S", "Š", "U", "Ū", "Ų", "Z", "Ž", "L", "M", "K", "R", "P", "T", "V");
activeChar = "";
score01 = 0;
score02 = 0;
w = 0;
h = 0;


document.addEventListener("keydown", event => {
    thisKey = event.key;

    switch (thisKey) {
        case "Enter" || "KEY_ENTER":
            getRandom();
            break;

        case "ArrowUp" || "KEY_UP":
            fullAlphabet = fullAlphabet.remove(activeChar);
            break;

        case "ArrowLeft" || "KEY_LEFT":
            score01++;
            getRandom();
            break;

        case "ArrowRight" || "KEY_RIGHT":
            score02++;
            getRandom();
            break;

        case "ArrowDown" || "KEY_DOWN":
            location.reload();
            break;

        default:
            break;
    }

    updatePage();

});


function getRandom() {

    thisMainDiv = document.getElementById("main");
    var tempAlphabet = fullAlphabet.remove(thisMainDiv.innerText);


    item = tempAlphabet[Math.floor(Math.random() * tempAlphabet.length)];
    thisMainDiv.innerText = item + "       " + item.toLowerCase();
    activeChar = item;

}

function getData() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    document.getElementById("data").innerText = w + ":" + h;

}

function updatePage(){
    divScore01 = document.getElementById("score01");
    divScore02 = document.getElementById("score02");

    divScore01.innerText = score01;
    divScore02.innerText = score02;

    divScore01.style.left = "100px"
    divScore02.style.right = "100px"
    divScore01.style.top = "100px"
    divScore02.style.top = "100px"

}