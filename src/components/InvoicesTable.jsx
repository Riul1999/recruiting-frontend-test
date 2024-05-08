import React, {useState, useEffect} from 'react';
import selectedImage from './..//selected.png';
import notSelectedImage from './../notSelected.png';
import TableRow from './TableRow';
import ImageRow from './ImageRow';

const translateType = (type) => {
    if (type === "received")
        return "Recibida";
};

function exchangeMoney(amount, currency) {
    if (currency === "CLP"){
        return [parseInt(amount)/1000, "USD"]
    } else {
        return [parseInt(amount)*1000, "CLP"]
    }
}

function InvoicesTable({tableTitle, setSelectedInvoice}){

    const [selected, setSelected] = useState(null);
    const [invoices, setInvoices] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleClick = (id) => {
        if (id) {
            setSelected(id);
            setSelectedInvoice(id);
        }
    }

    useEffect(() => {
        fetch('https://recruiting.api.bemmbo.com/invoices/pending')
            .then(response => response.json())
            .then(json => {setInvoices(json); setLoading(false);})
            .catch(error => console.log(error))
    }, []);

    return <div className='flex flex-1 justify-center'>
        <table className="table-auto text-center rtl:text-right text-gray-500 dark:text-gray-400">
            <thead>
                <tr>
                    <th colSpan="4" className='text-xl text-black px-8 py-4'> {tableTitle} </th>
                </tr>
            </thead>

            {!loading && <tbody>
                {invoices.map(invoice => {
                    const img = (selected === invoice.id) ? <ImageRow image={selectedImage} imageAlt={"Selected"}/> : <ImageRow image={notSelectedImage} imageAlt={"Not Selected"}/>;
                    const [anotherAmount, anotherCurrency] = exchangeMoney(invoice.amount, invoice.currency);
                    return (invoice.type === "received") && 
                    <tr className="bg-white border dark:bg-gray-800 dark:border-gray-700">
                        <button onClick={() => handleClick(invoice.id)}> {img} </button>
                        <TableRow boldText={invoice.id} normalText={`(${invoice.organization_id})`}/>
                        {(invoice.currency === "CLP") ?
                            <TableRow boldText={`$${invoice.amount}${invoice.currency}`} normalText={`($${anotherAmount}${anotherCurrency})`}/> :
                            <TableRow boldText={`$${anotherAmount}${anotherCurrency}`} normalText={`($${invoice.amount}${invoice.currency})`}/>
                        }
                        <TableRow boldText={''} normalText={`${translateType(invoice.type)}`}/>
                    </tr>
                })}
            </tbody>}
        </table>
    </div>
}

export default InvoicesTable;