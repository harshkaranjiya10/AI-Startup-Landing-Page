import Image from "next/image";

export default function Footer() {
  return (
    <div className="py-5 border-t border-white/15">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <p className="flex items-center gap-2 text-center text-sm">
            <Image
              src="/vercel.svg"
              width={0}
              height={0}
              alt="Logo"
              className="h-4 w-4"
            />
            AI Startup Landing Page
          </p>
          <div className="flex gap-4 text-white/50">
            <p className="hover:text-white/70 cursor-pointer">Insta</p>
            <p className="hover:text-white/70 cursor-pointer">Twitter</p>
            <p className="hover:text-white/70 cursor-pointer">Linkedin</p>
          </div>
        </div>
      </div>
    </div>
  );
}
