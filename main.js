console.log("connected")



//global
let cardsSelected = 10; //default value to prevent selection
let selected_cards = [];
let imageArray3 = ['./Deck3/pic1.png', './Deck3/pic2.png', './Deck3/pic3.png', './Deck3/pic4.png', './Deck3/pic5.png', './Deck3/pic6.png', './Deck3/pic7.png', './Deck3/pic8.png', './Deck3/pic9.png', './Deck3/pic10.png', './Deck3/pic11.png', './Deck3/pic12.png', './Deck3/pic13.png', './Deck3/pic14.png', './Deck3/pic15.png', './Deck3/pic16.png', './Deck3/pic17.png', './Deck3/pic18.png', './Deck3/pic19.png', './Deck3/pic20.png', './Deck3/pic21.png', './Deck3/pic22.png', './Deck3/pic23.png', './Deck3/pic24.png', './Deck3/pic25.png', './Deck3/pic26.png', './Deck3/pic27.png', './Deck3/pic28.png', './Deck3/pic29.png', './Deck3/pic30.png', './Deck3/pic31.png', './Deck3/pic32.png', './Deck3/pic33.png', './Deck3/pic34.png', './Deck3/pic35.png', './Deck3/pic36.png', './Deck3/pic37.png', './Deck3/pic38.png', './Deck3/pic39.png', './Deck3/pic40.png', './Deck3/pic41.png', './Deck3/pic42.png', './Deck3/pic43.png', './Deck3/pic44.png', './Deck3/pic45.png', './Deck3/pic46.png', './Deck3/pic47.png', './Deck3/pic48.png', './Deck3/pic49.png', './Deck3/pic50.png']
let imageArray2 = ['./Deck2/pic1.jpeg', './Deck2/pic2.jpg', './Deck2/pic3.jpg', './Deck2/pic4.jpg', './Deck2/pic5.jpeg', './Deck2/pic6.jpg', './Deck2/pic7.jpeg', './Deck2/pic8.jpeg'];
let imageArray1 = ['./imgRes/pic1.jpg', './imgRes/pic2.jpeg', './imgRes/pic3.jpg', './imgRes/pic4.jpg', './imgRes/pic5.jpeg', './imgRes/pic6.jpg', './imgRes/pic7.jpg', './imgRes/pic8.jpg', './imgRes/pic9.jpeg', './imgRes/pic10.jpg', './imgRes/pic11.jpeg', './imgRes/pic12.jpg', './imgRes/pic13.jpg', './imgRes/pic14.jpeg', './imgRes/pic15.jpg', './imgRes/pic16.jpg', './imgRes/pic17.jpg', './imgRes/pic18.jpeg', './imgRes/pic19.jpeg', './imgRes/pic20.jpg', './imgRes/pic21.jpg', './imgRes/pic22.jpg']
let cards_obj = [];
let steps_counter = document.querySelector('#step_counter')
let total_steps = 0;
let TimeNode;
let timerId;
let difficulty = 1;
let card_set = 1;
let win = 0;
let to_win = 8; //n of cards to win level





