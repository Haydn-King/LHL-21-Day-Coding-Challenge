/* 
Challenge #15 - A fated reunion
As you push your code to SPELL’s servers after a job well done, 
you decide to take part of your lunch break to check on Larry.

“Hey there, Larry,” you say with shaky enthusiasm. 
He certainly looks functioning but you wonder if a simple software update is enough to fix his aging chassis. 
“Feeling better?”

“Greetings [REDACTED]. I am operating at 67% functionality. 
Motor skills and maneuverability are currently 2% above operating minimum. 
Memory banks and server uplink are 93% operational,” he says with a mechanical precision.

“Well that’s a relief, I was worried you-”

“Incoming job alert!” Larry interrupts. “New task for [REDACTED]. 
Priority Level: High. 
Instructions: Implement function to return time between launch date and current date.”

This is your first high-priority task which means it has to be done within the hour. 
How do you obtain the current date within the program dynamically, you wonder. 
It has to be accurate whenever the program is run so it can’t be a static input.

“Attention, [REDACTED],” Larry calls up to you. 
“Console information may be of assistance, if required,” 
while gesturing to the screen on his back with one wing tip.

As he does so, his metallic “feathers” creak and groan until a single piece of sheet metal 
is torn free and drops to the floor with a clatter. 
Larry looks down at the feather with an expression that betrays the slightest touch of confusion.

“Yea sure Larry, I’ll take all the help I can get,” you say, 
attempting to distract him from the awkward situation.

INSTRUCTIONS
(This challenge is worth 20 points)

Your task is to write a function that will take in a launch date and a mission name as strings. 
Calculate the difference between two dates in days and return an object containing the name of the mission and a rounded day difference.

A part of the code has been written for you, and it is important that it stays the same for the tests to work out.

EXAMPLES
Input:

    const launchDate = "2021-12-12"
    const fakeToday = "2021-12-01"
    const missionName = "Moon visit"
    
Output:

    {
      missionName = "Moon visit",
      daysRemaining = 11
    }
*/

const timeRemaining = (
  launchDate,
  missionName,
  fakeToday
) => {
  const today = fakeToday || new Date(); // Do not alter this line!

  const daysRemaining = Math.round(
    (Date.parse(launchDate) - Date.parse(today)) / 86400000
  );
  return {
    missionName: missionName,
    daysRemaining: daysRemaining,
  };
};
