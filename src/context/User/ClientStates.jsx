import ClientsContext from "./ClientContext";
import { useEffect, useState } from "react";
import axios from "axios";

const FilterProvider = ({ children }) => {
  const [ClientsData, getClientsData] = useState([]);
  const CLIENTS_API = process.env.REACT_APP_CLIENTS_API;
  const CLIENTS = axios.create({ baseURL: CLIENTS_API });

  async function getClients() {
    await CLIENTS.get("/users")
      .then((response) => {
        // handle success
        const Clients = response.data;
        getClientsData((prev) => {
          return Clients;
        });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }
  useEffect(() => {
    getClients();
  }, []);

  return <ClientsContext.Provider value={{ ClientsData }}>{children}</ClientsContext.Provider>;
};

export default FilterProvider;
