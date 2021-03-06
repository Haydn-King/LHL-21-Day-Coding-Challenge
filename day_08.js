/* Challenge #8 - It’s all part of the job
Walking through the high-arched entrance of SPELL’s headquarters, 
you marvel at the opportunity you’ve been given, 
to impact and influence the success of a vast cosmic journey. 
Truly only a few lucky individuals are rewarded for their lifelong career efforts in such a gratifying manner.

Having said that, 
the individual tasks you're given don’t always match the scope of the overall project, 
despite their necessity.

Like this next task, 
given to you by your supervisor after a hurried conversation; 
you’re required to find the number of active astronauts within the current roster list you helped set up.

“Sometimes, even rocket science isn’t exactly rocket science,” 
you think to yourself. 

INSTRUCTIONS:
Your task is to create a function that takes in a roster array, 
and will calculate the amount of astronauts in the given roster list and return said amount.

Sometimes things are just simple, 
code doesn't need to be complicated!

Examples
Input:
    const exampleRoster = [
      {
        firstName:"Chris",
        lastName: "Hadfield",
        nickname:"Space Oddity",
        prefix:"Astronaut",
        job:"Shuttle DJ"
      }
    ]
    
Output:
    1
*/

const countActiveAstronauts = (roster) => {
  return roster.length;
};
