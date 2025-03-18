import { Colorize } from "@/common/Style/color";
import Image from "next/image";
// import Link from "next/link";

// type Artist = {
//   id: number;
//   image: string;
//   name: string;
//   title: string;
// };

// const Artist = ({ id, image, name, title }: Artist) => {
const Artist = () => {
  return (
    // <Link
    //   href={`/detail/${id}`}
    //   style={{
    //     maxWidth: "152px",
    //   }}
    // >
    //   <Image src={image} alt={name} width={80} height={80} />
    //   <div>{title}</div>
    //   <div>{name}</div>
    // </Link>
    <article className="max-w-[152] p-2">
      <Image
        className="rounded-full"
        src={"/user.jpg"}
        alt={"아티스트 이미지"}
        width={138}
        height={138}
      />
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

export default Artist;
