"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { LayoutGrid, Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import GlobalAPI, { DataValue } from "../_services/GlobalAPI";
import { useEffect, useState } from "react";

function Header() {
  const [item, setItem] = useState<DataValue[]>();

  useEffect(() => {
    GlobalAPI.getCategories().then((data) => {
      setItem(data);
    });
  }, []);
  return (
    item && (
      <div className="p-5 shadow-md flex justify-between">
        <div className="flex items-center gap-8">
          <Image
            src="/logo.png"
            alt="Grocery Nepal"
            height={100}
            width={100}
            priority
          />
          <div className="hidden sm:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <h2 className="flex gap-2 items-center border rounded-full bg-slate-200 p-2 px-10 cursor-pointer">
                  <LayoutGrid className="h-5 w-5" />
                  Category
                </h2>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Browse Categories</DropdownMenuLabel>
                <ul className=" p-2">
                  {item?.map((data) => {
                    return (
                      <DropdownMenuItem
                        key={data.id}
                        className="flex gap-2 items-center"
                      >
                        <Image
                          src={
                            process.env.NEXT_PUBLIC_BACKEND_URL +
                            data?.attributes?.Icon?.data[0]?.attributes?.url
                          }
                          alt={
                            data?.attributes?.Icon?.data[0]?.attributes
                              ?.alternativeText || "category-image"
                          }
                          width={20}
                          height={20}
                        />
                        {data?.attributes?.Category}
                      </DropdownMenuItem>
                    );
                  })}
                </ul>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="gap-3 items-center border rounded-full p-2 px-5 hidden sm:flex ">
            <Search className="cursor-pointer" />
            <input
              type="text"
              placeholder="search "
              className="outline-none w-36 lg:w-52"
            />
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <h2 className="flex gap-2 items-center text-lg">
            <ShoppingBag className="h-5 w-5" />
            Cart
          </h2>
          <Button>Login</Button>
        </div>
      </div>
    )
  );
}
export default Header;
