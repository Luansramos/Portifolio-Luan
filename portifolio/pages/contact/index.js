import ClickAndCopy from '../../components/Copy';
import ParticleContainer from '../../components/ParticlesContainer';
import Circles from '/components/Circles';
// icons
import { BsArrowRight } from 'react-icons/bs';
// framer
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../../variants';

const Contact = () => {
  return <div className='h-full bg-primary/30 '>
    <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full z-10'>
      {/* text e form */}
      <div className='flex flex-col w-full max-w-[700px] '>
        {/*text  */}
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 text-center mb-12'> Vamos <span className='text-accent'>conversar</span>


        </motion.h2>






        <div className='flex mb-4 mx-auto border border-white/10 rounded-full w-full justify-between ps-5 '  >
          <h1 className='flex items-center  '>

            <span className='text-accent  '>Meu Gmail: </span>
            luangarcia0137@gmail.com</h1>

            <ClickAndCopy textToCopy="luangarcia0137@gmail.com" />
   
        </div>










        {/* form */}
        <motion.form
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex-1 flex flex-col gap-6 w-full mx-auto'>
          {/* group */}
          <div className='flex gap-x-6 w-full'>
            <input type='text' placeholder='nome' className='input' />
            <input type='text' placeholder='email' className='input' />
          </div>

          <input type='text' placeholder='subject' className='input' />
          <textarea placeholder='message' className='textarea' > </textarea>
          <button className='btn rounded-full border border-white/50 max-w-[170px]
            px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>

            <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Enviar</span>

            <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]  ' />

          </button>











        </motion.form>
      </div>

    </div>

    <Circles />
  </div>;
};

export default Contact;
