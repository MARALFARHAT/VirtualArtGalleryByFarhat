document.addEventListener("DOMContentLoaded", function() {
    const text = "Augmented Reality (AR) allows you to see whatever you want in the real world by seamlessly integrating digital elements into your physical environment. With AR, you can generate and visualize 3D objects, interactive graphics, or even immersive scenes directly through your smartphone or AR glasses.";
    const container = document.querySelector(".typing-container");

    let index = 0;
    function type() {
        if (index < text.length) {
            container.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 30); // Adjust typing speed here
        }
    }

    type();
});
