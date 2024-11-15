import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center bg-base-200 p-2">
            <p className="bg-[#d72050] text-base-100 px-3 py-1">Latest</p>
            <Marquee pauseOnHover={true} speed={100} className="space-x-10">
            <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa assumenda, molestiae, repellat dignissimos ipsum ad fugiat</Link>
            <Link to="/news">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, nihil?</Link>
            <Link to="/news">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate soluta eaque excepturi omnis fugit.</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;