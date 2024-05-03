import Swal from "sweetalert2";

const BookingRow = ({ booking, handeleDelete, handleUpdate  }) => {
  console.log(booking);
  const {
    _id,
    customerName,
    email,
    datae,
    price,
    service,
    service_id,
    service_img,
    status
  } = booking;
console.log(booking)
  return (
    <tr>
      <th>
        <button onClick={() => handeleDelete(_id)} className="btn btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="roundec w-12 h-12">
            <img src={service_img} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{email}</td>
      <td>${price}</td>
      <th>
        {status === "confirm" ? (
          <button className="px-5  py-2.5 hover:py-3 relative rounded group overflow-hidden font-medium bg-transparent border-2  hover:border-none inline-block">
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#FF3811] group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white">Confirmed</span>
          </button>
        ) : (
          <button
            onClick={() => handleUpdate(_id)}
            className="px-5  py-2.5 hover:py-3 relative rounded group overflow-hidden font-medium bg-transparent border-2  hover:border-none inline-block"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#FF3811] group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white">Confirm</span>
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingRow;
