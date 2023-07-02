const dateDayWeek = document.querySelector('.date-day');
const dateDayMonth = document.querySelector('.date');
const dateMonth = document.querySelector('.date-month');
const dateYear = document.querySelector('.date-year');

const digitaClock = document.querySelector('.digital-clock');

const clockSecondsArrow = document.querySelector('.clock-seconds__arrow');
const clockMinutesArrow = document.querySelector('.clock-minutes__arrow');
const clockHoursArrow = document.querySelector('.clock-hours__arrow');

const daysOfWeek = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота'];
const monthOfYear = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];

setInterval(() => {
    const currentTime = new Date();

    const currentDay = daysOfWeek[currentTime.getDay()];
    const currentDate = currentTime.getDate();
    const currentMonth = monthOfYear[currentTime.getMonth()];
    const currentYear = currentTime.getFullYear();

    const currentHour = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const currentSeconds = currentTime.getSeconds();

    dateDayWeek.textContent = currentDay;
    dateDayMonth.textContent = currentDate;
    dateMonth.textContent = currentMonth;
    dateYear.textContent = currentYear;

    const formatTime = `${currentHour.toString().padStart(2, '0')}:${currentMinutes.toString().padStart(2, '0')}:${currentSeconds.toString().padStart(2, '0')}`

    digitaClock.textContent = `Поточний час: ${formatTime}`;

    clockSecondsArrow.style.transform = `rotate(${6 * currentSeconds}deg)`;
    clockMinutesArrow.style.transform = `rotate(${6 * currentMinutes}deg)`;
    clockHoursArrow.style.transform = `rotate(${30 * currentHour + 0.5 * currentMinutes}deg)`;
}, 1000);