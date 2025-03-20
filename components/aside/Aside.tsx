import { Colorize } from "@/common/Style/color";
import { headerFont } from "@/common/Style/font";
import Image from "next/image";
import { GoHomeFill } from "react-icons/go";

const Aside = () => {
  return (
    <section
      className="flex flex-col items-center h-full gap-2 p-5"
      style={{ backgroundColor: Colorize.Secondary_01 }}
    >
      <a href="/">
        <Image width={180} height={85} src={"/Logo.png"} alt="" priority />
      </a>
      <a
        href="/"
        className="flex items-center w-full h-8 gap-1 p-4 mt-4 rounded-md"
        style={{
          color: Colorize.Secondary_03,
          backgroundColor: Colorize.Neutral_03,
        }}
      >
        <GoHomeFill style={headerFont.Header02} />
        <div className="text-xs font-semibold" style={headerFont.Header04}>
          Home
        </div>
      </a>
      <a
        href="https://accounts.spotify.com/ko/login?continue=https%3A%2F%2Fopen.spotify.com%2F"
        className="flex items-center w-full h-8 p-4 rounded-md"
        style={{
          color: Colorize.Secondary_03,
          // backgroundColor: Colorize.Neutral_03,
        }}
      >
        <div className="text-xs font-semibold" style={headerFont.Header04}>
          Log in
        </div>
      </a>
    </section>
  );
};

export default Aside;
