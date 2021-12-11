/*
Challenge #20 - Incoming Task: Confirm Re-Entry!
One week from shuttle re-entry…

Leaving your supervisor’s room from your most important briefing to date, 
you try to calm your nerves as you walk down the hall to your storage closet sanctuary.

“Hey Larry,” you say as you swing the door open. You spot the robot duck sitting on the desk, 
eyes dimmed but still active and you feel a pang of sadness. 
These days, Larry spends most of his time in a hibernation mode to preserve what little operating functionality remains.

“He-he-hello, [REEEEDaCTeD],” croaks the robot alternating from shrieking high frequencies to inaudibly low ones. 
“A-a-a-attention, in-incom-incoming j-j-j-”

“No worries buddy, I already got the instructions,” you interrupt. Seeing him struggle reminds you that his days are numbered. 
While you tried to source parts for his repairs, Larry’s internals are incredibly complicated, with your programming background, 
a software issue would be easy to fix, but it's his electronic and mechanical components that are failing.

Attempting to take your mind off of the inevitable, you review the task outline with Larry, 
“So, we’re going to receive an object called checks which contains multiple properties regarding the shuttle’s current orbital re-entry status.”

Larry musters a slight head nod, accompanied by the creaking of rusted metal as his neck cranes back and forth.

“We’ve done all these checks individually before in previous tasks, 
so really we just have to put it all together, not so bad right?” you ask Larry, 
in an attempt to reassure yourself more than the robot. 
His state of disrepair causes you to wince at the slightest movement he takes, 
worried that yet another piece of his crumbling chassis will fall off.

“A-a-af-affirmative,” he manages to croak out. Helping him up with one-hand, 
you gently rotate Larry’s body to access the console after giving him a healthy dose of pets on the bill. 
“Don’t worry buddy, we’ll have this finished in no time,” you say to the duck. As if in acceptance, or resignation, 
Larry nods his head and droops his bill down.

INSTRUCTIONS
(This challenge is worth 10 points)

Your task is to write a function that will take in speed (number), missionData (object) and checks (object) as parameters. 
The goal is to make sure that the speed is within the limits and that the amount of entries per type matches with the checks. 
If one of the values is a mismatch, return false, if everything is fine, return true.

Speed will be compared against maxSpeed and minSpeed inclusively and the length of each array inside missionData 
will be compared to the values inside the dataEntries object values.

EXAMPLES
Input:

  const speed = 40
  const missionData = {
    astro:["...","..."], 
    bio:["..."], 
    physics:["..."]
  }

  const checks = {
    maxSpeed:50,
    minSpeed:20,
    dataEntries:{
      astro:3,
      bio:1,
      physics:1
    }
  }
    
Output:

  false // Not the same amount of entries
*/

const confirmReentryPlans = (
  speed,
  missionData,
  checks
) => {
  // Code here!
  if (
    speed >= checks.minSpeed &&
    speed <= checks.maxSpeed &&
    missionData.astro.length === checks.dataEntries.astro &&
    missionData.bio.length === checks.dataEntries.bio &&
    missionData.physics.length ===
      checks.dataEntries.physics
  ) {
    return true;
  }
  return false;
};
