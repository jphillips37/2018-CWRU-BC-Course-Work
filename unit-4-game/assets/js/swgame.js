class fighter {
    constructor(name, hp, ap, cap) {
      this.name = name;
      this.hp =  hp;
      this.ap = ap;
      this.cap = cap;
    }
    clone(){
        var cloneFighter = [this.name, this.hp, this.ap, this.cap];  // this should have been defined as a new object instead of an array. Now i'm too lazy to change everything else back to make it work as an object
        return cloneFighter;
    }
}

let yoda = new fighter("Yoda", "75", "10", "16");
let fett = new fighter("Fett", "95", "8", "15");
let vader = new fighter("Vader", "110", "6", "10");
let maul = new fighter("Maul", "105", "7", "14");

console.log(yoda.clone());
console.log(yoda);

let fighterArray = [ // put fighters in an array to make it easier to chose one of them later
    yoda,
    fett,
    vader,
    maul
]

var attacker;
var defender;
var attackerName;
var defenderName;
var activeAttacker;
var activeDefender;
var baseAp;
var defendersRemaining = 3;
$(".defender, .enemies, .attacker").hide();

// document.getElementsByClassName("your-char").style.visibility = "hidden";

$(".pic").on("click", function() { // no attacker has been chosen, the first click will be the attacking fighter
    if (attacker == null) {
        attackerName = $(this).attr("value");  // get the name of the fighter selected 
        attacker = 1;   // give attacker variable a value, so it doesn't = null
        $(".start").hide();  // hide the initial row of fighters
        $("#attack"+attackerName).show(); // show the selected fighter in the attacker row
        $(".enemies").show(); //show the enemies column to choose a defender
        $("#enemy"+attackerName).hide(); // hide the fighter that was chosen as the attacker

        for (var i = 0; i < fighterArray.length; i++) {  // selects the attacker object
            if(fighterArray[i].name == attackerName) {
                activeAttacker = fighterArray[i].clone();
                console.log(activeAttacker[1]);
                baseAp = activeAttacker[2];
                break;
            }
        }

    }
    else if (defenderName == null) {
        defenderName = $(this).attr("value");
        if (defenderName === attackerName) {
            defenderName = null;
        }
        else {
            defender = 1;
            $("#enemy"+defenderName).hide();
            $("#defender"+defenderName).show();
            
            for (var i = 0; i < fighterArray.length; i++) { // selects the defender object
                if(fighterArray[i].name == defenderName) {
                    activeDefender = fighterArray[i].clone();
                    break;
                }
            }
        }
    }
    else{

    };
})

$(".btn-danger").on("click", function() {

    if (activeAttacker[1] > 0 && activeDefender[1] > 0) {
        activeDefender[1] = activeDefender[1] - activeAttacker[2];  // attacker damages defender
        
        $("#defender"+activeDefender[0]+"Hp").text(activeDefender[1]);
        activeAttacker[2] = parseInt(activeAttacker[2]) + parseInt(baseAp);  // attacker ap increases by base AP amount

        if (activeDefender[1] > 0) {
            activeAttacker[1] = activeAttacker[1] - activeDefender[3]; // attacker hp decreases by defender cap value
            $("#attack"+activeAttacker[0]+"Hp").text(activeAttacker[1]);
            if (activeAttacker[1] <= 0 || activeDefender[1] <= 0) {
                if (activeAttacker[1] <= 0) {
                    alert("You Lose");
                }
            }
        }
        else {
            $("#defender"+defenderName).hide();
            defendersRemaining--;
            defenderName = null;
            if (defendersRemaining == 0) {
                alert("You Win!");
            }
        }
    }
    // if ($("#enemyYoda").is(":hidden") && $("#enemyFett").is(":hidden") && $("#enemyVader").is(":hidden") && $("#enemyMaul").is(":hidden")) {
    //     alert("hidden");  this seems like too much code to check for visibility of each fighter
    //}
})
$(".btn-secondary").on("click", function() {
    attacker = null;
    defender = null;
    attackerName = null;
    defenderName = null;
    activeAttacker = null;
    activeDefender = null;
    baseAp = null;
    defendersRemaining = 3;  // after the first fighter is chosen, there will always be 3 fighters to defeat
    $(".defender, .enemies, .attacker").hide();
    $(".start").show();
    for (i = 0; i < fighterArray.length; i++) {
        $("#attack"+fighterArray[i].name+"Hp").text(fighterArray[i].hp);
        $("#defender"+fighterArray[i].name+"Hp").text(fighterArray[i].hp);
    }
})