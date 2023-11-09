var xp=0;
var health=100;
var gold=50;
var currenWeapon =0;
let fighting;
let monsterHealth;

const weapons=[
    {name: "stick",
    power:5},
    {name: "dagger",
    power:30},
    {name: "claw hammer",
    power:50},
    {name: "sword",
    power:100},

];

const monsters=[
    {name:"slime",
    level:2,
    health: 15},

    {name:"fanged beast",
    level:8,
    health: 60},

    {name:"dragon",
    level:20,
    health: 300}
];


let inventory = ["stick"];

const button1=document.querySelector("#button1");
const button2=document.querySelector("#button2");
const button3=document.querySelector("#button3");
const text=document.querySelector("#text");
const xpText=document.querySelector("#xpText");
const healthText=document.querySelector("#healthText");
const goldText=document.querySelector("#goldText");
const monsterStats=document.querySelector("#monsterStats");
const monsterNameText=document.querySelector("#monsterNameText");
const monsterHealthText=document.querySelector("#monsterHealthText");

const locations=[
    {
        name:"Town Square",
        "button text": ["Go to store","Go to cave","Fight dragon"],
        "button functions":[goStore, goCave, fightDragon],
        text:"you are in the Town Square. you see a sign that says \"store\""
    },
    {
        name:"Store",
        "button text": ["Buy 10 health(10 gold)","Buy weapon 30 gold","go to town square"],
        "button functions":[buyHealth, buyWeapon, goTown],
        text:"you have entered the store"
    },
    {
        name:"cave",
        "button text": ["fight slime","fight fanged beast","go to town square"],
        "button functions":[fightSlime, fightBeast, goTown],
        text:"you have entered the store"
    },
    {
        name:"fight",
        "button text": ["attack","dodge","run"],
        "button functions":[attack, dodge, goTown],
        text:"you are fighting a monster"
    },
    {
        name:"kill monster",
        "button text": ["go to town square","go to town square","go to town square"],
        "button functions":[goTown, goTown, goTown],
        text:"The monster screamed 'arghhh!!!!' as it died you gain xp and find gold."
    },
    {
        name:"lose",
        "button text": ["Replay?","Replay?","Replay?"],
        "button functions":[restart, restart, restart],
        text:"you died."
    },
    {
        name:"win",
        "button text": ["Replay?","Replay?","Replay?"],
        "button functions":[restart, restart, restart],
        text:"you you defeat the dragon! you win the game!!."
    }
]

//initializing buttons

button1.onclick=goStore;
button2.onclick=goCave;
button3.onclick=fightDragon;

function update(locations){
    monsterStats.style.display="none";
    button1.innerText=locations["button text"][0];
    button2.innerText=locations["button text"][1];
    button3.innerText=locations["button text"][2];
    button1.onclick=locations["button functions"][0];
    button2.onclick=locations["button functions"][1];
    button3.onclick=locations["button functions"][2];
    text.innerText=locations.text;
}

function goTown(){
    update(locations[0]);
}

function goStore(){
    update(locations[1]);
}


function goCave(){
    update(locations[2]);
}



function buyHealth(){
    if(gold>=10)
    {
        gold-=10;
        goldText.innerText=gold;
        health+=10;
        healthText.innerText=health;
    }
    else{
        text.innerText="You do not have enough gold to buy gold";
    }
}
function buyWeapon(){
    if(currenWeapon>=3){
        if(gold>=30){
            gold-=30;
            goldText.innerText=gold;
            currenWeapon++;
            text.innerText="you now have a "+weapons[currenWeapon].name+". it has "+weapons[currenWeapon].power+" damage.";
            inventory.push(weapons[currenWeapon].name);
            text.innerText+="In your inventory you have: "+inventory;   
        }
        else{
            text.innerText="you do nat have enough gold for weapon upgrade";
            }
        }
    else{
        text.innerText="you already have have the most powerful weapon a "+weapons[currenWeapon].name;
        button2.innerText="Sell weapon for 15 gold";
        button2.onclick=sellWeapon;
    }
    
}

function sellWeapon(){
    if (currenWeapon>1){
        gold+=15;
        gold.innerText=gold;
        let currentWeapon=inventory.shift();//shift is removing the first element from the inventory array and putting it in currenweapon;
        text.innerText="you sold a "+ currenWeapon+".";
        text.innerText+="You have: "+inventory;
    }
    else{
        text.innerText="dont sell your only weapon"
    }
}




function fightSlime(){
    fighting=0;
    goFight();
}
function fightBeast(){
    fighting=1;
    goFight();
}

function fightDragon(){
    fighting=2;
    goFight();
}

function goFight(){
    update(locations[3]);
    monsterHealth=monsters[fighting].health;
    monsterStats.style.display="block";
    monsterNameText.innerText=monsters[fighting].name;
    monsterHealthText.innerText=monsterHealth;
    healthText.innerText=health;
}

function attack(){
    text.innerText="The "+monsters[fighting].name+"attacks.";
    text.innerText+="you attack it with your "+weapons[currenWeapon].name+" .";
    if(isMonsterHit()){
        health-=getMonsterAttackValue(monsters[fighting].level);
    }
    else{
        text.innerText="you missed";
    }
    monsterHealth-=weapons[currenWeapon].power +Math.floor(Math.random()*xp) +1;
    monsterHealthText.innerText=monsterHealth;
    healthText.innerText=health;
    if(health<=0){
        lose();
    }
    else if(monsterHealth<=0){
        fighting===2?winGame():defeatMonster();
    }
}

function getMonsterAttackValue(level){
    let hit=(level*5)-(Math.floor(Math.random()*xp));
    console.log(hit);
    return hit;
}

function isMonsterHit(){
    return Math.random()> 0.2;

}

function dodge(){
    text.innerText="You dodged the attack from the "+ monsters[fighting].name+".";
}

function defeatMonster(){
    gold+=Math.floor(monsters[fighting].level*6.7);
    xp+=monsters[fighting].level;
    goldText.innerText=gold;
    xpText.innerText=xp;
    update(locations[4]);
}

function lose(){
    update(locations[5]);
}

function winGame(){
    update(locations[6]);
}

function restart(){
    xp=0;
    health=100;
    gold=50;
    currenWeapon =0;
    inventory = ["stick"];
    goldText.innerText=gold;
    healthText.innerText=health;
    xpText.innerText=xp;
    goTown();

}