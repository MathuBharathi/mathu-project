// index.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 10000; // Render provides PORT automatically

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Mathu's Bakery</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background: #fff8f0;
          color: #333;
          text-align: center;
        }
        header {
          background: #d2691e;
          color: white;
          padding: 20px;
        }
        nav {
          margin: 15px 0;
        }
        nav a {
          margin: 0 15px;
          text-decoration: none;
          color: #d2691e;
          font-weight: bold;
        }
        nav a:hover {
          text-decoration: underline;
        }
        .hero {
          padding: 50px 20px;
          background: #ffe4c4;
        }
        .products {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          padding: 20px;
        }
        .card {
          background: white;
          padding: 15px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .card img {
          max-width: 100%;
          border-radius: 10px;
        }
        footer {
          background: #d2691e;
          color: white;
          padding: 10px;
          margin-top: 30px;
        }
      </style>
    </head>
    <body>
      <header>
        <h1>🍞 Mathu's Bakery</h1>
        <p>Freshly baked happiness every day!</p>
      </header>
      <nav>
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
      </nav>
      <section class="hero" id="home">
        <h2>Welcome to Mathu's Bakery</h2>
        <p>Delicious breads, cakes, and pastries baked with love.</p>
      </section>
      <section class="products" id="menu">
        <div class="card">
          <img src="https://source.unsplash.com/200x150/?bread" alt="Bread">
          <h3>Fresh Bread</h3>
          <p>Soft, warm, and straight out of the oven.</p>
        </div>
        <div class="card">
          <img src="https://source.unsplash.com/200x150/?cake" alt="Cake">
          <h3>Cakes</h3>
          <p>Perfect for every occasion.</p>
        </div>
        <div class="card">
          <img src="https://source.unsplash.com/200x150/?pastry" alt="Pastry">
          <h3>Pastries</h3>
          <p>Sweet, flaky, and irresistible.</p>
        </div>
      </section>
      <section id="about">
        <h2>About Us</h2>
        <p>At Mathu's Bakery, we believe baking is an art. Our mission is to serve fresh, tasty, and healthy baked goods to our community every day.</p>
      </section>
      <section id="contact">
        <h2>Contact Us</h2>
        <p>Email: contact@mathusbakery.com</p>
        <p>Phone: +91 98765 43210</p>
      </section>
      <footer>
        <p>&copy; 2025 Mathu's Bakery. All Rights Reserved.</p>
      </footer>
    </body>
    </html>
  `);
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});