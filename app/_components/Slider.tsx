import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { DataDatum } from "../_types/api";
import Image from "next/image";

export default function Slider({ data }: { data: DataDatum[] | undefined }) {
  return (
    data && (
      <Carousel>
        <CarouselContent className="">
          {data?.map((item) => (
            <CarouselItem key={item.id}>
              <Image
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.attributes.image.data[0].attributes.formats.medium.url}`}
                alt={item.attributes.image.data[0].attributes.name}
                className="w-full max-w-full h-[200px] md:h-[450px] max-h-[450px] object-cover rounded-2xl"
                width={1300}
                height={450}
                priority
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-blue-900" />
        <CarouselNext className="text-blue-900" />
      </Carousel>
    )
  );
}
