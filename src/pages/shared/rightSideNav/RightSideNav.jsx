import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import qzone1 from "../../../assets/qZone1.png"
import qzone2 from "../../../assets/qZone2.png"
import qzone3 from "../../../assets/qZone3.png"

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-xl font-semibold mb-4">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle />
                    Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    Github
                </button>
            </div>
            <div className="p-4 space-y-2 mb-6">
                <h2 className="text-xl font-semibold">Find us on</h2>
                <a className="p-4 flex text-lg items-center border rounded-t-lg border-black " href="">
                    <FaFacebook className="mr-3"></FaFacebook>
                    Facebook
                </a>
                <a className="p-4 flex text-lg items-center border rounded border-black " href="">
                    <FaTwitter className="mr-3"></FaTwitter>
                    Twitter
                </a>
                <a className="p-4 flex text-lg items-center border rounded-b-lg border-black " href="">
                    <FaInstagram className="mr-3"></FaInstagram>
                    Instagram
                </a>
            </div>
            {/*q zone*/}

            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-xl font-semibold mb-4">Q Zone</h2>
               <img src={qzone1} alt="" />
               <img src={qzone2} alt="" />
               <img src={qzone3} alt="" />
            </div>
        </div>

    );
};

export default RightSideNav;