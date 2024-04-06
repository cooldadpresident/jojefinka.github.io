const textElement = document.getElementById("KytickaText");
const textWidth = textElement.offsetWidth;
const textHeight = textElement.offsetHeight;

console.log(textWidth, textHeight);

function scrollToBottom() {
    const documentHeight = document.documentElement.scrollHeight;
    window.scrollTo({ top: documentHeight, behavior: 'smooth' });
  }
  
  // Call the function to initiate scrolling (optional placement)
  scrollToBottom();
  // Alternatively, call the function on an event (e.g., button click)
  // document.getElementById('scrollToBottomButton').addEventListener('click', scrollToBottom);

