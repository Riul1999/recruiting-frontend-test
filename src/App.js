import { useState } from "react";
import InvoicesTable from "./components/InvoicesTable";
import CredictNotesTable from "./components/CredictNotesTable";
import SuccessModal from "./components/SuccessModal";

function App() {

  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [selectedCreditNote, setSelectedCreditNote] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <InvoicesTable tableTitle={"Selecciona una factura"} setSelectedInvoice={setSelectedInvoice}/>
      {selectedInvoice && <CredictNotesTable tableTitle={"Selecciona una nota de crédito"} selectedInvoice={selectedInvoice} setSelectedCreditNote={setSelectedCreditNote}/>}
      {selectedCreditNote && <button
          className="px-8 py-4 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setOpenModal(true)}
        >
          Asignar
      </button>}
      {openModal && <SuccessModal setOpenModal={setOpenModal}/>}
    </div>
  );
}

export default App;
