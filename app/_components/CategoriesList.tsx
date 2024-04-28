import React from "react";
import { DataValue } from "../_services/GlobalAPI";
import Image from "next/image";

function CategoriesList({ data }: { data: DataValue[] | undefined }) {
  return (
    <div className="mt-6">
      <h1 className="text-primary font-bold text-2xl">Shops by Category</h1>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 cursor-pointer  ">
        {data?.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center bg-green-50 p-4 mt-2 rounded-lg group hover:shadow-lg hover:bg-green-400"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.attributes.Icon.data[0].attributes.url}`}
              alt={item.attributes.Icon.data[0].attributes.name}
              width={50}
              height={50}
              className="group-hover:scale-[1.2] transition-all duration-300 ease-in-out"
            />
            <p>{item.attributes.Category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesList;
