import Artist from "@/components/artist/Artist";
import ArtistHover from "@/components/artist/ArtistHover";
import Music from "@/components/artist/Music";
import Album from "@/components/artist/Album";
import Recommendation from "@/components/artist/Recommendation";
import Link from "next/link";
import PlayButton from "@/components/icon/PlayButton";

export default function Home() {
  return (
    <section>
      <article>
        <Link href={"/detail"}>
          <Artist />
        </Link>
        <ArtistHover />
        <Recommendation />
        <Music />
        <Album />
      </article>
      s
    </section>
  );
}
