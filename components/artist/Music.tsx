import { Colorize } from "@/common/Style/color";
import Image from "next/image";

const Music = () => {
  return (
    <article className="max-w-[152] rounded">
      <Image
        src={"/user.jpg"}
        alt={"아티스트 이미지"}
        width={152}
        height={152}
      />
      <div className="pt-1 pl-2">
        <p className="text-sm" style={{ color: Colorize.Secondary_03 }}>
          {"노래제목"}
        </p>
        <div className="text-xs" style={{ color: Colorize.Neutral_01 }}>
          {"아티스트"}
        </div>
      </div>
    </article>
  );
};

export default Music;
