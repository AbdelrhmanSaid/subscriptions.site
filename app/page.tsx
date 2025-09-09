import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen">
      <Image src="/logo.png" alt="logo" width={100} height={100} />
      <p className="text-2xl font-sans">Something great is coming soon</p>
    </div>
  );
}
