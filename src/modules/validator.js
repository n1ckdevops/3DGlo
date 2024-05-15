const validator = () => {
  const squareNumber = document.querySelector(".calc-square");
  const roomCount = document.querySelector(".calc-count");
  const countDays = document.querySelector(".calc-day");
  const users = document.querySelectorAll('[name="user_name"]');
  const emails = document.querySelectorAll('[name="user_email"]');
  const phones = document.querySelectorAll('[name="user_phone"]');
  const messages = document.querySelectorAll('[name="user_message"]');

  const validateMinLength = (input, minLength) => {
    const value = input.value.trim();
    if (value.length < minLength) {
      input.setCustomValidity(`Минимальная длина ${minLength} символа(ов)`);
    } else {
      input.setCustomValidity("");
    }
  };
  
  const allowNumber = (e) => {
    e.target.value = e.target.value.replace(/\D+/g, "");
  };

  squareNumber.addEventListener("input", allowNumber);
  roomCount.addEventListener("input", allowNumber);
  countDays.addEventListener("input", allowNumber);

  users.forEach((el) => {
    el.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\-\s]+/, "");
      validateMinLength(e.target, 3); // Добавляем валидацию минимальной длины
    });
  });

  emails.forEach((el) => {
    el.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(
        /[^a-zA-Z0-9\@\-\_\.\!\~\*\']+/,
        ""
      );
    });
  });

  phones.forEach((el) => {
    el.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^0-9()\-\+]+/, "");
      validateMinLength(e.target, 11);
    });
  });

  messages.forEach((el) => {
    el.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ0-9\-\s\.\,\!]+/, "");
      validateMinLength(e.target, 15);
    });
  });
};

export default validator;