function start_level(num) {
        //card_deck set
        cardsSelected = 10; //default value to prevent selection
        let card_deck = [];
        let card_skin;
        if(card_set == 1){card_deck = imageArray1; card_skin="./card_back1.jpg"}
        else if(card_set == 2){card_deck = imageArray2; card_skin="./card_back2.jpg"}
        else{card_deck = imageArray3;card_skin="./back.png"}
        //difficulty set
        if(difficulty == 1){num = 4;}
        else if(difficulty == 2){num = 6;}
        else{num = 8;}
    let cardWrapper = document.createElement('div');
    cardWrapper.id = 'cardwrapper';
    cardWrapper.classList.add('cardWrapper')
    document.querySelector('aside').insertAdjacentElement("afterend", cardWrapper);
    cardWrapper.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    cardWrapper.style.gridTemplateRows = `repeat(${num}, minmax(10px,150px))`;

            //shuffle
            shuffleArray(card_set);
    for (let i = 0; i < num * num / 2; i++) {
        // Create the main card div
        const card = document.createElement('div');
        card.className = 'card';

        // Create the card-inner div
        const cardInner = document.createElement('div');
        cardInner.classList.add('card-inner');
        // Create the card-front div
        const cardFront = document.createElement('div');
        cardFront.className = 'card-front';
        cardFront.style.backgroundImage = `url("${card_skin}")`; // Set the background-back image

        // Create the card-back div
        const cardBack = document.createElement('div');
        cardBack.className = 'card-back';
        // Create the image element for the card
        const img = document.createElement('img');
        img.className = 'cardImg';
        img.src = card_deck[i];
        img.alt = 'card';

        // Assemble the card structure
        cardBack.appendChild(img);
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);
        let cloned = card.cloneNode(true)

        card.addEventListener('click', handleClick)
        //------------
        //event listener to each card to check for click

        cloned.addEventListener('click', handleClick)
        //--------------
        //    cardWrapper.appendChild(cloned);
        //    cardWrapper.appendChild(card); 
        cards_obj.push(card);
        cards_obj.push(cloned);
    }

    console.log(cards_obj);
    shuffleArray(cards_obj);

    // Append shuffled card elements to the cardwrapper
    cards_obj.forEach(card => {
        // Assuming each card is an HTML string; you can also create elements instead
        cardwrapper.appendChild(card); // Append card HTML to the container
    });
    //----------------------------------------------
    //add animationend listener
    cardWrapper.lastChild.addEventListener("animationend", () => {
        [timerId, TimeNode] = StartTimer();
        handleAnimationEnd()
    })

    Array.from(cardWrapper.children).forEach((element, index) => {
        setTimeout(() => {
            triggerFadeIn(element)
        }, index * 400);
    })
}//function end
//-------------
// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

function make_invisible() {
    let card_front = document.querySelectorAll('.card-back');
    card_front.forEach((element) => {
        element.style.backfaceVisibility = 'hidden';
        element.classList.add('flip');

    })
}
function handleAnimationEnd() {
    cardsSelected = 0;
    make_invisible();
}
function handleClick() {
    if (cardsSelected < 2) {
        select_card(this);
    }
}
function flip(card) {
    card.firstElementChild.classList.toggle('flip')
}
function count_step() {
    total_steps++;
    steps_counter.innerText = `steps:${total_steps}`;
}
function select_card(card){
    if (card != selected_cards[0]) {
        flip(card);
        cardsSelected += 1;
        card.classList.add("card-selected");
        selected_cards.push(card);
        if (cardsSelected == 2) {
            if (selected_cards[0].isEqualNode(selected_cards[1])) {
                count_step();
                selected_cards[0].removeEventListener('click', handleClick)
                selected_cards[1].removeEventListener('click', handleClick)
                selected_cards.length = 0;
                cardsSelected = 0;
                win += 1;
                if (win == to_win) {
                    clearInterval(timerId);
                    createWinTag(total_steps, TimeNode.innerText);
                    win = 0;
                    total_steps = 0;
                    steps_counter.innerText = `steps:${total_steps}`;
                    return;
                }

                console.log("The elements are identical.");
            }
            else {
                count_step();
                setTimeout(() => {
                    flip(selected_cards[0]);
                    flip(selected_cards[1]);
                    selected_cards[0].classList.remove('card-selected')
                    selected_cards[1].classList.remove('card-selected')
                    selected_cards.length = 0;
                    cardsSelected = 0;
                }, 1000);
            }
        }
    }
}
function del(btn) {
    btn.addEventListener("animationend", () => {
        btn.remove();
    })

}
function StartTimer() {
    const timerNode = document.querySelector('#time_counter')
    let seconds = 0
    let time;
    if (timerNode) {
        time = setInterval(() => {
            let minutes = Math.floor(seconds / 60).toString().padStart(2, "00");
            let remainingSec = (seconds % 60).toString().padStart(2, "00");
            timerNode.innerText = `${minutes}:${remainingSec}`
            seconds++
        }, 1000)
    }
    //return time interval and time node
    return [time, timerNode];
}
function start() {
    let container = document.createElement('div');
    container.className = "container";
    let press_start = document.createElement('button');
    let press_settings = document.createElement('button');

    press_start.classList.add('btn')
    press_start.innerText = "START";
    press_settings.classList.add('btn')
    press_settings.innerText = "SETTINGS";

    container.appendChild(press_start);
    container.appendChild(press_settings);

    document.querySelector('aside').insertAdjacentElement("afterend", container);
    press_start.addEventListener("animationend", () => {
        container.remove();
        start_level(difficulty,card_set)
    })
    press_start.addEventListener('click', () => {
        press_start.classList.add('animate')
    })
    press_settings.addEventListener('click', () => {
        buildSettingMenu();
    })
}

