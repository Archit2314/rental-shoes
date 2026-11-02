
import React, { useState } from "react";
import "./App.css";

const shoes = [
  {
    id: 1,
    name: "Air Runner",
    category: "Running",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
  },
  {
    id: 2,
    name: "Street Classic",
    category: "Casual",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600",
  },
  {
    id: 3,
    name: "Sport Pro",
    category: "Sports",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600",
  },
  {
    id: 4,
    name: "Urban White",
    category: "Sneakers",
    price: 279,
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600",
  },
];

function App() {
  const [likedShoes, setLikedShoes] = useState([]);
  const [search, setSearch] = useState("");

  const toggleLike = (shoe) => {
    const alreadyLiked = likedShoes.some(
      (item) => item.id === shoe.id
    );

    if (alreadyLiked) {
      setLikedShoes(
        likedShoes.filter((item) => item.id !== shoe.id)
      );
    } else {
      setLikedShoes([...likedShoes, shoe]);
    }
  };

  const filteredShoes = shoes.filter((shoe) =>
    shoe.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">

        <div className="logo">
          👟 Rental Shoes
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#shoes">Shoes</a>
          <a href="#visit">Visit Us</a>
          <a href="#contact">Contact</a>

          <a href="#liked">
            ❤️ Liked
            {likedShoes.length > 0 && (
              <span className="like-count">
                {likedShoes.length}
              </span>
            )}
          </a>
        </div>

        <button className="rent-btn">
          Rent Now
        </button>

      </nav>


      {/* HERO SECTION */}
      <section className="hero" id="home">

        <div className="hero-content">

          <p className="small-title">
            STEP INTO STYLE
          </p>

          <h2>
            Your Perfect Shoes.
            <br />
            <span>Just Rent & Go.</span>
          </h2>

          <p className="hero-text">
            Find premium shoes for every occasion without
            buying them. Choose your style and rent today.
          </p>

          <div className="hero-buttons">

            <a
              href="#shoes"
              className="primary-btn"
            >
              Explore Shoes
            </a>

            <a
              href="#visit"
              className="secondary-btn"
            >
              Visit Us
            </a>

          </div>

        </div>


        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900"
            alt="Rental Shoes"
          />

        </div>

      </section>


      {/* SHOES SECTION */}
      <section className="shoes-section" id="shoes">

        <div className="section-heading">

          <div>

            <p className="small-title">
              OUR COLLECTION
            </p>

            <h2>
              Popular Shoes
            </h2>

          </div>


          <input
            type="text"
            placeholder="Search shoes..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="search-box"
          />

        </div>


        <div className="shoe-grid">

          {filteredShoes.map((shoe) => {

            const isLiked = likedShoes.some(
              (item) => item.id === shoe.id
            );

            return (

              <div
                className="shoe-card"
                key={shoe.id}
              >

                <div className="shoe-image">

                  <img
                    src={shoe.image}
                    alt={shoe.name}
                  />

                  <button
                    className={`heart-btn ${
                      isLiked ? "active" : ""
                    }`}
                    onClick={() =>
                      toggleLike(shoe)
                    }
                  >
                    {isLiked ? "❤️" : "♡"}
                  </button>

                </div>


                <div className="shoe-details">

                  <p>
                    {shoe.category}
                  </p>

                  <h3>
                    {shoe.name}
                  </h3>


                  <div className="price-row">

                    <div>
                      <strong>
                        ₹{shoe.price}
                      </strong>

                      <span>
                        {" "}
                        / day
                      </span>
                    </div>

                    <button className="rent-small">
                      Rent
                    </button>

                  </div>

                </div>

              </div>

            );
          })}

        </div>

      </section>


      {/* LIKED SECTION */}
      <section
        className="liked-section"
        id="liked"
      >

        <p className="small-title">
          YOUR FAVORITES
        </p>

        <h2>
          ❤️ Liked Shoes
        </h2>


        {likedShoes.length === 0 ? (

          <p className="empty-liked">
            You haven't liked any shoes yet.
          </p>

        ) : (

          <div className="liked-list">

            {likedShoes.map((shoe) => (

              <div
                className="liked-item"
                key={shoe.id}
              >

                <img
                  src={shoe.image}
                  alt={shoe.name}
                />

                <div>

                  <h3>
                    {shoe.name}
                  </h3>

                  <p>
                    ₹{shoe.price} / day
                  </p>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>


      {/* VISIT US */}
      <section
        className="visit-section"
        id="visit"
      >

        <div>

          <p className="small-title">
            COME VISIT US
          </p>

          <h2>
            Try Before You Rent.
          </h2>

          <p>
            Visit our store and explore our complete
            collection. Try different styles and find
            the perfect pair for your next event.
          </p>

          <button className="primary-btn">
            Get Directions
          </button>

        </div>


        <div className="location-card">

          <div className="location-icon">
            📍
          </div>

          <h3>
            Rental Shoes Store
          </h3>

          <p>
            Sector 29, Gurugram
            <br />
            Haryana, India
          </p>

          <p>
            Open: 10:00 AM - 9:00 PM
          </p>

        </div>

      </section>


      {/* CONTACT */}
      <section
        className="contact-section"
        id="contact"
      >

        <p className="small-title">
          GET IN TOUCH
        </p>

        <h2>
          Contact Us
        </h2>

        <p>
          Have questions about our shoes or rental
          process? We'd love to hear from you.
        </p>


        <div className="contact-info">

          <div>
            <span>📞</span>

            <h3>
              Phone
            </h3>

            <p>
              +91 98765 43210
            </p>
          </div>


          <div>
            <span>✉️</span>

            <h3>
              Email
            </h3>

            <p>
              hello@rentalshoes.com
            </p>
          </div>


          <div>
            <span>📍</span>

            <h3>
              Location
            </h3>

            <p>
              Gurugram, Haryana
            </p>
          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer>

        <p>
          © 2026 Rental Shoes. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;

