/*Challenge #7 - It’s a bird! It’s a plane!
“Great job on completing the last six tasks!” your supervisor congratulates you.

Feeling a sense of accomplishment from having come this far and a sense of relief that the day (or week) is almost over, 
you thank your supervisor for their support. Before you leave for the day, however, you’ve got one final task to address, 
it's about managing the information on current weather conditions.

Bidding you a good night and good luck, your supervisor leaves the room, 
once again rattling the presumably out-of-power robot in the corner. 
This time, the urge to investigate is too strong and you march over to the little duck in the corner, grab its power cable and plug it in.

For a moment, nothing happens, but then, the sound of whirring fans and humming circuitry begin to envelop the room. 
Examining the console on the back of the robot, you see hundreds of lines of code racing across the screen. 
As the boot up processes finish, the robot jerks its head straight up and rotates 180 degrees left to right 
before turning to look straight at you, LED eyes aflare.

“Personnel identified, SPELL emergency operations programmer [REDACTED]” the robot proclaims. 
“Employment Status: Probationary pending full-time assignment. Job Status: Task in-progress” 
it continues with a rhythmic opening and closing of its bill. Introducing yourself, the robot pauses for a moment, 
then continues “Greetings [REDACTED] I am Language Aware Repair Robot Upsilon. But you may call me LARRY.”

You observe the robot waddling on its yellow fins, slowly scanning its new environment. 
At one point, it stumbles against a box and almost tips over but catches itself with the flapping of its seemingly-decorative wings.

Checking the clock, you realize you’re crunched for time and ask Larry how to convert from Fahrenheit to Celsius 
and from miles per hour to meters per second to complete your last task of the week.

Picking its head up from the floor where it was tapping its bill against its reflection, Larry responds. 
Stunned by the speed and accuracy of its response, you reply with a quick word of thanks and get to work.

Instructions
Click here to learn how to navigate the code editor

Your task is to write a function that takes in the temperature, weather condition, wind speed, 
and direction as parameters and store them inside a structure that holds each value as properties.

There's a small and important detail for this one, you must convert the temperature from Fahrenheit to Celsius 
and convert the wind speed from miles/hour to meters/second, and round both of them before storing them.

The information that LARRY gave you about temperature conversions are in the hint section.

Examples
Input:

    const temperature = 32
    const condition = "Sunny with small clouds"
    const windSpeed = 20
    const windDirection = "NNE

Output:

    {
      temperature:0,
      windSpeed:9,
      windDirection:"NNE",
      condition:"Sunny with small clouds"
    } */

const storeWeatherConditions = (
  temperature,
  condition,
  windSpeed,
  windDirection
) => {
  const temperatureCelsius = Math.round(((temperature - 32) * 5) / 9);
  const windSpeedMetersSecond = Math.round(windSpeed / 2.237);
  return {
    temperature: temperatureCelsius,
    windSpeed: windSpeedMetersSecond,
    windDirection: windDirection,
    condition: condition,
  };
};
