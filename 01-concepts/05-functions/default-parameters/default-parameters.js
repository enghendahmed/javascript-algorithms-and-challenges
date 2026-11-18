'use strict';
const booking = [];
const createFlight = function (flightNumber, passengerNumber = 1, cost = 2000) {
  // ES5 Old Ugly way
  //passengerNumber = passengerNumber || 1;
  //cost = cost || 2000;

  const passengerBooking = {
    flightNumber,
    passengerNumber,
    cost,
  };

  booking.push(passengerBooking);
  console.log(booking);
};

createFlight('H.123');
/*Notes:
- we can put expression in parameter like this :
cost*2
- we can use the previous set parameter in the current parameter like this :
cost = passengerNumber*2
but we cant use the next param

- to skip arguments we use undefined like this:
createFlight ( 200 , undefined , 2000)
so it will skip the second parameter

- it will use the default values just in case it didn't be sent when the fn has been called .
*/
