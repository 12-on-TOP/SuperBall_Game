function preload() {
  sounds = [];
  coinSound = new sound("sounds/coin.mp3");
  boomSound = new sound("sounds/explode.mp3");
  boingSound = new sound("sounds/boing.mp3");
  spowerUp = new sound("sounds/pick.mp3");
  someTheme = new sound("sounds/something.mp3");
  wehiTheme = new sound("sounds/wehi.mp3");
  nightTheme = new sound("sounds/night.mp3");
  shortTheme = new sound("sounds/short.mp3");
  sleepTheme = new sound("sounds/sleep.mp3");
  lifeTheme = new sound("sounds/life.mp3");
  dreamTheme = new sound("sounds/dream.mp3");
  sounds = [
    coinSound,
    boomSound,
    boingSound,
    spowerUp,
    someTheme,
    wehiTheme,
    nightTheme,
    shortTheme,
    sleepTheme,
    lifeTheme,
    dreamTheme,
  ];
}

function gamePrep() {
  over = 0;
  itsover = createP();
  x = 25;
  y = height * 0.75;
  collect = 1;
  s = 1;
  gameOver = null;
  q = 0;
  6;
  dis = 0;
  jump = 0;
  lives = 0;
  sy = 0;
  amoes = 0;
  cantShoot = 0;
  explode = 0;
  shoot = 0;
  coinCount = 0;
  shooterPowered = 0;
  shieldPowered = 0;
  ex2Powered = 1/2;
  ex5Powered = 1/5;
  exploded = 0;
  ex_on = [];
  cwlm = 0;
  spikes = [];
  coins = [];
  platforms = [];
  lifes = [];
  shields = [];
  ammos = [];
  particles = [];
  ex_2_es = [];
  ex_5_es = [];
  monsterBUGS = [];
  currentPlatform = null;
  shieldPowerTimer = 0;
  shieldPowerTimerClock = null;
  ex2PowerTimer = 0;
  ex2PowerTimerClock = null;
  ex5PowerTimer = 0;
  ex5PowerTimerClock = null;
  gameOverFlashInterval = null;
  gameOverStartTime = null;
  gameOverVisible = true;
  flashInterval = 100;
  lastFlashTime = 0;
  clearInterval(shieldPowerTimerClock);
  clearInterval(ex2PowerTimerClock);
  clearInterval(gameOverFlashInterval);
  for (let i = 0; i <= 9; i++) {
    spikes.push(new spike((i * width) / 5 + 1000, height * 0.775));
  }
  for (let i = 0; i <= 9; i++) {
    coins.push(new coin((i * width) / 5 + 1000, height * 0.5, 2));
  }
  for (let i = 0; i <= 9; i++) {
    coins.push(new coin((i * width) / 5 + 1000, height * 0.3, 1));
  }
  for (let i = 0; i <= 9; i++) {
    platforms.push(
      new platform(i * 250 + width * 2, height * 0.6, width / 5, 30)
    );
  }
  for (let i = 0; i <= 9; i++) {
    platforms.push(
      new platform(
        i * 250 + (width / 3 + width * 2),
        height * 0.4,
        width / 10,
        30
      )
    );
  }
  for (let i = 0; i <= 9; i++) {
    platforms.push(
      new platform(
        i * 250 + (width / 3 + width * 1.8),
        height * 0.2,
        width / 10,
        30
      )
    );
  }
  for (let i = 7; i <= 9; i++) {
    shields.push(new shield(i * 250 + width * 3, height * 0.5));
    lifes.push(new life(i * 250 + width * 2, height * 0.55));
    ammos.push(new ammo(i * 250 + width * 4, height * 0.3));
  ex_2_es.push(new times_x(i * 250 + width * 5, height * 0.4, 2));
  ex_5_es.push(new times_x(i * 250 + width * 10, height * 0.4, 5));
  }
  monsterBUGS.push(new MONSTER(width * 5,height * 0.75,10,1,"bug"));
  amos = amos = new amo(mouseX, mouseY, x, y);
}

