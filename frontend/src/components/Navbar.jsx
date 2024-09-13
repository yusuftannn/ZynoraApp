import { NavLink } from "react-router-dom";
import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from "react-icons/md";

const Navbar = ({ containerStyles }) => {
  return (
    <div>
      <nav className={`${containerStyles} flex gap-x-4`}>
        <NavLink to="/" className="flexCenter gap-x-1">
          <MdHomeFilled />
          <span>Home</span>
        </NavLink>
        <NavLink to="/mens" className="flexCenter gap-x-1">
          <MdCategory />
          <span>Men's</span>
        </NavLink>
        <NavLink to="/womens" className="flexCenter gap-x-1">
          <MdShop2 />
          <span>Women's</span>
        </NavLink>
        <NavLink to="/kids" className="flexCenter gap-x-1">
          <MdContacts />
          <span>Kid's</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
