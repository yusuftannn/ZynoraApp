import { NavLink } from "react-router-dom";
import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from "react-icons/md";

const Navbar = ({ containerStyles }) => {
  return (
    <div>
      <nav className={`${containerStyles}`}>
        <NavLink to={'/'} className={({isActive})=> isActive ? "active_link" : ""}>
        <div className="flexCenter gap-x-1">
          <MdHomeFilled />
          <span>Home</span>
        </div>
          
        </NavLink>
        <NavLink to={'/mens'} className={({isActive})=> isActive ? "active_link" : ""}>
        <div className="flexCenter gap-x-1">
          <MdCategory />
          <span>Men's</span>
        </div>
          
        </NavLink>
        <NavLink to={'/womens'} className={({isActive})=> isActive ? "active_link" : ""}>
        <div className="flexCenter gap-x-1">
          <MdShop2 />
          <span>Women's</span>
        </div>
          
        </NavLink>
        <NavLink to={'/kids'} className={({isActive})=> isActive ? "active_link" : ""}>
        <div className="flexCenter gap-x-1">
        <MdContacts />
        <span>Kid's</span>
        </div>
          
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
