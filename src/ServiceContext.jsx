import React, { createContext, useState } from "react";
export const ServiceContext = createContext();
const sampleServices = [
  {
    id: 1,
    name: "General Consultation",
    description: "Basic health check-up and consultation with a physician.",
    price: 500,
  },
  {
    id: 2,
    name: "Dental Cleaning",
    description: "Comprehensive dental cleaning and oral hygiene assessment.",
    price: 1200,
  },
  {
    id: 3,
    name: "Physiotherapy Session",
    description:
      "45-minute physiotherapy session for rehabilitation and pain management.",
    price: 1500,
  },
  {
    id: 4,
    name: "Blood Test",
    description:
      "Complete blood work including CBC, lipid profile, and glucose levels.",
    price: 800,
  },
  {
    id: 5,
    name: "Vaccination",
    description:
      "Administration of seasonal vaccines such as flu or COVID-19 vaccine.",
    price: 300,
  },
];
export const ServiceProvider = ({ children }) => {
  const [services, setServices] = useState(sampleServices);
  const [editing, setEditing] = useState(false);
  const [currentService, setCurrentService] = useState(null);
  const addService = (newService) => {
    setServices([...services, newService]);
  };

  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  const updateService = (updatedService) => {
    setServices(
      services.map((service) =>
        service.id === updatedService.id ? updatedService : service
      )
    );
    setEditing(false);
    setCurrentService(null);
  };

  const editService = (service) => {
    setEditing(true);
    setCurrentService(service);
  };

  return (
    <ServiceContext.Provider
      value={{
        services,
        addService,
        deleteService,
        updateService,
        editService,
        editing,
        currentService,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};
