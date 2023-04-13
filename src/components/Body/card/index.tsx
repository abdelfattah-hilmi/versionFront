import { useState } from "react";

import Dialog from "./dialog";

import {img_distros} from "../../../lib/distroLogos";

export default function({
    machine
}) {

    const [model, setModel] = useState(false);
    if(model) return <Dialog machine={machine} setModel={setModel}/>;
    return ( 
        <article className="rounded-xl border border-gray-700 bg-white p-4 flex-[1_1_400px]">
            <div className="flex items-center gap-4">
                <img
                    alt={`${machine.distro} Logo`}
                    src={img_distros[machine.distro] || img_distros["ubuntu"]}
                    className="h-16 w-16 rounded-full object-cover"
                />

                <div>
                    <h3 className="text-lg font-medium text-black">ID: {machine.id}</h3>

                    <div className="flow-root">
                        <ul className="-m-1 flex flex-wrap">
                            <li className="p-1 leading-none">
                                <a href="#" className="text-xs font-medium text-black">IP: {machine.IP} </a>
                            </li>

                            <li className="p-1 leading-none">
                                <a href="#" className="text-xs font-medium text-black">Date: {machine.date} </a>
                            </li>

                            <li className="p-1 leading-none">
                                <a href="#" className="text-xs font-medium text-black">Distro: {machine.distro}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <ul className="mt-4 space-y-2">
                <li>
                    <div
                        className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
                        onClick={() => {
                            setModel(true);
                        }}
                    >
                        <strong className="font-medium text-black">Elements</strong>

                        <p className="mt-1 text-xs font-medium text-black">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                            consequuntur deleniti, unde ab ut in!
                        </p>
                    </div>
                </li>
            </ul>
        </article>
    );
}