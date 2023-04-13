import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SAMPLE = [{
  _id: "643550c9c69e8230c678f22f",
  "date-of-execution": "2023-04-02 09:40:23.758402",
  distro: ["Ubuntu", "18.04", "bionic"],
  "installed-packages": [
    {
      "candidate-version": "1.18.0",
      cves: [
        {
          "affected-versions":
            "[0.1.0, 0.5.38) [0.6.0, 0.6.39) [0.7.0, 0.7.62) [0.8.0, 0.8.15)",
          "cve-id": "CVE-2009-2629",
          "cve-link": "https://nvd.nist.gov/vuln/detail/CVE-2009-2629",
        },
        {
          "affected-versions": "[0.1.0, 0.8.22]",
          "cve-id": "CVE-2009-3555",
          "cve-link": "https://nvd.nist.gov/vuln/detail/CVE-2009-3555",
        },
      ],
      "installed-version": "15.0.1",
      "latest-release-notes": [
        "https://www.postgresql.org/about/news/postgresql-152-147-1310-1214-and-1119-released-2592/",
      ],
      "latest-version": "15.2",
      "package-name": "postgresql",
    },
  ],
}];

function ListGroup() {
  const [vms, setVms] = useState(null);

  useEffect(() => {
    // const fetchVms = async () => {
    //     const response = await fetch("http://localhost:8000/vms/installed-packages",
    //     {
    //         headers:
    //             {"Content-Type":"application/json"}
    //         }
    //         );
    //     const json = await response.json()

    //     console.log(json)
    //     setVms(json)

    // }

    // simulate fetch remove it
    const fetchVms = async () => {
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(SAMPLE), 500);
      });
      const result = await promise;
      console.log(result);
      setVms(result);
    };

    fetchVms();
    console.log(vms);
  }, []);

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
