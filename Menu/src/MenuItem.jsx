function MenuItems({ title, price, desc, img }) {
  return (
    <article className="menu-item">
      <img src={img} alt="" className="img" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <div className="item-price">{price}</div>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
}

export default MenuItems;
