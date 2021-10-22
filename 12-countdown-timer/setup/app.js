const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const deadline = document.querySelector(".deadline");
const giveaway = document.querySelector(".giveaway");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2021, 09, 31, 12, 00, 00);
let month = futureDate.getMonth();
month = months[month];
let day = futureDate.getDay();
day = weekdays[day];

const year = futureDate.getFullYear();
const date = futureDate.getDate();
const hour = futureDate.getHours();
const mins = futureDate.getMinutes();

giveaway.textContent = `giveaway ends on ${day} , ${date} ${month} ${year} ${hour}:${mins}${mins}am`;

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
const oneDay = 24*60*60*1000;
const oneHour = 60*60*1000;
const oneMinute = 60*1000;

let days = Math.floor(t/(oneDay));
let hours = Math.floor((t%oneDay)/(oneHour));
let minutes = Math.floor((t%oneHour)/(oneMinute));
let seconds = Math.floor((t%oneMinute)/1000); 

const values = [days, hours, minutes, seconds];

function format(item){
  if (item<10){
    return (item =`0${item}`);
  }
  else return item;
}

items.forEach(function(item,index){
  item.innerHTML = format(values[index]);
});
if (t<0){
  clearInterval(countdown);
  deadline.innerHTML = `<h4 class ="expired"> Sorry, this is Expired</h4>`;
}
}
// countdown;
let countdown = setInterval(getRemainingTime, 1000);
//set initial values
getRemainingTime();