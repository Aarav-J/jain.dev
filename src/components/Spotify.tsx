import { useEffect, useState } from 'react'
import getNowPlayingItem from '../spotify'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
type Result = {
    title: string | undefined
    artist: string | undefined
    albumImageUrl: string | undefined
    songUrl: string | undefined

}
const Spotify = () => {
    const refresh_token = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN;


    const [result, setResult] = useState<Result>({
        title: undefined,
        artist: undefined,
        albumImageUrl: undefined,
        songUrl: undefined,

    })
    useEffect(() => {
        Promise.all([
            getNowPlayingItem(refresh_token),
        ]).then((results) => {
            if (results[0] !== false) {
                setResult(results[0])

            }
        })
    })
    return (
        <div>

            <div className="w-fit h-24 border-devPurple border-solid border-2 rounded-2xl flex items-center gap-3 mr-6">
                {result.albumImageUrl != null ? (<><a className='hovered' target="_blank" href={result.songUrl}><img src={result.albumImageUrl} alt={`Image of ${result.title}`} className='w-20 h-20 rounded-xl ml-3' /></a>
                    <div className="flex flex-col items-flex items-start">
                        <span className='text-md font-semibold text-white'>{result.title?.slice(0, 25)}{(result.title != undefined && result.title?.length >= 25) ? "..." : null}</span>
                        <span className='text-xs text-devGrey'>{result.artist}</span>
                    </div></>) : null}
                <a href="https://open.spotify.com/user/paei6pn8u6ac9w2d42wkaohup?si=0bca6f6a59c24e52" className="hovered" target="_blank">
                    <FontAwesomeIcon icon={faSpotify} className={`${result.albumImageUrl ? " m-auto mr-2 ml-4" : 'm-4'} w-12 h-12 text-devPurple`} />
                </a>
            </div>
        </div>
    )
}
export default Spotify