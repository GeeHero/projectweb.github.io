document.addEventListener("DOMContentLoaded", function () {
    const imageLinks = document.querySelectorAll("#picture-container a");

    imageLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            // The link will open in the same tab by default
        });
    });
});

