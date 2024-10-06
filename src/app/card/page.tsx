import React from "react";
import Image from "next/image";
import AbdulRafay from "../../public/images/AbdulRafay.jpg"

const Card = ({name, age, rollNo, Class}) => {
  return (
    <div className="bg-blue-white rounded-lg shadow-md p-3 max-w-screen-sm mx-auto my-2">
      <Image src={AbdulRafay} alt="picture Abdul Rafay "/>

      <h2 className="flex-auto text-xl font-bold text-gray-800 mb-2">Name:{name}</h2>
      <p className="text-gray-600 mb-2">Age:{age} </p>
      <p className="text-gray-600 mb-2">Roll No:{rollNo}</p>
      <p className="text-gray-600">Class:{Class} </p>
      
    </div>
  );
};

export default Card;

   