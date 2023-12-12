import { NavLink } from "react-router-dom";
import Services from "../Services/Services";
import HBanner from "./HBanner";

const Home = () => {
  
  return (
    <div className="relative bg-slate-950">
        <HBanner />
      <Services />
    </div>
  );
};

export default Home;
