document.addEventListener("DOMContentLoaded", function() {
    const text = "Step into a realm where imagination knows no bounds with our groundbreaking art gallery website. Our platform, powered by state-of-the-art AR (Augmented Reality) and VR (Virtual Reality) image generators, redefines the art experience. Picture yourself surrounded by masterpieces that come to life before your eyes, thanks to our enchanting AR technology. Journey through virtual galleries in mesmerizing VR, where every corner reveals a new world of artistic wonder. Our sophisticated algorithms craft breathtaking, unique artworks tailored to your wildest dreams. Whether you're an art aficionado or a visionary creator, our tools unlock endless possibilities for boundless creativity. The intuitive interface invites you to effortlessly explore and create, turning your artistic fantasies into reality. Experience the magic of high-resolution outputs that capture every intricate detail. Embark on an extraordinary adventure in art with our AR and VR image generators. Let our platform transform your artistic journey into an exhilarating odyssey beyond imagination.";
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
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('nav-menu');
  
    menuIcon.addEventListener('click', () => {
      if (navMenu.style.display === 'flex') {
        navMenu.style.display = 'none';
      } else {
        navMenu.style.display = 'flex';
      }
    });
  });
