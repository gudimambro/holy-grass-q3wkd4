"use client";
import Button from "@/components/Button";
import Image from "next/image";
import React, { FC } from "react";

interface IDetail {
  title: string;
  url: string;
  description: string;
}

const Card: FC<IDetail> = (props) => {
  const handlerClick = () => {
    console.log("handlerClick");
  };

  return (
    <div>
      <div className="mt-3 border rounded-md overflow-hidden">
        <Image
          className="object-cover w-full h-[80vh]"
          src={props.url}
          alt={props.title}
          width={0}
          height={0}
          sizes="100"
        />
        <Button onClick={() => handlerClick()}>click</Button>
        <div className="py-4 px-5">
          <div className="text-lg font-semibold">{props.title}</div>
          <div className="mt-2">{props.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
