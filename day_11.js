/* Challenge #11 - Save the date!
As Larry continues to update, 
you leave the closet for a quick meeting with your supervisor. 
Upon opening the door, 
your supervisor congratulates you for completing your on-boarding tasks in record time! 
Since you’ve started working here, pre-flight requirements have been accelerated across the board.

What that also means, however, 
is that SPELL needs to determine which launch platform is available for use on the day of the mission. 
Since there are multiple platforms, all with different bookings, 
you need to write a function that, given a list of platforms, 
sets the mission date to the first platform that hasn’t been booked yet.

Instructions
Your task is write a function that will take in a list of platforms and a date as a string. 
That function will update the date property on the first platform with an empty date and then return the platform list.

In other terms, for each platform of the platform list array, update the date of the first free one and then return the updated platform list.

EXAMPLES
Input:

    const missionDate = "2021-12-12"
    const platformList = [
      {
        name:"Platform A",
        bookDate:"2021-12-11"
      },
      {
        name:"Platform B",
        bookDate:undefined
      },
      {
        name:"Platform C",
        bookDate:undefined
      },
    ] 
    
Output:

    const platformList = [
      {
        name:"Platform A",
        bookDate:"2021-12-11"
      },
      {
        name:"Platform B",
        bookDate:"2021-12-12"
      },
      {
        name:"Platform C",
        bookDate:undefined
      },
    ] 
*/

const bookFreePlatform = (platformList, missionDate) => {
  // Code here!
  for (const platform of platformList) {
    if (platform.bookDate === undefined) {
      platform.bookDate = missionDate;
      break;
    }
  }
  return platformList;
};
