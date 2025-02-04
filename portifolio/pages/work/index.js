import WorkSlider from '../../components/WorkSlider';
import Buld from '../../components/Buld';
import Circles from '../../components/Circles';

// fromar motion

import {motion} from 'framer-motion';
import { fadeIn } from '../../variants';



const Work = () => {
    return(
        <div className='h-full bg-primary/30 py-36 flex items-center'>
            <Circles />
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-8'>
                    {/* text */}
                    <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
                        <motion.h2
                        variants={fadeIn('up', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='h2 xl:mt-8'
                        >
                            Meus Trabalhos <span className='text-accent'>.</span>
                        </motion.h2>
                        <motion.p 
                        variants={fadeIn('up', 0.4)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='mb-4 max-w-[400px] mx-auto lg:mx-0 '
                        
                        >
                            Explore meus projetos e veja de perto nossas soluções. Clique nas imagens para conferir cada projeto em detalhes

                        </motion.p>

                    </div>
                    {/* slider */}
                    <motion.div
                    variants={fadeIn('up', 0.6)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='w-full xl:max-w-[65%]'
                    >
                    <WorkSlider/>
                    </motion.div>
                </div>

            </div>

        <Buld/>
        </div>
    );
};

export default Work