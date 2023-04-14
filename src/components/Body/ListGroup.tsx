import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import vmReduce from "../../lib/datacGathring/vmReduce";
import gather from "../../lib/datacGathring/gather";

import LoadingTable from "../Loading/table";


function ListGroup() {
  const [vms, setVms] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchVms = async () => {
      // if the data is already in the local storage get it from there than fetch it from the server async
        const data = localStorage.getItem("vms");
        if (data) {
            const reduced = JSON.parse(data);
            const virtualMachines = gather(reduced);
            setVms(virtualMachines);
        }else{
          setLoading(true);
        }

        // wait 4 seconds to simulate the loading time
        await new Promise((resolve) => setTimeout(resolve, 4000));
        // fetch the data from the server
        

        const response = await fetch("http://localhost:8000/vms/installed-packages",
          {
            headers:
                {
                  "Content-Type":"application/json"
                }
          }
        );
        const json = await response.json()
        const reduced = vmReduce(json);

        // stringify the object to be able to store it in the local storage
        localStorage.setItem("vms", JSON.stringify(reduced));
        
        const virtualMachines = gather(reduced);
        // console.log(virtualMachines);
        setVms(virtualMachines);
        setLoading(false);
    };
    fetchVms();
  }
    ,[]);

  if (loading){
    return (
      <LoadingTable />
    )
  }
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
            {vms &&
              vms.map((vms) => (
                <tr key={vms._id} className="bg-white border-b ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-black whitespace-nowrap "
                  >
                    {vms._id}
                  </th>
                  <td className="px-6 py-4">{vms.ip}</td>
                  <td className="px-6 py-4">{vms.distro.toString()}</td>
                  <td className="px-6 py-4">{vms["date-of-execution"]}</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600   hover:underline"
                    >
                      Edit
                    </a>
                    <Link
                      to={`/vms/details?ip=${vms.ip}`}
                      className="font-medium text-yellow-500 p-3  hover:underline"
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ListGroup;