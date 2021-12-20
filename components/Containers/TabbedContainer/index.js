import { useState } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export const TabbedContainer = ({ labels, items }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let TabLabels = [];
  let TabPanels = [];

  items.forEach((item, idx) => {
    TabLabels.push(<Tab key={idx} label={labels[idx]} />);
    TabPanels.push(
      <TabPanel key={idx} value={value} index={idx}>
        {item}
      </TabPanel>
    );
  });

  return (
    <div>
      <div>
        <Tabs
          value={value}
          onChange={handleChange}
					style={{borderBottom: "1px solid #c5c5c5"}}
        >
          {TabLabels}
        </Tabs>
      </div>
      {TabPanels}
			<style jsx global>{`
			.MuiTabs-flexContainer {
				justify-content: center;
			}
			`}</style>
    </div>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}
