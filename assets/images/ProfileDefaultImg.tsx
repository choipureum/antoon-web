import React, { memo } from 'react';

const ProfileDefaultImg = ({
  width,
  height,
}: {
  width: string;
  height: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1211_14774)">
        <path
          d="M0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40Z"
          fill="#E0929B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.8851 12.2787C33.5954 11.5403 37.015 12.0287 41.2962 14.0629C41.8057 14.305 42.0225 14.9143 41.7804 15.4238C41.5383 15.9333 40.9291 16.1501 40.4195 15.908C36.3663 13.9821 33.4749 13.6904 31.422 14.2497C29.4028 14.7998 27.9928 16.23 27.0086 18.2272C26.0154 20.2428 25.4965 22.7651 25.2639 25.3055C25.2272 25.706 25.1978 26.1053 25.1747 26.5012C27.4285 25.9348 29.7878 25.634 32.2174 25.634C35.4251 25.634 38.5103 26.1583 41.392 27.126C41.776 23.7574 42.7955 19.9988 44.6586 17.1824C46.0456 15.0857 47.9655 13.4189 50.5198 12.9394C53.0691 12.4608 56.0252 13.2076 59.3977 15.456C59.867 15.7689 59.9939 16.403 59.681 16.8724C59.3681 17.3417 58.7339 17.4686 58.2645 17.1557C55.1569 15.0839 52.7427 14.6005 50.8967 14.9471C49.0556 15.2927 47.5553 16.5062 46.3623 18.3095C44.6211 20.9416 43.6747 24.6308 43.3674 27.8717C53.737 32.2295 61.0188 42.482 61.0188 54.4354C61.0188 70.3419 48.124 83.2367 32.2174 83.2367C16.3108 83.2367 3.41602 70.3419 3.41602 54.4354C3.41602 41.7154 11.6618 30.9214 23.0996 27.1071C23.1262 26.4553 23.1682 25.7897 23.2296 25.1192C23.4729 22.4618 24.0258 19.6588 25.1762 17.3242C26.3356 14.9715 28.1409 13.0263 30.8851 12.2787Z"
          fill="#F2CFD3"
        />
        <path
          d="M38.7349 42.9938C38.7349 44.7691 37.8354 46.2082 36.7258 46.2082C35.6163 46.2082 34.7168 44.7691 34.7168 42.9938C34.7168 41.2185 35.6163 39.7793 36.7258 39.7793C37.8354 39.7793 38.7349 41.2185 38.7349 42.9938Z"
          fill="#1C1C1C"
        />
        <path
          d="M51.5923 42.9938C51.5923 44.7691 50.6928 46.2082 49.5833 46.2082C48.4737 46.2082 47.5742 44.7691 47.5742 42.9938C47.5742 41.2185 48.4737 39.7793 49.5833 39.7793C50.6928 39.7793 51.5923 41.2185 51.5923 42.9938Z"
          fill="#1C1C1C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M38.4034 49.0212C38.736 48.7273 39.2439 48.7588 39.5377 49.0914C40.1128 49.7423 41.2028 50.5359 42.5458 50.7642C43.8398 50.9842 45.4651 50.6978 47.2238 49.0389C47.5467 48.7343 48.0553 48.7492 48.3598 49.072C48.6644 49.3949 48.6495 49.9035 48.3267 50.208C46.228 52.1877 44.1031 52.6593 42.2764 52.3487C40.4987 52.0464 39.0975 51.0207 38.3332 50.1555C38.0394 49.8229 38.0708 49.315 38.4034 49.0212Z"
          fill="#1C1C1C"
        />
      </g>
      <defs>
        <clipPath id="clip0_1211_14774">
          <path
            d="M0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default memo(ProfileDefaultImg);