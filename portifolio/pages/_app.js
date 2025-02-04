import '../styles/globals.css';

//componentes
import Layout from '../components/Layout';

import Transition from '../components/Transition';


import { useRouter } from 'next/router';

import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full min-h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200'>
        
          <Transition/>
          <Component {...pageProps} />

        </motion.div>
      </AnimatePresence>

    </Layout>
  );
}

export default MyApp;