function setup() {
  createCanvas(500, 500);
  jjuummpp = new button("Jump", 450, 0, 40, 20, "red", "blue");
  jjuummpp.$("hide");
  ddoowwnn = new button("Down", 450, 50, 40, 20, "blue", "red");
  ddoowwnn.$("hide");
  qwerty = new button("Play Again", 0, 0, 100, 50, "pink", "green");
  qwerty.$("hide");
  lastThing = new button("Home", 0, 0, 100, 50, "pink", "green");
  lastThing.$("hide");
  SuperBallGame = createP("You are playing the Super Ball Game!");
  SuperBallGame.style("color:blue;font-size:40px");
  SuperBallGame.hide();
  zero = createP("Welcome to the Superball Game!").style(
    "color:skyblue;font-size:50px;"
  );
  zero.position(0, 0);
  zero.hide();
  playMan = new button("Play", 100, 200, 100, 50, "skyblue", "black");
  playMan.$("hide");
  setMan = new button("Settings", 100, 300, 100, 50, "pink", "black");
  setMan.$("hide");
  superMan = new button(
    "Superpowers",
    300,
    200,
    100,
    50,
    "rgb(140, 70, 20)",
    "black"
  );
  superMan.$("hide");
  qplayMan = new button("How to play", 300, 300, 100, 50, "yellow", "black");
  qplayMan.$("hide");
  fourin = createP("How to Play:").style(
    "font-size:50px;text-align:center;text-decoration:underline;"
  );
  fourin.position(100, 0);
  fourin.hide();
  scrollplay = createDiv().style(
    "background-color:navy;width:400px;height:300px;color:white;overflow:scroll;"
  );
  scrollplay.position(50, 150);
  scrollplay.hide();
  back = new button("Back", 450, 0, 50, 20, "dimgrey", "white");
  back.$("hide");
  back.$("mousePressed", () => {
    play = 0;
  });
  mutee = createDiv(
    "<div style = 'background-color:darkgray;width:75px;height:10px;position:absolute;top:20px;left:10px'></div><div id = 'muteasw' style = 'position:absolute;background-color:black;width:20px;height:20px;border-radius:50%;top:15px;left:5px;'></div>"
  );
  mutee.position(200, 200);
  mutee.style(
    "background-color:white;border-radius:50%;width:100px;height:50px"
  );
  mutee.hide();
  selectMusic = createDiv(`
    Select Music: 
    <select id = 'mmuussiicc'>
    <option value = 'something'>SOMETHING</option>
    <option value = 'wehi'>WEHI</option>
    <option value = 'life'>THE LIFE</option>
    <option value = 'night'>NIGHTIME</option>
    <option value = 'short'>SHORT BEATS</option>
    <option value = 'sleep'>SLEEP</option>
    <option value = 'dream'>WAKE UP IN A DREAM</option>
    </select>
  `).position(100, 100);
  selectMusic.hide();
  allSuperpowers = createDiv().hide();
  aaaaa = createP("null");
  bbbbb = createInput().value(0);
  ccccc = new button("null", 0, 0, 60, 30, "gray", "white");
  aaaaa.hide();
  bbbbb.hide();
  ccccc.$("hide");
  atgl = new button("w", 0, 0, 40, 20, "gray", "white");
  pots = new button("w", 0, 0, 40, 20, "gray", "white");
  shot = new button("w", 0, 0, 40, 20, "gray", "white");
  atgl.$("hide");
  pots.$("hide");
  shot.$("hide");
  getReadyToShoot = new button(
    "Turn on Shooter",
    200,
    200,
    120,
    40,
    "gray",
    "white"
  );
  getReadyToShoot.$("hide");
  letUsShootWhenReady = new button("Shoot", 300, 200, 80, 40, "gray", "white");
  letUsShootWhenReady.$("hide");
  music = new button("w", 0, 0, 40, 20, "gray", "white");
  codey = new button("w", 0, 0, 40, 20, "gray", "white");
  music.$("hide");
  codey.$("hide");
  ex_two = new button("Collect", 0, 0, 80, 30, "gray", "white");
  ex_two.$("hide");
  play = -1;
  ssel = 1;
  muteallon = 0;
  allCollectedSuperpowers = [];
  explode = 0;
  totalCoins = 0;
  amos = null;
  code = null;
  down = 0;
  gamePrep();
  theCode = createP().hide();
  itCode = createP().hide();
  theICode = createInput().hide();
  theSCode = createInput().hide();
  theCode.hide();
  itCode.hide();
  theICode.hide();
  theSCode.hide();
  slives = new superPower(53, "lives", 100, "Ability to get lives:");
  sshield = new superPower(106, "shield", 500, "The Shield:");
  sshooter = new superPower(159, "shooter", 1000, "Basic Shooter:");
  smultiplier = new superPower(212, "✕2", 2000, "✕2:");
  ssmultiplier = new superPower(265, "✕5", 5000, "✕5:");
}

