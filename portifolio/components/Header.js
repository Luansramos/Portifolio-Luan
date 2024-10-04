import Image from "next/image";

// link
import Link from "next/link";
import Socials from '../components/Socials'


const Header = () => {
  return <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
    <div className="container mx-auto ">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-0 py-8  ">
        {/* logo */}
        <Link href={'/'}>
          <Image src={'/logosemfundo1.png'}
            width={220}
            height={48}
            alt=""
            priority={true}
          >


          </Image>

        </Link>

        {/* sociais */}

        <Socials />
      </div>

    </div>


  </header>;
};

export default Header;
