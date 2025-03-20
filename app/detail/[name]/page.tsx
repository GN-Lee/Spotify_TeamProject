import Image from "next/image";
import Link from "next/link";

type Album = {
  id: number;
  name: string;
  artists: string[];
  genres: string[];
  popularity: number;
  followers: number;
  artistsImageUrl: string;
  albumImageUrl: string;
  releaseDate: string;
  trackName: string;
  trackDuration: string;
};

type AlbumListProps = {
  albums: Album[];
};

const DetailPage: React.FC<AlbumListProps> = ({ albums }) => {
  return (
    <div>
      {albums.map((album) => (
        <div key={album.id}>
          <Link href={`/${album.artists}`} passHref>
            <a>
              <Image
                width={96}
                height={96}
                src={album.albumImageUrl}
                alt={album.name}
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <h3>{album.artists.join(", ")}</h3>
              <p>아티스트</p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};
console.log(DetailPage);

export default DetailPage;
