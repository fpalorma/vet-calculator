"use client";
import { useForm } from "react-hook-form";

export default function Page() {
  const { register, handleSubmit } = useForm();

  return (
    <main className="block text-center">
      <h1 className="text-2xl font-bold ">Escala Apple fast para gato</h1>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          console.log(typeof data.age);
        })}
      >
        <div className=" mx-auto w-fit mb-4">
          <label
            className="block  tracking-wide text-gray-700 text-sm font-bold mb-2 mt-2 text-start"
            htmlFor="mentation"
          >
            Mentation score
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="mentation"
              {...register("mentation", { valueAsNumber: true })}
            >
              <option value={0}>0</option>
              <option value={5}>1</option>
              <option value={6}>2</option>
              <option value={7}>3</option>
              <option value={10}>4</option>
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
            htmlFor="temperature"
          >
            Temperature (C)
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="temperature"
              {...register("temperature", { valueAsNumber: true })}
            >
              <option value={0}>38.6 - 39.5</option>
              <option value={1}>&gt; 39.5</option>
              <option value={3}>37.1 - 38.5</option>
              <option value={4}>36.1 - 37.0</option>
              <option value={5}>35.6 - 36</option>
              <option value={6}>&lt; 35.6</option>
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
            htmlFor="map"
          >
            MAP(mmHg)
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="map"
              {...register("map", { valueAsNumber: true })}
            >
              <option value={0}>101 - 140</option>
              <option value={1}>&gt; 140</option>
              <option value={7}>61 - 100</option>
              <option value={11}>&lt; 61</option>
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
            Lactate (mmol/L)
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="lactate"
              {...register("lactate", { valueAsNumber: true })}
            >
              <option value={0}>0 - 1.9</option>
              <option value={6}>2.0 - 4.0</option>
              <option value={9}>4.1 - 7.0</option>
              <option value={10}>&gt; 7.0</option>
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
            htmlFor="pvc"
          >
            PVC (%)
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="pvc"
              {...register("pvc", { valueAsNumber: true })}
            >
              <option value={0}>&lt; 16</option>
              <option value={12}>16 - 25</option>
              <option value={10}>26 - 35</option>
              <option value={9}>36 - 45</option>
              <option value={13}>&gt; 45</option>
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
        </div>
        <div className="mt-8">
          <button
            type="submit"
            className={` text-white font-bold py-2 px-4 rounded bg-blue-600 mb-4`}
          >
            Continuar
          </button>
        </div>
      </form>
    </main>
  );
}
