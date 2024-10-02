import Image from "next/image";

//componentes
import ParticleContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'



import { motion } from "framer-motion";

import { fadeIn } from '../variants'

const Home = () => {
  return (
// texto
    <div className="bg-primary/60 h-full " >


      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">

        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">

          {/* //Titulo */}
          <motion.h1
          variants={fadeIn('down',0.2)} initial="hidden" 
          animate='show'
          exit={'hidden'}
          
          className="h1" > transformando ideias <br /> Into{''}
            <span className="text-accent"> Digital Realist</span>
          </motion.h1>

          {/* //subtitulo */}
          <motion.p 
          variants={fadeIn('down',0.3)} initial="hidden" 
          animate='show'
          exit={'hidden'}
          className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">lorem aaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaa aaaa aaaaaa aaa aaa aaaa a</motion.p>

          <div className="flex justify-center xl:hidden relative">  
            <ProjectsBtn/>
          </div>
          <motion.div 
          variants={fadeIn('down',0.4)} initial="hidden" 
          animate='show'
          exit={'hidden'}
          className="hidden xl:flex"
          
          > 
            
            <ProjectsBtn/>
          
          </motion.div>


        </div>
      </div>
      {/* //imagem  */} <div className="w-[1200px] h-full absolute right-0 bottom-0"> 
      {/* bg imagem */} <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge transition-z-0"></div>
      {/* particulas */} <div className="">
        particulas
      </div>
      {/* avatar */} <div>
        <Avatar/>
      </div>
      </div>

    </div>
  );

};

export default Home;
