import { BiShoppingBag, BiSupport } from "react-icons/bi";

import { Link } from "react-router-dom";
import img1 from '../../../src/assets/images/asian-women-shaking-hair-while-dancing-2021-08-26-19-52-52-utc.jpg'
import img2 from '../../assets/images/group-of-men-and-women-dancing-hip-hop-choreograph-2021-08-26-17-41-30-utc.jpg'
import img3 from '../../assets/images/woman-and-little-girl-dancing-ballet-2021-09-24-03-18-32-utc.jpg'
import img4 from '../../assets/images/the-group-of-modern-ballet-dancers-2021-08-26-17-40-44-utc-1-800x505.jpg'

import { MdLibraryBooks } from "react-icons/md";
import { BsPeopleFill ,BsListCheck} from "react-icons/bs";

const Banner = () => {
  return (
    <div className=" ">
      <div className="carousel h-[750px] w-full rounded-md">
        <div id="slide1" className="carousel-item relative w-full rounded-md">
          <img
            src={img1}
            className="w-full"
          />
          <div className="absolute pl-20 h-full flex items-center  left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-8 pl-10 w-1/2">
              <h3 className="text-4xl font-semibold text-white uppercase ">
                Improve your dance skills
                <span className="text-red-600 "> with Flaire </span>
              </h3>
              <p className="font-bold text-white">
              Nobody cares if you can’t dance well. Just get up and dance. Great dancers are great because of their passion.Dancing is surely the most basic of relevant of all forms of expression. Nothing else can so effectively give outward form to an inner experience. One who expresses one’s self through dance is a dancer. One who expresses one’s self through a dancer is a dance teacher.
              </p>
              <div>
                <Link to={"/register"}>
                  {" "}
                  <button className="btn bg-red-500 text-white font-mono mr-4 ">
                    Register Now 
                  </button>
                  <button className="btn btn-outline mr-4 btn-secondary font-mono">
                    Learn MOre 
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={img2}
            className="w-full"
          />
          <div className="absolute pl-20 h-full flex items-center  left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-10 pl-10 w-1/2">
              <h3 className="text-5xl font-semibold text-white">
              "Embrace the Magic of 
                <span className="text-red-300"> Awesome Dance"</span>
              </h3>
              <p className="font-bold text-white">
              "Immerse yourself in a world of enchantment, where every graceful sway, every rhythmic beat, and every expressive gesture weaves a spell of joy, connection, and limitless possibilities."
              </p>
              <div>
                <Link to={"/register"}>
                  {" "}
                  <button className="btn btn-outline mr-4 btn-secondary font-mono">
                    Shop Now 
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={img3}
            className="w-full"
          />
          <div className="absolute pl-20 h-full flex items-center  left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-10 pl-10 w-1/2">
              <h3 className="text-5xl font-semibold text-white">
              Discover the Transformative 
                <span className="text-red-300"> Power of Dance</span>
              </h3>
              <p className="font-bold text-white">
              "Immerse yourself in the captivating melodies, fluid movements, and profound storytelling that dance offers, as it transcends boundaries, ignites the soul, and shapes your journey of self-discovery and growth."
              </p>
              <div>
                <Link to={"/register"}>
                  {" "}
                  <button className="btn btn-outline mr-4 btn-secondary font-mono">
                    Shop Now 
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={img4}
            className="w-full"
          />
          <div className="absolute pl-20 h-full flex items-center  left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-10 pl-10 w-1/2">
              <h3 className="text-5xl font-semibold text-white">
              Express Your Passion 
                <span className="text-red-300">Through Dance</span>
              </h3>
              <p className="font-bold text-white">
              "Unleash your creativity, embrace the rhythm, and discover the joy of movement"
              </p>
              <div>
                <Link to={"/register"}>
                  {" "}
                  <button className="btn btn-outline mr-4 btn-secondary font-mono">
                    Shop Now 
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
<div className=" ">

<div className="card  shadow-xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 bg-slate-50 mx-auto ml-12 mr-12 -mt-16 ">
  <div className="text-center flex items-center flex-col py-10">
    <p className="text-5xl text-red-500"><MdLibraryBooks /></p>
    <p className="text-2xl font-bold"> 200+ CLASSES</p>
    <p>Classes For Big Dance Compo</p>
   
  </div>
  <div className="text-center flex items-center flex-col py-10">
    <p className="text-5xl text-red-500"><BsListCheck/></p>
    <p  className="text-2xl font-bold">8+ BEGINNER PROGRAMS</p>
    <p>Classes For Big Dance Compo</p>
   
  </div>
  <div className="text-center flex items-center flex-col py-10">
    <p className="text-5xl text-red-500"><BsPeopleFill/></p>
    <p  className="text-2xl font-bold">70+ INSTRUCTORS</p>
    <p>Classes For Big Dance Compo</p>
   
  </div>
</div>




</div>


    </div>
  );
}; 

export default Banner;