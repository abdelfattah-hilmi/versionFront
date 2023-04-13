import Card from "./card/index";


const machines_template = {
    id: 1,
    distro: "ubuntu",
    date: "2021-05-01",
    IP: "192.168.1.1",
    elements: [
        {
            name: "Awsome Package",
            installed: "1.0.0",
            candidate: "1.0.1",
            latest: "1.0.2",
            cves: [
                {
                    id: "CVE-2021-0001",
                    description: "7adari",
                    link: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-0001",
                    affected: "1.0.0",
                    severity: "High"
                },
                {
                    id: "CVE-2021-0002",
                    description: "7adari",
                    link: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-0002",
                    affected: "1.0.1",
                    severity: "Low"
                },
                {
                    id: "CVE-2021-0003",
                    description: "7adari",
                    link: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-0003",
                    affected: "1.0.2",
                    severity: "Medium"
                }
            ],
            releaseNotes: "https://ubuntu.com/security/notices/USN-0001-1"
        },
        {
            name: "Bad Package",
            installed: "1.0.0",
            candidate: "1.0.1",
            latest: "1.0.2",
            cves: [
                {
                    id: "CVE-2021-0001",
                    description: "7adari",
                    link: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-0001",
                    affected: "1.0.0",
                    severity: "High"
                },
                {
                    id: "CVE-2021-0002",
                    description: "7adari",
                    link: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-0002",
                    affected: "1.0.1",
                    severity: "High"
                },
            ],
            releaseNotes: "https://ubuntu.com/security/notices/USN-0001-1"
        },
        {
            name: "Good Package",
            installed: "1.0.0",
            candidate: "1.0.1",
            latest: "1.0.2",
            cves: [
                {
                    id: "CVE-2021-0001",
                    description: "7adari",
                    link: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-0001",
                    affected: "1.0.0",
                    severity: "High"
                },
                {
                    id: "CVE-2021-0002",
                    description: "7adari",
                    link: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-0002",
                    affected: "1.0.1",
                    severity: "High"
                },
            ],
            releaseNotes: "https://ubuntu.com/security/notices/USN-0001-1"
        },
    ]
}

const machines = [];
for (let i = 0; i < 20; i++) {
    const distros = [
        "ubuntu","debian","fedora","centos","arch",
        "opensuse","alpine","gentoo","suse","rhel","mint"
    ];
    const machine = Object.create(machines_template);
    machine.id = `00${Math.floor(Math.random() * 100000000)}`;
    machine.distro = distros[Math.floor(Math.random() * distros.length)];
    machines.push(machine);
}

export default function() {
    return (
        <div className="flex gap-2 flex-wrap justify-center">
            {machines.map((machine,index) => (
                <Card machine={machine} key={machine.id+index}/>
            ))}
        </div>
    );
}