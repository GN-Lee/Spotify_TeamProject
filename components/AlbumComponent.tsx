import React, { useState } from "react";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { firestore } from "@/firebase/firebase";
// import { firestore } from "./firebase"; // 🔹 Firebase 설정 파일 import
const Albums = [
  {
    id: "12YODvwEH9NPutL8OhObfD",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WONDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f150d9f2e5e8148e5032fd7d",
    trackName: "Rebirth (Intro)",
    trackDuration: "02:24",
  },
  {
    id: "3vKBoDN6DGrxMRDBOe5bQa",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WONDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f150d9f2e5e8148e5032fd7d",
    trackName: "Interlude : Showtime",
    trackDuration: "01:18",
  },
  {
    id: "0KsBlpW6csX9YBVckbTDZh",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WONDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f150d9f2e5e8148e5032fd7d",
    trackName: "Smeraldo Garden Marching Band (feat. Loco)",
    trackDuration: "03:02",
  },
  {
    id: "5XvFNFNsgvmwsWk1T7BfRj",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WONDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f150d9f2e5e8148e5032fd7d",
    trackName: "Slow Dance (feat. Sofia Carson)",
    trackDuration: "03:08",
  },
  {
    id: "59ldd5koyBqo1vFp6MusW1",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WONDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f150d9f2e5e8148e5032fd7d",
    trackName: "Be Mine",
    trackDuration: "03:27",
  },
  {
    id: "5wPnPIZS8wr4lPNLz4qvHK",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WONDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f150d9f2e5e8148e5032fd7d",
    trackName: "Who",
    trackDuration: "02:50",
  },
  {
    id: "2Zyto2vRT9MEj44Y4qbzcs",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WONDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f150d9f2e5e8148e5032fd7d",
    trackName: "Closer Than This",
    trackDuration: "03:43",
  },
  {
    id: "1Px44tw80Q4rcCl8FxDGOi",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WONDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f150d9f2e5e8148e5032fd7d",
    trackName: "Who (Instrumental)",
    trackDuration: "02:50",
  },
  {
    id: "10I5rhhFoWZDIN3kEc6Dbo",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WONDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f150d9f2e5e8148e5032fd7d",
    trackName: "Who (Acoustic Remix)",
    trackDuration: "03:04",
  },
  {
    id: "1MC8JLPV4fbvVBqvGSLoDf",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WONDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f150d9f2e5e8148e5032fd7d",
    trackName: "Who (Rock Remix)",
    trackDuration: "02:51",
  },
  {
    id: "1ZtkxrnxZB6r8nIiHwqaUn",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WANDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27382601539d4a27061ad90eacb",
    trackName: "Rebirth (Intro)",
    trackDuration: "02:24",
  },
  {
    id: "12HctF6VyD118g7eXtWLBo",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WANDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27382601539d4a27061ad90eacb",
    trackName: "Interlude : Showtime",
    trackDuration: "01:18",
  },
  {
    id: "7yODD9DKQIllpZ5eioLZRY",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WANDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27382601539d4a27061ad90eacb",
    trackName: "Smeraldo Garden Marching Band (feat. Loco)",
    trackDuration: "03:02",
  },
  {
    id: "5nyhz1bxLCiBBIAIcBgiEP",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WANDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27382601539d4a27061ad90eacb",
    trackName: "Slow Dance (feat. Sofia Carson)",
    trackDuration: "03:08",
  },
  {
    id: "3VaKWbW68AyOkEl4AxhXA2",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WANDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27382601539d4a27061ad90eacb",
    trackName: "Be Mine",
    trackDuration: "03:27",
  },
  {
    id: "32lSgbCqRcIOyUSnfuUZEQ",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WANDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27382601539d4a27061ad90eacb",
    trackName: "Who",
    trackDuration: "02:50",
  },
  {
    id: "6OIVG9TFJnqOec4G5rD8pW",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WANDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27382601539d4a27061ad90eacb",
    trackName: "Closer Than This",
    trackDuration: "03:43",
  },
  {
    id: "1ySWoGgrduSzvtJ3PUzO41",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WANDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27382601539d4a27061ad90eacb",
    trackName: "Who (Shibuyakei Remix)",
    trackDuration: "02:46",
  },
  {
    id: "7KZNgri6Jxw88FAfATw6i9",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WANDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27382601539d4a27061ad90eacb",
    trackName: "Who (Funky Remix)",
    trackDuration: "03:08",
  },
  {
    id: "2isRbZIIU4PqPrECffn7QO",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WANDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27382601539d4a27061ad90eacb",
    trackName: "Who (Beautiful Mind Remix)",
    trackDuration: "02:57",
  },
  {
    id: "7gMfVc4zfNIxuMyMGglOHa",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE",
    releaseDate: "2024-07-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f02c451189a709b9a952aaec",
    trackName: "Rebirth (Intro)",
    trackDuration: "02:24",
  },
  {
    id: "45zLrK0668WQ5JFMyiYmCS",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE",
    releaseDate: "2024-07-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f02c451189a709b9a952aaec",
    trackName: "Interlude : Showtime",
    trackDuration: "01:18",
  },
  {
    id: "1agDCV4zQqaFwJQNsTgmL1",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE",
    releaseDate: "2024-07-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f02c451189a709b9a952aaec",
    trackName: "Smeraldo Garden Marching Band (feat. Loco)",
    trackDuration: "03:02",
  },
  {
    id: "3d2bsbugow8JiNvuaRupFH",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE",
    releaseDate: "2024-07-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f02c451189a709b9a952aaec",
    trackName: "Slow Dance (feat. Sofia Carson)",
    trackDuration: "03:08",
  },
  {
    id: "3LWVXp636uLT356Rj08Jaz",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE",
    releaseDate: "2024-07-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f02c451189a709b9a952aaec",
    trackName: "Be Mine",
    trackDuration: "03:27",
  },
  {
    id: "7tI8dRuH2Yc6RuoTjxo4dU",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE",
    releaseDate: "2024-07-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f02c451189a709b9a952aaec",
    trackName: "Who",
    trackDuration: "02:50",
  },
  {
    id: "6qafqn8bBMy7t5c5WqpyRk",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE",
    releaseDate: "2024-07-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f02c451189a709b9a952aaec",
    trackName: "Closer Than This",
    trackDuration: "03:43",
  },
  {
    id: "4DairgmwgyfmFHm0e7kRPL",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "Be Mine (English Version)",
    releaseDate: "2024-08-02",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27319655636129722b4bd720dbc",
    trackName: "Be Mine (English Version)",
    trackDuration: "03:27",
  },
  {
    id: "1yqdD2ScjkqvaNBUzPQ4vR",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "Who (Remixes)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2737f35adfbec3bb2bc8256802b",
    trackName: "Who",
    trackDuration: "02:50",
  },
  {
    id: "6t7t37Bex3DV4ADqAwUmwa",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "Who (Remixes)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2737f35adfbec3bb2bc8256802b",
    trackName: "Who (Instrumental)",
    trackDuration: "02:50",
  },
  {
    id: "2YKecnWyzkGEDTyNaKBG2H",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "Who (Remixes)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2737f35adfbec3bb2bc8256802b",
    trackName: "Who (Acoustic Remix)",
    trackDuration: "03:04",
  },
  {
    id: "2x9lpe6UIHNqLf8fB8qpb7",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "Who (Remixes)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2737f35adfbec3bb2bc8256802b",
    trackName: "Who (Rock Remix)",
    trackDuration: "02:51",
  },
  {
    id: "1PNdJibg1adHD1pTpYBfGc",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "Who (Remixes)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2737f35adfbec3bb2bc8256802b",
    trackName: "Who (Shibuyakei Remix)",
    trackDuration: "02:46",
  },
  {
    id: "6E9BsGMop0G1jrpQNzugXv",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "Who (Remixes)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2737f35adfbec3bb2bc8256802b",
    trackName: "Who (Funky Remix)",
    trackDuration: "03:08",
  },
  {
    id: "1GDjQlek7EFZ3qTyySTSAF",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "Who (Remixes)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2737f35adfbec3bb2bc8256802b",
    trackName: "Who (Beautiful Mind Remix)",
    trackDuration: "02:57",
  },
  {
    id: "6IST7HiO2OlytkRp866Xdd",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "Übermensch",
    releaseDate: "2025-02-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730c8549d4dad1c1e95f316736",
    trackName: "HOME SWEET HOME (feat. TAEYANG & DAESUNG)",
    trackDuration: "03:31",
  },
  {
    id: "3hRg8A9PwC5YWrgLRJ4OFf",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "Übermensch",
    releaseDate: "2025-02-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730c8549d4dad1c1e95f316736",
    trackName: "PO￦ER",
    trackDuration: "02:23",
  },
  {
    id: "0Kk5TRkYuWXY89KamtFEFw",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "Übermensch",
    releaseDate: "2025-02-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730c8549d4dad1c1e95f316736",
    trackName: "TOO BAD (feat. Anderson .Paak)",
    trackDuration: "02:33",
  },
  {
    id: "5p888hnYmPMQTMcVZXF8Dd",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "Übermensch",
    releaseDate: "2025-02-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730c8549d4dad1c1e95f316736",
    trackName: "DRAMA",
    trackDuration: "03:54",
  },
  {
    id: "1YfsKKIW19u5QMeWdiFvk1",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "Übermensch",
    releaseDate: "2025-02-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730c8549d4dad1c1e95f316736",
    trackName: "IBELONGIIU",
    trackDuration: "03:13",
  },
  {
    id: "1rHhowJ15GjsTqCGoTXm5e",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "Übermensch",
    releaseDate: "2025-02-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730c8549d4dad1c1e95f316736",
    trackName: "TAKE ME",
    trackDuration: "03:39",
  },
  {
    id: "4wq8RcVA4GdRx8w6GUrjio",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "Übermensch",
    releaseDate: "2025-02-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730c8549d4dad1c1e95f316736",
    trackName: "보나마나 (BONAMANA)",
    trackDuration: "03:15",
  },
  {
    id: "5WNRDeYpON54LEZOoiI3Xf",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "Übermensch",
    releaseDate: "2025-02-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730c8549d4dad1c1e95f316736",
    trackName: "GYRO-DROP",
    trackDuration: "02:48",
  },
  {
    id: "1SYcF2fUYDYQsISyFehQYI",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "COUP D'ETAT (Korean Version)",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738993cee2c10adefcac0a3654",
    trackName: "COUP D'ETAT",
    trackDuration: "02:58",
  },
  {
    id: "62qrReIGZC8zzdmw9DXEuS",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "COUP D'ETAT (Korean Version)",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738993cee2c10adefcac0a3654",
    trackName: "NILIRIA - Missy Elliott Version",
    trackDuration: "02:52",
  },
  {
    id: "3iBJHz5krbr4zUM40zzwcJ",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "COUP D'ETAT (Korean Version)",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738993cee2c10adefcac0a3654",
    trackName: "R.O.D.",
    trackDuration: "03:56",
  },
  {
    id: "44f1TNdoQUgf3PUYraCTsH",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "COUP D'ETAT (Korean Version)",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738993cee2c10adefcac0a3654",
    trackName: "Black (Feat. JENNIE of BLACKPINK)",
    trackDuration: "03:23",
  },
  {
    id: "4uS12OS6QeNgiCHpaqwvlR",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "COUP D'ETAT (Korean Version)",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738993cee2c10adefcac0a3654",
    trackName: "WHO YOU?",
    trackDuration: "03:21",
  },
  {
    id: "3jeGRLccqBJ0CxkUVZQKxE",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "COUP D'ETAT (Korean Version)",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738993cee2c10adefcac0a3654",
    trackName: "SHAKE THE WORLD",
    trackDuration: "02:54",
  },
  {
    id: "3N9lH3C9oykSau0Q74bVsi",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "COUP D'ETAT (Korean Version)",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738993cee2c10adefcac0a3654",
    trackName: "GO",
    trackDuration: "03:28",
  },
  {
    id: "3mb0tvqsU8IPaAYvyf55az",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "COUP D'ETAT (Korean Version)",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738993cee2c10adefcac0a3654",
    trackName: "CROOKED",
    trackDuration: "03:44",
  },
  {
    id: "5CRuf5AnlXoapQfwi1sxbS",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "COUP D'ETAT (Korean Version)",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738993cee2c10adefcac0a3654",
    trackName: "NILIRIA - G-Dragon Version",
    trackDuration: "02:52",
  },
  {
    id: "6wCNJoZaOLnFzXoNFlR65V",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "COUP D'ETAT (Korean Version)",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738993cee2c10adefcac0a3654",
    trackName: "RUNAWAY",
    trackDuration: "03:21",
  },
  {
    id: "2tNdosMthOOTnH1KYdKl16",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "COUP D'ETAT (Korean Version)",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738993cee2c10adefcac0a3654",
    trackName: "I LOVE IT",
    trackDuration: "03:14",
  },
  {
    id: "7nySA2CVivNXZvjwJLe9dG",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "COUP D'ETAT (Korean Version)",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738993cee2c10adefcac0a3654",
    trackName: "YOU DO (Outro)",
    trackDuration: "02:37",
  },
  {
    id: "3q0evJwZohI2FfXkfC5tSR",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "COUP D'ETAT",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733dbdbd0023f1e1c08cd5a6c9",
    trackName: "COUP D'ETAT",
    trackDuration: "02:58",
  },
  {
    id: "1fZGJrxPq82zcHVoYMntZt",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "COUP D'ETAT",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733dbdbd0023f1e1c08cd5a6c9",
    trackName: "NILIRIA - Missy Elliott Version",
    trackDuration: "02:52",
  },
  {
    id: "1TmvMsKakEUCtLgkGYEZp4",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "COUP D'ETAT",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733dbdbd0023f1e1c08cd5a6c9",
    trackName: "R.O.D.",
    trackDuration: "03:56",
  },
  {
    id: "7BYGfn9F73atTWMdAHVdPk",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "COUP D'ETAT",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733dbdbd0023f1e1c08cd5a6c9",
    trackName: "BLACK",
    trackDuration: "03:23",
  },
  {
    id: "7iT56ss42YdtYnNQEnxp9Z",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "COUP D'ETAT",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733dbdbd0023f1e1c08cd5a6c9",
    trackName: "WHO YOU?",
    trackDuration: "03:21",
  },
  {
    id: "0yQVxHQ8MPI7jxkewravSD",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "COUP D'ETAT",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733dbdbd0023f1e1c08cd5a6c9",
    trackName: "SHAKE THE WORLD",
    trackDuration: "02:54",
  },
  {
    id: "7gPF3Mu0DVWj75SXdZaYCY",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "COUP D'ETAT",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733dbdbd0023f1e1c08cd5a6c9",
    trackName: "GO",
    trackDuration: "03:28",
  },
  {
    id: "4EwNWRBWdZ6bgvxRHlZ8OO",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "COUP D'ETAT",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733dbdbd0023f1e1c08cd5a6c9",
    trackName: "CROOKED",
    trackDuration: "03:44",
  },
  {
    id: "3lLFAlgTMNJdXEl9bhkowL",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "COUP D'ETAT",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733dbdbd0023f1e1c08cd5a6c9",
    trackName: "NILIRIA - G-Dragon Version",
    trackDuration: "02:52",
  },
  {
    id: "4yUZkcPv80Wi4TYgpJaZ9e",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "COUP D'ETAT",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733dbdbd0023f1e1c08cd5a6c9",
    trackName: "RUNAWAY",
    trackDuration: "03:21",
  },
  {
    id: "1K1DpAZoH5jbpvxcAY07Sy",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "COUP D'ETAT",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733dbdbd0023f1e1c08cd5a6c9",
    trackName: "I LOVE IT",
    trackDuration: "03:14",
  },
  {
    id: "2346AzTq5Qtru2VJv1Wreq",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "COUP D'ETAT",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733dbdbd0023f1e1c08cd5a6c9",
    trackName: "YOU DO (Outro)",
    trackDuration: "02:37",
  },
  {
    id: "5KIPe6uCM6rosCxeGcfPTA",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "2013 G-DRAGON WORLD TOUR 'ONE OF A KIND in SEOUL'",
    releaseDate: "2013-09-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733b3dd1119701d44552749dae",
    trackName: "GO - Live",
    trackDuration: "04:15",
  },
  {
    id: "2fbvGELVvBGeCt5PGEvxNf",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "2013 G-DRAGON WORLD TOUR 'ONE OF A KIND in SEOUL'",
    releaseDate: "2013-09-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733b3dd1119701d44552749dae",
    trackName: "Heartbreaker - Live",
    trackDuration: "03:20",
  },
  {
    id: "52fUpY23U2AsSdVCOcfK5v",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "2013 G-DRAGON WORLD TOUR 'ONE OF A KIND in SEOUL'",
    releaseDate: "2013-09-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733b3dd1119701d44552749dae",
    trackName: "One of a Kind - Live",
    trackDuration: "03:28",
  },
  {
    id: "4CxEcSx0FIYmzwDGDbUHoO",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "2013 G-DRAGON WORLD TOUR 'ONE OF A KIND in SEOUL'",
    releaseDate: "2013-09-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733b3dd1119701d44552749dae",
    trackName: "Butterfly - Live",
    trackDuration: "04:00",
  },
  {
    id: "6gSO9nwQqrgfMBXEmWCyQL",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "2013 G-DRAGON WORLD TOUR 'ONE OF A KIND in SEOUL'",
    releaseDate: "2013-09-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733b3dd1119701d44552749dae",
    trackName: "Missing You - Live",
    trackDuration: "03:46",
  },
  {
    id: "62QLmXhOjh4iWC1CKy90xK",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "2013 G-DRAGON WORLD TOUR 'ONE OF A KIND in SEOUL'",
    releaseDate: "2013-09-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733b3dd1119701d44552749dae",
    trackName: "That XX - Live",
    trackDuration: "03:44",
  },
  {
    id: "6pxrme6UtEm7KaFI1RMdQl",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "2013 G-DRAGON WORLD TOUR 'ONE OF A KIND in SEOUL'",
    releaseDate: "2013-09-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733b3dd1119701d44552749dae",
    trackName: "Without You - Live",
    trackDuration: "04:11",
  },
  {
    id: "7GVT1u4kAKlIAkVkPaSZ9p",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "2013 G-DRAGON WORLD TOUR 'ONE OF A KIND in SEOUL'",
    releaseDate: "2013-09-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733b3dd1119701d44552749dae",
    trackName: "Today - Live",
    trackDuration: "04:51",
  },
  {
    id: "7nsdz4KlIj91cwCJ9m33Fx",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "2013 G-DRAGON WORLD TOUR 'ONE OF A KIND in SEOUL'",
    releaseDate: "2013-09-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733b3dd1119701d44552749dae",
    trackName: "A Boy - Live",
    trackDuration: "03:52",
  },
  {
    id: "1iNWC4Bu09R0o9DJXlKJGF",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "2013 G-DRAGON WORLD TOUR 'ONE OF A KIND in SEOUL'",
    releaseDate: "2013-09-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733b3dd1119701d44552749dae",
    trackName: "This Love - Live",
    trackDuration: "03:12",
  },
  {
    id: "0fAeXI8WxncT8IkMaNI75c",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "2013 G-DRAGON WORLD TOUR 'ONE OF A KIND in SEOUL'",
    releaseDate: "2013-09-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733b3dd1119701d44552749dae",
    trackName: "1 Year - Live",
    trackDuration: "04:50",
  },
  {
    id: "1TkjST5uC2Kx4A6Ktg7RXV",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "2013 G-DRAGON WORLD TOUR 'ONE OF A KIND in SEOUL'",
    releaseDate: "2013-09-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733b3dd1119701d44552749dae",
    trackName: "Obsession - Live",
    trackDuration: "05:25",
  },
  {
    id: "6E9qJkWX0Kae59pZelC02V",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "2013 G-DRAGON WORLD TOUR 'ONE OF A KIND in SEOUL'",
    releaseDate: "2013-09-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733b3dd1119701d44552749dae",
    trackName: "She's Gone - Live",
    trackDuration: "04:42",
  },
  {
    id: "2J7RfDZhlJo4PPcF6S3SuO",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "2013 G-DRAGON WORLD TOUR 'ONE OF A KIND in SEOUL'",
    releaseDate: "2013-09-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733b3dd1119701d44552749dae",
    trackName: "Crayon + Fantastic Baby - Live",
    trackDuration: "06:14",
  },
  {
    id: "0jzNkPeK3W1g7G1MoqIfeZ",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "Heartbreaker",
    trackDuration: "05:04",
  },
  {
    id: "4eAbsf15Xi5ItqJiTOVHKQ",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "This Love",
    trackDuration: "03:44",
  },
  {
    id: "3ar6JH26PgvWitEsBx2H4I",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "Hello (Feat. DARA)",
    trackDuration: "03:46",
  },
  {
    id: "19o6PAA7YhNuKlJ6McmvP6",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "Gossip Man (Feat. Kim Gun Mo)",
    trackDuration: "03:58",
  },
  {
    id: "02b9u4HtbgWDEDWmmkv061",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "Korean Dream + Storm + Hip Hop Gentlemen + G-DRAGON",
    trackDuration: "04:15",
  },
  {
    id: "1LERA11k6mBQVtPON9xrxX",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "A Boy",
    trackDuration: "03:16",
  },
  {
    id: "7eUU0sWJq3k0GPca9Ak8cP",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "The Leaders (Feat. Teddy, CL)",
    trackDuration: "04:44",
  },
  {
    id: "7p6ZmgzWeZPIqoqMr1GgEQ",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "Breathe",
    trackDuration: "03:54",
  },
  {
    id: "0cwyRZpI8CmHF3Inx78Hgo",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "Butterfly (Feat. Jin Jung)",
    trackDuration: "03:41",
  },
  {
    id: "5QIp9cwiXJdCI8Bz2k8i8c",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "But I Love U",
    trackDuration: "04:55",
  },
  {
    id: "4zAGN8kU33hfTrhQRHhYdU",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "She's Gone (Feat. KUSH)",
    trackDuration: "04:50",
  },
  {
    id: "1JaGOGGmxiMUlQ2SGwheLk",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "Only Look At Me",
    trackDuration: "04:01",
  },
  {
    id: "3lShYM0Ts3HfEDFpfkGO5z",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "Korean Dream (Feat. TAEYANG)",
    trackDuration: "03:33",
  },
  {
    id: "4McJBwPCVaey67P7Vva81s",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "1 Year",
    trackDuration: "05:29",
  },
  {
    id: "3bNTPfEavB3i1RD4g8AaDn",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "Lies",
    trackDuration: "05:59",
  },
  {
    id: "0bEca0Fd6dmW9PmEDGeEi7",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "Heartbreaker (Encore)",
    trackDuration: "04:51",
  },
  {
    id: "5HH0VAoIyxEL5X4ZES6TEx",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "Heartbreaker (Feat. Flo Rida)",
    trackDuration: "03:24",
  },
  {
    id: "163261XJJ4vA69ZXKW6WeP",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "This love (G.H remix)",
    trackDuration: "03:19",
  },
  {
    id: "6pcsEv1oLDQa3SggnaASsg",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "A Boy (CHOICE 37 Remix)",
    trackDuration: "03:24",
  },
  {
    id: "0z3tku2tK4E9hAj7PmLRzd",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb99234fca18ba6bc8e75620ca",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "Breathe (hitchhiker Remix)",
    trackDuration: "03:38",
  },
  {
    id: "0BA3uoKlu9CsHgXIeAiXmJ",
    artistName: "PLAVE",
    genres: ["k-pop"],
    popularity: 66,
    followers: 282798,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba3fb52387f636edea69f599c",
    albumsName: "Caligo Pt.1",
    releaseDate: "2025-02-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ca59009b95be7b850357de10",
    trackName: "Chroma Drift",
    trackDuration: "03:30",
  },
  {
    id: "2sDcIrosoXqiGv1D5OQUvF",
    artistName: "PLAVE",
    genres: ["k-pop"],
    popularity: 66,
    followers: 282798,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba3fb52387f636edea69f599c",
    albumsName: "Caligo Pt.1",
    releaseDate: "2025-02-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ca59009b95be7b850357de10",
    trackName: "Dash",
    trackDuration: "02:54",
  },
  {
    id: "6JbyOUBLnkMadKcPQoQeTR",
    artistName: "PLAVE",
    genres: ["k-pop"],
    popularity: 66,
    followers: 282798,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba3fb52387f636edea69f599c",
    albumsName: "Caligo Pt.1",
    releaseDate: "2025-02-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ca59009b95be7b850357de10",
    trackName: "RIZZ",
    trackDuration: "02:44",
  },
  {
    id: "3ICrCBhFiLaX0qP7KErHLe",
    artistName: "PLAVE",
    genres: ["k-pop"],
    popularity: 66,
    followers: 282798,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba3fb52387f636edea69f599c",
    albumsName: "Caligo Pt.1",
    releaseDate: "2025-02-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ca59009b95be7b850357de10",
    trackName: "Island",
    trackDuration: "04:16",
  },
  {
    id: "4gQJFhPYEVLuxyriyUubzD",
    artistName: "PLAVE",
    genres: ["k-pop"],
    popularity: 66,
    followers: 282798,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba3fb52387f636edea69f599c",
    albumsName: "Caligo Pt.1",
    releaseDate: "2025-02-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ca59009b95be7b850357de10",
    trackName: "12:32 (A to T)",
    trackDuration: "03:13",
  },
  {
    id: "1riEr6o3obQxrQRFmD9Sed",
    artistName: "PLAVE",
    genres: ["k-pop"],
    popularity: 66,
    followers: 282798,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba3fb52387f636edea69f599c",
    albumsName: "The Fiery Priest 2 (Original Soundtrack) Part.2",
    releaseDate: "2024-11-16",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27342f928ecd788665e0941e7da",
    trackName: "We don't stop",
    trackDuration: "03:22",
  },
  {
    id: "4jdlmdxikDrQc4YNhkRccv",
    artistName: "PLAVE",
    genres: ["k-pop"],
    popularity: 66,
    followers: 282798,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba3fb52387f636edea69f599c",
    albumsName: "The Fiery Priest 2 (Original Soundtrack) Part.2",
    releaseDate: "2024-11-16",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27342f928ecd788665e0941e7da",
    trackName: "We don't stop - Inst.",
    trackDuration: "03:12",
  },
  {
    id: "0CN7xUFQbPRzffogC4FgBR",
    artistName: "PLAVE",
    genres: ["k-pop"],
    popularity: 66,
    followers: 282798,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba3fb52387f636edea69f599c",
    albumsName: "Dear Hyeri, Pt. 4 (Original Soundtrack)",
    releaseDate: "2024-10-13",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273a34b2e1a0bddae322a8219da",
    trackName: "What If",
    trackDuration: "03:51",
  },
  {
    id: "3KSkAziu70R5dvs0gmaNLv",
    artistName: "PLAVE",
    genres: ["k-pop"],
    popularity: 66,
    followers: 282798,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba3fb52387f636edea69f599c",
    albumsName: "Dear Hyeri, Pt. 4 (Original Soundtrack)",
    releaseDate: "2024-10-13",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273a34b2e1a0bddae322a8219da",
    trackName: "What If - Instrumental",
    trackDuration: "03:51",
  },
  {
    id: "34DtDWmIUacoop6Md298vE",
    artistName: "PLAVE",
    genres: ["k-pop"],
    popularity: 66,
    followers: 282798,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba3fb52387f636edea69f599c",
    albumsName: "Pump Up The Volume!",
    releaseDate: "2024-08-20",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730521b4efcb4432ca54cf2baa",
    trackName: "Pump Up The Volume!",
    trackDuration: "02:59",
  },
  {
    id: "1NubJcJa12xLssOkQfWZDZ",
    artistName: "PLAVE",
    genres: ["k-pop"],
    popularity: 66,
    followers: 282798,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba3fb52387f636edea69f599c",
    albumsName: "ASTERUM : 134-1",
    releaseDate: "2024-02-26",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fcdc5e626e66249ead948655",
    trackName: "Watch Me Woo!",
    trackDuration: "02:15",
  },
  {
    id: "1T6xi2QrnmwaebXGvWAjLg",
    artistName: "PLAVE",
    genres: ["k-pop"],
    popularity: 66,
    followers: 282798,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba3fb52387f636edea69f599c",
    albumsName: "ASTERUM : 134-1",
    releaseDate: "2024-02-26",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fcdc5e626e66249ead948655",
    trackName: "WAY 4 LUV",
    trackDuration: "03:39",
  },
  {
    id: "4mMtn8zhy4IaOwzNCgSbCT",
    artistName: "PLAVE",
    genres: ["k-pop"],
    popularity: 66,
    followers: 282798,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba3fb52387f636edea69f599c",
    albumsName: "ASTERUM : 134-1",
    releaseDate: "2024-02-26",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fcdc5e626e66249ead948655",
    trackName: "Virtual Idol",
    trackDuration: "02:29",
  },
  {
    id: "1UyrFk2u0Asqmys76trMLi",
    artistName: "PLAVE",
    genres: ["k-pop"],
    popularity: 66,
    followers: 282798,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba3fb52387f636edea69f599c",
    albumsName: "ASTERUM : 134-1",
    releaseDate: "2024-02-26",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fcdc5e626e66249ead948655",
    trackName: "From",
    trackDuration: "03:28",
  },
  {
    id: "2ODZujtUNxCQDfKCxCeRxZ",
    artistName: "PLAVE",
    genres: ["k-pop"],
    popularity: 66,
    followers: 282798,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba3fb52387f636edea69f599c",
    albumsName: "ASTERUM : 134-1",
    releaseDate: "2024-02-26",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fcdc5e626e66249ead948655",
    trackName: "Our Movie",
    trackDuration: "02:41",
  },
  {
    id: "30FH8tNdUgHqZbB6ENgOwY",
    artistName: "PLAVE",
    genres: ["k-pop"],
    popularity: 66,
    followers: 282798,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba3fb52387f636edea69f599c",
    albumsName: "ASTERUM : 134-1",
    releaseDate: "2024-02-26",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fcdc5e626e66249ead948655",
    trackName: "Merry PLLIstmas",
    trackDuration: "03:59",
  },
  {
    id: "6xGr4tVzpTX99p9Cf0hRRL",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "GOLDEN",
    releaseDate: "2023-11-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273741fd4807f442af3f7359316",
    trackName: "3D (feat. Jack Harlow)",
    trackDuration: "03:21",
  },
  {
    id: "06Qo2fYR2KS1F7bL338iVT",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "GOLDEN",
    releaseDate: "2023-11-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273741fd4807f442af3f7359316",
    trackName: "Closer to You (feat. Major Lazer)",
    trackDuration: "02:50",
  },
  {
    id: "2HRgqmZQC0MC7GeNuDIXHN",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "GOLDEN",
    releaseDate: "2023-11-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273741fd4807f442af3f7359316",
    trackName: "Seven (feat. Latto) (Explicit Ver.)",
    trackDuration: "03:03",
  },
  {
    id: "2KslE17cAJNHTsI2MI0jb2",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "GOLDEN",
    releaseDate: "2023-11-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273741fd4807f442af3f7359316",
    trackName: "Standing Next to You",
    trackDuration: "03:26",
  },
  {
    id: "2gkVEnpahpE3bQuvGuCpAV",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "GOLDEN",
    releaseDate: "2023-11-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273741fd4807f442af3f7359316",
    trackName: "Yes or No",
    trackDuration: "02:27",
  },
  {
    id: "0k0GtcnyQLMiXrdEDbLXmJ",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "GOLDEN",
    releaseDate: "2023-11-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273741fd4807f442af3f7359316",
    trackName: "Please Don't Change (feat. DJ Snake)",
    trackDuration: "02:26",
  },
  {
    id: "5ONOlTiqymhzwcFjqcIT6E",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "GOLDEN",
    releaseDate: "2023-11-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273741fd4807f442af3f7359316",
    trackName: "Hate You",
    trackDuration: "02:34",
  },
  {
    id: "5KfJvZ0PZzRdwFRaTUDAA7",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "GOLDEN",
    releaseDate: "2023-11-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273741fd4807f442af3f7359316",
    trackName: "Somebody",
    trackDuration: "02:48",
  },
  {
    id: "3bNNvJA7hsGw0wSpGkfOBm",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "GOLDEN",
    releaseDate: "2023-11-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273741fd4807f442af3f7359316",
    trackName: "Too Sad to Dance",
    trackDuration: "02:55",
  },
  {
    id: "7AbqgE05nFl9qY4FRUiq2p",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "GOLDEN",
    releaseDate: "2023-11-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273741fd4807f442af3f7359316",
    trackName: "Shot Glass of Tears",
    trackDuration: "02:47",
  },
  {
    id: "7Hcj0duTWiCSYDtJaztNIt",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "GOLDEN",
    releaseDate: "2023-11-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273741fd4807f442af3f7359316",
    trackName: "Seven (feat. Latto) (Clean Ver.)",
    trackDuration: "03:03",
  },
  {
    id: "01qFKNWq73UfEslI0GvumE",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "3D : The Remixes",
    releaseDate: "2023-10-02",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27399583bb32b47e87d55c6064b",
    trackName: "3D (feat. Jack Harlow)",
    trackDuration: "03:21",
  },
  {
    id: "6Xa9B3iE7bo3GkyUOVAhB9",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "3D : The Remixes",
    releaseDate: "2023-10-02",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27399583bb32b47e87d55c6064b",
    trackName: "3D (feat. Jack Harlow) (Instrumental)",
    trackDuration: "03:19",
  },
  {
    id: "5BKiMkWucQVb7wrFi29VtX",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "3D : The Remixes",
    releaseDate: "2023-10-02",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27399583bb32b47e87d55c6064b",
    trackName: "3D (Alternate Ver.)",
    trackDuration: "02:42",
  },
  {
    id: "7fQKDpB4i0hiQacjVCXVU2",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "3D : The Remixes",
    releaseDate: "2023-10-02",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27399583bb32b47e87d55c6064b",
    trackName: "3D (feat. Jack Harlow) (A. G. Cook Remix)",
    trackDuration: "03:08",
  },
  {
    id: "0TaaG2kxjzSjVbmmiiSZEa",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "3D : The Remixes",
    releaseDate: "2023-10-02",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27399583bb32b47e87d55c6064b",
    trackName: "3D (feat. Jack Harlow) (Clean Ver.)",
    trackDuration: "03:22",
  },
  {
    id: "1ewYtP6BZlak8qokzZe4Bx",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "3D : The Remixes",
    releaseDate: "2023-10-02",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27399583bb32b47e87d55c6064b",
    trackName: "3D (feat. Jack Harlow) (Sped Up)",
    trackDuration: "02:48",
  },
  {
    id: "0dzT72K2RElXDMuMOyuKOI",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "3D : The Remixes",
    releaseDate: "2023-10-02",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27399583bb32b47e87d55c6064b",
    trackName: "3D (feat. Jack Harlow) (Slowed Down)",
    trackDuration: "03:56",
  },
  {
    id: "2nRMW95dnOILirpjbksLTs",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "Never Let Go",
    releaseDate: "2024-06-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273083f5a45d93b57cb65a97b83",
    trackName: "Never Let Go",
    trackDuration: "02:46",
  },
  {
    id: "0VPFT123HKoQ2J6ipeDcI1",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "Standing Next to You (USHER Remix)",
    releaseDate: "2023-12-01",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273c9912de0a8a9a44b450318e4",
    trackName: "Standing Next to You (USHER Remix)",
    trackDuration: "03:34",
  },
  {
    id: "2mHw0KoEyDw8Yaw3yPoke6",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "3D (Justin Timberlake Remix)",
    releaseDate: "2023-11-24",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27322e565596578ef0adbf5eaf1",
    trackName: "3D (Justin Timberlake Remix)",
    trackDuration: "02:40",
  },
  {
    id: "42e6dogVzAPSudzaBqRUIV",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName:
      "HANDS UP - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "04:01",
  },
  {
    id: "4DOvi3I7GtgVErqXnjAs3o",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName: "SOBER - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "04:19",
  },
  {
    id: "3RVgqjACPWt7LC7TgcCD7w",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName:
      "WE LIKE 2 PARTY - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "03:42",
  },
  {
    id: "5Ym7yyiFy5Z2GW8zYH45ms",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName:
      "FXXK IT - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "02:36",
  },
  {
    id: "7kBSj85ufJ1VpvSqLAr75X",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName: "LOSER - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "04:03",
  },
  {
    id: "6HldMPK1mbjgI0Y5t370j9",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName:
      "BAD BOY - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "04:14",
  },
  {
    id: "3emIcxw9NWVwKEdaXvXxF7",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName:
      "WAKE ME UP - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "03:23",
  },
  {
    id: "3pP5rsaeJMIovsClmJmh3i",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName:
      "DARLING - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "04:10",
  },
  {
    id: "2GrmNtTCulwxR9lk8NQBAD",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName:
      "SUPER STAR - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "04:04",
  },
  {
    id: "2C0LOJPcnVcSKCX3N0DqEn",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName:
      "Untitled, 2014 - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "03:44",
  },
  {
    id: "6Q00t2IdzTzcWgaevt2AQ7",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName: "D-Day - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "03:57",
  },
  {
    id: "5nCje7k5ZjgJ2XISx7cUZd",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName:
      "A・ZE・CHO ! - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "04:56",
  },
  {
    id: "7uJ9p6GuOS5F5GnY94Kq5v",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName:
      "COME TO MY - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "02:17",
  },
  {
    id: "2Gu2yJtqxaJsq0fEozyChQ",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName: "I KNOW - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "02:36",
  },
  {
    id: "2QtzsCMEuxZ5TAfOGVJpLY",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName:
      "Look at me, Gwisun - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "03:47",
  },
  {
    id: "5wmUNZ7P5GUjZ0JBWKBDZs",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName:
      "GOOD BOY - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "04:08",
  },
  {
    id: "7ijpfBQv7sW0EHwbzRgI1a",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName: "IF YOU - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "04:28",
  },
  {
    id: "5LkYB8BCNIDf6ZWwrRNacI",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName:
      "HaruHaru - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "03:44",
  },
  {
    id: "31jPf3RQi35D9NaOIgwX4P",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName:
      "FANTASTIC BABY - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "04:11",
  },
  {
    id: "55iMEsMm9td9daH0mHPoBG",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName:
      "BANG BANG BANG - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "03:46",
  },
  {
    id: "45mMN0OSFF5Nv7hBmeOUQx",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "HEAVEN - Live",
    trackDuration: "04:26",
  },
  {
    id: "1zq8heBhjwmCnqx4RSZhb7",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "WE LIKE 2 PARTY - Live",
    trackDuration: "03:36",
  },
  {
    id: "0tYT6RdFKcSgBiaMfs3mdR",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "HANDS UP - Live",
    trackDuration: "03:55",
  },
  {
    id: "6w17ZLpTonbMfRRDdrofVj",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "BAD BOY - Live",
    trackDuration: "04:13",
  },
  {
    id: "1QdpaBkjNApYmwYlDuWHik",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "LOSER - Live",
    trackDuration: "03:59",
  },
  {
    id: "6iCrpFpnNJO7FY8Iu7z7Hf",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "FXXK IT - Live",
    trackDuration: "07:33",
  },
  {
    id: "4uov3g2rlZdNY9GORNsh4b",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "LET’S TALK ABOUT LOVE - Live",
    trackDuration: "01:27",
  },
  {
    id: "4pJRJMMTymF7IeRYHrHThC",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "STRONG BABY - Live",
    trackDuration: "02:21",
  },
  {
    id: "225g4x1sW9Zm3lULmJrVKa",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "WINGS - Live",
    trackDuration: "02:46",
  },
  {
    id: "4SHIhIglN6lQzBWzjfPRE8",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "LOOK AT ME GWISOON - Live",
    trackDuration: "04:20",
  },
  {
    id: "6kv5MN91E2yByJ1XWD76vQ",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "HEARTBREAKER - Live",
    trackDuration: "02:28",
  },
  {
    id: "5OmzFuUbe7djQLT2uG6I3r",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "CRAYON - Live",
    trackDuration: "03:20",
  },
  {
    id: "1YD8M14uJW3DXrCs4FeO8o",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "HIGH HIGH - Live",
    trackDuration: "03:15",
  },
  {
    id: "4Kz8OC4sm2uCaCrEp9mLZ1",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "GOOD BOY - Live",
    trackDuration: "04:10",
  },
  {
    id: "0fIiCm9Pf19dcIrmZ7stf8",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "PRETENDED - Live",
    trackDuration: "02:44",
  },
  {
    id: "10CDw5PAK3WmqkNQYJ1kuN",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "DOOM DADA - Live",
    trackDuration: "05:24",
  },
  {
    id: "6nrgWCby7MpEpbcRJxRRZ9",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "EYES, NOSE, LIPS - Live",
    trackDuration: "04:45",
  },
  {
    id: "00zcv0aqdWQep2DrVWNPjO",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "ONLY LOOK AT ME - Live",
    trackDuration: "02:38",
  },
  {
    id: "7zqLN6qt1ZNlEFLgB3LBWx",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "RINGA LINGA - Live",
    trackDuration: "03:46",
  },
  {
    id: "00hHDWHG3MiE2OOUmve79F",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "IF YOU - Live",
    trackDuration: "04:50",
  },
  {
    id: "33e3jzlgpXBQgTQ6radEv8",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "HEAVEN - Live",
    trackDuration: "04:23",
  },
  {
    id: "4h0kPyfScsOoKlNRJ1l5Ty",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "WE LIKE 2 PARTY - Live",
    trackDuration: "03:35",
  },
  {
    id: "0wjAWaUxM3moRA6jvtsxPJ",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "HANDS UP - Live",
    trackDuration: "04:00",
  },
  {
    id: "27PYGYRXxejUF4cYulQmtS",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "BAD BOY - Live",
    trackDuration: "04:08",
  },
  {
    id: "3r6dAVVWsmqCDFvgSBiHEz",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "LOSER - Live",
    trackDuration: "03:41",
  },
  {
    id: "0qdJctmCqOqUL3kanmkmRi",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "FEELING - Live",
    trackDuration: "03:41",
  },
  {
    id: "3NggKc4eylweTkujZEgHJ8",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "LET'S TALK ABOUT LOVE - Live",
    trackDuration: "01:23",
  },
  {
    id: "69uYZk1xUWUGAGaTG3dfNm",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "STRONG BABY - Live",
    trackDuration: "02:25",
  },
  {
    id: "3LhyrhaUISsp2adwBdRLVX",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "WINGS - Live",
    trackDuration: "02:45",
  },
  {
    id: "70ZcnxosNyBkxqNnaVdVcB",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "LOOK AT ME GWISOON - Live",
    trackDuration: "04:21",
  },
  {
    id: "6asqAqKRwHKQh2ANgDiJXe",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "CROOKED - Live",
    trackDuration: "07:07",
  },
  {
    id: "3PRaRBkHgzmxer5HIh0vGF",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "HEARTBREAKER - Live",
    trackDuration: "02:28",
  },
  {
    id: "6BTfPlTa9AvOM3H3szjaRL",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "CRAYON - Live",
    trackDuration: "03:25",
  },
  {
    id: "0dflZ9lezOwO0AZVgYQSQL",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "HIGH HIGH - Live",
    trackDuration: "03:23",
  },
  {
    id: "18oGfIsfOaNHMrq8dyyk3e",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "GOOD BOY - Live",
    trackDuration: "04:11",
  },
  {
    id: "31eR03TwO2IRMYsCgKy6C3",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "PRETENDED - Live",
    trackDuration: "02:46",
  },
  {
    id: "1euM6MeQnbHHz1IgMyixo5",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "DOOM DADA - Live",
    trackDuration: "04:07",
  },
  {
    id: "7w45jf4z9fNIJYE59BtjiC",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "EYES, NOSE, LIPS - Live",
    trackDuration: "04:52",
  },
  {
    id: "5npsyXX3PBPXv48zF8o6bh",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "ONLY LOOK AT ME - Live",
    trackDuration: "02:36",
  },
  {
    id: "0Vhmd3nrLXS9cVMiFaXg1T",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "RINGA LINGA - Live",
    trackDuration: "02:38",
  },
  {
    id: "3lYvepDz6yYj29z7e4r5z0",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "MADE",
    releaseDate: "2016-12-13",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fd0d9a33127c1d3f58ba3504",
    trackName: "FXXK IT",
    trackDuration: "03:51",
  },
  {
    id: "7ijWcf4FsoxoyPK4B9WGp6",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "MADE",
    releaseDate: "2016-12-13",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fd0d9a33127c1d3f58ba3504",
    trackName: "LAST DANCE",
    trackDuration: "04:39",
  },
  {
    id: "0FRVxxD5ZaLVnlwI9nxkqP",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "MADE",
    releaseDate: "2016-12-13",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fd0d9a33127c1d3f58ba3504",
    trackName: "GIRLFRIEND",
    trackDuration: "03:48",
  },
  {
    id: "6UgkB0xM45TR3Zjqm3GQ6T",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "MADE",
    releaseDate: "2016-12-13",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fd0d9a33127c1d3f58ba3504",
    trackName: "LET'S NOT FALL IN LOVE",
    trackDuration: "03:31",
  },
  {
    id: "2vzn8usBcuNL93DnTjEK0z",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "MADE",
    releaseDate: "2016-12-13",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fd0d9a33127c1d3f58ba3504",
    trackName: "LOSER",
    trackDuration: "03:39",
  },
  {
    id: "3miMeSGd7rzJEtuhQnzm0f",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "MADE",
    releaseDate: "2016-12-13",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fd0d9a33127c1d3f58ba3504",
    trackName: "BAE BAE",
    trackDuration: "02:49",
  },
  {
    id: "3dI59jLoFMjMAyUAyRZnkE",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "MADE",
    releaseDate: "2016-12-13",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fd0d9a33127c1d3f58ba3504",
    trackName: "BANG BANG BANG",
    trackDuration: "03:40",
  },
  {
    id: "3gUSmSBeeYsSMWECJcQW8w",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "MADE",
    releaseDate: "2016-12-13",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fd0d9a33127c1d3f58ba3504",
    trackName: "SOBER",
    trackDuration: "03:57",
  },
  {
    id: "4kaY4LbdbomICC25gYGGtn",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "MADE",
    releaseDate: "2016-12-13",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fd0d9a33127c1d3f58ba3504",
    trackName: "IF YOU",
    trackDuration: "04:24",
  },
  {
    id: "6ePbs5ln6NGmMMuA6DrSaQ",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "MADE",
    releaseDate: "2016-12-13",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fd0d9a33127c1d3f58ba3504",
    trackName: "ZUTTER (GD&T.O.P)",
    trackDuration: "03:14",
  },
  {
    id: "07gp2fnoTbVCsRJYazycI4",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "MADE",
    releaseDate: "2016-12-13",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fd0d9a33127c1d3f58ba3504",
    trackName: "WE LIKE 2 PARTY",
    trackDuration: "03:15",
  },
  {
    id: "3kseM0JJ9CgrCKAv1uoQmu",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Bang Bang Bang - Live",
    trackDuration: "04:49",
  },
  {
    id: "36uTWoCYuYtO1Qp9u7a7hF",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Tonight - Live",
    trackDuration: "03:57",
  },
  {
    id: "7LfrP6RxGo9dMZYKVwewgC",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Stupid Liar - Live",
    trackDuration: "04:36",
  },
  {
    id: "7ADw9GQ6A97ytTLwUAciFa",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Haru Haru - Live",
    trackDuration: "05:09",
  },
  {
    id: "5RcJp2r9ZHREM56nV2lTp5",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Loser - Live",
    trackDuration: "03:59",
  },
  {
    id: "3yfcH0kOXWgc95wdL62tPw",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Blue - Live",
    trackDuration: "04:24",
  },
  {
    id: "0PRny2NKo7iBdU47zTOoSJ",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Bad Boy - Live",
    trackDuration: "04:32",
  },
  {
    id: "0iAgdDYh8Y9CETXoz1psiV",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "If You - Live",
    trackDuration: "05:10",
  },
  {
    id: "5Cnt2UgBxTIO65mlD5ELeQ",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Strong Baby - Live",
    trackDuration: "04:12",
  },
  {
    id: "2mYTfHz0wolZrAlF2bEX6M",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Wings - Live",
    trackDuration: "05:21",
  },
  {
    id: "0753tiqVdX34CvtoMgVYZF",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Doom Dada - Live",
    trackDuration: "04:01",
  },
  {
    id: "21po0SccfQs9FBEojjhmNN",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Eyes, Nose, Lips - Live",
    trackDuration: "05:19",
  },
  {
    id: "7efFRFZXZEwXCYrvFvNnOy",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Zutter - Live",
    trackDuration: "03:26",
  },
  {
    id: "3SgqaUT4PjwO84nO6OIhyI",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Good Boy - Live",
    trackDuration: "04:07",
  },
  {
    id: "6rxMYaoZlTWqWRyCDMHo0s",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Crooked - Live",
    trackDuration: "04:25",
  },
  {
    id: "5gNATY0PKGl0iCJ1cj7RCY",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Sober - Live",
    trackDuration: "05:38",
  },
  {
    id: "4Oq7zp72QZLwNbLlwvcSAz",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Bae Bae - Live",
    trackDuration: "03:56",
  },
  {
    id: "7wkdrGxG3jWLCpMhifoAGD",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Fantastic Baby - Live",
    trackDuration: "04:26",
  },
  {
    id: "3vG5OctNjOeRjZwxzAXTNv",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "We Like 2 Party (Encore) - Live",
    trackDuration: "03:17",
  },
  {
    id: "18I6Sg8Avsf5LIAzyYiNYH",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Lies (Encore) - Live",
    trackDuration: "03:39",
  },
  {
    id: "2RENZFrMGuOtr162uKsjOn",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Ruby",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27388e90abbb4d0d9e45881f4dc",
    trackName: "Intro : JANE with FKJ",
    trackDuration: "01:38",
  },
  {
    id: "0DC62SYIRKMFgx2f7OyvwD",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Ruby",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27388e90abbb4d0d9e45881f4dc",
    trackName: "like JENNIE",
    trackDuration: "02:03",
  },
  {
    id: "4YoN6sOtjWgbtB2jKgLPHL",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Ruby",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27388e90abbb4d0d9e45881f4dc",
    trackName: "start a war",
    trackDuration: "02:45",
  },
  {
    id: "2eOXb8aSpBUQLSk1sTBPEK",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Ruby",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27388e90abbb4d0d9e45881f4dc",
    trackName: "Handlebars (feat. Dua Lipa)",
    trackDuration: "03:04",
  },
  {
    id: "0wQASbxN6UbZXZhKXvuczj",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Ruby",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27388e90abbb4d0d9e45881f4dc",
    trackName: "with the IE (way up)",
    trackDuration: "02:43",
  },
  {
    id: "3fN2swfuBHUljCyPlA8wBN",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Ruby",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27388e90abbb4d0d9e45881f4dc",
    trackName: "ExtraL (feat. Doechii)",
    trackDuration: "02:47",
  },
  {
    id: "0oYhOxvxd95jtTWXHkYsPh",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Ruby",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27388e90abbb4d0d9e45881f4dc",
    trackName: "Mantra",
    trackDuration: "02:16",
  },
  {
    id: "2DW9UqvL7vcG3qCGFUmvXp",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Ruby",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27388e90abbb4d0d9e45881f4dc",
    trackName: "Love Hangover (feat. Dominic Fike)",
    trackDuration: "03:00",
  },
  {
    id: "76tWxLk4KWOw1Qd8dC5SdI",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Ruby",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27388e90abbb4d0d9e45881f4dc",
    trackName: "ZEN",
    trackDuration: "03:21",
  },
  {
    id: "3KldgsZmR6nCItrTrP8zbl",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Ruby",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27388e90abbb4d0d9e45881f4dc",
    trackName: "Damn Right (feat. Childish Gambino & Kali Uchis)",
    trackDuration: "03:50",
  },
  {
    id: "6wbLxHGBCpTWIpLZ5L0Zuv",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Ruby",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27388e90abbb4d0d9e45881f4dc",
    trackName: "F.T.S.",
    trackDuration: "02:32",
  },
  {
    id: "4p3oOaC3Fo38tEXp3SR5DN",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Ruby",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27388e90abbb4d0d9e45881f4dc",
    trackName: "Filter",
    trackDuration: "02:31",
  },
  {
    id: "3IPh4v7HFJ8Egba3lYNDrQ",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Ruby",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27388e90abbb4d0d9e45881f4dc",
    trackName: "Seoul City",
    trackDuration: "02:44",
  },
  {
    id: "0rNCeIkEvz61X0oP48z6cC",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Ruby",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27388e90abbb4d0d9e45881f4dc",
    trackName: "Starlight",
    trackDuration: "02:48",
  },
  {
    id: "5rP5Mwcx5IYavwVTCmdVIK",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Ruby",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27388e90abbb4d0d9e45881f4dc",
    trackName: "twin",
    trackDuration: "03:28",
  },
  {
    id: "2cR7c0dxkHnPcnWMLUlRVo",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Intro : JANE with FKJ",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27397b8e6f0dd873b5e34a394ee",
    trackName: "Intro : JANE with FKJ",
    trackDuration: "01:38",
  },
  {
    id: "4kh7FBVzeyRC0rMWRFDmMC",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Handlebars (feat. Dua Lipa)",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2739fb875cc9e6e4151461c2cf3",
    trackName: "Handlebars (feat. Dua Lipa)",
    trackDuration: "03:04",
  },
  {
    id: "4cfiNs7Yvr9UTLvbYWal1o",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Damn Right (feat. Childish Gambino & Kali Uchis)",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273270745e1253630a60c9b8d52",
    trackName: "Damn Right (feat. Childish Gambino & Kali Uchis)",
    trackDuration: "03:50",
  },
  {
    id: "4g0F7gpT3iVHqKjXF87eX1",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "ExtraL",
    releaseDate: "2025-02-21",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738f2b7786ef16c658cccfaecd",
    trackName: "ExtraL (feat. Doechii)",
    trackDuration: "02:47",
  },
  {
    id: "6JVXVLqCPaodBSEwRFUN8w",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "NJWMX",
    releaseDate: "2023-12-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273782a8cae588fee29eefec8b6",
    trackName: "Ditto (250 Remix)",
    trackDuration: "03:21",
  },
  {
    id: "4yjDMKCAeLovlo9ih0AgXW",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "NJWMX",
    releaseDate: "2023-12-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273782a8cae588fee29eefec8b6",
    trackName: "OMG (FRNK Remix)",
    trackDuration: "03:30",
  },
  {
    id: "2nW48vXnZZ5EYka46v7GOk",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "NJWMX",
    releaseDate: "2023-12-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273782a8cae588fee29eefec8b6",
    trackName: "Attention (250 Remix)",
    trackDuration: "03:01",
  },
  {
    id: "6CUKsv928uT4561qJovhhG",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "NJWMX",
    releaseDate: "2023-12-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273782a8cae588fee29eefec8b6",
    trackName: "Hype Boy (250 Remix)",
    trackDuration: "04:11",
  },
  {
    id: "5bwpbZBOY0mrmRhZ94c0kW",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "NJWMX",
    releaseDate: "2023-12-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273782a8cae588fee29eefec8b6",
    trackName: "Cookie (FRNK Remix)",
    trackDuration: "03:32",
  },
  {
    id: "2gWWYL6iXZKkOqCE3TQHBM",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "NJWMX",
    releaseDate: "2023-12-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273782a8cae588fee29eefec8b6",
    trackName: "Hurt (250 Remix)",
    trackDuration: "03:44",
  },
  {
    id: "3dCCHYqCAMdm1GCuklUaZG",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "NJWMX",
    releaseDate: "2023-12-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273782a8cae588fee29eefec8b6",
    trackName: "Ditto (250 Remix) (Instrumental)",
    trackDuration: "03:21",
  },
  {
    id: "2oLVT9Lo0SavCNpGw4WfPp",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "NJWMX",
    releaseDate: "2023-12-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273782a8cae588fee29eefec8b6",
    trackName: "OMG (FRNK Remix) (Instrumental)",
    trackDuration: "03:30",
  },
  {
    id: "4MhgDz4lSj2HtlUcpe3yrd",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "NJWMX",
    releaseDate: "2023-12-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273782a8cae588fee29eefec8b6",
    trackName: "Attention (250 Remix) (Instrumental)",
    trackDuration: "03:01",
  },
  {
    id: "6tU4EeTSSawN9sbfAjWPX4",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "NJWMX",
    releaseDate: "2023-12-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273782a8cae588fee29eefec8b6",
    trackName: "Hype Boy (250 Remix) (Instrumental)",
    trackDuration: "04:11",
  },
  {
    id: "2akxtSALPUX8orriSWyDi4",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "NJWMX",
    releaseDate: "2023-12-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273782a8cae588fee29eefec8b6",
    trackName: "Cookie (FRNK Remix) (Instrumental)",
    trackDuration: "03:32",
  },
  {
    id: "1q9V1vsIEehAm2hDT6l53g",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "NJWMX",
    releaseDate: "2023-12-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273782a8cae588fee29eefec8b6",
    trackName: "Hurt (250 Remix) (Instrumental)",
    trackDuration: "03:36",
  },
  {
    id: "5ocSQW5sIUIOFojwXEz9Ki",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "Supernatural",
    releaseDate: "2024-06-21",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2737e1eeb0d7cc374a168369c80",
    trackName: "Supernatural",
    trackDuration: "03:11",
  },
  {
    id: "58Q3FZFs1YXPpliWQB5kXB",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "Supernatural",
    releaseDate: "2024-06-21",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2737e1eeb0d7cc374a168369c80",
    trackName: "Right Now",
    trackDuration: "02:40",
  },
  {
    id: "4823f9W4xmR3n1BebPyNaR",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "Supernatural",
    releaseDate: "2024-06-21",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2737e1eeb0d7cc374a168369c80",
    trackName: "Supernatural (Instrumental)",
    trackDuration: "03:11",
  },
  {
    id: "6jgUrLEivd4DaiYb1izJLF",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "Supernatural",
    releaseDate: "2024-06-21",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2737e1eeb0d7cc374a168369c80",
    trackName: "Right Now (Instrumental)",
    trackDuration: "02:40",
  },
  {
    id: "38tXZcL1gZRfbqfOG0VMTH",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "How Sweet",
    releaseDate: "2024-05-24",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273b657fbb27b17e7bd4691c2b2",
    trackName: "How Sweet",
    trackDuration: "03:39",
  },
  {
    id: "19D8LNpWwIPpi6hs9BG7dq",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "How Sweet",
    releaseDate: "2024-05-24",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273b657fbb27b17e7bd4691c2b2",
    trackName: "Bubble Gum",
    trackDuration: "03:20",
  },
  {
    id: "54tBIDmNdxGp04gPNWCCbi",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "How Sweet",
    releaseDate: "2024-05-24",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273b657fbb27b17e7bd4691c2b2",
    trackName: "How Sweet (Instrumental)",
    trackDuration: "03:39",
  },
  {
    id: "54uNtM77iZ5gawWBQGnEar",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "How Sweet",
    releaseDate: "2024-05-24",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273b657fbb27b17e7bd4691c2b2",
    trackName: "Bubble Gum (Instrumental)",
    trackDuration: "03:20",
  },
  {
    id: "11YovYUVkZdLyOFncbecWL",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "NewJeans X MY DEMON",
    releaseDate: "2023-11-24",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2732509e504c96367276ca6d1dd",
    trackName: "Our Night is more beautiful than your Day",
    trackDuration: "03:12",
  },
  {
    id: "6sJ6EoG4vyUC1tW718ww7f",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "NewJeans X MY DEMON",
    releaseDate: "2023-11-24",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2732509e504c96367276ca6d1dd",
    trackName: "Our Night is more beautiful than your Day (Inst.)",
    trackDuration: "03:12",
  },
  {
    id: "210JJAa9nJOgNa0YNrsT5g",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "GODS",
    releaseDate: "2023-10-04",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273e4179b3fb74beaf0cdfa7a13",
    trackName: "GODS",
    trackDuration: "03:40",
  },
  {
    id: "2VdSktBqFfkW7y6q5Ik4Z4",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "Armageddon - The 1st Album",
    releaseDate: "2024-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730fc598038040859794c600e2",
    trackName: "Supernova",
    trackDuration: "02:58",
  },
  {
    id: "5eWcGfUCrVFMoYskyfkEPE",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "Armageddon - The 1st Album",
    releaseDate: "2024-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730fc598038040859794c600e2",
    trackName: "Armageddon",
    trackDuration: "03:16",
  },
  {
    id: "27LqJ29VMqwKQQC2CE9FHr",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "Armageddon - The 1st Album",
    releaseDate: "2024-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730fc598038040859794c600e2",
    trackName: "Set The Tone",
    trackDuration: "03:22",
  },
  {
    id: "4AZ4Y1QAOLBwnWaX9cguoF",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "Armageddon - The 1st Album",
    releaseDate: "2024-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730fc598038040859794c600e2",
    trackName: "Mine",
    trackDuration: "03:13",
  },
  {
    id: "4iSiRU5nGU7EP5TbkEEcsj",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "Armageddon - The 1st Album",
    releaseDate: "2024-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730fc598038040859794c600e2",
    trackName: "Licorice",
    trackDuration: "02:38",
  },
  {
    id: "67yDGKXKIkyBhwbey8AmEU",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "Armageddon - The 1st Album",
    releaseDate: "2024-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730fc598038040859794c600e2",
    trackName: "BAHAMA",
    trackDuration: "03:10",
  },
  {
    id: "0u24lLekIGJ0CifIrHdD8N",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "Armageddon - The 1st Album",
    releaseDate: "2024-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730fc598038040859794c600e2",
    trackName: "Long Chat (#♥)",
    trackDuration: "03:15",
  },
  {
    id: "4oBpXs4KppprE6ql0Dmr2O",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "Armageddon - The 1st Album",
    releaseDate: "2024-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730fc598038040859794c600e2",
    trackName: "Prologue",
    trackDuration: "03:14",
  },
  {
    id: "1x1oCGsFUDViOvcISuoKW0",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "Armageddon - The 1st Album",
    releaseDate: "2024-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730fc598038040859794c600e2",
    trackName: "Live My Life",
    trackDuration: "02:39",
  },
  {
    id: "4T5AbXz68PpZyKewHO5Tqw",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "Armageddon - The 1st Album",
    releaseDate: "2024-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730fc598038040859794c600e2",
    trackName: "Melody",
    trackDuration: "03:07",
  },
  {
    id: "5XWlyfo0kZ8LF7VSyfS4Ew",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "Drama - The 4th Mini Album",
    releaseDate: "2023-11-10",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273c54e39f2ae0dd10731f93c08",
    trackName: "Drama",
    trackDuration: "03:34",
  },
  {
    id: "3EI3OLBeM89B0o0UsIGCOx",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "Drama - The 4th Mini Album",
    releaseDate: "2023-11-10",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273c54e39f2ae0dd10731f93c08",
    trackName: "Trick or Trick",
    trackDuration: "02:55",
  },
  {
    id: "2uJEnyojuGg31VVlLTQFpp",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "Drama - The 4th Mini Album",
    releaseDate: "2023-11-10",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273c54e39f2ae0dd10731f93c08",
    trackName: "Don't Blink",
    trackDuration: "02:49",
  },
  {
    id: "1mdtLny0zugh89vokWGG80",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "Drama - The 4th Mini Album",
    releaseDate: "2023-11-10",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273c54e39f2ae0dd10731f93c08",
    trackName: "Hot Air Balloon",
    trackDuration: "03:18",
  },
  {
    id: "3OQWohbPUsvbXaH1AiRazX",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "Drama - The 4th Mini Album",
    releaseDate: "2023-11-10",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273c54e39f2ae0dd10731f93c08",
    trackName: "YOLO",
    trackDuration: "03:09",
  },
  {
    id: "52qof5uEYA0TV0EpR7jNxs",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "Drama - The 4th Mini Album",
    releaseDate: "2023-11-10",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273c54e39f2ae0dd10731f93c08",
    trackName: "You",
    trackDuration: "03:23",
  },
  {
    id: "330IIz7d75eqAsKq1xhzXR",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "Drama - The 4th Mini Album",
    releaseDate: "2023-11-10",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273c54e39f2ae0dd10731f93c08",
    trackName: "Better Things",
    trackDuration: "03:23",
  },
  {
    id: "07fqC2Puj13frv9iYtlcri",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "Girls - The 2nd Mini Album",
    releaseDate: "2022-07-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ea957604eae136d0681ceaff",
    trackName: "Girls",
    trackDuration: "04:00",
  },
  {
    id: "2cGf0hmhkACTwRj58XNGlP",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "Girls - The 2nd Mini Album",
    releaseDate: "2022-07-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ea957604eae136d0681ceaff",
    trackName: "도깨비불 (Illusion)",
    trackDuration: "03:15",
  },
  {
    id: "3QXov5M0VLI3ROldfiSwj0",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "Girls - The 2nd Mini Album",
    releaseDate: "2022-07-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ea957604eae136d0681ceaff",
    trackName: "Lingo",
    trackDuration: "02:36",
  },
  {
    id: "0WiadRUdgEIjgmYFAmTttb",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "Girls - The 2nd Mini Album",
    releaseDate: "2022-07-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ea957604eae136d0681ceaff",
    trackName: "Life's Too Short",
    trackDuration: "02:58",
  },
  {
    id: "4jzrYUhlzXROpV5M944Yvu",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "Girls - The 2nd Mini Album",
    releaseDate: "2022-07-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ea957604eae136d0681ceaff",
    trackName: "ICU (쉬어가도 돼)",
    trackDuration: "03:41",
  },
  {
    id: "1AqyAbANWcx0B4f0WpYeM2",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "Girls - The 2nd Mini Album",
    releaseDate: "2022-07-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ea957604eae136d0681ceaff",
    trackName: "Life's Too Short (English Version)",
    trackDuration: "02:58",
  },
  {
    id: "7v1X2PGU3uZXu7tzFTTsSh",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "Girls - The 2nd Mini Album",
    releaseDate: "2022-07-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ea957604eae136d0681ceaff",
    trackName: "Black Mamba",
    trackDuration: "02:54",
  },
  {
    id: "4UVgc46bNblcuD6nj0RsXF",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "Girls - The 2nd Mini Album",
    releaseDate: "2022-07-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ea957604eae136d0681ceaff",
    trackName: "Forever (약속)",
    trackDuration: "04:58",
  },
  {
    id: "7aLwuGyYNWKnxOSWXQK88V",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "Girls - The 2nd Mini Album",
    releaseDate: "2022-07-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ea957604eae136d0681ceaff",
    trackName: "Dreams Come True",
    trackDuration: "03:24",
  },
  {
    id: "6uPnrBgweGOcwjFL4ItAvV",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "Whiplash - The 5th Mini Album",
    releaseDate: "2024-10-21",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273e467a8e8d7b0aa92d354aa75",
    trackName: "Whiplash",
    trackDuration: "03:03",
  },
  {
    id: "7dYEUpcXJLDcI22m0dgmnH",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "Whiplash - The 5th Mini Album",
    releaseDate: "2024-10-21",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273e467a8e8d7b0aa92d354aa75",
    trackName: "Kill It",
    trackDuration: "03:19",
  },
  {
    id: "1aRyIsgzfUdSGAGz8zgFR2",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "Whiplash - The 5th Mini Album",
    releaseDate: "2024-10-21",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273e467a8e8d7b0aa92d354aa75",
    trackName: "Flights, Not Feelings",
    trackDuration: "03:01",
  },
  {
    id: "2Kf6WQmc6TU4bYIu3Szsz2",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "Whiplash - The 5th Mini Album",
    releaseDate: "2024-10-21",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273e467a8e8d7b0aa92d354aa75",
    trackName: "Pink Hoodie",
    trackDuration: "02:26",
  },
  {
    id: "4u9cOL7R5OjAmlWkeEFXzf",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "Whiplash - The 5th Mini Album",
    releaseDate: "2024-10-21",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273e467a8e8d7b0aa92d354aa75",
    trackName: "Flowers",
    trackDuration: "03:10",
  },
  {
    id: "3Oi1pDSYLVkz3i8jOXaQdt",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "Whiplash - The 5th Mini Album",
    releaseDate: "2024-10-21",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273e467a8e8d7b0aa92d354aa75",
    trackName: "Just Another Girl",
    trackDuration: "03:04",
  },
  {
    id: "5sjnkOfTLCLNfkkchI2re2",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "SYNK : PARALLEL LINE - Special Digital Single",
    releaseDate: "2024-10-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273253096eda3b7826c11c7fab8",
    trackName: "UP - KARINA Solo",
    trackDuration: "02:46",
  },
  {
    id: "6pIuPm3u7QgUFAX1V0D9wY",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "SYNK : PARALLEL LINE - Special Digital Single",
    releaseDate: "2024-10-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273253096eda3b7826c11c7fab8",
    trackName: "Dopamine - GISELLE Solo",
    trackDuration: "03:14",
  },
  {
    id: "44qlcokPO2RjD8791ohJFR",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "SYNK : PARALLEL LINE - Special Digital Single",
    releaseDate: "2024-10-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273253096eda3b7826c11c7fab8",
    trackName: "Bored! - NINGNING Solo",
    trackDuration: "02:51",
  },
  {
    id: "2xoA126GEgFhrYzRaTH7E4",
    artistName: "aespa",
    genres: ["k-pop"],
    popularity: 79,
    followers: 8203000,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebf7a1090ad3a35a34fc0ecb57",
    albumsName: "SYNK : PARALLEL LINE - Special Digital Single",
    releaseDate: "2024-10-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273253096eda3b7826c11c7fab8",
    trackName: "Spark - WINTER Solo",
    trackDuration: "03:21",
  },
  {
    id: "45DB3yqxYGAnKN3YmLWbAX",
    artistName: "Jin",
    genres: ["k-pop"],
    popularity: 78,
    followers: 8832129,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb6d4ee2bb960bc4d9c0a4ce45",
    albumsName: "Happy - :D (Remixes)",
    releaseDate: "2024-11-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730aa3d58774384527afb5df53",
    trackName: "Running Wild",
    trackDuration: "02:31",
  },
  {
    id: "2SR0alFA2oWYXSoePGTj0V",
    artistName: "Jin",
    genres: ["k-pop"],
    popularity: 78,
    followers: 8832129,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb6d4ee2bb960bc4d9c0a4ce45",
    albumsName: "Happy - :D (Remixes)",
    releaseDate: "2024-11-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730aa3d58774384527afb5df53",
    trackName: "I’ll Be There",
    trackDuration: "03:01",
  },
  {
    id: "6L4VgCOiyt8MzYfH4llkQg",
    artistName: "Jin",
    genres: ["k-pop"],
    popularity: 78,
    followers: 8832129,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb6d4ee2bb960bc4d9c0a4ce45",
    albumsName: "Happy - :D (Remixes)",
    releaseDate: "2024-11-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730aa3d58774384527afb5df53",
    trackName: "Another Level",
    trackDuration: "02:42",
  },
  {
    id: "5jxuw4S5IDEY6CjjAHvRAt",
    artistName: "Jin",
    genres: ["k-pop"],
    popularity: 78,
    followers: 8832129,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb6d4ee2bb960bc4d9c0a4ce45",
    albumsName: "Happy - :D (Remixes)",
    releaseDate: "2024-11-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730aa3d58774384527afb5df53",
    trackName: "Falling",
    trackDuration: "02:58",
  },
  {
    id: "0gzXQHsv4zYHQ1pvlyYZZa",
    artistName: "Jin",
    genres: ["k-pop"],
    popularity: 78,
    followers: 8832129,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb6d4ee2bb960bc4d9c0a4ce45",
    albumsName: "Happy - :D (Remixes)",
    releaseDate: "2024-11-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730aa3d58774384527afb5df53",
    trackName: "Heart on the Window (with WENDY)",
    trackDuration: "02:57",
  },
  {
    id: "79ldP0lRJABss2gUdH346e",
    artistName: "Jin",
    genres: ["k-pop"],
    popularity: 78,
    followers: 8832129,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb6d4ee2bb960bc4d9c0a4ce45",
    albumsName: "Happy - :D (Remixes)",
    releaseDate: "2024-11-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730aa3d58774384527afb5df53",
    trackName: "I will come to you",
    trackDuration: "02:36",
  },
  {
    id: "2ub590isVV1Xy5u8JgBFuV",
    artistName: "Jin",
    genres: ["k-pop"],
    popularity: 78,
    followers: 8832129,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb6d4ee2bb960bc4d9c0a4ce45",
    albumsName: "Happy - :D (Remixes)",
    releaseDate: "2024-11-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730aa3d58774384527afb5df53",
    trackName: "Running Wild (Ballad Remix)",
    trackDuration: "02:23",
  },
  {
    id: "6X6b1RQFCkzhUCpHQlbOiW",
    artistName: "Jin",
    genres: ["k-pop"],
    popularity: 78,
    followers: 8832129,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb6d4ee2bb960bc4d9c0a4ce45",
    albumsName: "Happy - :D (Remixes)",
    releaseDate: "2024-11-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730aa3d58774384527afb5df53",
    trackName: "Running Wild (Holiday Remix)",
    trackDuration: "02:33",
  },
  {
    id: "3WcWE3cvBJpRoJSbrxrVkY",
    artistName: "Jin",
    genres: ["k-pop"],
    popularity: 78,
    followers: 8832129,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb6d4ee2bb960bc4d9c0a4ce45",
    albumsName: "Happy - :D (Remixes)",
    releaseDate: "2024-11-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730aa3d58774384527afb5df53",
    trackName: "Running Wild (Afropop Remix)",
    trackDuration: "02:29",
  },
  {
    id: "5xwyQy35cGlBuheV8fvutf",
    artistName: "Jin",
    genres: ["k-pop"],
    popularity: 78,
    followers: 8832129,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb6d4ee2bb960bc4d9c0a4ce45",
    albumsName: "Happy - :D (Remixes)",
    releaseDate: "2024-11-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730aa3d58774384527afb5df53",
    trackName: "Running Wild (UK Garage Remix)",
    trackDuration: "02:42",
  },
  {
    id: "50zAEIE4B1QqhPjRMK2Xmh",
    artistName: "Jin",
    genres: ["k-pop"],
    popularity: 78,
    followers: 8832129,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb6d4ee2bb960bc4d9c0a4ce45",
    albumsName: "Happy - :') (Remixes)",
    releaseDate: "2024-11-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27302dd46d1f82ce19b5927b269",
    trackName: "Running Wild",
    trackDuration: "02:31",
  },
  {
    id: "5zOv7QzCMrSkPJKQr1Tcif",
    artistName: "Jin",
    genres: ["k-pop"],
    popularity: 78,
    followers: 8832129,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb6d4ee2bb960bc4d9c0a4ce45",
    albumsName: "Happy - :') (Remixes)",
    releaseDate: "2024-11-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27302dd46d1f82ce19b5927b269",
    trackName: "I’ll Be There",
    trackDuration: "03:01",
  },
  {
    id: "1YmY0HUm05BUpcHibc1bhB",
    artistName: "Jin",
    genres: ["k-pop"],
    popularity: 78,
    followers: 8832129,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb6d4ee2bb960bc4d9c0a4ce45",
    albumsName: "Happy - :') (Remixes)",
    releaseDate: "2024-11-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27302dd46d1f82ce19b5927b269",
    trackName: "Another Level",
    trackDuration: "02:42",
  },
  {
    id: "5oSUmLelhXItguqPQ0Qn2b",
    artistName: "Jin",
    genres: ["k-pop"],
    popularity: 78,
    followers: 8832129,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb6d4ee2bb960bc4d9c0a4ce45",
    albumsName: "Happy - :') (Remixes)",
    releaseDate: "2024-11-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27302dd46d1f82ce19b5927b269",
    trackName: "Falling",
    trackDuration: "02:58",
  },
  {
    id: "4qUmNOnS81p8wrMdBHRbS3",
    artistName: "Jin",
    genres: ["k-pop"],
    popularity: 78,
    followers: 8832129,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb6d4ee2bb960bc4d9c0a4ce45",
    albumsName: "Happy - :') (Remixes)",
    releaseDate: "2024-11-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27302dd46d1f82ce19b5927b269",
    trackName: "Heart on the Window (with WENDY)",
    trackDuration: "02:57",
  },
  {
    id: "5s7flUAYsDmcUWtHsMCihv",
    artistName: "Jin",
    genres: ["k-pop"],
    popularity: 78,
    followers: 8832129,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb6d4ee2bb960bc4d9c0a4ce45",
    albumsName: "Happy - :') (Remixes)",
    releaseDate: "2024-11-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27302dd46d1f82ce19b5927b269",
    trackName: "I will come to you",
    trackDuration: "02:36",
  },
  {
    id: "6mbbLSTKMMG50xML4OzlVS",
    artistName: "Jin",
    genres: ["k-pop"],
    popularity: 78,
    followers: 8832129,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb6d4ee2bb960bc4d9c0a4ce45",
    albumsName: "Happy - :') (Remixes)",
    releaseDate: "2024-11-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27302dd46d1f82ce19b5927b269",
    trackName: "Running Wild (Extended Ver.)",
    trackDuration: "03:34",
  },
  {
    id: "2L56YCM5eA8xWsUcGgo4zV",
    artistName: "Jin",
    genres: ["k-pop"],
    popularity: 78,
    followers: 8832129,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb6d4ee2bb960bc4d9c0a4ce45",
    albumsName: "Happy - :') (Remixes)",
    releaseDate: "2024-11-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27302dd46d1f82ce19b5927b269",
    trackName: "Running Wild (Band Ver.)",
    trackDuration: "02:43",
  },
  {
    id: "4z0vfU3JiAsl99ZHL29hMm",
    artistName: "Jin",
    genres: ["k-pop"],
    popularity: 78,
    followers: 8832129,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb6d4ee2bb960bc4d9c0a4ce45",
    albumsName: "When the Stars Gossip OST Part.3",
    releaseDate: "2025-01-26",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273b850cdaf11ac8dd77591d423",
    trackName: "Close to You",
    trackDuration: "03:48",
  },
  {
    id: "6J48hy1freVjme4h7DFaDt",
    artistName: "Jin",
    genres: ["k-pop"],
    popularity: 78,
    followers: 8832129,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb6d4ee2bb960bc4d9c0a4ce45",
    albumsName: "When the Stars Gossip OST Part.3",
    releaseDate: "2025-01-26",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273b850cdaf11ac8dd77591d423",
    trackName: "Close to You (Inst.)",
    trackDuration: "03:48",
  },
  {
    id: "7HaUkQ34NYlOXFFspHeoG6",
    artistName: "Jin",
    genres: ["k-pop"],
    popularity: 78,
    followers: 8832129,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb6d4ee2bb960bc4d9c0a4ce45",
    albumsName: "Falling (feat. Taka)",
    releaseDate: "2024-11-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273d3830c84379ff6c02c4a50ba",
    trackName: "Falling (feat. Taka)",
    trackDuration: "02:58",
  },
  {
    id: "1EEvAuVSb57ryIlNKuMWyr",
    artistName: "Jin",
    genres: ["k-pop"],
    popularity: 78,
    followers: 8832129,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb6d4ee2bb960bc4d9c0a4ce45",
    albumsName: "Running Wild (Remixes)",
    releaseDate: "2024-11-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730c89d58077469386be032492",
    trackName: "Running Wild",
    trackDuration: "02:31",
  },
  {
    id: "3WBkiZRpmyDBXIHi0o4xjK",
    artistName: "Jin",
    genres: ["k-pop"],
    popularity: 78,
    followers: 8832129,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb6d4ee2bb960bc4d9c0a4ce45",
    albumsName: "Running Wild (Remixes)",
    releaseDate: "2024-11-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730c89d58077469386be032492",
    trackName: "Running Wild (Instrumental)",
    trackDuration: "02:31",
  },
  {
    id: "6dCqghpYHuD1LqBloAzgDv",
    artistName: "Jin",
    genres: ["k-pop"],
    popularity: 78,
    followers: 8832129,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb6d4ee2bb960bc4d9c0a4ce45",
    albumsName: "Running Wild (Remixes)",
    releaseDate: "2024-11-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730c89d58077469386be032492",
    trackName: "Running Wild (Extended Ver.)",
    trackDuration: "03:34",
  },
  {
    id: "6mJRx8ghgw9QwJk0v5DfVj",
    artistName: "Jin",
    genres: ["k-pop"],
    popularity: 78,
    followers: 8832129,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb6d4ee2bb960bc4d9c0a4ce45",
    albumsName: "Running Wild (Remixes)",
    releaseDate: "2024-11-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730c89d58077469386be032492",
    trackName: "Running Wild (Band Ver.)",
    trackDuration: "02:43",
  },
  {
    id: "1XZeIqnzH8LKB1SmUL7tpy",
    artistName: "Jin",
    genres: ["k-pop"],
    popularity: 78,
    followers: 8832129,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb6d4ee2bb960bc4d9c0a4ce45",
    albumsName: "Running Wild (Remixes)",
    releaseDate: "2024-11-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730c89d58077469386be032492",
    trackName: "Running Wild (Ballad Remix)",
    trackDuration: "02:23",
  },
  {
    id: "1faf3hb79uGzk5a7O5H144",
    artistName: "Jin",
    genres: ["k-pop"],
    popularity: 78,
    followers: 8832129,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb6d4ee2bb960bc4d9c0a4ce45",
    albumsName: "Running Wild (Remixes)",
    releaseDate: "2024-11-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730c89d58077469386be032492",
    trackName: "Running Wild (Holiday Remix)",
    trackDuration: "02:33",
  },
  {
    id: "7uHAhFnUOfJXlDzfyvRJQD",
    artistName: "Jin",
    genres: ["k-pop"],
    popularity: 78,
    followers: 8832129,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb6d4ee2bb960bc4d9c0a4ce45",
    albumsName: "Running Wild (Remixes)",
    releaseDate: "2024-11-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730c89d58077469386be032492",
    trackName: "Running Wild (Afropop Remix)",
    trackDuration: "02:29",
  },
  {
    id: "0K0lpwTATjvexmWWVURaZP",
    artistName: "Jin",
    genres: ["k-pop"],
    popularity: 78,
    followers: 8832129,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb6d4ee2bb960bc4d9c0a4ce45",
    albumsName: "Running Wild (Remixes)",
    releaseDate: "2024-11-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730c89d58077469386be032492",
    trackName: "Running Wild (UK Garage Remix)",
    trackDuration: "02:42",
  },
  {
    id: "0OaHZgVm77zLQNR3kwFf6n",
    artistName: "BOYNEXTDOOR",
    genres: ["k-pop"],
    popularity: 70,
    followers: 1307975,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcfdb5b7a40a359345dc49270",
    albumsName: "19.99",
    releaseDate: "2024-09-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27381909c1add057c602193daab",
    trackName: "Dangerous",
    trackDuration: "02:23",
  },
  {
    id: "1t4a4bAObtfBiiNo0a0vle",
    artistName: "BOYNEXTDOOR",
    genres: ["k-pop"],
    popularity: 70,
    followers: 1307975,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcfdb5b7a40a359345dc49270",
    albumsName: "19.99",
    releaseDate: "2024-09-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27381909c1add057c602193daab",
    trackName: "Gonna Be A Rock",
    trackDuration: "03:17",
  },
  {
    id: "52NdZoytptz6k8oMtDWtzX",
    artistName: "BOYNEXTDOOR",
    genres: ["k-pop"],
    popularity: 70,
    followers: 1307975,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcfdb5b7a40a359345dc49270",
    albumsName: "19.99",
    releaseDate: "2024-09-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27381909c1add057c602193daab",
    trackName: "SKIT",
    trackDuration: "01:06",
  },
  {
    id: "6pqyZNnLKyJKtrlf42FQoq",
    artistName: "BOYNEXTDOOR",
    genres: ["k-pop"],
    popularity: 70,
    followers: 1307975,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcfdb5b7a40a359345dc49270",
    albumsName: "19.99",
    releaseDate: "2024-09-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27381909c1add057c602193daab",
    trackName: "Nice Guy",
    trackDuration: "02:44",
  },
  {
    id: "0Pd79ZmfbrE6690cuN9fHC",
    artistName: "BOYNEXTDOOR",
    genres: ["k-pop"],
    popularity: 70,
    followers: 1307975,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcfdb5b7a40a359345dc49270",
    albumsName: "19.99",
    releaseDate: "2024-09-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27381909c1add057c602193daab",
    trackName: "20",
    trackDuration: "02:48",
  },
  {
    id: "1Oa2zQLfI44pN76mZgAoqT",
    artistName: "BOYNEXTDOOR",
    genres: ["k-pop"],
    popularity: 70,
    followers: 1307975,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcfdb5b7a40a359345dc49270",
    albumsName: "19.99",
    releaseDate: "2024-09-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27381909c1add057c602193daab",
    trackName: "Call Me",
    trackDuration: "02:58",
  },
  {
    id: "7n3rgZ7GWmoVwhDrrF41Rn",
    artistName: "BOYNEXTDOOR",
    genres: ["k-pop"],
    popularity: 70,
    followers: 1307975,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcfdb5b7a40a359345dc49270",
    albumsName: "19.99",
    releaseDate: "2024-09-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27381909c1add057c602193daab",
    trackName: "Nice Guy (English Ver.)",
    trackDuration: "02:44",
  },
  {
    id: "54wqX30KnwGZdLmi8r0Wgo",
    artistName: "BOYNEXTDOOR",
    genres: ["k-pop"],
    popularity: 70,
    followers: 1307975,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcfdb5b7a40a359345dc49270",
    albumsName: "HOW?",
    releaseDate: "2024-04-15",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273991e46e8843796184d9606d7",
    trackName: "OUR",
    trackDuration: "02:36",
  },
  {
    id: "1w1kvWFdm3u0GgkG9VSFGH",
    artistName: "BOYNEXTDOOR",
    genres: ["k-pop"],
    popularity: 70,
    followers: 1307975,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcfdb5b7a40a359345dc49270",
    albumsName: "HOW?",
    releaseDate: "2024-04-15",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273991e46e8843796184d9606d7",
    trackName: "Amnesia",
    trackDuration: "02:50",
  },
  {
    id: "7x9s9KVpMOrQ2z2fzOGo8z",
    artistName: "BOYNEXTDOOR",
    genres: ["k-pop"],
    popularity: 70,
    followers: 1307975,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcfdb5b7a40a359345dc49270",
    albumsName: "HOW?",
    releaseDate: "2024-04-15",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273991e46e8843796184d9606d7",
    trackName: "So let's go see the stars",
    trackDuration: "03:22",
  },
  {
    id: "0Tq7v8YAmwdnAYBwyR1pZ4",
    artistName: "BOYNEXTDOOR",
    genres: ["k-pop"],
    popularity: 70,
    followers: 1307975,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcfdb5b7a40a359345dc49270",
    albumsName: "HOW?",
    releaseDate: "2024-04-15",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273991e46e8843796184d9606d7",
    trackName: "Earth, Wind & Fire",
    trackDuration: "02:59",
  },
  {
    id: "7rXUWfUAaOmPNHS7cwfTL2",
    artistName: "BOYNEXTDOOR",
    genres: ["k-pop"],
    popularity: 70,
    followers: 1307975,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcfdb5b7a40a359345dc49270",
    albumsName: "HOW?",
    releaseDate: "2024-04-15",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273991e46e8843796184d9606d7",
    trackName: "l i f e i s c o o l",
    trackDuration: "03:18",
  },
  {
    id: "4gHBVNtx6Kh5F97GoIg0fq",
    artistName: "BOYNEXTDOOR",
    genres: ["k-pop"],
    popularity: 70,
    followers: 1307975,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcfdb5b7a40a359345dc49270",
    albumsName: "HOW?",
    releaseDate: "2024-04-15",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273991e46e8843796184d9606d7",
    trackName: "Dear. My Darling",
    trackDuration: "01:40",
  },
  {
    id: "7sEkQPK4bxBum9CoAp5Onl",
    artistName: "BOYNEXTDOOR",
    genres: ["k-pop"],
    popularity: 70,
    followers: 1307975,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcfdb5b7a40a359345dc49270",
    albumsName: "HOW?",
    releaseDate: "2024-04-15",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273991e46e8843796184d9606d7",
    trackName: "Earth, Wind & Fire (English Ver.)",
    trackDuration: "02:59",
  },
  {
    id: "1cgtNgk0bkBjKaHmhes7f0",
    artistName: "BOYNEXTDOOR",
    genres: ["k-pop"],
    popularity: 70,
    followers: 1307975,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcfdb5b7a40a359345dc49270",
    albumsName:
      "Never Loved This Way Before (Odd Girl Out X BOYNEXTDOOR) [Original Soundtrack]",
    releaseDate: "2025-03-14",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273d853fd935616b3f2d674caa5",
    trackName: "Never Loved This Way Before",
    trackDuration: "04:25",
  },
  {
    id: "47vaCu7VXBxOZrtt7MVlH3",
    artistName: "BOYNEXTDOOR",
    genres: ["k-pop"],
    popularity: 70,
    followers: 1307975,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcfdb5b7a40a359345dc49270",
    albumsName:
      "Never Loved This Way Before (Odd Girl Out X BOYNEXTDOOR) [Original Soundtrack]",
    releaseDate: "2025-03-14",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273d853fd935616b3f2d674caa5",
    trackName: "Never Loved This Way Before - Inst.",
    trackDuration: "04:25",
  },
  {
    id: "7DPrrI5VUfCI0TslImBQDc",
    artistName: "BOYNEXTDOOR",
    genres: ["k-pop"],
    popularity: 70,
    followers: 1307975,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcfdb5b7a40a359345dc49270",
    albumsName: "It's Beginning To Look A Lot Like Christmas",
    releaseDate: "2025-02-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733f3bc66394a60aa9d95b3f62",
    trackName: "It's Beginning To Look A Lot Like Christmas",
    trackDuration: "02:13",
  },
  {
    id: "61MgNE2WKJh27wRgw1zuFI",
    artistName: "BOYNEXTDOOR",
    genres: ["k-pop"],
    popularity: 70,
    followers: 1307975,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcfdb5b7a40a359345dc49270",
    albumsName: "IF I SAY, I LOVE YOU (Japanese Version)",
    releaseDate: "2025-01-31",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27344744239930f871bf30c1eba",
    trackName: "IF I SAY, I LOVE YOU - Japanese Version",
    trackDuration: "02:41",
  },
  {
    id: "12YODvwEH9NPutL8OhObfD",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WONDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f150d9f2e5e8148e5032fd7d",
    trackName: "Rebirth (Intro)",
    trackDuration: "02:24",
  },
  {
    id: "3vKBoDN6DGrxMRDBOe5bQa",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WONDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f150d9f2e5e8148e5032fd7d",
    trackName: "Interlude : Showtime",
    trackDuration: "01:18",
  },
  {
    id: "0KsBlpW6csX9YBVckbTDZh",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WONDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f150d9f2e5e8148e5032fd7d",
    trackName: "Smeraldo Garden Marching Band (feat. Loco)",
    trackDuration: "03:02",
  },
  {
    id: "5XvFNFNsgvmwsWk1T7BfRj",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WONDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f150d9f2e5e8148e5032fd7d",
    trackName: "Slow Dance (feat. Sofia Carson)",
    trackDuration: "03:08",
  },
  {
    id: "59ldd5koyBqo1vFp6MusW1",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WONDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f150d9f2e5e8148e5032fd7d",
    trackName: "Be Mine",
    trackDuration: "03:27",
  },
  {
    id: "5wPnPIZS8wr4lPNLz4qvHK",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WONDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f150d9f2e5e8148e5032fd7d",
    trackName: "Who",
    trackDuration: "02:50",
  },
  {
    id: "2Zyto2vRT9MEj44Y4qbzcs",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WONDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f150d9f2e5e8148e5032fd7d",
    trackName: "Closer Than This",
    trackDuration: "03:43",
  },
  {
    id: "1Px44tw80Q4rcCl8FxDGOi",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WONDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f150d9f2e5e8148e5032fd7d",
    trackName: "Who (Instrumental)",
    trackDuration: "02:50",
  },
  {
    id: "10I5rhhFoWZDIN3kEc6Dbo",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WONDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f150d9f2e5e8148e5032fd7d",
    trackName: "Who (Acoustic Remix)",
    trackDuration: "03:04",
  },
  {
    id: "1MC8JLPV4fbvVBqvGSLoDf",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WONDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f150d9f2e5e8148e5032fd7d",
    trackName: "Who (Rock Remix)",
    trackDuration: "02:51",
  },
  {
    id: "1ZtkxrnxZB6r8nIiHwqaUn",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WANDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27382601539d4a27061ad90eacb",
    trackName: "Rebirth (Intro)",
    trackDuration: "02:24",
  },
  {
    id: "12HctF6VyD118g7eXtWLBo",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WANDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27382601539d4a27061ad90eacb",
    trackName: "Interlude : Showtime",
    trackDuration: "01:18",
  },
  {
    id: "7yODD9DKQIllpZ5eioLZRY",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WANDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27382601539d4a27061ad90eacb",
    trackName: "Smeraldo Garden Marching Band (feat. Loco)",
    trackDuration: "03:02",
  },
  {
    id: "5nyhz1bxLCiBBIAIcBgiEP",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WANDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27382601539d4a27061ad90eacb",
    trackName: "Slow Dance (feat. Sofia Carson)",
    trackDuration: "03:08",
  },
  {
    id: "3VaKWbW68AyOkEl4AxhXA2",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WANDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27382601539d4a27061ad90eacb",
    trackName: "Be Mine",
    trackDuration: "03:27",
  },
  {
    id: "32lSgbCqRcIOyUSnfuUZEQ",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WANDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27382601539d4a27061ad90eacb",
    trackName: "Who",
    trackDuration: "02:50",
  },
  {
    id: "6OIVG9TFJnqOec4G5rD8pW",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WANDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27382601539d4a27061ad90eacb",
    trackName: "Closer Than This",
    trackDuration: "03:43",
  },
  {
    id: "1ySWoGgrduSzvtJ3PUzO41",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WANDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27382601539d4a27061ad90eacb",
    trackName: "Who (Shibuyakei Remix)",
    trackDuration: "02:46",
  },
  {
    id: "7KZNgri6Jxw88FAfATw6i9",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WANDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27382601539d4a27061ad90eacb",
    trackName: "Who (Funky Remix)",
    trackDuration: "03:08",
  },
  {
    id: "2isRbZIIU4PqPrECffn7QO",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE (WANDER ver.)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27382601539d4a27061ad90eacb",
    trackName: "Who (Beautiful Mind Remix)",
    trackDuration: "02:57",
  },
  {
    id: "7gMfVc4zfNIxuMyMGglOHa",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE",
    releaseDate: "2024-07-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f02c451189a709b9a952aaec",
    trackName: "Rebirth (Intro)",
    trackDuration: "02:24",
  },
  {
    id: "45zLrK0668WQ5JFMyiYmCS",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE",
    releaseDate: "2024-07-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f02c451189a709b9a952aaec",
    trackName: "Interlude : Showtime",
    trackDuration: "01:18",
  },
  {
    id: "1agDCV4zQqaFwJQNsTgmL1",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE",
    releaseDate: "2024-07-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f02c451189a709b9a952aaec",
    trackName: "Smeraldo Garden Marching Band (feat. Loco)",
    trackDuration: "03:02",
  },
  {
    id: "3d2bsbugow8JiNvuaRupFH",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE",
    releaseDate: "2024-07-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f02c451189a709b9a952aaec",
    trackName: "Slow Dance (feat. Sofia Carson)",
    trackDuration: "03:08",
  },
  {
    id: "3LWVXp636uLT356Rj08Jaz",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE",
    releaseDate: "2024-07-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f02c451189a709b9a952aaec",
    trackName: "Be Mine",
    trackDuration: "03:27",
  },
  {
    id: "7tI8dRuH2Yc6RuoTjxo4dU",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE",
    releaseDate: "2024-07-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f02c451189a709b9a952aaec",
    trackName: "Who",
    trackDuration: "02:50",
  },
  {
    id: "6qafqn8bBMy7t5c5WqpyRk",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "MUSE",
    releaseDate: "2024-07-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f02c451189a709b9a952aaec",
    trackName: "Closer Than This",
    trackDuration: "03:43",
  },
  {
    id: "4DairgmwgyfmFHm0e7kRPL",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "Be Mine (English Version)",
    releaseDate: "2024-08-02",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27319655636129722b4bd720dbc",
    trackName: "Be Mine (English Version)",
    trackDuration: "03:27",
  },
  {
    id: "1yqdD2ScjkqvaNBUzPQ4vR",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "Who (Remixes)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2737f35adfbec3bb2bc8256802b",
    trackName: "Who",
    trackDuration: "02:50",
  },
  {
    id: "6t7t37Bex3DV4ADqAwUmwa",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "Who (Remixes)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2737f35adfbec3bb2bc8256802b",
    trackName: "Who (Instrumental)",
    trackDuration: "02:50",
  },
  {
    id: "2YKecnWyzkGEDTyNaKBG2H",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "Who (Remixes)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2737f35adfbec3bb2bc8256802b",
    trackName: "Who (Acoustic Remix)",
    trackDuration: "03:04",
  },
  {
    id: "2x9lpe6UIHNqLf8fB8qpb7",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "Who (Remixes)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2737f35adfbec3bb2bc8256802b",
    trackName: "Who (Rock Remix)",
    trackDuration: "02:51",
  },
  {
    id: "1PNdJibg1adHD1pTpYBfGc",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "Who (Remixes)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2737f35adfbec3bb2bc8256802b",
    trackName: "Who (Shibuyakei Remix)",
    trackDuration: "02:46",
  },
  {
    id: "6E9BsGMop0G1jrpQNzugXv",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "Who (Remixes)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2737f35adfbec3bb2bc8256802b",
    trackName: "Who (Funky Remix)",
    trackDuration: "03:08",
  },
  {
    id: "1GDjQlek7EFZ3qTyySTSAF",
    artistName: "Jimin",
    genres: ["k-pop"],
    popularity: 84,
    followers: 9983076,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebcb08296cca5a2d197caabb79",
    albumsName: "Who (Remixes)",
    releaseDate: "2024-07-23",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2737f35adfbec3bb2bc8256802b",
    trackName: "Who (Beautiful Mind Remix)",
    trackDuration: "02:57",
  },
  {
    id: "6IST7HiO2OlytkRp866Xdd",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "Übermensch",
    releaseDate: "2025-02-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730c8549d4dad1c1e95f316736",
    trackName: "HOME SWEET HOME (feat. TAEYANG & DAESUNG)",
    trackDuration: "03:31",
  },
  {
    id: "3hRg8A9PwC5YWrgLRJ4OFf",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "Übermensch",
    releaseDate: "2025-02-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730c8549d4dad1c1e95f316736",
    trackName: "PO￦ER",
    trackDuration: "02:23",
  },
  {
    id: "0Kk5TRkYuWXY89KamtFEFw",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "Übermensch",
    releaseDate: "2025-02-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730c8549d4dad1c1e95f316736",
    trackName: "TOO BAD (feat. Anderson .Paak)",
    trackDuration: "02:33",
  },
  {
    id: "5p888hnYmPMQTMcVZXF8Dd",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "Übermensch",
    releaseDate: "2025-02-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730c8549d4dad1c1e95f316736",
    trackName: "DRAMA",
    trackDuration: "03:54",
  },
  {
    id: "1YfsKKIW19u5QMeWdiFvk1",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "Übermensch",
    releaseDate: "2025-02-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730c8549d4dad1c1e95f316736",
    trackName: "IBELONGIIU",
    trackDuration: "03:13",
  },
  {
    id: "1rHhowJ15GjsTqCGoTXm5e",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "Übermensch",
    releaseDate: "2025-02-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730c8549d4dad1c1e95f316736",
    trackName: "TAKE ME",
    trackDuration: "03:39",
  },
  {
    id: "4wq8RcVA4GdRx8w6GUrjio",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "Übermensch",
    releaseDate: "2025-02-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730c8549d4dad1c1e95f316736",
    trackName: "보나마나 (BONAMANA)",
    trackDuration: "03:15",
  },
  {
    id: "5WNRDeYpON54LEZOoiI3Xf",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "Übermensch",
    releaseDate: "2025-02-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730c8549d4dad1c1e95f316736",
    trackName: "GYRO-DROP",
    trackDuration: "02:48",
  },
  {
    id: "1SYcF2fUYDYQsISyFehQYI",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "COUP D'ETAT (Korean Version)",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738993cee2c10adefcac0a3654",
    trackName: "COUP D'ETAT",
    trackDuration: "02:58",
  },
  {
    id: "62qrReIGZC8zzdmw9DXEuS",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "COUP D'ETAT (Korean Version)",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738993cee2c10adefcac0a3654",
    trackName: "NILIRIA - Missy Elliott Version",
    trackDuration: "02:52",
  },
  {
    id: "3iBJHz5krbr4zUM40zzwcJ",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "COUP D'ETAT (Korean Version)",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738993cee2c10adefcac0a3654",
    trackName: "R.O.D.",
    trackDuration: "03:56",
  },
  {
    id: "44f1TNdoQUgf3PUYraCTsH",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "COUP D'ETAT (Korean Version)",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738993cee2c10adefcac0a3654",
    trackName: "Black (Feat. JENNIE of BLACKPINK)",
    trackDuration: "03:23",
  },
  {
    id: "4uS12OS6QeNgiCHpaqwvlR",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "COUP D'ETAT (Korean Version)",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738993cee2c10adefcac0a3654",
    trackName: "WHO YOU?",
    trackDuration: "03:21",
  },
  {
    id: "3jeGRLccqBJ0CxkUVZQKxE",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "COUP D'ETAT (Korean Version)",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738993cee2c10adefcac0a3654",
    trackName: "SHAKE THE WORLD",
    trackDuration: "02:54",
  },
  {
    id: "3N9lH3C9oykSau0Q74bVsi",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "COUP D'ETAT (Korean Version)",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738993cee2c10adefcac0a3654",
    trackName: "GO",
    trackDuration: "03:28",
  },
  {
    id: "3mb0tvqsU8IPaAYvyf55az",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "COUP D'ETAT (Korean Version)",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738993cee2c10adefcac0a3654",
    trackName: "CROOKED",
    trackDuration: "03:44",
  },
  {
    id: "5CRuf5AnlXoapQfwi1sxbS",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "COUP D'ETAT (Korean Version)",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738993cee2c10adefcac0a3654",
    trackName: "NILIRIA - G-Dragon Version",
    trackDuration: "02:52",
  },
  {
    id: "6wCNJoZaOLnFzXoNFlR65V",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "COUP D'ETAT (Korean Version)",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738993cee2c10adefcac0a3654",
    trackName: "RUNAWAY",
    trackDuration: "03:21",
  },
  {
    id: "2tNdosMthOOTnH1KYdKl16",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "COUP D'ETAT (Korean Version)",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738993cee2c10adefcac0a3654",
    trackName: "I LOVE IT",
    trackDuration: "03:14",
  },
  {
    id: "7nySA2CVivNXZvjwJLe9dG",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "COUP D'ETAT (Korean Version)",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738993cee2c10adefcac0a3654",
    trackName: "YOU DO (Outro)",
    trackDuration: "02:37",
  },
  {
    id: "3q0evJwZohI2FfXkfC5tSR",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "COUP D'ETAT",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733dbdbd0023f1e1c08cd5a6c9",
    trackName: "COUP D'ETAT",
    trackDuration: "02:58",
  },
  {
    id: "1fZGJrxPq82zcHVoYMntZt",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "COUP D'ETAT",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733dbdbd0023f1e1c08cd5a6c9",
    trackName: "NILIRIA - Missy Elliott Version",
    trackDuration: "02:52",
  },
  {
    id: "1TmvMsKakEUCtLgkGYEZp4",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "COUP D'ETAT",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733dbdbd0023f1e1c08cd5a6c9",
    trackName: "R.O.D.",
    trackDuration: "03:56",
  },
  {
    id: "7BYGfn9F73atTWMdAHVdPk",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "COUP D'ETAT",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733dbdbd0023f1e1c08cd5a6c9",
    trackName: "BLACK",
    trackDuration: "03:23",
  },
  {
    id: "7iT56ss42YdtYnNQEnxp9Z",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "COUP D'ETAT",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733dbdbd0023f1e1c08cd5a6c9",
    trackName: "WHO YOU?",
    trackDuration: "03:21",
  },
  {
    id: "0yQVxHQ8MPI7jxkewravSD",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "COUP D'ETAT",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733dbdbd0023f1e1c08cd5a6c9",
    trackName: "SHAKE THE WORLD",
    trackDuration: "02:54",
  },
  {
    id: "7gPF3Mu0DVWj75SXdZaYCY",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "COUP D'ETAT",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733dbdbd0023f1e1c08cd5a6c9",
    trackName: "GO",
    trackDuration: "03:28",
  },
  {
    id: "4EwNWRBWdZ6bgvxRHlZ8OO",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "COUP D'ETAT",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733dbdbd0023f1e1c08cd5a6c9",
    trackName: "CROOKED",
    trackDuration: "03:44",
  },
  {
    id: "3lLFAlgTMNJdXEl9bhkowL",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "COUP D'ETAT",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733dbdbd0023f1e1c08cd5a6c9",
    trackName: "NILIRIA - G-Dragon Version",
    trackDuration: "02:52",
  },
  {
    id: "4yUZkcPv80Wi4TYgpJaZ9e",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "COUP D'ETAT",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733dbdbd0023f1e1c08cd5a6c9",
    trackName: "RUNAWAY",
    trackDuration: "03:21",
  },
  {
    id: "1K1DpAZoH5jbpvxcAY07Sy",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "COUP D'ETAT",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733dbdbd0023f1e1c08cd5a6c9",
    trackName: "I LOVE IT",
    trackDuration: "03:14",
  },
  {
    id: "2346AzTq5Qtru2VJv1Wreq",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "COUP D'ETAT",
    releaseDate: "2013-09-05",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733dbdbd0023f1e1c08cd5a6c9",
    trackName: "YOU DO (Outro)",
    trackDuration: "02:37",
  },
  {
    id: "5KIPe6uCM6rosCxeGcfPTA",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "2013 G-DRAGON WORLD TOUR 'ONE OF A KIND in SEOUL'",
    releaseDate: "2013-09-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733b3dd1119701d44552749dae",
    trackName: "GO - Live",
    trackDuration: "04:15",
  },
  {
    id: "2fbvGELVvBGeCt5PGEvxNf",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "2013 G-DRAGON WORLD TOUR 'ONE OF A KIND in SEOUL'",
    releaseDate: "2013-09-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733b3dd1119701d44552749dae",
    trackName: "Heartbreaker - Live",
    trackDuration: "03:20",
  },
  {
    id: "52fUpY23U2AsSdVCOcfK5v",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "2013 G-DRAGON WORLD TOUR 'ONE OF A KIND in SEOUL'",
    releaseDate: "2013-09-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733b3dd1119701d44552749dae",
    trackName: "One of a Kind - Live",
    trackDuration: "03:28",
  },
  {
    id: "4CxEcSx0FIYmzwDGDbUHoO",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "2013 G-DRAGON WORLD TOUR 'ONE OF A KIND in SEOUL'",
    releaseDate: "2013-09-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733b3dd1119701d44552749dae",
    trackName: "Butterfly - Live",
    trackDuration: "04:00",
  },
  {
    id: "6gSO9nwQqrgfMBXEmWCyQL",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "2013 G-DRAGON WORLD TOUR 'ONE OF A KIND in SEOUL'",
    releaseDate: "2013-09-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733b3dd1119701d44552749dae",
    trackName: "Missing You - Live",
    trackDuration: "03:46",
  },
  {
    id: "62QLmXhOjh4iWC1CKy90xK",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "2013 G-DRAGON WORLD TOUR 'ONE OF A KIND in SEOUL'",
    releaseDate: "2013-09-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733b3dd1119701d44552749dae",
    trackName: "That XX - Live",
    trackDuration: "03:44",
  },
  {
    id: "6pxrme6UtEm7KaFI1RMdQl",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "2013 G-DRAGON WORLD TOUR 'ONE OF A KIND in SEOUL'",
    releaseDate: "2013-09-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733b3dd1119701d44552749dae",
    trackName: "Without You - Live",
    trackDuration: "04:11",
  },
  {
    id: "7GVT1u4kAKlIAkVkPaSZ9p",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "2013 G-DRAGON WORLD TOUR 'ONE OF A KIND in SEOUL'",
    releaseDate: "2013-09-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733b3dd1119701d44552749dae",
    trackName: "Today - Live",
    trackDuration: "04:51",
  },
  {
    id: "7nsdz4KlIj91cwCJ9m33Fx",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "2013 G-DRAGON WORLD TOUR 'ONE OF A KIND in SEOUL'",
    releaseDate: "2013-09-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733b3dd1119701d44552749dae",
    trackName: "A Boy - Live",
    trackDuration: "03:52",
  },
  {
    id: "1iNWC4Bu09R0o9DJXlKJGF",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "2013 G-DRAGON WORLD TOUR 'ONE OF A KIND in SEOUL'",
    releaseDate: "2013-09-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733b3dd1119701d44552749dae",
    trackName: "This Love - Live",
    trackDuration: "03:12",
  },
  {
    id: "0fAeXI8WxncT8IkMaNI75c",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "2013 G-DRAGON WORLD TOUR 'ONE OF A KIND in SEOUL'",
    releaseDate: "2013-09-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733b3dd1119701d44552749dae",
    trackName: "1 Year - Live",
    trackDuration: "04:50",
  },
  {
    id: "1TkjST5uC2Kx4A6Ktg7RXV",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "2013 G-DRAGON WORLD TOUR 'ONE OF A KIND in SEOUL'",
    releaseDate: "2013-09-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733b3dd1119701d44552749dae",
    trackName: "Obsession - Live",
    trackDuration: "05:25",
  },
  {
    id: "6E9qJkWX0Kae59pZelC02V",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "2013 G-DRAGON WORLD TOUR 'ONE OF A KIND in SEOUL'",
    releaseDate: "2013-09-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733b3dd1119701d44552749dae",
    trackName: "She's Gone - Live",
    trackDuration: "04:42",
  },
  {
    id: "2J7RfDZhlJo4PPcF6S3SuO",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "2013 G-DRAGON WORLD TOUR 'ONE OF A KIND in SEOUL'",
    releaseDate: "2013-09-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733b3dd1119701d44552749dae",
    trackName: "Crayon + Fantastic Baby - Live",
    trackDuration: "06:14",
  },
  {
    id: "0jzNkPeK3W1g7G1MoqIfeZ",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "Heartbreaker",
    trackDuration: "05:04",
  },
  {
    id: "4eAbsf15Xi5ItqJiTOVHKQ",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "This Love",
    trackDuration: "03:44",
  },
  {
    id: "3ar6JH26PgvWitEsBx2H4I",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "Hello (Feat. DARA)",
    trackDuration: "03:46",
  },
  {
    id: "19o6PAA7YhNuKlJ6McmvP6",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "Gossip Man (Feat. Kim Gun Mo)",
    trackDuration: "03:58",
  },
  {
    id: "02b9u4HtbgWDEDWmmkv061",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "Korean Dream + Storm + Hip Hop Gentlemen + G-DRAGON",
    trackDuration: "04:15",
  },
  {
    id: "1LERA11k6mBQVtPON9xrxX",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "A Boy",
    trackDuration: "03:16",
  },
  {
    id: "7eUU0sWJq3k0GPca9Ak8cP",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "The Leaders (Feat. Teddy, CL)",
    trackDuration: "04:44",
  },
  {
    id: "7p6ZmgzWeZPIqoqMr1GgEQ",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "Breathe",
    trackDuration: "03:54",
  },
  {
    id: "0cwyRZpI8CmHF3Inx78Hgo",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "Butterfly (Feat. Jin Jung)",
    trackDuration: "03:41",
  },
  {
    id: "5QIp9cwiXJdCI8Bz2k8i8c",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "But I Love U",
    trackDuration: "04:55",
  },
  {
    id: "4zAGN8kU33hfTrhQRHhYdU",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "She's Gone (Feat. KUSH)",
    trackDuration: "04:50",
  },
  {
    id: "1JaGOGGmxiMUlQ2SGwheLk",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "Only Look At Me",
    trackDuration: "04:01",
  },
  {
    id: "3lShYM0Ts3HfEDFpfkGO5z",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "Korean Dream (Feat. TAEYANG)",
    trackDuration: "03:33",
  },
  {
    id: "4McJBwPCVaey67P7Vva81s",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "1 Year",
    trackDuration: "05:29",
  },
  {
    id: "3bNTPfEavB3i1RD4g8AaDn",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "Lies",
    trackDuration: "05:59",
  },
  {
    id: "0bEca0Fd6dmW9PmEDGeEi7",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "Heartbreaker (Encore)",
    trackDuration: "04:51",
  },
  {
    id: "5HH0VAoIyxEL5X4ZES6TEx",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "Heartbreaker (Feat. Flo Rida)",
    trackDuration: "03:24",
  },
  {
    id: "163261XJJ4vA69ZXKW6WeP",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "This love (G.H remix)",
    trackDuration: "03:19",
  },
  {
    id: "6pcsEv1oLDQa3SggnaASsg",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "A Boy (CHOICE 37 Remix)",
    trackDuration: "03:24",
  },
  {
    id: "0z3tku2tK4E9hAj7PmLRzd",
    artistName: "G-DRAGON",
    genres: ["k-pop", "k-rap"],
    popularity: 76,
    followers: 3397435,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb783a6a578e8eb992bfd74765",
    albumsName: "Shine A Light",
    releaseDate: "2010-03-30",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2735bc7ee0b1136b3265704f138",
    trackName: "Breathe (hitchhiker Remix)",
    trackDuration: "03:38",
  },
  {
    id: "0BA3uoKlu9CsHgXIeAiXmJ",
    artistName: "PLAVE",
    genres: ["k-pop"],
    popularity: 66,
    followers: 282798,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba3fb52387f636edea69f599c",
    albumsName: "Caligo Pt.1",
    releaseDate: "2025-02-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ca59009b95be7b850357de10",
    trackName: "Chroma Drift",
    trackDuration: "03:30",
  },
  {
    id: "2sDcIrosoXqiGv1D5OQUvF",
    artistName: "PLAVE",
    genres: ["k-pop"],
    popularity: 66,
    followers: 282798,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba3fb52387f636edea69f599c",
    albumsName: "Caligo Pt.1",
    releaseDate: "2025-02-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ca59009b95be7b850357de10",
    trackName: "Dash",
    trackDuration: "02:54",
  },
  {
    id: "6JbyOUBLnkMadKcPQoQeTR",
    artistName: "PLAVE",
    genres: ["k-pop"],
    popularity: 66,
    followers: 282798,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba3fb52387f636edea69f599c",
    albumsName: "Caligo Pt.1",
    releaseDate: "2025-02-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ca59009b95be7b850357de10",
    trackName: "RIZZ",
    trackDuration: "02:44",
  },
  {
    id: "3ICrCBhFiLaX0qP7KErHLe",
    artistName: "PLAVE",
    genres: ["k-pop"],
    popularity: 66,
    followers: 282798,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba3fb52387f636edea69f599c",
    albumsName: "Caligo Pt.1",
    releaseDate: "2025-02-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ca59009b95be7b850357de10",
    trackName: "Island",
    trackDuration: "04:16",
  },
  {
    id: "4gQJFhPYEVLuxyriyUubzD",
    artistName: "PLAVE",
    genres: ["k-pop"],
    popularity: 66,
    followers: 282798,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba3fb52387f636edea69f599c",
    albumsName: "Caligo Pt.1",
    releaseDate: "2025-02-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ca59009b95be7b850357de10",
    trackName: "12:32 (A to T)",
    trackDuration: "03:13",
  },
  {
    id: "1riEr6o3obQxrQRFmD9Sed",
    artistName: "PLAVE",
    genres: ["k-pop"],
    popularity: 66,
    followers: 282798,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba3fb52387f636edea69f599c",
    albumsName: "The Fiery Priest 2 (Original Soundtrack) Part.2",
    releaseDate: "2024-11-16",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27342f928ecd788665e0941e7da",
    trackName: "We don't stop",
    trackDuration: "03:22",
  },
  {
    id: "4jdlmdxikDrQc4YNhkRccv",
    artistName: "PLAVE",
    genres: ["k-pop"],
    popularity: 66,
    followers: 282798,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba3fb52387f636edea69f599c",
    albumsName: "The Fiery Priest 2 (Original Soundtrack) Part.2",
    releaseDate: "2024-11-16",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27342f928ecd788665e0941e7da",
    trackName: "We don't stop - Inst.",
    trackDuration: "03:12",
  },
  {
    id: "0CN7xUFQbPRzffogC4FgBR",
    artistName: "PLAVE",
    genres: ["k-pop"],
    popularity: 66,
    followers: 282798,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba3fb52387f636edea69f599c",
    albumsName: "Dear Hyeri, Pt. 4 (Original Soundtrack)",
    releaseDate: "2024-10-13",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273a34b2e1a0bddae322a8219da",
    trackName: "What If",
    trackDuration: "03:51",
  },
  {
    id: "3KSkAziu70R5dvs0gmaNLv",
    artistName: "PLAVE",
    genres: ["k-pop"],
    popularity: 66,
    followers: 282798,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba3fb52387f636edea69f599c",
    albumsName: "Dear Hyeri, Pt. 4 (Original Soundtrack)",
    releaseDate: "2024-10-13",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273a34b2e1a0bddae322a8219da",
    trackName: "What If - Instrumental",
    trackDuration: "03:51",
  },
  {
    id: "34DtDWmIUacoop6Md298vE",
    artistName: "PLAVE",
    genres: ["k-pop"],
    popularity: 66,
    followers: 282798,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba3fb52387f636edea69f599c",
    albumsName: "Pump Up The Volume!",
    releaseDate: "2024-08-20",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730521b4efcb4432ca54cf2baa",
    trackName: "Pump Up The Volume!",
    trackDuration: "02:59",
  },
  {
    id: "1NubJcJa12xLssOkQfWZDZ",
    artistName: "PLAVE",
    genres: ["k-pop"],
    popularity: 66,
    followers: 282798,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba3fb52387f636edea69f599c",
    albumsName: "ASTERUM : 134-1",
    releaseDate: "2024-02-26",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fcdc5e626e66249ead948655",
    trackName: "Watch Me Woo!",
    trackDuration: "02:15",
  },
  {
    id: "1T6xi2QrnmwaebXGvWAjLg",
    artistName: "PLAVE",
    genres: ["k-pop"],
    popularity: 66,
    followers: 282798,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba3fb52387f636edea69f599c",
    albumsName: "ASTERUM : 134-1",
    releaseDate: "2024-02-26",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fcdc5e626e66249ead948655",
    trackName: "WAY 4 LUV",
    trackDuration: "03:39",
  },
  {
    id: "4mMtn8zhy4IaOwzNCgSbCT",
    artistName: "PLAVE",
    genres: ["k-pop"],
    popularity: 66,
    followers: 282798,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba3fb52387f636edea69f599c",
    albumsName: "ASTERUM : 134-1",
    releaseDate: "2024-02-26",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fcdc5e626e66249ead948655",
    trackName: "Virtual Idol",
    trackDuration: "02:29",
  },
  {
    id: "1UyrFk2u0Asqmys76trMLi",
    artistName: "PLAVE",
    genres: ["k-pop"],
    popularity: 66,
    followers: 282798,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba3fb52387f636edea69f599c",
    albumsName: "ASTERUM : 134-1",
    releaseDate: "2024-02-26",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fcdc5e626e66249ead948655",
    trackName: "From",
    trackDuration: "03:28",
  },
  {
    id: "2ODZujtUNxCQDfKCxCeRxZ",
    artistName: "PLAVE",
    genres: ["k-pop"],
    popularity: 66,
    followers: 282798,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba3fb52387f636edea69f599c",
    albumsName: "ASTERUM : 134-1",
    releaseDate: "2024-02-26",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fcdc5e626e66249ead948655",
    trackName: "Our Movie",
    trackDuration: "02:41",
  },
  {
    id: "30FH8tNdUgHqZbB6ENgOwY",
    artistName: "PLAVE",
    genres: ["k-pop"],
    popularity: 66,
    followers: 282798,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba3fb52387f636edea69f599c",
    albumsName: "ASTERUM : 134-1",
    releaseDate: "2024-02-26",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fcdc5e626e66249ead948655",
    trackName: "Merry PLLIstmas",
    trackDuration: "03:59",
  },
  {
    id: "6xGr4tVzpTX99p9Cf0hRRL",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "GOLDEN",
    releaseDate: "2023-11-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273741fd4807f442af3f7359316",
    trackName: "3D (feat. Jack Harlow)",
    trackDuration: "03:21",
  },
  {
    id: "06Qo2fYR2KS1F7bL338iVT",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "GOLDEN",
    releaseDate: "2023-11-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273741fd4807f442af3f7359316",
    trackName: "Closer to You (feat. Major Lazer)",
    trackDuration: "02:50",
  },
  {
    id: "2HRgqmZQC0MC7GeNuDIXHN",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "GOLDEN",
    releaseDate: "2023-11-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273741fd4807f442af3f7359316",
    trackName: "Seven (feat. Latto) (Explicit Ver.)",
    trackDuration: "03:03",
  },
  {
    id: "2KslE17cAJNHTsI2MI0jb2",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "GOLDEN",
    releaseDate: "2023-11-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273741fd4807f442af3f7359316",
    trackName: "Standing Next to You",
    trackDuration: "03:26",
  },
  {
    id: "2gkVEnpahpE3bQuvGuCpAV",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "GOLDEN",
    releaseDate: "2023-11-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273741fd4807f442af3f7359316",
    trackName: "Yes or No",
    trackDuration: "02:27",
  },
  {
    id: "0k0GtcnyQLMiXrdEDbLXmJ",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "GOLDEN",
    releaseDate: "2023-11-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273741fd4807f442af3f7359316",
    trackName: "Please Don't Change (feat. DJ Snake)",
    trackDuration: "02:26",
  },
  {
    id: "5ONOlTiqymhzwcFjqcIT6E",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "GOLDEN",
    releaseDate: "2023-11-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273741fd4807f442af3f7359316",
    trackName: "Hate You",
    trackDuration: "02:34",
  },
  {
    id: "5KfJvZ0PZzRdwFRaTUDAA7",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "GOLDEN",
    releaseDate: "2023-11-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273741fd4807f442af3f7359316",
    trackName: "Somebody",
    trackDuration: "02:48",
  },
  {
    id: "3bNNvJA7hsGw0wSpGkfOBm",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "GOLDEN",
    releaseDate: "2023-11-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273741fd4807f442af3f7359316",
    trackName: "Too Sad to Dance",
    trackDuration: "02:55",
  },
  {
    id: "7AbqgE05nFl9qY4FRUiq2p",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "GOLDEN",
    releaseDate: "2023-11-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273741fd4807f442af3f7359316",
    trackName: "Shot Glass of Tears",
    trackDuration: "02:47",
  },
  {
    id: "7Hcj0duTWiCSYDtJaztNIt",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "GOLDEN",
    releaseDate: "2023-11-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273741fd4807f442af3f7359316",
    trackName: "Seven (feat. Latto) (Clean Ver.)",
    trackDuration: "03:03",
  },
  {
    id: "01qFKNWq73UfEslI0GvumE",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "3D : The Remixes",
    releaseDate: "2023-10-02",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27399583bb32b47e87d55c6064b",
    trackName: "3D (feat. Jack Harlow)",
    trackDuration: "03:21",
  },
  {
    id: "6Xa9B3iE7bo3GkyUOVAhB9",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "3D : The Remixes",
    releaseDate: "2023-10-02",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27399583bb32b47e87d55c6064b",
    trackName: "3D (feat. Jack Harlow) (Instrumental)",
    trackDuration: "03:19",
  },
  {
    id: "5BKiMkWucQVb7wrFi29VtX",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "3D : The Remixes",
    releaseDate: "2023-10-02",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27399583bb32b47e87d55c6064b",
    trackName: "3D (Alternate Ver.)",
    trackDuration: "02:42",
  },
  {
    id: "7fQKDpB4i0hiQacjVCXVU2",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "3D : The Remixes",
    releaseDate: "2023-10-02",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27399583bb32b47e87d55c6064b",
    trackName: "3D (feat. Jack Harlow) (A. G. Cook Remix)",
    trackDuration: "03:08",
  },
  {
    id: "0TaaG2kxjzSjVbmmiiSZEa",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "3D : The Remixes",
    releaseDate: "2023-10-02",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27399583bb32b47e87d55c6064b",
    trackName: "3D (feat. Jack Harlow) (Clean Ver.)",
    trackDuration: "03:22",
  },
  {
    id: "1ewYtP6BZlak8qokzZe4Bx",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "3D : The Remixes",
    releaseDate: "2023-10-02",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27399583bb32b47e87d55c6064b",
    trackName: "3D (feat. Jack Harlow) (Sped Up)",
    trackDuration: "02:48",
  },
  {
    id: "0dzT72K2RElXDMuMOyuKOI",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "3D : The Remixes",
    releaseDate: "2023-10-02",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27399583bb32b47e87d55c6064b",
    trackName: "3D (feat. Jack Harlow) (Slowed Down)",
    trackDuration: "03:56",
  },
  {
    id: "2nRMW95dnOILirpjbksLTs",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "Never Let Go",
    releaseDate: "2024-06-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273083f5a45d93b57cb65a97b83",
    trackName: "Never Let Go",
    trackDuration: "02:46",
  },
  {
    id: "0VPFT123HKoQ2J6ipeDcI1",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "Standing Next to You (USHER Remix)",
    releaseDate: "2023-12-01",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273c9912de0a8a9a44b450318e4",
    trackName: "Standing Next to You (USHER Remix)",
    trackDuration: "03:34",
  },
  {
    id: "2mHw0KoEyDw8Yaw3yPoke6",
    artistName: "Jung Kook",
    genres: ["k-pop"],
    popularity: 82,
    followers: 17281324,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960",
    albumsName: "3D (Justin Timberlake Remix)",
    releaseDate: "2023-11-24",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27322e565596578ef0adbf5eaf1",
    trackName: "3D (Justin Timberlake Remix)",
    trackDuration: "02:40",
  },
  {
    id: "42e6dogVzAPSudzaBqRUIV",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName:
      "HANDS UP - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "04:01",
  },
  {
    id: "4DOvi3I7GtgVErqXnjAs3o",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName: "SOBER - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "04:19",
  },
  {
    id: "3RVgqjACPWt7LC7TgcCD7w",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName:
      "WE LIKE 2 PARTY - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "03:42",
  },
  {
    id: "5Ym7yyiFy5Z2GW8zYH45ms",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName:
      "FXXK IT - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "02:36",
  },
  {
    id: "7kBSj85ufJ1VpvSqLAr75X",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName: "LOSER - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "04:03",
  },
  {
    id: "6HldMPK1mbjgI0Y5t370j9",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName:
      "BAD BOY - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "04:14",
  },
  {
    id: "3emIcxw9NWVwKEdaXvXxF7",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName:
      "WAKE ME UP - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "03:23",
  },
  {
    id: "3pP5rsaeJMIovsClmJmh3i",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName:
      "DARLING - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "04:10",
  },
  {
    id: "2GrmNtTCulwxR9lk8NQBAD",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName:
      "SUPER STAR - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "04:04",
  },
  {
    id: "2C0LOJPcnVcSKCX3N0DqEn",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName:
      "Untitled, 2014 - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "03:44",
  },
  {
    id: "6Q00t2IdzTzcWgaevt2AQ7",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName: "D-Day - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "03:57",
  },
  {
    id: "5nCje7k5ZjgJ2XISx7cUZd",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName:
      "A・ZE・CHO ! - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "04:56",
  },
  {
    id: "7uJ9p6GuOS5F5GnY94Kq5v",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName:
      "COME TO MY - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "02:17",
  },
  {
    id: "2Gu2yJtqxaJsq0fEozyChQ",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName: "I KNOW - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "02:36",
  },
  {
    id: "2QtzsCMEuxZ5TAfOGVJpLY",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName:
      "Look at me, Gwisun - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "03:47",
  },
  {
    id: "5wmUNZ7P5GUjZ0JBWKBDZs",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName:
      "GOOD BOY - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "04:08",
  },
  {
    id: "7ijpfBQv7sW0EHwbzRgI1a",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName: "IF YOU - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "04:28",
  },
  {
    id: "5LkYB8BCNIDf6ZWwrRNacI",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName:
      "HaruHaru - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "03:44",
  },
  {
    id: "31jPf3RQi35D9NaOIgwX4P",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName:
      "FANTASTIC BABY - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "04:11",
  },
  {
    id: "55iMEsMm9td9daH0mHPoBG",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    releaseDate: "2018-08-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273baa2444671de8ec216082838",
    trackName:
      "BANG BANG BANG - BIGBANG JAPAN DOME TOUR 2017 -LAST DANCE- : THE FINAL",
    trackDuration: "03:46",
  },
  {
    id: "45mMN0OSFF5Nv7hBmeOUQx",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "HEAVEN - Live",
    trackDuration: "04:26",
  },
  {
    id: "1zq8heBhjwmCnqx4RSZhb7",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "WE LIKE 2 PARTY - Live",
    trackDuration: "03:36",
  },
  {
    id: "0tYT6RdFKcSgBiaMfs3mdR",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "HANDS UP - Live",
    trackDuration: "03:55",
  },
  {
    id: "6w17ZLpTonbMfRRDdrofVj",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "BAD BOY - Live",
    trackDuration: "04:13",
  },
  {
    id: "1QdpaBkjNApYmwYlDuWHik",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "LOSER - Live",
    trackDuration: "03:59",
  },
  {
    id: "6iCrpFpnNJO7FY8Iu7z7Hf",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "FXXK IT - Live",
    trackDuration: "07:33",
  },
  {
    id: "4uov3g2rlZdNY9GORNsh4b",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "LET’S TALK ABOUT LOVE - Live",
    trackDuration: "01:27",
  },
  {
    id: "4pJRJMMTymF7IeRYHrHThC",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "STRONG BABY - Live",
    trackDuration: "02:21",
  },
  {
    id: "225g4x1sW9Zm3lULmJrVKa",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "WINGS - Live",
    trackDuration: "02:46",
  },
  {
    id: "4SHIhIglN6lQzBWzjfPRE8",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "LOOK AT ME GWISOON - Live",
    trackDuration: "04:20",
  },
  {
    id: "6kv5MN91E2yByJ1XWD76vQ",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "HEARTBREAKER - Live",
    trackDuration: "02:28",
  },
  {
    id: "5OmzFuUbe7djQLT2uG6I3r",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "CRAYON - Live",
    trackDuration: "03:20",
  },
  {
    id: "1YD8M14uJW3DXrCs4FeO8o",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "HIGH HIGH - Live",
    trackDuration: "03:15",
  },
  {
    id: "4Kz8OC4sm2uCaCrEp9mLZ1",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "GOOD BOY - Live",
    trackDuration: "04:10",
  },
  {
    id: "0fIiCm9Pf19dcIrmZ7stf8",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "PRETENDED - Live",
    trackDuration: "02:44",
  },
  {
    id: "10CDw5PAK3WmqkNQYJ1kuN",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "DOOM DADA - Live",
    trackDuration: "05:24",
  },
  {
    id: "6nrgWCby7MpEpbcRJxRRZ9",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "EYES, NOSE, LIPS - Live",
    trackDuration: "04:45",
  },
  {
    id: "00zcv0aqdWQep2DrVWNPjO",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "ONLY LOOK AT ME - Live",
    trackDuration: "02:38",
  },
  {
    id: "7zqLN6qt1ZNlEFLgB3LBWx",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "RINGA LINGA - Live",
    trackDuration: "03:46",
  },
  {
    id: "00hHDWHG3MiE2OOUmve79F",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 FINAL IN SEOUL",
    releaseDate: "2017-05-25",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273cdeac10253b85cda391ad9b6",
    trackName: "IF YOU - Live",
    trackDuration: "04:50",
  },
  {
    id: "33e3jzlgpXBQgTQ6radEv8",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "HEAVEN - Live",
    trackDuration: "04:23",
  },
  {
    id: "4h0kPyfScsOoKlNRJ1l5Ty",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "WE LIKE 2 PARTY - Live",
    trackDuration: "03:35",
  },
  {
    id: "0wjAWaUxM3moRA6jvtsxPJ",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "HANDS UP - Live",
    trackDuration: "04:00",
  },
  {
    id: "27PYGYRXxejUF4cYulQmtS",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "BAD BOY - Live",
    trackDuration: "04:08",
  },
  {
    id: "3r6dAVVWsmqCDFvgSBiHEz",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "LOSER - Live",
    trackDuration: "03:41",
  },
  {
    id: "0qdJctmCqOqUL3kanmkmRi",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "FEELING - Live",
    trackDuration: "03:41",
  },
  {
    id: "3NggKc4eylweTkujZEgHJ8",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "LET'S TALK ABOUT LOVE - Live",
    trackDuration: "01:23",
  },
  {
    id: "69uYZk1xUWUGAGaTG3dfNm",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "STRONG BABY - Live",
    trackDuration: "02:25",
  },
  {
    id: "3LhyrhaUISsp2adwBdRLVX",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "WINGS - Live",
    trackDuration: "02:45",
  },
  {
    id: "70ZcnxosNyBkxqNnaVdVcB",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "LOOK AT ME GWISOON - Live",
    trackDuration: "04:21",
  },
  {
    id: "6asqAqKRwHKQh2ANgDiJXe",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "CROOKED - Live",
    trackDuration: "07:07",
  },
  {
    id: "3PRaRBkHgzmxer5HIh0vGF",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "HEARTBREAKER - Live",
    trackDuration: "02:28",
  },
  {
    id: "6BTfPlTa9AvOM3H3szjaRL",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "CRAYON - Live",
    trackDuration: "03:25",
  },
  {
    id: "0dflZ9lezOwO0AZVgYQSQL",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "HIGH HIGH - Live",
    trackDuration: "03:23",
  },
  {
    id: "18oGfIsfOaNHMrq8dyyk3e",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "GOOD BOY - Live",
    trackDuration: "04:11",
  },
  {
    id: "31eR03TwO2IRMYsCgKy6C3",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "PRETENDED - Live",
    trackDuration: "02:46",
  },
  {
    id: "1euM6MeQnbHHz1IgMyixo5",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "DOOM DADA - Live",
    trackDuration: "04:07",
  },
  {
    id: "7w45jf4z9fNIJYE59BtjiC",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "EYES, NOSE, LIPS - Live",
    trackDuration: "04:52",
  },
  {
    id: "5npsyXX3PBPXv48zF8o6bh",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "ONLY LOOK AT ME - Live",
    trackDuration: "02:36",
  },
  {
    id: "0Vhmd3nrLXS9cVMiFaXg1T",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "BIGBANG10 THE CONCERT 0.TO.10 IN SEOUL",
    releaseDate: "2017-02-08",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738043ee2ff932efccb78d7b40",
    trackName: "RINGA LINGA - Live",
    trackDuration: "02:38",
  },
  {
    id: "3lYvepDz6yYj29z7e4r5z0",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "MADE",
    releaseDate: "2016-12-13",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fd0d9a33127c1d3f58ba3504",
    trackName: "FXXK IT",
    trackDuration: "03:51",
  },
  {
    id: "7ijWcf4FsoxoyPK4B9WGp6",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "MADE",
    releaseDate: "2016-12-13",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fd0d9a33127c1d3f58ba3504",
    trackName: "LAST DANCE",
    trackDuration: "04:39",
  },
  {
    id: "0FRVxxD5ZaLVnlwI9nxkqP",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "MADE",
    releaseDate: "2016-12-13",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fd0d9a33127c1d3f58ba3504",
    trackName: "GIRLFRIEND",
    trackDuration: "03:48",
  },
  {
    id: "6UgkB0xM45TR3Zjqm3GQ6T",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "MADE",
    releaseDate: "2016-12-13",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fd0d9a33127c1d3f58ba3504",
    trackName: "LET'S NOT FALL IN LOVE",
    trackDuration: "03:31",
  },
  {
    id: "2vzn8usBcuNL93DnTjEK0z",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "MADE",
    releaseDate: "2016-12-13",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fd0d9a33127c1d3f58ba3504",
    trackName: "LOSER",
    trackDuration: "03:39",
  },
  {
    id: "3miMeSGd7rzJEtuhQnzm0f",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "MADE",
    releaseDate: "2016-12-13",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fd0d9a33127c1d3f58ba3504",
    trackName: "BAE BAE",
    trackDuration: "02:49",
  },
  {
    id: "3dI59jLoFMjMAyUAyRZnkE",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "MADE",
    releaseDate: "2016-12-13",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fd0d9a33127c1d3f58ba3504",
    trackName: "BANG BANG BANG",
    trackDuration: "03:40",
  },
  {
    id: "3gUSmSBeeYsSMWECJcQW8w",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "MADE",
    releaseDate: "2016-12-13",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fd0d9a33127c1d3f58ba3504",
    trackName: "SOBER",
    trackDuration: "03:57",
  },
  {
    id: "4kaY4LbdbomICC25gYGGtn",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "MADE",
    releaseDate: "2016-12-13",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fd0d9a33127c1d3f58ba3504",
    trackName: "IF YOU",
    trackDuration: "04:24",
  },
  {
    id: "6ePbs5ln6NGmMMuA6DrSaQ",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "MADE",
    releaseDate: "2016-12-13",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fd0d9a33127c1d3f58ba3504",
    trackName: "ZUTTER (GD&T.O.P)",
    trackDuration: "03:14",
  },
  {
    id: "07gp2fnoTbVCsRJYazycI4",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "MADE",
    releaseDate: "2016-12-13",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fd0d9a33127c1d3f58ba3504",
    trackName: "WE LIKE 2 PARTY",
    trackDuration: "03:15",
  },
  {
    id: "3kseM0JJ9CgrCKAv1uoQmu",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Bang Bang Bang - Live",
    trackDuration: "04:49",
  },
  {
    id: "36uTWoCYuYtO1Qp9u7a7hF",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Tonight - Live",
    trackDuration: "03:57",
  },
  {
    id: "7LfrP6RxGo9dMZYKVwewgC",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Stupid Liar - Live",
    trackDuration: "04:36",
  },
  {
    id: "7ADw9GQ6A97ytTLwUAciFa",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Haru Haru - Live",
    trackDuration: "05:09",
  },
  {
    id: "5RcJp2r9ZHREM56nV2lTp5",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Loser - Live",
    trackDuration: "03:59",
  },
  {
    id: "3yfcH0kOXWgc95wdL62tPw",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Blue - Live",
    trackDuration: "04:24",
  },
  {
    id: "0PRny2NKo7iBdU47zTOoSJ",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Bad Boy - Live",
    trackDuration: "04:32",
  },
  {
    id: "0iAgdDYh8Y9CETXoz1psiV",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "If You - Live",
    trackDuration: "05:10",
  },
  {
    id: "5Cnt2UgBxTIO65mlD5ELeQ",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Strong Baby - Live",
    trackDuration: "04:12",
  },
  {
    id: "2mYTfHz0wolZrAlF2bEX6M",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Wings - Live",
    trackDuration: "05:21",
  },
  {
    id: "0753tiqVdX34CvtoMgVYZF",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Doom Dada - Live",
    trackDuration: "04:01",
  },
  {
    id: "21po0SccfQs9FBEojjhmNN",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Eyes, Nose, Lips - Live",
    trackDuration: "05:19",
  },
  {
    id: "7efFRFZXZEwXCYrvFvNnOy",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Zutter - Live",
    trackDuration: "03:26",
  },
  {
    id: "3SgqaUT4PjwO84nO6OIhyI",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Good Boy - Live",
    trackDuration: "04:07",
  },
  {
    id: "6rxMYaoZlTWqWRyCDMHo0s",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Crooked - Live",
    trackDuration: "04:25",
  },
  {
    id: "5gNATY0PKGl0iCJ1cj7RCY",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Sober - Live",
    trackDuration: "05:38",
  },
  {
    id: "4Oq7zp72QZLwNbLlwvcSAz",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Bae Bae - Live",
    trackDuration: "03:56",
  },
  {
    id: "7wkdrGxG3jWLCpMhifoAGD",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Fantastic Baby - Live",
    trackDuration: "04:26",
  },
  {
    id: "3vG5OctNjOeRjZwxzAXTNv",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "We Like 2 Party (Encore) - Live",
    trackDuration: "03:17",
  },
  {
    id: "18I6Sg8Avsf5LIAzyYiNYH",
    artistName: "BIGBANG",
    genres: ["k-pop"],
    popularity: 75,
    followers: 5634207,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb597a4257d0022e2ac837fa7d",
    albumsName: "2016 BIGBANG WORLD TOUR [MADE] FINAL IN SEOUL LIVE",
    releaseDate: "2016-05-27",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273016c825603d2a38f0e0353f8",
    trackName: "Lies (Encore) - Live",
    trackDuration: "03:39",
  },
  {
    id: "2RENZFrMGuOtr162uKsjOn",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Ruby",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27388e90abbb4d0d9e45881f4dc",
    trackName: "Intro : JANE with FKJ",
    trackDuration: "01:38",
  },
  {
    id: "0DC62SYIRKMFgx2f7OyvwD",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Ruby",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27388e90abbb4d0d9e45881f4dc",
    trackName: "like JENNIE",
    trackDuration: "02:03",
  },
  {
    id: "4YoN6sOtjWgbtB2jKgLPHL",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Ruby",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27388e90abbb4d0d9e45881f4dc",
    trackName: "start a war",
    trackDuration: "02:45",
  },
  {
    id: "2eOXb8aSpBUQLSk1sTBPEK",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Ruby",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27388e90abbb4d0d9e45881f4dc",
    trackName: "Handlebars (feat. Dua Lipa)",
    trackDuration: "03:04",
  },
  {
    id: "0wQASbxN6UbZXZhKXvuczj",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Ruby",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27388e90abbb4d0d9e45881f4dc",
    trackName: "with the IE (way up)",
    trackDuration: "02:43",
  },
  {
    id: "3fN2swfuBHUljCyPlA8wBN",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Ruby",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27388e90abbb4d0d9e45881f4dc",
    trackName: "ExtraL (feat. Doechii)",
    trackDuration: "02:47",
  },
  {
    id: "0oYhOxvxd95jtTWXHkYsPh",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Ruby",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27388e90abbb4d0d9e45881f4dc",
    trackName: "Mantra",
    trackDuration: "02:16",
  },
  {
    id: "2DW9UqvL7vcG3qCGFUmvXp",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Ruby",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27388e90abbb4d0d9e45881f4dc",
    trackName: "Love Hangover (feat. Dominic Fike)",
    trackDuration: "03:00",
  },
  {
    id: "76tWxLk4KWOw1Qd8dC5SdI",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Ruby",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27388e90abbb4d0d9e45881f4dc",
    trackName: "ZEN",
    trackDuration: "03:21",
  },
  {
    id: "3KldgsZmR6nCItrTrP8zbl",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Ruby",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27388e90abbb4d0d9e45881f4dc",
    trackName: "Damn Right (feat. Childish Gambino & Kali Uchis)",
    trackDuration: "03:50",
  },
  {
    id: "6wbLxHGBCpTWIpLZ5L0Zuv",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Ruby",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27388e90abbb4d0d9e45881f4dc",
    trackName: "F.T.S.",
    trackDuration: "02:32",
  },
  {
    id: "4p3oOaC3Fo38tEXp3SR5DN",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Ruby",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27388e90abbb4d0d9e45881f4dc",
    trackName: "Filter",
    trackDuration: "02:31",
  },
  {
    id: "3IPh4v7HFJ8Egba3lYNDrQ",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Ruby",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27388e90abbb4d0d9e45881f4dc",
    trackName: "Seoul City",
    trackDuration: "02:44",
  },
  {
    id: "0rNCeIkEvz61X0oP48z6cC",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Ruby",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27388e90abbb4d0d9e45881f4dc",
    trackName: "Starlight",
    trackDuration: "02:48",
  },
  {
    id: "5rP5Mwcx5IYavwVTCmdVIK",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Ruby",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27388e90abbb4d0d9e45881f4dc",
    trackName: "twin",
    trackDuration: "03:28",
  },
  {
    id: "2cR7c0dxkHnPcnWMLUlRVo",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Intro : JANE with FKJ",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27397b8e6f0dd873b5e34a394ee",
    trackName: "Intro : JANE with FKJ",
    trackDuration: "01:38",
  },
  {
    id: "4kh7FBVzeyRC0rMWRFDmMC",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Handlebars (feat. Dua Lipa)",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2739fb875cc9e6e4151461c2cf3",
    trackName: "Handlebars (feat. Dua Lipa)",
    trackDuration: "03:04",
  },
  {
    id: "4cfiNs7Yvr9UTLvbYWal1o",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "Damn Right (feat. Childish Gambino & Kali Uchis)",
    releaseDate: "2025-03-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273270745e1253630a60c9b8d52",
    trackName: "Damn Right (feat. Childish Gambino & Kali Uchis)",
    trackDuration: "03:50",
  },
  {
    id: "4g0F7gpT3iVHqKjXF87eX1",
    artistName: "JENNIE",
    genres: ["k-pop"],
    popularity: 88,
    followers: 9414151,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eba8e3627e392a1d8f539cb575",
    albumsName: "ExtraL",
    releaseDate: "2025-02-21",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738f2b7786ef16c658cccfaecd",
    trackName: "ExtraL (feat. Doechii)",
    trackDuration: "02:47",
  },
  {
    id: "6gofCueySlBTKWFkOntP2F",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS Deluxe: LANA",
    releaseDate: "2025-02-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273209356748e67773a69774a02",
    trackName: "No More Hiding",
    trackDuration: "02:42",
  },
  {
    id: "5Wl7p7TylkA7Kec3HV0i5b",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS Deluxe: LANA",
    releaseDate: "2025-02-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273209356748e67773a69774a02",
    trackName: "What Do I Do",
    trackDuration: "02:47",
  },
  {
    id: "3rXZ1j7QTXphBCavJDBZXz",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS Deluxe: LANA",
    releaseDate: "2025-02-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273209356748e67773a69774a02",
    trackName: "30 For 30 (with Kendrick Lamar)",
    trackDuration: "04:38",
  },
  {
    id: "2kwtmk3MEM1rJ2ROBlDPJm",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS Deluxe: LANA",
    releaseDate: "2025-02-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273209356748e67773a69774a02",
    trackName: "Diamond Boy (DTM)",
    trackDuration: "03:37",
  },
  {
    id: "6uhsCywVYs0A9wWf0IE81N",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS Deluxe: LANA",
    releaseDate: "2025-02-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273209356748e67773a69774a02",
    trackName: "BMF",
    trackDuration: "03:00",
  },
  {
    id: "1TmxBpnOfi6Qo76EubG57l",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS Deluxe: LANA",
    releaseDate: "2025-02-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273209356748e67773a69774a02",
    trackName: "Scorsese Baby Daddy",
    trackDuration: "02:33",
  },
  {
    id: "0ubNlPTaQkfNWkFO9Q9MOt",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS Deluxe: LANA",
    releaseDate: "2025-02-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273209356748e67773a69774a02",
    trackName: "Love Me 4 Me",
    trackDuration: "03:05",
  },
  {
    id: "5MJzPVpmuQenwmnW4tvqxN",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS Deluxe: LANA",
    releaseDate: "2025-02-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273209356748e67773a69774a02",
    trackName: "Chill Baby",
    trackDuration: "02:20",
  },
  {
    id: "0wa75FDB0wR2Y4JDe1Fw2m",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS Deluxe: LANA",
    releaseDate: "2025-02-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273209356748e67773a69774a02",
    trackName: "My Turn",
    trackDuration: "02:57",
  },
  {
    id: "0lYhn8BHyws0nEVMu7xejq",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS Deluxe: LANA",
    releaseDate: "2025-02-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273209356748e67773a69774a02",
    trackName: "Crybaby",
    trackDuration: "04:01",
  },
  {
    id: "31tVhNpdfsOhZKDhNXul7k",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS Deluxe: LANA",
    releaseDate: "2025-02-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273209356748e67773a69774a02",
    trackName: "Kitchen",
    trackDuration: "02:52",
  },
  {
    id: "7BidXxXMEtU3eUM2026i2p",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS Deluxe: LANA",
    releaseDate: "2025-02-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273209356748e67773a69774a02",
    trackName: "Get Behind Me (Interlude)",
    trackDuration: "01:48",
  },
  {
    id: "2xCb1jIzhLMm8DYcAVK6UY",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS Deluxe: LANA",
    releaseDate: "2025-02-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273209356748e67773a69774a02",
    trackName: "Drive",
    trackDuration: "03:05",
  },
  {
    id: "6YDeZ8E4Sq63omeicaKbgS",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS Deluxe: LANA",
    releaseDate: "2025-02-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273209356748e67773a69774a02",
    trackName: "Another Life",
    trackDuration: "03:25",
  },
  {
    id: "63VqnjTVYJiwVoUm0OCdy6",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS Deluxe: LANA",
    releaseDate: "2025-02-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273209356748e67773a69774a02",
    trackName: "Saturn",
    trackDuration: "03:06",
  },
  {
    id: "5Hi7mKvhNYvk4PIURtuY42",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS Deluxe: LANA",
    releaseDate: "2025-02-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273209356748e67773a69774a02",
    trackName: "Joni (feat. Don Toliver)",
    trackDuration: "02:07",
  },
  {
    id: "0sbjvSYXqzLiMPID9FPYjL",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS Deluxe: LANA",
    releaseDate: "2025-02-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273209356748e67773a69774a02",
    trackName: "Take You Down",
    trackDuration: "02:39",
  },
  {
    id: "0uQHm4CLatNbvDFHt1Ystl",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS Deluxe: LANA",
    releaseDate: "2025-02-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273209356748e67773a69774a02",
    trackName: "Open Arms (just SZA)",
    trackDuration: "03:35",
  },
  {
    id: "0IrFjSpWJzYsZ9UeZxqdgt",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS Deluxe: LANA",
    releaseDate: "2025-02-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273209356748e67773a69774a02",
    trackName: "PSA",
    trackDuration: "01:39",
  },
  {
    id: "06e2HGTj1BDaYXpoZfjZXe",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS Deluxe: LANA",
    releaseDate: "2025-02-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273209356748e67773a69774a02",
    trackName: "SOS",
    trackDuration: "01:57",
  },
  {
    id: "5xMw6qCcpd2gBXPGTegC4W",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS",
    releaseDate: "2022-12-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",
    trackName: "SOS",
    trackDuration: "01:57",
  },
  {
    id: "3OHfY25tqY28d16oZczHc8",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS",
    releaseDate: "2022-12-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",
    trackName: "Kill Bill",
    trackDuration: "02:33",
  },
  {
    id: "6eT2V7nKXyMf47TwPbtgAD",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS",
    releaseDate: "2022-12-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",
    trackName: "Seek & Destroy",
    trackDuration: "03:23",
  },
  {
    id: "2GAhgAjOhEmItWLfgisyOn",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS",
    releaseDate: "2022-12-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",
    trackName: "Low",
    trackDuration: "03:01",
  },
  {
    id: "1eIXYZWEfJO3Na2LCCnIJE",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS",
    releaseDate: "2022-12-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",
    trackName: "Love Language",
    trackDuration: "03:03",
  },
  {
    id: "2CSRrnOEELmhpq8iaAi9cd",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS",
    releaseDate: "2022-12-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",
    trackName: "Blind",
    trackDuration: "02:30",
  },
  {
    id: "1TweDM3JC49LNeelLVg3yX",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS",
    releaseDate: "2022-12-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",
    trackName: "Used (feat. Don Toliver)",
    trackDuration: "02:26",
  },
  {
    id: "4iZ4pt7kvcaH6Yo8UoZ4s2",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS",
    releaseDate: "2022-12-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",
    trackName: "Snooze",
    trackDuration: "03:21",
  },
  {
    id: "4fnNBPN9W6AoOYSQS3FJxT",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS",
    releaseDate: "2022-12-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",
    trackName: "Notice Me",
    trackDuration: "02:40",
  },
  {
    id: "2Sjx8DWZO5zaTyTAmgo2gY",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS",
    releaseDate: "2022-12-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",
    trackName: "Gone Girl",
    trackDuration: "04:04",
  },
  {
    id: "4jTs7ny5eSRnKTzxdrFv5I",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS",
    releaseDate: "2022-12-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",
    trackName: "Smoking on my Ex Pack",
    trackDuration: "01:23",
  },
  {
    id: "4h5x3XHLVYFJaItKuO2rhy",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS",
    releaseDate: "2022-12-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",
    trackName: "Ghost in the Machine (feat. Phoebe Bridgers)",
    trackDuration: "03:38",
  },
  {
    id: "2e2AXpIiJpet5b4qg85Gh6",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS",
    releaseDate: "2022-12-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",
    trackName: "F2F",
    trackDuration: "03:05",
  },
  {
    id: "5Y35SjAfXjjG0sFQ3KOxmm",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS",
    releaseDate: "2022-12-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",
    trackName: "Nobody Gets Me",
    trackDuration: "03:00",
  },
  {
    id: "4hTej08FutmriOs7S1hWWy",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS",
    releaseDate: "2022-12-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",
    trackName: "Conceited",
    trackDuration: "02:31",
  },
  {
    id: "6RQ5IwG7uADz9LDWliJGjU",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS",
    releaseDate: "2022-12-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",
    trackName: "Special",
    trackDuration: "02:38",
  },
  {
    id: "4rAg5bbrdZX00mXXhLvYXj",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS",
    releaseDate: "2022-12-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",
    trackName: "Too Late",
    trackDuration: "02:44",
  },
  {
    id: "74NI58MQexwZjNu1Gu6GjT",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS",
    releaseDate: "2022-12-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",
    trackName: "Far",
    trackDuration: "03:00",
  },
  {
    id: "2wSTnntOPRi7aQneobFtU4",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS",
    releaseDate: "2022-12-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",
    trackName: "Shirt",
    trackDuration: "03:01",
  },
  {
    id: "0xaFw2zDYf1rIJWl2dXiSF",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "SOS",
    releaseDate: "2022-12-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",
    trackName: "Open Arms (feat. Travis Scott)",
    trackDuration: "03:59",
  },
  {
    id: "3lw0PaZdGkvCwTaiatHbnU",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Ctrl (Deluxe)",
    releaseDate: "2022-06-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2731882add8fd275c04e322027d",
    trackName: "Supermodel",
    trackDuration: "03:01",
  },
  {
    id: "7HhtNlYNI32WY6n0ISX0U1",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Ctrl (Deluxe)",
    releaseDate: "2022-06-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2731882add8fd275c04e322027d",
    trackName: "Love Galore (feat. Travis Scott)",
    trackDuration: "04:35",
  },
  {
    id: "0JijvZALkvx7uonQdvXXpH",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Ctrl (Deluxe)",
    releaseDate: "2022-06-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2731882add8fd275c04e322027d",
    trackName: "Doves In The Wind (feat. Kendrick Lamar)",
    trackDuration: "04:26",
  },
  {
    id: "5L7sgpCZgrcqpgh1xM7r6V",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Ctrl (Deluxe)",
    releaseDate: "2022-06-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2731882add8fd275c04e322027d",
    trackName: "Drew Barrymore",
    trackDuration: "03:51",
  },
  {
    id: "5MffAkbuTPBqRdPuPzaEb5",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Ctrl (Deluxe)",
    releaseDate: "2022-06-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2731882add8fd275c04e322027d",
    trackName: "Prom",
    trackDuration: "03:16",
  },
  {
    id: "61fROeJfnI3OtNQYMpN1gT",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Ctrl (Deluxe)",
    releaseDate: "2022-06-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2731882add8fd275c04e322027d",
    trackName: "The Weekend",
    trackDuration: "04:32",
  },
  {
    id: "4U4bI86Jynl9et1eXyEpz6",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Ctrl (Deluxe)",
    releaseDate: "2022-06-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2731882add8fd275c04e322027d",
    trackName: "Go Gina",
    trackDuration: "02:41",
  },
  {
    id: "6yyxqE2ZdAVuD2qEL76POx",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Ctrl (Deluxe)",
    releaseDate: "2022-06-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2731882add8fd275c04e322027d",
    trackName: "Garden (Say It Like Dat)",
    trackDuration: "03:28",
  },
  {
    id: "5dIkvSrG129dvaQ3xb0M9R",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Ctrl (Deluxe)",
    releaseDate: "2022-06-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2731882add8fd275c04e322027d",
    trackName: "Broken Clocks",
    trackDuration: "03:51",
  },
  {
    id: "4rbl561Pds0a8d9h0RLaLF",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Ctrl (Deluxe)",
    releaseDate: "2022-06-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2731882add8fd275c04e322027d",
    trackName: "Anything",
    trackDuration: "02:29",
  },
  {
    id: "0YPPnLR3TS4ZIAKCQOLZhK",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Ctrl (Deluxe)",
    releaseDate: "2022-06-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2731882add8fd275c04e322027d",
    trackName: "Wavy (Interlude) (feat. James Fauntleroy)",
    trackDuration: "01:15",
  },
  {
    id: "1Y7tMWKvFZLCpoX0SINyhP",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Ctrl (Deluxe)",
    releaseDate: "2022-06-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2731882add8fd275c04e322027d",
    trackName: "Normal Girl",
    trackDuration: "04:13",
  },
  {
    id: "4icqsSm2gIMEMUAcaReA3u",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Ctrl (Deluxe)",
    releaseDate: "2022-06-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2731882add8fd275c04e322027d",
    trackName: "Pretty Little Birds (feat. Isaiah Rashad)",
    trackDuration: "04:05",
  },
  {
    id: "0WC7CIZHwPXoFQEbJ721vT",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Ctrl (Deluxe)",
    releaseDate: "2022-06-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2731882add8fd275c04e322027d",
    trackName: "20 Something",
    trackDuration: "03:18",
  },
  {
    id: "3fcX3E9l1gVnfKeWaEzHHv",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Ctrl (Deluxe)",
    releaseDate: "2022-06-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2731882add8fd275c04e322027d",
    trackName: "Love Galore (Alt Version)",
    trackDuration: "04:33",
  },
  {
    id: "3vZGtceCbJVh5aDT4XhE0p",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Ctrl (Deluxe)",
    releaseDate: "2022-06-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2731882add8fd275c04e322027d",
    trackName: "2AM",
    trackDuration: "04:02",
  },
  {
    id: "4pHy0gmjfpD0Fgond5c4Ta",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Ctrl (Deluxe)",
    releaseDate: "2022-06-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2731882add8fd275c04e322027d",
    trackName: "Miles",
    trackDuration: "01:09",
  },
  {
    id: "4UJuFZ4btsiGqMyFHBRPbo",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Ctrl (Deluxe)",
    releaseDate: "2022-06-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2731882add8fd275c04e322027d",
    trackName: "Percolator",
    trackDuration: "01:24",
  },
  {
    id: "7newfXclX39UwWTw2gDswM",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Ctrl (Deluxe)",
    releaseDate: "2022-06-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2731882add8fd275c04e322027d",
    trackName: "Tread Carefully",
    trackDuration: "03:02",
  },
  {
    id: "2xZ0zfuDTv5LxLhEgD82PG",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Ctrl (Deluxe)",
    releaseDate: "2022-06-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2731882add8fd275c04e322027d",
    trackName: "Awkward",
    trackDuration: "02:58",
  },
  {
    id: "0Grpt3Up0Kaj7PljmT7inL",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Dear Evan Hansen (Original Motion Picture Soundtrack)",
    releaseDate: "2021-09-24",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273a7a9d81575b10a3bc8b69914",
    trackName:
      "Waving Through A Window - From The “Dear Evan Hansen” Original Motion Picture Soundtrack",
    trackDuration: "03:55",
  },
  {
    id: "4F0FjRSJxEhEg2O2X7xAik",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Dear Evan Hansen (Original Motion Picture Soundtrack)",
    releaseDate: "2021-09-24",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273a7a9d81575b10a3bc8b69914",
    trackName:
      "For Forever - From The “Dear Evan Hansen” Original Motion Picture Soundtrack",
    trackDuration: "05:10",
  },
  {
    id: "7Fuj7RyGJYSJ7HgO5E2tJv",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Dear Evan Hansen (Original Motion Picture Soundtrack)",
    releaseDate: "2021-09-24",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273a7a9d81575b10a3bc8b69914",
    trackName:
      "Sincerely Me - From The “Dear Evan Hansen” Original Motion Picture Soundtrack",
    trackDuration: "03:37",
  },
  {
    id: "2hp0ZBtEDA2Wn3C1fvJSf9",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Dear Evan Hansen (Original Motion Picture Soundtrack)",
    releaseDate: "2021-09-24",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273a7a9d81575b10a3bc8b69914",
    trackName:
      "Requiem - From The “Dear Evan Hansen” Original Motion Picture Soundtrack",
    trackDuration: "04:24",
  },
  {
    id: "7bKq8MLzpWlaO1RXPkEm95",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Dear Evan Hansen (Original Motion Picture Soundtrack)",
    releaseDate: "2021-09-24",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273a7a9d81575b10a3bc8b69914",
    trackName:
      "If I Could Tell Her - From The “Dear Evan Hansen” Original Motion Picture Soundtrack",
    trackDuration: "04:03",
  },
  {
    id: "1ouS2oUJOnxH9TaQxpNpUO",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Dear Evan Hansen (Original Motion Picture Soundtrack)",
    releaseDate: "2021-09-24",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273a7a9d81575b10a3bc8b69914",
    trackName:
      "The Anonymous Ones - From The “Dear Evan Hansen” Original Motion Picture Soundtrack",
    trackDuration: "04:43",
  },
  {
    id: "3AYMFpcQeHCjnTAb8XKeVu",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Dear Evan Hansen (Original Motion Picture Soundtrack)",
    releaseDate: "2021-09-24",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273a7a9d81575b10a3bc8b69914",
    trackName:
      "You Will Be Found - From The “Dear Evan Hansen” Original Motion Picture Soundtrack",
    trackDuration: "05:58",
  },
  {
    id: "34IKm7af3AY1m36bnlNH5k",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Dear Evan Hansen (Original Motion Picture Soundtrack)",
    releaseDate: "2021-09-24",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273a7a9d81575b10a3bc8b69914",
    trackName:
      "Only Us - From The “Dear Evan Hansen” Original Motion Picture Soundtrack",
    trackDuration: "03:59",
  },
  {
    id: "6oKvPUNfMLB8tPCZxQztGR",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Dear Evan Hansen (Original Motion Picture Soundtrack)",
    releaseDate: "2021-09-24",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273a7a9d81575b10a3bc8b69914",
    trackName:
      "Words Fail - From The “Dear Evan Hansen” Original Motion Picture Soundtrack",
    trackDuration: "05:47",
  },
  {
    id: "1MdFRRORSskeNMHJsYv9cu",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Dear Evan Hansen (Original Motion Picture Soundtrack)",
    releaseDate: "2021-09-24",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273a7a9d81575b10a3bc8b69914",
    trackName:
      "So Big / So Small - From The “Dear Evan Hansen” Original Motion Picture Soundtrack",
    trackDuration: "04:25",
  },
  {
    id: "5V0BIjKnVh2acWHuf5evww",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Dear Evan Hansen (Original Motion Picture Soundtrack)",
    releaseDate: "2021-09-24",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273a7a9d81575b10a3bc8b69914",
    trackName:
      "A Little Closer - From The “Dear Evan Hansen” Original Motion Picture Soundtrack",
    trackDuration: "04:09",
  },
  {
    id: "6i14jVQ6cq2BxYWlYYgzyD",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Dear Evan Hansen (Original Motion Picture Soundtrack)",
    releaseDate: "2021-09-24",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273a7a9d81575b10a3bc8b69914",
    trackName:
      "You Will Be Found (Sam Smith & Summer Walker Version) - From The “Dear Evan Hansen” Original Motion Picture Soundtrack",
    trackDuration: "03:57",
  },
  {
    id: "1UiIBbs0Pl8rAtz294SZoR",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Dear Evan Hansen (Original Motion Picture Soundtrack)",
    releaseDate: "2021-09-24",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273a7a9d81575b10a3bc8b69914",
    trackName:
      "The Anonymous Ones (SZA Version) - From The “Dear Evan Hansen” Original Motion Picture Soundtrack",
    trackDuration: "04:09",
  },
  {
    id: "4SaukjSrlHLaSwZ5K6OHhe",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Dear Evan Hansen (Original Motion Picture Soundtrack)",
    releaseDate: "2021-09-24",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273a7a9d81575b10a3bc8b69914",
    trackName:
      "Only Us (Carrie Underwood & Dan + Shay Version) - From The “Dear Evan Hansen” Original Motion Picture Soundtrack",
    trackDuration: "03:45",
  },
  {
    id: "3tcquFqOHmSIDmhW4rH2Pn",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Dear Evan Hansen (Original Motion Picture Soundtrack)",
    releaseDate: "2021-09-24",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273a7a9d81575b10a3bc8b69914",
    trackName:
      "A Little Closer (FINNEAS Version) - From The “Dear Evan Hansen” Original Motion Picture Soundtrack",
    trackDuration: "04:02",
  },
  {
    id: "1oTJvM9gyW1uY7Bb0tOZyk",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Dear Evan Hansen (Original Motion Picture Soundtrack)",
    releaseDate: "2021-09-24",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273a7a9d81575b10a3bc8b69914",
    trackName:
      "Waving Through A Window (Tori Kelly Version) - From The “Dear Evan Hansen” Original Motion Picture Soundtrack",
    trackDuration: "04:26",
  },
  {
    id: "5qN4HFkapdAOV94XPryVof",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Black Panther The Album Music From And Inspired By",
    releaseDate: "2018-02-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273c027ad28821777b00dcaa888",
    trackName: "Black Panther",
    trackDuration: "02:10",
  },
  {
    id: "3GCdLUSnKSMJhs4Tj6CV3s",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Black Panther The Album Music From And Inspired By",
    releaseDate: "2018-02-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273c027ad28821777b00dcaa888",
    trackName: "All The Stars (with SZA)",
    trackDuration: "03:52",
  },
  {
    id: "4LmAnpjlhWTahvRkYR8xJa",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Black Panther The Album Music From And Inspired By",
    releaseDate: "2018-02-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273c027ad28821777b00dcaa888",
    trackName: "X (with 2 Chainz & Saudi)",
    trackDuration: "04:27",
  },
  {
    id: "5jyyPsIGM2yqkZN9R3TmvN",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Black Panther The Album Music From And Inspired By",
    releaseDate: "2018-02-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273c027ad28821777b00dcaa888",
    trackName: "The Ways (with Swae Lee)",
    trackDuration: "03:58",
  },
  {
    id: "7bUcBztfGqO7cSI2gMZeCI",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Black Panther The Album Music From And Inspired By",
    releaseDate: "2018-02-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273c027ad28821777b00dcaa888",
    trackName: "Opps (with Yugen Blakrok)",
    trackDuration: "03:00",
  },
  {
    id: "0DJBgBiYeSn6n1AXAkFVE8",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Black Panther The Album Music From And Inspired By",
    releaseDate: "2018-02-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273c027ad28821777b00dcaa888",
    trackName: "I Am",
    trackDuration: "03:28",
  },
  {
    id: "2tPcTFiQF9MbVUyjZ3zDhA",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Black Panther The Album Music From And Inspired By",
    releaseDate: "2018-02-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273c027ad28821777b00dcaa888",
    trackName: "Paramedic!",
    trackDuration: "03:39",
  },
  {
    id: "4KXwFI9pgJLpUIAc9oSL8j",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Black Panther The Album Music From And Inspired By",
    releaseDate: "2018-02-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273c027ad28821777b00dcaa888",
    trackName: "Bloody Waters (with Anderson .Paak & James Blake)",
    trackDuration: "04:32",
  },
  {
    id: "1eLSF6HfrRA0AsNmTkUlKx",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Black Panther The Album Music From And Inspired By",
    releaseDate: "2018-02-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273c027ad28821777b00dcaa888",
    trackName: "King's Dead (with Kendrick Lamar, Future & James Blake)",
    trackDuration: "03:45",
  },
  {
    id: "4FpfU1O7WCLBnmwu5XAFk4",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Black Panther The Album Music From And Inspired By",
    releaseDate: "2018-02-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273c027ad28821777b00dcaa888",
    trackName: "Redemption Interlude",
    trackDuration: "01:25",
  },
  {
    id: "76iVOVsliCHlWqKuDnCfhE",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Black Panther The Album Music From And Inspired By",
    releaseDate: "2018-02-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273c027ad28821777b00dcaa888",
    trackName: "Redemption (with Babes Wodumo)",
    trackDuration: "03:42",
  },
  {
    id: "35cOyocq8Gb6UcT0NWeTwn",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Black Panther The Album Music From And Inspired By",
    releaseDate: "2018-02-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273c027ad28821777b00dcaa888",
    trackName: "Seasons (with Sjava & Reason)",
    trackDuration: "04:02",
  },
  {
    id: "5cXg9IQS34FzLVdHhp7hu7",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Black Panther The Album Music From And Inspired By",
    releaseDate: "2018-02-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273c027ad28821777b00dcaa888",
    trackName: "Big Shot (with Travis Scott)",
    trackDuration: "03:41",
  },
  {
    id: "77UjLW8j5UAGAGVGhR5oUK",
    artistName: "SZA",
    genres: ["r&b"],
    popularity: 95,
    followers: 28231702,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebfd0a9fb6c252a3ba44079acf",
    albumsName: "Black Panther The Album Music From And Inspired By",
    releaseDate: "2018-02-09",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273c027ad28821777b00dcaa888",
    trackName: "Pray For Me (with Kendrick Lamar)",
    trackDuration: "03:31",
  },
  {
    id: "6JVXVLqCPaodBSEwRFUN8w",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "NJWMX",
    releaseDate: "2023-12-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273782a8cae588fee29eefec8b6",
    trackName: "Ditto (250 Remix)",
    trackDuration: "03:21",
  },
  {
    id: "4yjDMKCAeLovlo9ih0AgXW",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "NJWMX",
    releaseDate: "2023-12-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273782a8cae588fee29eefec8b6",
    trackName: "OMG (FRNK Remix)",
    trackDuration: "03:30",
  },
  {
    id: "2nW48vXnZZ5EYka46v7GOk",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "NJWMX",
    releaseDate: "2023-12-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273782a8cae588fee29eefec8b6",
    trackName: "Attention (250 Remix)",
    trackDuration: "03:01",
  },
  {
    id: "6CUKsv928uT4561qJovhhG",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "NJWMX",
    releaseDate: "2023-12-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273782a8cae588fee29eefec8b6",
    trackName: "Hype Boy (250 Remix)",
    trackDuration: "04:11",
  },
  {
    id: "5bwpbZBOY0mrmRhZ94c0kW",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "NJWMX",
    releaseDate: "2023-12-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273782a8cae588fee29eefec8b6",
    trackName: "Cookie (FRNK Remix)",
    trackDuration: "03:32",
  },
  {
    id: "2gWWYL6iXZKkOqCE3TQHBM",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "NJWMX",
    releaseDate: "2023-12-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273782a8cae588fee29eefec8b6",
    trackName: "Hurt (250 Remix)",
    trackDuration: "03:44",
  },
  {
    id: "3dCCHYqCAMdm1GCuklUaZG",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "NJWMX",
    releaseDate: "2023-12-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273782a8cae588fee29eefec8b6",
    trackName: "Ditto (250 Remix) (Instrumental)",
    trackDuration: "03:21",
  },
  {
    id: "2oLVT9Lo0SavCNpGw4WfPp",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "NJWMX",
    releaseDate: "2023-12-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273782a8cae588fee29eefec8b6",
    trackName: "OMG (FRNK Remix) (Instrumental)",
    trackDuration: "03:30",
  },
  {
    id: "4MhgDz4lSj2HtlUcpe3yrd",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "NJWMX",
    releaseDate: "2023-12-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273782a8cae588fee29eefec8b6",
    trackName: "Attention (250 Remix) (Instrumental)",
    trackDuration: "03:01",
  },
  {
    id: "6tU4EeTSSawN9sbfAjWPX4",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "NJWMX",
    releaseDate: "2023-12-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273782a8cae588fee29eefec8b6",
    trackName: "Hype Boy (250 Remix) (Instrumental)",
    trackDuration: "04:11",
  },
  {
    id: "2akxtSALPUX8orriSWyDi4",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "NJWMX",
    releaseDate: "2023-12-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273782a8cae588fee29eefec8b6",
    trackName: "Cookie (FRNK Remix) (Instrumental)",
    trackDuration: "03:32",
  },
  {
    id: "1q9V1vsIEehAm2hDT6l53g",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "NJWMX",
    releaseDate: "2023-12-19",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273782a8cae588fee29eefec8b6",
    trackName: "Hurt (250 Remix) (Instrumental)",
    trackDuration: "03:36",
  },
  {
    id: "5ocSQW5sIUIOFojwXEz9Ki",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "Supernatural",
    releaseDate: "2024-06-21",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2737e1eeb0d7cc374a168369c80",
    trackName: "Supernatural",
    trackDuration: "03:11",
  },
  {
    id: "58Q3FZFs1YXPpliWQB5kXB",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "Supernatural",
    releaseDate: "2024-06-21",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2737e1eeb0d7cc374a168369c80",
    trackName: "Right Now",
    trackDuration: "02:40",
  },
  {
    id: "4823f9W4xmR3n1BebPyNaR",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "Supernatural",
    releaseDate: "2024-06-21",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2737e1eeb0d7cc374a168369c80",
    trackName: "Supernatural (Instrumental)",
    trackDuration: "03:11",
  },
  {
    id: "6jgUrLEivd4DaiYb1izJLF",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "Supernatural",
    releaseDate: "2024-06-21",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2737e1eeb0d7cc374a168369c80",
    trackName: "Right Now (Instrumental)",
    trackDuration: "02:40",
  },
  {
    id: "38tXZcL1gZRfbqfOG0VMTH",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "How Sweet",
    releaseDate: "2024-05-24",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273b657fbb27b17e7bd4691c2b2",
    trackName: "How Sweet",
    trackDuration: "03:39",
  },
  {
    id: "19D8LNpWwIPpi6hs9BG7dq",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "How Sweet",
    releaseDate: "2024-05-24",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273b657fbb27b17e7bd4691c2b2",
    trackName: "Bubble Gum",
    trackDuration: "03:20",
  },
  {
    id: "54tBIDmNdxGp04gPNWCCbi",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "How Sweet",
    releaseDate: "2024-05-24",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273b657fbb27b17e7bd4691c2b2",
    trackName: "How Sweet (Instrumental)",
    trackDuration: "03:39",
  },
  {
    id: "54uNtM77iZ5gawWBQGnEar",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "How Sweet",
    releaseDate: "2024-05-24",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273b657fbb27b17e7bd4691c2b2",
    trackName: "Bubble Gum (Instrumental)",
    trackDuration: "03:20",
  },
  {
    id: "11YovYUVkZdLyOFncbecWL",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "NewJeans X MY DEMON",
    releaseDate: "2023-11-24",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2732509e504c96367276ca6d1dd",
    trackName: "Our Night is more beautiful than your Day",
    trackDuration: "03:12",
  },
  {
    id: "6sJ6EoG4vyUC1tW718ww7f",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "NewJeans X MY DEMON",
    releaseDate: "2023-11-24",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2732509e504c96367276ca6d1dd",
    trackName: "Our Night is more beautiful than your Day (Inst.)",
    trackDuration: "03:12",
  },
  {
    id: "210JJAa9nJOgNa0YNrsT5g",
    artistName: "NewJeans",
    genres: ["k-pop"],
    popularity: 79,
    followers: 10467117,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
    albumsName: "GODS",
    releaseDate: "2023-10-04",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273e4179b3fb74beaf0cdfa7a13",
    trackName: "GODS",
    trackDuration: "03:40",
  },
  {
    id: "5673WA8EEUSPx1ir26lhGW",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Hurry Up Tomorrow",
    releaseDate: "2025-01-31",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f0f6528e4eb6588b48d5128e",
    trackName: "Wake Me Up (feat. Justice)",
    trackDuration: "05:08",
  },
  {
    id: "3AWDeHLc88XogCaCnZQLVI",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Hurry Up Tomorrow",
    releaseDate: "2025-01-31",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f0f6528e4eb6588b48d5128e",
    trackName: "Cry For Me",
    trackDuration: "03:44",
  },
  {
    id: "64JIAZ0bS7WoARYfWQGCoz",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Hurry Up Tomorrow",
    releaseDate: "2025-01-31",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f0f6528e4eb6588b48d5128e",
    trackName: "I Can't Fucking Sing",
    trackDuration: "00:12",
  },
  {
    id: "7DY756WOLyOz2Xnhw4EFiC",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Hurry Up Tomorrow",
    releaseDate: "2025-01-31",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f0f6528e4eb6588b48d5128e",
    trackName: "São Paulo (feat. Anitta)",
    trackDuration: "05:01",
  },
  {
    id: "6jDGDtQPC46pFqxph3qdbD",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Hurry Up Tomorrow",
    releaseDate: "2025-01-31",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f0f6528e4eb6588b48d5128e",
    trackName: "Until We're Skin & Bones",
    trackDuration: "00:22",
  },
  {
    id: "5rzI6Jnlhx8DgVgsOLorfW",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Hurry Up Tomorrow",
    releaseDate: "2025-01-31",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f0f6528e4eb6588b48d5128e",
    trackName: "Baptized In Fear",
    trackDuration: "03:52",
  },
  {
    id: "0sTBOp1hdayTjw6UOyPyi6",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Hurry Up Tomorrow",
    releaseDate: "2025-01-31",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f0f6528e4eb6588b48d5128e",
    trackName: "Open Hearts",
    trackDuration: "03:54",
  },
  {
    id: "4Msr8L0gHGDsLSBlk7pSPU",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Hurry Up Tomorrow",
    releaseDate: "2025-01-31",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f0f6528e4eb6588b48d5128e",
    trackName: "Opening Night",
    trackDuration: "01:36",
  },
  {
    id: "2gyHr9WqZeMtzJOpWGuGo6",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Hurry Up Tomorrow",
    releaseDate: "2025-01-31",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f0f6528e4eb6588b48d5128e",
    trackName:
      "Reflections Laughing (feat. Travis Scott, Florence + The Machine)",
    trackDuration: "04:51",
  },
  {
    id: "637oNhilCI9UlkWkUW4Grt",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Hurry Up Tomorrow",
    releaseDate: "2025-01-31",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f0f6528e4eb6588b48d5128e",
    trackName: "Enjoy The Show (feat. Future)",
    trackDuration: "05:01",
  },
  {
    id: "0FolPJnYMo71Z7qasTuoJT",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Hurry Up Tomorrow",
    releaseDate: "2025-01-31",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f0f6528e4eb6588b48d5128e",
    trackName: "Given Up On Me",
    trackDuration: "05:54",
  },
  {
    id: "0bcZ7xN9IcjSNxLerzR2yl",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Hurry Up Tomorrow",
    releaseDate: "2025-01-31",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f0f6528e4eb6588b48d5128e",
    trackName: "I Can't Wait To Get There",
    trackDuration: "03:08",
  },
  {
    id: "0FIDCNYYjNvPVimz5icugS",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Hurry Up Tomorrow",
    releaseDate: "2025-01-31",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f0f6528e4eb6588b48d5128e",
    trackName: "Timeless (feat Playboi Carti)",
    trackDuration: "04:16",
  },
  {
    id: "2v0AG62ZHtD3I4YmTb3WYM",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Hurry Up Tomorrow",
    releaseDate: "2025-01-31",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f0f6528e4eb6588b48d5128e",
    trackName: "Niagara Falls",
    trackDuration: "04:37",
  },
  {
    id: "7rVmzyFA7f4rNGl9onF21E",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Hurry Up Tomorrow",
    releaseDate: "2025-01-31",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f0f6528e4eb6588b48d5128e",
    trackName: "Take Me Back To LA",
    trackDuration: "04:13",
  },
  {
    id: "4sWQbsLLH2NEbO79DSZCL9",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Hurry Up Tomorrow",
    releaseDate: "2025-01-31",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f0f6528e4eb6588b48d5128e",
    trackName: "Big Sleep (feat. Giorgio Moroder)",
    trackDuration: "03:45",
  },
  {
    id: "0K3w6WNawZlv6Izmsrye8o",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Hurry Up Tomorrow",
    releaseDate: "2025-01-31",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f0f6528e4eb6588b48d5128e",
    trackName: "Give Me Mercy",
    trackDuration: "03:36",
  },
  {
    id: "6i5fDaCzwxRrZtuvvcqoIf",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Hurry Up Tomorrow",
    releaseDate: "2025-01-31",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f0f6528e4eb6588b48d5128e",
    trackName: "Drive",
    trackDuration: "03:08",
  },
  {
    id: "5ZDKPFRZC6QlJpf8bCIXTs",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Hurry Up Tomorrow",
    releaseDate: "2025-01-31",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f0f6528e4eb6588b48d5128e",
    trackName: "The Abyss (feat. Lana Del Rey)",
    trackDuration: "04:42",
  },
  {
    id: "717s9KFmHhyy5t3xkStS56",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Hurry Up Tomorrow",
    releaseDate: "2025-01-31",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f0f6528e4eb6588b48d5128e",
    trackName: "Red Terror",
    trackDuration: "03:51",
  },
  {
    id: "76yLBykniz0SSNv0jj17M2",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Starboy (Deluxe)",
    releaseDate: "2023-03-14",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738ad8f5243d6534e03b656c8b",
    trackName: "Starboy (feat. Daft Punk)",
    trackDuration: "03:50",
  },
  {
    id: "6fSvz9yrQY407xmr7cdjuA",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Starboy (Deluxe)",
    releaseDate: "2023-03-14",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738ad8f5243d6534e03b656c8b",
    trackName: "Party Monster",
    trackDuration: "04:09",
  },
  {
    id: "4k47x4UkxG215nFLMFna8A",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Starboy (Deluxe)",
    releaseDate: "2023-03-14",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738ad8f5243d6534e03b656c8b",
    trackName: "False Alarm",
    trackDuration: "03:40",
  },
  {
    id: "4zHa39io9pjsiAE6LwM2NH",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Starboy (Deluxe)",
    releaseDate: "2023-03-14",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738ad8f5243d6534e03b656c8b",
    trackName: "Reminder",
    trackDuration: "03:38",
  },
  {
    id: "3mynPhglTz2Ggh8SxA34kR",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Starboy (Deluxe)",
    releaseDate: "2023-03-14",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738ad8f5243d6534e03b656c8b",
    trackName: "Rockin’",
    trackDuration: "03:52",
  },
  {
    id: "36K5mnqwfxGS0rvxz7FPyq",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Starboy (Deluxe)",
    releaseDate: "2023-03-14",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738ad8f5243d6534e03b656c8b",
    trackName: "Secrets",
    trackDuration: "04:25",
  },
  {
    id: "2QRvliBEcGIEgTrjVfxmXo",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Starboy (Deluxe)",
    releaseDate: "2023-03-14",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738ad8f5243d6534e03b656c8b",
    trackName: "True Colors",
    trackDuration: "03:26",
  },
  {
    id: "3CktmDvZGj21m3pNFj5Lr3",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Starboy (Deluxe)",
    releaseDate: "2023-03-14",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738ad8f5243d6534e03b656c8b",
    trackName: "Stargirl Interlude (feat. Lana Del Rey)",
    trackDuration: "01:51",
  },
  {
    id: "3r5lHFACTti0w2REN5tcrn",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Starboy (Deluxe)",
    releaseDate: "2023-03-14",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738ad8f5243d6534e03b656c8b",
    trackName: "Sidewalks (feat. Kendrick Lamar)",
    trackDuration: "03:51",
  },
  {
    id: "4QYEtbfsqusrXN5A49LG53",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Starboy (Deluxe)",
    releaseDate: "2023-03-14",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738ad8f5243d6534e03b656c8b",
    trackName: "Six Feet Under",
    trackDuration: "03:57",
  },
  {
    id: "5ejT19NfiINj4cFmjRHwAC",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Starboy (Deluxe)",
    releaseDate: "2023-03-14",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738ad8f5243d6534e03b656c8b",
    trackName: "Love To Lay",
    trackDuration: "03:43",
  },
  {
    id: "5HFQB9ENLGBHTci7xPmLk6",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Starboy (Deluxe)",
    releaseDate: "2023-03-14",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738ad8f5243d6534e03b656c8b",
    trackName: "A Lonely Night",
    trackDuration: "03:40",
  },
  {
    id: "2DsrtZoRxeHdCSGRlQVQtj",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Starboy (Deluxe)",
    releaseDate: "2023-03-14",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738ad8f5243d6534e03b656c8b",
    trackName: "Attention",
    trackDuration: "03:17",
  },
  {
    id: "09mBPwUMt1TXNtneqvmZZ5",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Starboy (Deluxe)",
    releaseDate: "2023-03-14",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738ad8f5243d6534e03b656c8b",
    trackName: "Ordinary Life",
    trackDuration: "03:41",
  },
  {
    id: "3iPmwJh56xbDF7Xduimf0d",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Starboy (Deluxe)",
    releaseDate: "2023-03-14",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738ad8f5243d6534e03b656c8b",
    trackName: "Nothing Without You",
    trackDuration: "03:18",
  },
  {
    id: "3Xz0rSC29WbaobyJQfeYsp",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Starboy (Deluxe)",
    releaseDate: "2023-03-14",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738ad8f5243d6534e03b656c8b",
    trackName: "All I Know (feat. Future)",
    trackDuration: "05:21",
  },
  {
    id: "0awWj9Wzj375IL5etqa1Dk",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Starboy (Deluxe)",
    releaseDate: "2023-03-14",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738ad8f5243d6534e03b656c8b",
    trackName: "Die For You",
    trackDuration: "04:20",
  },
  {
    id: "0yi180gAOIJhcRo7wY4Htl",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Starboy (Deluxe)",
    releaseDate: "2023-03-14",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738ad8f5243d6534e03b656c8b",
    trackName: "I Feel It Coming (feat. Daft Punk)",
    trackDuration: "04:29",
  },
  {
    id: "4W4fNrZYkobj539TOWsLO2",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Starboy (Deluxe)",
    releaseDate: "2023-03-14",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738ad8f5243d6534e03b656c8b",
    trackName: "Die For You (with Ariana Grande) - Remix",
    trackDuration: "03:52",
  },
  {
    id: "3DCc4HPrVukBeaDGe3Cosk",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Starboy (Deluxe)",
    releaseDate: "2023-03-14",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2738ad8f5243d6534e03b656c8b",
    trackName: "Starboy (feat. Daft Punk) - Kygo Remix",
    trackDuration: "04:04",
  },
  {
    id: "7HX1VOiPj1oMlgZ3OQ92B6",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Live At SoFi Stadium",
    releaseDate: "2023-03-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273308f9319a3d6f6737f43b3fc",
    trackName: "Intro - Live",
    trackDuration: "01:35",
  },
  {
    id: "2evYKtXNAdn60ANNEdjH7V",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Live At SoFi Stadium",
    releaseDate: "2023-03-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273308f9319a3d6f6737f43b3fc",
    trackName: "Alone Again - Live",
    trackDuration: "02:47",
  },
  {
    id: "2h3ZotklPN6aD7OuHz7bFZ",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Live At SoFi Stadium",
    releaseDate: "2023-03-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273308f9319a3d6f6737f43b3fc",
    trackName: "Gasoline - Live",
    trackDuration: "03:15",
  },
  {
    id: "7skxtd9x0d05fjz4D7w3t2",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Live At SoFi Stadium",
    releaseDate: "2023-03-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273308f9319a3d6f6737f43b3fc",
    trackName: "Sacrifice - Live",
    trackDuration: "04:23",
  },
  {
    id: "72SxWvaYsDgix2N3sjCjT1",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Live At SoFi Stadium",
    releaseDate: "2023-03-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273308f9319a3d6f6737f43b3fc",
    trackName: "How Do I Make You Love Me? - Live",
    trackDuration: "03:29",
  },
  {
    id: "47vfGRaXEGzcM2vI7JC2OO",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Live At SoFi Stadium",
    releaseDate: "2023-03-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273308f9319a3d6f6737f43b3fc",
    trackName: "Can't Feel My Face - Live",
    trackDuration: "03:03",
  },
  {
    id: "02YlAvsmptN8LisZqrWBIb",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Live At SoFi Stadium",
    releaseDate: "2023-03-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273308f9319a3d6f6737f43b3fc",
    trackName: "Take My Breath - Live",
    trackDuration: "03:55",
  },
  {
    id: "45ypYpAdgoneWcBT0Wba3p",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Live At SoFi Stadium",
    releaseDate: "2023-03-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273308f9319a3d6f6737f43b3fc",
    trackName: "Hurricane - Live",
    trackDuration: "02:07",
  },
  {
    id: "6N8W7Dbcsg9tRDxn0wjFkR",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Live At SoFi Stadium",
    releaseDate: "2023-03-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273308f9319a3d6f6737f43b3fc",
    trackName: "The Hills - Live",
    trackDuration: "03:05",
  },
  {
    id: "3kdEGx81MR9ftxRbF3Zf84",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Live At SoFi Stadium",
    releaseDate: "2023-03-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273308f9319a3d6f6737f43b3fc",
    trackName: "Often - Live",
    trackDuration: "02:28",
  },
  {
    id: "03H6iCycyxfB2mZzIOEeKJ",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Live At SoFi Stadium",
    releaseDate: "2023-03-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273308f9319a3d6f6737f43b3fc",
    trackName: "Crew Love - Live",
    trackDuration: "01:53",
  },
  {
    id: "4ZYGm4xWPhsZVijqtpWn4C",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Live At SoFi Stadium",
    releaseDate: "2023-03-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273308f9319a3d6f6737f43b3fc",
    trackName: "Starboy - Live",
    trackDuration: "04:05",
  },
  {
    id: "0WrIAsGJOei2FGeakvpTDU",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Live At SoFi Stadium",
    releaseDate: "2023-03-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273308f9319a3d6f6737f43b3fc",
    trackName: "Heartless - Live",
    trackDuration: "02:04",
  },
  {
    id: "431r2Qg4I2qFIKdSFCJN4s",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Live At SoFi Stadium",
    releaseDate: "2023-03-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273308f9319a3d6f6737f43b3fc",
    trackName: "Low Life - Live",
    trackDuration: "01:47",
  },
  {
    id: "6tB01QHgH9YuVA8TomAzni",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Live At SoFi Stadium",
    releaseDate: "2023-03-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273308f9319a3d6f6737f43b3fc",
    trackName: "Or Nah - Live",
    trackDuration: "01:41",
  },
  {
    id: "2YI8oiiImLkZvVgP33xrjD",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Live At SoFi Stadium",
    releaseDate: "2023-03-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273308f9319a3d6f6737f43b3fc",
    trackName: "Kiss Land - Live",
    trackDuration: "01:50",
  },
  {
    id: "6knNhL3mIaackJvtjmUrfN",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Live At SoFi Stadium",
    releaseDate: "2023-03-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273308f9319a3d6f6737f43b3fc",
    trackName: "Party Monster - Live",
    trackDuration: "03:09",
  },
  {
    id: "5RlqhZfTao31aQUO2QjpkG",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Live At SoFi Stadium",
    releaseDate: "2023-03-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273308f9319a3d6f6737f43b3fc",
    trackName: "Faith - Live",
    trackDuration: "03:05",
  },
  {
    id: "7HK0ZDEsW0lGKKIVYvni2z",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Live At SoFi Stadium",
    releaseDate: "2023-03-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273308f9319a3d6f6737f43b3fc",
    trackName: "After Hours - Live",
    trackDuration: "04:27",
  },
  {
    id: "6XZ8C5etRn0kiS1wwuW0SO",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Live At SoFi Stadium",
    releaseDate: "2023-03-03",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273308f9319a3d6f6737f43b3fc",
    trackName: "Out of Time - Live",
    trackDuration: "03:20",
  },
  {
    id: "3gj1hwjku4JaoamjJVqIIl",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM (Alternate World)",
    releaseDate: "2022-01-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64",
    trackName: "Dawn FM",
    trackDuration: "01:36",
  },
  {
    id: "6Uj2XaahtYXK2WeD7GGwBY",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM (Alternate World)",
    releaseDate: "2022-01-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64",
    trackName: "Gasoline",
    trackDuration: "03:32",
  },
  {
    id: "3kOtREqmcGaEA2KhqffFnw",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM (Alternate World)",
    releaseDate: "2022-01-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64",
    trackName: "How Do I Make You Love Me?",
    trackDuration: "03:34",
  },
  {
    id: "3WXyY2PxX88kpBtB0GH61w",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM (Alternate World)",
    releaseDate: "2022-01-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64",
    trackName: "Take My Breath",
    trackDuration: "05:39",
  },
  {
    id: "0xa4hvXeYHRRNhA7wBfUar",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM (Alternate World)",
    releaseDate: "2022-01-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64",
    trackName: "Sacrifice",
    trackDuration: "03:08",
  },
  {
    id: "23iLEDPEJpcfYOw1tVhd2o",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM (Alternate World)",
    releaseDate: "2022-01-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64",
    trackName: "A Tale By Quincy",
    trackDuration: "01:36",
  },
  {
    id: "25C86uEjQ0fjj3bvsxIusO",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM (Alternate World)",
    releaseDate: "2022-01-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64",
    trackName: "Out of Time",
    trackDuration: "03:34",
  },
  {
    id: "0khQeEwEv6GndVypzpGOG5",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM (Alternate World)",
    releaseDate: "2022-01-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64",
    trackName: "Here We Go… Again (feat. Tyler, the Creator)",
    trackDuration: "03:29",
  },
  {
    id: "4cm7Ap6IWH6m8JyB9IXT3x",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM (Alternate World)",
    releaseDate: "2022-01-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64",
    trackName: "Best Friends",
    trackDuration: "02:43",
  },
  {
    id: "37zcCimcUGurQoLEAuN8nR",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM (Alternate World)",
    releaseDate: "2022-01-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64",
    trackName: "Is There Someone Else?",
    trackDuration: "03:19",
  },
  {
    id: "2022B8GxEstpvibwgbJ15s",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM (Alternate World)",
    releaseDate: "2022-01-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64",
    trackName: "Starry Eyes",
    trackDuration: "02:28",
  },
  {
    id: "7q9Sr5kCkha0L49GAQctHl",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM (Alternate World)",
    releaseDate: "2022-01-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64",
    trackName: "Every Angel is Terrifying",
    trackDuration: "02:47",
  },
  {
    id: "3TVnaEVbUBFmWYk9IOIwRo",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM (Alternate World)",
    releaseDate: "2022-01-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64",
    trackName: "Don’t Break My Heart",
    trackDuration: "03:25",
  },
  {
    id: "7p2wRa4m9KVXEXUlkJLhUi",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM (Alternate World)",
    releaseDate: "2022-01-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64",
    trackName: "I Heard You're Married (feat. Lil Wayne)",
    trackDuration: "04:23",
  },
  {
    id: "02w1rM6spvEcbFxd63xCl2",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM (Alternate World)",
    releaseDate: "2022-01-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64",
    trackName: "Less Than Zero",
    trackDuration: "03:31",
  },
  {
    id: "0DvtQkuaV0VrSHgb5pwRke",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM (Alternate World)",
    releaseDate: "2022-01-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64",
    trackName: "Phantom Regret by Jim",
    trackDuration: "02:59",
  },
  {
    id: "1S9DHKpS73KFVN7nnIql3f",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM (Alternate World)",
    releaseDate: "2022-01-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64",
    trackName: "Moth To A Flame (with The Weeknd)",
    trackDuration: "03:54",
  },
  {
    id: "1Jz0fAhw41suiAVekjAoLi",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM (Alternate World)",
    releaseDate: "2022-01-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64",
    trackName: "Dawn FM - OPN Remix",
    trackDuration: "03:03",
  },
  {
    id: "2urqWNGpjl07PLAafoa5nT",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM (Alternate World)",
    releaseDate: "2022-01-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64",
    trackName:
      "How Do I Make You Love Me? - Sebastian Ingrosso & Salvatore Ganacci Remix",
    trackDuration: "03:37",
  },
  {
    id: "0QE33jkiMTzCI8momkDmQY",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM (Alternate World)",
    releaseDate: "2022-01-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64",
    trackName: "Sacrifice (Remix) (feat. Swedish House Mafia)",
    trackDuration: "03:58",
  },
  {
    id: "6krYS8KtmNAYyb5uTZiYW4",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM",
    releaseDate: "2022-01-06",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2734ab2520c2c77a1d66b9ee21d",
    trackName: "Dawn FM",
    trackDuration: "01:36",
  },
  {
    id: "3KyKxJ4P3pVCgaZwaq2rUC",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM",
    releaseDate: "2022-01-06",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2734ab2520c2c77a1d66b9ee21d",
    trackName: "Gasoline",
    trackDuration: "03:32",
  },
  {
    id: "2Ghp894n1laIf2w98VeAOJ",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM",
    releaseDate: "2022-01-06",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2734ab2520c2c77a1d66b9ee21d",
    trackName: "How Do I Make You Love Me?",
    trackDuration: "03:34",
  },
  {
    id: "2vgUijXOTRMnWXDtvgMp2b",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM",
    releaseDate: "2022-01-06",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2734ab2520c2c77a1d66b9ee21d",
    trackName: "Take My Breath",
    trackDuration: "05:39",
  },
  {
    id: "1nH2PkJL1XoUq8oE6tBZoU",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM",
    releaseDate: "2022-01-06",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2734ab2520c2c77a1d66b9ee21d",
    trackName: "Sacrifice",
    trackDuration: "03:08",
  },
  {
    id: "759ndr57jb0URg4j9YSWml",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM",
    releaseDate: "2022-01-06",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2734ab2520c2c77a1d66b9ee21d",
    trackName: "A Tale By Quincy",
    trackDuration: "01:36",
  },
  {
    id: "2SLwbpExuoBDZBpjfefCtV",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM",
    releaseDate: "2022-01-06",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2734ab2520c2c77a1d66b9ee21d",
    trackName: "Out of Time",
    trackDuration: "03:34",
  },
  {
    id: "1NhjYYcYTRywc0di98xHxf",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM",
    releaseDate: "2022-01-06",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2734ab2520c2c77a1d66b9ee21d",
    trackName: "Here We Go… Again (feat. Tyler, the Creator)",
    trackDuration: "03:29",
  },
  {
    id: "1E5Xu8dur0fAjSP1VpVhAZ",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM",
    releaseDate: "2022-01-06",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2734ab2520c2c77a1d66b9ee21d",
    trackName: "Best Friends",
    trackDuration: "02:43",
  },
  {
    id: "0mL82sxCRjrs3br407IdJh",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM",
    releaseDate: "2022-01-06",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2734ab2520c2c77a1d66b9ee21d",
    trackName: "Is There Someone Else?",
    trackDuration: "03:19",
  },
  {
    id: "6zzdyvVWjGrQBraSvuqJPY",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM",
    releaseDate: "2022-01-06",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2734ab2520c2c77a1d66b9ee21d",
    trackName: "Starry Eyes",
    trackDuration: "02:28",
  },
  {
    id: "3vJcz8exedHCjQ9ed95NqU",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM",
    releaseDate: "2022-01-06",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2734ab2520c2c77a1d66b9ee21d",
    trackName: "Every Angel is Terrifying",
    trackDuration: "02:47",
  },
  {
    id: "6a4GH1gljLL7VvmO9u5O92",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM",
    releaseDate: "2022-01-06",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2734ab2520c2c77a1d66b9ee21d",
    trackName: "Don’t Break My Heart",
    trackDuration: "03:25",
  },
  {
    id: "5XbA7TAqsD0fj0dGBrbb0D",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM",
    releaseDate: "2022-01-06",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2734ab2520c2c77a1d66b9ee21d",
    trackName: "I Heard You’re Married (feat. Lil Wayne)",
    trackDuration: "04:23",
  },
  {
    id: "2D4dV2KXDTszzJ3p3cFqhA",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM",
    releaseDate: "2022-01-06",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2734ab2520c2c77a1d66b9ee21d",
    trackName: "Less Than Zero",
    trackDuration: "03:31",
  },
  {
    id: "1NlK2NtpuUazpziLhnJwEV",
    artistName: "The Weeknd",
    genres: ["pop"],
    popularity: 97,
    followers: 101829245,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
    albumsName: "Dawn FM",
    releaseDate: "2022-01-06",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b2734ab2520c2c77a1d66b9ee21d",
    trackName: "Phantom Regret by Jim",
    trackDuration: "02:59",
  },
  {
    id: "4K09vJ27xCOreumtSuU6Ao",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "An Evening With Silk Sonic",
    releaseDate: "2021-11-12",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273d0bbd3ea2ec554f17a6603cc",
    trackName: "Silk Sonic Intro",
    trackDuration: "01:03",
  },
  {
    id: "4pryE6cN2gFL1FVF5fYINl",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "An Evening With Silk Sonic",
    releaseDate: "2021-11-12",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273d0bbd3ea2ec554f17a6603cc",
    trackName: "Leave The Door Open",
    trackDuration: "04:02",
  },
  {
    id: "7suB6D6uKX5DfPukdGaz0W",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "An Evening With Silk Sonic",
    releaseDate: "2021-11-12",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273d0bbd3ea2ec554f17a6603cc",
    trackName: "Fly As Me",
    trackDuration: "03:39",
  },
  {
    id: "6jGAh1bFnXt1Muj9zeHveZ",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "An Evening With Silk Sonic",
    releaseDate: "2021-11-12",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273d0bbd3ea2ec554f17a6603cc",
    trackName: "After Last Night (with Thundercat & Bootsy Collins)",
    trackDuration: "04:09",
  },
  {
    id: "1oERlssLrpssCAY6Yqqs6c",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "An Evening With Silk Sonic",
    releaseDate: "2021-11-12",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273d0bbd3ea2ec554f17a6603cc",
    trackName: "Smokin Out The Window",
    trackDuration: "03:17",
  },
  {
    id: "5lka5RUbLVQGO94mKAPMRO",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "An Evening With Silk Sonic",
    releaseDate: "2021-11-12",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273d0bbd3ea2ec554f17a6603cc",
    trackName: "Put On A Smile",
    trackDuration: "04:15",
  },
  {
    id: "2K6vUau7bnZUamjbRSOOvJ",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "An Evening With Silk Sonic",
    releaseDate: "2021-11-12",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273d0bbd3ea2ec554f17a6603cc",
    trackName: "777",
    trackDuration: "02:45",
  },
  {
    id: "3WTWh2WDk4j8GUCGj4xfOd",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "An Evening With Silk Sonic",
    releaseDate: "2021-11-12",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273d0bbd3ea2ec554f17a6603cc",
    trackName: "Skate",
    trackDuration: "03:23",
  },
  {
    id: "2ALh2jqA7KldpHMUHvRomw",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "An Evening With Silk Sonic",
    releaseDate: "2021-11-12",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273d0bbd3ea2ec554f17a6603cc",
    trackName: "Love's Train",
    trackDuration: "05:07",
  },
  {
    id: "2NqyjfDXy0XfXCSPXMsKzi",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "An Evening With Silk Sonic",
    releaseDate: "2021-11-12",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273d0bbd3ea2ec554f17a6603cc",
    trackName: "Blast Off",
    trackDuration: "04:44",
  },
  {
    id: "6b8Be6ljOzmkOmFslEb23P",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "24K Magic",
    releaseDate: "2016-11-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273232711f7d66a1e19e89e28c5",
    trackName: "24K Magic",
    trackDuration: "03:45",
  },
  {
    id: "0mBKv9DkYfQHjdMcw2jdyI",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "24K Magic",
    releaseDate: "2016-11-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273232711f7d66a1e19e89e28c5",
    trackName: "Chunky",
    trackDuration: "03:06",
  },
  {
    id: "1I6pKIyaBp4OebTGLJpCCC",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "24K Magic",
    releaseDate: "2016-11-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273232711f7d66a1e19e89e28c5",
    trackName: "Perm",
    trackDuration: "03:30",
  },
  {
    id: "0KKkJNfGyhkQ5aFogxQAPU",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "24K Magic",
    releaseDate: "2016-11-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273232711f7d66a1e19e89e28c5",
    trackName: "That's What I Like",
    trackDuration: "03:26",
  },
  {
    id: "0kN8xEmgMW9mh7UmDYHlJP",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "24K Magic",
    releaseDate: "2016-11-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273232711f7d66a1e19e89e28c5",
    trackName: "Versace on the Floor",
    trackDuration: "04:21",
  },
  {
    id: "2mrZYZGmPFV3QOyYPZ1zsn",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "24K Magic",
    releaseDate: "2016-11-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273232711f7d66a1e19e89e28c5",
    trackName: "Straight up & Down",
    trackDuration: "03:18",
  },
  {
    id: "6ObpR8ek44tvWefQRcSo8K",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "24K Magic",
    releaseDate: "2016-11-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273232711f7d66a1e19e89e28c5",
    trackName: "Calling All My Lovelies",
    trackDuration: "04:10",
  },
  {
    id: "5XMkENs3GfeRza8MfVAhjK",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "24K Magic",
    releaseDate: "2016-11-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273232711f7d66a1e19e89e28c5",
    trackName: "Finesse",
    trackDuration: "03:11",
  },
  {
    id: "0B0tYbVp7pDQAqKDhgMeaL",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "24K Magic",
    releaseDate: "2016-11-17",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273232711f7d66a1e19e89e28c5",
    trackName: "Too Good to Say Goodbye",
    trackDuration: "04:41",
  },
  {
    id: "3G5iN5QBqMeXx3uZPy8tgB",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "Unorthodox Jukebox",
    releaseDate: "2012-12-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273926f43e7cce571e62720fd46",
    trackName: "Young Girls",
    trackDuration: "03:48",
  },
  {
    id: "3w3y8KPTfNeOKPiqUTakBh",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "Unorthodox Jukebox",
    releaseDate: "2012-12-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273926f43e7cce571e62720fd46",
    trackName: "Locked out of Heaven",
    trackDuration: "03:53",
  },
  {
    id: "2ih2U8ttFzCjnQ5njF3SrR",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "Unorthodox Jukebox",
    releaseDate: "2012-12-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273926f43e7cce571e62720fd46",
    trackName: "Gorilla",
    trackDuration: "04:04",
  },
  {
    id: "55h7vJchibLdUkxdlX3fK7",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "Unorthodox Jukebox",
    releaseDate: "2012-12-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273926f43e7cce571e62720fd46",
    trackName: "Treasure",
    trackDuration: "02:58",
  },
  {
    id: "30raivfq7rSt5nKltiHfzG",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "Unorthodox Jukebox",
    releaseDate: "2012-12-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273926f43e7cce571e62720fd46",
    trackName: "Moonshine",
    trackDuration: "03:48",
  },
  {
    id: "0nJW01T7XtvILxQgC5J7Wh",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "Unorthodox Jukebox",
    releaseDate: "2012-12-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273926f43e7cce571e62720fd46",
    trackName: "When I Was Your Man",
    trackDuration: "03:33",
  },
  {
    id: "0inMKhbKWOTDA9UBUAKoU6",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "Unorthodox Jukebox",
    releaseDate: "2012-12-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273926f43e7cce571e62720fd46",
    trackName: "Natalie",
    trackDuration: "03:45",
  },
  {
    id: "2tCPIp83mRXvVTytTAf1W4",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "Unorthodox Jukebox",
    releaseDate: "2012-12-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273926f43e7cce571e62720fd46",
    trackName: "Show Me",
    trackDuration: "03:27",
  },
  {
    id: "6FPQabaldvKE5cjqRfY9Os",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "Unorthodox Jukebox",
    releaseDate: "2012-12-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273926f43e7cce571e62720fd46",
    trackName: "Money Make Her Smile",
    trackDuration: "03:23",
  },
  {
    id: "7lXOqE38eCr979gp27O5wr",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "Unorthodox Jukebox",
    releaseDate: "2012-12-07",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273926f43e7cce571e62720fd46",
    trackName: "If I Knew",
    trackDuration: "02:12",
  },
  {
    id: "4lLtanYk6tkMvooU0tWzG8",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "Doo-Wops & Hooligans",
    releaseDate: "2010-05-11",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f60070dce96a2c1b70cf6ff0",
    trackName: "Grenade",
    trackDuration: "03:42",
  },
  {
    id: "47Slg6LuqLaX0VodpSCvPt",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "Doo-Wops & Hooligans",
    releaseDate: "2010-05-11",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f60070dce96a2c1b70cf6ff0",
    trackName: "Just the Way You Are",
    trackDuration: "03:40",
  },
  {
    id: "4LjkHlY5qDz0hhFJJH5M7a",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "Doo-Wops & Hooligans",
    releaseDate: "2010-05-11",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f60070dce96a2c1b70cf6ff0",
    trackName: "Our First Time",
    trackDuration: "04:03",
  },
  {
    id: "7hCNBVRhHzcsRAv0TQnOzq",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "Doo-Wops & Hooligans",
    releaseDate: "2010-05-11",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f60070dce96a2c1b70cf6ff0",
    trackName: "Runaway Baby",
    trackDuration: "02:28",
  },
  {
    id: "386RUes7n1uM1yfzgeUuwp",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "Doo-Wops & Hooligans",
    releaseDate: "2010-05-11",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f60070dce96a2c1b70cf6ff0",
    trackName: "The Lazy Song",
    trackDuration: "03:09",
  },
  {
    id: "6SKwQghsR8AISlxhcwyA9R",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "Doo-Wops & Hooligans",
    releaseDate: "2010-05-11",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f60070dce96a2c1b70cf6ff0",
    trackName: "Marry You",
    trackDuration: "03:50",
  },
  {
    id: "1wVuPmvt6AWvTL5W2GJnzZ",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "Doo-Wops & Hooligans",
    releaseDate: "2010-05-11",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f60070dce96a2c1b70cf6ff0",
    trackName: "Talking to the Moon",
    trackDuration: "03:37",
  },
  {
    id: "1ewMCmw7qCb5a9ttqiyemu",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "Doo-Wops & Hooligans",
    releaseDate: "2010-05-11",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f60070dce96a2c1b70cf6ff0",
    trackName: "Liquor Store Blues (feat. Damian Marley)",
    trackDuration: "03:49",
  },
  {
    id: "3B5UbSndRz907IZhhmUfLi",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "Doo-Wops & Hooligans",
    releaseDate: "2010-05-11",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f60070dce96a2c1b70cf6ff0",
    trackName: "Count on Me",
    trackDuration: "03:17",
  },
  {
    id: "78Z199FfQHt4VpnJzlYaIe",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "Doo-Wops & Hooligans",
    releaseDate: "2010-05-11",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f60070dce96a2c1b70cf6ff0",
    trackName: "The Other Side (feat. CeeLo Green and B.o.B)",
    trackDuration: "03:48",
  },
  {
    id: "3P4v70V3Zt804r2c9dZivK",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "Doo-Wops & Hooligans",
    releaseDate: "2010-05-11",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f60070dce96a2c1b70cf6ff0",
    trackName: "Somewhere in Brooklyn",
    trackDuration: "03:01",
  },
  {
    id: "6YKT5HoPwjTwhHiCNQsBMK",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "Doo-Wops & Hooligans",
    releaseDate: "2010-05-11",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f60070dce96a2c1b70cf6ff0",
    trackName: "Talking to the Moon - Acoustic Piano",
    trackDuration: "03:37",
  },
  {
    id: "2FauI2onZLXgsr9dz6HWKn",
    artistName: "Bruno Mars",
    genres: ["pop"],
    popularity: 95,
    followers: 69450978,
    artistsImageUrl:
      "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    albumsName: "Fat Juicy & Wet",
    releaseDate: "2025-01-24",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f922561230918e636f4e130c",
    trackName: "Fat Juicy & Wet",
    trackDuration: "02:21",
  },
];

