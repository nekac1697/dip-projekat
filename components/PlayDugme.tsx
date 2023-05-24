import React from 'react';
import { GiPlayButton } from "react-icons/gi";
import { useRouter } from 'next/router';

interface PlayDugmeProps {
  movieId: string;
}

const PlayDugme: React.FC<PlayDugmeProps> = ({ movieId }) => {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.push(`/gledaj/${movieId}`)}
      className="
        bg-white 
        rounded-md 
        py-1 md:py-2 
        px-2 md:px-4
        w-auto 
        text-xs lg:text-lg 
        font-semibold
        flex
        flex-row
        items-center
        hover:bg-neutral-300
        transition
        "
      >
        <GiPlayButton className="w-4 md:w-7 text-black mr-1" />
        Pokreni
    </button>
  );
}

export default PlayDugme;
