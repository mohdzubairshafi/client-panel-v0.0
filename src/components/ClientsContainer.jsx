import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import { useContext } from "react";
import ClientContext from "./../context/User/ClientContext";
import Client from "./Client";
import { Box } from "@mui/material";

export default function ClientsContainer() {
  const { ClientsData } = useContext(ClientContext);
  function paginator(items, current_page, per_page_items) {
    let page = current_page || 1,
      per_page = per_page_items,
      offset = (page - 1) * per_page,
      paginatedItems = items.slice(offset).slice(0, per_page_items),
      total_pages = Math.ceil(items.length / per_page);

    return {
      page: page,
      per_page: per_page,
      pre_page: page - 1 ? page - 1 : null,
      next_page: total_pages > page ? page + 1 : null,
      total: items.length,
      total_pages: total_pages,
      data: paginatedItems,
    };
  }
  const count = Math.ceil(ClientsData.length / 3);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(paginator(ClientsData, value, 3).page);
  };

  return (
    <Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "100rem",
            bgcolor: "background.paper",
            p: 2,
          }}
        >
          {paginator(ClientsData, page, 3).data.map((value, index) => {
            return <Client Details={value} page={page} key={index} />;
          })}
        </Box>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Pagination count={count} page={page} onChange={handleChange} color='error' shape='rounded' />
        </div>
      </Box>
    </Box>
  );
}

