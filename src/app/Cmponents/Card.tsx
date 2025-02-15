"use client";
import React from "react";
import Image from "next/image";
import AbdulRafay from "../../public/images/AbdulRafay.jpg"

interface CardProps {
  name: string;
  age: number;
  rollNo: string;
  studentClass: string;
}


const Card:React.FC<CardProps> = ({name, age, rollNo, studentClass}) => {
  return (
    <div className="bg-blue-white rounded-lg shadow-md p-3 max-w-screen-sm mx-auto my-2">
      <Image src={AbdulRafay} alt="picture Abdul Rafay  width={40} heigh={40}"/>

      <h2 className="flex-auto text-xl font-bold text-gray-800 mb-2">Name:{name}</h2>
      <p className="text-gray-600 mb-2">Age:{age} </p>
      <p className="text-gray-600 mb-2">Roll No:{rollNo}</p>
      <p className="text-gray-600">StudentClass:{studentClass} </p>
      
    </div>
  );
};

export default Card;

   