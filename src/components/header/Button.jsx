const MyButton = ({ children, type = "login", href = "#" }) => (
  <a className={`btn btn__${type}`} href={href}>{children}</a>
);

export default MyButton;
