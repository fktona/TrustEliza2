import Image from "next/image";

export default function Home() {
  return (
    <div className=" text-white relative isolate w-full h-dvh">
      <Image
        src="/bg.png"
        width={1920}
        height={1080}
        objectFit="cover"
        alt="bg"
        className="w-full  h-full absolute object-cover -z-10"
      />
      <Image
        src="/noise.png"
        width={1920}
        height={1080}
        objectFit="cover"
        alt="bg"
        className="w-full h-full absolute object-cover -z-10"
      />
      <Navbar />
      <div className="text-[15px] w-full lg:w-auto flex flex-col items-center gap-3 absolute bottom-6 px-5 ">
        <div className=" px-3  lg:hidden flex gap-1 items-center py-2 ">
          <a
            href="#"
            className="  w-16 h-16 flex items-center rounded-tl-2xl rounded-bl-2xl justify-center lg:rounded-tl-lg lg:rounded-bl-lg bg-white/10"
          >
            <Image src="/x.png" width={30} height={30} alt="x" />
          </a>
          <a
            href="#"
            className="  w-16 h-16 flex items-center justify-center  bg-white/10"
          >
            <Image src="/truth.png" width={30} height={30} alt="truth" />
          </a>
          <a
            href="#"
            className=" w-16 h-16 flex  rounded-tr-2xl rounded-br-2xl items-center justify-center lg:rounded-tr-lg lg:rounded-br-lg bg-white/10"
          >
            <Image src="/pump.png" width={30} height={30} alt="pump" />
          </a>
        </div>
        <span className="">Built with TruthIntel & Eliza 💙</span>
      </div>
    </div>
  );
}

const Navbar = () => {
  return (
    <nav className="w-full h-[80px] font-inter  flex justify-between items-center px-5">
      <h2 className="text-[40px] uppercase font-digital">TrustEliza</h2>
      <div className=" px-3 lg:flex gap-1 hidden items-center py-2 ">
        <a
          href="#"
          className="  w-12 h-12 hover:bg-black/40 active:scale-95 flex items-center justify-center lg:rounded-tl-lg  lg:rounded-bl-lg bg-white/10"
        >
          <Image src="/x.png" width={24} height={24} alt="x" />
        </a>
        <a
          href="#"
          className="  w-12 h-12 flex hover:bg-black/40 active:scale-95 items-center justify-center  bg-white/10"
        >
          <Image src="/truth.png" width={24} height={20} alt="truth" />
        </a>
        <a
          href="#"
          className=" w-12 h-12 flex hover:bg-black/40 active:scale-95 items-center justify-center lg:rounded-tr-lg  lg:rounded-br-lg  bg-white/10"
        >
          <Image src="/pump.png" width={24} height={24} alt="pump" />
        </a>
      </div>
    </nav>
  );
};
