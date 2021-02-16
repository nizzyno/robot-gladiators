// window.alert("Welcome to Robot Gladiators!");

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// console.log(enemyNames);
// console.log(enemyNames.length);

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

var fight = function (enemyName) {
    while (enemyHealth > 0 && playerHealth > 0) {
        if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName + " attacked " + enemyNames[i] + ". " + enemyNames[i] + " now has " + enemyHealth + " health remaining."
            );

            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyNames[i] + " has died!");
                playerMoney = playerMoney + 20;
                console.log("playerMoney", playerMoney);
                break;
            } else {
                window.alert(enemyNames[i] + " still has " + enemyHealth + " health left.");
            }

            // remove player's health by subtracting the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
            console.log(
                enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );

            // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
                // if player choses to skip
            }
        } else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to skip?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
            }
            else fight(enemyNames[i]);
        } else {
            window.alert("Please choose a valid option. Try again!")
            for (var i = 0; i < enemyNames.length; i++) {
                fight(enemyNames[i]);
            }
        }
    }
};

for (var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
};

for (var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
};