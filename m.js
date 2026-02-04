function changeGift() {
    const giftDiv = document.getElementById("gift");
    const gifts = {
      1: { emoji: "🍫", text: "Happy Chocolate day😊" },
      2: { emoji: "😉", text: "Kitkat maybe Sweet, but you're the sweetest " },
      3: { emoji: "🥰", text: "With you, everything feels sweeter" },
      4: { emoji: "😁", text: "I don't need chocolate when you're with me" },
    };
  
    const days = Object.keys(gifts);
    const randomDay = days[Math.floor(Math.random() * days.length)];
    const { emoji, text } = gifts[randomDay];
  
    giftDiv.innerHTML = `<span>${emoji}</span><p style="color:red; white-space: pre-line; text-align: center;">${text}</p>`;

  }
  
  document.getElementById("cube").addEventListener("click", function () {
    this.classList.toggle("active");
    if (!this.classList.contains("active")) {
      changeGift();
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    changeGift();
  
    const cube = document.getElementById("cube");
    cube.classList.add("active");
    setTimeout(() => {
      cube.classList.remove("active");
    }, 3000);
  });
  