(function () {
    let score = 0;
    let intervalID;

    const gameElement = document.createElement("div");

    const panelElement = document.createElement("div");

    const arenaElement = document.createElement("div");

    const moleElement = document.createElement("div");

    gameElement.classList.add("game");
    panelElement.classList.add("panel");
    arenaElement.classList.add("arena");
    moleElement.classList.add("mole");

    gameElement.appendChild(panelElement);
    gameElement.appendChild(arenaElement);

    arenaElement.appendChild(moleElement);

    function setMolePosition() {
        moleElement.style.top = (Math.round(Math.random() * 9) * 50) + "px";
        moleElement.style.left = (Math.round(Math.random() * 9) * 50) + "px";
    }

    function startInterval() {
        clearInterval(intervalID);
        intervalID = setInterval(setMolePosition, 1500);
    }

    function callback(e) {
        e.stopPropagation();
        const clickedElement = e.target;
        if (
            clickedElement
            .classList
            .contains("mole")
        ) {
            score += 1;
            panelElement.innerHTML = score;

            setMolePosition();
            startInterval();
        }
    }

    arenaElement.addEventListener(
        "click",
        callback,
        false
    );

    document.body.appendChild(gameElement);
    startInterval();
}());
