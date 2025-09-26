// index.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 10000; // Render provides PORT automatically

app.get("/", (req, res) => {
  res.send(` 
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Sweet Bliss Pastry Shop</title>
      <link rel="icon" type="image/png" href="https://images.scalebranding.com/962e2a15-088e-42de-bc9d-636642d7e7c2.png">
      <style>
          body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #fffaf0;
    color: #333;
  }
  header {
    background: #ff6f61;
    padding: 20px;
    text-align: center;
    color: white;
  }
        nav {
          display: flex;
          justify-content: center;
          background: #ffcccb;
          padding: 10px;
        }
        nav a {
          margin: 0 15px;
          text-decoration: none;
          color: #333;
          font-weight: bold;
          transition: all 0.3s ease;
        }
        nav a:hover {
          color: #e67e22;
          transform: scale(1.2);
        }
        .hero {
          text-align: center;
          padding: 50px;
          background: url("https://images.unsplash.com/photo-1504674900247-0877df9cc836") no-repeat center/cover;
          color: white;
        }
        .hero h1 {
          font-size: 3em;
          transition: all 0.3s ease;
        }
        .hero h1:hover {
          color: #e67e22;
        }
        .products {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          padding: 30px;
        }
        .card {
          background: white;
          border-radius: 12px;
          box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
          overflow: hidden;
          transition: transform 0.3s;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          border: 1px solid #ddd;
        }
        .card:hover {
          transform: scale(1.05);
        }
        .card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .card-content {
          padding: 15px;
          text-align: center;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .card-content h3 {
          margin: 10px 0;
        }
        .card-content a {
          margin-top: auto;
          display: inline-block;
          padding: 10px 10px;
          background: #ff6f61;
          color: white;
          text-decoration: none;
          border-radius: 6px;
          text-align: center;
          transition: all 0.3s ease;
        }
        .card-content a:hover {
          background: #e65b50;
          transform: scale(1.05);
        }
        .about, .contact {
          padding: 30px;
          text-align: center;
        }
        .contact {
          background-color: #ffb6c1;
          color: #030303;
          text-align: center;
          padding: 20px;
          margin-top: 30px;
        }
        .contact h2 {
          margin-bottom: 10px;
          font-size: 1.5rem;
          color: #030303;
        }
        .contact p {
          display: inline-block;
          margin: 5px 15px;
          font-size: 1rem;
        }
        .contact a {
          text-decoration: none;
          font-weight: bold;
          color: #030303;
        }
        footer {
          text-align: center;
          padding: 20px;
          background: #ff6f61;
          color: white;
        }
      </style>
    </head>
    <body>
      <header> 
        <h1>Sweet Bliss Pastry Shop</h1> 
        <p>Delicious Pastries, Made with Love</p> 
      </header> 
      <nav> 
        <a href="#home">Home</a> 
        <a href="#products">Pastries</a> 
        <a href="#about">About</a> 
        <a href="#contact">Contact</a>
      </nav>
      <section class="hero" id="home"> 
        <h1>Freshly Baked Everyday</h1> 
        <p>Explore our wide variety of pastries</p> 
      </section> 
      </section> <section class="products" id="products"> 
    <div class="card"> <img src="https://dy9wzeeht8myy.cloudfront.net/images/catalog/flowers/CH13-600x600.jpeg" alt="Chocolate Cake"> 
      <div class="card-content"> 
        <h3>Chocolate Cake</h3> 
        <p>Rich and creamy delight.</p> 
        <a href="https://www.myflowertree.com/chocolate-cake-2516?utm_source=Bing&utm_medium=CPC&utm_campaign=P-Max-Generic&msclkid=33ffad36b77e13adb615c58d5a10a30a">Order Now</a>
      </div> 
    </div>
    <div class="card"> <img src="https://media.istockphoto.com/id/959932392/photo/homemade-strawberry-tart-with-vanilla-cream.jpg?s=612x612&w=0&k=20&c=At5x_pl5QqNjqmw9JJME_xnYa1DgperaYkShUltX5QU=" alt="Strawberry Tart"> 
      <div class="card-content"> 
        <h3>Strawberry Tart</h3> 
        <p>Fresh strawberries with creamy base.</p> 
        <a href="https://elocakes.com/product/strawberry-tart/?srsltid=AfmBOopKc780TziBUGhSAXTGyob-_Q-Obb-xpHHytmgYATU4M3ITX93j2CA">Order Now</a>
      </div> 
    </div> 
    <div class="card"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN2jImznYeD8CtPpLrvTnnITF8kAnFx6duHQ&s" alt="Blueberry Jar Cake"> 
      <div class="card-content"> 
        <h3>Blueberry Jar Cake</h3> 
        <p>Flavors of Blueberry.</p> 
        <a href="https://www.bakingo.com/p/jar-cakes/blueberry-single-jar-cake-jar1285bluebr?srsltid=AfmBOop158yHXwM_oRiuMLr3GedB6sfWOTq1ngNPHZOwrQ9dB_tiQWF_JxU">Order Now</a>
      </div> 
    </div> 
    <div class="card"> <img src="https://cdn.shopify.com/s/files/1/0382/1836/7107/files/A7R01335-230419_sm_2048x2048.jpg?v=1682434468" alt="Croissant"> 
      <div class="card-content"> 
        <h3>Buttery Croissant</h3> 
        <p>Perfectly flaky and buttery.</p> 
        <a href="https://www.zeptonow.com/pn/butter-croissant/pvid/37732d9c-b578-461e-9bd2-54bdd92b74d9?srsltid=AfmBOorqto7x1wk9CYF43dSdMWZB70au5DiPUnFhreo5Qh4lgcr55OJJCCw">Order Now</a>
      </div> 
    </div> 
    <div class="card"> <img src="https://www.homecookingadventure.com/wp-content/uploads/2021/06/homemade_eggless_churros_main.webp" alt="Churros"> 
      <div class="card-content"> 
        <h3>Churros</h3> 
        <p>Super Crispy and Crunchy.</p> 
        <a href="https://www.etsy.com/in-en/listing/1831010086/chocolate-dipped-churros-dessert-recipe?ls=r&ref=hp_home_hub_2-1&pro=1&content_source=5453bc9a62cf6d36850a6e702a8a8bd6%253Af7f17f95a5516223e08f4d571545166b94b2176d&logging_key=5453bc9a62cf6d36850a6e702a8a8bd6%3Af7f17f95a5516223e08f4d571545166b94b2176d">Order Now</a>
    </div> 
    </div>
    <div class="card"> <img src="https://cdn.dotpe.in/longtail/store-items/6689192/Zq22USEv.webp" alt="Vanilla Jar Cake"> 
      <div class="card-content"> 
        <h3>Vanilla Jar Cake</h3> 
        <p>Rich in Flavour of Vanilla.</p> 
        <a href="https://www.lemuriafreshbites.in/product/30998209/Vanilla-Jar-Cake?srsltid=AfmBOopGf1P65sEIx8i1Cg35wZwMTMvKTNsfezKAzmNuD7_c9cYD-MaJutI">Order Now</a>
      </div> 
    </div> 
    <div class="card"> <img src="https://www.simplytrinicooking.com/wp-content/uploads/red-velvet-cake-500x500.jpg" alt="Red Velvet Cake"> 
      <div class="card-content"> 
        <h3>Red Velvet Cake</h3> 
        <p>Taste the Velvet and Delight.</p> 
        <a href="https://www.fnp.com/gift/red-velvet-eggless-bento-cake?srsltid=AfmBOoqR9t_VmtVjHXJf68Yjuvr-mWDUmJj9SLU9CZkUDExCT_oeXmlsX0M">Order Now</a>
      </div> 
    </div> 
    <div class="card"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSahgEOxbSaPsHOKsXeiD3_feEtc5YPqK_AxA&s" alt="JackFruit Ice Cream"> 
      <div class="card-content"> 
        <h3>JackFruit Ice Cream</h3> 
        <p>Creamy Jack and Juicy Fruit Flavour.</p> 
        <a href="https://www.dailyfreshicecreams.com/products/jazzy-jackfruit-100ml-500ml-4l?variant=44836036378795&country=IN&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&srsltid=AfmBOoqbPcK_uyIjOeaEkJrvbMYvOEAJ5jDzopvDSMXb7OrpNvfHILbgr6k">Order Now</a> 
      </div> 
    </div> 
    <div class="card"> <img src="https://cdn.shopify.com/s/files/1/0173/8181/8422/files/20250701155729-coconuticecream.jpg?v=1751385451&width=800&height=600" alt="Coconut Ice Cream"> 
      <div class="card-content"> 
        <h3>Coconut Ice Cream</h3> 
        <p>Feel the Flavour of Coconut.</p> 
        <a href="https://www.swiggy.com/stores/instamart/p/natural-ice-cream-tender-coconut-ice-cream-tub-6EO8SNJEZ7?locId=MTcuNDY4ODIzODQsNzguNDgwODU5NjUw&srsltid=AfmBOoqDI2gVDZdmB7w3rpmsBSwaeW7gMdU_J3VwGAnaoMqCsaPnFjwNCWMklln">Order Now</a> 
    </div>
    </div> 
    <div class="card"> <img src="https://www.adashofmegnut.com/wp-content/uploads/2022/09/Strawberry-Ice-Cream-1.jpg" alt="Strawberry Ice Cream"> 
      <div class="card-content"> 
        <h3>Strawberry Ice Cream</h3> 
        <p>Some Strawberries in Creamy.</p> 
        <a href="https://www.dailyfreshicecreams.com/products/sweet-strawberry?variant=44832567427243&country=IN&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&srsltid=AfmBOopQDAWhfbkMw_9R6RRYkCnbcOoPlcM6JsThu7uNG8Ty-0XFyIE_O2Y">Order Now</a> 
      </div> 
    </div> 
  </section> 
      <section id="about" class="about"> 
        <h2>About Us</h2> 
        <p>At Sweet Bliss, we bake with passion and love. Every pastry is handmade with the finest ingredients.</p> 
      </section> 
      <section id="contact" class="contact"> 
        <h2>Contact Us</h2> 
        <p>Email: <a href="mailto:info@sweetbliss.com">info@sweetbliss.com</a></p> 
        <p>Insta: <a href="">@sweetbliss</a></p>
        <p>Phone: +91-9999999999</p> 
      </section> 
      <footer> 
        <p>&copy; 2025 Sweet Bliss Pastry Shop | All Rights Reserved</p> 
      </footer> 
    </body>
    </html>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});