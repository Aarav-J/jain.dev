import { useEffect, useState } from 'react';
import { FaStar, FaStarHalf } from "react-icons/fa";
import { getRecentlyWatched, LetterboxdFilm } from '../utils';

const Letterboxd = () => {
  const username = 'aaravj'; // Your Letterboxd username
  const [film, setFilm] = useState<LetterboxdFilm | null>(null)
  const [error, setError] = useState<boolean>(false)
  const returnStars = (rating: string) => {
    const stars = [];
    const ratingValue = parseFloat(rating);
    
    // Generate full stars (each star is 2 points in Letterboxd)
    for (let i = 1; i <= Math.floor(ratingValue/2); i++) {
      stars.push(
        <FaStar key={i} className='text-yellow-400 text-sm' />
      );
    }
    
    // Add half star if needed
    if (ratingValue % 2 == 1) {
      stars.push(
        <FaStarHalf key="half" className='text-yellow-400 text-sm' />
      );
    }
    
    // Fill remaining stars up to 5
    // const remainingStars = 5 - stars.length;
    // for (let i = 1; i <= remainingStars; i++) {
    //   stars.push(
    //     <FaStar key={`empty-${i}`} className='text-gray-600 opacity-50 text-sm' />
    //   );
    // }
    
    return <div className="flex gap-0.5 items-center mt-1">{stars}</div>;
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const filmData = await getRecentlyWatched();
        if (filmData) {
          setFilm(filmData);
          setError(false);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Failed to fetch film data:", err);
        setError(true);
      }
    };

    fetchData();
    // Refresh every 10 minutes
    const interval = setInterval(fetchData, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Render loading state or no film state
  if (error || !film) {
    return (
      <div className="w-fit px-4 h-28 border-devPurple border-solid border-2 rounded-2xl flex items-center justify-center mr-6">
        <a href={`https://letterboxd.com/${username}`} className="hovered" target="_blank" rel="noopener noreferrer">
          <div className="w-16 h-16 rounded-full bg-[#14181c] flex items-center justify-center p-2 m-4">
            <img src="/letterboxd.svg" alt="Letterboxd" className="w-12 h-12" />
          </div>
        </a>
      </div>
    );
  }

  // Render film info
  return (
    <div className="w-fit h-28 border-devPurple border-solid border-2 rounded-2xl flex items-center mr-6 transition-all duration-300 hover:border-opacity-80">
      <a 
        className='hovered flex items-center justify-center ml-3'
        target="_blank" 
        rel="noopener noreferrer"
        href={`https://letterboxd.com/${username}/film/${film.slug}`}
        aria-label={`View ${film.title} on Letterboxd`}
      >
        <img
          src={film.imageLink}
          alt={`Poster of ${film.title}`}
          className='w-14 h-18 rounded-lg object-cover shadow-sm'
          loading="lazy"
          style={{ objectPosition: 'center' }}
        />
      </a>
      <div className="flex flex-col items-flex items-start ml-4">
        <a 
          href={`https://letterboxd.com/${username}/film/${film.slug}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-devPurple transition-colors duration-200"
        >
          <span className='text-md font-semibold text-white whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px]'>
            {film.title?.slice(0, 25)}{(film.title && film.title.length >= 25) ? "..." : null}
          </span>
        </a>
        <div className='text-xs flex flex-row text-devGrey'>
          {returnStars(film.rating)}
        </div>
      </div>
      <a 
        href={`https://letterboxd.com/${username}`} 
        className="hovered ml-auto" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="View Letterboxd profile"
      >
        <div className="w-12 h-12 rounded-full bg-[#14181c] flex items-center justify-center p-2 hover:bg-[#2c3440] transition-colors duration-200 mr-3">
          <img src="/letterboxd.svg" alt="Letterboxd" className="w-8 h-8" />
        </div>
      </a>
    </div>
  );
};

export default Letterboxd; 