var sword, swordImg, fruit, fruitImg1, fruitImg2, fruitImg3, fruitImg4, fruitGroup, enemiesGroup, alienImg1, alienImg2, score, PLAY, END, gameState, gameOver;

function preload()
{
  swordImg = loadImage("sword.png");
   fruitImg1= loadImage("fruit1.png");
  fruitImg2 = loadImage("fruit2.png");
  fruitImg3 = loadImage( "fruit3.png");
  fruitImg4 = loadImage( "fruit4.png");
  alienImg1 = loadImage("alien1.png");
  alienImg2 = loadImage("alien2.png");
  gameOver = loadAnimation("gameover.png");
 
}

function setup()
{
  
  createCanvas(400,400);
sword = createSprite(200,200,20,20);
sword.addImage("sword",swordImg);
  sword.addAnimation("gameover",gameOver);
  
  sword.scale=0.6;

  fruitGroup = createGroup();
  enemiesGroup = createGroup();

  score = 0;
  
  PLAY = 0;
  END = 1;
  gameState = PLAY;
  
  //sword.debug = true;
  sword.setCollider("circle",0,0,35);
  



}

function draw()
{
  background("lightgreen");
  text("SCORE :"+ score,200,20);
  
  
  
  
  if(gameState===PLAY)
    {
      sword.x=World.mouseX;
      sword.y=World.mouseY;
  
      spawnFruits();
  
      spawnEnemies();
  
  if(fruitGroup.isTouching(sword))
    {
      fruitGroup.destroyEach();
      score = score + 2;
    
    }

    if(enemiesGroup.isTouching(sword))
      {
        gameState = END;
          
      }
      
 }
  
  else if(gameState===END)
     {
      
      fruitGroup.setVelocityXEach(0);
      enemiesGroup.setVelocityXEach(0);
      fruitGroup.destroyEach();
      enemiesGroup.destroyEach();
       /*fruitGroup.setLifetimeEach(-1);
       enemiesGroup.setLifetimeEach(-1);*/
      sword.changeAnimation("gameover",gameOver);
      sword.x= 200;
      sword.y=200;
      sword.scale = 1.3;
    
    }
  
  
  
  
drawSprites();

}

function spawnFruits()
{
  if(frameCount%50===0)
   {
     fruit= createSprite(410,20,30,30);
     fruit.y = Math.round(random(40,380));
   
     //fruit.x = Math.round(random(-10,410));
     
     //fruit.velocityX=-6;
     fruit.scale= 0.2;
     fruit.lifetime = 50;
   
     
     var rand = Math.round(random(1,4));
     switch(rand)
       {
           case 1 : fruit.addImage(fruitImg1);
           break;
           case 2 : fruit.addImage(fruitImg2);
           break;
           case 3 : fruit.addImage(fruitImg3);
           break;
           case 4 : fruit.addImage(fruitImg4);
           break;
           default : break;
           
           
        }
     
     var rn = Math.round(random(1,2));
     switch(rn)
       {
           case 1 : fruit.x = 0;
           break;
           case 2 : fruit.x = 410;
           break;
           default : break;
           
           
      }
     
     if(fruit.x===0)
       {
         fruit.velocityX = 9;
       }
     
     if(fruit.x === 410)
       {
         fruit.velocityX = -7;
       }
   
fruitGroup.add(fruit);
  }


   

}


function spawnEnemies()
{
  if(frameCount % 30 === 0)
    {
      var enemy = createSprite(410,30,30,30);
      enemy.y = Math.round(random(10,380));
      //enemy.addImage(alienImg2);
    
      //enemy.velocityX = -6;
      
      var rd = Math.round(random(1,2));
      switch(rd)
        {
            case 1 : enemy.x = 0;
            break;
            
            case 2 : enemy.x = 410;
            break;
            
            default: break;
            
        }
      
  if(enemy.x===0) 
  {
     enemy.velocityX = 6;
    enemy.lifetime = 100;
  }
      
  if(enemy.x===410)
   {
          
      enemy.velocityX = -8;
      enemy.lifetime = 67;
  }
    
    
      
var im = Math.round(random(5,6));
switch(im)
    {
            
        case 5 : enemy.addImage(alienImg1);
        break;
        case 6 : enemy.addImage(alienImg2);
        break;
        default : break;
            
    }
       enemiesGroup.add(enemy);
        
}          
            
            
            
            
      
}















