import React from "react";

interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsAmount: number;
}

function GameBanner(props: GameBannerProps) {
  const { adsAmount, bannerUrl, title } = props;
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={bannerUrl} />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 ">
        <strong className="font-bold text-white block">{title}</strong>
        <span className="text-zinc-300 text-sm block mt-1">
          {adsAmount} anúncio(s)
        </span>
      </div>
    </a>
  );
}

export default GameBanner;