function createWinTag(totalSteps = 0, time = 0) {
    // Create the main div with class "win_tag"
    const winTagDiv = document.createElement("div");
    winTagDiv.classList.add("win_tag");

    // Create the paragraph for "Victory" message
    const winnerParagraph = document.createElement("p");
    winnerParagraph.classList.add("winner");
    winnerParagraph.textContent = "Victory";

    // Create the paragraph for time
    const timeTagParagraph = document.createElement("p");
    timeTagParagraph.classList.add("time_tag");
    timeTagParagraph.textContent = `Time:${time}`;
    //create the steps pararagraph
    const steps = document.createElement("p");
    steps.classList.add("steps_tag");
    steps.textContent = `Steps:${totalSteps}`;
    // Create the div to hold the button
    const buttonDiv = document.createElement("div");

    // Create the "Next" button
    const nextButton = document.createElement("button");
    nextButton.classList.add("btn");
    nextButton.textContent = "Next";
    nextButton.addEventListener("click", () => {
        document.querySelector("#cardwrapper").remove()
        cards_obj = [];
        clearInterval(timerId);
        TimeNode.innerText = "00:00";
        start()
        triggerFadeOut(winTagDiv)
    });

    // Append the button to the button div
    buttonDiv.appendChild(nextButton);

    // Append elements to the main win_tag div
    winTagDiv.appendChild(winnerParagraph);
    winTagDiv.appendChild(steps);
    winTagDiv.appendChild(timeTagParagraph);
    winTagDiv.appendChild(buttonDiv);

    // Append the win_tag div to the body or a specific container
    document.querySelector("main").insertAdjacentElement("afterend", winTagDiv);
    triggerFadeIn(winTagDiv);
}

