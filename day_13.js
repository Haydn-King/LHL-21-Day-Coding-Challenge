/* 
Challenge #13 - One gauge at a time
Taken aback by your last meeting with your supervisor, 
you take some time to reflect on how far you’ve come as a programmer. 
If nothing else, you can rest assured that having come this far you’ve certainly proven your worth, 
not just as a programmer, but as a problem-solver.

Heading over to your trusty storage closet, 
you once again mentally sort through all the data given to you about your next task. 
This time, your supervisor wants you to verify the functionality of a set of gauges on board the shuttle.

Opening the door you’re greeted with a familiar sight. 
Larry, whose mere presence in the room has served as a source of comfort during long work hours, 
is standing back facing the door with the pale blue glow of an “UPDATE COMPLETE” message 
emanating from the console window. 
You press the “OK” button and watch as Larry’s LED eyes light up as his startup process commences. 
Compared to last time, it seems to be going smoother. Hopefully his hardware is holding up okay, 
you think to yourself. His duck-shaped body is littered with small dents and bits of rusted metal can be seen all over.

Once he finishes booting up, you’ll ask him some questions about what, 
or who he is, you decide. Before then, 
there’s plenty of time to finish the task at hand.

INSTRUCTIONS
(This challenge is worth 5 points)

Your task is to write a function that will take in an array of objects containing a gauge reading 
(min, max, current). 
he function will then check if the gauge current value is within spec 
(between min and max) and check the next gauge. 
If one of the values is outside the spec, return false, if they are all ok, return true.

The method the evaluate the gauge is the same as the third challenge. 
You may take your function, get inspired by it, or start from scratch in this challenge.

EXAMPLES
Input:

    const gaugeList = [
      {
        current:0.4,
        min:0.1,
        max:0.9
      },
      {
        current:1.2,
        min:0.1,
        max:0.6
      }
    ]
    
Output:

    false
*/

const gaugeList = [
  {
    current: 0.4,
    min: 0.1,
    max: 0.9,
  },
  {
    current: 1.2,
    min: 0.1,
    max: 0.6,
  },
];

const checkAllGauges = (gaugeList) => {
  for (let gauge of gaugeList) {
    if (
      gauge.current >= gauge.min &&
      gauge.current <= gauge.max
    ) {
      continue;
    } else if (
      gauge.current <= gauge.min ||
      gauge.current >= gauge.max
    ) {
      return false;
    }
  }
  return true;
};

console.log(checkAllGauges(gaugeList));
