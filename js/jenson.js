const categoryInput = document.getElementById("category-input");
const titleInput = document.getElementById("title-input");
const contentInput = document.getElementById("content-input");
const imageInput = document.getElementById("image-input")

const contentText = document.getElementById("content");
const titleText = document.getElementById("title");
const categoryText = document.getElementById("category");

const contentImage = document.getElementById("img-example");


categoryInput.addEventListener("input", (event) => {
    categoryText.innerText = event.target.value;
    if (event.target.value.trim() === "") {
        category.innerText = "Tech & AI";
    }
});

titleInput.addEventListener("input", (event) => {
    titleText.innerText = event.target.value;
    if (event.target.value.trim() === "") {
        title.innerText = "英伟达董事会调查发现：CEO黄仁勋......";
    }
});

contentInput.addEventListener("input", (event) => {
    contentText.innerText = event.target.value;
    if (event.target.value.trim() === "") {
        content.innerText = "balabala ——一位明显受惊的高管说道";
    }
});

imageInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    contentImage.src = imageUrl;
})
