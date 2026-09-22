// get the current day
const day = document.getElementById("day");
const dayName = new Date().toLocaleDateString('en-US', { weekday: 'long' });
// adds the day to the day id
day.innerHTML += `${dayName}`

// get the table id so we can add the stuff
const table = document.getElementById("timetable");
let scheduleTime = new Date();
// sets the time to start at 8
scheduleTime.setHours(8, 0, 0);

// loops 25 times cuz its from 8AM until 8PM, with intervals of 30 minutes
for (let i = 0; i <= 25; i++) {
    let timeString = scheduleTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    // adds the time to the table id
    table.innerHTML += `
        <tr>
            <td>${timeString}</td>
            <!-- names of the classes. TODO -->
            <td>Row ${i}, Cell B</td>
        </tr>
    `;

    // intervals of 30 minutes
    scheduleTime.setMinutes(scheduleTime.getMinutes() + 30);
}