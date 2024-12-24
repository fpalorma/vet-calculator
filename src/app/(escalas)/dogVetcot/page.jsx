"use client";
import { useForm } from "react-hook-form";
import Modal from "@/app/components/Modal.jsx";
import { useState } from "react";

export default function Page() {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const [isModal, setModal] = useState(false);
  const [score, setScore] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const onSubmit = handleSubmit((data) => {
    function sumObjectValues(obj) {
      return Object.values(obj).reduce((sum, value) => sum + value, 0);
    }
    const totalScore = sumObjectValues(data);
    setScore(totalScore);
    const e = 2.71;
    const y = 0.700473 + 0.342245*data.lactate - 3.89630*data.cai + 1.42343*data.tec + 2.01600*data.traumaEspinal
    const probabilidad = (e**y)/(1+(e**y));
    setPercentage(Math.floor(probabilidad * 100));
    setModal(true);
  });

  const closeModal = () => {
    setModal(false);
  };

  return (
    <main className="block text-center">
      <h1 className="text-2xl font-bold ">Escala VetCOT</h1>
      <form onSubmit={onSubmit}>
        <div className=" mx-auto w-fit mb-4">
          <label
            className="block  tracking-wide text-gray-700 text-sm font-bold mb-2 mt-2 text-start"
            htmlFor="tec"
          >
            Trauma encefalocraneano
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="tec"
              {...register("tec", { valueAsNumber: true })}
            >
              <option value={0}>Ausente</option>
              <option value={1}>Presente</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          <label
            className="block  tracking-wide text-gray-700 text-sm font-bold mb-2 mt-2 text-start"
            htmlFor="traumaEspinal"
          >
            Trauma espinal
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="traumaEspinal"
              {...register("traumaEspinal", { valueAsNumber: true })}
            >
              <option value={0}>Ausente</option>
              <option value={1}>Presente</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <div>
            <label
              className="block  tracking-wide text-gray-700 text-sm font-bold mb-2 mt-2 text-start"
              htmlFor="lactate"
            >
              Lactate (mmol/L)
            </label>
            <input
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="lactate"
              type="number"
              placeholder="0"
              step="0.01"
              {...register("lactate", { valueAsNumber: true, required:true, min:0 })}
            />
            {errors.lactate?.type === "required" && <small className="text-red-600 text-sm">Debe ingresar un valor</small>}
            {errors.lactate?.type === "min" && <small className="text-red-600 text-sm">El valor debe ser mayor a cero</small>}

          </div>
          <div>
            <label
              className="block  tracking-wide text-gray-700 text-sm font-bold mb-2 mt-2 text-start"
              htmlFor="cai"
            >
              Cai (mmol/L)
            </label>
            <input
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="cai"
              type="number"
              placeholder="0"
              step="0.01"
              {...register("cai", { valueAsNumber: true, required:true, min:0 })}
            />
             {errors.cai?.type === "required" && <small className="text-red-600 text-sm">Debe ingresar un valor</small>}
             {errors.cai?.type === "min" && <small className="text-red-600 text-sm">El valor debe ser mayor a cero</small>}
          </div>

          <button
            type="submit"
            className={` text-white font-bold py-2 px-4 rounded bg-blue-600 mb-4 mt-8`}
          >
            Continuar
          </button>
        </div>
      </form>
      {isModal && (
        <Modal
          titulo="VetCOT"
          percentage={percentage}
          totalScore={score}
          handleOnClick={closeModal}
        />
      )}
    </main>
  );
}
