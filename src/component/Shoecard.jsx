

function ShoeCard({ shoe, isLiked, toggleLike }) {
  return (
    <div className="shoe-card">
      <div className="shoe-image">
        <img src={shoe.image} alt={shoe.name} />

        <button
          className={`heart-btn ${isLiked ? "active" : ""}`}
          onClick={() => toggleLike(shoe)}
        >
          {isLiked ? "❤️" : "♡"}
        </button>
      </div>

      <div className="shoe-details">
        <p>{shoe.category}</p>

        <h3>{shoe.name}</h3>

        <div className="price-row">
          <div>
            <strong>₹{shoe.price}</strong>
            <span> / day</span>
          </div>

          <button className="rent-small">
            Rent
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoeCard;