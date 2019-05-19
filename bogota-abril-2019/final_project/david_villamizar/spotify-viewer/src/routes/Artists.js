import React from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import Albums from "./Albums";
import styles from "./Artists.module.css";
import Tracks from "./Tracks";

export default function Artists({ artists, ...props }) {
  return (
    <ul className={styles.artists}>
      {artists.map(artist => (
        <ArtistListItem key={artist.id} {...artist} {...props} />
      ))}
    </ul>
  );
}

function ArtistListItem({
  name,
  images,
  genres,
  id,
  match,
  history,
  location,
}) {
  return (
    <li
      className={`${styles.artist} ${
        location.pathname.startsWith(`${match.path}/${id}`) ? styles.active : ""
      }`}
      style={{ maxHeight: Math.min(images[0].height, 500) }}
      // onFocus={e => {
      //   history.push(`${match.path}/${id}`);
      // }}
    >
      <img src={images[0].url} alt={name} />
      <NavLink activeClassName={styles.active} to={`${match.path}/${id}`}>
        <h1>{name}</h1>
        <p>{genres.join(", ")}</p>
      </NavLink>
      <NavBar
        links={[
          { name: "Albums", href: `${match.path}/${id}/albums` },
          { name: "Top Tracks", href: `${match.path}/${id}/top-tracks` },
        ]}
      />
      <Switch>
        <Route path={`${match.path}/${id}/albums`} component={Albums} />
        <Route path={`${match.path}/${id}/top-tracks`} component={Tracks} />
        <Redirect
          from={`${match.path}/${id}`}
          to={`${match.path}/${id}/albums`}
        />
      </Switch>
    </li>
  );
}

