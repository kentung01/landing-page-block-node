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
import Link from "next/link"

interface Props {
  ref?: any
}


export default function Infrastructure({ ref, ...props }: Props) {
  const theme = useSelector((state: any) => state.theme.theme.isDark)

  const servers = [
    {
      icon: <Server className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-red-800" />,
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
      icon: <Server className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-red-800" />,
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
      icon: <Cpu className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-red-800" />,
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
      icon: <Rocket className="w-5 h-5 md:w-6 md:h-6 text-red-800" />,
      title: "High Throughput & Low Latency",
      description: "Optimized for real-time node monitoring & instant alerts.",
    },
    {
      icon: <Shield className="w-5 h-5 md:w-6 md:h-6 text-red-800" />,
      title: "Enterprise-Grade Security & DDoS Protection",
      description: "Ensuring continuous operations.",
    },
    {
      icon: <Scale className="w-5 h-5 md:w-6 md:h-6 text-red-800" />,
      title: "Redundant & Scalable Systems",
      description: "Built for reliability, with flexible upgrade options.",
    },
    {
      icon: <Map className="w-5 h-5 md:w-6 md:h-6 text-red-800" />,
      title: "European Data Center Locations",
      description: "Offering strategic low-latency connections.",
    },
  ]

  const ServerCard = ({ server }: { server: any }) => {
    return (
      <div className="w-full md:w-[380px] lg:w-[400px] h-full">
        <div
          className={`transition-all duration-300 ease-in-out rounded-lg w-full h-full flex flex-col p-4 sm:p-5 lg:p-6 gap-4 hover:shadow-lg hover:scale-[1.02] ${
            theme ? "bg-slate-800 text-slate-100" : "bg-white text-gray-800"
          } border ${theme ? "border-slate-700" : "border-gray-200"}`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`p-2.5 sm:p-3 rounded-full ${
                theme ? "bg-slate-700" : "bg-gray-100"
              } flex items-center justify-center`}
            >
              {server.icon}
            </div>
            <div>
              <h3 className="font-bold text-lg sm:text-xl tracking-tight">{server.title}</h3>
              <p className="text-xs sm:text-sm opacity-80 font-medium">{server.subtitle}</p>
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
                <p className="font-semibold mb-2 text-sm sm:text-base">Features:</p>
                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                  {server.features.map((feature: string, idx: number) => (
                    <li key={idx} className="leading-relaxed">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {server.purpose && (
              <div className="mt-4">
                <p className="font-semibold mb-2 text-sm sm:text-base">Purpose:</p>
                <p className="text-xs sm:text-sm leading-relaxed">{server.purpose}</p>
              </div>
            )}
          </div>

          <div className="pt-3 mt-auto border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-70" />
              <p className="text-xs sm:text-sm">
                <span className="font-medium">Location:</span> {server.location}
              </p>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <Server className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-70" />
              <p className="text-xs sm:text-sm">
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
      <div className="mt-0.5 opacity-70 flex-shrink-0">{icon}</div>
      <div>
        <p className="font-medium text-xs sm:text-sm">{label}:</p>
        <p className="text-xs sm:text-sm leading-relaxed">{value}</p>
      </div>
    </div>
  )

  return (
    <div className="py-10 sm:py-12 md:py-16" id="infrastructure" ref={ref}>
      <div className={`w-full flex flex-col justify-center items-center `}>
        <div className={`w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-2  justify-center items-center text-center p-10 rounded-xl shadow-xl ${theme ? "bg-slate-900" : "bg-white"}`}>
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight ${
              theme ? "text-slate-100" : "text-gray-900"
            } transition-colors duration-500 ease-in-out`}
          >
            Our Infrastructure — Engineered for Performance & Reliability
          </h2>
          <div
            className={`border-b ${
              theme ? "border-slate-700" : "border-gray-200"
            } transition-colors duration-500 ease-in-out w-full`}
          ></div>

          <div className="mt-4 sm:mt-6 max-w-3xl">
            <p className={`text-base sm:text-lg leading-relaxed ${theme ? "text-slate-300" : "text-gray-700"}`}>
              At 5KAGE LABS, we believe that superior network intelligence starts with uncompromising infrastructure.
            </p>
            <p className={`text-base sm:text-lg mt-2 leading-relaxed ${theme ? "text-slate-300" : "text-gray-700"}`}>
              Our monitoring and analytics platform is powered by high-performance dedicated servers, ensuring maximum
              uptime, low latency, and robust data handling for mission-critical operations.
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 justify-items-center">
            {servers.map((server, index) => (
              <ServerCard key={index} server={server} />
            ))}
          </div>
        </div>

        <div className="mt-12 sm:mt-14 md:mt-16 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3
            className={`text-xl sm:text-2xl font-bold mb-6 sm:mb-8 tracking-tight ${
              theme ? "text-slate-100" : "text-gray-900"
            } transition-colors duration-500 ease-in-out`}
          >
            Why Our Infrastructure Matters
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`p-4 sm:p-5 md:p-6 rounded-lg border transition-all duration-300 hover:shadow-md ${
                  theme ? "bg-slate-800 border-slate-700 text-slate-100" : "bg-white border-gray-200 text-gray-800"
                }`}
              >
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div
                    className={`p-2 rounded-full ${
                      theme ? "bg-slate-700" : "bg-gray-100"
                    } flex items-center justify-center`}
                  >
                    {benefit.icon}
                  </div>
                  <h4 className="font-bold text-sm sm:text-base">{benefit.title}</h4>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <p
            className={`mt-8 sm:mt-10 text-base sm:text-lg font-medium text-center ${
              theme ? "text-slate-300" : "text-gray-700"
            } italic`}
          >
            At 5KAGE LABS, infrastructure is not just hardware — it's your first line of defense for network
            reliability.
          </p>
        </div>
      </div>
       {/* Call to Action Section */}
       <div
        className={`w-full py-16 ${
          theme ? "bg-slate-800 text-white" : "bg-gray-100 text-black"
        } transition-colors duration-500 ease-in-out`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Monitor Your Network with 5KAGE Precision?</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/get-started"
              className={`px-6 py-3 rounded-md font-medium text-white ${
                theme ? "bg-red-800 hover:bg-red-700" : "bg-red-800 hover:bg-red-600"
              } transition-colors duration-300`}
            >
              Get Started Free
            </Link>
            <Link
              href="/book-demo"
              className={`px-6 py-3 rounded-md font-medium ${
                theme
                  ? "bg-slate-700 text-white hover:bg-slate-600"
                  : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100"
              } transition-colors duration-300`}
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
