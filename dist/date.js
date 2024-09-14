export function updateDateTime() {
    const now = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = daysOfWeek[now.getDay()];
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    const currentDateTime = `${day}, ${formattedDate}, ${formattedTime}`;
    document.querySelector('#datetime').textContent = currentDateTime; //non-null assetment
}
setInterval(updateDateTime, 1000);
