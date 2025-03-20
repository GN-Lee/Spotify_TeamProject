"use client";

import fireStore from "@/firebase/firestore";
import {
  collection,
  getDocs,
  query,
  doc,
  setDoc,
  orderBy,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import AlbumComponent from "@/components/AlbumComponent";
import Image from "next/image";

type Album = {
  id: number;
  name: string;
  //   song: string[];
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
const AdminPage = () => {
  const [albumName, setAlbumName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [artists, setArtists] = useState<string[]>([]);
  //   const [song, setSong] = useState("");
  const [genres, setGenres] = useState(["k-pop"]);
  const [popularity, setPopularity] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [artistsImageUrl, setArtistsImageUrl] = useState("");
  const [albumImageUrl, setAlbumImageUrl] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [trackName, setTrackName] = useState("");
  const [trackDuration, setTrackDuration] = useState("");
  const [albums, setAlbums] = useState<Album[]>([]);
  const [nextId, setNextId] = useState(1);

  const fetchNextId = async () => {
    const querySnapshot = await getDocs(collection(fireStore, "Album"));
    const albumList = querySnapshot.docs.map((doc) => doc.data() as Album);
    setNextId(
      albumList.length ? Math.max(...albumList.map((album) => album.id)) + 1 : 1
    );
  };

  const addArtist = () => {
    if (!artistName.trim()) return;
    setArtists([...artists, artistName]);
    setArtistName("");
  };

  const onClickUpLoadButton = async () => {
    if (!albumName.trim()) return;

    // const albumRef = doc(firestore, "Album");

    const randomId = crypto.randomUUID(); // 🔥 랜덤 UUID 생성

    const albumRef = doc(fireStore, "Album", randomId); // 🔹 랜덤 ID 사용
    await setDoc(albumRef, {
      id: nextId,
      name: albumName,
      //   song: [song],
      artists,
      genres,
      popularity,
      followers,
      artistsImageUrl,
      albumImageUrl,
      releaseDate,
      trackName,
      trackDuration,
    });

    setAlbumName("");
    setArtists([]);
    // setSong("");
    setPopularity(0);
    setFollowers(0);
    setArtistsImageUrl("");
    setAlbumImageUrl("");
    setReleaseDate("");
    setTrackName("");
    setTrackDuration("");
    await fetchNextId();
    await getAlbums();
  };

  const getAlbums = async () => {
    const albumQuery = query(collection(fireStore, "Album"), orderBy("id"));
    const querySnapshot = await getDocs(albumQuery);
    const albumsData: Album[] = querySnapshot.docs.map(
      (doc) => doc.data() as Album
    );
    setAlbums(albumsData);
  };

  useEffect(() => {
    getAlbums();
  }, []);
  return (
    <div style={{ color: "white" }}>
      <AlbumComponent />
      <h2 style={{ fontWeight: "bold", fontSize: "30px", marginTop: "10px" }}>
        앨범 추가를 해주세요
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <div style={{ display: "flex", gap: "5px" }}>
          <p>앨범 이름 -</p>
          <input
            type="text"
            value={albumName}
            onChange={(e) => setAlbumName(e.target.value)}
            placeholder="앨범 이름 입력"
          />
        </div>
        {/* <div style={{ display: "flex", gap: "5px" }}>
          <p>노래 입력 -</p>
          <input
            type="text"
            value={song}
            onChange={(e) => setSong(e.target.value)}
            placeholder="노래 입력"
          />
        </div> */}
        <div style={{ display: "flex", gap: "5px" }}>
          <p>아티스트 입력 -</p>
          <input
            type="text"
            value={artistName}
            onChange={(e) => setArtistName(e.target.value)}
            placeholder="아티스트 추가"
          />
          <button
            onClick={addArtist}
            style={{
              border: "1px solid white",
              backgroundColor: "gray",
              color: "black",
              padding: "0 10px",
            }}
          >
            추가
          </button>
        </div>
        <div style={{ display: "flex", gap: "5px" }}>
          <p>인기도 입력 -</p>
          <input
            type="number"
            value={popularity}
            onChange={(e) => setPopularity(Number(e.target.value))}
            placeholder="인기도"
          />
        </div>
        <div style={{ display: "flex", gap: "5px" }}>
          <p>팔로워 수 입력 -</p>
          <input
            type="number"
            value={followers}
            onChange={(e) => setFollowers(Number(e.target.value))}
            placeholder="팔로워 수"
          />
        </div>
        <div style={{ display: "flex", gap: "5px" }}>
          <p>아티스트 이미지 URL 입력 -</p>
          <input
            type="text"
            value={artistsImageUrl}
            onChange={(e) => setArtistsImageUrl(e.target.value)}
            placeholder="아티스트 이미지 URL"
          />
        </div>
        <div style={{ display: "flex", gap: "5px" }}>
          <p>앨범 이미지 URL -</p>
          <input
            type="text"
            value={albumImageUrl}
            onChange={(e) => setAlbumImageUrl(e.target.value)}
            placeholder="앨범 이미지 URL"
          />
        </div>
        <div style={{ display: "flex", gap: "5px" }}>
          <p>발매일 -</p>
          <input
            type="text"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
            placeholder="발매일"
          />
        </div>
        <div style={{ display: "flex", gap: "5px" }}>
          <p>트랙(노래) 이름 -</p>
          <input
            type="text"
            value={trackName}
            onChange={(e) => setTrackName(e.target.value)}
            placeholder="트랙 이름"
          />
        </div>
        <div style={{ display: "flex", gap: "5px" }}>
          <p>트랙(재생) 길이 -</p>
          <input
            type="text"
            value={trackDuration}
            onChange={(e) => setTrackDuration(e.target.value)}
            placeholder="트랙 길이"
          />
        </div>
        <button
          onClick={onClickUpLoadButton}
          style={{
            border: "1px solid white",
            backgroundColor: "yellow",
            color: "black",
            padding: "5px 10px",
            width: "200px",
          }}
        >
          앨범 저장
        </button>
      </div>
      <h2 style={{ fontWeight: "bold", fontSize: "30px", marginTop: "10px" }}>
        앨범 리스트
      </h2>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <strong>{album.id}</strong>
            <p>앨범이름 : {album.name}</p> <p>발행년도 : {album.releaseDate}</p>
            <p>아티스트: {album.artists.join(", ")}</p>
            {album.albumImageUrl ? ( // 이미지가 존재할 때만 렌더링
              <Image
                src={album.albumImageUrl}
                alt={album.name}
                width={100}
                height={100}
                onError={(e) => (e.currentTarget.style.display = "none")} // 이미지 로드 실패 시 숨김
              />
            ) : (
              <p>이미지 없음</p> // 대체 텍스트 표시 가능
            )}
            {album.artistsImageUrl ? ( // 이미지가 존재할 때만 렌더링
              <Image
                src={album.artistsImageUrl}
                alt={album.name}
                width={100}
                height={100}
                onError={(e) => (e.currentTarget.style.display = "none")} // 이미지 로드 실패 시 숨김
              />
            ) : (
              <p>이미지 없음</p> // 대체 텍스트 표시 가능
            )}
            {/* <img src={album.albumImageUrl} alt={album.name} width={100} /> */}
            <p>
              인기도: {album.popularity} | 팔로워: {album.followers}
            </p>
            {/* <p>트랙(노래 제목): {album.song}</p> */}
            <p>장르: {album.genres}</p>
            <p>트랙(노래 제목): {album.trackName}</p>
            <p>재생시간 : {album.trackDuration}</p>
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
