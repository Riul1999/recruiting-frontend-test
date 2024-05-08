export default function TableRow({boldText, normalText}){
    return <td className='px-8 py-4'>
        <p className='text-black'>{boldText}</p> <p className='text-gray'>{normalText}</p>
    </td>
}