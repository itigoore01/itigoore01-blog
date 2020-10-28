import React, { FC } from 'react';
import { usePostLikes } from '../hooks/use-post-likes';
import { sendLikeEvent } from '../utils/gtag/like-event';

interface Props {
  slug: string;
  className?: string;
}

const LikeButton: FC<Props> = ({ slug, className = '' }) => {
  const [likes, incrementLike] = usePostLikes(slug);

  function onLikeClick() {
    incrementLike();
    sendLikeEvent({
      contentId: slug,
      contentType: 'post',
    });
  }

  return (
    <div className={`flex flex-col text-center items-center ${className}`}>
      <div className="font-black text-2xl mb-1 font-display">LIKE</div>
      <p className="text-sm text-gray-600 mb-2">
        ブックマーク機能はないですが
        <br className="sm:hidden" />
        いいねをたくさん送れます
      </p>
      <button className="text-red-600" onClick={onLikeClick}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="32" cy="32" r="31" fill="white" />
          <path
            d="M32 49.5369C31.5059 49.5363 31.0235 49.387 30.6155 49.1084C24.5704 45.0048 21.9528 42.1911 20.5091 40.432C17.4323 36.6822 15.9593 32.8324 16.0009 28.6634C16.0493 23.8859 19.8822 20 24.545 20C27.9356 20 30.2839 21.9099 31.6516 23.5006C31.6949 23.5505 31.7484 23.5905 31.8085 23.6179C31.8686 23.6453 31.9339 23.6595 32 23.6595C32.0661 23.6595 32.1314 23.6453 32.1915 23.6179C32.2516 23.5905 32.3051 23.5505 32.3484 23.5006C33.7161 21.9084 36.0644 20 39.455 20C44.1178 20 47.9507 23.8859 47.9991 28.6642C48.0407 32.8339 46.5661 36.6837 43.4909 40.4328C42.0472 42.1919 39.4296 45.0056 33.3845 49.1092C32.9764 49.3875 32.494 49.5365 32 49.5369V49.5369Z"
            fill="#E53E3E"
          />
        </svg>
      </button>
      <span className={`text-sm ${likes === 0 ? 'invisible' : null}`}>
        {likes}
      </span>
    </div>
  );
};

export default LikeButton;