function build_menu() {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main-menu-btns');

    const buttonNames = ['resume', 'settings', 'Exit'];
    buttonNames.forEach(name => {
        const button = document.createElement('button');
        button.classList.add('btn');
        if (name == "Exit") {
            button.addEventListener('click', () => {
                document.querySelector("#cardwrapper").remove()
                cards_obj = [];
                total_steps = 0;
                steps_counter.innerText = `steps:${total_steps}`;
                triggerFadeOut(mainDiv);
                if(timerId && TimeNode){
                    clearInterval(timerId);
                    TimeNode.innerText = "00:00";
                    win = 0;
                }
                start()
            })

        } else if (name == "settings") {
            button.addEventListener('click', () => {
                triggerFadeOut(mainDiv);
                buildSettingMenu();
            })
        }
        else {
            button.addEventListener('click', () => {
                triggerFadeOut(mainDiv);;
            })
        }
        button.textContent = name;
        mainDiv.appendChild(button);
    });
    document.body.appendChild(mainDiv);
    triggerFadeIn(mainDiv);


}
function buildSettingMenu() {

    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main-menu-btns');
    const settingContent = document.createElement('div');
    settingContent.className = 'setting_content';

    // Difficulty Section
    const difficultyTitle = document.createElement('p');
    difficultyTitle.innerText = 'Difficulty';
    settingContent.appendChild(difficultyTitle);

    const difficultySelect = document.createElement('fieldset');
    difficultySelect.id = 'difficulty_select';

    ['Easy', 'Medium', 'Hard'].forEach((label, index) => {
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'difficulty';
        radio.value = index + 1;
        if (index === 0) radio.checked = true;

        const radioLabel = document.createTextNode(label);
        difficultySelect.appendChild(radio);
        difficultySelect.appendChild(radioLabel);
    });
    settingContent.appendChild(difficultySelect);

    // Card Set Section
    const setTitle = document.createElement('p');
    setTitle.innerText = 'Card Set';
    settingContent.appendChild(setTitle);

    const setSelect = document.createElement('fieldset');
    setSelect.id = 'set_select';

    ['set 1', 'set 2', 'set 3'].forEach((label, index) => {
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'sets';
        radio.value = index + 1;
        if (index === 0) radio.checked = true;

        const radioLabel = document.createTextNode(label);
        setSelect.appendChild(radio);
        setSelect.appendChild(radioLabel);
    });
    settingContent.appendChild(setSelect);

    // Save Button
    const buttonContainer = document.createElement('div');
    const saveButton = document.createElement('button');
    saveButton.className = 'btn mt-8';
    saveButton.innerText = 'SAVE';
    saveButton.onclick = captureInput;
    saveButton.addEventListener('click', () => {
        [difficulty, card_set] = captureInput();
        triggerFadeOut(mainDiv);
    })
    buttonContainer.appendChild(saveButton);
    settingContent.appendChild(buttonContainer);


    mainDiv.appendChild(settingContent);
    document.body.appendChild(mainDiv);
    triggerFadeIn(mainDiv);
}
//capture input function
function captureInput() {
    let difficulty;
    let card_set;
    document.getElementsByName('difficulty').forEach(element => {
        if (element.checked) { difficulty = element.value; }
    });
    document.getElementsByName('sets').forEach((element) => {
        if (element.checked) { card_set = element.value; };
    });
    return [difficulty, card_set];
}
// Function to create the scoreboard structure
function createScoreBoard() {
    // Create main High Scores div
    const highScoresDiv = document.createElement("div");
    highScoresDiv.classList.add("High_Scores");

    // Create the table
    const table = document.createElement("table");
    table.classList.add("score_table");

    // Create tbody
    const tbody = document.createElement("tbody");

    // Create the header row
    const headerRow = document.createElement("tr");

    // Create headers
    const nameHeader = document.createElement("th");
    nameHeader.textContent = "Name";
    const levelHeader = document.createElement("th");
    levelHeader.textContent = "Level";
    const timeHeader = document.createElement("th");
    timeHeader.textContent = "Time";
    const Rank = document.createElement("th");
    Rank.innerText = "Rank"
    // Append headers to header row
    headerRow.appendChild(Rank)
    headerRow.appendChild(nameHeader);
    headerRow.appendChild(levelHeader);
    headerRow.appendChild(timeHeader);

    // Append header row to tbody
    tbody.appendChild(headerRow);

    // Append tbody to table
    table.appendChild(tbody);

    // Append table to High Scores div
    highScoresDiv.appendChild(table);

    // Append High Scores div to the body or specific container
    document.querySelector('#rank_table').insertAdjacentElement("beforeend", highScoresDiv);
    for (let i = 0; i < 7; i++) {
        appendBoardItem('Guest', "Hard", "1:00");
    }
}
function appendBoardItem(name, level, time) {
    // Select the table's tbody
    const tbody = document.querySelector(".score_table tbody");

    // Create a new row for the board item
    const boardItemRow = document.createElement("tr");
    boardItemRow.classList.add("board_item");
    //th for a row
    const headerRow = document.createElement('td');
    headerRow.innerText = "#";

    // Create table cells for name, level, and time
    const nameCell = document.createElement("td");
    nameCell.textContent = name;

    const levelCell = document.createElement("td");
    levelCell.textContent = level;

    const timeCell = document.createElement("td");
    timeCell.textContent = time;

    // Append cells to the row
    boardItemRow.appendChild(headerRow);
    boardItemRow.appendChild(nameCell);
    boardItemRow.appendChild(levelCell);
    boardItemRow.appendChild(timeCell);

    // Append the row to tbody
    tbody.appendChild(boardItemRow);
}
//triger animation finctions
function triggerFadeOut(node) {
    node.style.animation = 'none';
    node.addEventListener('animationend', () => { node.remove() })
    node.style.animation = 'fade-out 0.3s forwards';
}
function triggerFadeIn(node) {
    node.style.animation = 'none';
    node.style.animation = 'fade-in 0.5s forwards';
}






//main
start();
createScoreBoard()

