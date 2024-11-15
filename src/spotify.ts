import querystring from 'querystring';
import fetch from 'isomorphic-fetch';


const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT =
  `https://api.spotify.com/v1/me/player/currently-playing`;


const getAccessToken =
  async (refresh_token: string) => {
    const basic = import.meta.env.VITE_SPOTIFY_BASIC;
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: querystring.stringify({
        grant_type: 'refresh_token',
        refresh_token,
      }),
    });

    return response.json();
  };
export const getNowPlaying =
  async (refresh_token: string) => {
    const { access_token } =
      await getAccessToken(refresh_token);
    return fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  };
export default async function getNowPlayingItem(refresh_token: string) {
  const response = await getNowPlaying(refresh_token);
  if (response.status === 204 || response.status > 400) {
    console.log(response);
    return false;
  }
  const song = await response.json();
  const albumImageUrl = song.item.album.images[0].url;
  const artist =
    song.item.artists.map((_artist: { name: string; }) => _artist.name)
      .join(', ');
  const isPlaying = song.is_playing;
  const songUrl = song.item.external_urls.spotify;
  const title = song.item.name;

  return {
    albumImageUrl, artist, isPlaying, songUrl, title,
  };
}
