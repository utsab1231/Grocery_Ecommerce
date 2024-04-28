"use client";
import { ProductDatum } from "@/app/_types/api";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BsCart } from "react-icons/bs";
import { useState } from "react";

interface ProductDetailModalProps {
  data: ProductDatum;
}

const ProductDetailModal = ({ data }: ProductDetailModalProps) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <Image
        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${data.attributes.Image.data[0].attributes.formats.small.url}`}
        alt={data.attributes.Image.data[0].attributes.name}
        width={500}
        height={200}
        className="h-[200px] w-[200px] object-contain "
        priority
      />
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl">{data.attributes.name}</h1>
        <hr />
        <p className="text-lg">{data.attributes.description}</p>
        <div className="text-2xl font-bold">
          {data.attributes.SellingPrice ? (
            <span className="flex gap-2">
              <p>Rs.{data.attributes.SellingPrice}</p>
              <p className="text-gray-500 line-through">
                Rs.{data.attributes.MRP}
              </p>
              <p>/{data.attributes.unit}</p>
            </span>
          ) : (
            <span>
              Rs.{data.attributes.MRP} / {data.attributes.unit}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3 my-3">
          <div className="flex border rounded-md gap-6 px-3 py-2 justify-center items-center">
            <button
              onClick={() => setQuantity(quantity - 1)}
              disabled={quantity === 1}
              className="font-bold cursor-pointer"
            >
              <span className="text-xl font-semibold">-</span>
            </button>
            <span className="text-xl">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="cursor-pointer"
            >
              <span className="text-xl font-semibold">+</span>
            </button>
          </div>
          <div className="text-2xl">
            = Rs.
            {data.attributes.SellingPrice
              ? data.attributes.SellingPrice * quantity
              : data.attributes.MRP * quantity}
          </div>
        </div>
        <Button>
          <BsCart />
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductDetailModal;
