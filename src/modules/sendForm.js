const sendForm = ({ formId, someElements = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement("div");
  const loadText = "Loading...";
  const errorText = "Error!";
  const successText = "Success!";

  const validate = (list) => {
    let success = true;
    // list.forEach((input) => {
    //   if (!input.classList.contains("success")) {
    //     success = false;
    //   }
    // });
    return success;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};
    statusBlock.textContent = loadText;
    form.append(statusBlock);
    //
    formData.forEach((value, key) => {
      formBody[key] = value;
    });

    someElements.forEach((elem) => {
      const element = document.getElementById(elem.id);
      console.log(element);
      if (elem.type === "block") {
        //
        formBody[elem.id] = element.textContent;
      } else if (elem.type === "input") {
        formBody[elem.id] = element.value;
      }
    });

    console.log("submit");

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;
          formElements.forEach((input) => {
            input.value = "";
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      alert("Данные не валидны!");
    }
  };
  try {
    if (!form) {
      throw new Error("Верните форму на место!");
    }
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};
export default sendForm;
