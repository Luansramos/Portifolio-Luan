import Link from "next/link";

//icon
import { 
  RiInstagramLine, 
  RiLinkedinLine, 
  RiGithubLine
} from 'react-icons/ri'


const Socials = () => {
  return (
  <div className="flex items-center gap-x-5 text-lg ">
    {/* <Link href={''} className="hover:text-accent transition-all duration-300"> <RiInstagramLine/>   
    </Link> */}
    <Link href={'https://www.linkedin.com/in/luan-ramos-garcia-ab23a51a7/'} className="hover:text-accent transition-all duration-300"> <RiLinkedinLine/>   
    </Link>
    <Link href={'https://github.com/Luansramos'} className="hover:text-accent transition-all duration-300"> <RiGithubLine/>   
    </Link>

  </div>
  )
};

export default Socials;
