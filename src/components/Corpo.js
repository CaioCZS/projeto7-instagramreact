import Posts from "./Posts";
import Sidebar from "./Sidebar";
import Stories from "./Stories";

export default function Corpo() {
    return (
        <div className="corpo">
            <div className="esquerda">
                <Stories />
                <Posts />
            </div>
            <Sidebar />
        </div>
    )
}