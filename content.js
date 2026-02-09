const clickSound = new Audio(chrome.runtime.getURL("click.mp3"));

// We listen for the 'mousedown' event because it feels faster/more responsive 
// than 'click' (which waits for you to let go of the mouse button).
document.addEventListener("mousedown", () => {
  // Reset sound to start (essential for fast clicking)
  clickSound.currentTime = 0;
  
  clickSound.play().catch(err => {
    // This will only log if Chrome's autoplay policy blocks the sound
    console.log("Interaction required to start audio.");
  });
}, true); // 'true' ensures we catch the click even if the website tries to block it