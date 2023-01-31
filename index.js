let con1= document.querySelector("#destination1");
let con2= document.querySelector("#destination2");
let card = document.querySelector(".card");

function moveTo1(card){
  con1.appendChild(card);
  let list = document.querySelector('')
  card.querySelectorAll('button')[0].disabled = true;
  card.querySelectorAll('button')[1].disabled = true;
}

function moveTo2(card){
  con2.appendChild(card)
  card.querySelectorAll('button')[0].disabled = true;
  card.querySelectorAll('button')[1].disabled = true;
}

