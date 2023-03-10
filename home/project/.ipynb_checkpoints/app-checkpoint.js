
    // Create Dino Constructor
class Dino{
    
    constructor(species, fact, weight, height, diet, where, when){
        this.species = species;
        this.fact = fact;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
    }
    
      set species(spe){
        this.species = spe;
        
    }
    
      get species(){
        return this.species;
        
    }
    
      set weight(weight){
        this.weight = weight;
    }
    
    get weight(){
        return this.weight;
    }
    
    set height(height){
        this.height=height;
    }
    
    get height(){
        return this.height;
    }
    
    set diet(diet){
        this.diet = diet;
    }
    
    get diet(){
        return diet;
    }
    
    set info(sentenc){
        const info = sentenc.split(' ')
        this.species = info[0];
        this.where = info[1];
        this.when = info[2];
        
    }
    
    get info(){
        return `${species}, lived in ${where}, and lived in ${when}`;
    }
}

    // Use IIFE to get human data from form
    
function human(name, height, weight, diet){
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.diet = diet;
        this.species = 'human';
    }
    
    const ourHuman = new human();

const getHumanData = (function(){
    const InputName = document.getElementById('name');
    const InputFeet = documetn.getElementById('feet');
    const InputInches = document.getElementById('inches');
    const InputWeight = document.getElementById('weight');
    const InputDiet = document.getElementById('diet');
      return{
         ourHuman.name = InputName.vlaue,
         ourHuman.height = parseInt(InputFeet.value) * 12 + parseInt(InputInches.value),
         ourHuman.weight = InputWeight.vlaue,
         ourHuman.diet = InputDiet,
    
      }
})();
    
    let DinoArr = [];
    fetch('./dino.json').then(response => {
        return respnose.json();
    }).then((dinodata) => { 
        dinodata.Dinos.forEach((dino) => {
            let DinoObj = new Dino(dinodata.species, dinodata.fact, dinodata.weight, dinodata.height, dinodata.diet, dinodata.where, dinodata.when);
            DinoArr.push(DinoObj);
        });
    })

    
    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
    Dino.prototpe.CmpareHeight = function(height){
        if(ourHuman.height > height){
            return "you are taller than this dino";
        } 
        else{
            return "you are smaller than this dino";
        }
    }
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    Dino.prototpe.CmpareWeight = function(weight){
        if(ourHuman.weight > weight){
            return "you are heavier than this dino";
        } 
        else{
            return "you are lighter than this dino";
        }
    }
    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    Dino.prototpe.CmpareDiet = function(diet){
        if(ourHuman.deit == diet){
            return "you both have same dite!";
        } 
        else{
            return `your dite is ${ourHuman.dite}, and this dino diet is ${dite}`;
        }
    }

    // Generate Tiles for each Dino in Array
  function AddTiles({name}) {
    const grid = document.getElementById('grid');
    DinoArr.map(DinoObj => {
      const tile = document.createElement('div');
      tile.className = 'grid-item';
  
      const title = document.createElement('h3');
      title.className = 'h2';
      if (DinoObj.species) {
        title.innerHTML = dino.species;
      } else {
        title.innerHTML = name;
      }
  
      const fact = document.createElement('p');
      fact.className = 'p';
      const factsArray = DinoObj.facts;
      let randomFact = '';
  
      if (factsArray) {
        randomFact = factsArray[Math.floor(Math.random() * factsArray.length)];
      }
  
      if (DinoObj.species == 'Pigeon') {
        fact.innerHTML = DinoObj.facts[0];
      } else {
        fact.innerHTML = randomFact;
      }
  
      const image = document.createElement('img');
      image.className = 'img';
      dino.species?image.src = `./images/${DinoObj.species}.png`:image.src =`./images/human.png`;

      tile.append(fact);
      tile.append(image);
      tile.append(title);
      grid.append(tile);
    });
  }
        // Add tiles to DOM

    // Remove form from screen
    function RemoveForm(){
        const form = document.getElementById('dino-compare');
        form.style.display = "none";
    }

    const button = getElementById('btn');
// On button click, prepare and display infographic
button.addEventListener('onclick', function()=>{
                        const:human = getHumanData();
                        dinos.forEach(dino => {
                            dino.CmpareWeight(human.weight);
                            dino.CmpareHeight(human.height);
                            dino.CmpareDiet(human.diet);
                        });

                        AddTiles(name);
                        RemoveForm();
})   