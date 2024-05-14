import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import validator from "./modules/validator";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import calc from "./modules/calculacor";
import sendForm from "./modules/sendForm";

timer("30 may 2024");
menu();
modal();
validator();
tabs();
slider();
calc();
sendForm({
  formId: "form1",
  someElements: [
    {
      type: "block",
      id: "total",
    },
  ],
});
sendForm({
  formId: "form2",
  someElements: [
    {
      type: "block",
      id: "total",
    },
  ],
});
sendForm({
  formId: "form3",
  someElements: [
    {
      type: "block",
      id: "total",
    },
  ],
});
