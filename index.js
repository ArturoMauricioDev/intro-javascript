const mountNode = document.querySelector("#app");

const parrafo = document.createElement("p");
const text = document.createTextNode(
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eveniet necessitatibus tempore hic non aliquid sequi numquam quo enim esse placeat alias provident dolores ratione, quam, dolorum natus praesentium dicta."
);
parrafo.appendChild(text);

const card = document.createElement("div");
card.className = "card";

card.appendChild(parrafo);

mountNode.appendChild(card);
