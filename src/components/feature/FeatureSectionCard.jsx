const FeatureSectionCard = ({ label, title, items, image, reverse, titColor }) => {
  return (
    <section className={`feature-section ${reverse ? "reverse" : ""}`}>
      <div className="feature-content">
        <span className="feature-label">{label}</span>
        <h2 className={`feature-title ${titColor ? "reverse-color" : ""}`}>{title}</h2>
        <ul className="feature-list">
          {items.map((item, index) => (
            <li key={index} className="feature-item">
              <img src={item.icon} alt="icon" />
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="feature-image">
        <img src={image} alt={title} />
      </div>
    </section>
  );
};

export default FeatureSectionCard;
