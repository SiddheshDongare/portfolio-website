import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Siddhesh Dongare</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Software Engineer & Gen-AI Developer</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
         I'm a passionate full-stack developer with a knack for building full-scale Generative AI SaaS products using Python. My journey in tech has been both challenging and rewarding, earning recognition for innovative work in AI along the way. I'm constantly pushing the boundaries of what's possible, driven by curiosity and a love for solving real-world problems.{' '}
         <br />
         Beyond coding, I'm always looking to grow—whether that's diving into new technologies or even learning languages 
         <span className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600">
            (I've got an N5 certification in Japanese to prove it 😁)
         </span>{' '}
         For me, every project is an opportunity to create something meaningful, and I bring a blend of creativity, dedication, and a bit of quirkiness to everything I do.
         </p>
      </div>
   )
}

export default Intro;