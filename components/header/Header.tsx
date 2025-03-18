import { Colorize } from "@/common/Style/color";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  return (
    <section
      className="text-white w-full px-8 py-1.5"
      style={{ backgroundColor: Colorize.Secondary_01 }}
    >
      <figure className="flex justify-between">
        <div className="flex items-center gap-3">
          <div className="flex text-2xl">
            <IoIosArrowBack />
            <IoIosArrowForward />
          </div>
          <div className="bg-white text-gray-400 flex items-center justify-between px-4 py-2 2xl:rounded-3xl">
            <IoSearchOutline className="mr-2.5" />
            <input
              className="outline-0 w-3xs"
              type="text"
              placeholder="Artist, songs, or products"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <button>Sign up</button>
          <button>Log in</button>
        </div>
      </figure>
    </section>
  );
};

export default Header;
