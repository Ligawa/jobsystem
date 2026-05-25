import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, Scale, Users, Building2, Heart, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Global Issues | UNDP",
  description: "Explore the critical global issues UNDP addresses: climate change, poverty, gender equality, governance, crisis response, and innovation.",
}

const issues = [
  {
    title: "Climate & Environment",
    slug: "climate",
    description: "Climate change is the defining challenge of our time. Amnesty International campaigns for climate justice and protects the environmental and human rights of vulnerable communities.",
    icon: Leaf,
    color: "bg-green-600",
    image: "/images/amnesty-activism-campaign.jpg",
    stats: [
      { value: "140+", label: "Countries in Amnesty network" },
      { value: "$5B+", label: "Climate finance advocacy efforts" },
      { value: "60M", label: "People affected by climate abuse" },
    ],
    approach: "We fight for human rights in the face of climate crisis, campaign for corporate accountability, and protect communities on the frontlines of climate change.",
  },
  {
    title: "Poverty & Inequality",
    slug: "poverty",
    description: "Economic inequality perpetuates human rights abuses. Amnesty International works to expose and end systemic inequality that denies people dignity and justice.",
    icon: Scale,
    color: "bg-indigo-600",
    image: "/images/amnesty-grassroots.jpg",
    stats: [
      { value: "86M", label: "People supported by campaigns" },
      { value: "100+", label: "Countries with active Amnesty teams" },
      { value: "25M", label: "Activists mobilized globally" },
    ],
    approach: "We expose human rights violations rooted in inequality, campaign for economic justice, and support communities demanding their rights to dignity and livelihood.",
  },
  {
    title: "Gender Equality",
    slug: "gender",
    description: "Gender-based violence and discrimination are grave human rights violations. Amnesty International campaigns to end violence against women and achieve gender justice.",
    icon: Users,
    color: "bg-pink-600",
    image: "/images/amnesty-womens-rights.jpg",
    stats: [
      { value: "70+", label: "Campaigns for women's rights" },
      { value: "15M", label: "Women activists in movement" },
      { value: "50+", label: "Countries fighting for equality" },
    ],
    approach: "We defend women human rights defenders, campaign against gender-based violence, and fight for legal protections and accountability for perpetrators.",
  },
  {
    title: "Democratic Governance",
    slug: "governance",
    description: "Authoritarian repression and government abuse of power violate fundamental human rights. Amnesty campaigns for accountability and democratic freedoms.",
    icon: Building2,
    color: "bg-amber-600",
    image: "/images/amnesty-justice-advocacy.jpg",
    stats: [
      { value: "95", label: "Campaigns for justice" },
      { value: "130+", label: "Prisoners of conscience cases" },
      { value: "80+", label: "Countries exposed for abuses" },
    ],
    approach: "We expose state repression, demand accountability for human rights violations, and campaign for freedom of expression, assembly, and association.",
  },
  {
    title: "Crisis Prevention & Response",
    slug: "crisis",
    description: "Armed conflict and humanitarian crises create mass human rights violations. Amnesty International investigates abuses and provides urgent support to victims.",
    icon: Heart,
    color: "bg-red-600",
    image: "/images/amnesty-refugee-support.jpg",
    stats: [
      { value: "50+", label: "Crisis-affected countries" },
      { value: "10M", label: "Refugees and displaced persons" },
      { value: "35+", label: "Countries with Amnesty teams" },
    ],
    approach: "We investigate war crimes and crimes against humanity, provide support to refugees and asylum seekers, and campaign for international justice.",
  },
  {
    title: "Freedom & Justice",
    slug: "innovation",
    description: "Technology can be weaponized against human rights. Amnesty campaigns for technology to be used in service of freedom, not oppression.",
    icon: Lightbulb,
    color: "bg-cyan-600",
    image: "/images/amnesty-freedom-march.jpg",
    stats: [
      { value: "115", label: "Research and investigation teams" },
      { value: "60+", label: "Countries with digital rights focus" },
      { value: "500+", label: "Cases documented and published" },
    ],
    approach: "We fight digital surveillance, demand privacy rights, campaign for free and open internet, and ensure technology serves human rights not repression.",
  },
]

export default function IssuesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#0468B1] py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl text-balance">
              Global Issues
            </h1>
            <p className="mt-6 text-xl text-white/90 leading-relaxed">
              The world faces interconnected challenges that require integrated solutions. 
              Explore the critical issues UNDP addresses to build a better future for all.
            </p>
          </div>
        </div>
      </section>

      {/* Issues Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {issues.map((issue, index) => (
              <div 
                key={issue.slug}
                id={issue.slug}
                className={`grid gap-8 lg:grid-cols-2 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={issue.image || "/placeholder.svg"}
                      alt={issue.title}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute top-4 left-4 ${issue.color} rounded-full p-3`}>
                      <issue.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
                    {issue.title}
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                    {issue.description}
                  </p>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    <strong>Our Approach:</strong> {issue.approach}
                  </p>

                  {/* Stats */}
                  <div className="mt-8 grid grid-cols-3 gap-4">
                    {issue.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-2xl font-bold text-primary md:text-3xl">{stat.value}</div>
                        <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="mt-8 bg-[#0468B1] hover:bg-[#035a9c]">
                    <Link href={`/issues/${issue.slug}`}>
                      Explore {issue.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Connection */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
                Connected to the SDGs
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                All the issues we address are interconnected and mapped to the 17 Sustainable 
                Development Goals. Progress in one area accelerates progress in others.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our integrated approach ensures that solutions address multiple challenges 
                simultaneously, maximizing impact and avoiding trade-offs between different 
                development priorities.
              </p>
              <Button asChild className="mt-6 bg-[#0468B1] hover:bg-[#035a9c]">
                <Link href="/what-we-do">
                  Learn About Our Approach
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/sdg-wheel.svg"
                alt="Sustainable Development Goals Wheel"
                width={400}
                height={400}
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl mb-12">
            Explore by Issue
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {issues.map((issue) => (
              <Link
                key={issue.slug}
                href={`/issues/${issue.slug}`}
                className="group flex flex-col items-center rounded-lg border border-border p-6 text-center transition-all hover:border-primary hover:shadow-lg"
              >
                <div className={`${issue.color} rounded-full p-3 transition-transform group-hover:scale-110`}>
                  <issue.icon className="h-6 w-6 text-white" />
                </div>
                <span className="mt-4 font-semibold text-foreground group-hover:text-primary">
                  {issue.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
