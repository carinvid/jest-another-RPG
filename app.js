const Game = require("./lib/Game");

new Game().initializeGame();
inquirer
  .prompt({
    type: "text",
    name: "name",
    message: "What is your name?",
  })
  // destructure name from the prompt object
  .then(({ name }) => {
    this.player = new Player(name);

    // test the object creation
    console.log(this.currentEnemy, this.player);
  })

  .then(function ({ name }) {
    this.player = new Player(name);

    // test the object creation
    console.log(this.currentEnemy, this.player);
  })

  .then(({ name }) => {
    this.player = new Player(name);

    this.startNewBattle();
  });
