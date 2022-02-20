//Author: Juan Pablo Contreras

var period = 5000;
var notes = ["E1", "F1", "G1", "A1", "B1", "C2", "D2", "E2", "F2", "G2", "A2", "B2", "C3"];

var intervalId = 0;

//event listener to start displaying notes
document.getElementById("start-button").addEventListener("click", displayNotes);


//displayNotes 
//this function executes when user clicks on start-button
function displayNotes() {
    intervalId = window.setInterval(function(){  //set intervals at which notes will be displayed
        
        //function that will execute when the interval of time has elapsed
        document.getElementById('notesContainer').innerHTML = "";
        var idx = randomIntFromInterval(0,notes.length-1);  //choose random note from array of notes    
        document.getElementById('notesContainer').innerHTML = notes[idx];

    }, period);
}




//event listener to stop displaying notes
document.getElementById("end-button").addEventListener("click", hideNotes);


//hideNotes
//this function executes when the user clicks on end-button
function hideNotes() {
    clearInterval(intervalId);
    document.getElementById('notesContainer').innerHTML = "";
}


//randomIntFromInterval
//Produces a random number between min and max inclusive
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}