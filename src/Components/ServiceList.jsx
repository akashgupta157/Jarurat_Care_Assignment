import React, { useContext, useState } from "react";
import { ServiceContext } from "../ServiceContext";
import { X } from "lucide-react";
export default function ServiceList() {
  const { services, deleteService, updateService } = useContext(ServiceContext);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState({
    name: "",
    description: "",
    price: "",
  });
  const toClose = () => {
    setIsOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateService({
      ...selectedService,
      name: selectedService.name,
      description: selectedService.description,
      price: parseFloat(selectedService.price),
    });
    setSelectedService({
      name: "",
      description: "",
      price: "",
    });
    setIsOpen(false);
  };
  return (
    <>
      <div className="hidden md:flex justify-center mt-10">
        <table className="w-[90%] ">
          <thead className="text-left text-base border-b-2">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price (INR)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id} className="border-b">
                <td>{service.name}</td>
                <td>{service.description}</td>
                <td>₹ {service.price}</td>
                <td className="flex gap-2">
                  <button
                    className="bg-black text-white px-2 py-1 my-4 rounded"
                    onClick={() => {
                      setSelectedService(service);
                      setIsOpen(true);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="px-2 py-1"
                    onClick={() => deleteService(service.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="md:hidden">
        <div className="flex md:hidden flex-col gap-4 my-5 px-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
            >
              <h3 className="text-lg font-semibold">{service.name}</h3>
              <p className="mt-1">{service.description}</p>
              <p className="mt-1 font-bold">₹ {service.price}</p>
              <div className="flex justify-end gap-2 mt-3">
                <button
                  className="bg-black text-white px-3 py-1 rounded"
                  onClick={() => {
                    setSelectedService(service);
                    setIsOpen(true);
                  }}
                >
                  Update
                </button>
                <button
                  className="px-3 py-1 rounded"
                  onClick={() => deleteService(service.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isOpen && (
        <div className="fixed top-0 bottom-0 right-0 left-0 bg-black/50 z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-3/4 rounded-lg p-4 md:w-2/5 md:py-4 md:px-8">
            <header className="flex gap-2 justify-between items-center">
              <h1 className="text-xl">Update Service</h1>
              <button onClick={toClose}>
                <X />
              </button>
            </header>
            <hr className="my-2" />
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
              <label htmlFor="name">Service Name</label>
              <input
                type="text"
                id="name"
                required
                value={selectedService?.name}
                className="border border-black rounded-lg p-2"
                onChange={(e) =>
                  setSelectedService({
                    ...selectedService,
                    name: e.target.value,
                  })
                }
              />
              <label htmlFor="description">Service Description</label>
              <textarea
                type="text"
                id="description"
                required
                value={selectedService?.description}
                className="border border-black rounded-lg p-2"
                onChange={(e) =>
                  setSelectedService({
                    ...selectedService,
                    description: e.target.value,
                  })
                }
              />
              <label htmlFor="price">Service Price (₹)</label>
              <input
                type="number"
                id="price"
                required
                value={selectedService?.price}
                className="border border-black rounded-lg p-2"
                onChange={(e) =>
                  setSelectedService({
                    ...selectedService,
                    price: e.target.value,
                  })
                }
              />
              <button
                type="submit"
                className="bg-black text-white px-5 py-2 rounded-lg w-fit self-end mt-2"
              >
                Update Service
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