function draw() {
  if (explode && !exploded) {
   boomSound.$("play");
  } 
  if (muteallon === 1) {
    for (i of sounds) {
      i.$("setVolume", 0);
    }
  } else {
    coinSound.$("setVolume", 0.25);
    boomSound.$("setVolume", 0.25);
    boingSound.$("setVolume", 0.25);
    someTheme.$("setVolume", 0.5);
    wehiTheme.$("setVolume", 0.5);
    spowerUp.$("setVolume", 2);
    nightTheme.$("setVolume", 0.5);
    shortTheme.$("setVolume", 0.5);
    sleepTheme.$("setVolume", 0.5);
    sleepTheme.$("setVolume", 0.5);
    lifeTheme.$("setVolume", 0.5);
    dreamTheme.$("setVolume", 0.5);
  }
  if (document.getElementById("mmuussiicc").value === "something") {
    if (!someTheme.$("isPlaying")) {
      someTheme.$("play");
    }
  } else {
    someTheme.$("stop");
  }
  if (document.getElementById("mmuussiicc").value === "wehi") {
    if (!wehiTheme.$("isPlaying")) {
      wehiTheme.$("play");
    }
  } else {
    wehiTheme.$("stop");
  }
  if (document.getElementById("mmuussiicc").value === "night") {
    if (!nightTheme.$("isPlaying")) {
      nightTheme.$("play");
    }
  } else {
    nightTheme.$("stop");
  }
  if (document.getElementById("mmuussiicc").value === "short") {
    if (!shortTheme.$("isPlaying")) {
      shortTheme.$("play");
    }
  } else {
    shortTheme.$("stop");
  }
  if (document.getElementById("mmuussiicc").value === "sleep") {
    if (!sleepTheme.$("isPlaying")) {
      sleepTheme.$("play");
    }
  } else {
    sleepTheme.$("stop");
  }
  if (document.getElementById("mmuussiicc").value === "life") {
    if (!lifeTheme.$("isPlaying")) {
      lifeTheme.$("play");
    }
  } else {
    lifeTheme.$("stop");
  }
  if (document.getElementById("mmuussiicc").value === "dream") {
    if (!dreamTheme.$("isPlaying")) {
      dreamTheme.$("play");
    }
  } else {
    dreamTheme.$("stop");
  }
  if (play === -1) {
    itsover.hide();
    atgl.$("hide");
    selectMusic.hide();
    getReadyToShoot.$("hide");
    letUsShootWhenReady.$("hide");
    ddoowwnn.$("hide");
    jjuummpp.$("hide");
    mutee.hide();
    aaaaa.show();
    bbbbb.show();
    ccccc.$("show");
    aaaaa.position(0, -10);
    aaaaa.html("Please Enter Code (default is 0):");
    bbbbb.position(250, 0);
    bbbbb.id("wer");
    ccccc.$("position", 450, 0);
    ccccc.$("html", "ENTER");
    ccccc.$("mousePressed", () => {
      play = 0;
      var information = document.getElementById("wer").value;
      code = information;
      if (information != 0) {
        information = information.split(";");
        for (let i = 0; i <= information.length - 1; i++) {
          information[i] = information[i].split("-");
          if (information[i][0] === "c") {
            totalCoins = parseInt(information[i][1]);
          }
          if (information[i][0] === "p") {
            allCollectedSuperpowers.push(information[i][1]);
          }
        }
      } else {
        code = "c-0;";
      }
    });
  } else {
    aaaaa.hide();
    bbbbb.hide();
    ccccc.$("hide");
  }
  if (play === 0) {
    background(50);
    itsover.hide();
    selectMusic.hide();
    ddoowwnn.$("hide");
    jjuummpp.$("hide");
    getReadyToShoot.$("hide");
    letUsShootWhenReady.$("hide");
    atgl.$("hide");
    back.$("hide");
    mutee.hide();
    zero.show();
    playMan.$("show");
    setMan.$("show");
    superMan.$("show");
    qplayMan.$("show");
    playMan.$("mousePressed", () => {
      resetGame();
    });
    setMan.$("mousePressed", () => {
      play = 3;
    });
    superMan.$("mousePressed", () => {
      play = 4;
    });
    qplayMan.$("mousePressed", () => {
      play = 5;
    });
  } else {
    zero.hide();
    playMan.$("hide");
    setMan.$("hide");
    superMan.$("hide");
    qplayMan.$("hide");
  }
  if (play === 1) {
    ddoowwnn.$("show");
    jjuummpp.$("show");
    atgl.$("hide");
    itsover.hide();
    selectMusic.hide();
    mutee.hide();
    if (allCollectedSuperpowers.includes("shooter")) {
      getReadyToShoot.$("show");
      letUsShootWhenReady.$("show");
      getReadyToShoot.$("mousePressed", () => {
        if (shooterPowered === 1) {
          shooterPowered = 0;
        } else {
          shooterPowered = 1;
        }
      });
      letUsShootWhenReady.$("mousePressed", () => {
        if (shooterPowered === 1) {
          shoot = 1;
        }
      });
    } else {
      getReadyToShoot.$("hide");
      letUsShootWhenReady.$("hide");
    }
    background(0, 200, 255);
    fill(255);
    textSize(20);
    text("Coins: " + coinCount, width / 20, height / 10);
    text("Lives: " + lives, width / 4, height / 10);
    if (shooterPowered === 1) {
      text("Ammos: " + amoes, 250, 25);
    }
      if (ex_on.includes("✕2")) {
        if (ex2PowerTimer >= 0) {
          fill(255);
          text("✕2: " + ex2PowerTimer, 100, 100);
        }
      }
      if (ex_on.includes("✕5")) {
        if (ex5PowerTimer >= 0) {
          fill(255);
          text("✕5: " + ex5PowerTimer, 200, 100);
        }
      }
    fill(0, 255, 0);
    noStroke();
    rect(0, height * 0.8, width, height * 0.2);
    push();
    translate(x, y);
    if (shieldPowered === 1) {
      push();
      fill("rgb(255, 255, 0)");
      circle(0, 0, 75 * s);
      pop();
    }
    if (shooterPowered === 1) {
      push();
      qwe = -atan2(mouseX - x, mouseY - y);
      fill(150);
      rotate(qwe);
      rect(-12.5, 0, 25, 100);
      pop();
    }
    rotate(q);
    fill(0, 0, 255);
    circle(0, 0, 50 * s);
    push();
    for (let i = 0; i <= 4; i++) {
      rotate(i * 910);
      fill(255, 150, 140);
      ellipse(width / -33, 0, (width / 25) * s, (height / 50) * s);
    }
    pop();
    pop();
    push();
    if (shieldPowered === 1) {
      fill("red");
      text("Shield Timer: " + shieldPowerTimer, width / 2, height / 10);
    }
    pop();
    if (explode === 0) {
      jjuummpp.$("mousePressed", () => {
        if (dis === 0) {
          jump = 1;
          sy = height / 30;
        }
      });
      ddoowwnn.$("mousePressed", () => {
        down = 1;
      });
      q += 0.2;
      if (x <= width * 0.48) {
        x += width / 100;
      }
      if (jump === 1) {
        dis = 1;
        y -= sy;
        sy -= 1;
        if (y >= height * 0.75) {
          sy = 0;
          y = height * 0.75;
          dis = 0;
        }
      }
      cc = totalCoins;
    } else if (explode === 1) {
      exploded = 1;
      if (cc === totalCoins) {
        totalCoins += coinCount;
      }
      changeCode("c", totalCoins);
      if (s <= 10) {
        s += 1;
      } else {
        s = 1;
        x = 2000;
        y = 2000;
        gameOver = setTimeout(() => {
          over = 1;
        }, 5000);
        if (gameOverStartTime === null) {
          gameOverStartTime = millis();
        }

        let elapsed = millis() - gameOverStartTime;

        if (elapsed >= 3000) {
          if (itsover.html() !== "Game Over!!!!") {
            itsover.position(0, height / 4);
            itsover.style(`color:white;font-size:${width / 6}px`);
            itsover.html("Game Over!!!!");
          }

          if (millis() - lastFlashTime >= flashInterval) {
            if (gameOverVisible) {
              itsover.hide();
              gameOverVisible = false;
            } else {
              itsover.show();
              gameOverVisible = true;
            }
            lastFlashTime = millis();
          }

          if (elapsed >= 6000 && play === 1) {
            itsover.hide();
            play = 2;
            gameOverStartTime = null;
            gameOverVisible = true;
            lastFlashTime = 0;
          }
        }
      }
    }
    // Find the lowest platform the player is standing on
    let lowestPlatform = null;
    let lowestY = -Infinity;
    for (let i = 0; i < platforms.length; i++) {
      platforms[i].on = 0;
      if (
        x >= platforms[i].x &&
        x <= platforms[i].x + platforms[i].w &&
        y >= platforms[i].y - 25 &&
        y <= platforms[i].y + 25 &&
        sy < 0 &&
        !down
      ) {
        if (platforms[i].y > lowestY) {
          lowestY = platforms[i].y;
          lowestPlatform = platforms[i];
        }
      }
    }
    currentPlatform = lowestPlatform;
    if (currentPlatform) {
      currentPlatform.on = 1;
    }
    for (let i = 0; i <= spikes.length - 1; i++) {
      spikes[i].display();
    }
    for (let i = 0; i <= coins.length - 1; i++) {
      coins[i].display();
    }
    for (let i = 0; i <= platforms.length - 1; i++) {
      platforms[i].display();
    }
    if (allCollectedSuperpowers.includes("shield")) {
    for (let i = 0; i <= shields.length - 1; i++) {
      shields[i].display();
    }}
    if (allCollectedSuperpowers.includes("life")) {
    for (let i = 0; i <= lifes.length - 1; i++) {
      lifes[i].display();
    }}
    if (allCollectedSuperpowers.includes("shooter")) {
      amos.display();
      for (let i = 0; i <= ammos.length - 1; i++) {
        ammos[i].display();
      }
    }
    if (allCollectedSuperpowers.includes("✕2")) {
      for (let i = 0; i <= ex_2_es.length - 1; i++) {
        ex_2_es[i].display();
      }
      for (let i of monsterBUGS) {
        i.display();
      }
    }
    if (allCollectedSuperpowers.includes("✕5")) {
      for (let i = 0; i <= ex_5_es.length - 1; i++) {
        ex_5_es[i].display();
      }
    }
    for (let i of particles) {
      i.display();
    }
  }
  if (play === 2) {
    itsover.hide();
    back.$("hide");
    ddoowwnn.$("hide");
    selectMusic.hide();
    jjuummpp.$("hide");
    getReadyToShoot.$("hide");
    letUsShootWhenReady.$("hide");
    atgl.$("hide");
    mutee.hide();
    background(150);
    SuperBallGame.position(0, 0);
    SuperBallGame.show();
    qwerty.$("show");
    qwerty.$("position", width / 2.75, height / 2);
    qwerty.$("mousePressed", () => {
      resetGame();
    });
    lastThing.$("position", width / 2.75, height / 2.5);
    lastThing.$("show");
    lastThing.$("mousePressed", () => {
      play = 0;
    });
  } else {
    SuperBallGame.hide();
    qwerty.$("hide");
    lastThing.$("hide");
    itCode.hide();
    theICode.hide();
  }
  if (play === 3) {
    background("pink");
    jjuummpp.$("hide");
    ddoowwnn.$("hide");
    atgl.$("hide");
    back.$("show");
    getReadyToShoot.$("hide");
    letUsShootWhenReady.$("hide");
    music.$("show");
    codey.$("show");
    music.$("position", 200, 25);
    music.$("html", "music");
    music.$("mousePressed", () => {
      ssel = 1;
    });
    codey.$("html", "code");
    codey.$("position", 250, 25);
    codey.$("mousePressed", () => {
      ssel = 2;
    });
    if (ssel === 1) {
      mutee.show();
      selectMusic.show();
    } else {
      mutee.hide();
      selectMusic.hide();
    }
    if (ssel === 2) {
      theCode.show();
      theSCode.show();
      theSCode.position(100, 200);
      theCode.position(150, 100);
      theCode.html("Your code is in an input:");
      theSCode.value(code);
    } else {
      theCode.hide();
      theSCode.hide();
    }
    textSize(20);
    if (ssel === 1) {
      text("Mute all:", 100, 230);
    }
    back.$("mousePressed", () => {
      play = 0;
    });
    mutee.mousePressed(() => {
      muteallon = muteallon === 0 ? 1 : 0;
      document.getElementById("muteasw").style.left =
        muteallon === 1 ? "70px" : "5px";
    });
  } else {
    music.$("hide");
    codey.$("hide");
    theCode.hide();
    theSCode.hide();
  }
  if (play === 4) {
    background("#ff9200");
    itsover.hide();
    selectMusic.hide();
    ddoowwnn.$("hide");
    jjuummpp.$("hide");
    getReadyToShoot.$("hide");
    letUsShootWhenReady.$("hide");
    mutee.hide();
    back.$("show");
    textSize(20);
    text("Total Coins: " + totalCoins, 0, 25);
    allSuperpowers.show();
    allSuperpowers.position(50, 150);
    allSuperpowers.style(
      "background-color:tan;width:415px;height:300px;overflow-y:scroll;overflow-x:hidden;"
    );
    allSuperpowers.html(`
<div style = "background-color:#ff5d00;width:150px;height:50px;position:absolute;left:0px;top:0px;text-align:center;font-size:20px;border-style: none none solid none;">Superpowers:</div>
<div style = "background-color:skyblue;width:170px;height:50px;position:absolute;left:150px;top:0px;text-align:center;font-size:20px;border-style: none none solid none;">Number of coins:</div>
<div style = "background-color:#00ff30;width:90px;height:50px;position:absolute;left:310px;top:0px;text-align:center;font-size:20px;border-style: none none solid none;">Collected:</div>
`);
    slives.display();
    slives.div.parent(allSuperpowers);
    sshield.display();
    sshield.div.parent(allSuperpowers);
    sshooter.display();
    sshooter.div.parent(allSuperpowers);
    smultiplier.display();
    smultiplier.div.parent(allSuperpowers);
    ssmultiplier.display();
    ssmultiplier.div.parent(allSuperpowers);
    back.$("mousePressed", () => {
      play = 0;
    });
    textSize(50);
    fill(255);
    stroke(20);
    text("Your Superpowers:", 50, 100);
  } else {
    allSuperpowers.hide();
    slives.hide();
    sshield.hide();
    sshooter.hide();
    smultiplier.hide();
    pots.$("hide");
    shot.$("hide");
    atgl.$("hide");
    ex_two.$("hide");
  }
  if (play === 5) {
    background("yellow");
    jjuummpp.$("hide");
    atgl.$("hide");
    ddoowwnn.$("hide");
    mutee.hide();
    fourin.show();
    scrollplay.show();
    selectMusic.hide();
    getReadyToShoot.$("hide");
    letUsShootWhenReady.$("hide");
    back.$("show");
    back.$("mousePressed", () => {
      play = 0;
    });
    scrollplay.html(`
This game is called the Super Ball Game.<br>
It is a great game to play anywhere.
`);
  } else {
    fourin.hide();
    scrollplay.hide();
  }
}

