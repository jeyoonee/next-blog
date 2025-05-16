import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center mb-10">
      <Image
        src="/images/doggy.jpeg"
        alt="doggy"
        width={220}
        height={220}
        className="rounded-full mb-3"
        priority
      />
      <h2 className="font-semibold text-[24px] mb-2">Jeyoon Jeong</h2>
      <h3 className="text-[16px]">A passionate frontend engineer</h3>
    </section>
  );
}
