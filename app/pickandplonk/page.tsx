import { Image } from "@heroui/image";
import { Card, CardHeader, CardFooter } from "@heroui/card";
import { Code } from "@heroui/code";
import { Link } from "@heroui/link";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";
export default function Home() {
  const image_width = 750;

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="pt-10 pb-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
          Pick{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-fuchsia-400">
            and
          </span>{" "}
          Plonk
        </h1>
        <div className="mx-auto mt-4 h-1 w-[100%] rounded bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500" />
      </div>
      <div>
        As robotics and automation become more sophisticated, the complexity of
        operating such systems becomes a barrier for non-specialist users. Since
        consumer robotics is becoming a greater aim, the ability for a
        non-specialist user to be able to control a robot through complex tasks
        in a natural way is a crucial. This project aims to explore the problem
        of a non-specialist user controlling which objects a robotic arm should
        pick up in an unstructured environment.
      </div>
      <Image src="/PaPEnvironment.png" width={image_width} />
      <div>
        There are many ways to achieve this goal. Commonly, hard-coded
        approaches such as colour segmentation, contour detection and feature
        extraction would be used to locate objects within the image. However,
        this requires not only prior knowledge of the available objects in the
        scene, but also specialist understanding to set up the colour
        segmentation and contour detection for the correct object. Even using
        machine learning techniques such as decision-trees or SVMs would require
        prior knowledge of the environment and the objects would be required; if
        any new objects were added then these models would likely need to
        undergo further training. Finally, whilst pre-trained vision models such
        as CNNs would be able to classify the objects, the input from the user
        would still need to be structured, such as a GUI, buttons etc.
        Therefore, this project aims to explore possible solutions to this
        problem.
      </div>
      <div className="bg-black p-6 rounded-lg w-full max-w-xl">
        <h2 className="text-2xl font-bold text-white mb-4">Task Breakdown:</h2>
        <span className="block h-1 w-[38%] rounded bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 mb-6" />
        <ul className="space-y-4 text-white list-inside">
          <li className="flex items-start">
            <span className="mr-3 mt-1 h-3 w-3 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 flex-shrink-0" />
            <span>
              Understanding and interpreting the natural language command
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 mt-1 h-3 w-3 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 flex-shrink-0" />
            <span>Robust Perception of the objects in the environment</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 mt-1 h-3 w-3 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 flex-shrink-0" />
            <span>Locating the objects</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 mt-1 h-3 w-3 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 flex-shrink-0" />
            <span>Inverse Kinematics</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 mt-1 h-3 w-3 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 flex-shrink-0" />
            <span>Behaviour Tree for system control</span>
          </li>
        </ul>
      </div>
      <div className="bg-black px-6 py-8">
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-extrabold tracking-wide text-white">
            Understanding the Command
          </h1>
          <span className="mt-2 block h-1 w-[100%] rounded bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500" />
        </div>
      </div>
      <div>
        There are many different input methods for humans interacting with
        robots, but with the rise of Large Language Models (LLMs), there is
        increasing research into natural language commands, allowing a
        non-specialist user to control a specialist robot with ease. The use of
        LLMs was attractive for this project since they enable seamless, fluid
        and natural communication with a machine. However, the task of linking
        this communication to the operation of the robot is more tricky than
        just &quot;plug-and-play.&quot; It can be achieved through many
        different methods, each with their own benefits and drawbacks. <br />
        To stay in line with the company&apos;s Acceptable Use Policy (AUP),
        local models only were used in this project, somewhat limiting the
        methods and approaches to completing this task. However, smaller models
        are becoming very powerful and easy to use through frameworks such as{" "}
        <Code>ollama</Code>. Allowing for simple tasks such as sentiment
        analysis and description matching to be executed efficiently.
      </div>
      <div className="bg-black px-6 py-8">
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-extrabold tracking-wide text-white">
            Perception
          </h1>
          <span className="mt-2 block h-1 w-[100%] rounded bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500" />
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold text-white tracking-wide">
          Segmenting the object
        </h2>
        <div className="mt-1 border-b-2 border-transparent w-[100%]">
          <span className="block h-1 rounded bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400" />
        </div>
      </div>
      The task of segmenting desired objects within an image is a common proplem
      in machine vision. It can be tackled many ways, each with benefits and
      drawbacks. <br />
      Through traditional methods, an object in this given scene could be
      segmented using a combination of colour filters, erosion and contour
      detection. A worked example would look something like this.
      <div className="grid grid-cols-2 gap-2">
        <Card>
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-black/60 uppercase font-bold">
              Environment Task
            </p>
            <h4 className="text-black/80 font-medium text-large">
              Find Red Cubes
            </h4>
          </CardHeader>
          <Image
            className="z-0 rounded-lg"
            src="/PaPEnvironment.png"
            width={image_width * 0.5}
          />
        </Card>
        <Card>
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Colour Mask
            </p>
            <h4 className="text-white/80 font-medium text-large">
              (50, 20, 20) {"<"} RGB {"<"} (255, 85, 40){" "}
            </h4>
          </CardHeader>
          <div className="p-0.5 rounded-lg bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 inline-block">
            <Image
              removeWrapper
              className="z-0 rounded-lg bg-black block"
              src="/RedColourMask.png"
              width={image_width * 0.5}
            />
          </div>
        </Card>
        <Card>
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Erosion
            </p>
            <h4 className="text-white/80 font-medium text-large">
              Erosion to reduce noise
            </h4>
          </CardHeader>
          <div className="p-0.5 rounded-lg bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 inline-block">
            <Image
              removeWrapper
              className="z-0 rounded-lg bg-black block"
              src="/ErodedMask.png"
              width={image_width * 0.5}
            />
          </div>
        </Card>
        <Card>
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-black/60 uppercase font-bold">
              Contour Detection
            </p>
            <h4 className="text-black/80 font-medium text-large">
              Red Cubes Found
            </h4>
          </CardHeader>
          <Image
            className="z-0 rounded-lg"
            src="/DetectedRedCubes.png"
            width={image_width * 0.5}
          />
        </Card>
      </div>
      <div>
        Here, the preset colour mask is applied to binarise the image, making
        any pixel within that colour range white. <br />
        Erosion is then applied to reduce noise and remove the red arrows etc.
        to only be left with the red boxes. <br />
        Whilst this system is very efficient, it requires prior knowledge of the
        boxes&apos; colour and relative size. Trying to get this system to
        instead find the blue boxes would require changing the colour mask
        range, whilst making it find the green boxes would not only require the
        same, but also a filter to remove the arm from the image. As is evident,
        as the scene becomes more complex, this approach becomes more unfeasible
        and so was dismissed for this project.
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold text-white tracking-wide">
          Locating the object
        </h2>
        <div className="mt-1 border-b-2 border-transparent w-[100%]">
          <span className="block h-1 rounded bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400" />
        </div>
      </div>
      Once the centre points of the objects have been found within the images,
      these pixel co-ordinates must be converted into global (x,y,z)
      co-ordinates. Again, there are different ways of achieving this depending
      on the setup. <br />
      One method for this would be by using two cameras, each with known
      intrinsic (camera properties: focal length, pixel size etc.) and extrinsic
      (position and orientation) matrices known. As shown below, once these
      matrices are known, it is then a simple case of drawing a line extending
      from the camera focus, through the pixel centre point and to the object in
      3D space for each camera and then finding the intersection of the lines
      for each object centre.
      <Image src="/Vision.gif" width={image_width} />
      However, this GIF shows a system with assumptions of perfect accuracy and
      no noise. Being unable to assume this in the real world, the maths becomes
      a lot more complex. <br />
      Also... matrix maths is just not fun...
      <Image src="/matrixJoke.png" width={image_width / 2} />
      As well as this, the intrinsic and extrinsic matrices of the cameras must
      be exact. If they are even a little bit inaccurate then the translation of
      pixel-coords to x,y,z coords becomes impossible. <br />
      Therefore, this method was not used in this project and instead
      perspective transforms were used.
      <div className="mt-8">
        <h2 className="text-xl font-bold text-white tracking-wide">
          Perspective Transforms
        </h2>
        <div className="mt-1 border-b-2 border-transparent w-[100%]">
          <span className="block h-1 rounded bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400" />
        </div>
      </div>
      <Image src="/perspectiveJoke.png" width={image_width} />
      Changing the perspective of a given scene can greatly change what is
      needed to process it. In this example, if we were to change the
      perspective of the camera to a bird&apos;s eye view, we can assume all the
      objects are at the same z level and so easily map the x,y pixel coords to
      the real world x,y coords.
      <Link href="https://www.researchgate.net/figure/Perspective-transformation-to-bird-eye-view-a-perspective-view-imageb-Perspective_fig5_358796118">
        <Image
          alt="Perspective transformation to bird’-eye view: a perspective view image.b Perspective transformation. c Bird’’s-eye view image"
          src="/perspectiveTransformDiagram.png"
          width={image_width}
        />
      </Link>
      <div>
        To perform a perspective transform using opencv&apos;s{" "}
        <Code>cv2.getPerspectiveTransform()</Code>, you need to be able to find
        the corners of the area to transform. In the simulation, distinct violet
        markers have been placed in the corners to be easily found by the
        camera. In reality this would likely be done using UV markers but this
        was not able to be simulated. These points are then transformed to a
        virtual plane of 500x500px, representing the bird&apos;s eye view as
        shown below.
      </div>
      <div className="flex grid-cols-2 gap-2">
        <Card>
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-black/60 uppercase font-bold">
              Perspective Transform
            </p>
            <h4 className="text-black/80 font-medium text-large">
              Find Transform Region
            </h4>
          </CardHeader>
          <Image
            className="z-0 rounded-lg"
            src="/TransformRegion.jpg"
            width={image_width * 0.5}
          />
        </Card>

        <Card>
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-black/60 uppercase font-bold">
              Perspective Transform
            </p>
            <h4 className="text-black/80 font-medium text-large">
              After Transform
            </h4>
          </CardHeader>
          <Image
            className="z-0 rounded-lg"
            src="/warped.jpg"
            width={image_width * 0.5}
          />
        </Card>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold text-white tracking-wide">
          Yolo-World
        </h2>
        <div className="mt-1 border-b-2 border-transparent w-[100%]">
          <span className="block h-1 rounded bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400" />
        </div>
      </div>
      <div>
        This transformed image now must undergo object classification to find
        the objects on the floor. To achieve this, Yolo-World has been used in
        this project. <br />
        Multiple methods were explored in this project, such as using a
        combination of Meta&apos;s SAMv2 and a VLLM (Vision Large Language
        Model) to segment and understand the different objects in the image.
        Whilst this was much more effective at understanding different objects
        and colours and filtering based on the user&apos;s input, the processing
        time was much slower than this final method used. <br />
        <br />
        Yolo-World is a model developed by Ultralytics, pioneers of the machine
        vision field with their famous YOLO (You Only Look Once) models.
        Yolo-World is unique for having a language step in their arcitecture to
        understand natural language. In practice, this is done through the input
        of classes, telling the model what objects to classify within the image.{" "}
        <br />
      </div>
      <Link href="https://docs.ultralytics.com/models/yolo-world/">
        <Image
          alt="Yolo-World Architecture"
          src="/yoloWorld.png"
          width={image_width}
        />
      </Link>
      <div>
        The classes used in this example were{" "}
        <Code>
          [&quot;red cube&quot;, &quot;green cube&quot;, &quot;blue cube&quot;,
          &quot;robot arm&quot;]
        </Code>{" "}
        with the idea that this class list would be updated as new objects are
        added to the scene. <br />
        This method was chosed for this project as it allowed all models to be
        ran locally on the device, adhering to the company&apos;s Acceptable Use
        Policy whilst still maintaining processing speed. <br />
        If API calls were available then the previously mentioned work-flow of
        SAMv2 to a VLM would be a much better approach, allowing for new objects
        to be added to the scene without any configuration changes from the
        user.
      </div>
      <Card isFooterBlurred>
        <Image src="/yoloWorldOutput.png" width={image_width * 0.5} />
        <CardFooter className="absolute bg-black/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-white/90 text-small font-bold">YOLO-World</p>
            <p className="text-white/70 font-bold text-tiny">
              Classes: [red cube, green cube, blue cube, robot arm]
            </p>
          </div>
        </CardFooter>
      </Card>
      <div>
        Once this process has been performed on both vision sensors, the centres
        of objects are found and combined into the same perspective (in this
        case, objects from Vision Sensor 1 have been rotated 180 about the
        centre and added to the point of Vision Sensor 2). They are then
        combined with any within other points within a buffer distance, taking
        the average point of any combined points to remove duplicate finds.
      </div>
      <div className="flex grid-cols-2 gap-2">
        <Card>
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-black/60 uppercase font-bold">
              Vision Sensor 1
            </p>
            <h4 className="text-black/80 font-medium text-large">
              Found Object Centres
            </h4>
          </CardHeader>
          <Image
            className="z-0 rounded-lg"
            src="/filteredCenters.png"
            width={image_width * 0.5}
          />
        </Card>

        <Card>
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-black/60 uppercase font-bold">
              Vision Sensor 2
            </p>
            <h4 className="text-black/80 font-medium text-large">
              Found Object Centres
            </h4>
          </CardHeader>
          <Image
            className="z-0 rounded-lg"
            src="/ObjectsFound.png"
            width={image_width * 0.5}
          />
        </Card>
      </div>
      <div>
        Once the centres of been all placed on the same plane, they are then
        filtered based on the user&apos;s input. Each label is put into an LLM
        with a prompt along the lines of &quot;Does this object label fit the
        description of the object described by the user?&quot; This outputs a
        boolean value which is then parsed and used to filter out the centres.
        Shown below are the output locations of two different inputs.
      </div>
      <div className="flex grid-cols-2 gap-2">
        <Card>
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              User Input
            </p>
            <h4 className="text-white font-medium text-large">
              &quot;Pick up the green cubes&quot;
            </h4>
          </CardHeader>
          <div className="p-1 rounded-lg bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 inline-block">
            <Image
              removeWrapper
              className="z-0 rounded-lg bg-black block"
              src="/FilteredObjectsFromInput.png"
              width={image_width * 0.5}
            />
          </div>
        </Card>
        <Card>
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              User Input
            </p>
            <h4 className="text-white font-medium text-large">
              &quot;Just the red cubes please&quot;
            </h4>
          </CardHeader>
          <div className="p-1 rounded-lg bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 inline-block">
            <Image
              removeWrapper
              className="z-0 rounded-lg bg-black block"
              src="/FoundRed.png"
              width={image_width * 0.5}
            />
          </div>
        </Card>
      </div>
      <div className="bg-black px-6 py-8">
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-extrabold tracking-wide text-white">
            Kinematics
          </h1>
          <span className="mt-2 block h-1 w-[100%] rounded bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500" />
        </div>
      </div>
      <div>
        Once the object locations have been found, the arm needs to be moved to
        pick them up. However, moving a robotic arm requires calculating the
        angles for each joint to reach the position, this is called Inverse
        Kinematics. <br />
        For the classic 2D planar IK example, calculating the two angles is
        fairly simple using trigonometry as long as the lengths of the two limbs
        are known as well as the target coordinates. Using the following
        equations:
      </div>
      <div
        style={{
          maxWidth: 700,
          background: "#000000",
          borderRadius: 10,
          padding: 20,
        }}
      >
        <BlockMath math={`D = \\frac{x^2 + y^2 - L_1^2 - L_2^2}{2 L_1 L_2}`} />
        <BlockMath math={`\\theta_2 = \\arccos(D)`} />
        <BlockMath math={`\\varphi = \\arctan2(y,x)`} />
        <BlockMath
          math={`\\psi = \\arctan2\\left(L_2 \\sin \\theta_2, L_1 + L_2 \\cos \\theta_2\\right)`}
        />
        <BlockMath math={`\\theta_1 = \\varphi - \\psi`} />
      </div>
      <Image src="/IK.gif" width={image_width} />
      <Image src="/IK2d.gif" width={image_width} />
      <div>
        Performing this with the traditional 2D planar example, the IK is
        extremely simple, as shown above. However, as the degrees of freedom
        (DOFs) increase and become orthogonal, the complexity increases
        exponentially. Therefore, programming a solution for a 7-DOF arm is
        impractical. For use in coppelia, using the
        <code className="mx-1 px-1 py-0.5 rounded bg-gray-800 text-sm align-middle">
          sim.moveToPose()
        </code>
        command invokes the
        <a
          className="text-purple-400 underline mx-1 align-middle"
          href="https://ruckig.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Ruckig Motion Generator
        </a>
        to plan out the path. <br />
        Applying this to a high DOF arm, we get the following. This knows the
        exact position of all the blocks and first moves to the &quot;home&quot;
        position about the goal before lowering the arm to place the block. This
        was to avoid collisions with the blocks already placed in the goal.
      </div>
      <Image src="/pap.gif" width={image_width} />
      <div className="bg-black px-6 py-8">
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-extrabold tracking-wide text-white">
            Behaviour Trees
          </h1>
          <span className="mt-2 block h-1 w-[100%] rounded bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500" />
        </div>
      </div>
      <Image src="/papVisionBehaviourTree.png" width={image_width * 1.75} />
      <div>
        The above behaviour tree is what controls the system as a whole. <br />
        Behaviour trees were used in this project because the implementation of
        their non-linear control is very easy and modular. Also, the use of the
        blackboard feature meant that it is, in James&apos; words,
        &quot;basically ROS.&quot;
        <br />
        Putting the whole system together, we get the following output.
      </div>
      <div className="flex grid-cols-2 gap-2">
        <Card isFooterBlurred>
          <Image src="/greencubes.gif" width={image_width * 0.5} />
          <CardFooter className="absolute bg-black/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-white/90 text-small font-bold">
                Full System Demo
              </p>
              <p className="text-white/70 font-bold text-tiny">
                User Input: &quot;Pick up the green cubes&quot;
              </p>
            </div>
          </CardFooter>
        </Card>
        <Card isFooterBlurred>
          <Image src="/redcubes.gif" width={image_width * 0.5} />
          <CardFooter className="absolute bg-black/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-white/90 text-small font-bold">
                Full System Demo
              </p>
              <p className="text-white/70 font-bold text-tiny">
                User Input: &quot;Just the red cubes please&quot;
              </p>
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="bg-black px-6 py-8">
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-extrabold tracking-wide text-white">
            Reflections
          </h1>
          <span className="mt-2 block h-1 w-[100%] rounded bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500" />
        </div>
      </div>
      <div>
        This project could have been improved in a number of ways. <br />
        Firstly, due to adhering to the AUP, all models had to be ran locally
        and so the size of any model was significantly limited. If this
        restriction was lifted, API calls to external LLMs would be available.
        This would open doors to using Tool Calls (link), allowing not only the
        LLM to understand the user&apos;s input, but create the sequence of
        function calls, specifying input parameters etc. This would completely
        replace the functionality of the behaviour tree in this example as the
        system would instead be designed to have modular functions such as{" "}
        <Code>moveTargetToCoord(coords: [x, y, z])</Code> which the LLM would be
        able to call to specify the movements. However, a larger model is
        required for this as the reasoning powers to schedule tasks and the
        ability to not hallucinate is required and only found in larger models.{" "}
        <br />
        Another improvement which could be made is taking advantage of the OMPL
        motion planner within Coppelia to make the arm avoid colliding with
        itself whilst carrying out IK tasks. However, this was left out in this
        project as getting this to work through the Python ZMQ API proved a
        difficult task and became low priority. <br />
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
        The ethical problems surrounding having non-specialists control robotics
        always relate to safety. Since the system uses an LLM, the danger of
        prompt injection is real. However, the most control the user would be
        able to gain through this attack in this example would be choosing which
        boxes to pick up. Whilst this is harmless enough, in the future example
        of having the LLM use tool calls and schedule the tasks itself, this can
        become a lot more dangerous. The issue of prompt attacks on LLMs is a
        problem that seems near impossible to defend against since the attack is
        through natural language and so the input space is too large to defend
        against completely, as seen with people successfully
        &quot;jailbreaking&quot; LLMs. Therefore, whilst the concept of having
        LLMs schedule tasks etc. is an interesting subject to study and
        simulate, the practical dangers should be heavily considered before
        implementing it in any real world scenario.
      </div>
    </section>
  );
}
