/* Essentially, the function needs to do two things: 
add an astronaut to the roster and return the updated array. 
As you exit your supervisor’s office and continue the linoleum-lined trek to that 
increasingly familiar storage closet, 
you feel a mixture of dread and curiosity as you wonder who, 
or what awaits you behind that pale white door. */

/* INSTRUCTIONS
Create a function that takes in a roster array and an astronaut object. 
The function will add the astronaut to the roster and return the updated roster.
*/

/* EXAMPLES:
    INPUT:
    const exampleRoster = []
    const exampleAstronaut = {
      firstName:"Chris",
      lastName: "Hadfield",
      nickname:"Space Oddity",
      prefix:"Astronaut"
    }
    OUTPUT: 
    const exampleRoster = [
      {
        firstName:"Chris",
        lastName: "Hadfield",
        nickname:"Space Oddity",
        prefix:"Astronaut"
      }
    ]
*/

const addAstronautToRoster = (roster, astronaut) => {
  let newLength = roster.push(astronaut);
  return roster;
};
