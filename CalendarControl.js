document.addEventListener("DOMContentLoaded", function () {
    let calendar = document.createElement("div");
    calendar.id = "calendar";
    document.body.appendChild(calendar);
});

let selectedMonth = new Date().getMonth();
let selectedYear = new Date().getFullYear();

function showCalendarControl(inputField) {
    let calendar = document.getElementById("calendar");
    calendar.innerHTML = generateCalendarHTML(selectedMonth, selectedYear, inputField);
    calendar.style.display = "block";
    
    let rect = inputField.getBoundingClientRect();
    calendar.style.top = rect.bottom + window.scrollY + "px";
    calendar.style.left = rect.left + window.scrollX + "px";

    document.addEventListener("click", function hideCalendar(event) {
        if (!calendar.contains(event.target) && event.target !== inputField) {
            calendar.style.display = "none";
            document.removeEventListener("click", hideCalendar);
        }
    });
}

function generateCalendarHTML(month, year, inputField) {
    let firstDay = new Date(year, month, 1).getDay();
    let daysInMonth = new Date(year, month + 1, 0).getDate();

    let calendarHTML = `
        <div id="calendarHeader">
            <button id="prevMonth" onclick="changeMonth(-1, '${inputField.name}')">&lt;</button>
            ${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}
            <button id="nextMonth" onclick="changeMonth(1, '${inputField.name}')">&gt;</button>
        </div>
        <table id="calendarTable">
            <tr>
                <th>Sun</th> <th>Mon</th> <th>Tue</th> <th>Wed</th> <th>Thu</th> <th>Fri</th> <th>Sat</th>
            </tr>`;

    let date = 1;
    for (let i = 0; i < 6; i++) {
        calendarHTML += "<tr>";
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                calendarHTML += "<td></td>";
            } else if (date > daysInMonth) {
                break;
            } else {
                calendarHTML += `<td onclick="selectDate(${date}, ${month}, ${year}, '${inputField.name}')">${date}</td>`;
                date++;
            }
        }
        calendarHTML += "</tr>";
    }

    calendarHTML += "</table>";
    return calendarHTML;
}

function selectDate(day, month, year, fieldName) {
    let inputField = document.getElementsByName(fieldName)[0];
    inputField.value = `${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    document.getElementById("calendar").style.display = "none";
}

function changeMonth(offset, fieldName) {
    selectedMonth += offset;

    if (selectedMonth < 0) {
        selectedMonth = 11;
        selectedYear--;
    } else if (selectedMonth > 11) {
        selectedMonth = 0;
        selectedYear++;
    }

    let calendar = document.getElementById("calendar");
    calendar.innerHTML = generateCalendarHTML(selectedMonth, selectedYear, document.getElementsByName(fieldName)[0]);
}
