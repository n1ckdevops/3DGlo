document.addEventListener("DOMContentLoaded", function () {
  const greeting = document.getElementById("greeting");
  const currentDay = document.getElementById("current-day");
  const currentTime = document.getElementById("current-time");
  const daysToNewYear = document.getElementById("days-to-new-year");

  const getCurrentDateTime = () => {
    const now = new Date();
    const hours = now.getHours();

    let greetingText;
    if (hours >= 5 && hours < 12) {
      greetingText = "Доброе утро";
    } else if (hours >= 12 && hours < 18) {
      greetingText = "Добрый день";
    } else if (hours >= 18 && hours < 24) {
      greetingText = "Добрый вечер";
    } else {
      greetingText = "Доброй ночи";
    }

    const daysOfWeek = [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ];
    const currentDayOfWeek = daysOfWeek[now.getDay()];
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes().toString().padStart(2, "0");
    const currentSecond = now.getSeconds().toString().padStart(2, "0");

    const newYearDate = new Date(now.getFullYear() + 1, 0, 1);
    const daysToNewYearCount = Math.floor(
      (newYearDate - now) / (1000 * 60 * 60 * 24)
    );

    greeting.textContent = `${greetingText}!`;
    currentDay.textContent = `Сегодня: ${currentDayOfWeek}`;
    currentTime.textContent = `Текущее время: ${currentHour}:${currentMinute}:${currentSecond}`;
    daysToNewYear.textContent = `До нового года осталось ${daysToNewYearCount} дней`;
  };

  getCurrentDateTime();

  setInterval(getCurrentDateTime, 1000);
});
