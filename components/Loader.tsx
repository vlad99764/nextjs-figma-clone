import Image from "next/image";

const Loader = () => (
  <div className="flex h-screen w-screen flex-col items-center justify-center gap-2">
    <Image
      src="/assets/loader.svg"
      alt="loader"
      width={200}
      height={200}
      className="object-contain"
    />
    <p className="mt-4 text-lg font-bold text-primary-grey-300 tracking-widest">Loading...</p>
  </div>
);

export default Loader;
