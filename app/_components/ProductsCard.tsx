import Image from "next/image";
import { ProductDatum } from "../_types/api";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import ProductDetailModal from "./modal/ProductDetailModal";

function ProductsCard({ data }: { data: ProductDatum[] | undefined }) {
  return (
    data && (
      <div className="flex flex-col gap-4">
        <h1 className="text-primary text-3xl">Our Popular Products</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.map((item, index) => {
            return (
              index < 8 && (
                <div
                  className="flex flex-col justify-center items-center gap-5 p-2 md:p-6 border rounded-lg hover:scale-105 hover:shadow-md transition-all ease-in-out"
                  key={item.id}
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.attributes.Image.data[0].attributes.formats.small.url}`}
                    alt={item.attributes.Image.data[0].attributes.name}
                    width={500}
                    height={200}
                    className="h-[200px] w-[200px] object-contain "
                    priority
                  />
                  <h1 className="text-sm md:text-2xl font-bold">
                    {item.attributes.name}
                  </h1>

                  <div className="text-sm md:text-xl font-bold">
                    {item.attributes.SellingPrice ? (
                      <span className="flex gap-2">
                        <p>Rs.{item.attributes.SellingPrice}</p>
                        <p className="text-gray-500 line-through">
                          Rs.{item.attributes.MRP}
                        </p>
                        <p>/{item.attributes.unit}</p>
                      </span>
                    ) : (
                      <span>
                        Rs.{item.attributes.MRP} / {item.attributes.unit}
                      </span>
                    )}
                  </div>
                  <Dialog modal={true}>
                    <DialogTrigger asChild>
                      <Button
                        variant={"outline"}
                        className="text-primary hover:bg-primary hover:text-white"
                      >
                        Add to cart
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <ProductDetailModal data={item} />
                    </DialogContent>
                  </Dialog>
                </div>
              )
            );
          })}
        </div>
      </div>
    )
  );
}

export default ProductsCard;
