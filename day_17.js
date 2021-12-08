/* 
Challenge #17 - The moment you’ve all been waiting for...
“It’s launch day!” exclaims your supervisor as you enter their office. 
“I hope you’re excited! Don’t worry, 
you shouldn’t have much to do today as mission control is handling all the important stuff. 
We just need you on standby in case anything breaks.”

Disappointed that you won’t be involved with the launch process, 
but elated that you have a role at all, you decide to spend your time on standby with Larry. 
Immediately upon entering the storage closet, you’re greeted with the blaring of Larry’s synthesized voice.

“Incoming job alert! Priority level: CRITICAL,” announces Larry. 
“Instructions: Implement function to take input list of toggle switches 
and specific toggle name and switch toggle on the specified toggle only.”

As it turns out, this function is an essential pre-launch requirement. 
If you don’t get it fixed in time, 
SPELL will have to postpone the launch and that’s not an expense they want to incur, 
your supervisor stresses heavily.

“Well, Larry, time to save the day,” 
you say with evident anxiety. 
“No biggie right?”

Curiously, watching Larry’s enthusiastic nodding and 
mock ruffling of his feathers soothes your nerves somewhat.

“No biggie, [REDACTED],” the duck assures you.

INSTRUCTIONS
(This challenge is worth 5 points)

Your task is to write a function that will take in an array of toggle objects and a specific toggle name. 
The goal is to switch only the specific toggle, without affecting the other toggles and then return the updated array.

Don't forget that you can use your previous function from the fourth challenge to help you complete it faster!

EXAMPLES
Input:

const toggleList = [
  {
    name: "toggleA",
    isOn: false
    }, 
  {
    name: "toggleB",
    isOn: true
  }
]
const specificToggle = "toggleA"
    
Output:

[
  {
    name: "toggleA",
    isOn: true
  }, 
  {
    name: "toggleB",
    isOn: true
  }
]
*/

const switchSpecificToggle = (
  toggleList,
  specificToggle
) => {
  // Code here!
  toggleList.forEach(function (toggle) {
    if (toggle.name === specificToggle) {
      toggle.isOn = !toggle.isOn;
    }
  });

  return toggleList;
};
