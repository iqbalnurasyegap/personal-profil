//tulisan berubah
const textContainer = 
              document.getElementById("hero");
        
        let hue = 0;
  
        setInterval(() => {
            hue = (hue + 1) % 360;
            const color = `hsl(${hue}, 100%, 50%)`;
            textContainer.style.color = color;
        }, 50);

// toggle &responsive navigasi
const navSlide = () => {
    const burger = document.querySelector(".burger")
    const navList = document.querySelector("nav")

    burger.addEventListener("click", () => {
        navList.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
};

navSlide();

//hapus form sebelum unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")){
        form.reset();
    }
}
