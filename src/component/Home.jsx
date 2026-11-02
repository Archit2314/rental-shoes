

function Navbar({ likedCount }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>👟</span> Rental Shoes
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#shoes">Shoes</a>
        <a href="#visit">Visit Us</a>
        <a href="#contact">Contact</a>

        <a href="#liked" className="liked-link">
          ❤️ Liked
          {likedCount > 0 && (
            <span className="like-count">{likedCount}</span>
          )}
        </a>
      </div>

      <button className="rent-btn">
        Rent Now
      </button>
    </nav>
  );
}

export default Navbar;