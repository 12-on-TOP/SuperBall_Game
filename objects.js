 class spike {
   constructor(x, y) {
     this.x = x;
     this.y = y;
   }
   display() {
     push();
     fill("grey");
     noStroke();
     translate(this.x, this.y);
     triangle(0, -width / 40, -width / 40, width / 40, width / 40, width / 40);
     pop();
     if (explode === 0) {
       this.x -= 5;
       if (collideCirclePoly(x, y, 50 * s, this.getPoints())) {
         lives *= 10;
         if (shieldPowered === 0) {
           if (lives <= 0) {
              explode = 1;
           } else {
             lives -= 1;
           }
         }
         lives /= 10;
       }
     }
     if (this.x <= width / -10) {
       this.x += width * 2;
     }
   }
   getPoints() {
     return [
       { x: this.x, y: this.y - width / 40 },
       { x: this.x - width / 40, y: this.y + width / 40 },
       { x: this.x + width / 40, y: this.y + width / 40 },
     ];
   }
 }

class coin {
  constructor(x, y, val) {
    this.x = x;
    this.y = y;
    this.val = val;
    this.incr = 0;
  }
  display() {
    push();
    fill(255, 255, 0);
    noStroke();
    translate(this.x, this.y);
    circle(0, 0, width / 20);
    fill(0);
    textSize(height / 25);
    fill(255, 130, 0);
    text(`+${this.val}`, -10, 6);
    pop();
    if (explode === 0) {
      this.x -= 5;
      if (dist(x, y, this.x, this.y) <= width / 15) {
        this.y -= 2000;
        if (collect === 1) {
          this.incr = this.val * (ex2Powered * 2) * (ex5Powered * 5);
          coinCount += this.incr;
          particles.push(new particle(x, y, `+${this.incr}`));
          coinSound.$("play");
        }
        collect = 0;
      } else {
        collect = 1;
      }
      if (this.x <= width / -10) {
        this.x += width * 2;
        if (this.y <= -1000) {
          this.y += 2000;
        }
      }
    }
  }
}

class platform {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.on = 0;
  }
  display() {
    fill(140, 70, 20);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
    if (explode === 0) {
      this.x -= 5;
      if (this.x <= -width) {
        this.x += width * 3;
      }
      if (this.on && sy < 0) {
        jump = 0;
        dis = 0;
        sy = -6;
        y = this.y - 25;
      } else if (!this.on) {
        jump = 1;
// for (let i of monsterBUGS) {
//   if (i.x >= this.x && i.x <= this.x + this.w) {
//     if (i.y >= this.y - i.s) {
//       i.y = this.y - i.s;
//       i.j = 0;
//     } else {
//       i.j = 1;
//     }
//   }
// }
    }
if (down && this.on) {
  jump = 1;
  this.on = 0;
  down = 0;
  currentPlatform = null;
}
}
  }
}

class shield {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  display() {
    push();
    fill(150, 10, 10);
    noStroke();
    translate(this.x, this.y);
    circle(0, 0, width / 15);
    fill(50, 150, 255);
    text("1ø", -10, 6);
    pop();
    if (explode === 0) {
      this.x -= 5;
      if (cwlm === 0) {
        if (dist(x, y, this.x, this.y) <= width / 12) {
          this.y -= 2000;
          shieldPowered = 1;
          spowerUp.$("play");
          shieldPowerTimer += 10 * (ex2Powered * 2) * (ex5Powered * 5);
          clearInterval(shieldPowerTimerClock);
          shieldPowerTimerClock = setInterval(() => {
            if (shieldPowerTimer <= 0) {
              shieldPowered = 0;
              clearInterval(shieldPowerTimerClock);
            }
            shieldPowerTimer -= 1;
          }, 1000);
        }
      }
      if (this.x <= width / -10) {
        this.x += width * 8;
        if (this.y <= -1000) {
          this.y += 2000;
        }
      }
    }
  }
}

class life {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  display() {
    push();
    fill(0, 0);
    stroke(0);
    translate(this.x, this.y);
    circle(0, 0, width / 17);
    text("❤️", -10, 10);
    pop();
    if (explode === 0) {
      this.x -= 5;
      if (dist(x, y, this.x, this.y) <= width / 13.6) {
        this.y -= 2000;
        lives += 1 * (ex2Powered * 2) * (ex5Powered * 5);
        spowerUp.$("play");
        boomSound.$("play");
      }
      if (this.x <= width / -10) {
        this.x += width * 2;
        if (this.y <= -1000) {
          this.y += 2000;
        }
      }
    }
  }
}