function keyPressed() {
  if (explode === 0) {
    if (key === "ArrowUp") {
      if (dis === 0) {
        jump = 1;
        sy = height / 30;
        boingSound.$("play");
      }
    }
    if (key === "ArrowDown") {
      down = 1;
    }
    if (allCollectedSuperpowers.includes("shooter")) {
      if (key === "s") {
        if (shooterPowered === 1) {
          shooterPowered = 0;
        } else {
          shooterPowered = 1;
        }
      }
      if (shooterPowered === 1) {
        if (key === "x" && cantShoot === 0 && amoes > 0) {
          shoot = 1;
          amoes -= 1;
          amos = new amo(mouseX, mouseY, x, y);
        }
      }
    }
  }
}

function resetGame() {
  play = 1;
  gamePrep();
}

class button {
  constructor(v, x, y, w, h, b, c) {
    this.v = v;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.b = b;
    this.c = c;
    this.button = createButton(v).position(this.x, this.y);
    this.button.style(
      `width:${w}px;height:${h}px;background-color:${b};color:${c};`
    );
    this.button.mouseOver(() => {
      this.button.style(`background-color:${c};color:${b};`);
    });
    this.button.mouseOut(() => {
      this.button.style(`background-color:${b};color:${c};`);
    });
  }
  $(a, ...x) {
    if (typeof this.button[a] === "function") {
      return this.button[a](...x);
    } else {
      console.error(`Method "${a}" does not exist on button.`);
    }
  }
}

