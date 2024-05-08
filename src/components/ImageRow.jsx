export default function ImageRow({image, imageAlt}){
    return <td className='px-8 py-4'>
        <img
            className="mx-auto h-10 w-auto"
            src={image}
            alt={imageAlt}
        />
    </td>
}