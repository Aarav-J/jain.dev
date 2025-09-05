export interface LetterboxdFilm {
  title: string;
  month: string;
  year: string; 
  day: string; 
  slug: string; 
  rating: string; 
  writtenReview: string; 
  imageLink: string; 
  cachedAt: string;
//   posterUrl: string;
//   filmUrl: string;
//   rating?: string; // 0-5 stars

}



export async function getRecentlyWatched(): Promise<LetterboxdFilm | null> { 
    try { 
        const response = await fetch("https://m7tnsnh3sk.execute-api.us-east-1.amazonaws.com/corsstage");
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (!data || !data.title) {
            console.warn("Received invalid film data:", data);
            return null;
        }

        const result: LetterboxdFilm = {
            title: data.title,
            month: data.month,
            year: data.year,
            day: data.day,
            slug: data.slug,
            rating: data.rating,
            writtenReview: data.writtenReview,
            imageLink: data["image-link"],
            cachedAt: data.cachedAt
        };

        return result;
    } catch (error) {
        console.error("Error fetching Letterboxd data:", error);
        return null;
    }
}