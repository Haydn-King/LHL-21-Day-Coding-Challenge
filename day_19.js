/*
Challenge #19 - It's Pumpkin Spice Time
“Attention [REDACTED],” blares Larry all of a sudden. “T-minus 60 minutes to data reception, 
incoming array of data objects with unique type and data properties.”

Wiping the daze off your face, 
your eyes slightly squint to adjust to the harsh rays of the storage closet’s singular source of light - 
an incandescent light bulb with no shroud, hanging precariously upside-down on its power cord just a few feet above your desk.

“You figure by now they would’ve given me an office, right Larry?” 
you joke to your faithful duck-shaped companion. 
“Although I guess I’d have to explain you being around since…”

As you trail off the sentence to avoid saying something hurtful, 
you observe Larry’s neutral gaze. Lately, his performance has deteriorated; 
he can communicate just fine with SPELL’s servers and feeds you data when you need it, 
but one of his foot actuators is broken and a motor in his neck is slightly off-center, 
causing his head to keep tilting to the left.

“Indeed, [REDACTED]. 
While my mission directive prevents me from shutting down permanently while an active SPELL programmer still requires my assistance, 
my existence within SPELL’s current operations would not be tolerated,” he says with a striking finality.

“Well you don’t have to worry about that buddy, because I’ll always need your help,” you reassure him. 
“Alright well, let’s get to work shall we?”

“Affirmative, generating resource list now,” 
says Larry as he hops on one webbed foot to turn around and show you the console on his back.

INSTRUCTIONS
(This challenge is worth 5 points)

Your task is to write a function that will take in a list of data entries in the shape of an array of objects. The function will then organize and return the entries by type and store each bit of data (string) in each list, in the shape of an object containing arrays.

EXAMPLES
Input:

const listOfReceivedData = [
  {type: "astro", data: "Saturn Data"},
  {type: "bio", data: "Space Potatoes"},
  {type: "physics", data: "Lagrange Points"},
  {type: "bio", data: "OMG Tardigrades"},
  {type: "physics", data: "Material reflectivity"},
  {type: "astro", data: "Mercury is not the hottest"},
]
    
Output:

{
  "astro":  ["Saturn Data", "Mercury is not the hottest"],
  "bio": ["Space Potatoes", "OMG Tardigrades"],
  "physics": ["Lagrange Points", "Material reflectivity"],
}
*/

const organizeData = (receivedData) => {
  // Code here!
  let obj = {};
  for (let key of receivedData) {
    //Check if current key exists in obj object, if not, add value as a first value in an empty array
    if (!obj[key.type]) {
      obj[key.type] = [key.data];
    } else {
      //If it does exist, push the second value to the value array
      obj[key.type].push(key.data);
    }
  }

  return obj;
};
