import { Colorize } from "@/common/Style/color";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  return (
    <section
      className="w-full px-8 py-5 text-white "
      style={{ backgroundColor: Colorize.Secondary_01 }}
    >
      <figure className="flex justify-between">
        <div className="flex items-center gap-3">
          <div className="flex gap-3 text-2xl">
            <IoIosArrowBack />
            <IoIosArrowForward />
          </div>
          <div className="flex items-center justify-between px-4 py-2 text-gray-400 bg-white 2xl:rounded-3xl">
            <IoSearchOutline className="mr-2.5" />
            <input
              className="outline-0 w-3xs"
              type="text"
              placeholder="Artist, songs, or products"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <button
            className="font-semibold w-28 "
            style={{ color: Colorize.Neutral_01 }}
          >
            Sign up
          </button>
          <button className="font-semibold text-black bg-white w-28 border-1 rounded-3xl">
            Log in
          </button>
        </div>
      </figure>
    </section>
  );
};

export default Header;
