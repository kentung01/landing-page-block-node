import React, { ReactElement } from 'react'
import { IoShieldCheckmarkOutline } from 'react-icons/io5';
import { PiBridgeLight } from 'react-icons/pi';
import { RiComputerLine } from 'react-icons/ri';

import { Shield, Eye, Target, RefreshCw, Zap, BirdIcon as Dragon } from "lucide-react"
import { useSelector } from "react-redux"


export default function AboutUs(props : any) {
   
    const theme = useSelector((state: any) => state.theme.theme.isDark)
    const {
      companyName = "5KAGE LABS",
      companyDescription = "5KAGE LABS was established to be the vigilant force in these unseen battlegrounds. We are a network intelligence and monitoring platform dedicated to safeguarding critical digital infrastructure with precision, vigilance, and strategic foresight.",
    } = props
  
    const pillars = [
      {
        icon: <RefreshCw className="w-8 h-8" />,
        title: "Resilience",
        description: "Building systems that withstand disruptions and recover swiftly.",
      },
      {
        icon: <Eye className="w-8 h-8" />,
        title: "Vigilance",
        description: "Continuous, real-time observation to catch the earliest signs of issues.",
      },
      {
        icon: <Target className="w-8 h-8" />,
        title: "Precision",
        description: "Delivering highly accurate insights, eliminating guesswork.",
      },
      {
        icon: <RefreshCw className="w-8 h-8" />,
        title: "Adaptability",
        description: "Evolving with your growing infrastructure and new technologies.",
      },
      {
        icon: <Zap className="w-8 h-8" />,
        title: "Power",
        description: "Providing tools and visibility that empower decisive, informed actions.",
      },
    ]
  
    const sections = [
      {
        icon: <Dragon className="w-10 h-10" />,
        title: "The Dragon Emblem: A Manifestation of Mastery",
        description:
          "Our logo—a coiled red dragon—encapsulates our ethos: The wings signify broad visibility, representing our capability to oversee vast, complex networks with unmatched clarity. The claws reflect our precision in identifying and addressing anomalies, ensuring even the subtlest threats are neutralized. The red hue embodies relentless vigilance and unwavering commitment, symbolizing our proactive approach to risk management. The poised, ready stance is a visual metaphor for strategic readiness, always prepared to act before disruptions escalate.",
      },
      {
        icon: <Eye className="w-10 h-10" />,
        title: "From Monitoring to Strategic Network Intelligence",
        description:
          "At 5KAGE LABS, we go beyond traditional monitoring. We transform raw data into actionable intelligence. We decode the subtle patterns in latency, detect early indicators of system stress, and provide visibility into the health of your nodes and infrastructure — all in real-time. We do not wait for incidents to happen. We prevent them from ever surfacing. This proactive approach ensures business continuity, safeguards operational excellence, and strengthens your strategic positioning in a hyper-connected digital environment.",
      },
      {
        icon: <Shield className="w-10 h-10" />,
        title: "Our Commitment",
        description:
          "In a world where milliseconds matter and downtime can equate to significant reputational and financial losses, 5KAGE LABS offers more than just tools. We deliver strategic network intelligence—silent, steadfast, and always ahead. Our mission is clear: To ensure your digital infrastructure remains robust, secure, and in your control—at all times.",
      },
    ]
  
    return (
      <div className="flex flex-col justify-center items-center w-full py-12">
        <div
          className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-8 md:p-10 rounded-md ${
            theme ? "bg-slate-700 text-slate-200" : "text-gray-900 bg-white"
          } transition-colors duration-500 ease-in-out`}
        >
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{companyName}</h1>
            <p className="text-lg md:text-xl max-w-4xl mx-auto">{companyDescription}</p>
          </div>
  
          {/* The Meaning Behind 5KAGE */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">The Meaning Behind 5KAGE</h2>
            <div className="mb-6">
              <p className="text-lg mb-4">The name "5KAGE" is deeply symbolic.</p>
              <ul className="list-disc pl-6 mb-4 text-lg">
                <li className="mb-2">
                  "Kage", drawn from Japanese heritage, refers to shadow leaders—figures of quiet influence, operating
                  beyond the spotlight, yet pivotal in steering the course of entire domains.
                </li>
                <li>The number 5 represents the five core pillars of our philosophy.</li>
              </ul>
              <p className="text-lg mb-4">
                These values are not mere words; they form the operational DNA of 5KAGE LABS. We position ourselves as the
                silent protectors—not to be seen, but to ensure your network remains stable, secure, and always
                operational.
              </p>
            </div>
  
            {/* The Five Pillars */}
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">The Five Pillars of 5KAGE LABS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border-2 ${
                    theme ? "border-slate-500" : "border-gray-300"
                  } flex flex-col items-center text-center h-full`}
                >
                  <div className="mb-4 text-3xl">{pillar.icon}</div>
                  <h4 className="text-xl font-bold mb-2">
                    {index + 1}. {pillar.title}
                  </h4>
                  <p>{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
  
          {/* Main Sections */}
          <div className="space-y-16">
            {sections.map((section, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
                  <div className={`p-4 rounded-full ${theme ? "bg-slate-600" : "bg-gray-100"}`}>{section.icon}</div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-center md:text-left">{section.title}</h2>
                  <p className="text-lg">{section.description}</p>
                </div>
              </div>
            ))}
          </div>
  
          {/* Tagline */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-2">5KAGE LABS</h2>
            <p className="text-xl italic">Silent. Strategic. Relentless.</p>
          </div>
        </div>
    </div>
  )
}
