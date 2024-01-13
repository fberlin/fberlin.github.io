document.addEventListener("DOMContentLoaded", function() {
    var currentDate = new Date();
    var targetDate = new Date("2024-01-01");

    var timeDiff = Math.abs(currentDate.getTime() - targetDate.getTime());
    var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    var currentDateElement = document.getElementById("currentDate");
    currentDateElement.textContent = currentDate.toLocaleDateString();

    var resultElement = document.getElementById("result");
    var bottomIcon = document.getElementById("bottomIcon");

    if (daysDiff % 2 === 0) {
        resultElement.textContent = "I natt ska du ha gummiband när du sover!";
        resultElement.style.color = "green";
        bottomIcon.style.color = "green";
        bottomIcon.className = "fas fa-check-circle text-success"; // Font Awesome grön checkbox
    } else {
        resultElement.textContent = "Inget gummiband i natt!";
        resultElement.style.color = "red";
        bottomIcon.style.color = "red";
        bottomIcon.className = "fas fa-times-circle text-danger"; // Font Awesome röd stoppsignal
    }
});