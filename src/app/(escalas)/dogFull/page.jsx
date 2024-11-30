'use client'
import { useForm } from "react-hook-form";


export default function Page() {

  const {register, handleSubmit} =useForm()

  return (
    <main className="block text-center">
      <h1 className="text-2xl font-bold ">Escala Apple full para perro</h1>
      <form onSubmit={handleSubmit((data)=>{
       
        console.log(data);
        console.log(typeof(data.age));
      })}>
        <div className=" mx-auto w-fit mb-4">
          <label
            className="block  tracking-wide text-gray-700 text-sm font-bold mb-2 mt-2 text-start"
            htmlFor="creatinine"
          >
            Creatinine(mg/dL)
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="creatinine" {...register("creatinine",{ valueAsNumber: true }) }
            >
              <option value={0}>0 - 0.62</option>
              <option value={1}>0.63 - 1.35</option>
              <option value={8}>1.36 - 2.26</option>
              <option value={9}>&gt; 2.26</option>
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
            htmlFor="wbc"
          >
            WBC(x 10^9/L)
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="wbc" {...register("wbc",{ valueAsNumber: true })}
            >
              <option value={0}>5.1 - 8.5</option>
              <option value={2}>8.6 - 18</option>
              <option value={3}>&gt; 18</option>
              <option value={9}>&lt; 5.1</option>
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
              id="albumin" {...register("albumin",{ valueAsNumber: true })}
            >
              <option value={0}>3.3 - 3.5</option>
              <option value={2}>&gt; 3.5</option>
              <option value={6}>&lt; 2.6</option>
              <option value={7}>2.6 - 3.0</option>
              <option value={9}>3.1 - 3.2</option>
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
            htmlFor="spo2"
          >
            SpO2 (%)
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="spo2" {...register("spo2",{ valueAsNumber: true })}
            >
              <option value={0}>98 - 100</option>
              <option value={1}>95 - 97</option>
              <option value={4}>90 - 94</option>
              <option value={10}>&lt; 90</option>
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
            htmlFor="bilirubin"
          >
            Total bilirubin (mg/dL)
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="bilirubin" {...register("bilirubin",{ valueAsNumber: true })}
            >
              <option value={0}>0 - 0.23</option>
              <option value={6}>0.24 - 0.46</option>
              <option value={4}>0.47 - 0.93</option>
              <option value={3}>&gt; 0.93</option>
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
            Mentatio Score
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="mentation" {...register("mentation",{ valueAsNumber: true })}
            >
              <option value={0}>0</option>
              <option value={5}>1</option>
              <option value={7}>2</option>
              <option value={8}>3</option>
              <option value={13}>4</option>
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
            htmlFor="respiratory"
          >
            Respiratory rate (bpm)
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="respiratory" {...register("respiratory",{ valueAsNumber: true })}
            >
              <option value={0}>&lt; 25</option>
              <option value={3}>25 - 36</option>
              <option value={5}>37 - 48</option>
              <option value={6}>49 - 60</option>
              <option value={5}>&gt; 60</option>
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
            htmlFor="age"
          >
            Age(years)
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="age" {...register("age",{ valueAsNumber: true })}
            >
              <option value={0}>0 - 2</option>
              <option value={6}>3 - 5</option>
              <option value={8}>6 - 8</option>
              <option value={7}>&gt; 8</option>
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
            htmlFor="fluid"
          >
            Fluid score
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="fluid" {...register("fluid",{ valueAsNumber: true })}
            >
              <option value={0}>0</option>
              <option value={4}>1</option>
              <option value={3}>2</option>

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
              id="lactate" {...register("lactate",{ valueAsNumber: true })}
            >
              <option value={0}>&lt; 18.0</option>
              <option value={2}>18.0 - 71.2</option>
              <option value={3}>71.3 - 90.1</option>
              <option value={6}>&gt; 90.1</option>
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

<button type="submit" className={` text-white font-bold py-2 px-4 rounded bg-blue-600 mb-4`}>
  Continuar
</button>
</div>
      </form>
    </main>
  );
}
