import Artist from "@/components/artist/Artist";
import ArtistHover from "@/components/artist/ArtistHover";
import Music from "@/components/artist/Music";
import Album from "@/components/artist/Album";

export default function Home() {
  return (
    <section>
      <article>
        <Artist />
        <ArtistHover />

        <Music />
        <Album />
      </article>
    </section>
  );
}
