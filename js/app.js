const items = [];

window.onload = function() {
  document.getElecmentById("add").onclick = adItem;
}

const addItem = function () {
  const text = document.getElementById("Input").value;

  items.push({
    priority: "low",
    complete: false,
    content: text
  });

  document.getElementById("Input").value = "";

  renderItems();
};

const renderItems = function() {
  const list = document.getElementById("Ul")
  list.innerHTML = "";

  for (let i=0; i < items.length; i++){
    const li 
  }
}
