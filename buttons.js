let createButtons = function () {
  // Play Button
  btn1 = new Button ({
    label: "🅿🅻🅰🆈",
    width: 180,
    height: 45,
    txtSize: 30,
    col: color(255, 10, 50, 255),
    col2: color(0, 255, 0, 100),
    onClick: function () {
      isStart = true;
      currentScene = 2;
    }
  });

  // Help Button

  btn2 = new Button ({
    label: "Help",
    width: 150,
    height: 35,
    txtSize: 30,
    col: color(20, 227, 220),
    col2: color(237, 137, 50, 150),
    onClick: function () {
      currentScene = 3;
    }
  });
  // About Button
  btn3 = new Button ({
    label: "About",
    width: 120,
    height: 35,
    txtSize: 30,
    col: color(20, 41, 227),
    col2: color(18, 143, 196, 100),
    onClick: function () {
      console.log("About");
    }
  });
  // Back Button
  btn4 = new Button ({
    label: "Back",
    width: 100,
    height: 25,
    txtSize: 20,
    col: color(20, 41, 227),
    col2: color(18, 143, 196, 100),
    onClick: function () {
      currentScene = 1;
    }
  });
  // Main-Menu
  btn5 = new Button ({
    label: "Main-Menu",
    width: 150,
    height: 35,
    txtSize: 30,
    col: color(200, 20, 20),
    col2: color(0, 100, 0, 5),
    strokeCol: color(0, 0, 0),
    onClick: function () {
      restartGame();
      currentScene = 1;
    }
  });
  // Next Level
  btn6 = new Button ({
    label: "Next Level",
    width: 150,
    height: 35,
    txtSize: 30,
    col: color(200, 200, 0),
    col2: color(0, 100, 0, 5),
    strokeCol: color(0, 0, 0),
    onClick: function () {
      console.log("Next Level");
    }
  });

  // Restart Button
  btn7 = new Button ({
    label: "Restart",
    width: 150,
    height: 35,
    txtSize: 30,
    col: color(200, 200, 0),
    col2: color(0, 100, 0, 5),
    strokeCol: color(0, 0, 0),
    onClick: function () {
      //console.log("Restart");
      restartGame();
    }
  });
}

// Draw The Buttons

let drawButtons = function () {
  btn1.show(300, 440);
  btn2.show(300, 490);
  btn3.show(300, 540);
}

// Perform Action When User Clicks Inside The Button

let buttonsAction = function () {
  if (currentScene === 1) {
    btn1.onClickHandler();
    btn2.onClickHandler();
    btn3.onClickHandler();
  } else if (currentScene === 2) {
    btn5.onClickHandler();
    btn7.onClickHandler();
  } else if (currentScene === 3) {
    btn4.onClickHandler();
  } else if (currentScene === 4) {
    btn5.onClickHandler();
    btn6.onClickHandler();
  } else if (currentScene === 5) {
    btn5.onClickHandler();
    btn7.onClickHandler();
  }
}
