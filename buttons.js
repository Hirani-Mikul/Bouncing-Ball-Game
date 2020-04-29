let createButton = function () {
  // Play Button
  btn1 = new Button ({
    x: 300,
    y: 440,
    label: "Play",
    width: 180,
    height: 35,
    txtSize: 30,
    col: color(255, 10, 50, 255),
    col2: color(0, 255, 0, 100),
    onClick: function () {
      console.log("Clicked");
    }
  });

  // Help Button

  btn2 = new Button ({
    x: 300,
    y: 490,
    label: "Help",
    width: 150,
    height: 35,
    txtSize: 30,
    col: color(20, 227, 220),
    col2: color(237, 137, 50, 150),
    onClick: function () {
      console.log("Clicked");
    }
  });
  // About Button
  btn3 = new Button ({
    x: 300,
    y: 540,
    label: "About",
    width: 120,
    height: 35,
    txtSize: 30,
    col: color(20, 41, 227),
    col2: color(18, 143, 196, 100),
    onClick: function () {
      console.log("Clicked");
    }
  });
}

// Draw The Buttons

let drawButtons = function () {
  btn1.show();
  btn2.show();
  btn3.show();
}

// Perform Action When User Clicks Inside The Button

let buttonsAction = function () {
  btn1.onClickHandler();
  btn2.onClickHandler();
  btn3.onClickHandler();
}
