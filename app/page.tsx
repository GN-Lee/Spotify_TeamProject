import Artist from "@/components/artist/Artist";
import ArtistHover from "@/components/artist/ArtistHover";
import Music from "@/components/artist/Music";
import Album from "@/components/artist/Album";
import Recommendation from "@/components/artist/Recommendation";

export default function Home() {
  return (
    <section>
      <article>
        <Artist />
        <ArtistHover />
        <Recommendation />
        <Music />
        <Album />
      </article>
    </section>
  );
}