const AlbumComponent = () => {
  const [loading, setLoading] = useState(false);

  // ✅ Firestore에 여러 개 데이터 추가하는 함수
  const addMultipleAlbums = async () => {
    setLoading(true);
    try {
      const albumCollection = collection(firestore, "Album"); // 🔹 컬렉션 참조 가져오기

      // ✅ Firestore에 저장할 앨범 리스트 확인
      console.log(`추가할 앨범 개수: ${Albums.length}개`);

      // ✅ Firestore에 데이터 추가 (문서 ID 자동 생성)

      // const albumPromises = Albums.map((Albums) => {
      //   const albumSizeKB = JSON.stringify(Albums).length / 1024;
      //   console.log(
      //     `📦 저장할 앨범: ${Albums.name}, 데이터 크기: ${albumSizeKB.toFixed(
      //       2
      //     )} KB`
      //   );

      //   return addDoc(albumCollection, Albums).then(() => {
      //     console.log(`✅ Firestore에 저장 완료: ${Albums.name}`);
      //   });
      // });

      const albumPromises = Albums.map(async (album) => {
        const albumDocRef = doc(albumCollection, album.id); // ID를 직접 지정
        const docSnapshot = await setDoc(albumDocRef, album);

        console.log(`✅ Firestore에 저장 완료: ${album.albumsName}`);
      });

      // 모든 앨범이 저장될 때까지 대기
      await Promise.all(albumPromises);

      console.log("🚀 모든 앨범이 Firestore에 추가됨!");
    } catch (error) {
      console.error("❌ 데이터 추가 중 오류 발생:", error);
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>📀 Firestore에 앨범 추가하기</h2>
      <button
        onClick={addMultipleAlbums}
        disabled={loading}
        style={{
          border: "1px solid white",
          backgroundColor: "gray",
          color: "black",
          padding: "5px 10px",
        }}
      >
        {loading ? "추가 중..." : "앨범 추가"}
      </button>
    </div>
  );
};

export default AlbumComponent;
