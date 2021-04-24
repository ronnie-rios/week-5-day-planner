//display current time
function displayCurrentTime() {
    var currentDate = moment().format('dddd, MMMM Do');
    $('#currentDay').text(currentDate)
}
displayCurrentTime();
//an array for the timeblocks
var timeBlocks = [
    {id: 0,
    time: '9:00 AM',
    event: ''},
    {id: 1,
    time: '10:00 AM',
    event: ''},
    {id: 2,
    time: '11:00 AM',
    event: ''},
    {id: 3,
    time: '12:00 PM',
    event: ''},
    {id: 4,
    time: '1:00 PM',
    event: ''},
    {id: 5,
    time: '2:00 PM',
    event: ''},
    {id: 6,
    time: '3:00 PM',
    event: ''},
    {id: 7,
    time: '4:00 PM',
    event: ''},
    {id: 8,
    time: '5:00 PM',
    event: ''},  
]