class amo {
   constructor(xa, ya, xx, yy) {
     this.x = xx;
     this.y = yy;
     this.speed = 10;
     let angle = atan2(ya - yy, xa - xx);
     this.xx = cos(angle) * this.speed;
     this.yy = sin(angle) * this.speed;
   }
   display() {
     if (explode === 0) {
       push();
       if (shoot === 1) {
         if (this.x >= width || this.x <= 0 || this.y >= height || this.y <= 0) {
           shoot = 0;
           cantShoot = 0;
         } else {
            cantShoot = 1;
           for (let i = 0; i <= spikes.length - 1; i++) {
             if (abs(this.x - x) >= 25 && abs(this.y - y) >= 25) {
               if (
                 collideCirclePoly(
                   this.x,
                   this.y,
                   width / 20,
                   spikes[i].getPoints()
                 )
               ) {
                 shoot = 0;
                 cantShoot = 0;
                 spikes[i].x += width * 2;
               }
             }
           }
         }
         push();
         translate(this.x, this.y);
         fill("yellow");
         noStroke();
         circle(0, 0, width / 20);
         this.x += this.xx;
         this.y += this.yy;
         stroke("red");
         pop();
       }
       pop();
     }
   }
 }

class ammo {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  display() {
    push();
    fill(255);
    stroke(0);
    translate(this.x, this.y);
    circle(0, 0, width / 17);
    text("+1⚪", -10, 10);
    pop();
    if (explode === 0) {
      this.x -= 5;
      if (dist(x, y, this.x, this.y) <= width / 13.6) {
        this.y -= 2000;
        amoes += 1 * (ex2Powered * 2) * (ex5Powered * 5);
        spowerUp.$("play");
      }
      if (this.x <= width / -10) {
        this.x += width * 5;
        if (this.y <= -1000) {
          this.y += 2000;
        }
      }
    }
  }
}

class times_x {
  constructor(x, y, val) {
    this.x = x;
    this.y = y;
    this.val = val;
  }
  display() {
    push();
    fill(255, 0, 0);
    stroke(0, 0, 255);
    translate(this.x, this.y);
    circle(0, 0, width / 12.5);
    text(`✕${this.val}¦1°`, -10, 10);
    pop();
    if (explode === 0) {
      this.x -= 5;
      if (dist(x, y, this.x, this.y) <= width / 10.8) {
        this.y -= 2000;
        ex_on.push(`✕${this.val}`);
        if (this.val === 2) {
        ex2PowerTimer += 10 * (ex2Powered * 2) * (ex5Powered * 5);
        ex2Powered = 1;
        clearInterval(ex2PowerTimerClock);
        ex2PowerTimerClock = setInterval(() => {
          if (ex2PowerTimer <= 0) {
            ex2Powered = 0.5;
            clearInterval(ex2PowerTimerClock);
          }
          ex2PowerTimer -= 1;
        }, 1000);
      }
      if (this.val === 5) {
        ex5PowerTimer += 10 * (ex2Powered * 2) * (ex5Powered * 5);
        ex5Powered = 1;
        clearInterval(ex5PowerTimerClock);
        ex5PowerTimerClock = setInterval(() => {
          if (ex5PowerTimer <= 0) {
            ex5Powered = 0.5;
            clearInterval(ex5PowerTimerClock);
          }
          ex5PowerTimer -= 1;
        }, 1000);
      }
      spowerUp.$("play");
      coinSound.$("play");
    }
    if (this.x <= width / -20) {
      this.x += width * 20;
        if (this.y <= -1000) {
          this.y += 2000;
        }
      }
    }
  }
}

class particle {
  constructor(x, y, t) {
    this.x = x;
    this.y = y;
    this.t = t;
    this.a = 255;
  }
  display() {
    push();
    fill(255, this.a);
    text(this.t, this.x, this.y);
    this.y -= 1;
    this.a -= 2.55;
    pop();
  }
}

class MONSTER {
  constructor(x, y, s, p, t) {
    this.x = x; //xpos
    this.y = y; //ypos
    this.s = s; //size
    this.p = p; //power
    this.t = t; //type
    this.j = 0; //jumping and falling like for the ball
    this.sy = 0; //speed , y
  }
display() {
  if (this.t === "bug") {
    push();
    fill(255, 0, 0);
    translate(this.x, this.y);
    square(0, 0, this.s);
    pop();

    if (explode === 0) {
      this.x -= 5;

      // Gravity + bounce physics
if (this.j === 1) {
  this.y += this.sy;      // move vertically
  this.sy += 1;           // gravity pulls down

  if (this.y >= height * 0.75) {
    this.y = height * 0.75;
    this.sy = 0;
    this.j = 0;
  }
}

if (frameCount % 30 === 0 && this.j === 0 && this.y >= height * 0.75) {
  this.j = 1; 
  this.sy = -20;          // launch upward
}


      if (dist(x, y, this.x, this.y) <= width / 15) {
        cwlm = 1;
        lives *= 10;
        if (lives <= 0) {
          explode = 1;
          if (muteallon === 0) {
            // sound logic here
          }
        } else {
          lives -= 1;
        }
        lives /= 10;
      } else {
        cwlm = 0;
      }
    }

    if (this.x <= width / -10) {
      this.x += width * 4;
    }
  }
}

}