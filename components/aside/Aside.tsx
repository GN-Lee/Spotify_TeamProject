import { Colorize } from "@/common/Style/color";
import { headerFont } from "@/common/Style/font";
import Image from "next/image";
import { GoHomeFill } from "react-icons/go";

const Aside = () => {
  return (
    <section
      className="p-5 flex flex-col items-center gap-5 h-full"
      style={{ backgroundColor: Colorize.Secondary_01 }}
    >
      <div>
        <Image width={180} height={95} src={"/Logo.png"} alt={""} />
      </div>
      <div
        className="flex gap-3 w-full h-14 p-4 items-center rounded-xl"
        style={{
          color: Colorize.Secondary_03,
          backgroundColor: Colorize.Neutral_03,
        }}
      >
        <GoHomeFill style={headerFont.Header02} />
        <h3 style={headerFont.Header03}>Home</h3>
      </div>
      <div
        className="flex gap-3 w-full p-4 items-center rounded-xl"
        style={{
          color: Colorize.Secondary_03,
          backgroundColor: Colorize.Neutral_03,
        }}
      >
        <h3 style={headerFont.Header03}>Log in</h3>
      </div>
    </section>
  );
};

export default Aside;
