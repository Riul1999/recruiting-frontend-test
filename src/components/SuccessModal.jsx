import greenCheck from './../greenCheck.png';

function SuccessModal ({setOpenModal}) {
    return <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        <img className="mx-auto h-10 w-auto" src={greenCheck} alt={"Green Check"}/>
        <p className="px-8 py-4 text-center text-xl"> Nota de crédito asignada correctamente</p>
        <button
        className="px-8 py-4 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setOpenModal(false)}
        >
            Seguir Asignando
        </button>
    </div>
} 

export default SuccessModal