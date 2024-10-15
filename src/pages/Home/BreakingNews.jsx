import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex bg-gray-400">
            <button className="btn btn-secondary">Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
               <Link to="/" className="m-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa aspernatur commodi vel atque, quas excepturi est. Aliquid officiis possimus dolores.</Link>
               <Link to="/" className="m-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa aspernatur commodi vel atque, quas excepturi est. Aliquid officiis possimus dolores.</Link>
               <Link to="/" className="m-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa aspernatur commodi vel atque, quas excepturi est. Aliquid officiis possimus dolores.</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;