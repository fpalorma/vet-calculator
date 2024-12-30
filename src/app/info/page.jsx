export default function Page(){
    return(<>
    <div className="text-center m-auto p-2 max-w-[800px]">
        <h1 className="text-xl font-bold underline mb-2">Sobre esta aplicación</h1>
        <p className="mb-1">La aplicación está diseñada para asistir en la evaluación del riesgo de mortalidad en animales mediante el uso de dos herramientas clave ampliamente reconocidas en el ámbito veterinario: las escalas APPLE Score (Acute Patient and Laboratory Evaluation) y VetCOT (Veterinary Committee on Trauma).</p>

        <p>Estas escalas permiten realizar un análisis detallado del estado de salud de los animales en situaciones críticas o de emergencia, integrando diversos parámetros fisiológicos y clínicos. La aplicación recopila, organiza y procesa estos datos para ofrecer un cálculo claro y preciso del riesgo, facilitando la toma de decisiones informadas por parte de los veterinarios.</p>
        </div>
        <div className="text-center m-2 p-2">

        <h2 className="text-lg font-bold">Bibliografia utilizada:</h2>
        <ul className="m-2">
            <li className="m-2"><a className=" underline" href="https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1939-1676.2010.0552.x" target="_blank" rel="noopener">APPLE Score caninos</a></li>
            <li className="m-2"><a className=" underline" href="https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1939-1676.2010.0648.x" target="_blank" rel="noopener">APPLE Score felinos</a></li>
            <li className="m-2"><a className=" underline" href="https://onlinelibrary.wiley.com/doi/10.1111/vec.13135" target="_blank" rel="noopener">VetCOT caninos</a></li>
        </ul>
        </div>
        </>
    )
}