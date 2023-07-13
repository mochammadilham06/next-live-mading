import Card from "@live-component/Card";
import { Buildings } from "@live-config/images";
import Image from "next/image";
import React, { FC } from "react";
import { Post } from "src/interface/user";

const GalleryCard = ({ data }: any) => {
  return (
    <Card>
      <div className="grid sm:grid-cols-2 gap-4">
        {data?.map((item: Post) => (
          <div
            key={item.id}
            className="rounded-md overflow-hidden flex items-center h-48 shadow-md"
          >
            <img
              src={item.image}
              alt="photos"
              className="object-cover object-center w-full h-full"
            />
            {/* <Image
              src={item.image}
              priority={true}
              alt=""
              width={500}
              height={300}
            /> */}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default GalleryCard;
