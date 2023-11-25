function startCounting(counterId, endValue) {
    let counter = 0;
    setInterval(function() {
      if (counter <= endValue) {
        document.getElementById(counterId).innerHTML = counter + "+";
        counter++;
      }
    }, 10); // Adjust the interval as needed
  }

  document.addEventListener('DOMContentLoaded', function() {
    startCounting('counter1', 200);
    startCounting('counter2', 300);
    startCounting('counter3', 500);
  });