Artists.defaultProps = {
  artists: [
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz",
      },
      followers: {
        href: null,
        total: 12322280,
      },
      genres: ["alternative metal", "nu metal", "post-grunge", "rap metal"],
      href: "https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz",
      id: "6XyY86QOPPrYVGvF9ch6wz",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/1685533969d5b68cbc630f991e873bd6467f1814",
          width: 640,
        },
        {
          height: 320,
          url:
            "https://i.scdn.co/image/f759994946aa42851e5293083f472c96c1753105",
          width: 320,
        },
        {
          height: 160,
          url:
            "https://i.scdn.co/image/0b0925b544b46d90a549f25a7f754ce6e59e6be2",
          width: 160,
        },
      ],
      name: "Linkin Park",
      popularity: 87,
      type: "artist",
      uri: "spotify:artist:6XyY86QOPPrYVGvF9ch6wz",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/3hE8S8ohRErocpkY7uJW4a",
      },
      followers: {
        href: null,
        total: 614293,
      },
      genres: [
        "dutch metal",
        "gothic metal",
        "gothic symphonic metal",
        "power metal",
        "symphonic metal",
      ],
      href: "https://api.spotify.com/v1/artists/3hE8S8ohRErocpkY7uJW4a",
      id: "3hE8S8ohRErocpkY7uJW4a",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/c927c2474b160a5c5a695709186ad3b3e3c5ec5f",
          width: 640,
        },
        {
          height: 320,
          url:
            "https://i.scdn.co/image/4cdc0ef5d5d3f1177aff082b6b080fa53685cccf",
          width: 320,
        },
        {
          height: 160,
          url:
            "https://i.scdn.co/image/354bc3804351484704a9083dd48bfbeca73aca93",
          width: 160,
        },
      ],
      name: "Within Temptation",
      popularity: 67,
      type: "artist",
      uri: "spotify:artist:3hE8S8ohRErocpkY7uJW4a",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD",
      },
      followers: {
        href: null,
        total: 6197902,
      },
      genres: [
        "alternative metal",
        "alternative rock",
        "modern rock",
        "permanent wave",
        "post-grunge",
        "rock",
      ],
      href: "https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD",
      id: "7jy3rLJdDQY21OgRLCZ9sD",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/c1a1b1ba6e7f40a1ac584481bdd6b3c2f305a35c",
          width: 640,
        },
        {
          height: 320,
          url:
            "https://i.scdn.co/image/bc43602fa69d0b7ad5a86c621d5f5c63ba327747",
          width: 320,
        },
        {
          height: 160,
          url:
            "https://i.scdn.co/image/45fa252dbb712dffd078f0d0930379bf41111cf2",
          width: 160,
        },
      ],
      name: "Foo Fighters",
      popularity: 80,
      type: "artist",
      uri: "spotify:artist:7jy3rLJdDQY21OgRLCZ9sD",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/7oPftvlwr6VrsViSDV7fJY",
      },
      followers: {
        href: null,
        total: 8714678,
      },
      genres: ["permanent wave", "pop punk", "punk", "rock"],
      href: "https://api.spotify.com/v1/artists/7oPftvlwr6VrsViSDV7fJY",
      id: "7oPftvlwr6VrsViSDV7fJY",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/b6a3f82183adb83b6e47cb22afc25724b241d038",
          width: 640,
        },
        {
          height: 320,
          url:
            "https://i.scdn.co/image/18bf842218dad28e8ffb89c44da4c19ed45266e4",
          width: 320,
        },
        {
          height: 160,
          url:
            "https://i.scdn.co/image/82d1dcbe86b73f38f6b2948829d156ba639d6228",
          width: 160,
        },
      ],
      name: "Green Day",
      popularity: 82,
      type: "artist",
      uri: "spotify:artist:7oPftvlwr6VrsViSDV7fJY",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/13JJKrUewC1CJYmIDXQNoH",
      },
      followers: {
        href: null,
        total: 392831,
      },
      genres: [
        "argentine rock",
        "latin alternative",
        "latin rock",
        "rock en espanol",
      ],
      href: "https://api.spotify.com/v1/artists/13JJKrUewC1CJYmIDXQNoH",
      id: "13JJKrUewC1CJYmIDXQNoH",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/2ca26ac6794b6eda9176b1a1820af220894b88e1",
          width: 640,
        },
        {
          height: 320,
          url:
            "https://i.scdn.co/image/509843f7836d2216d8ccda930a885bd064e5ff26",
          width: 320,
        },
        {
          height: 160,
          url:
            "https://i.scdn.co/image/5dc353774bf0219026e629f878bc20ada2d00735",
          width: 160,
        },
      ],
      name: "El Cuarteto De Nos",
      popularity: 65,
      type: "artist",
      uri: "spotify:artist:13JJKrUewC1CJYmIDXQNoH",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/2ye2Wgw4gimLv2eAKyk1NB",
      },
      followers: {
        href: null,
        total: 10421892,
      },
      genres: [
        "hard rock",
        "metal",
        "old school thrash",
        "rock",
        "speed metal",
        "thrash metal",
      ],
      href: "https://api.spotify.com/v1/artists/2ye2Wgw4gimLv2eAKyk1NB",
      id: "2ye2Wgw4gimLv2eAKyk1NB",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/5a06711d7fc48d5e0e3f9a3274ffed3f0af1bd91",
          width: 640,
        },
        {
          height: 320,
          url:
            "https://i.scdn.co/image/0c22030833eb55c14013bb36eb6a429328868c29",
          width: 320,
        },
        {
          height: 160,
          url:
            "https://i.scdn.co/image/c1fb4d88de092b5617e649bd4c406b5cab7d3ddd",
          width: 160,
        },
      ],
      name: "Metallica",
      popularity: 84,
      type: "artist",
      uri: "spotify:artist:2ye2Wgw4gimLv2eAKyk1NB",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1",
      },
      followers: {
        href: null,
        total: 4943836,
      },
      genres: [
        "alternative metal",
        "nu metal",
        "post-grunge",
        "rap metal",
        "rock",
      ],
      href: "https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1",
      id: "5eAWCfyUhZtHHtBdNk56l1",
      images: [
        {
          height: 454,
          url:
            "https://i.scdn.co/image/76245f096873524d6b507c093854a41fb90b9ae0",
          width: 1000,
        },
        {
          height: 290,
          url:
            "https://i.scdn.co/image/5dee147b9ddad1f9aeb4e313793294c3c07bcb3e",
          width: 639,
        },
        {
          height: 91,
          url:
            "https://i.scdn.co/image/2d4dff219617a2d1d52084096e9dfa3a68ff778d",
          width: 200,
        },
        {
          height: 29,
          url:
            "https://i.scdn.co/image/57da6643a745f27aa9656a591d5f64758a96ec31",
          width: 64,
        },
      ],
      name: "System Of A Down",
      popularity: 80,
      type: "artist",
      uri: "spotify:artist:5eAWCfyUhZtHHtBdNk56l1",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/05fG473iIaoy82BF1aGhL8",
      },
      followers: {
        href: null,
        total: 4358673,
      },
      genres: [
        "alternative metal",
        "nu metal",
        "post-grunge",
        "rap metal",
        "rock",
      ],
      href: "https://api.spotify.com/v1/artists/05fG473iIaoy82BF1aGhL8",
      id: "05fG473iIaoy82BF1aGhL8",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/a7958184e76eaec48937485e75d9f7e6d26d097f",
          width: 640,
        },
        {
          height: 320,
          url:
            "https://i.scdn.co/image/0da8dc59c5ae97e7364425120ce0453d82947158",
          width: 320,
        },
        {
          height: 160,
          url:
            "https://i.scdn.co/image/bc218ce0a94f780ecd7741c522ba783ee0de3d2c",
          width: 160,
        },
      ],
      name: "Slipknot",
      popularity: 79,
      type: "artist",
      uri: "spotify:artist:05fG473iIaoy82BF1aGhL8",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/67ea9eGLXYMsO2eYQRui3w",
      },
      followers: {
        href: null,
        total: 2458580,
      },
      genres: [
        "album rock",
        "art rock",
        "british invasion",
        "classic rock",
        "folk rock",
        "hard rock",
        "mellow gold",
        "protopunk",
        "rock",
        "roots rock",
      ],
      href: "https://api.spotify.com/v1/artists/67ea9eGLXYMsO2eYQRui3w",
      id: "67ea9eGLXYMsO2eYQRui3w",
      images: [
        {
          height: 1296,
          url:
            "https://i.scdn.co/image/92a5ad894b73b9e63739eb36a0500e86b2588353",
          width: 1000,
        },
        {
          height: 829,
          url:
            "https://i.scdn.co/image/4bc7e5ba1e9ee7610cda425ff26b33210d8f3c95",
          width: 640,
        },
        {
          height: 259,
          url:
            "https://i.scdn.co/image/251c72ac95f3a43b538b7e7f4221d3e7b516f7db",
          width: 200,
        },
        {
          height: 83,
          url:
            "https://i.scdn.co/image/fbaf3aa7b7675e0d4787237d9a9c2009091c993d",
          width: 64,
        },
      ],
      name: "The Who",
      popularity: 74,
      type: "artist",
      uri: "spotify:artist:67ea9eGLXYMsO2eYQRui3w",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/6olE6TJLqED3rqDCT0FyPh",
      },
      followers: {
        href: null,
        total: 8629482,
      },
      genres: [
        "alternative rock",
        "grunge",
        "permanent wave",
        "post-grunge",
        "rock",
      ],
      href: "https://api.spotify.com/v1/artists/6olE6TJLqED3rqDCT0FyPh",
      id: "6olE6TJLqED3rqDCT0FyPh",
      images: [
        {
          height: 1057,
          url:
            "https://i.scdn.co/image/84282c28d851a700132356381fcfbadc67ff498b",
          width: 1000,
        },
        {
          height: 677,
          url:
            "https://i.scdn.co/image/a4e10b79a642e9891383448cbf37d7266a6883d6",
          width: 640,
        },
        {
          height: 211,
          url:
            "https://i.scdn.co/image/42ae0f180f16e2f21c1f2212717fc436f5b95451",
          width: 200,
        },
        {
          height: 68,
          url:
            "https://i.scdn.co/image/e797ad36d56c3fc8fa06c6fe91263a15bf8391b8",
          width: 64,
        },
      ],
      name: "Nirvana",
      popularity: 82,
      type: "artist",
      uri: "spotify:artist:6olE6TJLqED3rqDCT0FyPh",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d",
      },
      followers: {
        href: null,
        total: 15779825,
      },
      genres: ["glam rock", "rock"],
      href: "https://api.spotify.com/v1/artists/1dfeR4HaWDbWqFHLkxsg1d",
      id: "1dfeR4HaWDbWqFHLkxsg1d",
      images: [
        {
          height: 806,
          url:
            "https://i.scdn.co/image/b040846ceba13c3e9c125d68389491094e7f2982",
          width: 999,
        },
        {
          height: 516,
          url:
            "https://i.scdn.co/image/af2b8e57f6d7b5d43a616bd1e27ba552cd8bfd42",
          width: 640,
        },
        {
          height: 161,
          url:
            "https://i.scdn.co/image/c06971e9ff81696699b829484e3be165f4e64368",
          width: 200,
        },
        {
          height: 52,
          url:
            "https://i.scdn.co/image/6dd0ffd270903d1884edf9058c49f58b03db893d",
          width: 64,
        },
      ],
      name: "Queen",
      popularity: 93,
      type: "artist",
      uri: "spotify:artist:1dfeR4HaWDbWqFHLkxsg1d",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/3qm84nBOXUEQ2vnTfUTTFC",
      },
      followers: {
        href: null,
        total: 12004725,
      },
      genres: ["glam metal", "hard rock", "rock"],
      href: "https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC",
      id: "3qm84nBOXUEQ2vnTfUTTFC",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/80920b4fc80b6d970e2934eb8abe27014fc60632",
          width: 640,
        },
        {
          height: 320,
          url:
            "https://i.scdn.co/image/18a0c85501ed5b614510a194bb238ac323dcc5a4",
          width: 320,
        },
        {
          height: 160,
          url:
            "https://i.scdn.co/image/7fad9d837d4132de0008da41b98ce3fc29433d7e",
          width: 160,
        },
      ],
      name: "Guns N' Roses",
      popularity: 82,
      type: "artist",
      uri: "spotify:artist:3qm84nBOXUEQ2vnTfUTTFC",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/36QJpDe2go2KgaRleHCDTp",
      },
      followers: {
        href: null,
        total: 7035289,
      },
      genres: ["album rock", "classic rock", "hard rock", "rock"],
      href: "https://api.spotify.com/v1/artists/36QJpDe2go2KgaRleHCDTp",
      id: "36QJpDe2go2KgaRleHCDTp",
      images: [
        {
          height: 600,
          url:
            "https://i.scdn.co/image/207803ce008388d3427a685254f9de6a8f61dc2e",
          width: 600,
        },
        {
          height: 200,
          url:
            "https://i.scdn.co/image/b0248a44865493e6a03832aa89854ada16ff07a8",
          width: 200,
        },
        {
          height: 64,
          url:
            "https://i.scdn.co/image/16eb3cdae0d824b520ac17710e943a99d3ef6602",
          width: 64,
        },
      ],
      name: "Led Zeppelin",
      popularity: 82,
      type: "artist",
      uri: "spotify:artist:36QJpDe2go2KgaRleHCDTp",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/711MCceyCBcFnzjGY4Q7Un",
      },
      followers: {
        href: null,
        total: 11089117,
      },
      genres: ["album rock", "australian rock", "hard rock", "rock"],
      href: "https://api.spotify.com/v1/artists/711MCceyCBcFnzjGY4Q7Un",
      id: "711MCceyCBcFnzjGY4Q7Un",
      images: [
        {
          height: 1500,
          url:
            "https://i.scdn.co/image/a16c5d95ede008ec905d6ca6d1b5abbf39ad4566",
          width: 1000,
        },
        {
          height: 960,
          url:
            "https://i.scdn.co/image/fb26e1c0e5779ac46b225651494ac14b6b8ebba7",
          width: 640,
        },
        {
          height: 300,
          url:
            "https://i.scdn.co/image/3d00e92fb05c62e2faf2908b34e6f24e0a4cb213",
          width: 200,
        },
        {
          height: 96,
          url:
            "https://i.scdn.co/image/2940421b19c6b8a26b073ef340290516ea0399e1",
          width: 64,
        },
      ],
      name: "AC/DC",
      popularity: 84,
      type: "artist",
      uri: "spotify:artist:711MCceyCBcFnzjGY4Q7Un",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/22bE4uQ6baNwSHPVcDxLCe",
      },
      followers: {
        href: null,
        total: 6633006,
      },
      genres: [
        "album rock",
        "british invasion",
        "classic rock",
        "protopunk",
        "rock",
      ],
      href: "https://api.spotify.com/v1/artists/22bE4uQ6baNwSHPVcDxLCe",
      id: "22bE4uQ6baNwSHPVcDxLCe",
      images: [
        {
          height: 794,
          url:
            "https://i.scdn.co/image/4226d2bbee2c44866eb0db3c88da0f26d7d12d5d",
          width: 1000,
        },
        {
          height: 508,
          url:
            "https://i.scdn.co/image/b2960638465a3548af99e4c15081632ad7994ad9",
          width: 640,
        },
        {
          height: 159,
          url:
            "https://i.scdn.co/image/52ea78f264323daeffd1116d6fbd8d6c65a736ab",
          width: 200,
        },
        {
          height: 51,
          url:
            "https://i.scdn.co/image/d2624c36224cd87b10c4293d2a230ba1185274f2",
          width: 64,
        },
      ],
      name: "The Rolling Stones",
      popularity: 82,
      type: "artist",
      uri: "spotify:artist:22bE4uQ6baNwSHPVcDxLCe",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/27T030eWyCQRmDyuvr1kxY",
      },
      followers: {
        href: null,
        total: 2303826,
      },
      genres: [
        "album rock",
        "german hard rock",
        "german metal",
        "german rock",
        "hard rock",
        "metal",
        "rock",
      ],
      href: "https://api.spotify.com/v1/artists/27T030eWyCQRmDyuvr1kxY",
      id: "27T030eWyCQRmDyuvr1kxY",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/2f123bb26564d8a4cc63bc396a094cc4a74dc782",
          width: 640,
        },
        {
          height: 320,
          url:
            "https://i.scdn.co/image/e8604ff6b9dc2fa390b807ee208b4544bda31a99",
          width: 320,
        },
        {
          height: 160,
          url:
            "https://i.scdn.co/image/85a4df978f747b469d11e36be42c577130c4ff0e",
          width: 160,
        },
      ],
      name: "Scorpions",
      popularity: 75,
      type: "artist",
      uri: "spotify:artist:27T030eWyCQRmDyuvr1kxY",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/6mdiAmATAx73kdxrNrnlao",
      },
      followers: {
        href: null,
        total: 4189364,
      },
      genres: ["album rock", "hard rock", "metal", "nwobhm", "rock"],
      href: "https://api.spotify.com/v1/artists/6mdiAmATAx73kdxrNrnlao",
      id: "6mdiAmATAx73kdxrNrnlao",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/4da0201eb9473be7d6dd138b81678e79dfd7eb02",
          width: 640,
        },
        {
          height: 320,
          url:
            "https://i.scdn.co/image/7f99805fcfe3bf12e6c29977200c7e58c234c010",
          width: 320,
        },
        {
          height: 160,
          url:
            "https://i.scdn.co/image/32b9989c0c47736535d76564ed6ae11ebb57948c",
          width: 160,
        },
      ],
      name: "Iron Maiden",
      popularity: 76,
      type: "artist",
      uri: "spotify:artist:6mdiAmATAx73kdxrNrnlao",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/5LfGQac0EIXyAN8aUwmNAQ",
      },
      followers: {
        href: null,
        total: 2869695,
      },
      genres: [
        "alternative metal",
        "permanent wave",
        "pop punk",
        "post-grunge",
        "punk",
        "rock",
        "skate punk",
      ],
      href: "https://api.spotify.com/v1/artists/5LfGQac0EIXyAN8aUwmNAQ",
      id: "5LfGQac0EIXyAN8aUwmNAQ",
      images: [
        {
          height: 667,
          url:
            "https://i.scdn.co/image/95bdabfcd4719c71269c626d04238dbf5ad8718d",
          width: 1000,
        },
        {
          height: 427,
          url:
            "https://i.scdn.co/image/c587d950d9a46b4d0a160ad130bda6a1e5df1a0c",
          width: 640,
        },
        {
          height: 133,
          url:
            "https://i.scdn.co/image/e8330e4aa61b8bc5f0a3eaedb8d1ffb7b6f10026",
          width: 200,
        },
        {
          height: 43,
          url:
            "https://i.scdn.co/image/0ffc914034ba1d8bb6e6dc85ea87e1fc2ef78332",
          width: 64,
        },
      ],
      name: "The Offspring",
      popularity: 77,
      type: "artist",
      uri: "spotify:artist:5LfGQac0EIXyAN8aUwmNAQ",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/7Ey4PD4MYsKc5I2dolUwbH",
      },
      followers: {
        href: null,
        total: 6475214,
      },
      genres: ["album rock", "classic rock", "hard rock", "rock"],
      href: "https://api.spotify.com/v1/artists/7Ey4PD4MYsKc5I2dolUwbH",
      id: "7Ey4PD4MYsKc5I2dolUwbH",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/a70e0a22056cf078a7d76f5602e59d969ee9f530",
          width: 640,
        },
        {
          height: 320,
          url:
            "https://i.scdn.co/image/9b31b331224806470476d5883a5199ae22aeb00e",
          width: 320,
        },
        {
          height: 160,
          url:
            "https://i.scdn.co/image/8f8095bc2e6615f25526f4e2a2cc73482ab3ec2e",
          width: 160,
        },
      ],
      name: "Aerosmith",
      popularity: 79,
      type: "artist",
      uri: "spotify:artist:7Ey4PD4MYsKc5I2dolUwbH",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/7t0rwkOPGlDPEhaOcVtOt9",
      },
      followers: {
        href: null,
        total: 1566844,
      },
      genres: ["irish rock", "pop rock", "rock"],
      href: "https://api.spotify.com/v1/artists/7t0rwkOPGlDPEhaOcVtOt9",
      id: "7t0rwkOPGlDPEhaOcVtOt9",
      images: [
        {
          height: 667,
          url:
            "https://i.scdn.co/image/143c01f407ed64a4b3bcbc92d24c05ef80981251",
          width: 1000,
        },
        {
          height: 427,
          url:
            "https://i.scdn.co/image/a82245ec62ee9606ab456d787f1f7fcd788e6a10",
          width: 640,
        },
        {
          height: 133,
          url:
            "https://i.scdn.co/image/3a0e3d6f957d3d713a386aeedd028a8e8a1d8803",
          width: 200,
        },
        {
          height: 43,
          url:
            "https://i.scdn.co/image/95b4d133c1e6a19efb05e4becf0f9c46e0894845",
          width: 64,
        },
      ],
      name: "The Cranberries",
      popularity: 76,
      type: "artist",
      uri: "spotify:artist:7t0rwkOPGlDPEhaOcVtOt9",
    },
  ],
};
