import { useState } from "react";

const Video = () => {
  const [play, setPlay] = useState(false);

  return (
    <div className="cursor-pointer">
      {!play ? (
        <img
          src="/assets/Group17.png"
          alt="Play video"
          onClick={() => setPlay(true)}
          className="
             sm:h-90 md:h-120 h-60
            max-w-full 
            sm:w-105 md:w-130 lg:w-156
          "
        />
      ) : (
        <iframe
          className="
            w-156 sm:h-90 md:h-120 h-60
            max-w-full
            sm:w-105 md:w-130 lg:w-156
          "
          src="https://www.youtube.com/embed/BRW2qLi9YDM?autoplay=1&mute=1"
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default Video;
