const validator = () => {
  const squareNumber = document.querySelector(".calc-square");
  const roomCount = document.querySelector(".calc-count");
  const countDays = document.querySelector(".calc-day");
  const users = document.querySelectorAll('[name="user_name"]');
  const emails = document.querySelectorAll('[name="user_email"]');
  const phones = document.querySelectorAll('[name="user_phone"]');
  const messages = document.querySelectorAll('[name="user_message"]');

  const allowNumber = (e) => {
    e.target.value = e.target.value.replace(/\D+/g, "");
  };
  squareNumber.addEventListener("input", allowNumber);
  roomCount.addEventListener("input", allowNumber);
  countDays.addEventListener("input", allowNumber);

  users.forEach((el) => {
    el.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\-\s]+/, "");
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
    });
  });

  messages.forEach((el) => {
    el.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ0-9\-\s\.\,\!]+/, "");
    });
  });
};
export default validator;
