import type { TechMetaData } from "@/types/techTypes";
import { GoIssueDraft } from "react-icons/go";
import { SiBurpsuite, SiKalilinux, SiMetasploit, SiOpenssl, SiOwasp, SiSnort, SiWireshark } from "react-icons/si";

export const security = {
  KALI_LINUX: {
    key: "kali_linux",
    name: "Kali Linux",
    url: "https://www.kali.org/",
    icon: SiKalilinux,
    category: ["platform", "security", "tool"],
    aliases: ["Penetration Testing OS"],
  },
  NMAP: {
    key: "nmap",
    name: "Nmap",
    url: "https://nmap.org/",
    icon: GoIssueDraft,
    category: ["security", "tool"],
    aliases: ["Network Mapper", "Port Scanner"],
  },
  METASPLOIT: {
    key: "metasploit",
    name: "Metasploit",
    url: "https://www.metasploit.com/",
    icon: SiMetasploit,
    category: ["security", "tool"],
    aliases: ["Penetration Testing", "Exploit Framework"],
  },
  WIRESHARK: {
    key: "wireshark",
    name: "Wireshark",
    url: "https://www.wireshark.org/",
    icon: SiWireshark,
    category: ["security", "tool"],
    aliases: ["Packet Analyzer", "Network Protocol Analyzer"],
  },
  AIRCRACK_NG: {
    key: "aircrack_ng",
    name: "Aircrack-ng",
    url: "https://www.aircrack-ng.org/",
    icon: GoIssueDraft,
    category: ["security", "tool"],
    aliases: ["WiFi Security", "Wireless Cracking"],
  },
  BURP_SUITE: {
    key: "burp_suite",
    name: "Burp Suite",
    url: "https://portswigger.net/burp",
    icon: SiBurpsuite,
    category: ["security", "tool"],
    aliases: ["Web Security Testing", "Web Application Scanner"],
  },
  OWASP_TOP_10: {
    key: "owasp_top_10",
    name: "OWASP Top 10",
    url: "https://owasp.org/www-project-top-ten/",
    icon: SiOwasp,
    category: ["security", "tool"],
    aliases: ["Web Security Risks", "OWASP"],
  },
  OPEN_SSL: {
    key: "open_ssl",
    name: "OpenSSL",
    url: "https://www.openssl.org/",
    icon: SiOpenssl,
    category: ["security", "tool"],
    aliases: ["Cryptography", "SSL/TLS"],
  },
  SNORT: {
    key: "snort",
    name: "Snort",
    url: "https://www.snort.org/",
    icon: SiSnort,
    category: ["security", "tool"],
    aliases: ["Network Intrusion Detection", "IDS"],
  },
} satisfies Record<string, TechMetaData>;
