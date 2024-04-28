import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTiktok,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";

function Footer() {
  return (
    <div className="mt-24">
      <div className=" relative w-full">
        <div className="bg-primary rounded-lg px-4 md:px-24 py-8 flex flex-col gap-4">
          <h1 className="text-xl md:text-6xl font-bold text-white flex flex-col ">
            <span>Reliable and fast delivery</span>
            <span>at your doorstep.</span>
          </h1>
          <Button className="bg-white text-primary max-w-24 rounded-2xl font-bold hover:scale-125 transition-all ease-in-out">
            Order Now
          </Button>
        </div>
        <Image
          src="/foodBoy.png"
          height={70}
          width={200}
          alt="banner"
          className="absolute bottom-0 right-0 h-72 hidden sm:block object-contain"
        />
      </div>
      <div className="bg-gray-400 flex flex-col items-center justify-center mt-2 rounded-lg py-2">
        <Image src={"/logo.png"} height={50} width={50} alt="logo" />
        <p className="text-white">© 2021 FoodBoy. All Rights</p>
        <div className="flex gap-6 text-gray-800 mt-2">
          <span>
            <Link href={"#"}>About</Link>
          </span>
          <span>
            <Link href={"#"}>Careers</Link>
          </span>
          <span>
            <Link href={"#"}>History</Link>
          </span>
        </div>
        <div className="m-4 flex gap-12">
          <span>
            <BsInstagram
              className="hover:scale-125 hover:text-white transition-all ease-in-out"
              size={25}
            />
          </span>
          <span>
            <BsFacebook
              className="hover:scale-125 hover:text-white transition-all ease-in-out"
              size={25}
            />
          </span>
          <span>
            <BsTwitter
              className="hover:scale-125 hover:text-white transition-all ease-in-out"
              size={25}
            />
          </span>
          <span>
            <BsTiktok
              className="hover:scale-125 hover:text-white transition-all ease-in-out"
              size={25}
            />
          </span>
          <span>
            <BsWhatsapp
              className="hover:scale-125 hover:text-white transition-all ease-in-out"
              size={25}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
