import React from "react";
import styles from "./Tracks.module.css";

function Track({ name, id, album, popularity }) {
  return (
    <li key={id} className={styles.track}>
      <h3>{name}</h3>
      <p>{album.name}</p>
      <p>{popularity}</p>
    </li>
  );
}

export default function Tracks({ id, tracks }) {
  return <ol className={styles.tracks}>{tracks.map(Track)}</ol>;
}

Tracks.defaultProps = {
  tracks: [
    {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz",
            },
            href: "https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz",
            id: "6XyY86QOPPrYVGvF9ch6wz",
            name: "Linkin Park",
            type: "artist",
            uri: "spotify:artist:6XyY86QOPPrYVGvF9ch6wz",
          },
        ],
        external_urls: {
          spotify: "https://open.spotify.com/album/6hPkbAV3ZXpGZBGUvL6jVM",
        },
        href: "https://api.spotify.com/v1/albums/6hPkbAV3ZXpGZBGUvL6jVM",
        id: "6hPkbAV3ZXpGZBGUvL6jVM",
        images: [
          {
            height: 640,
            url:
              "https://i.scdn.co/image/66ff51342a9b250bf5b998fd0ec8e977671468bc",
            width: 640,
          },
          {
            height: 300,
            url:
              "https://i.scdn.co/image/bec4a40aa4ac10b3e5518cf1dcbca33d1e5121ec",
            width: 300,
          },
          {
            height: 64,
            url:
              "https://i.scdn.co/image/9b5e12a4d057a8b4313842ee481a9d8ea82945cd",
            width: 64,
          },
        ],
        name: "Hybrid Theory (Bonus Edition)",
        release_date: "2000-10-24",
        release_date_precision: "day",
        total_tracks: 15,
        type: "album",
        uri: "spotify:album:6hPkbAV3ZXpGZBGUvL6jVM",
      },
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz",
          },
          href: "https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz",
          id: "6XyY86QOPPrYVGvF9ch6wz",
          name: "Linkin Park",
          type: "artist",
          uri: "spotify:artist:6XyY86QOPPrYVGvF9ch6wz",
        },
      ],
      disc_number: 1,
      duration_ms: 216933,
      explicit: false,
      external_ids: {
        isrc: "USWB10002407",
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/60a0Rd6pjrkxjPbaKzXjfq",
      },
      href: "https://api.spotify.com/v1/tracks/60a0Rd6pjrkxjPbaKzXjfq",
      id: "60a0Rd6pjrkxjPbaKzXjfq",
      is_local: false,
      is_playable: true,
      name: "In the End",
      popularity: 82,
      preview_url:
        "https://p.scdn.co/mp3-preview/993540fd7aa1a0a44bb0d1b2c82092578c831b07?cid=37073364f98646ebb1f587b1a5747043",
      track_number: 8,
      type: "track",
      uri: "spotify:track:60a0Rd6pjrkxjPbaKzXjfq",
    },
    {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz",
            },
            href: "https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz",
            id: "6XyY86QOPPrYVGvF9ch6wz",
            name: "Linkin Park",
            type: "artist",
            uri: "spotify:artist:6XyY86QOPPrYVGvF9ch6wz",
          },
        ],
        external_urls: {
          spotify: "https://open.spotify.com/album/4Gfnly5CzMJQqkUFfoHaP3",
        },
        href: "https://api.spotify.com/v1/albums/4Gfnly5CzMJQqkUFfoHaP3",
        id: "4Gfnly5CzMJQqkUFfoHaP3",
        images: [
          {
            height: 640,
            url:
              "https://i.scdn.co/image/c03090e1f4b09d79fd41855023460c02e13993a8",
            width: 640,
          },
          {
            height: 300,
            url:
              "https://i.scdn.co/image/493ffc4cc35274f4dd911e9beb3fea74e6fca21d",
            width: 300,
          },
          {
            height: 64,
            url:
              "https://i.scdn.co/image/83fba70a289eea805ec6243dbcd533eddf55e576",
            width: 64,
          },
        ],
        name: "Meteora",
        release_date: "2003-03-24",
        release_date_precision: "day",
        total_tracks: 13,
        type: "album",
        uri: "spotify:album:4Gfnly5CzMJQqkUFfoHaP3",
      },
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz",
          },
          href: "https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz",
          id: "6XyY86QOPPrYVGvF9ch6wz",
          name: "Linkin Park",
          type: "artist",
          uri: "spotify:artist:6XyY86QOPPrYVGvF9ch6wz",
        },
      ],
      disc_number: 1,
      duration_ms: 185586,
      explicit: false,
      external_ids: {
        isrc: "USWB10300474",
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/2nLtzopw4rPReszdYBJU6h",
      },
      href: "https://api.spotify.com/v1/tracks/2nLtzopw4rPReszdYBJU6h",
      id: "2nLtzopw4rPReszdYBJU6h",
      is_local: false,
      is_playable: true,
      name: "Numb",
      popularity: 80,
      preview_url:
        "https://p.scdn.co/mp3-preview/e6ccf7717f8a167bfea4afc1bf7da1a0cd707fbb?cid=37073364f98646ebb1f587b1a5747043",
      track_number: 13,
      type: "track",
      uri: "spotify:track:2nLtzopw4rPReszdYBJU6h",
    },
    {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz",
            },
            href: "https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz",
            id: "6XyY86QOPPrYVGvF9ch6wz",
            name: "Linkin Park",
            type: "artist",
            uri: "spotify:artist:6XyY86QOPPrYVGvF9ch6wz",
          },
        ],
        external_urls: {
          spotify: "https://open.spotify.com/album/2tlTBLz2w52rpGCLBGyGw6",
        },
        href: "https://api.spotify.com/v1/albums/2tlTBLz2w52rpGCLBGyGw6",
        id: "2tlTBLz2w52rpGCLBGyGw6",
        images: [
          {
            height: 640,
            url:
              "https://i.scdn.co/image/deb48b2781de449175ff7865da3bb249652fc28f",
            width: 640,
          },
          {
            height: 300,
            url:
              "https://i.scdn.co/image/25c88542f89cfcd842e62b6c3851518fe0eca6f6",
            width: 300,
          },
          {
            height: 64,
            url:
              "https://i.scdn.co/image/98ab8557be40ee514e38af4f6f1f7af8f5c447fc",
            width: 64,
          },
        ],
        name: "Minutes to Midnight",
        release_date: "2007-05-14",
        release_date_precision: "day",
        total_tracks: 12,
        type: "album",
        uri: "spotify:album:2tlTBLz2w52rpGCLBGyGw6",
      },
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz",
          },
          href: "https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz",
          id: "6XyY86QOPPrYVGvF9ch6wz",
          name: "Linkin Park",
          type: "artist",
          uri: "spotify:artist:6XyY86QOPPrYVGvF9ch6wz",
        },
      ],
      disc_number: 1,
      duration_ms: 205613,
      explicit: false,
      external_ids: {
        isrc: "USWB10700721",
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/18lR4BzEs7e3qzc0KVkTpU",
      },
      href: "https://api.spotify.com/v1/tracks/18lR4BzEs7e3qzc0KVkTpU",
      id: "18lR4BzEs7e3qzc0KVkTpU",
      is_local: false,
      is_playable: true,
      name: "What I've Done",
      popularity: 76,
      preview_url:
        "https://p.scdn.co/mp3-preview/b2bdf31db7c3a90dfa8f5c7539f8832c4089afe8?cid=37073364f98646ebb1f587b1a5747043",
      track_number: 6,
      type: "track",
      uri: "spotify:track:18lR4BzEs7e3qzc0KVkTpU",
    },
    {
      album: {
        album_type: "single",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/3nFkdlSjzX9mRTtwJOzDYB",
            },
            href: "https://api.spotify.com/v1/artists/3nFkdlSjzX9mRTtwJOzDYB",
            id: "3nFkdlSjzX9mRTtwJOzDYB",
            name: "JAY Z",
            type: "artist",
            uri: "spotify:artist:3nFkdlSjzX9mRTtwJOzDYB",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz",
            },
            href: "https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz",
            id: "6XyY86QOPPrYVGvF9ch6wz",
            name: "Linkin Park",
            type: "artist",
            uri: "spotify:artist:6XyY86QOPPrYVGvF9ch6wz",
          },
        ],
        external_urls: {
          spotify: "https://open.spotify.com/album/4lhyg7YGQagE8FT8cZBqyw",
        },
        href: "https://api.spotify.com/v1/albums/4lhyg7YGQagE8FT8cZBqyw",
        id: "4lhyg7YGQagE8FT8cZBqyw",
        images: [
          {
            height: 640,
            url:
              "https://i.scdn.co/image/c048e9b1fb0d3ae737cf4ae322162684331b1e0b",
            width: 640,
          },
          {
            height: 300,
            url:
              "https://i.scdn.co/image/67ae5bbdac9a8fc06a4b2df77136438a7380e9f7",
            width: 300,
          },
          {
            height: 64,
            url:
              "https://i.scdn.co/image/26e48f6cf8f24c74e68e44dc52079e1e9cfc8a57",
            width: 64,
          },
        ],
        name: "Numb/Encore: MTV Ultimate Mash-Ups Presents Collision Course",
        release_date: "2004-11-30",
        release_date_precision: "day",
        total_tracks: 6,
        type: "album",
        uri: "spotify:album:4lhyg7YGQagE8FT8cZBqyw",
      },
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/3nFkdlSjzX9mRTtwJOzDYB",
          },
          href: "https://api.spotify.com/v1/artists/3nFkdlSjzX9mRTtwJOzDYB",
          id: "3nFkdlSjzX9mRTtwJOzDYB",
          name: "JAY Z",
          type: "artist",
          uri: "spotify:artist:3nFkdlSjzX9mRTtwJOzDYB",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz",
          },
          href: "https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz",
          id: "6XyY86QOPPrYVGvF9ch6wz",
          name: "Linkin Park",
          type: "artist",
          uri: "spotify:artist:6XyY86QOPPrYVGvF9ch6wz",
        },
      ],
      disc_number: 1,
      duration_ms: 205733,
      explicit: true,
      external_ids: {
        isrc: "USWB10403681",
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/5sNESr6pQfIhL3krM8CtZn",
      },
      href: "https://api.spotify.com/v1/tracks/5sNESr6pQfIhL3krM8CtZn",
      id: "5sNESr6pQfIhL3krM8CtZn",
      is_local: false,
      is_playable: true,
      name: "Numb / Encore",
      popularity: 74,
      preview_url:
        "https://p.scdn.co/mp3-preview/0db4038760aa7b37213a9cb7497aaa808cab960f?cid=37073364f98646ebb1f587b1a5747043",
      track_number: 1,
      type: "track",
      uri: "spotify:track:5sNESr6pQfIhL3krM8CtZn",
    },
    {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz",
            },
            href: "https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz",
            id: "6XyY86QOPPrYVGvF9ch6wz",
            name: "Linkin Park",
            type: "artist",
            uri: "spotify:artist:6XyY86QOPPrYVGvF9ch6wz",
          },
        ],
        external_urls: {
          spotify: "https://open.spotify.com/album/5Eevxp2BCbWq25ZdiXRwYd",
        },
        href: "https://api.spotify.com/v1/albums/5Eevxp2BCbWq25ZdiXRwYd",
        id: "5Eevxp2BCbWq25ZdiXRwYd",
        images: [
          {
            height: 640,
            url:
              "https://i.scdn.co/image/24b1591bc4ecc8fe201465a9c1bf1af96c93224d",
            width: 640,
          },
          {
            height: 300,
            url:
              "https://i.scdn.co/image/4a5a7737db8a500dd89ff8dd5bb9d993f481c97b",
            width: 300,
          },
          {
            height: 64,
            url:
              "https://i.scdn.co/image/8dffc0613d103efc7255ce435f6ab7ebec022f84",
            width: 64,
          },
        ],
        name: "One More Light",
        release_date: "2017-05-19",
        release_date_precision: "day",
        total_tracks: 10,
        type: "album",
        uri: "spotify:album:5Eevxp2BCbWq25ZdiXRwYd",
      },
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz",
          },
          href: "https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz",
          id: "6XyY86QOPPrYVGvF9ch6wz",
          name: "Linkin Park",
          type: "artist",
          uri: "spotify:artist:6XyY86QOPPrYVGvF9ch6wz",
        },
      ],
      disc_number: 1,
      duration_ms: 255066,
      explicit: false,
      external_ids: {
        isrc: "USWB11700225",
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/3xXBsjrbG1xQIm1xv1cKOt",
      },
      href: "https://api.spotify.com/v1/tracks/3xXBsjrbG1xQIm1xv1cKOt",
      id: "3xXBsjrbG1xQIm1xv1cKOt",
      is_local: false,
      is_playable: true,
      name: "One More Light",
      popularity: 73,
      preview_url:
        "https://p.scdn.co/mp3-preview/7ea4eef2ed25e30cd90bbef3dc5ef3503ac1afeb?cid=37073364f98646ebb1f587b1a5747043",
      track_number: 9,
      type: "track",
      uri: "spotify:track:3xXBsjrbG1xQIm1xv1cKOt",
    },
    {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz",
            },
            href: "https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz",
            id: "6XyY86QOPPrYVGvF9ch6wz",
            name: "Linkin Park",
            type: "artist",
            uri: "spotify:artist:6XyY86QOPPrYVGvF9ch6wz",
          },
        ],
        external_urls: {
          spotify: "https://open.spotify.com/album/6hPkbAV3ZXpGZBGUvL6jVM",
        },
        href: "https://api.spotify.com/v1/albums/6hPkbAV3ZXpGZBGUvL6jVM",
        id: "6hPkbAV3ZXpGZBGUvL6jVM",
        images: [
          {
            height: 640,
            url:
              "https://i.scdn.co/image/66ff51342a9b250bf5b998fd0ec8e977671468bc",
            width: 640,
          },
          {
            height: 300,
            url:
              "https://i.scdn.co/image/bec4a40aa4ac10b3e5518cf1dcbca33d1e5121ec",
            width: 300,
          },
          {
            height: 64,
            url:
              "https://i.scdn.co/image/9b5e12a4d057a8b4313842ee481a9d8ea82945cd",
            width: 64,
          },
        ],
        name: "Hybrid Theory (Bonus Edition)",
        release_date: "2000-10-24",
        release_date_precision: "day",
        total_tracks: 15,
        type: "album",
        uri: "spotify:album:6hPkbAV3ZXpGZBGUvL6jVM",
      },
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz",
          },
          href: "https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz",
          id: "6XyY86QOPPrYVGvF9ch6wz",
          name: "Linkin Park",
          type: "artist",
          uri: "spotify:artist:6XyY86QOPPrYVGvF9ch6wz",
        },
      ],
      disc_number: 1,
      duration_ms: 157333,
      explicit: false,
      external_ids: {
        isrc: "USWB10002399",
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/3K4HG9evC7dg3N0R9cYqk4",
      },
      href: "https://api.spotify.com/v1/tracks/3K4HG9evC7dg3N0R9cYqk4",
      id: "3K4HG9evC7dg3N0R9cYqk4",
      is_local: false,
      is_playable: true,
      name: "One Step Closer",
      popularity: 72,
      preview_url:
        "https://p.scdn.co/mp3-preview/4859175e37ab4336af22f983fec6d2d126a2b1de?cid=37073364f98646ebb1f587b1a5747043",
      track_number: 2,
      type: "track",
      uri: "spotify:track:3K4HG9evC7dg3N0R9cYqk4",
    },
    {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz",
            },
            href: "https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz",
            id: "6XyY86QOPPrYVGvF9ch6wz",
            name: "Linkin Park",
            type: "artist",
            uri: "spotify:artist:6XyY86QOPPrYVGvF9ch6wz",
          },
        ],
        external_urls: {
          spotify: "https://open.spotify.com/album/6hPkbAV3ZXpGZBGUvL6jVM",
        },
        href: "https://api.spotify.com/v1/albums/6hPkbAV3ZXpGZBGUvL6jVM",
        id: "6hPkbAV3ZXpGZBGUvL6jVM",
        images: [
          {
            height: 640,
            url:
              "https://i.scdn.co/image/66ff51342a9b250bf5b998fd0ec8e977671468bc",
            width: 640,
          },
          {
            height: 300,
            url:
              "https://i.scdn.co/image/bec4a40aa4ac10b3e5518cf1dcbca33d1e5121ec",
            width: 300,
          },
          {
            height: 64,
            url:
              "https://i.scdn.co/image/9b5e12a4d057a8b4313842ee481a9d8ea82945cd",
            width: 64,
          },
        ],
        name: "Hybrid Theory (Bonus Edition)",
        release_date: "2000-10-24",
        release_date_precision: "day",
        total_tracks: 15,
        type: "album",
        uri: "spotify:album:6hPkbAV3ZXpGZBGUvL6jVM",
      },
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz",
          },
          href: "https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz",
          id: "6XyY86QOPPrYVGvF9ch6wz",
          name: "Linkin Park",
          type: "artist",
          uri: "spotify:artist:6XyY86QOPPrYVGvF9ch6wz",
        },
      ],
      disc_number: 1,
      duration_ms: 208960,
      explicit: false,
      external_ids: {
        isrc: "USWB10002405",
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/57BrRMwf9LrcmuOsyGilwr",
      },
      href: "https://api.spotify.com/v1/tracks/57BrRMwf9LrcmuOsyGilwr",
      id: "57BrRMwf9LrcmuOsyGilwr",
      is_local: false,
      is_playable: true,
      name: "Crawling",
      popularity: 72,
      preview_url:
        "https://p.scdn.co/mp3-preview/ac8e1d7003d8a38c063ff41aefea2bf954c59b19?cid=37073364f98646ebb1f587b1a5747043",
      track_number: 5,
      type: "track",
      uri: "spotify:track:57BrRMwf9LrcmuOsyGilwr",
    },
    {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz",
            },
            href: "https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz",
            id: "6XyY86QOPPrYVGvF9ch6wz",
            name: "Linkin Park",
            type: "artist",
            uri: "spotify:artist:6XyY86QOPPrYVGvF9ch6wz",
          },
        ],
        external_urls: {
          spotify: "https://open.spotify.com/album/2tlTBLz2w52rpGCLBGyGw6",
        },
        href: "https://api.spotify.com/v1/albums/2tlTBLz2w52rpGCLBGyGw6",
        id: "2tlTBLz2w52rpGCLBGyGw6",
        images: [
          {
            height: 640,
            url:
              "https://i.scdn.co/image/deb48b2781de449175ff7865da3bb249652fc28f",
            width: 640,
          },
          {
            height: 300,
            url:
              "https://i.scdn.co/image/25c88542f89cfcd842e62b6c3851518fe0eca6f6",
            width: 300,
          },
          {
            height: 64,
            url:
              "https://i.scdn.co/image/98ab8557be40ee514e38af4f6f1f7af8f5c447fc",
            width: 64,
          },
        ],
        name: "Minutes to Midnight",
        release_date: "2007-05-14",
        release_date_precision: "day",
        total_tracks: 12,
        type: "album",
        uri: "spotify:album:2tlTBLz2w52rpGCLBGyGw6",
      },
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz",
          },
          href: "https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz",
          id: "6XyY86QOPPrYVGvF9ch6wz",
          name: "Linkin Park",
          type: "artist",
          uri: "spotify:artist:6XyY86QOPPrYVGvF9ch6wz",
        },
      ],
      disc_number: 1,
      duration_ms: 166373,
      explicit: true,
      external_ids: {
        isrc: "USWB10701213",
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/0UFDKFqW2oGspYeYqo9wjA",
      },
      href: "https://api.spotify.com/v1/tracks/0UFDKFqW2oGspYeYqo9wjA",
      id: "0UFDKFqW2oGspYeYqo9wjA",
      is_local: false,
      is_playable: true,
      name: "Bleed It Out",
      popularity: 72,
      preview_url:
        "https://p.scdn.co/mp3-preview/04212367c04f73a6a81217b3cb81ad70288af8a5?cid=37073364f98646ebb1f587b1a5747043",
      track_number: 4,
      type: "track",
      uri: "spotify:track:0UFDKFqW2oGspYeYqo9wjA",
    },
    {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz",
            },
            href: "https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz",
            id: "6XyY86QOPPrYVGvF9ch6wz",
            name: "Linkin Park",
            type: "artist",
            uri: "spotify:artist:6XyY86QOPPrYVGvF9ch6wz",
          },
        ],
        external_urls: {
          spotify: "https://open.spotify.com/album/4XHIjbhjRmqWlosjj5rqSI",
        },
        href: "https://api.spotify.com/v1/albums/4XHIjbhjRmqWlosjj5rqSI",
        id: "4XHIjbhjRmqWlosjj5rqSI",
        images: [
          {
            height: 640,
            url:
              "https://i.scdn.co/image/967661595be2ffdd741e8e7c72cbd975dfc263b5",
            width: 640,
          },
          {
            height: 300,
            url:
              "https://i.scdn.co/image/1c6ab5f28338c09671ba8f0d71989ec2f22a9d23",
            width: 300,
          },
          {
            height: 64,
            url:
              "https://i.scdn.co/image/85957b735b208f2f33808007a747234279519cf1",
            width: 64,
          },
        ],
        name: "Living Things",
        release_date: "2012-06-20",
        release_date_precision: "day",
        total_tracks: 12,
        type: "album",
        uri: "spotify:album:4XHIjbhjRmqWlosjj5rqSI",
      },
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz",
          },
          href: "https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz",
          id: "6XyY86QOPPrYVGvF9ch6wz",
          name: "Linkin Park",
          type: "artist",
          uri: "spotify:artist:6XyY86QOPPrYVGvF9ch6wz",
        },
      ],
      disc_number: 1,
      duration_ms: 230253,
      explicit: false,
      external_ids: {
        isrc: "USWB11200587",
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/7oVEtyuv9NBmnytsCIsY5I",
      },
      href: "https://api.spotify.com/v1/tracks/7oVEtyuv9NBmnytsCIsY5I",
      id: "7oVEtyuv9NBmnytsCIsY5I",
      is_local: false,
      is_playable: true,
      name: "Burn It Down",
      popularity: 71,
      preview_url:
        "https://p.scdn.co/mp3-preview/34ae5b62f7758e3326a1c1964f5768e4ed0e27a8?cid=37073364f98646ebb1f587b1a5747043",
      track_number: 3,
      type: "track",
      uri: "spotify:track:7oVEtyuv9NBmnytsCIsY5I",
    },
    {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz",
            },
            href: "https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz",
            id: "6XyY86QOPPrYVGvF9ch6wz",
            name: "Linkin Park",
            type: "artist",
            uri: "spotify:artist:6XyY86QOPPrYVGvF9ch6wz",
          },
        ],
        external_urls: {
          spotify: "https://open.spotify.com/album/6hPkbAV3ZXpGZBGUvL6jVM",
        },
        href: "https://api.spotify.com/v1/albums/6hPkbAV3ZXpGZBGUvL6jVM",
        id: "6hPkbAV3ZXpGZBGUvL6jVM",
        images: [
          {
            height: 640,
            url:
              "https://i.scdn.co/image/66ff51342a9b250bf5b998fd0ec8e977671468bc",
            width: 640,
          },
          {
            height: 300,
            url:
              "https://i.scdn.co/image/bec4a40aa4ac10b3e5518cf1dcbca33d1e5121ec",
            width: 300,
          },
          {
            height: 64,
            url:
              "https://i.scdn.co/image/9b5e12a4d057a8b4313842ee481a9d8ea82945cd",
            width: 64,
          },
        ],
        name: "Hybrid Theory (Bonus Edition)",
        release_date: "2000-10-24",
        release_date_precision: "day",
        total_tracks: 15,
        type: "album",
        uri: "spotify:album:6hPkbAV3ZXpGZBGUvL6jVM",
      },
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz",
          },
          href: "https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz",
          id: "6XyY86QOPPrYVGvF9ch6wz",
          name: "Linkin Park",
          type: "artist",
          uri: "spotify:artist:6XyY86QOPPrYVGvF9ch6wz",
        },
      ],
      disc_number: 1,
      duration_ms: 184866,
      explicit: false,
      external_ids: {
        isrc: "USWB10002403",
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/1Vej0qeQ3ioKwpI6FUbRv1",
      },
      href: "https://api.spotify.com/v1/tracks/1Vej0qeQ3ioKwpI6FUbRv1",
      id: "1Vej0qeQ3ioKwpI6FUbRv1",
      is_local: false,
      is_playable: true,
      name: "Papercut",
      popularity: 71,
      preview_url:
        "https://p.scdn.co/mp3-preview/e3fffa13430292c5df046a768db90a03c61f643a?cid=37073364f98646ebb1f587b1a5747043",
      track_number: 1,
      type: "track",
      uri: "spotify:track:1Vej0qeQ3ioKwpI6FUbRv1",
    },
  ],
};
