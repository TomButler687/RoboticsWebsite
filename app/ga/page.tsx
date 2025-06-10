import { Image } from "@heroui/image";
import { Card, CardHeader } from "@heroui/card";
import { Link } from "@heroui/link";
export default function Home() {
  const image_width = 750;

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="pt-10 pb-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-400 to-yellow-400">
            Genetic
          </span>
          <span className="mx-2">Algorithm</span>
        </h1>
        <div className="mx-auto mt-4 h-1 w-[100%] rounded bg-gradient-to-r from-lime-400 via-emerald-400 to-yellow-400" />
      </div>
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-white tracking-wide">
          The Terrain
        </h2>
        <div className="mt-2 border-b-2 border-transparent w-[100%]">
          <span className="block h-1 rounded bg-gradient-to-r from-lime-400 via-emerald-400 to-yellow-400" />
        </div>
      </div>
      <Card>
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-black/60 uppercase font-bold">Terrain</p>
        </CardHeader>
        <Image
          className="z-0 rounded-lg"
          src="/Terrain.png"
          width={image_width}
        />
      </Card>
      To evaluate the performance of the locomotion method, a custom terrain was
      created by Matt Gamble.
      <br />
      The idea was that the terrain should get increasingly difficult and so
      promote a genetic algorithm to innovate to get over each hurdle.
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-white tracking-wide">
          The Wheg
        </h2>
        <div className="mt-2 border-b-2 border-transparent w-[100%]">
          <span className="block h-1 rounded bg-gradient-to-r from-lime-400 via-emerald-400 to-yellow-400" />
        </div>
      </div>
      <div>
        A wheg is a wheel made out of legs. It was proposed in{" "}
        <Link
          color="success"
          href="https://ieeexplore.ieee.org/abstract/document/1308761"
          underline="always"
        >
          this paper
        </Link>{" "}
        using biomimicry of cockroaches and comparing between the two. A wheg is
        said to be better than a wheel at traversing uneven ground due to it
        being able to gain traction easier. They are also seen as better suited
        for stepped environment if the power of the motor is able to overcome
        the moment of the body&apos;s weight.
      </div>
      <Card>
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-black/60 uppercase font-bold">
            Insect with Whegs
          </p>
        </CardHeader>
        <Image
          className="z-0 rounded-lg"
          src="/Insect.png"
          width={image_width}
        />
      </Card>
      <div>
        The above insect design was created by Matt Gamble whilst I did the wheg
        design, generation and the genetic algorithm.
      </div>
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-white tracking-wide">
          Input Parameters
        </h2>
        <div className="mt-2 border-b-2 border-transparent w-[100%]">
          <span className="block h-1 rounded bg-gradient-to-r from-lime-400 via-emerald-400 to-yellow-400" />
        </div>
      </div>
      <div className="bg-black p-6 rounded-lg w-full max-w-xl">
        <h2 className="text-2xl font-bold text-white mb-4">
          GA Optimisable Parameters:
        </h2>
        <span className="block h-1 w-[63%] rounded bg-gradient-to-r from-lime-400 via-emerald-400 to-yellow-400 mb-6" />
        <ul className="space-y-4 text-white list-inside">
          <li className="flex items-start">
            <span className="mr-3 mt-1 h-3 w-3 rounded-full bg-gradient-to-r from-lime-400 via-emerald-400 to-yellow-400 flex-shrink-0" />
            <span>Number of legs per wheg</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 mt-1 h-3 w-3 rounded-full bg-gradient-to-r from-lime-400 via-emerald-400 to-yellow-400 flex-shrink-0" />
            <span>Leg Length</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 mt-1 h-3 w-3 rounded-full bg-gradient-to-r from-lime-400 via-emerald-400 to-yellow-400 flex-shrink-0" />
            <span>Foot to leg length ratio</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 mt-1 h-3 w-3 rounded-full bg-gradient-to-r from-lime-400 via-emerald-400 to-yellow-400 flex-shrink-0" />
            <span>Foot angle</span>
          </li>
        </ul>
      </div>
      <div>
        These parameters were deemed the important features to a wheg whilst
        also being able to be easily configured through simulation. Other
        parameters that could be explored would be the ratio of the size of the
        front whegs to the back whegs, the curvature of the legs, and the angle
        between legs within a wheg to name a few. However, this was deemed out
        of scope for this project and so saved for future research.
      </div>
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-white tracking-wide">
          GA Design
        </h2>
        <div className="mt-2 border-b-2 border-transparent w-[100%]">
          <span className="block h-1 rounded bg-gradient-to-r from-lime-400 via-emerald-400 to-yellow-400" />
        </div>
      </div>
      <Image src="/AlgorithmMeme.png" width={image_width} />
      A Genetic Algorithm was designed to facilitate the research of the optimal
      wheg design. <br />A population of 16 insects was created within
      CoppeliaSim, each initiated with randomised wheg configuration between the
      following ranges:
      <div className="bg-black p-6 rounded-lg w-full max-w-xl">
        <span className="block h-1 w-24 rounded bg-gradient-to-r from-lime-400 via-emerald-400 to-yellow-400 mb-6" />
        <ul className="space-y-4 text-white list-inside">
          <li className="flex items-start">
            <span className="mr-3 mt-1 h-3 w-3 rounded-full bg-gradient-to-r from-lime-400 via-emerald-400 to-yellow-400 flex-shrink-0" />
            <span>Length: 0.1 {"->"} 0.225</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 mt-1 h-3 w-3 rounded-full bg-gradient-to-r from-lime-400 via-emerald-400 to-yellow-400 flex-shrink-0" />
            <span>Foot ratio: 0.1 {"->"} 1</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 mt-1 h-3 w-3 rounded-full bg-gradient-to-r from-lime-400 via-emerald-400 to-yellow-400 flex-shrink-0" />
            <span>Foot angle: 0 {"->"} 90</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 mt-1 h-3 w-3 rounded-full bg-gradient-to-r from-lime-400 via-emerald-400 to-yellow-400 flex-shrink-0" />
            <span>Legs: 2 {"->"} 10</span>
          </li>
        </ul>
      </div>
      <Link href="https://www.researchgate.net/figure/Structure-diagram-of-genetic-algorithm_fig2_360849991">
        <Image
          alt="Structure diagram of genetic algorithm."
          src="https://www.researchgate.net/publication/360849991/figure/fig2/AS:1159685184995358@1653501902832/Structure-diagram-of-genetic-algorithm.jpg"
        />
      </Link>
      Genetic algorithms as a whole are all fairly similar and so not much
      detail needs to be explained with the architecture. A few points worth
      noting, however, are:
      <div className="bg-black p-6 rounded-lg w-full max-w-xl">
        <ul className="space-y-4 text-white list-inside">
          <li className="flex items-start">
            <span className="mr-3 mt-1 h-3 w-3 rounded-full bg-gradient-to-r from-lime-400 via-emerald-400 to-yellow-400 flex-shrink-0" />
            <span>
              Fitness Value: Score calculated on total forward distance + the
              vertical distance
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 mt-1 h-3 w-3 rounded-full bg-gradient-to-r from-lime-400 via-emerald-400 to-yellow-400 flex-shrink-0" />
            <span>Evaluation: Tournament Selection using groups of 3</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 mt-1 h-3 w-3 rounded-full bg-gradient-to-r from-lime-400 via-emerald-400 to-yellow-400 flex-shrink-0" />
            <span>Crossover: Single-point</span>
          </li>
        </ul>
      </div>
      With all this created, the genetic algorithm was linked to Coppelia as
      shown below.
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-white tracking-wide">
          Outcomes
        </h2>
        <div className="mt-2 border-b-2 border-transparent w-[100%]">
          <span className="block h-1 rounded bg-gradient-to-r from-lime-400 via-emerald-400 to-yellow-400" />
        </div>
      </div>
      <Card>
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-black/80 uppercase font-bold">
            Genetic Algorithm Initalisation
          </p>
        </CardHeader>
        <Image
          className="z-0 rounded-lg"
          src="/ga_init.gif"
          width={image_width}
        />
      </Card>
      <div>
        Unfortunately, whilst the genetic algorithm itself works, linking this
        with CoppeliaSim proved to be difficult past the first generation. This
        is dicussed further in the{" "}
        <Link color="success" href="#relfections" underline="always">
          Reflections
        </Link>{" "}
        section.
      </div>
      <Card>
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-black/80 uppercase font-bold">
            Stairs Demo
          </p>
        </CardHeader>
        <Image
          className="z-0 rounded-lg"
          src="/ga_falling.gif"
          width={image_width}
        />
      </Card>
      Whilst the whegs are great at uneven ground and climbing small stairs,
      there is a limit to the size of stairs that they can overcome. As seen
      here, the stair is too big, meaning that the size of wheg would need to be
      increased to overcome it. However, this would then increase the moment and
      so require a more powerful motor to lift the insect. <br />
      To demo this, the insect&apos;s body has been increased in size,
      accomodating the increased leg size and the motor power increased.
      <Card id="whegClimb">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-black/80 uppercase font-bold">
            Climbing Stairs
          </p>
        </CardHeader>
        <Image
          className="z-0 rounded-lg"
          src="/insect_climb.gif"
          width={image_width}
        />
      </Card>
      <div>
        Different wheg configurations were tested against a wheel on uneven
        terrain. These are the results:
      </div>
      <Card>
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-black/80 uppercase font-bold">
            Uneven Terrain
          </p>
        </CardHeader>
        <Image
          className="z-0 rounded-lg"
          src="/uneven.gif"
          width={image_width}
        />
      </Card>
      Whilst the wheels were able to easily move across the uneven terrain, the
      medium sized whegs fell over. However, this seems to stem from a problem
      of instability within the insect design and could likely be counteracted
      by increasing the width of the insect to increase stability. <br />
      However, since this would cause an entire change to the project, require
      retesting everything, it was deemed out of scope.
      <Card>
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-black/80 uppercase font-bold">
            Wheeled Insect Climbing Stairs
          </p>
        </CardHeader>
        <Image
          className="z-0 rounded-lg"
          src="/wheelStairs.gif"
          width={image_width}
        />
      </Card>
      <div>
        As shown, the wheeled insect was not able to get up the stairs, whilst
        the insect{" "}
        <Link color="success" href="#whegClimb" underline="always">
          here
        </Link>{" "}
        was.
      </div>
      <div className="bg-black px-6 py-8">
        <div className="flex flex-col items-start">
          <h1
            className="text-3xl font-extrabold tracking-wide text-white"
            id="relfections"
          >
            Reflections
          </h1>
          <span className="mt-2 block h-1 w-[100%] rounded bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500" />
        </div>
      </div>
      <div>
        The main downfall of this project and thu, the main point to improve on
        is getting the genetic algorithm to work with CoppeliaSim. The main
        issues were the point of Coppelia not reseting the objects positions and
        dynamic properties at the end of each sim. Whilst this is able to be
        programatically changed, getting Coppelia to listen to these commands
        proved difficult. This led to whegs persisting between simulations,
        insects being subject to gravity whilst whegs were being created and so
        morphing the whegs with the floor, breaking the physics sim, and
        therefore Insects jumping all over the course. This meant that the
        fitness metric started to be exploited by breaking the physics sim,
        causing the Insects to jump to the end of the course. <br />
      </div>
      <Image src="GA_Meme.png" width={image_width} />
      <div>
        Whilst these bugs are entirely fixable, the deadline for submission
        loomed too close to justify further work on this. <br />
        Another point to improve on was the design of the insect. Its slender
        nature was naturally unstable for longer length whegs and so a wider
        base would increase stability and further make the testing about the
        whegs rather than struggling to get things to move well whilst unstable.
      </div>
      <div className="bg-black px-6 py-8">
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-extrabold tracking-wide text-white">
            Ethical Discussion
          </h1>
          <span className="mt-2 block h-1 w-[100%] rounded bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500" />
        </div>
      </div>
      <div>
        Quadrapedal robots&apos; biggest market is military applications, due to
        their ability to carry heavy packages through uneven terrain. This means
        that any research into this field will be met with the moral issue of
        developing potential weapons. Whilst these applications could be benign,
        such as carrying wounded soldiers away from danger and back to safety,
        they could just as easily be used for more destructive applications such
        as small quadrapeds carrying explosive payloads.
      </div>
    </section>
  );
}
