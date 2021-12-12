/* 
Challenge #21 - 21 Challenges Later
With barely a minute to catch your breath as you finish up the last task, 
you see a message download occurring on Larry’s console.

“That’s odd...” you remark. “Why aren’t you reading it out loud Larry?”

No response.

“Larry?”

As you move to turn him around, you catch a glimpse of the new message and read the words 
“Priority Level: CRITICAL.” Resisting the urge to ignore the message, 
you reluctantly leave Larry in place as you’ll need his console for this next task.

The message reads: “Incoming job alert. New task for: [REDACTED]. Priority level: CRITICAL. 
Instructions: Implement function to return a formatted transcript of mission summary. 
Transcript should contain a list of all correctly formatted message exchanges and mission data.”

“So, I need to use my parseMessage function to format each message exchange object as a string, 
push all of them into the transcript array, and then add my transcript to my output object, 
add the mission data to the same object, and finally, 
return it” you say out loud as you work through your thought process.

Still pondering Larry’s situation and the task at hand, 
you find yourself ready to work but unable to actually start.

“What if Larry doesn’t wake up?” you think. 
“Who am I supposed to work through my problems with? 
How am I supposed to finish the rest of my tasks?”

As your mind starts to race and your heart beats faster, 
you feel your emotions spiralling out of control as the grim reality of Larry’s fate, 
and potentially your own, dawns on you.

INSTRUCTIONS
(This challenge is worth 20 points)

Your last (!) task is to write a function that will take in an array of exchanged messages 
and an array of organized data. The goal is to parse each message, 
add them to a list and return an object containing two keys, 
transcript with the messages, missionData with the missionData object.

Each message should be parsed using the same structure as the first challenge;

"Origin: Message"
.
You can reuse the function of the first challenge if you want!

Examples
Input:

 const exchanges = [
   {origin:"MC", message:"So how is it out there?"},
   {origin:"Shuttle", message:"Oh it's pretty nice!"},
   {origin:"MC", message:"Did you like the challenges?"},
 ]
    
 const missionData = {
   astro:["...","..."], 
   bio:["..."], 
   physics:["..."]
 }
    
Output:

 {
   transcript:
   [
     "MC: So how is it out there?",
     "Shuttle: Oh it's pretty nice!",
     "MC: Did you like the challenges?"
   ],
   missionData:{
     astro:["...","..."], 
     bio:["..."], 
     physics:["..."]
   }
 }
*/

const parseMissionSummary = (exchanges, missionData) => {
  let obj = {};
  let result = [];
  for (let key of exchanges) {
    result.push(`${key.origin}: ${key.message}`);
  }
  obj.transcript = result;
  obj.missionData = missionData;
  return obj;
};
