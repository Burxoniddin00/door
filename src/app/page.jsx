import Image from "next/image";
import img from "../img/wd.png";

export default function Home() {
  return (
    <div className="mt-16 flex flex-col md:flex-row justify-center text-center items-center pb-7">
      <div className="max-w-[90%] md:max-w-[50%]">
        <h1 className="min-[650px]:text-5xl min-[650px]:font-extrabold font-bold text-4xl">
          Mdoors - Bu qulay tanlov
        </h1>
        <div className="mt-10 min-[650px]:text-xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, eaque
          consectetur, ratione est, ullam ea odio deleniti at illum molestias
          alias? Accusamus quaerat assumenda nobis! Ad unde voluptates excepturi
          dolorum.
        </div>
        <div className="flex flex-col md:flex-row gap-7 justify-center text-center mt-16">
          <button className="text-black bg-white p-2 font-semibold text-xl rounded-2xl">
            Sinab ko&apos;rish
          </button>
          <button className="text-black bg-white p-2 font-semibold text-xl rounded-2xl">
            Sinab ko&apos;rish
          </button>
        </div>
      </div>
      <div className="mt-10 md:mt-0 md:ml-10">
        <Image src={img} alt="img" />
      </div>
    </div>
  );
}
