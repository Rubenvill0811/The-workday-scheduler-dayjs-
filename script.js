// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// import dayjs from "dayjs";



$(document).ready(getTime())

function getTime() {

const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const currentDate = dayjs().day();
const dateFormat = dayjs().format('M/DD/YYYY');
// const currentHour = date.getHours();

const currentDay = weekday[currentDate] + ` ${dateFormat}`;

$('#date').text(currentDay)

    // check dayjs against the current hour. if statement to check value.
    // if sched hour is smaller than current hour -> in the past -> assign color based on value -> == to check if time is current -> check if the time is greater than the current time to get the future value. with the results add a class-style based on the result of the if statement. 
}

saveTaskToStorage();


function saveTaskToStorage() {
    // I need to save what's in the text box to local storage after a task has been described and the save button has been clicked.
    $('.saveBtn9').click(function() {
        const task9 = $('#hour-9').val();
        localStorage.setItem('9AM', task9)
    })
    $('.saveBtn10').click(function() {
        const task10 = $('#hour-10').val();
        localStorage.setItem('10AM', task10)
    })
    $('.saveBtn11').click(function() {
        const task11 = $('#hour-11').val();
        localStorage.setItem('11AM', task11)
    })
    $('.saveBtn12').click(function() {
        const task12 = $('#hour-12').val();
        localStorage.setItem('12PM', task12)
    })
    $('.saveBtn1').click(function() {
        const task1 = $('#hour-1').val();
        localStorage.setItem('1PM', task1)
    })
    $('.saveBtn2').click(function() {
        const task2 = $('#hour-2').val();
        localStorage.setItem('2PM', task2)
    })
    $('.saveBtn3').click(function() {
        const task3 = $('#hour-3').val();
        localStorage.setItem('3PM', task3)
    })
    $('.saveBtn4').click(function() {
        const task4 = $('#hour-4').val();
        localStorage.setItem('4PM', task4)
    })
    $('.saveBtn5').click(function() {
        const task5 = $('#hour-5').val();
        localStorage.setItem('5PM', task5)
    })
};

getTaskFromStorage();
    


function getTaskFromStorage() {


    
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        // const dataValue = JSON.parse(value);

        
    }
}
    writeFromStorage();
    
    function writeFromStorage() {
        $('#hour-9').text(localStorage.getItem('9AM'))
        $('#hour-10').text(localStorage.getItem('10AM'))
        $('#hour-11').text(localStorage.getItem('11AM'))
        $('#hour-12').text(localStorage.getItem('12PM'))
        $('#hour-1').text(localStorage.getItem('1PM'))
        $('#hour-2').text(localStorage.getItem('2PM'))
        $('#hour-3').text(localStorage.getItem('3PM'))
        $('#hour-4').text(localStorage.getItem('4PM'))
        $('#hour-5').text(localStorage.getItem('5PM'))

       
        


}





// Next step: number the id's by hour, and copy and paste the above code so that the buttons are assigned to the specific textbox and task.


$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  