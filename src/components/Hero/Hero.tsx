import { FC } from "react";
import Image from "next/image";

type ButtonProps = {};

const Hero: FC<ButtonProps> = () => {
   return <div>
        <Image src="/logo.png" alt="logo" width={100} height={100} />
   </div>;
};

export default Hero;
