"use client";
import { useForm } from "react-hook-form";

export default function Page() {
  const { register, handleSubmit } = useForm();

  return (
    <main className="block text-center">
      <h1 className="text-2xl font-bold ">Escala Apple full para gato</h1>
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
              <option value={4}>1</option>
              <option value={7}>2</option>
              <option value={8}>3</option>
              <option value={9}>4</option>
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
              <option value={0}>38.6 - 39.4</option>
              <option value={1}>&gt; 39.4</option>
              <option value={3}>37.1 - 38.5</option>
              <option value={4}>36.1 - 37.0</option>
              <option value={6}>&lt; 36.1</option>
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
              <option value={4}>61 - 100</option>
              <option value={9}>&lt; 61</option>
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
              <option value={5}>2.0 - 4.0</option>
              <option value={6}>4.1 - 7.0</option>
              <option value={9}>&gt; 7.0</option>
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
              <option value={0}>&lt; 11</option>
              <option value={11}>11 - 20</option>
              <option value={16}>21 - 30</option>
              <option value={14}>31 - 40</option>
              <option value={13}>41 - 45</option>
              <option value={17}>&gt; 45</option>
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
            htmlFor="urea"
          >
            Urea (mmol/L)
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="urea"
              {...register("urea", { valueAsNumber: true })}
            >
              <option value={0}>7.7 - 8.9</option>
              <option value={12}>9.0 - 11.6</option>
              <option value={7}>11.7 - 24.9</option>
              <option value={6}>&gt; 24.9</option>
              <option value={7}>5.3 - 7.6</option>
              <option value={11}>&lt; 5.3</option>
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
            htmlFor="chloride"
          >
            Chloride (mmol/L)
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="chloride"
              {...register("chloride", { valueAsNumber: true })}
            >
              <option value={0}>119 - 122</option>
              <option value={11}>123 - 125</option>
              <option value={7}>&gt; 125</option>
              <option value={11}>116 - 118</option>
              <option value={9}>111 - 115</option>
              <option value={12}>&lt; 111</option>
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
            htmlFor="body"
          >
            Body cavity fluid
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="body"
              {...register("body", { valueAsNumber: true })}
            >
              <option value={0}>0</option>
              <option value={3}>1</option>
              <option value={6}>2</option>
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
