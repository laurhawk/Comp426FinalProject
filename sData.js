const spotData = [{
  "id": 1,
  "name": "Davis Library",
  "wouldStudy": [true, false, true, true, true, false, false, true, false, true, false, true, true, true, true, true, false, true, false, true, true, true],
  "ratings": [4, 5, 4, 3, 2, 3, 4, 5, 4, 3, 2, 3, 4, 5, 4, 3, 2, 3, 3, 4, 4, 5, 5, 4, 4, 5, 5, 4, 4, 3, 3, 4, 4, 5, 5, 3, 3, 2, 4, 5, 3, 4, 2, 3, 4, 5],
  "comments": ["Large", "Lots of seating options", "I could not find the study materials I needed", "Many all nighters start here"],
  "image": "../images/davis.jpg"
},
{
  "id": 2,
  "name": "Undergraduate Library",
  "wouldStudy": [true, true, false, false, true, false, true, false, true, true, true, true, true, false, true, false, true, true, true, true, false, true, true],
  "ratings": [3, 4, 3, 2, 3, 4, 5, 4, 3, 2, 3, 4, 5, 4, 3, 2, 3, 3, 4, 4, 5, 5, 4, 4, 5, 5, 4, 4, 3, 3, 4, 4, 5, 5, 3, 2 ,2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4],
  "comments": ["Scary at night", "The basement is a great all nighter space", "Better than Davis"],
  "image": "../images/ul.jpg"
},
{
  "id": 3,
  "name": "The Quad",
  "wouldStudy": [false, true, true, false, false, true, false, true, false, true, true, true, true, true, false, true, false, true, false, false, false, false, false],
  "ratings": [3, 4, 4, 5, 5, 4, 4, 3, 3, 4, 4, 5, 5, 3, 2 ,2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 3, 2, 3, 4, 5, 4, 3, 2, 3, 4, 5, 4, 3, 2, 3, 3, 4, 4, 5, 5, 4, 4, 1, 1, 2],
  "comments": ["Busy, has insects"],
  "image": "../images/quad.jpg"
},
{
  "id": 4,
  "name": "The Pit",
  "wouldStudy": [false, true, true, false, false, true, false, true, false, true, true, true, true, false, true, false, false, true, false, true, false],
  "ratings": [2, 4, 4, 5, 5, 4, 4, 3, 3, 4, 4, 5, 5, 3, 2 ,2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 3, 2, 3, 4, 5, 4, 3, 2, 3, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3],
  "comments": ["Crowded and loud", "The pit preachers make excellent study break entertainment", "Distracting area"],
  "image": "../images/pit.jpg"
},
{
  "id": 5,
  "name": "Bottom of Lenoir",
  "wouldStudy": [true, true, true, true, true, false, false, true, false, true, false, true, true, true, true, false, true, false, false, true, true, true, true],
  "ratings": [5, 4, 4, 5, 5, 4, 4, 3, 3, 4, 4, 5, 5, 3, 2 ,2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 3, 2, 3, 4, 5, 4, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5],
  "comments": ["Never busy during finals!", "DO NOT GO BETWEEN 11 AM AND 2 PM", "Smells like chikfila", "No power outlets"],
  "image": "../images/lenoir.jpg"
},
{
  "id": 6,
  "name": "Genome Sciences Cafe",
  "wouldStudy": [true, true, true, true, true, true, false, false, true, false, true, true, true, true, true, true, false, false, true, false, true, true, true, true, true, true, false, false, true, false, true],
  "ratings": [5, 3, 3, 3, 3, 4, 3, 2, 3, 4, 5, 4, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 3, 2, 3, 4, 5, 4, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 3, 2, 3, 4, 5, 4, 2, 2, 3, 3, 3],
  "comments": ["Close to lecture halls", "Coffee close by", "Uncomfortable seating", "Usually crowded but quiet"],
  "image": "../images/genome.jpg"
},
{
  "id": 7,
  "name": "Sitterson Lobby",
  "wouldStudy": [true, true, true, true, true, true, true, false, false, true, false, true, true, true, true, true, true, false, false, true, false, true, true, true, true, true, true, false, false, true, false, true],
  "ratings": [2, 2, 2, 2, 3, 3, 3, 3, 4, 3, 2, 3, 4, 5, 4, 2, 2, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 4, 3, 2, 3, 4, 5, 4, 2, 2, 3, 3, 3, 2, 1, 1, 2, 2, 1, 1],
  "comments": ["Just convenient", "Close to office hours for CS", "Comfy armchairs"],
  "image": "../images/sitterson.jpg"
},
{
  "id": 8,
  "name": "Sloane Art Library",
  "wouldStudy": [false, false, true, true,  true, false, false, true, false, true, true, true, true, true, true, false, false, true, false, true, true, true, true, true, true, false, false, true, false, true],
  "ratings": [3, 4, 4, 5, 5, 4, 4, 3, 3, 4, 4, 5, 5, 3, 2 ,2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 3, 2, 3, 4, 5, 4, 2, 2, 3, 3, 3,3],
  "comments": ["Never has seating", "Suffocatingly quiet", "Weird chairs", "Close to Hanes 121 which is such a bad lecture hall"],
  "image": "../images/sloane.jpg"
},
{
  "id": 9,
  "name": "Phillips Hall",
  "wouldStudy": [false, false, false, false, false, false, false, false, false, false, false, false, true, true, false, false, true],
  "ratings": [1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 3, 2, 3, 4, 5, 4, 2, 2, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  "comments": ["Terrifying", "A strange smell pervades the air", "Math help center close by"],
  "image": "../images/phillips.jpg"
},
{
  "id": 10,
  "name": "TOPO",
  "wouldStudy": [false, false, true, false, false, true, true, true, true, true, true, false, false, true, false, true, true, true, true, true, true, false, false, true, false, true, true, true, true, true, true, false, false, true, false, true],
  "ratings": [1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 3, 2, 3, 4, 5, 4, 2, 2, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 4, 4, 4, 3, 3, 3, 3, 3],
  "comments": ["Requires purchase", "Crowded", "Atmosphere is not worth the price"],
  "image": "../images/topo.jpg"
},
{
  "id": 11,
  "name": "Starbucks on Franklin",
  "wouldStudy": [false, false, false, true, false, false, true, true, true, true, true, true, false, false, true, false, true, true, true, true, true, true, false, false, true, false, true, true, true, true, true, true, false, false, true, false, true],
  "ratings": [2, 3, 4, 5, 4, 3, 4, 5, 4, 3, 2, 2, 2, 2, 3 ,3 ,3 ,3 ,3, 3, 3, 4, 4, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  "comments": ["Always hot", "Caffiene close by", "Limited seating"],
  "image": "../images/starbucks.jpg"
},
{
  "id": 12,
  "name": "Kenan Science Library",
  "wouldStudy": [true, false, true, true, true, true, true, true, true, true, true, false, false, true, false, true, false, true, true, true, true, false, true, false, false, true, true, true, true],
  "ratings": [4, 2, 2, 3, 4, 5, 4, 3, 4, 5, 4, 3, 2, 2, 2, 2, 3 ,3 ,3 ,3 ,3, 3, 3, 4, 4, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1],
  "comments": ["Great, quiet place!", "Close to chem buildings", "Quiet"],
  "image": "../images/kenan.jpg"
},
{
  "id": 13,
  "name": "Wilson Library",
  "wouldStudy": [true, false, true, true, true, true, true, false, false, true, false, true, false, true, true, true, true, false, true, false, false, true, true, true, true],
  "ratings": [3, 3, 2, 3, 4, 5, 4, 5, 3, 4, 5, 4, 3, 2, 2, 2, 2, 3 ,3 ,3 ,3 ,3, 3, 3, 4, 4, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4],
  "comments": ["Too quiet", "Document resources available close by", "Limited outlets", "No drinks allowed"],
  "image": "../images/wilson.jpg"
},
{
  "id":14,
  "name": "Student Union",
  "wouldStudy": [true, true, true, true, true, true, true, true, false, false, true, false, true, false, true, true, true, true, false, true, false, false, true, true, true, true, false],
  "ratings": [5, 5, 3, 2, 3, 4, 5, 4, 3, 4, 5, 4, 3, 2, 2, 2, 2, 3 ,3 ,3 ,3 ,3, 3, 3, 4, 4, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5, 5, 3],
  "comments": ["Uncomfortable chairs", "Bagels!", "Social hub"],
  "image": "../images/union.jpg"
}
]
