import "./styles/main.css";
import logoImg from "./assets/nlw-logo-sports.svg";
import GameBanner from "./components/GameBanner";
import CreateBannerAd from "./components/CreateBannerAd";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import CreateAdModal from "./components/CreateAdModal";
import { Games } from "./interfaces/IGames";
import axios from "axios";

function App() {
  const [games, setGames] = useState<Games[]>([]);

  useEffect(() => {
    axios("http://localhost:3333/games").then((response) =>
      setGames(response.data)
    );
  }, []);
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-8 gap-6 mt-16">
        {games?.map((x) => {
          return (
            <GameBanner
              adsAmount={x._count.ads}
              bannerUrl={x.bannerUrl}
              title={x.title}
              key={x.id}
            />
          );
        })}
      </div>

      <Dialog.Root>
        {/* trigger  */}
        <CreateBannerAd />

        {/* portal */}
        <CreateAdModal games={games} />
      </Dialog.Root>
    </div>
  );
}

export default App;
