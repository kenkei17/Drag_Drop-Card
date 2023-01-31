let girls = document.querySelector('.girls');
let boys = document.querySelector('.boys');
let bButtons = document.querySelectorAll('.boyBtn');
let gButtons = document.querySelectorAll('.girlBtn');
const gList = document.querySelector('gList');
let peopleList = {
    boysList:[],
    girlsList:[],

    createBList(name){  
        girls.appendChild(name)
    }
    ,createGList(name){
        boys.appendChild(name)
    },
    addBoys(){        
        for(let bButton of bButtons){
            bButton.addEventListener('click',()=>{
               this.boysList.push(bButton.parentElement.querySelector('h3').innerText);
               this.createBList(bButton.parentElement.querySelector('h3').parentElement);

            });
        }
    }
    ,
    addGirls(){
       
        for(let gButton of gButtons){
            gButton.addEventListener('click',()=>{
               this.girlsList.push(gButton.parentElement.querySelector('h3').innerText);
               this.createGList(gButton.parentElement.querySelector('h3').parentElement);
            
            });
        }
    },
 
    
}
peopleList.addBoys();
peopleList.addGirls();