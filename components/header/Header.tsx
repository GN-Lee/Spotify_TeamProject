"use client";
import { Colorize } from "@/common/Style/color";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <section
      className="w-full px-8 py-5 text-white "
      style={{ backgroundColor: Colorize.Secondary_01 }}
    >
      <figure className="flex justify-between">
        <div className="flex items-center gap-3">
          <div className="flex gap-3 text-2xl">
            <button onClick={() => router.back()} className="p-2">
              <IoIosArrowBack />
            </button>
            <button onClick={() => router.forward()} className="p-2">
              <IoIosArrowForward />
            </button>
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
            onClick={() =>
              (window.location.href =
                "https://www.spotify.com/kr-ko/signup?flow_id=9a56012b-c077-458e-b8e9-bacf6074b794%3A1742483401&forward_url=https%3A%2F%2Fopen.spotify.com%2F%3Fflow_ctx%3D9a56012b-c077-458e-b8e9-bacf6074b794%253A1742483401")
            }
            className="font-semibold w-28 "
            style={{ color: Colorize.Neutral_01 }}
          >
            Sign up
          </button>
          <button
            onClick={() =>
              (window.location.href =
                "https://accounts.spotify.com/ko/login?continue=https%3A%2F%2Fopen.spotify.com%2F")
            }
            className="font-semibold text-black bg-white w-28 border-1 rounded-3xl"
          >
            Log in
          </button>
        </div>
      </figure>
    </section>
  );
};

export default Header;
