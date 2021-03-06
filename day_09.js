/* Challenge #9 - Media mania!
Since pre-flight preparations are more than well-underway by now, 
your supervisor has spent quite a bit of time preparing a media strategy for the upcoming weeks. 
Part of this strategy requires preparing a list of all astronaut jobs on board the shuttle 
in addition to the list of astronauts you already created.

You decide to take some time and try to work it out in the storage closet. 
Who knows, maybe Larry might be of some help again, you think to yourself. 
With the creaking of the door announcing your entrance, you enter the room and there, 
in the corner with his bill lolling to the right instead of left this time, you find Larry.

Wasting no time, you take his power cable and plug it in, awaiting his revival with bated breath. 
This time, it takes even longer for Larry to power on, and instead of straightening his neck immediately, 
his motor sputters and jitters, moving randomly side-to-side before finally settling in the correct position.

“G-g-greetings again, [REDACTED],” stutters Larry. 
“Excuse my p-p-p-erformance, it se-eee-ms it has been a w-w-w-while since my last update.”

You ask him if there’s anything you can do to help with a look of concern.

“That is entirely un-un-unecessary,” he says with all the effort a dilapidated robot can muster. 
“Th-th-this is a temporary issue, vocal recalibration will commence shortly. What can I help you with?”

Trusting in his assurance that he’ll be alright, you tell him about your latest challenge. Sitting on the floor, 
eye-level to Larry’s 30-inch stature, you wait for him to process the information about your task.

“Request processed. Limited information available,” he says before mentioning a series of useful tips.
-----------------------------------------------------------------------------------------------------------------------
INSTRUCTIONS
Your task is to create a function that will take in an array representing the roster of astronauts, 
and return an array containing the jobs of each astronaut as a string.

In other terms, for each astronaut of the roster, you want to take the job and add it to a list, 
then return said list.

Examples
Input:

    const exampleRoster = [
      {
        ...
        job:"Shuttle DJ"
      },
      {
        ...
        job:"Space Cook"
      }
    ] 
    
Output:

    ["Shuttle DJ", "Space Cook"]
    
*/

const listAstronautJobs = (roster) => {
  return roster.map((astronaut) => astronaut.job);
};
