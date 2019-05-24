import React from "react";
import { MdGroup, MdLock, MdPublic } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "./Playlists.module.css";

function Playlist({
  name,
  images,
  id,
  collaborative,
  public: isPublic,
  owner,
  tracks,
}) {
  const { total: totalTracks } = tracks;
  return (
    <Link to={`/playlists/${id}`} key={id}>
      <li className={styles.playlist}>
        <h3>{name}</h3>
        <img src={images[0].url} alt={name} />
        <p>By {owner.display_name}</p>
        <p>
          {totalTracks} {totalTracks === 1 ? "track" : "tracks"}
        </p>
        <h4 className={styles.badges}>
          {isPublic ? (
            <span className={styles.badge}>
              <MdPublic /> Public
            </span>
          ) : (
            <span className={styles.badge}>
              <MdLock /> Private
            </span>
          )}
          {collaborative ? (
            <span className={styles.badge}>
              <MdGroup /> Collaborative
            </span>
          ) : null}
        </h4>
      </li>
    </Link>
  );
}

export default function Playlists({ playlists }) {
  return <ul className={styles.playlists}>{playlists.map(Playlist)}</ul>;
}

Playlists.defaultProps = {
  playlists: [
    {
      collaborative: false,
      external_urls: {
        spotify: "https://open.spotify.com/playlist/6vH7OH6liNRa3rZEl5bVlv",
      },
      href: "https://api.spotify.com/v1/playlists/6vH7OH6liNRa3rZEl5bVlv",
      id: "6vH7OH6liNRa3rZEl5bVlv",
      images: [
        {
          height: null,
          url:
            "https://pl.scdn.co/images/pl/default/044fdf7e7d0ded2002832b4b4c30765a819c9cbf",
          width: null,
        },
      ],
      name: "Foo Slipknot Within",
      owner: {
        display_name: "David Villamizar",
        external_urls: {
          spotify: "https://open.spotify.com/user/davl3232",
        },
        href: "https://api.spotify.com/v1/users/davl3232",
        id: "davl3232",
        type: "user",
        uri: "spotify:user:davl3232",
      },
      primary_color: null,
      public: true,
      snapshot_id: "NCw2YzU5MzU0MDg2ZGE5OTgwMjE0YTBjNDc4MjlmYWYxMzg2Mjg3MGFh",
      tracks: {
        href:
          "https://api.spotify.com/v1/playlists/6vH7OH6liNRa3rZEl5bVlv/tracks",
        total: 80,
      },
      type: "playlist",
      uri: "spotify:playlist:6vH7OH6liNRa3rZEl5bVlv",
    },
    {
      collaborative: false,
      external_urls: {
        spotify: "https://open.spotify.com/playlist/3i4ha4jw9RlUKdgK3IvOKg",
      },
      href: "https://api.spotify.com/v1/playlists/3i4ha4jw9RlUKdgK3IvOKg",
      id: "3i4ha4jw9RlUKdgK3IvOKg",
      images: [
        {
          height: 640,
          url:
            "https://mosaic.scdn.co/640/224dc65b4e81e3d395c66f36cf2a141edf50de6652d83377fe9d7fc838deeb859499f3973adf903f60c2c1bd25c05d383fcd8ff478ceebea7e43a86d7c6208595c51ea89f9322af9cbaefd0cb0dd89e3",
          width: 640,
        },
        {
          height: 300,
          url:
            "https://mosaic.scdn.co/300/224dc65b4e81e3d395c66f36cf2a141edf50de6652d83377fe9d7fc838deeb859499f3973adf903f60c2c1bd25c05d383fcd8ff478ceebea7e43a86d7c6208595c51ea89f9322af9cbaefd0cb0dd89e3",
          width: 300,
        },
        {
          height: 60,
          url:
            "https://mosaic.scdn.co/60/224dc65b4e81e3d395c66f36cf2a141edf50de6652d83377fe9d7fc838deeb859499f3973adf903f60c2c1bd25c05d383fcd8ff478ceebea7e43a86d7c6208595c51ea89f9322af9cbaefd0cb0dd89e3",
          width: 60,
        },
      ],
      name: "Liked from Radio",
      owner: {
        display_name: "David Villamizar",
        external_urls: {
          spotify: "https://open.spotify.com/user/davl3232",
        },
        href: "https://api.spotify.com/v1/users/davl3232",
        id: "davl3232",
        type: "user",
        uri: "spotify:user:davl3232",
      },
      primary_color: null,
      public: false,
      snapshot_id:
        "MjYsYzJiNDQ3MjY5MTM0MmQzMjEzOTI1MzNkOGJhODgwNjM1ZWQ0M2UyMA==",
      tracks: {
        href:
          "https://api.spotify.com/v1/playlists/3i4ha4jw9RlUKdgK3IvOKg/tracks",
        total: 25,
      },
      type: "playlist",
      uri: "spotify:playlist:3i4ha4jw9RlUKdgK3IvOKg",
    },
    {
      collaborative: false,
      external_urls: {
        spotify: "https://open.spotify.com/playlist/53mEDuzsUscTOugiiWLN9F",
      },
      href: "https://api.spotify.com/v1/playlists/53mEDuzsUscTOugiiWLN9F",
      id: "53mEDuzsUscTOugiiWLN9F",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/9a0ef2cbc0388e12b08a9f7915011440ee223835",
          width: 640,
        },
      ],
      name: "SoundHound",
      owner: {
        display_name: "David Villamizar",
        external_urls: {
          spotify: "https://open.spotify.com/user/davl3232",
        },
        href: "https://api.spotify.com/v1/users/davl3232",
        id: "davl3232",
        type: "user",
        uri: "spotify:user:davl3232",
      },
      primary_color: null,
      public: true,
      snapshot_id: "NSxhNDIwNDUyMTQyNjBmZjZhOGFjNjUyYTRhNDc5YzAwYjE1ZDk4NWNk",
      tracks: {
        href:
          "https://api.spotify.com/v1/playlists/53mEDuzsUscTOugiiWLN9F/tracks",
        total: 4,
      },
      type: "playlist",
      uri: "spotify:playlist:53mEDuzsUscTOugiiWLN9F",
    },
    {
      collaborative: false,
      external_urls: {
        spotify: "https://open.spotify.com/playlist/1GO2SVvJsF7MPr3H43F356",
      },
      href: "https://api.spotify.com/v1/playlists/1GO2SVvJsF7MPr3H43F356",
      id: "1GO2SVvJsF7MPr3H43F356",
      images: [
        {
          height: 640,
          url:
            "https://mosaic.scdn.co/640/14c4e46936cf679d709c5f975ea7e398b69fe9b1889f03a62e32ce967e98e93687c1e695bfc6bf0a9edcdbce9a63d35c77e4bd7eae5ae126e5036baad02b28624f3d5373932ac92477d3f4d326313766",
          width: 640,
        },
        {
          height: 300,
          url:
            "https://mosaic.scdn.co/300/14c4e46936cf679d709c5f975ea7e398b69fe9b1889f03a62e32ce967e98e93687c1e695bfc6bf0a9edcdbce9a63d35c77e4bd7eae5ae126e5036baad02b28624f3d5373932ac92477d3f4d326313766",
          width: 300,
        },
        {
          height: 60,
          url:
            "https://mosaic.scdn.co/60/14c4e46936cf679d709c5f975ea7e398b69fe9b1889f03a62e32ce967e98e93687c1e695bfc6bf0a9edcdbce9a63d35c77e4bd7eae5ae126e5036baad02b28624f3d5373932ac92477d3f4d326313766",
          width: 60,
        },
      ],
      name: "heup",
      owner: {
        display_name: "David Villamizar",
        external_urls: {
          spotify: "https://open.spotify.com/user/davl3232",
        },
        href: "https://api.spotify.com/v1/users/davl3232",
        id: "davl3232",
        type: "user",
        uri: "spotify:user:davl3232",
      },
      primary_color: null,
      public: false,
      snapshot_id:
        "OTgsMjFmMmVhYzJmY2ZkOTFjOWE1N2VjNmU1MTdhYTE2ZWFkYzU4MTYxNw==",
      tracks: {
        href:
          "https://api.spotify.com/v1/playlists/1GO2SVvJsF7MPr3H43F356/tracks",
        total: 94,
      },
      type: "playlist",
      uri: "spotify:playlist:1GO2SVvJsF7MPr3H43F356",
    },
    {
      collaborative: false,
      external_urls: {
        spotify: "https://open.spotify.com/playlist/7FyCwKWosGmVlqRS2qjue0",
      },
      href: "https://api.spotify.com/v1/playlists/7FyCwKWosGmVlqRS2qjue0",
      id: "7FyCwKWosGmVlqRS2qjue0",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/04135601295e2a8c655339cf01987bcc7a0b0b87",
          width: 640,
        },
      ],
      name: "0x53414C5341",
      owner: {
        display_name: "David Villamizar",
        external_urls: {
          spotify: "https://open.spotify.com/user/davl3232",
        },
        href: "https://api.spotify.com/v1/users/davl3232",
        id: "davl3232",
        type: "user",
        uri: "spotify:user:davl3232",
      },
      primary_color: null,
      public: false,
      snapshot_id: "MyxiNTU2ODBjYzQ0OGY2NDYyNmRlZTZkOWQyZDdmODVhZjgxOTAzZDAy",
      tracks: {
        href:
          "https://api.spotify.com/v1/playlists/7FyCwKWosGmVlqRS2qjue0/tracks",
        total: 1,
      },
      type: "playlist",
      uri: "spotify:playlist:7FyCwKWosGmVlqRS2qjue0",
    },
    {
      collaborative: false,
      external_urls: {
        spotify: "https://open.spotify.com/playlist/37i9dQZEVXcHxfVEv0EcbO",
      },
      href: "https://api.spotify.com/v1/playlists/37i9dQZEVXcHxfVEv0EcbO",
      id: "37i9dQZEVXcHxfVEv0EcbO",
      images: [
        {
          height: null,
          url:
            "https://pl.scdn.co/images/pl/default/77cf36bc4b5b1c7b1662db444ed397eea1c48212",
          width: null,
        },
      ],
      name: "Discover Weekly",
      owner: {
        display_name: "Spotify",
        external_urls: {
          spotify: "https://open.spotify.com/user/spotify",
        },
        href: "https://api.spotify.com/v1/users/spotify",
        id: "spotify",
        type: "user",
        uri: "spotify:user:spotify",
      },
      primary_color: null,
      public: false,
      snapshot_id:
        "MjU5NzE4NDAsMDAwMDAwMDBiYWQ4MTA4NWViOWVmMWRkMzEzZGFmNTI5OTRkMWU3Mg==",
      tracks: {
        href:
          "https://api.spotify.com/v1/playlists/37i9dQZEVXcHxfVEv0EcbO/tracks",
        total: 30,
      },
      type: "playlist",
      uri: "spotify:playlist:37i9dQZEVXcHxfVEv0EcbO",
    },
    {
      collaborative: false,
      external_urls: {
        spotify: "https://open.spotify.com/playlist/3jXjw77o12VQyqSW3PFDF6",
      },
      href: "https://api.spotify.com/v1/playlists/3jXjw77o12VQyqSW3PFDF6",
      id: "3jXjw77o12VQyqSW3PFDF6",
      images: [
        {
          height: 640,
          url:
            "https://mosaic.scdn.co/640/12c7d54c6896e2a53a8802657d2cae24bf4d373329655d0e0d033ed84b4e100cc139382f90080ef42caa8d2fface94ee9d58f7005e54384a0fc9c17a76f6b00fba3902837e6d2d10576fdc5586200f25",
          width: 640,
        },
        {
          height: 300,
          url:
            "https://mosaic.scdn.co/300/12c7d54c6896e2a53a8802657d2cae24bf4d373329655d0e0d033ed84b4e100cc139382f90080ef42caa8d2fface94ee9d58f7005e54384a0fc9c17a76f6b00fba3902837e6d2d10576fdc5586200f25",
          width: 300,
        },
        {
          height: 60,
          url:
            "https://mosaic.scdn.co/60/12c7d54c6896e2a53a8802657d2cae24bf4d373329655d0e0d033ed84b4e100cc139382f90080ef42caa8d2fface94ee9d58f7005e54384a0fc9c17a76f6b00fba3902837e6d2d10576fdc5586200f25",
          width: 60,
        },
      ],
      name: "prowets",
      owner: {
        display_name: "David Villamizar",
        external_urls: {
          spotify: "https://open.spotify.com/user/davl3232",
        },
        href: "https://api.spotify.com/v1/users/davl3232",
        id: "davl3232",
        type: "user",
        uri: "spotify:user:davl3232",
      },
      primary_color: null,
      public: false,
      snapshot_id:
        "NzcsMjkxYmI3NjUwMDQxNTlmMWRjZTRlYjA5ZWQ2YzEzMDViYjM2ZDI5OA==",
      tracks: {
        href:
          "https://api.spotify.com/v1/playlists/3jXjw77o12VQyqSW3PFDF6/tracks",
        total: 73,
      },
      type: "playlist",
      uri: "spotify:playlist:3jXjw77o12VQyqSW3PFDF6",
    },
    {
      collaborative: false,
      external_urls: {
        spotify: "https://open.spotify.com/playlist/3OHU0qt0tAARdn2Ffn0m6D",
      },
      href: "https://api.spotify.com/v1/playlists/3OHU0qt0tAARdn2Ffn0m6D",
      id: "3OHU0qt0tAARdn2Ffn0m6D",
      images: [
        {
          height: 640,
          url:
            "https://mosaic.scdn.co/640/05bf3903d6354e2cd9891caf3003343914cf1112155929d96c9144ce59814845ece9e5938a9272233b74b1b2557ec74868bea0dd5c99ed081d32b6f482ea041a0c8761445299da55e506995ca1697c29",
          width: 640,
        },
        {
          height: 300,
          url:
            "https://mosaic.scdn.co/300/05bf3903d6354e2cd9891caf3003343914cf1112155929d96c9144ce59814845ece9e5938a9272233b74b1b2557ec74868bea0dd5c99ed081d32b6f482ea041a0c8761445299da55e506995ca1697c29",
          width: 300,
        },
        {
          height: 60,
          url:
            "https://mosaic.scdn.co/60/05bf3903d6354e2cd9891caf3003343914cf1112155929d96c9144ce59814845ece9e5938a9272233b74b1b2557ec74868bea0dd5c99ed081d32b6f482ea041a0c8761445299da55e506995ca1697c29",
          width: 60,
        },
      ],
      name: "mixtape",
      owner: {
        display_name: "David Villamizar",
        external_urls: {
          spotify: "https://open.spotify.com/user/davl3232",
        },
        href: "https://api.spotify.com/v1/users/davl3232",
        id: "davl3232",
        type: "user",
        uri: "spotify:user:davl3232",
      },
      primary_color: null,
      public: false,
      snapshot_id:
        "ODcyLDEyNWM0ZjNlMTkxYzQ0MjIwZjkwYTEzNDg4ZTQzYzE1OWQ2ZDdjYTU=",
      tracks: {
        href:
          "https://api.spotify.com/v1/playlists/3OHU0qt0tAARdn2Ffn0m6D/tracks",
        total: 808,
      },
      type: "playlist",
      uri: "spotify:playlist:3OHU0qt0tAARdn2Ffn0m6D",
    },
    {
      collaborative: false,
      external_urls: {
        spotify: "https://open.spotify.com/playlist/42XmHyebxYFHcnkvC8UdQr",
      },
      href: "https://api.spotify.com/v1/playlists/42XmHyebxYFHcnkvC8UdQr",
      id: "42XmHyebxYFHcnkvC8UdQr",
      images: [
        {
          height: 640,
          url:
            "https://mosaic.scdn.co/640/4e9c7731373ba52446f4de7f5d0af6c51007f6fc73b4f0ec5afb0716f65e9f121e7edbe92c46a908952bf98d9d5b3d8c58abd9cd8e790d5e48a6ebcef5275187c6423ef3c5a82669291e14b7c8fd2675",
          width: 640,
        },
        {
          height: 300,
          url:
            "https://mosaic.scdn.co/300/4e9c7731373ba52446f4de7f5d0af6c51007f6fc73b4f0ec5afb0716f65e9f121e7edbe92c46a908952bf98d9d5b3d8c58abd9cd8e790d5e48a6ebcef5275187c6423ef3c5a82669291e14b7c8fd2675",
          width: 300,
        },
        {
          height: 60,
          url:
            "https://mosaic.scdn.co/60/4e9c7731373ba52446f4de7f5d0af6c51007f6fc73b4f0ec5afb0716f65e9f121e7edbe92c46a908952bf98d9d5b3d8c58abd9cd8e790d5e48a6ebcef5275187c6423ef3c5a82669291e14b7c8fd2675",
          width: 60,
        },
      ],
      name: "Starred",
      owner: {
        display_name: "David Villamizar",
        external_urls: {
          spotify: "https://open.spotify.com/user/davl3232",
        },
        href: "https://api.spotify.com/v1/users/davl3232",
        id: "davl3232",
        type: "user",
        uri: "spotify:user:davl3232",
      },
      primary_color: null,
      public: false,
      snapshot_id: "MywyMWJhYjE3M2VhNzliMzEzMWZjMDFmYzliMDgxMDE3Y2YyZDZmMWIz",
      tracks: {
        href:
          "https://api.spotify.com/v1/playlists/42XmHyebxYFHcnkvC8UdQr/tracks",
        total: 4,
      },
      type: "playlist",
      uri: "spotify:playlist:42XmHyebxYFHcnkvC8UdQr",
    },
    {
      collaborative: false,
      external_urls: {
        spotify: "https://open.spotify.com/playlist/6RCpRNrcPKDVxGGmyzcH4T",
      },
      href: "https://api.spotify.com/v1/playlists/6RCpRNrcPKDVxGGmyzcH4T",
      id: "6RCpRNrcPKDVxGGmyzcH4T",
      images: [
        {
          height: 640,
          url:
            "https://mosaic.scdn.co/640/3b74b1b2557ec74868bea0dd5c99ed081d32b6f483181f3fa385ac083b74ff40c848d47c79eb51cfd02f36627b702694f6cd4730ad4996ad280c2d26fffb0c184489ec33c84045bacaa60ecadeb461c7",
          width: 640,
        },
        {
          height: 300,
          url:
            "https://mosaic.scdn.co/300/3b74b1b2557ec74868bea0dd5c99ed081d32b6f483181f3fa385ac083b74ff40c848d47c79eb51cfd02f36627b702694f6cd4730ad4996ad280c2d26fffb0c184489ec33c84045bacaa60ecadeb461c7",
          width: 300,
        },
        {
          height: 60,
          url:
            "https://mosaic.scdn.co/60/3b74b1b2557ec74868bea0dd5c99ed081d32b6f483181f3fa385ac083b74ff40c848d47c79eb51cfd02f36627b702694f6cd4730ad4996ad280c2d26fffb0c184489ec33c84045bacaa60ecadeb461c7",
          width: 60,
        },
      ],
      name: "ps4",
      owner: {
        display_name: "David Villamizar",
        external_urls: {
          spotify: "https://open.spotify.com/user/davl3232",
        },
        href: "https://api.spotify.com/v1/users/davl3232",
        id: "davl3232",
        type: "user",
        uri: "spotify:user:davl3232",
      },
      primary_color: null,
      public: false,
      snapshot_id:
        "MjMsMWU1ZTA1YzZiODUzMDBiMDE4NzUxZGVkZWM4N2I0ZTNlNGRhNzUyZA==",
      tracks: {
        href:
          "https://api.spotify.com/v1/playlists/6RCpRNrcPKDVxGGmyzcH4T/tracks",
        total: 14,
      },
      type: "playlist",
      uri: "spotify:playlist:6RCpRNrcPKDVxGGmyzcH4T",
    },
    {
      collaborative: false,
      external_urls: {
        spotify: "https://open.spotify.com/playlist/37i9dQZF1DXcfZ6moR6J0G",
      },
      href: "https://api.spotify.com/v1/playlists/37i9dQZF1DXcfZ6moR6J0G",
      id: "37i9dQZF1DXcfZ6moR6J0G",
      images: [
        {
          height: null,
          url:
            "https://pl.scdn.co/images/pl/default/06332257d210e5b2a7066fc434710f3520981b20",
          width: null,
        },
      ],
      name: "Nu Metal Generation",
      owner: {
        display_name: "Spotify",
        external_urls: {
          spotify: "https://open.spotify.com/user/spotify",
        },
        href: "https://api.spotify.com/v1/users/spotify",
        id: "spotify",
        type: "user",
        uri: "spotify:user:spotify",
      },
      primary_color: null,
      public: false,
      snapshot_id:
        "MTU1ODY1MzU1NSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
      tracks: {
        href:
          "https://api.spotify.com/v1/playlists/37i9dQZF1DXcfZ6moR6J0G/tracks",
        total: 50,
      },
      type: "playlist",
      uri: "spotify:playlist:37i9dQZF1DXcfZ6moR6J0G",
    },
    {
      collaborative: false,
      external_urls: {
        spotify: "https://open.spotify.com/playlist/0D5oNpkqZxdmklYvWwDKYI",
      },
      href: "https://api.spotify.com/v1/playlists/0D5oNpkqZxdmklYvWwDKYI",
      id: "0D5oNpkqZxdmklYvWwDKYI",
      images: [
        {
          height: null,
          url:
            "https://pl.scdn.co/images/pl/default/5dac9f78361a61c6f1159664bbfa708f0af3c8b4",
          width: null,
        },
      ],
      name: "Alternative Rock 90's, 00's & 10's",
      owner: {
        display_name: "Jose Manuel Lopez Escribano",
        external_urls: {
          spotify: "https://open.spotify.com/user/jmlope",
        },
        href: "https://api.spotify.com/v1/users/jmlope",
        id: "jmlope",
        type: "user",
        uri: "spotify:user:jmlope",
      },
      primary_color: null,
      public: false,
      snapshot_id:
        "NjA2LDgxYjE4ZjY0MWY2MDg1MDcyOTQyMjFjNzk1YmE2YTc5ODhhMjRiMTk=",
      tracks: {
        href:
          "https://api.spotify.com/v1/playlists/0D5oNpkqZxdmklYvWwDKYI/tracks",
        total: 510,
      },
      type: "playlist",
      uri: "spotify:playlist:0D5oNpkqZxdmklYvWwDKYI",
    },
    {
      collaborative: false,
      external_urls: {
        spotify: "https://open.spotify.com/playlist/37i9dQZF1DXcF6B6QPhFDv",
      },
      href: "https://api.spotify.com/v1/playlists/37i9dQZF1DXcF6B6QPhFDv",
      id: "37i9dQZF1DXcF6B6QPhFDv",
      images: [
        {
          height: null,
          url:
            "https://pl.scdn.co/images/pl/default/4a3ceea705d2d836d7a6413bf97d1655a3f03b94",
          width: null,
        },
      ],
      name: "Rock This",
      owner: {
        display_name: "Spotify",
        external_urls: {
          spotify: "https://open.spotify.com/user/spotify",
        },
        href: "https://api.spotify.com/v1/users/spotify",
        id: "spotify",
        type: "user",
        uri: "spotify:user:spotify",
      },
      primary_color: null,
      public: false,
      snapshot_id:
        "MTU1ODA2NTY2MCwwMDAwMDFlZjAwMDAwMTZhYzNmMzQxOWEwMDAwMDE2YWMxMTcyNjVi",
      tracks: {
        href:
          "https://api.spotify.com/v1/playlists/37i9dQZF1DXcF6B6QPhFDv/tracks",
        total: 52,
      },
      type: "playlist",
      uri: "spotify:playlist:37i9dQZF1DXcF6B6QPhFDv",
    },
  ],
};
