fetch("images.json")
.then(res => res.json())
.then(images => {

  const gallery = document.getElementById("gallery");

  images.reverse().forEach(img => {

    const image = document.createElement("img");
    image.src = "images/" + img;

    gallery.appendChild(image);
  });
});