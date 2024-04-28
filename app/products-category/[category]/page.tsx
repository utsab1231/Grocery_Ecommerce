import React from "react";
import { DataDatum, ProductDatum } from "@/app/_types/api";
import GlobalAPI, { DataValue } from "@/app/_services/GlobalAPI";
import Slider from "@/app/_components/Slider";
import ProductsCard from "@/app/_components/ProductsCard";
import CategoriesList from "@/app/_components/CategoriesList";
interface IParams {
  category: string;
}
async function page({ params }: { params: IParams }) {
  let data: ProductDatum[] | undefined;
  let categoriesData: DataValue[] | undefined;

  try {
    categoriesData = await GlobalAPI.getCategoriesList();
    data = await GlobalAPI.getFilteredProducts(
      decodeURIComponent(params.category)
    );
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="p-12 px-16 flex flex-col gap-4 ">
      <div className="bg-primary text-center p-4 rounded-lg">
        <h1 className="text-3xl font-bold text-white">
          {decodeURIComponent(params.category)}
        </h1>
      </div>
      <div className="flex justify-center">
        <CategoriesList data={categoriesData} showTitle={true} />
      </div>
      <ProductsCard data={data} />
    </div>
  );
}

export default page;
