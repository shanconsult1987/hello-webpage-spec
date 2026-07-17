const colors = ["#f3f4f6", "#fef3c7", "#dbeafe", "#dcfce7", "#fee2e2"];

let colorIndex = 0;

const colorButton = document.getElementById("colorButton");

const cycleBackgroundColor = () => {
  colorIndex = (colorIndex + 1) % colors.length;
  document.body.style.backgroundColor = colors[colorIndex];
};

colorButton.addEventListener("click", cycleBackgroundColor);
