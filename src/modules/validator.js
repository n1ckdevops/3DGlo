const validator = () => {
  const squareNumber = document.querySelector(".calc-square");
  const roomCount = document.querySelector(".calc-count");
  const countDays = document.querySelector(".calc-day");
  // func only numbers
  const allowNumber = (e) => {
    e.target.value = e.target.value.replace(/\D+/g, "");
  };
  squareNumber.addEventListener("input", allowNumber);
  roomCount.addEventListener("input", allowNumber);
  countDays.addEventListener("input", allowNumber);
  // username
  const user = document.querySelectorAll('[name="user_name"]');
  user.forEach((el) => {
    el.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\-\s]+/, "");
    });
  });
  // email
  const email = document.querySelectorAll('[name="user_email"]');
  email.forEach((el) => {
    el.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(
        /[^а-яА-ЯёЁ0-9\@\-\_\.\!\~\*\']+/,
        ""
      );
    });
  });
  // phone
  const phone = document.querySelectorAll('[name="user_phone"]');
  phone.forEach((el) => {
    el.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^0-9()\-]+/, "");
    });
  });
  // user-message
  const message = document.querySelectorAll('[name="user_message"]');
  message.forEach((el) => {
    el.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\-\s]+/, "");
    });
  });
};
export default validator;
