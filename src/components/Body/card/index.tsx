import { useState } from "react";

import Dialog from "./dialog";

import {img_distros} from "../../../lib/distroLogos";

export default function({
    machine 
}) {
    const distro = machine.distro[0];
    const date = new Date(machine["date-of-execution"]);
    const fullDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    const [model, setModel] = useState(false);
    if(model) return <Dialog machine={machine} setModel={setModel}/>;
    return ( 
        <article className="bg-gray-100 rounded-xl border border-gray-700  p-4 flex-[1_1_400px]">
            <div className="flex items-center gap-4">
                <img
                    alt={`${distro} Logo`}
                    src={img_distros[distro] || img_distros["ubuntu"]}
                    className="h-16 w-16 rounded-full object-cover"
                />

                <div>
                    <h3 className="text-lg font-medium text-black">ID: {machine._id}</h3>

                    <div className="flow-root">
                        <ul className="-m-1 flex flex-wrap">
                            <li className="p-1 leading-none">
                                <p className="text-xs font-medium text-black">
                                    IP :
                                    <span className="text-xs font-medium text-gray-700">
                                        {" " + machine.ip}
                                    </span>
                                </p>
                            </li>

                            <li className="p-1 leading-none">
                                <p className="text-xs font-medium text-black">
                                    Date :
                                    <span className="text-xs font-medium text-gray-700">
                                        {" " + fullDate}
                                    </span>
                                </p>
                            </li>

                            <li className="p-1 leading-none">
                                <p className="text-xs font-medium text-black">
                                    Distro :
                                    <span className="text-xs font-medium text-gray-700">
                                        {" " + machine.distro.join(" ")}
                                    </span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <ul className="mt-4 space-y-2">
                <li>
                    <div
                        className="block h-full rounded-lg border border-gray-700 p-4 hover:border-green-600 hover:border-2"
                        onClick={() => {
                            setModel(true);
                        }}
                    >
                        <strong className="font-medium text-black">Packages</strong>

                        <p className="mt-1 text-xs font-medium text-black">
                            click to get more insights about this snapshot
                        </p>
                    </div>
                </li>
            </ul>
        </article>
    );
}