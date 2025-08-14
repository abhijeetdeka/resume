# 🌦️ Deka's Weather Checker

A simple and responsive weather application that lets users search for any location and view the **current temperature**, **weather condition**, and **city name** in real-time using the [WeatherAPI](https://www.weatherapi.com/).

---

## ✨ Features

- 🔍 Search weather by **city name**.
- 📡 Fetches **real-time weather data**.
- 🌡 Displays temperature in **Celsius** (and Fahrenheit optionally).
- 📋 Shows weather description (e.g., "Sunny", "Cloudy").
- 📱 Responsive design with a clean UI.
- 🖱 Easy to use — just enter a location and click **Get Weather**.

---

## 🛠️ Tech Stack

- **HTML5** — Structure of the app.
- **CSS3** — Styling and responsive design.
- **JavaScript (Vanilla JS)** — Fetch API to retrieve weather data.
- **WeatherAPI** — Real-time weather data provider.

---

## 📂 Project Structure

weather-app/
│── index.html # Main HTML file
│── styles.css # Styling file
│── script.js # JavaScript logic
└── README.md # Documentation


---

## 🔑 API Setup

This app uses **WeatherAPI**. You need an API key to run it.

1. Go to [WeatherAPI Sign Up](https://www.weatherapi.com/signup.aspx) and create a free account.
2. Copy your API key.
3. Open `script.js` and replace:
   ```javascript
   const apiKey = "YOUR_API_KEY_HERE";
▶️ How to Run

1. Clone the repository (or download as ZIP):
   git clone https://github.com/YOUR_USERNAME/weather-app.git
   cd weather-app

2. Open index.html in your browser.
   No server setup required — works locally.


⚠️ Notes

If you enter an invalid location, an alert will notify you.

Ensure your API key is valid, otherwise the app won't fetch data.

Weather data updates frequently depending on API limits.

