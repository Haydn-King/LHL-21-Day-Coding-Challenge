/*
Challenge #18 - Bon Appetit
A few weeks after launch…

Quickly rising through the ranks of SPELL’s emergency operations programming team, 
you find yourself quietly astounded at the knowledge you’ve gained over the past few weeks and the feats you’ve accomplished. 
Thanks in part to your shuttle speed calculator function, the launch was a roaring success, 
and so was the after-party (an event at which your supervisor may have had too much to drink, and remembers little about).

All this improvement, however, is also massively owed to Larry - bless his anatomically-accurate heart.

So far, he’s served as a friendly companion, voice of reason, and more importantly, 
a conduit to access shared information regarding previous missions in which similar functions were implemented. 
Each task so far has required its own tailor-fit solution, but sometimes, 
finding similar examples through Larry (or online) can help you to figure out the right direction to head in when things get confusing.

As the astronauts collect samples, perform experiments, and generate data to send back to SPELL HQ, 
the emergency operations team have had a pretty easy time of it since launch. This latest task, Larry informs you, 
is a medium-priority lunch voting function; since the astronaut’s have been butting heads regarding what they’ll be eating for lunch everyday, 
they’ve requested an automated system be put in place that takes in each astronaut's lunch vote, and returns the lunch choice with the most votes. 
Since there are only two choices on any given day and an odd number of astronauts, you won’t need to account for tie-breakers.

INSTRUCTIONS
(This challenge is worth 10 points)

Your task is to write a function that will take in an array of lunch choices (strings) 
and return the choice as a string with the most votes.

There is always two lunch choices, and always an odd number of astronauts!

EXAMPLES
Input:

    const listOfChoices = [
      "Chicken Dinner",
      "Chicken Dinner",
      "Chicken Dinner",
      "Ice Cream Sandwich", 
      "Ice Cream Sandwich"
    ]
Output:

    Chicken Dinner
*/

const chooseLunchWinner = (listOfChoices) => {
  const choiceFrequency = listOfChoices.reduce(
    (choices, choice) => {
      choices[choice] = choices[choice] + 1 || 1;
      return choices;
    },
    {}
  );
  return Object.keys(choiceFrequency).reduce((a, b) =>
    choiceFrequency[a] > choiceFrequency[b] ? a : b
  );
};
