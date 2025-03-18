import { Colorize } from "@/common/Style/color";
import Image from "next/image";
import PlayButton from "../icon/PlayButton";

const ArtistHover = () => {
  return (
    <article
      className="max-w-[152] p-2 rounded"
      style={{
        backgroundColor: Colorize.Secondary_04,
      }}
    >
      <div className="relative inline-block">
        <Image
          className="rounded-full"
          src={"/user.jpg"}
          alt={"아티스트 이미지"}
          width={138}
          height={138}
        />

        <div
          className="w-8 h-8 absolute right-1 top-1 flex justify-center items-center"
          style={{
            backgroundColor: Colorize.Primary_01,
            borderRadius: "50%",
          }}
        >
          <PlayButton />
          {/* <span
            style={{
              position: "absolute",
              width: 0,
              height: 0,
              borderTop: "6px solid transparent",
              borderBottom: "6px solid transparent",
              borderLeft: "11px solid " + Colorize.Secondary_01,
              left: "55%", // 왼쪽 기준으로 50% 이동
              top: "50%", // 위쪽 기준으로 50% 이동
              transform: "translate(-50%, -50%)", // 정확한 중앙 정렬
            }}
          /> */}
        </div>
      </div>
      <div className="mt-3">
        <p className="text-sm" style={{ color: Colorize.Secondary_03 }}>
          {"노래제목"}
        </p>
        <p className="text-xs" style={{ color: Colorize.Neutral_01 }}>
          {"아티스트"}
        </p>
      </div>
    </article>
  );
};

export default ArtistHover;
