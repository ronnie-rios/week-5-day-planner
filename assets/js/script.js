//displays current time
function displayCurrentDate() {
    var currentDate = moment().format('dddd, MMMM Do');
    $('#currentDay').text(currentDate)
}
displayCurrentDate();

//function to save to local storage
function saveStorage() {
   let userInput = $(this).siblings('.event-txt').val() 
   var localStorageKey = $(this).siblings('.time').text()
   localStorage.setItem(localStorageKey, userInput)
   
}

function displayStorage() {
//    localStorage.setItem(localStorageKey)
   
    // displays local storage for time and places in div
   var nineText = localStorage.getItem("9:00 AM")
    $('.9-text').text(nineText)
    var tenText = localStorage.getItem("10:00 AM")
    $('.10-text').text(tenText)
    var elevenText = localStorage.getItem("11:00 AM")
    $('.11-text').text(elevenText)
    var twelveText = localStorage.getItem("12:00 PM")
    $('.12-text').text(twelveText)
    var thirteenText = localStorage.getItem("1:00 PM")
    $('.13-text').text(thirteenText)
    var fourteenText = localStorage.getItem("2:00 PM")
    $('.14-text').text(fourteenText)
    var fifteenText = localStorage.getItem("3:00 PM")
    $('.15-text').text(fifteenText)
    var sixteenText = localStorage.getItem("4:00 PM")
    $('.16-text').text(sixteenText)
    var fifteenText = localStorage.getItem("5:00 PM")
    $('.17-text').text(fifteenText)
}
displayStorage();
//compare time code
// var currentHour = moment().hour();
// var currentHourInt = parseInt(currentHour)
// console.log(currentHour)
// $("#9").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
// $("#10").attr("data-time", moment("10:00 am", "h:mm a").format("HH"));
// $("#11").attr("data-time", moment("11:00 am", "h:mm a").format("HH"));
// $("#12").attr("data-time", moment("12:00 pm", "h:mm a").format("HH"));
// $("#13").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
// $("#14").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
// $("#15").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
// $("#16").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
// $("#17").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));

// function compareTime() {
//        $('#row').each(function() {
//         var rowHour = parseInt($(this).attr("data-time"));
//         console.log(this)
//         if (currentHourInt > rowHour) {
//             $(this).addClass('future')
//         } else if (currentHourInt === rowHour) {
//             $(this).addClass('present')
//         } else {
//             $(this).addClass('past')
//         }
//     })
// }
// compareTime();

$('.saveBtn').on('click', saveStorage);