class sound {
  constructor(x) {
    this.s = loadSound(x);
  }
  $(a, ...x) {
    if (typeof this.s[a] === "function") {
      return this.s[a](...x);
    } else {
      console.error(`Method "${a}" does not exist on sound.`);
    }
  }
}

class superPower {
    constructor(y,n,c,d) {
        this.n = n;
        this.c = c;
        this.div = createDiv().position(0, y);
        this.div1 = createDiv(d)
        .style(`background-color:#ff5d00;width:150px;height:50px;text-align:center;font-size:20px;border-style: none none solid none;`)
        .parent(this.div);
        this.div2 = createDiv(c)
        .style(`background-color:skyblue;width:160px;height:50px;text-align:center;font-size:20px;border-style: none none solid none;`)
        .parent(this.div);
        this.div3 = createDiv()
        .style(`background-color:#00ff30;width:90px;height:50px;text-align:center;font-size:20px;border-style: none none solid none;`)
        .parent(this.div);
        this.button = new button("Collect", 0, 0, 70, 20, "dimgrey", "white")
        this.button.$("parent", this.div);
        this.div1.position(0,0);
        this.div2.position(150,0);
        this.div3.position(310,0);
        this.button.$("position", 320, 15);
        this.div.hide();
    }
    display() {
      this.div.show();
        this.div1.show();
        this.div2.show();
        this.div3.show();
        if (totalCoins >= this.c) {
            if (!allCollectedSuperpowers.includes(this.n)) {
                this.button.$("show");
                this.button.$("mousePressed", () => {
                    totalCoins -= this.c;
                    allCollectedSuperpowers.push(this.n);
                    this.button.$("hide");
                    code += `p-${this.n};`;
                    this.div3.html("✅");
                });
            }
        } else {
            this.button.$("hide");
            if (!allCollectedSuperpowers.includes(this.n) && totalCoins < this.c) {
                this.div3.html("❌");
            }
        }
    }
    hide() {
      this.div.hide();
        this.div1.hide();
        this.div2.hide();
        this.div3.hide();
        this.button.$("hide");
    }
}

function changeCode(a, v) {
  let f = "";
  let u = code.split(";");
  for (let i of u) {
    if (i != "") {
      h = i.split("-");
      if (a === h[0]) {
        h[1] = v;
      }
      f += h[0] + "-" + h[1] + ";";
    }
  }
  code = f;
}
