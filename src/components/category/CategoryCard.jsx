const CategoryCard = ({ image, title, description, btntext, visible }) => {
  return (
    <div
      className={`category-card__items ${visible ? "visible-card" : ""}`}
    >
      <img src={image} alt="cat1" />
      <h4>{title}</h4>
      <p>{description}</p>
      <a
        className={`category-btn ${visible ? "visible-btn" : ""}`}
        href="#"
      >
        {btntext}
      </a>
    </div>
  );
};

export default CategoryCard;
