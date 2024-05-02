import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  console.log(service);
  const { user } = useContext(AuthContext);
  const handleBookSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const order = { 
        customerName:name,
        date,
        email,
        service_id:service._id,
        service:service.title,
        service_img:service.img,
        price:service.price
     };
    // console.log(order);

    fetch('http://localhost:5000/bookings',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(order)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
    
  };
  return (
    <section className="p-12 bg-[#F3F3F3]  my-20 flex justify-center items-center">
      <form
        onSubmit={handleBookSubmit}
        className="container flex flex-col mx-auto "
      >
        <fieldset className="grid grid-cols-3 gap-6 p-6 rounded-md  ">
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <input
                id="name"
                type="text"
                name="name"
                placeholder="First name"
                className="w-full rounded-md  text-gray-900  py-3 px-2"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <input
                id="date"
                type="datetime-local"
                name="date"
                className="w-full rounded-md  text-gray-900  py-3 px-2"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <input
                id="amount"
                type="number"
                placeholder=""
                name="due"
                defaultValue={service.price}
                className="w-full rounded-md  text-gray-900  py-3 px-2"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <input
                id="email"
                type="email"
                defaultValue={user?.email}
                placeholder="Your email"
                className="w-full rounded-md  text-gray-900  py-3 px-2"
              />
            </div>
            <div className="col-span-full">
              <textarea
                id="message"
                name="message"
                type=""
                placeholder="Your message"
                className="w-full  rounded-md  text-gray-900  py-3 px-2"
              />
            </div>
          </div>
        </fieldset>
        <div>
          <input
            type="submit"
            value="Order Confirm"
            className="bg-[#FF3811]  py-4 text-white w-full "
          />
        </div>
      </form>
    </section>
  );
};

export default Checkout;
