# htn-timer/view
Timer application. Typescript, OOP.

## Entities:
* Stopwatch
* Timer

### Stopwatch
Singleton - is the Data model and control layer for UI

#### Roadmap
Ideally, more of the control would be housed here.
Due to the nature of updating UI's, we should export a pub/sub
model allowing the client to subscribe to change in stopwatch data.
Furthermore, there is a lackluster data model at best, further delineation 
of data and controls would allow for more adaptability.

#### Known Bugs
Note -- failing test `Stopwatch.should account for pause time`.
I was unable to solve the algorithmic design for stopwatch class
to compute time during a pause, and adjust in subsequent calculations.

start - records start time
stop - records stop time
reset - clears instance variables
lap - create a lap record at time of request
getLaps - get instance variable laps
reportElapsedTime - returns difference since started at and endedAt/current time

