function updateClock(){

    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;

    const month = (now.getMonth() + 1).toString().padStart(2, 0);
    const day = now.getDate().toString().padStart(2, 0);
    const year = now.getFullYear().toString().padStart(4, 0);
    const dayString = `${month}/${day}/${year}`;
    document.getElementById("date").textContent = dayString;

}

updateClock();
setInterval(updateClock, 1000);