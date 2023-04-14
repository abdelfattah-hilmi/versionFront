export default function({
    packages,
    setTab
}) {
    return (
        <section>
            <div className="mt-4">
                <h2 className="text-xl font-bold text-gray-700">Packages</h2>
                <div className="mt-4">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Installed</th>
                                <th className="px-4 py-2">Candidate</th>
                                <th className="px-4 py-2">Latest</th>
                                <th className="px-4 py-2">CVEs</th>
                                <th className="px-4 py-2">Release Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {packages.map((pkg, i) => (
                                <tr key={i} className="border-t border-gray-300">
                                    <td className="px-4 py-2">{pkg["package-name"]}</td>
                                    <td className="px-4 py-2">{pkg["installed-version"]}</td>
                                    <td className="px-4 py-2">{pkg["candidate-version"]}</td>
                                    <td className="px-4 py-2">{pkg["latest-version"]}</td>
                                    <td className="px-4 py-2">
                                        <button
                                            className="text-blue-500"
                                            onClick={()=>{
                                                setTab({
                                                    page: "Cve",
                                                    data: {
                                                        cves: pkg.cves,
                                                        packageName: pkg["package-name"]
                                                    }
                                                });
                                            }}
                                        >
                                            More details
                                        </button>
                                    </td>
                                    <td className="px-4 py-2">
                                        <a
                                            className="text-blue-500"
                                            href={pkg['latest-release-notes']}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Consult
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}