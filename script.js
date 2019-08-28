var mainDiv = document.getElementById("itemSlot");
var topDiv = document.getElementById("topDiv");

function addItem(e) {
  // console.log("btn clicked koi sa");
  // console.log(e.id);

  switch (e.id.toString()) {
    case "addCheese":
      // code block
      var cheeseDiv = document.createElement("div");
      cheeseDiv.classList.add("cheese");
      mainDiv.parentNode.insertBefore(cheeseDiv, mainDiv);

      break;
    case "addSalad":
      // code block
      var saladDiv = document.createElement("div");
      saladDiv.classList.add("salad");
      mainDiv.parentNode.insertBefore(saladDiv, mainDiv);
      break;

    case "addTikiya":
      // code block
      var tikiyaDiv = document.createElement("div");
      tikiyaDiv.classList.add("tikiya");
      mainDiv.parentNode.insertBefore(tikiyaDiv, mainDiv);
      break;

    case "addChips":
      // code block
      var chipsDiv = document.createElement("div");
      chipsDiv.classList.add("chips");
      mainDiv.parentNode.insertBefore(chipsDiv, mainDiv);
      break;

    default:
      // code block
      null;
  }
}

function removeItem(e){
    switch (e.id.toString()) {
        case "remCheese":
          // code block
          var cheese = document.querySelectorAll(".cheese")
          lastCheese = cheese[cheese.length-1];
          if(cheese.length!==0){
          topDiv.removeChild(lastCheese);
          }else alert("add it first");
    
          break;
        case "remSalad":
          // code block
          var salad = document.querySelectorAll(".salad")
          lastsalad = salad[salad.length-1];
          if(salad.length!==0){
          topDiv.removeChild(lastsalad);
          }else alert("add it first");
          break;
    
        case "remTikiya":
          // code block
          var tikiya = document.querySelectorAll(".tikiya")
          lasttikiya = tikiya[tikiya.length-1];
          if(tikiya.length!==0){
          topDiv.removeChild(lasttikiya);
          }else alert("add it first");
          
          break;
    
        case "remChips":
          // code block
          var chips = document.querySelectorAll(".chips")
          lastchips = chips[chips.length-1];
          if(chips.length!==0){
          topDiv.removeChild(lastchips);
          }else alert("add it first");
          break;
    
        default:
          // code block
          null;
}
}