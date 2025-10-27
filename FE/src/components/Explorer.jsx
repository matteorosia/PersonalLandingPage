import { useState } from "react";
import ExplorerItem from "./ExplorerItem"
import { defaultPage, firstBorderColorDark, firstBorderColorLight } from "../utils/Const";
import { firstBgColorDark, firstBgColorLight, transactionOption } from "../utils/Const";

const items = [
    { id: "Matteo_rosia", title: "Matteo Rosia", type: 0, tab: 0 },
    { id: "About_me", title: "About me", type: 0, tab: 1 },
    { id: "Who_I_am", title: "Who_I_am.jsx", type: 1, tab: 2 },
    { id: "skills", title: "Skills", type: 0, tab: 1 },
    { id: "Soft_skills", title: "Soft_skills.jsx", type: 1, tab: 2 },
    { id: "Hard_skills", title: "Hard_skills.jsx", type: 1, tab: 2 },
    { id: "Work_history", title: "Work_history", type: 0, tab: 1 },
    { id: "Business", title: "Business.py", type: 1, tab: 2 },
    { id: "Projects", title: "Projects", type: 0, tab: 1 },
    { id: "My_projects", title: "My_projects.jsx", type: 1, tab: 2 },
    { id: "Customers", title: "Customers", type: 0, tab: 1 },
    { id: "Who_I_worked_with", title: "Who_I_worked_with.jsx", type: 1, tab: 2 },
    { id: "index", title: "index.html", type: 2, tab: 0 },
    { id: "style", title: "style.css", type: 3, tab: 0 },
    { id: "readme", title: "readme.json", type: 4, tab: 0 },
    { id: "version", title: "version.txt", type: 5, tab: 0 },
  ];

  export default function Explorer({ state, onClick, toggleStatus }) {
  const [selectedId, setSelectedId] = useState(defaultPage);

  const handleSelect = (id) => {
    setSelectedId(id);
    if (onClick) onClick(id);
  };

  const bgcolor = toggleStatus ? `${firstBgColorDark} ${firstBorderColorDark}` : `${firstBgColorLight} ${firstBorderColorLight}`
  const visibleProperty = state ? "" : "hidden"

  const classes = `max-sm:w-full max-sm:h-[80vh] max-md:w-full border-r
    ${transactionOption}
    ${bgcolor}
    ${visibleProperty}`

  return (
    <div className={classes}>
       <div className={`m-4 font-mono ${toggleStatus ? "text-white" : "text-black"}`}>EXPLORER</div>
      {
      items.map((item) => (
        <ExplorerItem
          key={item.id}
          {...item}
          onClick={() => handleSelect(item.id)}
          isSelected={selectedId === item.id}
          toggleStatus = {toggleStatus}
        />
      ))}
    </div>
  );
}
