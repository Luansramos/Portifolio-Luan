import React, { useState } from "react";
//Motion
import { motion } from 'framer-motion';

import { fadeIn } from '../../variants';
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaPython,
  FaFileExcel,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//counter
import CountUp from "react-countup";
//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Desenvolvimento',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <FaPython />
        ],
      },
      {
        title: 'Programas',
        icons: [<FaFigma />, <FaFileExcel />],
      },

    ],
  },
  //{
  //   title: 'awards',
  //   info: [
  //     {
  //       title: 'Webby Awards - Honoree',
  //       stage: '2011 - 2012',
  //     },
  //     {
  //       title: 'Adobe Design Achievement Awards - Finalist',
  //       stage: '2009 - 2010',
  //     },
  //   ],
  // },
  {
    title: 'experience',
    info: [
      {
        title: 'Sem Experiência ',
        stage: '',
      },
      // {
      //   title: 'Web Developer - ABC Agency',
      //   stage: '2010 - 2012',
      // },
      // {
      //   title: 'Intern - DEF Corporation',
      //   stage: '2008 - 2010',
      // },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Python - FIAP',
        stage: '2024',
      },
      {
        title: 'CSS  e  HTML - FIAP',
        stage: '2024',
      },
      {
        title: 'javaScript - FIAP',
        stage: '2024',
      },
      {
        title: 'React - FIAP',
        stage: '2024',
      },

    ],
  },
];
//componentes
import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'
import { RiExchangeLine } from "react-icons/ri";


const About = () => {
  const [index, setIndex] = useState(0);

  return (

    <div className="h-full bg-primary/30 py-32 text-center xl:text-left ">
      <Circles />
      {/* avatar */}
      <motion.div variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="hidden xl:flex absolute bottom-0 -left-[370px] "
      >


        <Avatar />

      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 ">
        {/* texto */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="h2 ">
            Desenvolvedor de Software em 


            <span className="text-accent"> Ascensão  </span>

          </h2>

          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            Desenvolvedor no primeiro ano de Engenharia de Software, com habilidades sólidas em soluções tecnológicas e foco no desenvolvimento contínuo. Dedicação, proatividade e adaptabilidade são pontos fortes que permitem enfrentar desafios com eficiência. A comunicação clara e o trabalho em equipe garantem um desempenho colaborativo em projetos, sempre buscando excelência e inovação
          </p>
          {/* counters */}

        </div>
        {/* info */}

        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px] ">
          <div className="flex gap-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (

                <div key={itemIndex}
                  className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300  '} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 `}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>

          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">

            {aboutData[index].info.map((item, itemIndex) => {


              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                  {/* titulo */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex ">-</div>
                  <div>{item.stage} </div>
                  <div className="flex gap-4">
                    {/* icon */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2xl text-white">{icon} </div>;
                    })}
                  </div>
                </div>

              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;
