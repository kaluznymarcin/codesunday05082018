(function () {
    let score = 0;

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

    function callback(e) {
        const clickedElement = e.target;
        if (
            clickedElement
            .classList
            .contains("mole")
        ) {
            score += 1;
            // score = score + 1;
            console.log(score);
        }
    }

    arenaElement.addEventListener(
        "click",
        callback,
        false
    );

    document.body.appendChild(gameElement);
}());
