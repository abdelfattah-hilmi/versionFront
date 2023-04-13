export default function({
    data 
}) {
    const {cves, packageName} = data;
    return (
        <section>
            <div className="mt-4">
                <h2 className="text-xl font-bold text-gray-700">CVEs</h2>
                <h3 className="text-sm font-bold text-gray-700">
                    Package Name: <span className="text-gray-500">{packageName}</span>
                </h3>
                <div className="mt-4">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">CVE</th>
                                <th className="px-4 py-2">Affected</th>
                                {/* <th className="px-4 py-2">Description</th>
                                <th className="px-4 py-2">Severity</th> */}
                                <th className="px-4 py-2">References</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cves.map((cve, i) => {
                                let classedSeverity;

                                switch (cve.severity) {
                                    case "Low":
                                        classedSeverity = "text-green-500";
                                        break;
                                    case "Medium":
                                        classedSeverity = "text-yellow-500";
                                        break;
                                    case "High":
                                        classedSeverity = "text-red-500";
                                        break;
                                    case "Critical":
                                        classedSeverity = "text-red-900";
                                        break;
                                    default:
                                        classedSeverity = "text-gray-500";
                                        break;
                                }
                                return (<tr key={i} className="border-t border-gray-300">
                                    <td className="px-4 py-2">{cve.id}</td>
                                    <td className="px-4 py-2">{cve.affected}</td>
                                    {/* <td className="px-4 py-2">{cve.description}</td>
                                    <td className={`px-4 py-2 ${classedSeverity}`}>{cve.severity}</td> */}
                                    <td className="px-4 py-2">
                                        <a
                                            className="text-blue-500"
                                            href="https://www.google.com"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Consult
                                        </a>
                                    </td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}