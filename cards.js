const deck = [2, 3, 4, 5, 6, 7, 8, 9, 10];

function getRandomCard(deck) {
    return deck[Math.floor(Math.random() * deck.length)];
}

function setRandomCard(cardId) {
    const card = document.getElementById(cardId);
    const cardValue = getRandomCard(deck);
    card.setAttribute("value", cardValue);

    if (cardValue == 2) {
        card.src = "https://upload.wikimedia.org/wikipedia/commons/d/d5/Playing_card_heart_2.svg";
    } else if (cardValue == 3) {
        card.src = "https://upload.wikimedia.org/wikipedia/commons/b/b6/Playing_card_heart_3.svg";
    } else if (cardValue == 4) {
        card.src = "https://upload.wikimedia.org/wikipedia/commons/a/a2/Playing_card_heart_4.svg";
    } else if (cardValue == 5) {
        card.src = "https://upload.wikimedia.org/wikipedia/commons/5/52/Playing_card_heart_5.svg";
    } else if (cardValue == 6) {
        card.src = "https://upload.wikimedia.org/wikipedia/commons/c/cd/Playing_card_heart_6.svg";
    } else if (cardValue == 7) {
        card.src = "https://upload.wikimedia.org/wikipedia/commons/9/94/Playing_card_heart_7.svg";
    } else if (cardValue == 8) {
        card.src = "https://upload.wikimedia.org/wikipedia/commons/5/50/Playing_card_heart_8.svg";
    } else if (cardValue == 9) {
        card.src = "https://upload.wikimedia.org/wikipedia/commons/5/50/Playing_card_heart_9.svg";
    } else if (cardValue == 10) {
        card.src = "https://upload.wikimedia.org/wikipedia/commons/9/98/Playing_card_heart_10.svg";
    }
}

function showWinner() {
    const lifeElement = document.getElementById("life");
    const card1Element = document.getElementById("card1");
    const card2Element = document.getElementById("card2")

    let life = lifeElement.getAttribute("value");
    const card1Value = card1Element.getAttribute("value");
    const card2Value = card2Element.getAttribute("value");

    if (life > 1) {
        if (Number(card1Value) > Number(card2Value)) {
            life--;
        }
        lifeElement.innerHTML = "Life = " + life;
        lifeElement.setAttribute("value", life);
    } else {
        life = 10;
        lifeElement.innerHTML = "Life = " + life;
        lifeElement.setAttribute("value", life);
        card1Element.src = "https://upload.wikimedia.org/wikipedia/commons/d/d4/Card_back_01.svg";
        card2Element.src = "https://upload.wikimedia.org/wikipedia/commons/d/d4/Card_back_01.svg";
    }
}

function playHand() {
    setRandomCard("card1");
    setRandomCard("card2");

    showWinner();
}
