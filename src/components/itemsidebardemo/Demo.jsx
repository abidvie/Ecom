import React, { useState } from 'react';
import Box from '@mui/material/Box'; // Make sure to install @mui/material if not already

function Demo() {
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

  const categories = [
    {
      title: "Fashion1",
      subItems: ["Men1", "Women1", "Accessories1"],
    },
    {
      title: "Fashion2",
      subItems: ["Men2", "Women2", "Accessories2"],
    },
  ];

  const handleSubmenuToggle = (index) => {
    setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
  };

  return (
    <aside className="sidebaritem">
      <div className="box">
        <h3>Product Categories</h3>
        <Box sx={{ width: 250 }} role="presentation">
          <ul className="pl-4">
            {categories.map((category, index) => (
              <li key={index} className="mb-2">
                <button
                  onClick={() => handleSubmenuToggle(index)}
                  className="w-full text-left text-sm font-medium"
                  style={{ background: "none", border: "none", cursor: "pointer" }}
                >
                  {category.title} {openSubmenuIndex === index ? "▲" : "▼"}
                </button>
                {openSubmenuIndex === index && (
                  <ul className="pl-4 list-disc">
                    {category.subItems.map((item, i) => (
                      <li
                        key={i}
                        className="cursor-pointer"
                        onClick={() => console.log(`${item} clicked`)}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </Box>
      </div>
    </aside>
  );
}

export default Demo;
