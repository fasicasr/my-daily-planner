//display of current time. Format from momment.com
let date = new Date();
let now = moment(date).format('dddd, MMMM Do YYYY');
document.getElementById("currentDay").innerHTML = now;

let textValue;
//currentTime will get the value of hour(h)
let currentTime =  moment(date).format('h');
// let currentTime = 12; //use when testing a hours past 9-5pm
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
}else if (currentTime == 2) {3
    timeIndex = 5;
}else if (currentTime == 3) {
    timeIndex = 6;
}else if (currentTime == 4) {
    timeIndex = 7;
}else if (currentTime == 5) {
    timeIndex = 8;
}
let i;
//used +timeArray+ to get the value of the variable(timeArray)
for (i = 0; i < timeArray.length; i++) {
    //if timeArray is <= currentTime display rows pink
    //else if timeArray === currentTime display row  teal
    //else display light bluw
    //<textarea> element is used to collect user input
    if (i < timeIndex ) { //prints dusty rose(past)
        textValue = localStorage.getItem(i);
        if (textValue === null){ //if there is no text/value(null) in row, diplay the row as empty 
            textValue = '';
        }//
        $( ".container" ).append ('<div id="'+timeArray[i]+'" class="row past time-block">\
        <div class="col-md-1 hour">'+timeArray[i]+'</div>\
        <textarea class="col-md-10" id="textStorage">'+textValue+'</textarea>\
        <button class="saveBtn col-md-1 fa fa-save" id="'+i+'"></button>\
        </div>'); 
        
    }else if (i === timeIndex){//prints dark teal(current)
        textValue = localStorage.getItem(i);
        if (textValue === null){
            textValue = '';
        }
        $( ".container" ).append ('<div id="'+timeArray[i]+'" class="row present time-block">\
        <div class="col-md-1 hour">'+timeArray[i]+'</div>\
        <textarea class="col-md-10" id="textStorage">'+textValue+'</textarea>\
        <button class="saveBtn col-md-1 fa fa-save" id="'+i+'"></button>\
        </div>'); //found the save icon from fontawesome
       
    }else {//prints light blue (future)
        textValue = localStorage.getItem(i);
        if (textValue === null){
            textValue = '';
        }
        $( ".container" ).append ('<div id="'+timeArray[i]+'" class="row future time-block">\
        <div class="col-md-1 hour">'+timeArray[i]+'</div>\
        <textarea class="col-md-10" id="textStorage">'+textValue+'</textarea>\
        <button class="saveBtn col-md-1 fa fa-save" id="'+i+'"></button>\
        </div>'); 
        
    }
}

//retrieving/storing events
$(document).ready(function(){
    $(".saveBtn").on("click", function() {
        localStorage.setItem($(this).prop("id"), $(this).prev().val());
    })
});











