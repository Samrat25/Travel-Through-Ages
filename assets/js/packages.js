window.addEventListener("load", () => {
    const loader = document.querySelector(".loaderr");
    loader.style.transform = "translateY(-100%)";
  });
  window.onscroll = function () {
    if (scrollY > 50) {
      navbar.classList.add("active");
    } else {
      navbar.classList.remove("active");
    }
  };
  