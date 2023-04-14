import AboutArrays from "./AboutArrays";
import JSBasic from "./JSBasic";
import ObjectsJS from "./Objects";
import JSFunctions from "./Functions";
import SideBar from "../../Other/SideBar";
import { JsSidebarItems } from "../../Other/sidebarNavigarion";

function LearnJS(props) {
  return (
    <SideBar sideBarItems={JsSidebarItems}>
      <div className="container mx-auto">
        <h1 className="text-center h1">Learn JavaScript</h1>
        <JSBasic />
        <AboutArrays />
        <ObjectsJS />
        {/* <JSFunctions /> */}
      </div>
    </SideBar>
  );
}
export default LearnJS;