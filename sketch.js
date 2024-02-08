let characters = [];

class character
{
  constructor(sheetPath, xPos, yPos)
  {
    this.xPos = xPos;
    this.yPos = yPos;
    this.sprite = new Sprite(xPos, yPos, 80, 80);
    this.sprite.spriteSheet = sheetPath;
    this.sprite.anis.frameDelay = 6;
    this.animations = {
      stand: {row: 0, frames: 1},
      walkRight: {row: 0, col: 1, frames: 8}
    };
    this.sprite.addAnis(this.animations);
    this.sprite.changeAni('stand');
  }
}
function preload()
{
    let guySpelunky = new character('assets/SpelunkyGuy.png', 100, 100);
    let meatBoy = new character('assets/SpelunkyMeat.png', 300, 100);
    let vanHelsin = new character('assets/SpelunkyHelsin.png', 100, 300);
    let robot = new character('assets/SpelunkyRobot.png', 300, 300);

    characters.unshift(guySpelunky);
    characters.unshift(meatBoy);
    characters.unshift(vanHelsin);
    characters.unshift(robot);
}

function setup() 
{
  createCanvas(400, 400);
}


function draw() 
{
  clear();
  background('cyan');

  if (kb.pressing('d'))
  {
    walkRight();
  }
  else if (kb.pressing('a'))
  {
    walkLeft();
  }
  else
  {
    stand();
  }
}

function stand()
{
  characters.forEach(element => {
    let sprite = element.sprite;
    sprite.changeAni('stand');
    sprite.vel.x = 0;
  });
}

function walkRight()
{
  characters.forEach(element => {
    let sprite = element.sprite;
    sprite.changeAni('walkRight');
    sprite.scale.x = 1;
    sprite.vel.x = 2;
  });

}

function walkLeft()
{
  characters.forEach(element => {
    let sprite = element.sprite;
    sprite.changeAni('walkRight');
    sprite.scale.x = -1;
    sprite.vel.x = -2;
    
  });
}


