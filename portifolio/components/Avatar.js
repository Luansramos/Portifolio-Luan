import Image from "next/image";
import imgavatar from '../public/avatar.png'

const Avatar = () => {
  return <div className=" hidden xl:flex xl:max-w-none">

    <Image src={imgavatar}
    width={737}
    height={678}
    alt=""
    className="translate-x-0 w-full h-full "
    />
  </div>;
};

export default Avatar;
