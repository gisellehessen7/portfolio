import React from 'react';
import Image from 'next/image';



const AboutPage = () => {
  return (
    <div className='main-container'>
      <h1>Giselle Hessen</h1>
       <Image src="/images/profil.png" alt="Photo de profil" width={300} height={300} className="cursor-pointer" />
      <h2>Mes Intérêts</h2>
    </div>
  );
};

export default AboutPage;
