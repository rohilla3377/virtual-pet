var dog,sadDog,happyDog;
var feed,addFood;
var fedTime ,lastfed;
var foodobj;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  
  database =firebse.database();
  createCanvas(1000,400);
  foodObj = new Food ();
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  feedobj.createButton("Feed the Dog");
  feed.position(700,95);
feed.mousePreesed(feedDog);

addFood = createButton("Add Food");
addFood.postion(800,95);
addFood  .mousePressed(addFoods);
}

function draw() {
  background(46,139,87);





  fedTime = database.ref("feedTime");
  fedTime.on("value", function(data){
    lastFed = data.val();
  });

  Fill(255);
textSize(20);
if(lastFed >= 12){
  text("Last Feed: "+ lastFed % 12 + "PM",350,30);
}else if(lastfeed == 0){
  text("last Feed : 12 AM",350,30);

}else{
text("Lat Feed :" + lastFeed + "AM ", 350,30);
}
foodobj.obj.display();
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDog);

  foodobj.updateFoodStock(foodobj.getFoodStook()-1);
database.ref('/').update({
  food:foodObj.getFoodStock(),
  fedTime:hour()
})

}

//function to add food in stock
function readStock(data){
  foodS = data.val();
  foodobj.updateFoodStock(foodS);
}
