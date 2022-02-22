let x = Math.floor((Math.random() * (7 - 1) + 1));
let y = Math.floor((Math.random() * (7 - 1) + 1));
document.getElementById("demo").innerHTML = x;            // Random number generated is displayed so that 
document.getElementById("demo1").innerHTML = y;           //while executing you can type the values so that all animations cn be seen

// The dice images keeps changing 
const diceContinue1 = setInterval(select_dice1, 200);
const diceContinue2 = setInterval(select_dice2, 200);

let click = 0;
let a, b;

diceNo1 = document.getElementById('diceNo1');
diceNo2 = document.getElementById('diceNo2');
dice_images = ['dice-1.png', 'dice-2.png', 'dice-3.png', 'dice-4.png', 'dice-5.png', 'dice-6.png', ]

firework1 = document.getElementById('firework1');
firework2 = document.getElementById('firework2');
firework3 = document.getElementById('firework3');

// Displays the Value enterd by the user
function display(value) {
    if (click == 0) {
        box1.innerHTML = value;
        a = value;
        click += 1;
    } else if (click == 1) {
        box2.innerHTML = value;
        click += 1;
        b = value;
    }
}

// Reloads the page removing all its contents
function reset() {
    box1.innerHTML = "";
    box2.innerHTML = "";
    click = 0;
    location.reload();
}

// Checks if the guess is correct or not and also displays the appropriate animation
function check() {
    clearInterval(diceContinue1)
    clearInterval(diceContinue2)
    diceNo1.src = dice_images[x - 1];
    diceNo2.src = dice_images[y - 1];
    if ((x == a && y == b) || (x == b && y == a)) {
        show.innerHTML = "Both Correct";
        firework1.style.display = 'block';
        firework2.style.display = 'block';
        firework3.style.display = 'block';
        firework4.style.display = 'block';
        firework5.style.display = 'block';
    } else if ((x != a && y == b) || (x == a && y != b) || (y != a && x == b) || (y == a && x != b)) {
        show.innerHTML = "Single Correct";
        smile.style.display = 'block';
    } else {

        show.innerHTML = "None Correct";
    }
}

// Selects the first dice image
function select_dice1() {
    let random_dice = Math.floor(Math.random() * 6);
    diceNo1.src = dice_images[random_dice];

}

// Selects the second dice image
function select_dice2() {
    let random_dice = Math.floor(Math.random() * 6);
    diceNo2.src = dice_images[random_dice];

}
