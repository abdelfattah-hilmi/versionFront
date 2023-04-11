import { useEffect, useState } from "react";



function ListGroup(){
    const [vms, setVms] = useState(null)


    useEffect(
        () => {
            const fetchVms = async () => {
                const response = await fetch("http://localhost:8000/vms/installed-packages",
                {
                    headers:
                        {"Content-Type":"application/json"}
                    }
                    );
                const json = await response.json()

                console.log(json)
                setVms(json)
                
                
            }

            fetchVms();
            console.log(vms)
        },[]
    )


    return (
        <>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-900 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Aggregation ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Vm IP
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Distro
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Last-collection date
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Details
                    </th>
                </tr>
            </thead>
            <tbody>
                
                {vms && vms.map((vms)=>
                (
                <tr key={vms._id} className="bg-white border-b ">
                    <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap ">
                        {vms._id}
                    </th>
                    <td className="px-6 py-4">
                        {vms.ip}
                    </td>
                    <td className="px-6 py-4">
                        {vms.distro.toString()}
                    </td>
                    <td className="px-6 py-4">
                        {vms["date-of-execution"]}
                    </td>
                    <td className="px-6 py-4">
                        <a href="#" className="font-medium text-blue-600   hover:underline">Edit</a>
                        <a href="/vm-data" className="font-medium text-yellow-500 p-3  hover:underline">Details</a>
                    </td>
                </tr>)
                )}
            </tbody>
        </table>
    </div>
    </>);
    
}

export default ListGroup;