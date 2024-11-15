import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";

const Navbar = () => {
    return (
        <div className="flex justify-between">
            <div></div>
            <div className="nav space-x-5 items-center">
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="login flex gap-3 items-center">
                <div><img src={userIcon} alt="" /></div>
                <button className="btn btn-neutral rounded-xl">Login</button>
            </div>
        </div>
    );
};

export default Navbar;