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

                if (response.ok) {
                    setVms(json)
                }
                
            }

            // fetchVms();
        },[]
    )


    return (
        <>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Vm ID
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
                <tr className="bg-white border-b ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">
                        Silver
                    </td>
                    <td className="px-6 py-4">
                        Laptop
                    </td>
                    <td className="px-6 py-4">
                        $2999
                    </td>
                    <td className="px-6 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
                
            </tbody>
        </table>
    </div>
    </>);
    
}

export default ListGroup;