// *** LIGHTBOX ***
const lb = document.querySelector("#lightbox");

lb.addEventListener("click", function() {
    lb.close();
    });

    const images = document.querySelectorAll("[data-full-img]"); 

    images.forEach(image => {
        image.addEventListener("click", function() {
            const fullImg = image.dataset.fullImg;
            const imgElement = lb.querySelector("img");
            imgElement.src = fullImg;
            lb.showModal();
        });
    });