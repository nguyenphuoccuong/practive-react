import { topHeadData } from "../../data";
import TopHeadComponent from "./topHeadComponent";

export default function HeaderComponent () {
    return (
        <div className="toolbar">
            <TopHeadComponent data ={topHeadData}/>

        </div>
    )
}