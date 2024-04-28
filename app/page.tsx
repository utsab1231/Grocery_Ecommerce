import CategoriesList from "./_components/CategoriesList";
import Footer from "./_components/Footer";
import ProductsCard from "./_components/ProductsCard";
import Slider from "./_components/Slider";
import GlobalAPI, { DataValue } from "./_services/GlobalAPI";
import { DataDatum, ProductDatum } from "./_types/api";

export default async function Home() {
  let sliderData: DataDatum[] | undefined;
  let categoriesData: DataValue[] | undefined;
  let productsData: ProductDatum[] | undefined;
  try {
    sliderData = await GlobalAPI.getSlidersList();
    categoriesData = await GlobalAPI.getCategoriesList();
    productsData = await GlobalAPI.getProductList();
  } catch (error) {
    console.log(error);
  }
  return (
    <div className="p-12 px-16 flex flex-col gap-8">
      <Slider data={sliderData} />
      <CategoriesList data={categoriesData} />
      <ProductsCard data={productsData} />
      <Footer />
    </div>
  );
}
