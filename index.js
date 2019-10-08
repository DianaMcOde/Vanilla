const testFunction = (a, b) => a + b;

// module.exports = testFunction;
function update(id, placeholder) {
  document.getElementById(id).addEventListener("click", function() {
    document.getElementById(
      placeholder
    ).innerHTML = `I am placeholder: ${placeholder}`;
  });
}
//false - the event handler is set in the bubbling phase
document
  .getElementById("outer-element")
  .addEventListener("click", e => console.log(e.toElement.id), false);

document.querySelector("#outer-element").addEventListener(
  "click",
  e => {
    if (e.target.tagName === "BUTTON") {
      let number_left = document.querySelectorAll(".box").length;
      if (number_left > 1) {
        var remove = e.target;
        remove.parentNode.removeChild(remove);
      }
    }
  },
  false
);
