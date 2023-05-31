import Image from 'next/image';

const TableRow = ({userData, index}) => {
  const {name, country, score, id, photo} = userData ?? {};
  return (
    <tr>
      <td className={`p-3 ${index % 2 === 0 ? 'bg-white' : 'bg-sky-50'}`}>
        {id}
      </td>
      <td
        className={`flex justify-start items-center gap-2 p-3 ${
          index % 2 === 0 ? 'bg-white' : 'bg-sky-50'
        }`}>
        <div className='w-10 h-10 rounded-full border border-sky-200'>
          <Image
            src={photo}
            alt='profile'
            width={40}
            height={40}
            className='rounded-full'
          />
        </div>
        {name}
      </td>
      <td className={`p-3 ${index % 2 === 0 ? 'bg-white' : 'bg-sky-50'}`}>
        {country}
      </td>
      <td className={`p-3 ${index % 2 === 0 ? 'bg-white' : 'bg-sky-50'}`}>
        {score}
      </td>
    </tr>
  );
};

export default TableRow;
