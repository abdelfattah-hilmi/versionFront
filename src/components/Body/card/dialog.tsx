import { useEffect, useState } from "react";
import ReactDom from "react-dom";


import Data from "./subCard/Data";
import Cves from "./subCard/Cves";


import {img_distros} from "../../../lib/distroLogos";



export default function({
    machine,
    setModel
}) {

    useEffect(()=>{
        const hide = document.getElementById("root");
        hide.style.opacity = "0.3";
        return () => {
            hide.style.opacity = "1";
        }
    },[]);

    const [tab, setTab] = useState({
        page: "data",
        data: null
    });

    return ReactDom.createPortal(
        <div
            className="fixed top-0 w-screen h-screen flex justify-center items-center"
        >
            <div className="p-8 rounded-md text-center w-3/4 h-3/4 bg-gray-100 border border-gray-700 overflow-auto">
                <img
                    alt={`${machine.distro} Logo`}
                    src={img_distros[machine.distro] || img_distros["ubuntu"]}
                    className="mx-auto bg-gray-100 h-16 w-16 object-cover"
                />
                <header className="mt-4">
                    <h1 className="text-2xl font-bold text-gray-700">
                        ID: {machine.id}
                    </h1>
                    <div className="flex justify-center align-center gap-4 flex-wrap">
                        <div>
                            <span className="text-gray-700">Distro: </span>
                            <span className="text-gray-700 font-bold">{machine.distro}</span>
                        </div>
                        <div>
                            <span className="text-gray-700">Address: </span>
                            <span className="text-gray-700 font-bold">{machine.IP}</span>
                        </div>
                        <div>
                            <span className="text-gray-700">Date: </span>
                            <span className="text-gray-700 font-bold">{machine.date}</span>
                        </div>
                    </div>
                </header>
                {tab.page === "data" ? <Data machine={machine} setTab={setTab} />: <></>}
                {tab.page === "Cve" ? <Cves data={tab.data} />: <></>}
                <div className="items-end px-4 py-3">
                    <button
                        id="hide-btn"
                        className="ml-auto px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md w-1/6 shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700"
                        onClick={() => {
                            if(tab.page === "data")
                                setModel(false);
                            else{
                                setTab({
                                    page: "data",
                                    data: null
                                });
                            }
                        }}
                    >
                        {tab.page === "data" ? "Hide" : "Back"}
                    </button>
                </div>
                
            </div>
        </div>
        , document.getElementById("pop-up")
    );
}