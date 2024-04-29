var placeholders = ["Your portfolio is very impressive! You have a great eye for design and your work is very polished...",
    "I'm really impressed with the range of projects you've tackled in your portfolio. It's clear that you're a versatile and talented designer...",
    "Your attention to detail is really apparent in your portfolio. Your work is both aesthetically pleasing and thoughtfully executed...",
    "I can tell that you're passionate about your work and that shows through in your portfolio. Your designs are engaging and innovative..."];
var currentPlaceholder = 0;
var input = document.getElementById("sms");

setInterval(function () {
    currentPlaceholder = (currentPlaceholder + 1) % placeholders.length;
    input.placeholder = placeholders[currentPlaceholder];
}, 2000);