// let now = moment().format('MMMM Do YYYY, h:mm:ss a');
// let x = document.getElementById('.currentDay');

// x.innerHTML = now;
//displays current time 
let date = new Date();
console.log(date.toDateString());//toDateString trims the time and zone and leaves day and time. You can do .toTimeString just to print out the time


let timeArray = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
//used +timeArray+ to get the value of the variable(timeArray)
for (let i = 0; i < timeArray.length; i++) {
    $( ".container" ).append ('<div id="'+timeArray[i]+'" class="row time-block">\
    <div class="col-md-1 hour">'+timeArray[i]+'</div>\
    <div class="col-md-10">notes</div>\
    <button class="btn saveBtn col-md-1">Save</button>\
    </div>'); 
}
