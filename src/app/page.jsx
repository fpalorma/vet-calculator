"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const [isDog, setIsDog] = useState(false);
  const [isCat, setIsCat] = useState(false);
  const [isScale, setIsScale] = useState("");

  const handleOnDogClick = () => {
    setIsCat(false);
    setIsDog(true);
  };

  const handleOnCatClick = () => {
    setIsCat(true);
    setIsDog(false);
  };

  const handleOnScaleChange = (event) => {
    setIsScale(event.target.value);
  };

  const isButtonEnabled = (isDog || isCat) && isScale !== "";

  const handleOnContinue = () => {
    if (isCat && isScale === "full") {
      router.push("./catFull");
    } else if (isCat && isScale === "fast") {
      router.push("./catFast");
    } else if (isDog && isScale === "full") {
      router.push("./dogFull");
    } else if (isDog && isScale === "fast") {
      router.push("./dogFast");
    } else if (isDog && isScale === "vetcot") {
      router.push("./dogVetcot");
    }
  };

  return (
    <main className="block text-center">
      <h2 className="text-2xl font-bold">Seleccionar raza</h2>
      <div className="flex justify-center gap-4">
        <button
          className={`border-4 p-2 m-4 ${
            isDog ? "border-blue-500" : "border-gray-300"
          }`}
          onClick={handleOnDogClick}
        >
          {" "}
          <Image width="100" height="100" src="./dog.svg" alt="dog icon" />
          Perro
        </button>
        <button className={`border-4 p-2 m-4 ${
            isCat ? "border-blue-500" : "border-gray-300"
          }`} onClick={handleOnCatClick}>
          <Image width="100" height="100" src="./cat.svg" alt="cat icon" />
          Gato
        </button>
      </div>
      <h2 className="text-2xl font-bold mt-2 mb-2">Seleccionar escala</h2>
      {isDog&&(
 <select className="block appearance-none mx-auto  bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" name="select" onChange={handleOnScaleChange} value={isScale}>
 <option value="">Seleccione una escala</option>
 <option value="full">Full</option>
 <option value="fast">Fast</option>
 <option value="vetcot">VetCOT</option>
</select>
      )}
      {isCat&&(
         <select className="block appearance-none mx-auto  bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" name="select" onChange={handleOnScaleChange} value={isScale}>
         <option value="">Seleccione una escala</option>
         <option value="full">Full</option>
         <option value="fast">Fast</option>
       </select>
      )}
     
      
      <div className="mt-8">

      <button className={` text-white font-bold py-2 px-4 rounded ${isButtonEnabled?"bg-blue-500 hover:bg-blue-700":"bg-blue-400"}`}onClick={handleOnContinue} disabled={!isButtonEnabled}>
        Continuar
      </button>
      </div>
    </main>
  );
}
