(function () {
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



    document.body.appendChild(gameElement);
}());
