console.log("TEST")

image = document.getElementById("image")
id = 1

changeImage = () => {
    image.setAttribute("src", `./Images/${id}.jpg`);
    id += 1
}

