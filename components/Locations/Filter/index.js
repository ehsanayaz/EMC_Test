import { useState, useEffect } from "react";
import { Form, RadioFilters } from "components/generic";
import { FilterChips } from "./FilterChips";

import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

export const Filter = () => {
  const [filters, setFilters] = useState([]);
  const catValues = [
    { value: "food", name: "Food" },
    { value: "news", name: "Latest News" },
    {
      value: "authenticated",
      name: "isAuthenticated",
      isDisabled: true,
    },
  ];

  const shopValues = [
    { value: "mosque", name: "Mosque" },
    { value: "service_shop", name: "ServiceShop" },
  ];

  // use handleChange for chips then handleSubmit for whole form to submit search query
  // now handleChange behaves like submit instead of quick testing
  const handleChange = (e) => {
    if (e.target.value === "default") {
      return handleDelete(e.target.name)();
    }
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDelete = (name) => () => {
    setFilters((prev) => {
      delete prev[name];
      return { ...prev };
    });
  };


  useEffect(() => {
    // setFilters(values);
  }, []);

  return (
    <>
      <MuiAccordion className="filter-accordion">
        <MuiAccordionSummary>
          <Typography variant="h7" sx={{ alignSelf: "center" }}>
            Add Filters
          </Typography>
          <FilterChips filters={filters} handleDelete={handleDelete} />
        </MuiAccordionSummary>
        <MuiAccordionDetails>
          <Form type="filters">
            <RadioFilters
              title="Categories"
              name="categories"
              values={catValues}
              handleChange={handleChange}
            />
            <RadioFilters
              title="Shop Type"
              name="shop-type"
              values={shopValues}
              handleChange={handleChange}
            />
          </Form>
        </MuiAccordionDetails>
      </MuiAccordion>
      <style jsx global>{`
      .filter-accordion {
        background-color: transparent;
        box-shadow: none;
      }
      .filter-accordion * {

      }

      `}</style>
    </>
  );
};
