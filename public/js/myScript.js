var app = angular.module("myApp", ['ui.bootstrap'], function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});

app.controller("myCtrl", function($scope) {
    $scope.pokemon = [
        {
            base: {
                attack: 49,
                defense: 49,
                hp: 45,
                spAtk: 65,
                spDef: 65,
                speed: 45
            },
            name: "Bulbasaur",
            id: "001",
            type: [
                "Grass",
                "Poison"
            ],
            image: "image/img/001Bulbasaur.png",
            sprite: "image/spr/001MS.png",
            description: "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon."
        },
        {
            base: {
                attack: 62,
                defense: 63,
                hp: 60,
                spAtk: 80,
                spDef: 80,
                speed: 60
            },
            name: "Ivysaur",
            id: "002",
            type: [
                "Grass",
                "Poison"
            ],
            image: "image/img/002Ivysaur.png",
            sprite: "image/spr/002MS.png",
            description: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs."
        },
        {
            base: {
                attack: 82,
                defense: 83,
                hp: 80,
                spAtk: 100,
                spDef: 100,
                speed: 80
            },
            name: "Venusaur",
            id: "003",
            type: [
                "Grass",
                "Poison"
            ],
            image: "image/img/003Venusaur.png",
            sprite: "image/spr/003MS.png",
            description: "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight."
        },
        {
            base: {
                attack: 52,
                defense: 43,
                hp: 39,
                spAtk: 60,
                spDef: 50,
                speed: 65
            },
            name: "Charmander",
            id: "004",
            type: [
                "Fire"
            ],
            image: "image/img/004Charmander.png",
            sprite: "image/spr/004MS.png",
            description: "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail."
        },
        {
            base: {
                attack: 64,
                defense: 58,
                hp: 58,
                spAtk: 80,
                spDef: 65,
                speed: 80
            },
            name: "Charmeleon",
            id: "005",
            type: [
                "Fire"
            ],
            image: "image/img/005Charmeleon.png",
            sprite: "image/spr/005MS.png",
            description: "When it swings its burning tail, it elevates the temperature to unbearably high levels."
        },
        {
            base: {
                attack: 84,
                defense: 78,
                hp: 78,
                spAtk: 109,
                spDef: 85,
                speed: 100
            },
            name: "Charizard",
            id: "006",
            type: [
                "Fire",
                "Flying"
            ],
            image: "image/img/006Charizard.png",
            sprite: "image/spr/006MS.png",
            description: "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally."
        },
        {
            base: {
                attack: 48,
                defense: 65,
                hp: 44,
                spAtk: 50,
                spDef: 64,
                speed: 43
            },
            name: "Squirtle",
            id: "007",
            type: [
                "Water"
            ],
            image: "image/img/007Squirtle.png",
            sprite: "image/spr/007MS.png",
            description: "After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth."
        },
        {
            base: {
                attack: 63,
                defense: 80,
                hp: 59,
                spAtk: 65,
                spDef: 80,
                speed: 58
            },
            name: "Wartortle",
            id: "008",
            type: [
                "Water"
            ],
            image: "image/img/008Wartortle.png",
            sprite: "image/spr/008MS.png",
            description: "Often hides in water to stalk unwary prey. For swimming fast, it moves its ears to maintain balance."
        },
        {
            base: {
                attack: 83,
                defense: 100,
                hp: 79,
                spAtk: 85,
                spDef: 105,
                speed: 78
            },
            name: "Blastoise",
            id: "009",
            type: [
                "Water"
            ],
            image: "image/img/009Blastoise.png",
            sprite: "image/spr/009MS.png",
            description: "A brutal Pokémon with pressurized water jets on its shell. They are used for high speed tackles."
        },
        {
            base: {
                attack: 30,
                defense: 35,
                hp: 45,
                spAtk: 20,
                spDef: 20,
                speed: 45
            },
            name: "Caterpie",
            id: "010",
            type: [
                "Bug"
            ],
            image: "image/img/010Caterpie.png",
            sprite: "image/spr/010MS.png",
            description: "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls."
        },
        {
            base: {
                attack: 20,
                defense: 55,
                hp: 50,
                spAtk: 25,
                spDef: 25,
                speed: 30
            },
            name: "Metapod",
            id: "011",
            type: [
                "Bug"
            ],
            image: "image/img/011Metapod.png",
            sprite: "image/spr/011MS.png",
            description: "This Pokémon is vulnerable to attack while its shell is soft, exposing its weak and tender body."
        },
        {
            base: {
                attack: 45,
                defense: 50,
                hp: 60,
                spAtk: 90,
                spDef: 80,
                speed: 70
            },
            name: "Butterfree",
            id: "012",
            type: [
                "Bug",
                "Flying"
            ],
            image: "image/img/012Butterfree.png",
            sprite: "image/spr/012MS.png",
            description: "In battle, it flaps its wings at high speed to release highly toxic dust into the air. "
        },
        {
            base: {
                attack: 35,
                defense: 30,
                hp: 40,
                spAtk: 20,
                spDef: 20,
                speed: 50
            },
            name: "Weedle",
            id: "013",
            type: [
                "Bug",
                "Poison"
            ],
            image: "image/img/013Weedle.png",
            sprite: "image/spr/013MS.png",
            description: "Often found in forests, eating leaves. It has a sharp venomous stinger on its head."
        },
        {
            base: {
                attack: 25,
                defense: 50,
                hp: 45,
                spAtk: 25,
                spDef: 25,
                speed: 35
            },
            name: "Kakuna",
            id: "014",
            type: [
                "Bug",
                "Poison"
            ],
            image: "image/img/014Kakuna.png",
            sprite: "image/spr/014MS.png",
            description: "Almost incapable of moving, this Pokémon can only harden its shell to protect itself from predators."
        },
        {
            base: {
                attack: 90,
                defense: 40,
                hp: 65,
                spAtk: 45,
                spDef: 80,
                speed: 75
            },
            name: "Beedrill",
            id: "015",
            type: [
                "Bug",
                "Poison"
            ],
            image: "image/img/015Beedrill.png",
            sprite: "image/spr/015MS.png",
            description: "Flies at high speed and attacks using its large venomous stingers on its forelegs and tail."
        },
        {
            base: {
                attack: 45,
                defense: 40,
                hp: 40,
                spAtk: 35,
                spDef: 35,
                speed: 56
            },
            name: "Pidgey",
            id: "016",
            type: [
                "Normal",
                "Flying"
            ],
            image: "image/img/016Pidgey.png",
            sprite: "image/spr/016MS.png",
            description: "A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand."
        },
        {
            base: {
                attack: 60,
                defense: 55,
                hp: 63,
                spAtk: 50,
                spDef: 50,
                speed: 71
            },
            name: "Pidgeotto",
            id: "017",
            type: [
                "Normal",
                "Flying"
            ],
            image: "image/img/017Pidgeotto.png",
            sprite: "image/spr/017MS.png",
            description: "Very protective of its sprawling territorial area, this Pokémon will fiercely peck at any intruder."
        },
        {
            base: {
                attack: 80,
                defense: 75,
                hp: 83,
                spAtk: 70,
                spDef: 70,
                speed: 101
            },
            name: "Pidgeot",
            id: "018",
            type: [
                "Normal",
                "Flying"
            ],
            image: "image/img/018Pidgeot.png",
            sprite: "image/spr/018MS.png",
            description: "When hunting, it skims the surface of water at high speed to pick off unwary prey such as Magikarp."
        },
        {
            base: {
                attack: 56,
                defense: 35,
                hp: 30,
                spAtk: 25,
                spDef: 35,
                speed: 72
            },
            name: "Rattata",
            id: "019",
            type: [
                "Normal"
            ],
            image: "image/img/019Rattata.png",
            sprite: "image/spr/019MS.png",
            description: "Bites anything when it attacks. Small and very quick, it is a common sight in many places."
        },
        {
            base: {
                attack: 81,
                defense: 60,
                hp: 55,
                spAtk: 50,
                spDef: 70,
                speed: 97
            },
            name: "Raticate",
            id: "020",
            type: [
                "Normal"
            ],
            image: "image/img/020Raticate.png",
            sprite: "image/spr/020MS.png",
            description: "It uses its whiskers to maintain its balance. It apparently slows down if they are cut off."
        },
        {
            base: {
                attack: 60,
                defense: 30,
                hp: 40,
                spAtk: 31,
                spDef: 31,
                speed: 70
            },
            name: "Spearow",
            id: "021",
            type: [
                "Normal",
                "Flying"
            ],
            image: "image/img/021Spearow.png",
            sprite: "image/spr/021MS.png",
            description: "Eats bugs in grassy areas. It has to flap its short wings at high speed to stay airborne."
        },
        {
            base: {
                attack: 90,
                defense: 65,
                hp: 65,
                spAtk: 61,
                spDef: 61,
                speed: 100
            },
            name: "Fearow",
            id: "022",
            type: [
                "Normal",
                "Flying"
            ],
            image: "image/img/022Fearow.png",
            sprite: "image/spr/022MS.png",
            description: "With its huge and magnificent wings, it can keep aloft without ever having to land for rest."
        },
        {
            base: {
                attack: 60,
                defense: 44,
                hp: 35,
                spAtk: 40,
                spDef: 54,
                speed: 55
            },
            name: "Ekans",
            id: "023",
            type: [
                "Poison"
            ],
            image: "image/img/023Ekans.png",
            sprite: "image/spr/023MS.png",
            description: "Moves silently and stealthily. Eats the eggs of birds, such as Pidgey and Spearow, whole."
        },
        {
            base: {
                attack: 85,
                defense: 69,
                hp: 60,
                spAtk: 65,
                spDef: 79,
                speed: 80
            },
            name: "Arbok",
            id: "024",
            type: [
                "Poison"
            ],
            image: "image/img/024Arbok.png",
            sprite: "image/spr/024MS.png",
            description: "It is rumored that the ferocious warning markings on its belly differ from area to area."
        },
        {
            base: {
                attack: 55,
                defense: 40,
                hp: 35,
                spAtk: 50,
                spDef: 50,
                speed: 90
            },
            name: "Pikachu",
            id: "025",
            type: [
                "Electric"
            ],
            image: "image/img/025Pikachu.png",
            sprite: "image/spr/025MS.png",
            description: "When several of these Pokémon gather, their electricity could build and cause lightning storms."
        },
        {
            base: {
                attack: 90,
                defense: 55,
                hp: 60,
                spAtk: 90,
                spDef: 80,
                speed: 110
            },
            name: "Raichu",
            id: "026",
            type: [
                "Electric"
            ],
            image: "image/img/026Raichu.png",
            sprite: "image/spr/026MS.png",
            description: "Its long tail serves as a ground to protect itself from its own high voltage power."
        },
        {
            base: {
                attack: 75,
                defense: 85,
                hp: 50,
                spAtk: 20,
                spDef: 30,
                speed: 40
            },
            name: "Sandshrew",
            id: "027",
            type: [
                "Ground"
            ],
            image: "image/img/027Sandshrew.png",
            sprite: "image/spr/027MS.png",
            description: "Burrows deep underground in arid locations far from water. It only emerges to hunt for food."
        },
        {
            base: {
                attack: 100,
                defense: 110,
                hp: 75,
                spAtk: 45,
                spDef: 55,
                speed: 65
            },
            name: "Sandslash",
            id: "028",
            type: [
                "Ground"
            ],
            image: "image/img/028Sandslash.png",
            sprite: "image/spr/028MS.png",
            description: "Curls up into a spiny ball when threatened. It can roll while curled up to attack or escape."
        },
        {
            base: {
                attack: 47,
                defense: 52,
                hp: 55,
                spAtk: 40,
                spDef: 40,
                speed: 41
            },
            name: "Nidoran\u2640",
            id: "029",
            type: [
                "Poison"
            ],
            image: "image/img/029Nidoran.png",
            sprite: "image/spr/029MS.png",
            description: "Although small, its venomous barbs render this Pokémon dangerous. The female has smaller horns."
        },
        {
            base: {
                attack: 62,
                defense: 67,
                hp: 70,
                spAtk: 55,
                spDef: 55,
                speed: 56
            },
            name: "Nidorina",
            id: "030",
            type: [
                "Poison"
            ],
            image: "image/img/030Nidorina.png",
            sprite: "image/spr/030MS.png",
            description: "The female's horn develops slowly. Prefers physical attacks such as clawing and biting."
        },
        {
            base: {
                attack: 92,
                defense: 87,
                hp: 90,
                spAtk: 75,
                spDef: 85,
                speed: 76
            },
            name: "Nidoqueen",
            id: "031",
            type: [
                "Poison",
                "Ground"
            ],
            image: "image/img/031Nidoqueen.png",
            sprite: "image/spr/031MS.png",
            description: "Its hard scales provide strong protection. It uses its hefty bulk to execute powerful moves."
        },
        {
            base: {
                attack: 57,
                defense: 40,
                hp: 46,
                spAtk: 40,
                spDef: 40,
                speed: 50
            },
            name: "Nidoran\u2642",
            id: "032",
            type: [
                "Poison"
            ],
            image: "image/img/032Nidoran.png",
            sprite: "image/spr/032MS.png",
            description: "Stiffens its ears to sense danger. The larger its horns, the more powerful its secreted venom."
        },
        {
            base: {
                attack: 72,
                defense: 57,
                hp: 61,
                spAtk: 55,
                spDef: 55,
                speed: 65
            },
            name: "Nidorino",
            id: "033",
            type: [
                "Poison"
            ],
            image: "image/img/033Nidorino.png",
            sprite: "image/spr/033MS.png",
            description: "An aggressive Pokémon that is quick to attack. The horn on its head secretes a powerful venom."
        },
        {
            base: {
                attack: 102,
                defense: 77,
                hp: 81,
                spAtk: 85,
                spDef: 75,
                speed: 85
            },
            name: "Nidoking",
            id: "034",
            type: [
                "Poison",
                "Ground"
            ],
            image: "image/img/034Nidoking.png",
            sprite: "image/spr/034MS.png",
            description: "It uses its powerful tail in battle to smash, constrict, then break the prey's bones."
        },
        {
            base: {
                attack: 45,
                defense: 48,
                hp: 70,
                spAtk: 60,
                spDef: 65,
                speed: 35
            },
            name: "Clefairy",
            id: "035",
            type: [
                "Fairy"
            ],
            image: "image/img/035Clefairy.png",
            sprite: "image/spr/035MS.png",
            description: "Its magical and cute appeal has many admirers. It is rare and found only in certain areas."
        },
        {
            base: {
                attack: 70,
                defense: 73,
                hp: 95,
                spAtk: 95,
                spDef: 90,
                speed: 60
            },
            name: "Clefable",
            id: "036",
            type: [
                "Fairy"
            ],
            image: "image/img/036Clefable.png",
            sprite: "image/spr/036MS.png",
            description: "A timid fairy Pokémon that is rarely seen. It will run and hide the moment it senses people."
        },
        {
            base: {
                attack: 41,
                defense: 40,
                hp: 38,
                spAtk: 50,
                spDef: 65,
                speed: 65
            },
            name: "Vulpix",
            id: "037",
            type: [
                "Fire"
            ],
            image: "image/img/037Vulpix.png",
            sprite: "image/spr/037MS.png",
            description: "At the time of birth, it has just one tail. The tail splits from its tip as it grows older."
        },
        {
            base: {
                attack: 76,
                defense: 75,
                hp: 73,
                spAtk: 81,
                spDef: 100,
                speed: 100
            },
            name: "Ninetales",
            id: "038",
            type: [
                "Fire"
            ],
            image: "image/img/038Ninetales.png",
            sprite: "image/spr/038MS.png",
            description: "Very smart and very vengeful. Grabbing one of its many tails could result in a 1000-year curse."
        },
        {
            base: {
                attack: 45,
                defense: 20,
                hp: 115,
                spAtk: 45,
                spDef: 25,
                speed: 20
            },
            name: "Jigglypuff",
            id: "039",
            type: [
                "Normal",
                "Fairy"
            ],
            image: "image/img/039Jigglypuff.png",
            sprite: "image/spr/039MS.png",
            description: "When its huge eyes light up, it sings a mysteriously soothing melody that lulls its enemies to sleep."
        },
        {
            base: {
                attack: 70,
                defense: 45,
                hp: 140,
                spAtk: 85,
                spDef: 50,
                speed: 45
            },
            name: "Wigglytuff",
            id: "040",
            type: [
                "Normal",
                "Fairy"
            ],
            image: "image/img/040Wigglytuff.png",
            sprite: "image/spr/040MS.png",
            description: "The body is soft and rubbery. When angered, it will suck in air and inflate itself to an enormous size."
        },
        {
            base: {
                attack: 45,
                defense: 35,
                hp: 40,
                spAtk: 30,
                spDef: 40,
                speed: 55
            },
            name: "Zubat",
            id: "041",
            type: [
                "Poison",
                "Flying"
            ],
            image: "image/img/041Zubat.png",
            sprite: "image/spr/041MS.png",
            description: "Forms colonies in perpetually dark places. Uses ultrasonic waves to identify and approach targets."
        },
        {
            base: {
                attack: 80,
                defense: 70,
                hp: 75,
                spAtk: 65,
                spDef: 75,
                speed: 90
            },
            name: "Golbat",
            id: "042",
            type: [
                "Poison",
                "Flying"
            ],
            image: "image/img/042Golbat.png",
            sprite: "image/spr/042MS.png",
            description: "Once it strikes, it will not stop draining energy from the victim even if it gets too heavy to fly."
        },
        {
            base: {
                attack: 50,
                defense: 55,
                hp: 45,
                spAtk: 75,
                spDef: 65,
                speed: 30
            },
            name: "Oddish",
            id: "043",
            type: [
                "Grass",
                "Poison"
            ],
            image: "image/img/043Oddish.png",
            sprite: "image/spr/043MS.png",
            description: "During the day, it keeps its face buried in the ground. At night, it wanders around sowing its seeds."
        },
        {
            base: {
                attack: 65,
                defense: 70,
                hp: 60,
                spAtk: 85,
                spDef: 75,
                speed: 40
            },
            name: "Gloom",
            id: "044",
            type: [
                "Grass",
                "Poison"
            ],
            image: "image/img/044Gloom.png",
            sprite: "image/spr/044MS.png",
            description: "The fluid that oozes from its mouth isn't drool. It is a nectar that is used to attract prey."
        },
        {
            base: {
                attack: 80,
                defense: 85,
                hp: 75,
                spAtk: 110,
                spDef: 90,
                speed: 50
            },
            name: "Vileplume",
            id: "045",
            type: [
                "Grass",
                "Poison"
            ],
            image: "image/img/045Vileplume.png",
            sprite: "image/spr/045MS.png",
            description: "The larger its petals, the more toxic pollen it contains. Its big head is heavy and hard to hold up."
        },
        {
            base: {
                attack: 70,
                defense: 55,
                hp: 35,
                spAtk: 45,
                spDef: 55,
                speed: 25
            },
            name: "Paras",
            id: "046",
            type: [
                "Bug",
                "Grass"
            ],
            image: "image/img/046Paras.png",
            sprite: "image/spr/046MS.png",
            description: "Burrows to suck tree roots. The mushrooms on its back grow by drawing nutrients from the bug host."
        },
        {
            base: {
                attack: 95,
                defense: 80,
                hp: 60,
                spAtk: 60,
                spDef: 80,
                speed: 30
            },
            name: "Parasect",
            id: "047",
            type: [
                "Bug",
                "Grass"
            ],
            image: "image/img/047Parasect.png",
            sprite: "image/spr/047MS.png",
            description: "A host-parasite pair in which the parasite mushroom has taken over the host bug. Prefers damp places."
        },
        {
            base: {
                attack: 55,
                defense: 50,
                hp: 60,
                spAtk: 40,
                spDef: 55,
                speed: 45
            },
            name: "Venonat",
            id: "048",
            type: [
                "Bug",
                "Poison"
            ],
            image: "image/img/048Venonat.png",
            sprite: "image/spr/048MS.png",
            description: "Lives in the shadows of tall trees where it eats insects. It is attracted by light at night."
        },
        {
            base: {
                attack: 65,
                defense: 60,
                hp: 70,
                spAtk: 90,
                spDef: 75,
                speed: 90
            },
            name: "Venomoth",
            id: "049",
            type: [
                "Bug",
                "Poison"
            ],
            image: "image/img/049Venomoth.png",
            sprite: "image/spr/049MS.png",
            description: "The dust-like scales covering its wings are color coded to indicate the kinds of poison it has."
        },
        {
            base: {
                attack: 55,
                defense: 25,
                hp: 10,
                spAtk: 35,
                spDef: 45,
                speed: 95
            },
            name: "Diglett",
            id: "050",
            type: [
                "Ground"
            ],
            image: "image/img/050Diglett.png",
            sprite: "image/spr/050MS.png",
            description: "Lives about one yard underground where it feeds on plant roots. It sometimes appears above ground."
        },
        {
            base: {
                attack: 80,
                defense: 50,
                hp: 35,
                spAtk: 50,
                spDef: 70,
                speed: 120
            },
            name: "Dugtrio",
            id: "051",
            type: [
                "Ground"
            ],
            image: "image/img/051Dugtrio.png",
            sprite: "image/spr/051MS.png",
            description: "A team of Diglett triplets. It triggers huge earthquakes by burrowing 60 miles underground."
        },
        {
            base: {
                attack: 45,
                defense: 35,
                hp: 40,
                spAtk: 40,
                spDef: 40,
                speed: 90
            },
            name: "Meowth",
            id: "052",
            type: [
                "Normal"
            ],
            image: "image/img/052Meowth.png",
            sprite: "image/spr/052MS.png",
            description: "Adores circular objects. Wanders the streets on a nightly basis to look for dropped loose change."
        },
        {
            base: {
                attack: 70,
                defense: 60,
                hp: 65,
                spAtk: 65,
                spDef: 65,
                speed: 115
            },
            name: "Persian",
            id: "053",
            type: [
                "Normal"
            ],
            image: "image/img/053Persian.png",
            sprite: "image/spr/053MS.png",
            description: "Although its fur has many admirers, it is tough to raise as a pet because of its fickle meanness."
        },
        {
            base: {
                attack: 52,
                defense: 48,
                hp: 50,
                spAtk: 65,
                spDef: 50,
                speed: 55
            },
            name: "Psyduck",
            id: "054",
            type: [
                "Water"
            ],
            image: "image/img/054Psyduck.png",
            sprite: "image/spr/054MS.png",
            description: "While lulling its enemies with its vacant look, this wily Pokémon will use psychokinetic powers."
        },
        {
            base: {
                attack: 82,
                defense: 78,
                hp: 80,
                spAtk: 95,
                spDef: 80,
                speed: 85
            },
            name: "Golduck",
            id: "055",
            type: [
                "Water"
            ],
            image: "image/img/055Golduck.png",
            sprite: "image/spr/055MS.png",
            description: "Often seen swimming elegantly by lake shores. It is often mistaken for the Japanese monster, Kappa."
        },
        {
            base: {
                attack: 80,
                defense: 35,
                hp: 40,
                spAtk: 35,
                spDef: 45,
                speed: 70
            },
            name: "Mankey",
            id: "056",
            type: [
                "Fighting"
            ],
            image: "image/img/056Mankey.png",
            sprite: "image/spr/056MS.png",
            description: "Extremely quick to anger. It could be docile one moment then thrashing away the next instant."
        },
        {
            base: {
                attack: 105,
                defense: 60,
                hp: 65,
                spAtk: 60,
                spDef: 70,
                speed: 95
            },
            name: "Primeape",
            id: "057",
            type: [
                "Fighting"
            ],
            image: "image/img/057Primeape.png",
            sprite: "image/spr/057MS.png",
            description: "Always furious and tenacious to boot. It will not abandon chasing its quarry until it is caught."
        },
        {
            base: {
                attack: 70,
                defense: 45,
                hp: 55,
                spAtk: 70,
                spDef: 50,
                speed: 60
            },
            name: "Growlithe",
            id: "058",
            type: [
                "Fire"
            ],
            image: "image/img/058Growlithe.png",
            sprite: "image/spr/058MS.png",
            description: "Very protective of its territory. It will bark and bite to repel intruders from its space."
        },
        {
            base: {
                attack: 110,
                defense: 80,
                hp: 90,
                spAtk: 100,
                spDef: 80,
                speed: 95
            },
            name: "Arcanine",
            id: "059",
            type: [
                "Fire"
            ],
            image: "image/img/059Arcanine.png",
            sprite: "image/spr/059MS.png",
            description: "A Pokémon that has been admired since the past for its beauty. It runs agilely as if on wings."
        },
        {
            base: {
                attack: 50,
                defense: 40,
                hp: 40,
                spAtk: 40,
                spDef: 40,
                speed: 90
            },
            name: "Poliwag",
            id: "060",
            type: [
                "Water"
            ],
            image: "image/img/060Poliwag.png",
            sprite: "image/spr/060MS.png",
            description: "Its newly grown legs prevent it from running. It appears to prefer swimming than trying to stand."
        },
        {
            base: {
                attack: 65,
                defense: 65,
                hp: 65,
                spAtk: 50,
                spDef: 50,
                speed: 90
            },
            name: "Poliwhirl",
            id: "061",
            type: [
                "Water"
            ],
            image: "image/img/061Poliwhirl.png",
            sprite: "image/spr/061MS.png",
            description: "Capable of living in or out of water. When out of water, it sweats to keep its body slimy."
        },
        {
            base: {
                attack: 95,
                defense: 95,
                hp: 90,
                spAtk: 70,
                spDef: 90,
                speed: 70
            },
            name: "Poliwrath",
            id: "062",
            type: [
                "Water",
                "Fighting"
            ],
            image: "image/img/062Poliwrath.png",
            sprite: "image/spr/062MS.png",
            description: "An adept swimmer at both the front crawl and breast stroke. Easily overtakes the best human swimmers."
        },
        {
            base: {
                attack: 20,
                defense: 15,
                hp: 25,
                spAtk: 105,
                spDef: 55,
                speed: 90
            },
            name: "Abra",
            id: "063",
            type: [
                "Psychic"
            ],
            image: "image/img/063Abra.png",
            sprite: "image/spr/063MS.png",
            description: "Using its ability to read minds, it will identify impending danger and Teleport to safety."
        },
        {
            base: {
                attack: 35,
                defense: 30,
                hp: 40,
                spAtk: 120,
                spDef: 70,
                speed: 105
            },
            name: "Kadabra",
            id: "064",
            type: [
                "Psychic"
            ],
            image: "image/img/064Kadabra.png",
            sprite: "image/spr/064MS.png",
            description: "It emits special alpha waves from its body that induce headaches just by being close by."
        },
        {
            base: {
                attack: 50,
                defense: 45,
                hp: 55,
                spAtk: 135,
                spDef: 95,
                speed: 120
            },
            name: "Alakazam",
            id: "065",
            type: [
                "Psychic"
            ],
            image: "image/img/065Alakazam.png",
            sprite: "image/spr/065MS.png",
            description: "Its brain can outperform a super-computer. Its intelligence quotient is said to be 5,000."
        },
        {
            base: {
                attack: 80,
                defense: 50,
                hp: 70,
                spAtk: 35,
                spDef: 35,
                speed: 35
            },
            name: "Machop",
            id: "066",
            type: [
                "Fighting"
            ],
            image: "image/img/066Machop.png",
            sprite: "image/spr/066MS.png",
            description: "Loves to build its muscles. It trains in all styles of martial arts to become even stronger."
        },
        {
            base: {
                attack: 100,
                defense: 70,
                hp: 80,
                spAtk: 50,
                spDef: 60,
                speed: 45
            },
            name: "Machoke",
            id: "067",
            type: [
                "Fighting"
            ],
            image: "image/img/067Machoke.png",
            sprite: "image/spr/067MS.png",
            description: "Its muscular body is so powerful, it must wear a power save belt to be able to regulate its motions."
        },
        {
            base: {
                attack: 130,
                defense: 80,
                hp: 90,
                spAtk: 65,
                spDef: 85,
                speed: 55
            },
            name: "Machamp",
            id: "068",
            type: [
                "Fighting"
            ],
            image: "image/img/068Machamp.png",
            sprite: "image/spr/068MS.png",
            description: "Using its heavy muscles, it throws powerful punches that can send the victim clear over the horizon."
        },
        {
            base: {
                attack: 75,
                defense: 35,
                hp: 50,
                spAtk: 70,
                spDef: 30,
                speed: 40
            },
            name: "Bellsprout",
            id: "069",
            type: [
                "Grass",
                "Poison"
            ],
            image: "image/img/069Bellsprout.png",
            sprite: "image/spr/069MS.png",
            description: "A carnivorous Pokémon that traps and eats bugs. It uses its root feet to soak up needed moisture."
        },
        {
            base: {
                attack: 90,
                defense: 50,
                hp: 65,
                spAtk: 85,
                spDef: 45,
                speed: 55
            },
            name: "Weepinbell",
            id: "070",
            type: [
                "Grass",
                "Poison"
            ],
            image: "image/img/070Weepinbell.png",
            sprite: "image/spr/070MS.png",
            description: "It spits out PoisonPowder to immobilize the enemy and then finishes it with a spray of Acid."
        },
        {
            base: {
                attack: 105,
                defense: 65,
                hp: 80,
                spAtk: 100,
                spDef: 70,
                speed: 70
            },
            name: "Victreebel",
            id: "071",
            type: [
                "Grass",
                "Poison"
            ],
            image: "image/img/071Victreebel.png",
            sprite: "image/spr/071MS.png",
            description: "Said to live in huge colonies deep in jungles, although no one has ever returned from there."
        },
        {
            base: {
                attack: 40,
                defense: 35,
                hp: 40,
                spAtk: 50,
                spDef: 100,
                speed: 70
            },
            name: "Tentacool",
            id: "072",
            type: [
                "Water",
                "Poison"
            ],
            image: "image/img/072Tentacool.png",
            sprite: "image/spr/072MS.png",
            description: "Drifts in shallow seas. Anglers who hook them by accident are often punished by its stinging acid."
        },
        {
            base: {
                attack: 70,
                defense: 65,
                hp: 80,
                spAtk: 80,
                spDef: 120,
                speed: 100
            },
            name: "Tentacruel",
            id: "073",
            type: [
                "Water",
                "Poison"
            ],
            image: "image/img/073Tentacruel.png",
            sprite: "image/spr/073MS.png",
            description: "The tentacles are normally kept short. On hunts, they are extended to ensnare and immobilize prey."
        },
        {
            base: {
                attack: 80,
                defense: 100,
                hp: 40,
                spAtk: 30,
                spDef: 30,
                speed: 20
            },
            name: "Geodude",
            id: "074",
            type: [
                "Rock",
                "Ground"
            ],
            image: "image/img/074Geodude.png",
            sprite: "image/spr/074MS.png",
            description: "Found in fields and mountains. Mistaking them for boulders, people often step or trip on them."
        },
        {
            base: {
                attack: 95,
                defense: 115,
                hp: 55,
                spAtk: 45,
                spDef: 45,
                speed: 35
            },
            name: "Graveler",
            id: "075",
            type: [
                "Rock",
                "Ground"
            ],
            image: "image/img/075Graveler.png",
            sprite: "image/spr/075MS.png",
            description: "Rolls down slopes to move. It rolls over any obstacle without slowing or changing its direction."
        },
        {
            base: {
                attack: 120,
                defense: 130,
                hp: 80,
                spAtk: 55,
                spDef: 65,
                speed: 45
            },
            name: "Golem",
            id: "076",
            type: [
                "Rock",
                "Ground"
            ],
            image: "image/img/076Golem.png",
            sprite: "image/spr/076MS.png",
            description: "Its boulder-like body is extremely hard. It can easily withstand dynamite blasts without damage."
        },
        {
            base: {
                attack: 85,
                defense: 55,
                hp: 50,
                spAtk: 65,
                spDef: 65,
                speed: 90
            },
            name: "Ponyta",
            id: "077",
            type: [
                "Fire"
            ],
            image: "image/img/077Ponyta.png",
            sprite: "image/spr/077MS.png",
            description: "Its hooves are 10 times harder than diamonds. It can trample anything completely flat in little time."
        },
        {
            base: {
                attack: 100,
                defense: 70,
                hp: 65,
                spAtk: 80,
                spDef: 80,
                speed: 105
            },
            name: "Rapidash",
            id: "078",
            type: [
                "Fire"
            ],
            image: "image/img/078Rapidash.png",
            sprite: "image/spr/078MS.png",
            description: "Very competitive, this Pokémon will chase anything that moves fast in the hopes of racing it."
        },
        {
            base: {
                attack: 65,
                defense: 65,
                hp: 90,
                spAtk: 40,
                spDef: 40,
                speed: 15
            },
            name: "Slowpoke",
            id: "079",
            type: [
                "Water",
                "Psychic"
            ],
            image: "image/img/079Slowpoke.png",
            sprite: "image/spr/079MS.png",
            description: "Incredibly slow and dopey. It takes 5 seconds for it to feel pain when under attack."
        },
        {
            base: {
                attack: 75,
                defense: 110,
                hp: 95,
                spAtk: 100,
                spDef: 80,
                speed: 30
            },
            name: "Slowbro",
            id: "080",
            type: [
                "Water",
                "Psychic"
            ],
            image: "image/img/080Slowbro.png",
            sprite: "image/spr/080MS.png",
            description: "The Shellder that is latched onto Slowpoke's tail is said to feed on the host's left over scraps."
        },
        {
            base: {
                attack: 35,
                defense: 70,
                hp: 25,
                spAtk: 95,
                spDef: 55,
                speed: 45
            },
            name: "Magnemite",
            id: "081",
            type: [
                "Electric",
                "Steel"
            ],
            image: "image/img/081Magnemite.png",
            sprite: "image/spr/081MS.png",
            description: "Uses anti-gravity to stay suspended. Appears without warning and uses Thunder Wave and similar moves."
        },
        {
            base: {
                attack: 60,
                defense: 95,
                hp: 50,
                spAtk: 120,
                spDef: 70,
                speed: 70
            },
            name: "Magneton",
            id: "082",
            type: [
                "Electric",
                "Steel"
            ],
            image: "image/img/082Magneton.png",
            sprite: "image/spr/082MS.png",
            description: "Formed by several Magnemites linked together. They frequently appear when sunspots flare up."
        },
        {
            base: {
                attack: 65,
                defense: 55,
                hp: 52,
                spAtk: 58,
                spDef: 62,
                speed: 60
            },
            name: "Farfetch'd",
            id: "083",
            type: [
                "Normal",
                "Flying"
            ],
            image: "image/img/083Farfetchd.png",
            sprite: "image/spr/083MS.png",
            description: "The sprig of green onions it holds is its weapon. It is used much like a metal sword."
        },
        {
            base: {
                attack: 85,
                defense: 45,
                hp: 35,
                spAtk: 35,
                spDef: 35,
                speed: 75
            },
            name: "Doduo",
            id: "084",
            type: [
                "Normal",
                "Flying"
            ],
            image: "image/img/084Doduo.png",
            sprite: "image/spr/084MS.png",
            description: "A bird that makes up for its poor flying with its fast foot speed. Leaves giant footprints."
        },
        {
            base: {
                attack: 110,
                defense: 70,
                hp: 60,
                spAtk: 60,
                spDef: 60,
                speed: 100
            },
            name: "Dodrio",
            id: "085",
            type: [
                "Normal",
                "Flying"
            ],
            image: "image/img/085Dodrio.png",
            sprite: "image/spr/085MS.png",
            description: "Uses its three brains to execute complex plans. While two heads sleep, one head stays awake."
        },
        {
            base: {
                attack: 45,
                defense: 55,
                hp: 65,
                spAtk: 45,
                spDef: 70,
                speed: 45
            },
            name: "Seel",
            id: "086",
            type: [
                "Water"
            ],
            image: "image/img/086Seel.png",
            sprite: "image/spr/086MS.png",
            description: "The protruding horn on its head is very hard. It is used for bashing through thick ice."
        },
        {
            base: {
                attack: 70,
                defense: 80,
                hp: 90,
                spAtk: 70,
                spDef: 95,
                speed: 70
            },
            name: "Dewgong",
            id: "087",
            type: [
                "Water",
                "Ice"
            ],
            image: "image/img/087Dewgong.png",
            sprite: "image/spr/087MS.png",
            description: "Stores thermal energy in its body. Swims at a steady 8 knots even in intensely cold waters."
        },
        {
            base: {
                attack: 80,
                defense: 50,
                hp: 80,
                spAtk: 40,
                spDef: 50,
                speed: 25
            },
            name: "Grimer",
            id: "088",
            type: [
                "Poison"
            ],
            image: "image/img/088Grimer.png",
            sprite: "image/spr/088MS.png",
            description: "Appears in filthy areas. Thrives by sucking up polluted sludge that is pumped out of factories."
        },
        {
            base: {
                attack: 105,
                defense: 75,
                hp: 105,
                spAtk: 65,
                spDef: 100,
                speed: 50
            },
            name: "Muk",
            id: "089",
            type: [
                "Poison"
            ],
            image: "image/img/089Muk.png",
            sprite: "image/spr/089MS.png",
            description: "Thickly covered with a filthy, vile sludge. It is so toxic, even its footprints contain poison."
        },
        {
            base: {
                attack: 65,
                defense: 100,
                hp: 30,
                spAtk: 45,
                spDef: 25,
                speed: 40
            },
            name: "Shellder",
            id: "090",
            type: [
                "Water"
            ],
            image: "image/img/090Shellder.png",
            sprite: "image/spr/090MS.png",
            description: "Its hard shell repels any kind of attack. It is vulnerable only when its shell is open."
        },
        {
            base: {
                attack: 95,
                defense: 180,
                hp: 50,
                spAtk: 85,
                spDef: 45,
                speed: 70
            },
            name: "Cloyster",
            id: "091",
            type: [
                "Water",
                "Ice"
            ],
            image: "image/img/091Cloyster.png",
            sprite: "image/spr/091MS.png",
            description: "When attacked, it launches its horns in quick volleys. Its innards have never been seen."
        },
        {
            base: {
                attack: 35,
                defense: 30,
                hp: 30,
                spAtk: 100,
                spDef: 35,
                speed: 80
            },
            name: "Gastly",
            id: "092",
            type: [
                "Ghost",
                "Poison"
            ],
            image: "image/img/092Gastly.png",
            sprite: "image/spr/092MS.png",
            description: "Almost invisible, this gaseous Pokémon cloaks the target and puts it to sleep without notice."
        },
        {
            base: {
                attack: 50,
                defense: 45,
                hp: 45,
                spAtk: 115,
                spDef: 55,
                speed: 95
            },
            name: "Haunter",
            id: "093",
            type: [
                "Ghost",
                "Poison"
            ],
            image: "image/img/093Haunter.png",
            sprite: "image/spr/093MS.png",
            description: "Because of its ability to slip through block walls, it is said to be from another dimension."
        },
        {
            base: {
                attack: 65,
                defense: 60,
                hp: 60,
                spAtk: 130,
                spDef: 75,
                speed: 110
            },
            name: "Gengar",
            id: "094",
            type: [
                "Ghost",
                "Poison"
            ],
            image: "image/img/094Gengar.png",
            sprite: "image/spr/094MS.png",
            description: "Under a full moon, this Pokémon likes to mimic the shadows of people and laugh at their fright."
        },
        {
            base: {
                attack: 45,
                defense: 160,
                hp: 35,
                spAtk: 30,
                spDef: 45,
                speed: 70
            },
            name: "Onix",
            id: "095",
            type: [
                "Rock",
                "Ground"
            ],
            image: "image/img/095Onix.png",
            sprite: "image/spr/095MS.png",
            description: "As it grows, the stone portions of its body harden to become similar to a diamond, but colored black."
        },
        {
            base: {
                attack: 48,
                defense: 45,
                hp: 60,
                spAtk: 43,
                spDef: 90,
                speed: 42
            },
            name: "Drowzee",
            id: "096",
            type: [
                "Psychic"
            ],
            image: "image/img/096Drowzee.png",
            sprite: "image/spr/096MS.png",
            description: "Puts enemies to sleep then eats their dreams. Occasionally gets sick from eating bad dreams."
        },
        {
            base: {
                attack: 73,
                defense: 70,
                hp: 85,
                spAtk: 73,
                spDef: 115,
                speed: 67
            },
            name: "Hypno",
            id: "097",
            type: [
                "Psychic"
            ],
            image: "image/img/097Hypno.png",
            sprite: "image/spr/097MS.png",
            description: "When it locks eyes with an enemy, it will use a mix of PSI moves such as Hypnosis and Confusion."
        },
        {
            base: {
                attack: 105,
                defense: 90,
                hp: 30,
                spAtk: 25,
                spDef: 25,
                speed: 50
            },
            name: "Krabby",
            id: "098",
            type: [
                "Water"
            ],
            image: "image/img/098Krabby.png",
            sprite: "image/spr/098MS.png",
            description: "Its pincers are not only powerful weapons, they are used for balance when walking sideways."
        },
        {
            base: {
                attack: 130,
                defense: 115,
                hp: 55,
                spAtk: 50,
                spDef: 50,
                speed: 75
            },
            name: "Kingler",
            id: "099",
            type: [
                "Water"
            ],
            image: "image/img/099Kingler.png",
            sprite: "image/spr/099MS.png",
            description: "The large pincer has 10000 hp of crushing power. However, its huge size makes it unwieldy to use."
        },
        {
            base: {
                attack: 30,
                defense: 50,
                hp: 40,
                spAtk: 55,
                spDef: 55,
                speed: 100
            },
            name: "Voltorb",
            id: "100",
            type: [
                "Electric"
            ],
            image: "image/img/100Voltorb.png",
            sprite: "image/spr/100MS.png",
            description: "Usually found in power plants. Easily mistaken for a Poké Ball, they have zapped many people."
        },
        {
            base: {
                attack: 50,
                defense: 70,
                hp: 60,
                spAtk: 80,
                spDef: 80,
                speed: 140
            },
            name: "Electrode",
            id: "101",
            type: [
                "Electric"
            ],
            image: "image/img/101Electrode.png",
            sprite: "image/spr/101MS.png",
            description: "It stores electric energy under very high pressure. It often explodes with little or no provocation."
        },
        {
            base: {
                attack: 40,
                defense: 80,
                hp: 60,
                spAtk: 60,
                spDef: 45,
                speed: 40
            },
            name: "Exeggcute",
            id: "102",
            type: [
                "Grass",
                "Psychic"
            ],
            image: "image/img/102Exeggcute.png",
            sprite: "image/spr/102MS.png",
            description: "Often mistaken for eggs. When disturbed, they quickly gather and attack in swarms."
        },
        {
            base: {
                attack: 95,
                defense: 85,
                hp: 95,
                spAtk: 125,
                spDef: 65,
                speed: 55
            },
            name: "Exeggutor",
            id: "103",
            type: [
                "Grass",
                "Psychic"
            ],
            image: "image/img/103Exeggutor.png",
            sprite: "image/spr/103MS.png",
            description: "Legend has it that on rare occasions, one of its heads will drop off and continue on as an Exeggcute."
        },
        {
            base: {
                attack: 50,
                defense: 95,
                hp: 50,
                spAtk: 40,
                spDef: 50,
                speed: 35
            },
            name: "Cubone",
            id: "104",
            type: [
                "Ground"
            ],
            image: "image/img/104Cubone.png",
            sprite: "image/spr/104MS.png",
            description: "Because it never removes its skull helmet, no one has ever seen this Pokémon's real face."
        },
        {
            base: {
                attack: 80,
                defense: 110,
                hp: 60,
                spAtk: 50,
                spDef: 80,
                speed: 45
            },
            name: "Marowak",
            id: "105",
            type: [
                "Ground"
            ],
            image: "image/img/105Marowak.png",
            sprite: "image/spr/105MS.png",
            description: "The bone it holds is its key weapon. It throws the bone skillfully like a boomerang to KO targets."
        },
        {
            base: {
                attack: 120,
                defense: 53,
                hp: 50,
                spAtk: 35,
                spDef: 110,
                speed: 87
            },
            name: "Hitmonlee",
            id: "106",
            type: [
                "Fighting"
            ],
            image: "image/img/106Hitmonlee.png",
            sprite: "image/spr/106MS.png",
            description: "When in a hurry, its legs lengthen progressively. It runs smoothly with extra long, loping strides."
        },
        {
            base: {
                attack: 105,
                defense: 79,
                hp: 50,
                spAtk: 35,
                spDef: 110,
                speed: 76
            },
            name: "Hitmonchan",
            id: "107",
            type: [
                "Fighting"
            ],
            image: "image/img/107Hitmonchan.png",
            sprite: "image/spr/107MS.png",
            description: "While apparently doing nothing, it fires punches in lightning fast volleys that are impossible to see."
        },
        {
            base: {
                attack: 55,
                defense: 75,
                hp: 90,
                spAtk: 60,
                spDef: 75,
                speed: 30
            },
            name: "Lickitung",
            id: "108",
            type: [
                "Normal"
            ],
            image: "image/img/108Lickitung.png",
            sprite: "image/spr/108MS.png",
            description: "Its tongue can be extended like a chameleon's. It leaves a tingling sensation when it licks enemies."
        },
        {
            base: {
                attack: 65,
                defense: 95,
                hp: 40,
                spAtk: 60,
                spDef: 45,
                speed: 35
            },
            name: "Koffing",
            id: "109",
            type: [
                "Poison"
            ],
            image: "image/img/109Koffing.png",
            sprite: "image/spr/109MS.png",
            description: "Because it stores several kinds of toxic gases in its body, it is prone to exploding without warning."
        },
        {
            base: {
                attack: 90,
                defense: 120,
                hp: 65,
                spAtk: 85,
                spDef: 70,
                speed: 60
            },
            name: "Weezing",
            id: "110",
            type: [
                "Poison"
            ],
            image: "image/img/110Weezing.png",
            sprite: "image/spr/110MS.png",
            description: "Where two kinds of poison gases meet, 2 Koffings can fuse into a Weezing over many years."
        },
        {
            base: {
                attack: 85,
                defense: 95,
                hp: 80,
                spAtk: 30,
                spDef: 30,
                speed: 25
            },
            name: "Rhyhorn",
            id: "111",
            type: [
                "Ground",
                "Rock"
            ],
            image: "image/img/111Rhyhorn.png",
            sprite: "image/spr/111MS.png",
            description: "Its massive bones are 1000 times harder than human bones. It can easily knock a trailer flying."
        },
        {
            base: {
                attack: 130,
                defense: 120,
                hp: 105,
                spAtk: 45,
                spDef: 45,
                speed: 40
            },
            name: "Rhydon",
            id: "112",
            type: [
                "Ground",
                "Rock"
            ],
            image: "image/img/112Rhydon.png",
            sprite: "image/spr/112MS.png",
            description: "Protected by an armor-like hide, it is capable of living in molten lava of 3,600 degrees."
        },
        {
            base: {
                attack: 5,
                defense: 5,
                hp: 250,
                spAtk: 35,
                spDef: 105,
                speed: 50
            },
            name: "Chansey",
            id: "113",
            type: [
                "Normal"
            ],
            image: "image/img/113Chansey.png",
            sprite: "image/spr/113MS.png",
            description: "A rare and elusive Pokémon that is said to bring happiness to those who manage to get it."
        },
        {
            base: {
                attack: 55,
                defense: 115,
                hp: 65,
                spAtk: 100,
                spDef: 40,
                speed: 60
            },
            name: "Tangela",
            id: "114",
            type: [
                "Grass"
            ],
            image: "image/img/114Tangela.png",
            sprite: "image/spr/114MS.png",
            description: "The whole body is swathed with wide vines that are similar to seaweed. Its vines shake as it walks."
        },
        {
            base: {
                attack: 95,
                defense: 80,
                hp: 105,
                spAtk: 40,
                spDef: 80,
                speed: 90
            },
            name: "Kangaskhan",
            id: "115",
            type: [
                "Normal"
            ],
            image: "image/img/115Kangaskhan.png",
            sprite: "image/spr/115MS.png",
            description: "The infant rarely ventures out of its mother's protective pouch until it is 3 years old."
        },
        {
            base: {
                attack: 40,
                defense: 70,
                hp: 30,
                spAtk: 70,
                spDef: 25,
                speed: 60
            },
            name: "Horsea",
            id: "116",
            type: [
                "Water"
            ],
            image: "image/img/116Horsea.png",
            sprite: "image/spr/116MS.png",
            description: "Known to shoot down flying bugs with precision blasts of ink from the surface of the water."
        },
        {
            base: {
                attack: 65,
                defense: 95,
                hp: 55,
                spAtk: 95,
                spDef: 45,
                speed: 85
            },
            name: "Seadra",
            id: "117",
            type: [
                "Water"
            ],
            image: "image/img/117Seadra.png",
            sprite: "image/spr/117MS.png",
            description: "Capable of swimming backwards by rapidly flapping its wing-like pectoral fins and stout tail."
        },
        {
            base: {
                attack: 67,
                defense: 60,
                hp: 45,
                spAtk: 35,
                spDef: 50,
                speed: 63
            },
            name: "Goldeen",
            id: "118",
            type: [
                "Water"
            ],
            image: "image/img/118Goldeen.png",
            sprite: "image/spr/118MS.png",
            description: "Its tail fin billows like an elegant ballroom dress, giving it the nickname of the Water Queen."
        },
        {
            base: {
                attack: 92,
                defense: 65,
                hp: 80,
                spAtk: 65,
                spDef: 80,
                speed: 68
            },
            name: "Seaking",
            id: "119",
            type: [
                "Water"
            ],
            image: "image/img/119Seaking.png",
            sprite: "image/spr/119MS.png",
            description: "In the autumn spawning season, they can be seen swimming powerfully up rivers and creeks."
        },
        {
            base: {
                attack: 45,
                defense: 55,
                hp: 30,
                spAtk: 70,
                spDef: 55,
                speed: 85
            },
            name: "Staryu",
            id: "120",
            type: [
                "Water"
            ],
            image: "image/img/120Staryu.png",
            sprite: "image/spr/120MS.png",
            description: "An enigmatic Pokémon that can effortlessly regenerate any appendage it loses in battle."
        },
        {
            base: {
                attack: 75,
                defense: 85,
                hp: 60,
                spAtk: 100,
                spDef: 85,
                speed: 115
            },
            name: "Starmie",
            id: "121",
            type: [
                "Water",
                "Psychic"
            ],
            image: "image/img/121Starmie.png",
            sprite: "image/spr/121MS.png",
            description: "Its central core glows with the seven colors of the rainbow. Some people value the core as a gem."
        },
        {
            base: {
                attack: 45,
                defense: 65,
                hp: 40,
                spAtk: 100,
                spDef: 120,
                speed: 90
            },
            name: "Mr. Mime",
            id: "122",
            type: [
                "Psychic",
                "Fairy"
            ],
            image: "image/img/122Mr_Mime.png",
            sprite: "image/spr/122MS.png",
            description: "If interrupted while it is miming, it will slap around the offender with its broad hands."
        },
        {
            base: {
                attack: 110,
                defense: 80,
                hp: 70,
                spAtk: 55,
                spDef: 80,
                speed: 105
            },
            name: "Scyther",
            id: "123",
            type: [
                "Bug",
                "Flying"
            ],
            image: "image/img/123Scyther.png",
            sprite: "image/spr/123MS.png",
            description: "With ninja-like agility and speed, it can create the illusion that there is more than one."
        },
        {
            base: {
                attack: 50,
                defense: 35,
                hp: 65,
                spAtk: 115,
                spDef: 95,
                speed: 95
            },
            name: "Jynx",
            id: "124",
            type: [
                "Ice",
                "Psychic"
            ],
            image: "image/img/124Jynx.png",
            sprite: "image/spr/124MS.png",
            description: "It seductively wiggles its hips as it walks. It can cause people to dance in unison with it."
        },
        {
            base: {
                attack: 83,
                defense: 57,
                hp: 65,
                spAtk: 95,
                spDef: 85,
                speed: 105
            },
            name: "Electabuzz",
            id: "125",
            type: [
                "Electric"
            ],
            image: "image/img/125Electabuzz.png",
            sprite: "image/spr/125MS.png",
            description: "Normally found near power plants, they can wander away and cause major blackouts in cities."
        },
        {
            base: {
                attack: 95,
                defense: 57,
                hp: 65,
                spAtk: 100,
                spDef: 85,
                speed: 93
            },
            name: "Magmar",
            id: "126",
            type: [
                "Fire"
            ],
            image: "image/img/126Magmar.png",
            sprite: "image/spr/126MS.png",
            description: "Its body always burns with an orange glow that enables it to hide perfectly among flames."
        },
        {
            base: {
                attack: 125,
                defense: 100,
                hp: 65,
                spAtk: 55,
                spDef: 70,
                speed: 85
            },
            name: "Pinsir",
            id: "127",
            type: [
                "Bug"
            ],
            image: "image/img/127Pinsir.png",
            sprite: "image/spr/127MS.png",
            description: "If it fails to crush the victim in its pincers, it will swing it around and toss it hard."
        },
        {
            base: {
                attack: 100,
                defense: 95,
                hp: 75,
                spAtk: 40,
                spDef: 70,
                speed: 110
            },
            name: "Tauros",
            id: "128",
            type: [
                "Normal"
            ],
            image: "image/img/128Tauros.png",
            sprite: "image/spr/128MS.png",
            description: "When it targets an enemy, it charges furiously while whipping its body with its long tails."
        },
        {
            base: {
                attack: 10,
                defense: 55,
                hp: 20,
                spAtk: 15,
                spDef: 20,
                speed: 80
            },
            name: "Magikarp",
            id: "129",
            type: [
                "Water"
            ],
            image: "image/img/129Magikarp.png",
            sprite: "image/spr/129MS.png",
            description: "In the distant past, it was somewhat stronger than the horribly weak descendants that exist today."
        },
        {
            base: {
                attack: 125,
                defense: 79,
                hp: 95,
                spAtk: 60,
                spDef: 100,
                speed: 81
            },
            name: "Gyarados",
            id: "130",
            type: [
                "Water",
                "Flying"
            ],
            image: "image/img/130Gyarados.png",
            sprite: "image/spr/130MS.png",
            description: "Rarely seen in the wild. Huge and vicious, it is capable of destroying entire cities in a rage."
        },
        {
            base: {
                attack: 85,
                defense: 80,
                hp: 130,
                spAtk: 85,
                spDef: 95,
                speed: 60
            },
            name: "Lapras",
            id: "131",
            type: [
                "Water",
                "Ice"
            ],
            image: "image/img/131Lapras.png",
            sprite: "image/spr/131MS.png",
            description: "A Pokémon that has been overhunted almost to extinction. It can ferry people across the water."
        },
        {
            base: {
                attack: 48,
                defense: 48,
                hp: 48,
                spAtk: 48,
                spDef: 48,
                speed: 48
            },
            name: "Ditto",
            id: "132",
            type: [
                "Normal"
            ],
            image: "image/img/132Ditto.png",
            sprite: "image/spr/132MS.png",
            description: "Capable of copying an enemy's genetic code to instantly transform itself into a duplicate of the enemy."
        },
        {
            base: {
                attack: 55,
                defense: 50,
                hp: 55,
                spAtk: 45,
                spDef: 65,
                speed: 55
            },
            name: "Eevee",
            id: "133",
            type: [
                "Normal"
            ],
            image: "image/img/133Eevee.png",
            sprite: "image/spr/133MS.png",
            description: "Its genetic code is irregular. It may mutate if it is exposed to radiation from element Stones."
        },
        {
            base: {
                attack: 65,
                defense: 60,
                hp: 130,
                spAtk: 110,
                spDef: 95,
                speed: 65
            },
            name: "Vaporeon",
            id: "134",
            type: [
                "Water"
            ],
            image: "image/img/134Vaporeon.png",
            sprite: "image/spr/134MS.png",
            description: "Lives close to water. Its long tail is ridged with a fin which is often mistaken for a mermaid's."
        },
        {
            base: {
                attack: 65,
                defense: 60,
                hp: 65,
                spAtk: 110,
                spDef: 95,
                speed: 130
            },
            name: "Jolteon",
            id: "135",
            type: [
                "Electric"
            ],
            image: "image/img/135Jolteon.png",
            sprite: "image/spr/135MS.png",
            description: "It accumulates negative ions in the atmosphere to blast out 10000-volt lightning bolts."
        },
        {
            base: {
                attack: 130,
                defense: 60,
                hp: 65,
                spAtk: 95,
                spDef: 110,
                speed: 65
            },
            name: "Flareon",
            id: "136",
            type: [
                "Fire"
            ],
            image: "image/img/136Flareon.png",
            sprite: "image/spr/136MS.png",
            description: "When storing thermal energy in its body, its temperature could soar to over 1600 degrees."
        },
        {
            base: {
                attack: 60,
                defense: 70,
                hp: 65,
                spAtk: 85,
                spDef: 75,
                speed: 40
            },
            name: "Porygon",
            id: "137",
            type: [
                "Normal"
            ],
            image: "image/img/137Porygon.png",
            sprite: "image/spr/137MS.png",
            description: "A Pokémon that consists entirely of programming code. Capable of moving freely in cyberspace."
        },
        {
            base: {
                attack: 40,
                defense: 100,
                hp: 35,
                spAtk: 90,
                spDef: 55,
                speed: 35
            },
            name: "Omanyte",
            id: "138",
            type: [
                "Rock",
                "Water"
            ],
            image: "image/img/138Omanyte.png",
            sprite: "image/spr/138MS.png",
            description: "Although long extinct, in rare cases, it can be genetically resurrected from fossils."
        },
        {
            base: {
                attack: 60,
                defense: 125,
                hp: 70,
                spAtk: 115,
                spDef: 70,
                speed: 55
            },
            name: "Omastar",
            id: "139",
            type: [
                "Rock",
                "Water"
            ],
            image: "image/img/139Omastar.png",
            sprite: "image/spr/139MS.png",
            description: "A prehistoric Pokémon that died out when its heavy shell made it impossible to catch prey."
        },
        {
            base: {
                attack: 80,
                defense: 90,
                hp: 30,
                spAtk: 55,
                spDef: 45,
                speed: 55
            },
            name: "Kabuto",
            id: "140",
            type: [
                "Rock",
                "Water"
            ],
            image: "image/img/140Kabuto.png",
            sprite: "image/spr/140MS.png",
            description: "A Pokémon that was resurrected from a fossil found in what was once the ocean floor eons ago."
        },
        {
            base: {
                attack: 115,
                defense: 105,
                hp: 60,
                spAtk: 65,
                spDef: 70,
                speed: 80
            },
            name: "Kabutops",
            id: "141",
            type: [
                "Rock",
                "Water"
            ],
            image: "image/img/141Kabutops.png",
            sprite: "image/spr/141MS.png",
            description: "Its sleek shape is perfect for swimming. It slashes prey with its claws and drains the body fluids."
        },
        {
            base: {
                attack: 105,
                defense: 65,
                hp: 80,
                spAtk: 60,
                spDef: 75,
                speed: 130
            },
            name: "Aerodactyl",
            id: "142",
            type: [
                "Rock",
                "Flying"
            ],
            image: "image/img/142Aerodactyl.png",
            sprite: "image/spr/142MS.png",
            description: "A ferocious, prehistoric Pokémon that goes for the enemy's throat with its serrated saw-like fangs."
        },
        {
            base: {
                attack: 110,
                defense: 65,
                hp: 160,
                spAtk: 65,
                spDef: 110,
                speed: 30
            },
            name: "Snorlax",
            id: "143",
            type: [
                "Normal"
            ],
            image: "image/img/143Snorlax.png",
            sprite: "image/spr/143MS.png",
            description: "Very lazy. Just eats and sleeps. As its rotund bulk builds, it becomes steadily more slothful."
        },
        {
            base: {
                attack: 85,
                defense: 100,
                hp: 90,
                spAtk: 95,
                spDef: 125,
                speed: 85
            },
            name: "Articuno",
            id: "144",
            type: [
                "Ice",
                "Flying"
            ],
            image: "image/img/144Articuno.png",
            sprite: "image/spr/144MS.png",
            description: "A legendary bird Pokémon that is said to appear to doomed people who are lost in icy mountains."
        },
        {
            base: {
                attack: 90,
                defense: 85,
                hp: 90,
                spAtk: 125,
                spDef: 90,
                speed: 100
            },
            name: "Zapdos",
            id: "145",
            type: [
                "Electric",
                "Flying"
            ],
            image: "image/img/145Zapdos.png",
            sprite: "image/spr/145MS.png",
            description: "A legendary bird Pokémon that is said to appear from clouds while dropping enormous lightning bolts."
        },
        {
            base: {
                attack: 100,
                defense: 90,
                hp: 90,
                spAtk: 125,
                spDef: 85,
                speed: 90
            },
            name: "Moltres",
            id: "146",
            type: [
                "Fire",
                "Flying"
            ],
            image: "image/img/146Moltres.png",
            sprite: "image/spr/146MS.png",
            description: "Known as the legendary bird of fire. Every flap of its wings creates a dazzling flash of flames."
        },
        {
            base: {
                attack: 64,
                defense: 45,
                hp: 41,
                spAtk: 50,
                spDef: 50,
                speed: 50
            },
            name: "Dratini",
            id: "147",
            type: [
                "Dragon"
            ],
            image: "image/img/147Dratini.png",
            sprite: "image/spr/147MS.png",
            description: "Long considered a mythical Pokémon until recently when a small colony was found living underwater."
        },
        {
            base: {
                attack: 84,
                defense: 65,
                hp: 61,
                spAtk: 70,
                spDef: 70,
                speed: 70
            },
            name: "Dragonair",
            id: "148",
            type: [
                "Dragon"
            ],
            image: "image/img/148Dragonair.png",
            sprite: "image/spr/148MS.png",
            description: "A mystical Pokémon that exudes a gentle aura. Has the ability to change climate conditions."
        },
        {
            base: {
                attack: 134,
                defense: 95,
                hp: 91,
                spAtk: 100,
                spDef: 100,
                speed: 80
            },
            name: "Dragonite",
            id: "149",
            type: [
                "Dragon",
                "Flying"
            ],
            image: "image/img/149Dragonite.png",
            sprite: "image/spr/149MS.png",
            description: "An extremely rarely seen marine Pokémon. Its intelligence is said to match that of humans."
        },
        {
            base: {
                attack: 110,
                defense: 90,
                hp: 106,
                spAtk: 154,
                spDef: 90,
                speed: 130
            },
            name: "Mewtwo",
            id: "150",
            type: [
                "Psychic"
            ],
            image: "image/img/150Mewtwo.png",
            sprite: "image/spr/150MS.png",
            description: "It was created by a scientist after years of horrific gene splicing and DNA engineering experiments."
        },
        {
            base: {
                attack: 100,
                defense: 100,
                hp: 100,
                spAtk: 100,
                spDef: 100,
                speed: 100
            },
            name: "Mew",
            id: "151",
            type: [
                "Psychic"
            ],
            image: "image/img/151Mew.png",
            sprite: "image/spr/151MS.png",
            description: "So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide."
        }
    ];
});