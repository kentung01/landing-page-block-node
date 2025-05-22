import { Shield, Eye, Target, RefreshCw, Zap, BirdIcon as Dragon } from "lucide-react"
import { useSelector } from "react-redux"
import { ImLab } from "react-icons/im";

import { FaDragon } from "react-icons/fa";
export default function AboutUs(props : any) {
  const theme = useSelector((state : any) => state.theme.theme.isDark)
  const {
    companyName = "5KAGE LABS",
    companyDescription = "5KAGE LABS was established to be the vigilant force in these unseen battlegrounds. We are a network intelligence and monitoring platform dedicated to safeguarding critical digital infrastructure with precision, vigilance, and strategic foresight.",
  } = props

  const pillars = [
    {
      icon: <RefreshCw className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-red-700" />,
      title: "Resilience",
      description: "Building systems that withstand disruptions and recover swiftly.",
    },
    {
      icon: <Eye className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-red-700" />,
      title: "Vigilance",
      description: "Continuous, real-time observation to catch the earliest signs of issues.",
    },
    {
      icon: <Target className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-red-700" />,
      title: "Precision",
      description: "Delivering highly accurate insights, eliminating guesswork.",
    },
    {
      icon: <RefreshCw className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-red-700" />,
      title: "Adaptability",
      description: "Evolving with your growing infrastructure and new technologies.",
    },
    {
      icon: <Zap className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-red-700" />,
      title: "Power",
      description: "Providing tools and visibility that empower decisive, informed actions.",
    },
  ]

  const sections = [
    {
      icon: <FaDragon className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-red-600" />,
      title: "The Dragon Emblem: A Manifestation of Mastery",
      description:
        "Our logo—a coiled red dragon—encapsulates our ethos: The wings signify broad visibility, representing our capability to oversee vast, complex networks with unmatched clarity. The claws reflect our precision in identifying and addressing anomalies, ensuring even the subtlest threats are neutralized. The red hue embodies relentless vigilance and unwavering commitment, symbolizing our proactive approach to risk management. The poised, ready stance is a visual metaphor for strategic readiness, always prepared to act before disruptions escalate.",
    },
    {
      icon: <Eye className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-red-700" />,
      title: "From Monitoring to Strategic Network Intelligence",
      description:
        "At 5KAGE LABS, we go beyond traditional monitoring. We transform raw data into actionable intelligence. We decode the subtle patterns in latency, detect early indicators of system stress, and provide visibility into the health of your nodes and infrastructure — all in real-time. We do not wait for incidents to happen. We prevent them from ever surfacing. This proactive approach ensures business continuity, safeguards operational excellence, and strengthens your strategic positioning in a hyper-connected digital environment.",
    },
    {
      icon: <Shield className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-red-700" />,
      title: "Our Commitment",
      description:
        "In a world where milliseconds matter and downtime can equate to significant reputational and financial losses, 5KAGE LABS offers more than just tools. We deliver strategic network intelligence—silent, steadfast, and always ahead. Our mission is clear: To ensure your digital infrastructure remains robust, secure, and in your control—at all times.",
    },
  ]

  return (
    <div className="flex flex-col justify-center items-center w-full py-8 md:py-12 lg:py-16 zilla-slab-regular">
      <div
        className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-6 md:p-8 lg:p-10 rounded-lg md:rounded-xl shadow-md ${
          theme ? "bg-slate-800 text-slate-100" : "text-gray-800 bg-white"
        } transition-colors duration-500 ease-in-out`}
      >
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-14 lg:mb-16 border border-10 border-red-900 rounded-xl p-10 hover:shadow-xl hover:animate-none animate-pulse">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 tracking-tight grenze-gotisch-title">
            {companyName}
          </h1>
          <p className="text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed font-light zilla-slab-regular">
            {companyDescription}
          </p>
        </div>

        {/* The Meaning Behind 5KAGE */}
        <div className="mb-12 md:mb-16 lg:mb-20 zilla-slab-regular">
          <div className="bg-gradient-to-br from-red-800 to-red-900 border border-red-700 rounded-2xl shadow-xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/metal-texture.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-center tracking-tight zilla-slab-bold">
              The Meaning Behind 5KAGE
            </h2>
            <div className="mb-8 md:mb-10">
              <p className="text-base md:text-lg lg:text-xl mb-4 leading-relaxed">
                The name "5KAGE" is deeply symbolic.
              </p>
              <ul className="list-disc pl-6 mb-6 text-base md:text-lg space-y-3 leading-relaxed">
                <li>
                  "Kage", drawn from Japanese heritage, refers to shadow leaders—figures of quiet influence, operating
                  beyond the spotlight, yet pivotal in steering the course of entire domains.
                </li>
                <li>The number 5 represents the five core pillars of our philosophy.</li>
              </ul>
              <p className="text-base md:text-lg lg:text-xl mb-4 leading-relaxed">
                These values are not mere words; they form the operational DNA of 5KAGE LABS. We position ourselves as the
                silent protectors—not to be seen, but to ensure your network remains stable, secure, and always
                operational.
              </p>
            </div>
          </div>


          {/* The Five Pillars */}
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 text-center tracking-tight pt-20 zilla-slab-bold ">
            <div className="flex items-center justify-center gap-2">
              The Five Pillars of  <span className="text-red-800 flex items-center justify-center gap-2 "> 5KAGE LABS <ImLab /> </span>

            </div>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className={`p-4 md:p-5 lg:p-6 rounded-lg md:rounded-xl border-2 ${
                  theme ? "border-slate-600 bg-slate-700/30" : "border-gray-200 bg-gray-50/50"
                } flex flex-col items-center text-center h-full transition-all duration-300 hover:shadow-md`}
              >
                <div className="mb-3 md:mb-4 text-2xl md:text-3xl">{pillar.icon}</div>
                <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
                  {index + 1}. {pillar.title}
                </h4>
                <p className="text-sm md:text-base leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Sections */}
        <div className="space-y-12 md:space-y-16 lg:space-y-20">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto mb-4 md:mb-0">
                <div className={`p-4 md:p-5 lg:p-6 rounded-full ${theme ? "bg-slate-700" : "bg-gray-100"} shadow-sm`}>
                  {section.icon}
                </div>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-center md:text-left tracking-tight">
                  {section.title}
                </h2>
                <p className="text-base md:text-lg leading-relaxed">{section.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="mt-12 md:mt-16 lg:mt-20 text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 tracking-tight">5KAGE LABS</h2>
          <p className="text-lg md:text-xl lg:text-2xl italic font-light tracking-wide">
            Silent. Strategic. Relentless.
          </p>
        </div>
      </div>
    </div>
  )
}
