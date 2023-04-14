import { useEffect, useState } from "react";
import Card from "./card/index";




export default function() {

    const [machines, setMachines] = useState<any[]>([]);
    useEffect(() => {
        // get the ip address of the machine from the params of the url
        const urlParams = new URLSearchParams(window.location.search);
        const data = localStorage.getItem("vms");

        const ip: any = urlParams.get("ip");
        
        // if the ip is not in the params or the data is not there redirect to home page
        if (!ip || !data) {
            window.location.href = "/";
        }
        // fetch from local storage vm data
        if (data) {
            const allTheVms = JSON.parse(data);
            const machines = allTheVms[ip];
            setMachines(machines);
        }
    }, []);

    return (
        <div className="m-5 flex gap-4 flex-wrap justify-center">
            {machines.map((machine,index) => (
                <Card machine={machine} key={machine._id+index}/>
            ))}
        </div>
    );
}