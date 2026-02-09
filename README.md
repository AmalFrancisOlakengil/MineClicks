

# MineClick

**The most satisfying way to browse the web.**

**MineClick** is a lightweight Chrome extension that brings the nostalgic, tactile sounds of the world's favorite block-building game to your browser. Every time you click, you get that crisp, wooden button "clack."

---

## Features

* **Universal Support:** Works on buttons, links, menus, and even empty space.
* **Low Latency:** Uses `mousedown` events for instant auditory feedback.
* **Intercept Mode:** Captures clicks even on complex sites like YouTube and social media.
* **Lightweight:** Zero background battery drain; only runs when you click.

---

## Installation (Developer Mode)

Until this is on the Chrome Web Store, you can install it manually:

1. **Download/Clone** this repository to a folder on your computer.
2. Ensure you have a file named `click.mp3` in the folder.
3. Open Chrome and navigate to `chrome://extensions/`.
4. Enable **"Developer mode"** in the top-right corner.
5. Click **"Load unpacked"** and select the folder containing the files.
6. *Refresh your open tabs* to start clicking!

---

## Project Structure

```text
Blocky-Clicks/
├── manifest.json   # Extension configuration
├── content.js      # The "brain" that listens for clicks
├── click.mp3       # Your Minecraft button sound
└── README.md       # You are here!

```

---

## Important Note

**Chrome's Autoplay Policy:** Browsers prevent sounds from playing automatically. You must **interact with a webpage once** (one silent click) after it loads before the sounds will start playing. This is a security feature of all modern browsers.

---


This project is for educational and entertainment purposes. Minecraft is a trademark of Mojang Synergies AB.


