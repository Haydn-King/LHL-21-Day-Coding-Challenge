/*
Challenge #16 - 21 Questions
“So Larry, when were you last awake?” you ask the robot. “Before we met, I mean.”

“Memory banks indicate last active period prior to meeting [REDACTED] as 
754 days, 15 hours, 2 minutes, and 6 seconds ago,” he replies.

“A little over two years…what was your job back then?”

“Memory banks cannot access previous mission data. 
Information is classified,” says Larry, his bill shaking side to side.

“Guess I should’ve figured. 
It must have been something pretty serious to get you all banged up like that,” 
you say, gesturing at his current state.

“LARRY unit Mission Directive 1: Assist personnel with all approved queries, 
regardless of potential danger to unit itself,” he states with a more robotic tone than usual. 
“Units are powered down or destroyed upon mission completion for data security.”

Shocked by the robot’s apathetic discussion of its own existence, 
you feel a tinge of sadness for it. Surely there should be some use for something as advanced as LARRY units, 
even after they complete their mission.

“Well, I’m glad you’re still around to help me out buddy,” you say to Larry, 
forcing a smile as the reality of his situation begins to wash over you.

“Incoming job alert! Priority level: CRITICAL,” he blares loudly. 
“Instructions: Implement function to calculate average shuttle speed in meters per second given position objects.”

Looking back towards Larry, you notice he’s already set up to access the resources in his console window.

INSTRUCTIONS
(This challenge is worth 20 points)

Your task is to write a function that will take in two position objects. 
Calculate the average speed from the two positions and return the average speed rounded to the first decimal point.

Each object contains the altitude in meters, and a time stamp in seconds.

EXAMPLES
Input:

  const firstPosition = {
    time: 1637074462,
    altitude: 1100
  }
  const secondPosition = {
    time: 1637074558,
    altitude: 2200
  }
    
Output:

  11.5
*/

const getAverageSpeed = (firstPosition, secondPosition) => {
  distance =
    secondPosition.altitude - firstPosition.altitude;
  time = secondPosition.time - firstPosition.time;
  averageSpeed = parseFloat((distance / time).toFixed(1));
  console.log(averageSpeed);
  return averageSpeed;
};
