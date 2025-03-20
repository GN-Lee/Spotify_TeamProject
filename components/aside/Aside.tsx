"use client";
import { Colorize } from "@/common/Style/color";
import { headerFont } from "@/common/Style/font";
import Image from "next/image";
import { GoHomeFill } from "react-icons/go";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const Aside = () => {
  const router = useRouter();
  const pathname = usePathname(); // 현재 경로 가져오기

  const isActive = pathname === "/";

  return (
    <section
      className="flex flex-col items-center h-full gap-2 p-5"
      style={{ backgroundColor: Colorize.Secondary_01 }}
    >
      <a href="/">
        <Image width={180} height={85} src={"/Logo.png"} alt="" priority />
      </a>
      {/* <button
        onClick={() => {
          setIsClicked(true); // 클릭하면 상태 변경
          router.push("/");
        }}
        className="flex items-center w-full h-8 gap-1 p-4 mt-4 rounded-md"
        style={{
          color: isClicked ? Colorize.Secondary_03 : Colorize.Neutral_01,
          backgroundColor: isClicked ? Colorize.Neutral_03 : "initial",
        }}
      > */}
      <button
        onClick={() => router.push("/")}
        className="flex items-center w-full h-8 gap-1 p-4 mt-4 rounded-md"
        style={{
          color: isActive ? Colorize.Secondary_03 : Colorize.Neutral_01,
          backgroundColor: isActive ? Colorize.Neutral_03 : "initial",
        }}
      >
        <GoHomeFill style={headerFont.Header02} />
        <div className="text-xs font-semibold" style={headerFont.Header04}>
          Home
        </div>
      </button>
      <a
        href="https://accounts.spotify.com/ko/login?continue=https%3A%2F%2Fopen.spotify.com%2F"
        className="flex items-center w-full h-8 p-4 rounded-md"
        style={{
          color: Colorize.Neutral_01,
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
