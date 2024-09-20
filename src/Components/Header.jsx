import { HeartPulse, Plus, X } from "lucide-react";
import { useContext, useState } from "react";
import { ServiceContext } from "../ServiceContext";
export default function Header() {
  const { addService, services } = useContext(ServiceContext);
  const [isOpen, setIsOpen] = useState(false);
  const [service, setService] = useState({
    name: "",
    description: "",
    price: "",
  });
  const toOpen = () => {
    setIsOpen(true);
  };
  const toClose = () => {
    setIsOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addService({ id: services.length + 1, ...service });
    setService({
      name: "",
      description: "",
      price: "",
    });
    setIsOpen(false);
  };
  return (
    <>
      <nav className="flex p-2 md:py-3 md:px-5 justify-between items-center">
        <div className="flex gap-1 items-center">
          <HeartPulse
            color="white"
            fill="black"
            className="w-10 h-10 md:w-12 md:h-12"
          />
          <h1 className="text-xl md:text-2xl">HealthCare Services Manager</h1>
        </div>
        <button
          className="hidden md:flex bg-black text-white px-5 py-2 rounded-lg"
          onClick={toOpen}
        >
          Add New Service
        </button>
        <button
          className="fixed bottom-5 right-5 md:hidden w-12 h-12 bg-black flex justify-center items-center rounded-full"
          onClick={toOpen}
        >
          <Plus color="white" />
        </button>
      </nav>
      {isOpen && (
        <div className="fixed top-0 bottom-0 right-0 left-0 bg-black/50 z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-3/4 rounded-lg p-4 md:w-2/5 md:py-4 md:px-8">
            <header className="flex gap-2 justify-between items-center">
              <h1 className="text-xl">Add New Service</h1>
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
                className="border border-black rounded-lg p-2"
                onChange={(e) =>
                  setService({ ...service, name: e.target.value })
                }
              />
              <label htmlFor="description">Service Description</label>
              <textarea
                type="text"
                id="description"
                required
                className="border border-black rounded-lg p-2"
                onChange={(e) =>
                  setService({ ...service, description: e.target.value })
                }
              />
              <label htmlFor="price">Service Price (₹)</label>
              <input
                type="number"
                id="price"
                required
                className="border border-black rounded-lg p-2"
                onChange={(e) =>
                  setService({ ...service, price: e.target.value })
                }
              />
              <button
                type="submit"
                className="bg-black text-white px-5 py-2 rounded-lg w-fit self-end mt-2"
              >
                Add Service
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
