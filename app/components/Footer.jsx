import React from "react";
import Image from 'next/image';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Link href={"/"}className="text-2xl md:text-5xl text-white font-semibold">
          <Image src="/images/hero-image.png" width={70} height={70}/>
        </Link>
        <p className="text-slate-600">Aaron C. Saralegui © 2023 </p>
      </div>
    </footer>
  );
};

export default Footer;