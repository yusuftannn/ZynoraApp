import { NavLink } from "react-router-dom";

const Navbar = ({ containerStyles }) => {
  return (
    <div>
      <nav className={`${containerStyles}`}>
        <NavLink to={'/'} className={({isActive})=> isActive ? "active_link" : ""}>
        <div className="flexCenter gap-x-1">
          <span>Home</span>
        </div>
          
        </NavLink>
        <NavLink to={'/mens'} className={({isActive})=> isActive ? "active_link" : ""}>
        <div className="flexCenter gap-x-1">
          <span>Men's</span>
        </div>
          
        </NavLink>
        <NavLink to={'/womens'} className={({isActive})=> isActive ? "active_link" : ""}>
        <div className="flexCenter gap-x-1">
          <span>Women's</span>
        </div>
          
        </NavLink>
        <NavLink to={'/kids'} className={({isActive})=> isActive ? "active_link" : ""}>
        <div className="flexCenter gap-x-1">
          <span>Kid's</span>
        </div>
          
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
