import { Link } from "@heroui/link";
import { Card, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
export default function Home() {
  const image_width = 500;

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="grid grid-rows-2 gap-5">
        <Link className="grid grid-rows-2" href="/pickandplonk">
          <div className="pt-10 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
              Pick{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-fuchsia-400">
                and
              </span>{" "}
              Plonk
            </h1>
            <div className="mx-auto mt-4 h-1 w-[100%] rounded bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500" />
          </div>
          <Card isFooterBlurred>
            <Image src="/redcubes.gif" width={image_width} />
            <CardFooter className="absolute bg-black/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-white/90 text-small font-bold">
                  Pick and Plonk
                </p>
                <p className="text-white/70 font-bold text-tiny">
                  Perception and Non-Linear Control
                </p>
              </div>
            </CardFooter>
          </Card>
        </Link>
        <Link className="grid grid-rows-2" href="/ga">
          <div className="pt-10 pb-6 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-400 to-yellow-400">
                Genetic
              </span>
              <span className="mx-2">Algorithm</span>
            </h1>
            <div className="mx-auto mt-4 h-1 w-[100%] rounded bg-gradient-to-r from-lime-400 via-emerald-400 to-yellow-400" />
          </div>
          <Card isFooterBlurred>
            <Image src="/insect_climb.gif" width={image_width} />
            <CardFooter className="absolute bg-black/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-white/90 text-small font-bold">
                  Genetic Algorithm
                </p>
                <p className="text-white/70 font-bold text-tiny">Locomotion</p>
              </div>
            </CardFooter>
          </Card>
        </Link>
      </div>
    </section>
  );
}
