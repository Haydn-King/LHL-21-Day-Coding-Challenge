/* Challenge #14 - List-o-mania
“Now here’s the thing about programming,” 
your supervisor says to you, 
“sometimes it requires doing the same thing in different flavours.”

They continue by embarking on a long-winded, 
culinary-themed analogy about objects being recipes and the entire program being a dish, 
but eventually cut themselves short and say, 
“Look I just need you to do what you did last task but for a different object, essentially.”

This time, you’ll be working with toggles again. 
The sound of Larry’s synthesized voice rings in your ears as you remember how he 
helped you with your first task involving toggles, 
completely unprompted. What caused him to wake up suddenly like that? 
Dozens of possible explanations race through your mind before you snap out 
of your trance and return to the task at hand.

Instead of checking the status of gauges, 
you’ll be checking the switch toggles. 
This time, you only need to turn on switches that aren’t currently on. 
Recalling the use of if-statements and for-each loops in previous tasks, 
you find yourself with yet another familiar problem (and one that you’ve already solved).

Instructions
(This challenge is worth 10 points)

Your task is to write a function that will take in an array of objects containing switches. 
The function will change the value of the isOn property to true for every switch in the list, 
and then return the updated array.

You can use the previous switchToggle function from the fourth challenge, 
however be careful, since we want all of them on, not toggled!

Examples
Input:

const toggleList = [
	{
		name:"Air",
		isOn:true
	},
	{
		name:"Radio",
		isOn:false
	},
]
    
Output:

[
	{
		name:"Air",
		isOn:true
	},
	{
		name:"Radio",
		isOn:true
	},
]
*/

const switchAllTogglesOn = (toggleList) => {
  // Code here
  for (let toggle of toggleList) {
    if (toggle.isOn === false) {
      toggle.isOn = true;
    }
  }
  return toggleList;
};
