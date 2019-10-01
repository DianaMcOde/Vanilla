const testFunction = (a, b) => a + b;

// module.exports = testFunction;
function update(id, placeholder) {
  document.getElementById(id).addEventListener("click", function() {
    document.getElementById(
      placeholder
    ).innerHTML = `I am placeholder: ${placeholder}`;
  });
}
document
  .getElementById("outer-element")
  .addEventListener("click", e => console.log("Clicked", e.toElement.id));
