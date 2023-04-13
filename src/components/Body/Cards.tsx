import Card from "./card/index";


const machines_template = {
    id: 1,
    distro: "ubuntu",
    date: "2023-04-02 09:40:23",
    IP: "34.66.148.135",
    elements: [
        {
            name: "mongodb",
            installed: "5.0.6",
            candidate: "5.0.6",
            latest: "6.2.1",
            cves: [
                {
                    id: "CVE-2022-24272",
                    description: "7adari",
                    link: "https://nvd.nist.gov/vuln/detail/CVE-2022-24272",
                    affected: "1.0.0",
                    severity: "High"
                },
                
            ],
            releaseNotes: "https://nginx.org/en/CHANGES"
        },
        {
            name: "redis",
            installed: "6.0.16",
            candidate: "6.0.16",
            latest: "7.0.10",
            cves: [
                {
                    id: "CVE-2022-24735",
                    description: "7adari",
                    link: "https://nvd.nist.gov/vuln/detail/CVE-2022-24735",
                    affected: "<7.0.0 or <6.2.7",
                    severity: "High"
                },
                {
                    id: "CVE-2022-35977",
                    description: "7adari",
                    link: "https://nvd.nist.gov/vuln/detail/CVE-2022-35977",
                    affected: "<7.0.8",
                    severity: "High"
                },
            ],
            releaseNotes: "https://github.com/redis/redis/releases/tag/7.0.10"
        },
        {
            name: "nginx",
            installed: "1.18.0",
            candidate: "1.19",
            latest: "1.24.0",
            cves: [
                {
                    id: "CVE-2022-41742",
                    description: "7adari",
                    link: "https://nvd.nist.gov/vuln/detail/CVE-2022-41742",
                    affected: "1.23.2",
                    severity: "High"
                },
                {
                    id: "CVE-2013-0337",
                    description: "7adari",
                    link: "https://nvd.nist.gov/vuln/detail/CVE-2013-0337",
                    affected: "1.3.13",
                    severity: "High"
                },
            ],
            releaseNotes: "https://nginx.org/en/CHANGES"
        },
    ]
}

const machines: any[] = [];

for (let i = 0; i < 5; i++) {
    const ids = ["643550c9c69e8230c678f22f","643550c9c69e8230c678f28c","643550c9c69e8230c678f112","643550c9c69e8230c678f74b","643550c9c69e8230c678f25a","643550c9c69e8230c678f23f"]
    const machine = Object.create(machines_template);
    machine.id = ids[Math.floor(Math.random() * 6)];
    machine.distro = "ubuntu 18.04"
    machines.push(machine);
}

export default function() {
    return (
        <div className="m-5 flex gap-4 flex-wrap justify-center">
            {machines.map((machine,index) => (
                <Card machine={machine} key={machine.id+index}/>
            ))}
        </div>
    );
}