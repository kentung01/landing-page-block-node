"use client"

import type React from "react"

import {
  Server,
  Cpu,
  MemoryStickIcon as Memory,
  HardDrive,
  Network,
  Globe,
  Rocket,
  Shield,
  Scale,
  Map,
} from "lucide-react"
import { useSelector } from "react-redux"

export default function Infrastructure() {
  const theme = useSelector((state: any) => state.theme.theme.isDark)

  const servers = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "Finland Data Center",
      subtitle: "Non-GPU High-Performance VPS",
      processor: "AMD EPYC™ 9454P (Genoa Zen 4) 48 Cores / 96 Threads @ 2.75 GHz",
      memory: "128 GB DDR5 ECC (4x32GB, upgradeable)",
      storage: "2 x 3.84TB NVMe SSD Datacenter Edition (RAID 1)",
      network: "1 Gbit/s Unmetered Bandwidth",
      features: [
        "Full Root Access",
        "IPv4 & IPv6 Support",
        "DDoS Protection",
        "Rescue System & OS Flexibility (Debian, Ubuntu, Rocky Linux, Windows Server 2022)",
      ],
      location: "Finland (Optimized for European latency)",
      provider: "Hetzner",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Germany Data Center",
      subtitle: "Non-GPU Performance Optimized",
      processor: "AMD Ryzen™ 9 7950X3D (Raphael Zen 4, 3D V-Cache) 16 Cores / 32 Threads @ 4.2 GHz",
      memory: "128 GB DDR5 ECC (Upgradeable to 192GB)",
      storage: "2 x 1.92TB NVMe SSD Datacenter Edition (RAID 1)",
      network: "1 Gbit/s Unmetered Bandwidth",
      features: ["Full Root Access", "IPv4 & IPv6 Support", "DDoS Protection", "Rescue System & OS Flexibility"],
      location: "Germany (Optimized for European operations)",
      provider: "Hetzner",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "High-Performance GPU Node",
      subtitle: "Compute-Intensive Operations",
      processor: "AMD Ryzen™ 7 7800X3D 8 Cores / 16 Threads @ 4.2 GHz",
      memory: "128 GB DDR5 @ 6000 MHz (2x64GB)",
      storage: "2 x 2TB Samsung NVMe Gen 4",
      gpu: "NVIDIA RTX 4090 (High-Performance Compute)",
      network: "1 Gbit/s Up & Down",
      purpose: "Designed for compute-intensive workloads, parallel processing, and advanced data visualization tasks.",
      location: "Optimized for performance",
      provider: "Custom Build",
    },
  ]

  const benefits = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "High Throughput & Low Latency",
      description: "Optimized for real-time node monitoring & instant alerts.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise-Grade Security & DDoS Protection",
      description: "Ensuring continuous operations.",
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Redundant & Scalable Systems",
      description: "Built for reliability, with flexible upgrade options.",
    },
    {
      icon: <Map className="w-6 h-6" />,
      title: "European Data Center Locations",
      description: "Offering strategic low-latency connections.",
    },
  ]

  const ServerCard = ({ server }: { server: any }) => {
    return (
      <div className="w-full md:w-[380px] lg:w-[400px] h-full">
        <div
          className={`transition-transform duration-500 ease-in-out rounded-lg w-full h-full flex flex-col p-6 gap-4 hover:shadow-lg hover:scale-102 ${
            theme ? "bg-slate-700 text-gray-200" : "bg-white text-black"
          } transition-colors duration-500 ease-in-out border ${theme ? "border-slate-600" : "border-gray-200"}`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`p-3 rounded-full ${theme ? "bg-slate-600" : "bg-gray-100"} flex items-center justify-center`}
            >
              {server.icon}
            </div>
            <div>
              <h3 className="font-bold text-xl">{server.title}</h3>
              <p className="text-sm opacity-80">{server.subtitle}</p>
            </div>
          </div>

          <div className="space-y-3 flex-grow">
            <SpecItem icon={<Cpu className="w-4 h-4" />} label="Processor" value={server.processor} />
            <SpecItem icon={<Memory className="w-4 h-4" />} label="Memory" value={server.memory} />
            <SpecItem icon={<HardDrive className="w-4 h-4" />} label="Storage" value={server.storage} />
            {server.gpu && <SpecItem icon={<Cpu className="w-4 h-4" />} label="GPU" value={server.gpu} />}
            <SpecItem icon={<Network className="w-4 h-4" />} label="Network" value={server.network} />

            {server.features && (
              <div className="mt-4">
                <p className="font-semibold mb-2">Features:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {server.features.map((feature: string, idx: number) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {server.purpose && (
              <div className="mt-4">
                <p className="font-semibold mb-2">Purpose:</p>
                <p className="text-sm">{server.purpose}</p>
              </div>
            )}
          </div>

          <div className="pt-4 mt-auto border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 opacity-70" />
              <p className="text-sm">
                <span className="font-medium">Location:</span> {server.location}
              </p>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <Server className="w-4 h-4 opacity-70" />
              <p className="text-sm">
                <span className="font-medium">Provider:</span> {server.provider}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const SpecItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
    <div className="flex items-start gap-2">
      <div className="mt-1 opacity-70">{icon}</div>
      <div>
        <p className="font-medium text-sm">{label}:</p>
        <p className="text-sm">{value}</p>
      </div>
    </div>
  )

  return (
    <div className="py-16">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-2">
          <h2
            className={`text-2xl md:text-4xl font-bold ${
              theme ? "text-slate-200" : "text-black"
            } transition-colors duration-500 ease-in-out`}
          >
            Our Infrastructure — Engineered for Performance & Reliability
          </h2>
          <div
            className={`border-b ${
              theme ? "border-slate-600" : "border-gray-300"
            } transition-colors duration-500 ease-in-out w-full`}
          ></div>

          <div className="mt-6 max-w-3xl">
            <p className={`text-lg ${theme ? "text-slate-300" : "text-gray-700"}`}>
              At 5KAGE LABS, we believe that superior network intelligence starts with uncompromising infrastructure.
            </p>
            <p className={`text-lg mt-2 ${theme ? "text-slate-300" : "text-gray-700"}`}>
              Our monitoring and analytics platform is powered by high-performance dedicated servers, ensuring maximum
              uptime, low latency, and robust data handling for mission-critical operations.
            </p>
          </div>
        </div>

        <div className="mt-12 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
            {servers.map((server, index) => (
              <ServerCard key={index} server={server} />
            ))}
          </div>
        </div>

        <div className="mt-16 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3
            className={`text-xl md:text-2xl font-bold mb-8 ${
              theme ? "text-slate-200" : "text-black"
            } transition-colors duration-500 ease-in-out`}
          >
            Why Our Infrastructure Matters
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border ${
                  theme ? "bg-slate-700 border-slate-600 text-slate-200" : "bg-white border-gray-200 text-gray-800"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2 rounded-full ${
                      theme ? "bg-slate-600" : "bg-gray-100"
                    } flex items-center justify-center`}
                  >
                    {benefit.icon}
                  </div>
                  <h4 className="font-bold">{benefit.title}</h4>
                </div>
                <p className="text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          <p className={`mt-10 text-lg font-medium text-center ${theme ? "text-slate-300" : "text-gray-700"} italic`}>
            At 5KAGE LABS, infrastructure is not just hardware — it's your first line of defense for network
            reliability.
          </p>
        </div>
      </div>
    </div>
  )
}
