const countdown = () => {
    const endDate = new Date("2025-06-21T15:59:59"); // Cambia a tu fecha objetivo
    const now = new Date();
    const diff = endDate - now;
  
    if (diff <= 0) {
      document.getElementById("countdown").innerHTML = "<h1>¡Llegó el día!</h1>";
      return;
    }
  
    const secondsInAMonth = 30 * 24 * 60 * 60; // Aprox. 30 días en un mes
    const secondsInADay = 24 * 60 * 60;
    const secondsInAnHour = 60 * 60;
    const secondsInAMinute = 60;
  
    let remainingSeconds = Math.floor(diff / 1000);
  
    const months = Math.floor(remainingSeconds / secondsInAMonth);
    remainingSeconds %= secondsInAMonth;
  
    const days = Math.floor(remainingSeconds / secondsInADay);
    remainingSeconds %= secondsInADay;
  
    const hours = Math.floor(remainingSeconds / secondsInAnHour);
    remainingSeconds %= secondsInAnHour;
  
    const minutes = Math.floor(remainingSeconds / secondsInAMinute);
    const seconds = remainingSeconds % secondsInAMinute;
  
    document.getElementById("months").textContent = String(months).padStart(2, "0");
    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
  };
  
  setInterval(countdown, 1000);
  countdown(); // Llamada inicial para evitar el retraso de 1 segundo