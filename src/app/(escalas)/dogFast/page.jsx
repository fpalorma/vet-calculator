"use client";
import { useForm } from "react-hook-form";
import Modal from "@/app/components/Modal.jsx";
import { useState } from "react";

export default function Page() {
  const { register, handleSubmit } = useForm();
  const [isModal, setModal] = useState(false);
  const [score, setScore] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const onSubmit = handleSubmit((data) => {
    function sumObjectValues(obj) {
      return Object.values(obj).reduce((sum, value) => sum + value, 0);
    }
    const totalScore = sumObjectValues(data);
    setScore(totalScore);
    const r2 = 0.249 * totalScore - 7.020;
    const probabilidad = 2.71 ** r2 / (1 + 2.71 ** r2);
    setPercentage(Math.floor(probabilidad * 100));
    setModal(true);
  });

  const closeModal = () => {
    setModal(false);
  };

  return (
    <main className="block text-center">
      <h1 className="text-2xl font-bold ">Escala Apple fast para perro</h1>
      <form onSubmit={onSubmit}>
        <div className=" mx-auto w-fit mb-4">
          <label
            className="block  tracking-wide text-gray-700 text-sm font-bold mb-2 mt-2 text-start"
            htmlFor="glucose"
          >
            Glucose(mg/dL)
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="glucose"
              {...register("glucose", { valueAsNumber: true })}
            >
              <option value={0}>&gt; 273</option>
              <option value={10}>165 - 273</option>
              <option value={9}>103 - 164</option>
              <option value={8}>84 - 102</option>
              <option value={7}>&lt; 84</option>
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
            htmlFor="albumin"
          >
            Albumin(g/dL)
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="albumin"
              {...register("albumin", { valueAsNumber: true })}
            >
              <option value={0}>3.3 - 3.5</option>
              <option value={2}>&gt; 3.5</option>
              <option value={6}>3.1 - 3.2</option>
              <option value={7}>2.6 - 3.0</option>
              <option value={8}>&lt; 2.6</option>
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
            htmlFor="lactate"
          >
            Lactate(mg/dL)
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="lactate"
              {...register("lactate", { valueAsNumber: true })}
            >
              <option value={0}>&lt; 18.0</option>
              <option value={4}>18.0 - 72.1</option>
              <option value={8}>72.2 - 90.1</option>
              <option value={12}>&gt; 90.1</option>
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
            htmlFor="platelet count"
          >
            Platelet count (x 10^9/L)
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="platelet count"
              {...register("platelet count", { valueAsNumber: true })}
            >
              <option value={0}>261 - 420,000</option>
              <option value={1}>&gt; 420</option>
              <option value={3}>201 - 260</option>
              <option value={6}>151 - 200</option>
              <option value={5}>&lt; 151</option>
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
            htmlFor="mentation"
          >
            Mentation score (mg/dL)
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="mentation"
              {...register("mentation", { valueAsNumber: true })}
            >
              <option value={0}>0</option>
              <option value={4}>1</option>
              <option value={6}>2</option>
              <option value={7}>3</option>
              <option value={14}>4</option>
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
          titulo="Escala Apple fast para perro"
          percentage={percentage}
          totalScore={score}
          handleOnClick={closeModal}
        />
      )}
    </main>
  );
}
