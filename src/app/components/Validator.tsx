import Image from "next/image"
import { useRef } from "react"
import { CheckCircle } from "lucide-react"
import { useSelector } from "react-redux"

interface Props {
  ref?: any
}

export default function ValidatorNetworks({ ref }: Props) {
  const theme = useSelector((state: any) => state.theme.theme.isDark)
  const networkRef = useRef(null)

  const networks = [
    {
      image: "/placeholder.svg?height=40&width=40",
      title: "Story Protocol",
      description: "Story Staking Validator",
      role: "Active Validator ensuring network security & decentralization.",
      serviceLink: "https://storyprotocol.xyz",
      explorerLink: "https://explorer.storyprotocol.xyz",
      dashboardLink: "https://storyprotocol.xyz/validator-dashboard",
      status: "active",
    },
    {
      image: "/placeholder.svg?height=40&width=40",
      title: "0G Network",
      description: "0G Blockchain",
      role: "Validator maintaining consensus integrity and uptime.",
      serviceLink: "https://0g.network",
      explorerLink: "https://explorer.0g.network",
      dashboardLink: "https://0g.network/validator-dashboard",
      status: "active",
    },
    {
      image: "/placeholder.svg?height=40&width=40",
      title: "Kiichain",
      description: "Kiichain Testnet",
      role: "Validator supporting testnet stability and infrastructure robustness.",
      serviceLink: "https://kiichain.org",
      explorerLink: "https://explorer.kiichain.org",
      dashboardLink: "https://kiichain.org/validator-dashboard",
      status: "testnet",
    },
  ]

  const benefits = [
    "Proven track record in validator management.",
    "Trusted by multiple blockchain ecosystems.",
    "Demonstrating real-world node monitoring & uptime excellence.",
  ]

  const NetworkButton = ({ name, link }: { name: string; link: string }) => {
    const handleClick = () => {
      window.open(link, "_blank")
    }

    return (
      <button
        onClick={handleClick}
        className={`text-sm md:text-base border-2 cursor-pointer rounded px-2 py-1 transition-all duration-300 ${
          theme
            ? "border-slate-500 hover:bg-slate-600 hover:text-white hover:border-slate-500"
            : "border-gray-300 hover:bg-orange-500 hover:text-white hover:border-orange-500"
        }`}
      >
        {name}
      </button>
    )
  }

  const NetworkCard = ({ network }: { network: any }) => {
    return (
      <div ref={networkRef} className="h-full w-full md:w-[320px] lg:w-[350px]">
        <div
          className={`transition-transform duration-500 ease-in-out rounded-lg w-full h-full flex flex-col p-5 gap-4 hover:shadow-lg hover:scale-102 ${
            theme ? "bg-slate-700 text-slate-200" : "bg-white text-black"
          } transition-colors duration-500 ease-in-out border ${theme ? "border-slate-600" : "border-gray-200"}`}
        >
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                className="rounded-full object-cover"
                src={network.image || "/placeholder.svg"}
                alt={`${network.title} logo`}
                fill
                sizes="40px"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg">{network.title}</h3>
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                    network.status === "active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {network.status === "active" ? "Active" : "Testnet"}
                </span>
              </div>
              <p className="text-sm opacity-80">{network.description}</p>
            </div>
          </div>

          <div className="flex-grow">
            <p className="text-sm mb-4">{network.role}</p>
          </div>

          <div className="flex flex-wrap gap-2 justify-start">
            <NetworkButton name="Service" link={network.serviceLink} />
            <NetworkButton name="Explorer" link={network.explorerLink} />
            <NetworkButton name="Dashboard" link={network.dashboardLink} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-2">
          <h2
            className={`text-2xl md:text-4xl font-bold ${
              theme ? "text-slate-200" : "text-black"
            } transition-colors duration-500 ease-in-out`}
          >
            Active Validator Nodes
          </h2>
          <div
            className={`border-b ${
              theme ? "border-slate-600" : "border-gray-300"
            } transition-colors duration-500 ease-in-out w-full`}
          ></div>

          <div className="mt-6 max-w-3xl">
            <p className={`text-lg ${theme ? "text-slate-300" : "text-gray-700"}`}>
              At 5KAGE LABS, we don't just build monitoring systems — we actively contribute to network ecosystems
              through professional validator operations.
            </p>
            <p className={`text-lg mt-2 ${theme ? "text-slate-300" : "text-gray-700"}`}>
              Our expertise in maintaining secure, reliable, and high-performance nodes is demonstrated across multiple
              blockchain networks.
            </p>
          </div>
        </div>

        <div className="mt-12 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
            {networks.map((network, index) => (
              <NetworkCard key={index} network={network} />
            ))}
          </div>
        </div>

        <div className="mt-16 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3
            className={`text-xl md:text-2xl font-bold mb-6 ${
              theme ? "text-slate-200" : "text-black"
            } transition-colors duration-500 ease-in-out`}
          >
            Why This Matters
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border ${
                  theme ? "bg-slate-700 border-slate-600 text-slate-200" : "bg-white border-gray-200 text-gray-800"
                }`}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                  <p>{benefit}</p>
                </div>
              </div>
            ))}
          </div>

          <p
            className={`mt-10 text-lg font-medium text-center ${
              theme ? "text-slate-300" : "text-gray-700"
            } max-w-3xl mx-auto`}
          >
            5KAGE LABS combines operational expertise with cutting-edge monitoring to deliver reliable validator
            services across networks.
          </p>
        </div>
      </div>
    </div>
  )
}
