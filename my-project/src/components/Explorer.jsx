
import ExplorerItem from "./ExplorerItem"

export default function Explorer({state, onClick }) {

  return (

      state && 
        <div className="h-full max-sm:w-full max-md:w-full bg-neutral-900 border-r-1 border-neutral-600">
            <div className="m-4 text-white font-mono">
              EXPLORER
            </div>
            <ExplorerItem id="Matteo_rosia" title="Matteo Rosia" type={0} tab={0} onClick={onClick}></ExplorerItem>
            <ExplorerItem id="About_me" title="About me" type={0} tab={1} onClick={onClick}></ExplorerItem>
            <ExplorerItem id="Who_I_am" title="Who_I_am.jsx" type={1} tab={2} onClick={onClick}></ExplorerItem>
            <ExplorerItem id="skills" title="Skills" type={0} tab={1} onClick={onClick}></ExplorerItem>
            <ExplorerItem id="Soft_skills" title="Soft_skills.jsx" type={1} tab={2} onClick={onClick}></ExplorerItem>
            <ExplorerItem id="Hard_skills" title="Hard_skills.jsx" type={1} tab={2} onClick={onClick}></ExplorerItem>
            <ExplorerItem id="Work_history" title="Work_history" type={0} tab={1} onClick={onClick}></ExplorerItem>
            <ExplorerItem id="Business" title="Business.py" type={1} tab={2} onClick={onClick}></ExplorerItem>
            <ExplorerItem id="Projects" title="Projects" type={0} tab={1} onClick={onClick}></ExplorerItem>
            <ExplorerItem id="My_projects" title="My_projects.jsx" type={1} tab={2} onClick={onClick}></ExplorerItem>
            <ExplorerItem id="Customers" title="Customers" type={0} tab={1} onClick={onClick}></ExplorerItem>
            <ExplorerItem id="Who_I_worked_with" title="Who_I_worked_with.jsx" type={1} tab={2} onClick={onClick}></ExplorerItem>
            <ExplorerItem id="index" title="index.html" type={2} tab={0} onClick={onClick}></ExplorerItem>
            <ExplorerItem id="style" title="style.css" type={3} tab={0} onClick={onClick}></ExplorerItem>
            <ExplorerItem id="readme" title="readme.json" type={4} tab={0} onClick={onClick}></ExplorerItem>
            <ExplorerItem id="version" title="version.txt" type={5} tab={0} onClick={onClick}></ExplorerItem>
          </div>
    );
}
