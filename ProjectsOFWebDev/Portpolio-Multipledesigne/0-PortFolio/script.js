function ChangeImage() {
  var image = document.getElementById("MessageIcon");
  if (image.src.match("./Assets/MessageIcon.png")) {
    // image.src = "pic_bulboff.gif";
    image.src = "./Assets/close.png";
  } else {
    image.src = "./Assets/MessageIcon.png";
  }
}
