/* Challenge #10 - Flying solo
After solving the last task, you feel grateful to Larry for his help 
but also a growing sense of confidence in your own abilities. 
While a significant portion of programming is about problem-solving on your own, 
learning how to gather the individual resources to find a solution is equally important.

Like this next task, for example. 
Your supervisor has assigned you to write a function that 
calculates the average wind speed given the data generated by your previous work.

After pondering the task for a while, 
you come to the conclusion that the problem at hand requires you to work 
with the weather objects that you made a few challenges ago. 

INSTRUCTIONS
Your task is to create a function that will take in an array of weather objects 
and will return a rounded average of the wind speed.

Since we work with an unknown amount of entries, 
you will need to calculate the average wind speed using loops.

Examples
Input:

    const exampleEntries = [
      { 
        temperature:0, 
        weather:"sunny", 
        windDirection: "NNE", 
        windSpeed:24
      },
      { 
        temperature:10, 
        weather:"cloudy", 
        windDirection: "NNE", 
        windSpeed:9 
      }
    ] 
    
Output:

    17
*/

const averageWindSpeed = (weatherEntries) => {
  return Math.round(
    weatherEntries.reduce((total, entry) => total + entry.windSpeed, 0) /
      weatherEntries.length
  );
};
