document.addEventListener("DOMContentLoaded", function () {
    const memoryItems = document.querySelectorAll(".memory-item");
  
    window.addEventListener("scroll", function () {
      memoryItems.forEach(function (item) {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          item.classList.add("visible");
        }
      });
    });
  });
  