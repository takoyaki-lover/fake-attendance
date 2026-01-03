let date = new Date();
let year = date.getFullYear();
let month = String(date.getMonth() + 1).padStart(2, '0');
let day = String(date.getDate()).padStart(2, '0');
let weekName = ["日", "月", "火", "水", "木", "金", "土"];
let dayOfWeek = weekName[date.getDay()];
let hour = String(date.getHours()).padStart(2, '0');
let minute = String(date.getMinutes()).padStart(2, '0');
let second = String(date.getSeconds()).padStart(2, '0');

document.getElementById("header_bottomDate").textContent = `${year}/${month}/${day}(${dayOfWeek}) ${hour}:${minute}:${second}`;