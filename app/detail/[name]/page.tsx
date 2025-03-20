import Image from "next/image";
import Link from "next/link";

type List = {
  artist: string;
  image: string;
  albumName: string;
};

const DetailPage = ({ artist, image, albumName }: List) => {
  return (
    <div>
      <Link href={`/${artist}`}>
        <Image width={96} height={96} src={`${image}`} alt={artist} />
        <h3>{albumName}</h3>
        <p>{artist}</p>
      </Link>
    </div>
  );
};

export default DetailPage;
