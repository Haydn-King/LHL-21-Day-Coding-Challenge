/* 
Challenge #12 - From novice to master
With a platform booked for launch in the upcoming days, 
final preparations are underway to ensure a successful mission. 
After being such a reliable asset to SPELL through the application of your programming skills, 
your reputation, and your supervisor’s expectations of you, have grown.

“Accordingly,” your supervisor explains, “SPELL needs you to improve its current communication system.”

Since you completed the string concatenation task way back in week 1, 
it only makes sense for you to extend the capabilities of that system. 
This time, you need to correctly format each message from a list of messages 
sent from the shuttle to SPELL HQ and store them in a new list.

“Sound familiar?” your supervisors asks. 
“You’ve come a long way from simple string concatenation, haven’t you?”, 
they say with a touch of admiration.

INSTRUCTIONS
Your task is to write a function that will take in an array of objects 
containing a sender and a message as a parameter. 
The function will then parse a message from each object, 
add it to an array then return the built array.

Each message is built exactly like the first challenge, 
so you can either use the function you already made, or rebuild it from scratch.

EXAMPLES
Input:

    const messages = [
      {origin:"MC", message:"Hello!"},
      {origin:"Shuttle", message:"Hey!"},
    ]
    
Output:

    [
      "MC: Hello!",
      "Shuttle: Hey!"
    ]
    
*/

const parseTranscripts = (messages) => {
  let parsedArr = [];

  for (let message of messages) {
    parsedArr.push(`${message.origin}: ${message.message}`);
  }

  return parsedArr;
};
