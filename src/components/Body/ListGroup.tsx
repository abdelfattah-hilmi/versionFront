import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



function ListGroup() {
  const [vms, setVms] = useState<any[]>([]);

  useEffect(() => {
    const fetchVms = async () => {
        const response = await fetch("http://localhost:10000/api/vms/installed-packages",
        {
            headers:
                {"Content-Type":"application/json"}
            }
            );
        const json = await response.json()

        console.log(json)
        setVms(json)

    };
    fetchVms()
  }
    ,[])

    // simulate fetch remove it
  //   const fetchVms = async () => {
  //     const promise = new Promise((resolve, reject) => {
  //       setTimeout(() => resolve(SAMPLE), 500);
  //     });
  //     const result = await promise;
  //     console.log(result);
  //     setVms(result);
  //   };

  //   fetchVms();
  //   console.log(vms);
  // }, []);

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
                      to="/vms/details"
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