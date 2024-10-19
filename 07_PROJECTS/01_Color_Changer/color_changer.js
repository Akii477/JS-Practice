console.log("Testing Purposes");

const selectButtons = document.querySelectorAll(".button");
const selectBody = document.querySelector("body");
const selectHeader = document.querySelectorAll(".fontColor");

selectButtons.forEach(function (buttons) {
  console.log(buttons);
  buttons.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case "grey":
        selectBody.style.backgroundColor = e.target.id;
        selectHeader.forEach((header) => (header.style.color = "Red"));
        break;

      case "white":
        selectBody.style.backgroundColor = e.target.id;
        selectHeader.forEach((header) => (header.style.color = "DarkGrey"));
        break;

      case "blue":
        selectBody.style.backgroundColor = e.target.id;
        selectHeader.forEach((header) => (header.style.color = "Beige"));
        break;

      case "yellow":
        selectBody.style.backgroundColor = e.target.id;
        selectHeader.forEach((header) => (header.style.color = "DarkGreen"));
        break;

      default:
        selectBody.style.backgroundColor = "white";
        selectHeader.forEach((header) => (header.style.color = "Black"));

        break;
    }
  });
});
