// import Image from "next/image";
// import Link from "next/link";

import { Colorize } from "@/common/Style/color";
import { bodyFont } from "@/common/Style/font";
import Image from "next/image";

// type artistImpomation = {
//   artist: string;
//   리스너: number;
//   설명: string;
//   image: string;
// };

// const ArtistDescription = ({
//   artist,
//   리스너,
//   설명,
//   image,
// }: artistImpomation) => {
//   return (
//     <>
//       <div>
//         <Link href={`/${artist}`}>
//           <Image width={96} height={96} src={`${image}`} alt={artist} />
//           <p>`월별 리스너 ${리스너}명 `</p>
//           <p>{설명}</p>
//         </Link>
//       </div>
//     </>
//   );
// };

// export default ArtistDescription;

const ArtistDescription = () => {
  return (
    <div
      className="w-full p-10 flex flex-col gap-7 rounded-xl"
      style={{
        backgroundColor: Colorize.Neutral_03,
      }}
    >
      <Image
        className="rounded-full"
        width={205}
        height={205}
        src={"/user.jpg"}
        alt="asd"
      />
      <div className="flex flex-col gap-3">
        <p
          className="font-bold text-sm"
          style={{
            color: Colorize.Secondary_03,
          }}
        >
          월별 리스너 asd명{" "}
        </p>
        <p
          className="w-[600] text-sm font-bold"
          style={{
            color: Colorize.Secondary_03,
            overflow: "hidden", // 넘치는 부분 숨김
            display: "-webkit-box", // flexbox-like 동작
            WebkitLineClamp: 3, // 최대 2줄까지 표시
            WebkitBoxOrient: "vertical", // 세로 방향 정렬
          }}
        >
          G-Dragon, born Kwon Ji-Yong, is a rapper from Seoul, South Korea who
          also writes and produces. At the age of 11, he signed to YG
          Entertainment and, a few years later, joined his label's popular group
          Big Bang, for which he wrote and produced /asdasdasdasd
        </p>
      </div>
    </div>
  );
};

export default ArtistDescription;
