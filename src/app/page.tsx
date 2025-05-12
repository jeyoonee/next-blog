import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p>I'm Jay</p>
      <Image src="/images/doggy.jpeg" alt="doggy" width={300} height={400} />
    </div>
  );
}
