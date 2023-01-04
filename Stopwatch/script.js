let timer = false;
let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
let Hrdigit = document.querySelector("#hr");
let Mindigit = document.querySelector("#min");
let Secdigit = document.querySelector("#sec");
let Countdigit = document.querySelector("#count");

function start() {
    timer = true;
    main();
}

function stops() {
    timer = false;
}

function reset() {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    Hrdigit.innerHTML = "00";
    Mindigit.innerHTML = "00";
    Secdigit.innerHTML = "00";
    Countdigit.innerHTML = "00";
}

function main() {
    if (timer == true) {
        count = count + 1;
        if (count == 100) {
            sec = sec + 1;
            count = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        Hrdigit.innerHTML = hr;
        Mindigit.innerHTML = min;
        Secdigit.innerHTML = sec;
        Countdigit.innerHTML = count;
        setTimeout("main()", 10);
    }
}