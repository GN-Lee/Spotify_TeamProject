import { Colorize } from "@/common/Style/color";
import { bodyFont } from "@/common/Style/font";
import Image from "next/image";

const Album = () => {
  return (
    <article className={"max-w-[160] rounded"}>
      <Image
        src={"/user.jpg"}
        alt={"아티스트 이미지"}
        width={152}
        height={152}
      />
      <div className="mt-1">
        <p
          className={`${bodyFont.Body02}`}
          style={{
            color: Colorize.Neutral_01,
            overflow: "hidden", // 넘치는 부분 숨김
            display: "-webkit-box", // flexbox-like 동작
            WebkitLineClamp: 2, // 최대 2줄까지 표시
            WebkitBoxOrient: "vertical", // 세로 방향 정렬
          }}
        >
          노래제목노래제목노래제목노래제목노래제목노래제목노래제목노래제목노래제목노래제목노래제목노래제목노래제목노래제목
        </p>
      </div>
    </article>
  );
};

export default Album;
