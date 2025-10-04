const Nav = ({ item }) => {
  return (
    <li className="header__list">
      <a className={item == "Home" ? "activ" : ""} href="#">
        {item}
      </a>
    </li>
  );
};

export default Nav;
