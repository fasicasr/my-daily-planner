let date = new Date();
let now = moment(date).format('dddd MMMM Do YYYY');
document.getElementById("currentDay").innerHTML = now;

//currentTime will get the value of hour(h)
let currentTime =  moment(date).format('h');
let timeArray = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
let timeIndex;
//matching currentTime with timeArray[timeIndex]
if (currentTime == 9) {
    timeIndex = 0;
}else if (currentTime == 10) {
    timeIndex = 1;
}else if (currentTime == 11) {
    timeIndex = 2;
}else if (currentTime == 12) {
    timeIndex = 3;
}else if (currentTime == 1) {
    timeIndex = 4;
}else if (currentTime == 2) {
    timeIndex = 5;
}else if (currentTime == 3) {
    timeIndex = 6;
}else if (currentTime == 4) {
    timeIndex = 7;
}else if (currentTime == 5) {
    timeIndex = 8;
}

//used +timeArray+ to get the value of the variable(timeArray)
for (let i = 0; i < timeArray.length; i++) {
    //if timeArray is <= 11am display rows gray 
    //else if timeArray === 12pm display row red 
    //else display green 
    if (i < timeIndex ) { //prints gray(past)
        $( ".container" ).append ('<div id="'+timeArray[i]+'" class="row time-block">\
        <div class="col-md-1 hour">'+timeArray[i]+'</div>\
        <div class="col-md-10">notes</div>\
        <button class="btn saveBtn col-md-1">Save</button>\
        </div>'); 
    }else if (i === timeIndex){//prints red(current)
        $( ".container" ).append ('<div id="'+timeArray[i]+'" class="row2 time-block">\
        <div class="col-md-1 hour">'+timeArray[i]+'</div>\
        <div class="col-md-10">notes</div>\
        <button class="btn saveBtn col-md-1">Save</button>\
        </div>'); 
    }else {//prints green (future)
        $( ".container" ).append ('<div id="'+timeArray[i]+'" class="row3 time-block">\
        <div class="col-md-1 hour">'+timeArray[i]+'</div>\
        <div class="col-md-10">notes</div>\
        <button class="btn saveBtn col-md-1">Save</button>\
        </div>'); 
    }
}

