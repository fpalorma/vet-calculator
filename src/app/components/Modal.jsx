export default function Modal( {titulo, percentage, totalScore, handleOnClick}){
    return(
        
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
            <div className="p-4 border-b">
              <h3 className="text-lg font-bold">{titulo}</h3>
            </div>
            <div className="p-4">
              <p className="text-gray-600">
                Total score: {totalScore}
              </p>
              <p className="text-gray-600">
                Probabilidad: {percentage} %
              </p>
            </div>
            <button onClick={handleOnClick} className=" text-white font-bold py-2 px-4 rounded bg-blue-600 mb-4">Cerrar</button>
            </div>
            </div>
        
    )
}
