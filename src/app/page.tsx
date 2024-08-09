import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className='main-container'>
       <h1 className="font-custom text-7xl font-primary mb-4">
        Giselle 
        <br /> Hessen
      </h1>
      <Image src="/images/star.svg" alt="étoile" width={50} height={50} className="cursor-pointer animate-slow-rotate" />

      <ul className="text-xl font-secondary list-disc list-inside list-none space-y-2">
        <li>développeuse web</li>
        <li>designer ux/ui</li>
        <li>monteuse vidéo</li>
      </ul>
      <Link href="/projects">
              Voir mes projets
        </Link>
    </div>
  );
};

export default HomePage;
