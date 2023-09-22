function init() {
  let socket = io.connect("http://localhost:5000");

  socket.on("connect", () => {
    console.log(socket.id);
  });
  let text = "";
  document.getElementById("txt").addEventListener("change", function () {
    text = this.value;
    console.log(text);
  });
  document.getElementById("btn").addEventListener("click", function () {
    socket.emit("promeni", text);
  });
  socket.on("promenjena", (poruka) => {
    console.log(poruka);
  });
}

window.addEventListener("load", init);
