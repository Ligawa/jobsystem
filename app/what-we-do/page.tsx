import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "What We Do | Amnesty International",
  description: "Explore Amnesty International's work defending human rights, exposing abuses, supporting survivors, and campaigning for justice worldwide.",
}

const workAreas = [
  {
    title: "Research & Investigation",
    description: "We investigate human rights abuses with rigorous fact-finding and documentation. Our researchers gather evidence of violations and crimes against humanity to expose the truth and hold perpetrators accountable.",
    image: "/images/amnesty-research-investigation.jpg",
    href: "/issues",
    highlights: [
      "Documenting human rights violations",
      "Investigating war crimes and crimes against humanity",
      "Publishing evidence-based reports",
    ],
  },
  {
    title: "Global Advocacy Campaigns",
    description: "We mobilize millions of supporters worldwide to demand change. Our campaigns target governments, corporations, and institutions to uphold human rights and protect the vulnerable from abuse.",
    image: "/images/amnesty-advocacy-campaign.jpg",
    href: "/news",
    highlights: [
      "Organizing global campaigns for justice",
      "Mobilizing public pressure for change",
      "Engaging policymakers and decision-makers",
    ],
  },
  {
    title: "Rapid Response & Protection",
    description: "When human rights defenders face threats, we act immediately. We provide urgent support to protect activists, journalists, and vulnerable people at risk of violence and persecution.",
    image: "/images/amnesty-rapid-response.jpg",
    href: "/issues",
    highlights: [
      "Protecting human rights defenders in danger",
      "Providing emergency legal assistance",
      "Securing asylum for persecuted activists",
    ],
  },
  {
    title: "Community Support & Solidarity",
    description: "We stand with communities affected by human rights violations. We provide psychosocial support, legal assistance, and long-term solidarity with survivors and their families seeking justice.",
    image: "/images/amnesty-community-support.jpg",
    href: "/issues",
    highlights: [
      "Supporting survivors of torture and abuse",
      "Providing legal aid and advocacy",
      "Building community resilience",
    ],
  },
  {
    title: "Digital Rights & Freedom",
    description: "We fight surveillance, censorship, and digital repression. We campaign for privacy, freedom of expression, and protection from state and corporate surveillance online.",
    image: "/images/amnesty-digital-rights.jpg",
    href: "/issues",
    highlights: [
      "Combating digital surveillance",
      "Protecting online freedom of expression",
      "Fighting censorship and internet restrictions",
    ],
  },
  {
    title: "Thematic Campaigns",
    description: "We tackle human rights violations across key areas: gender-based violence, refugee and migrant rights, LGBTQ+ equality, indigenous rights, and freedom from torture and detention.",
    image: "/images/amnesty-womens-rights.jpg",
    href: "/issues",
    highlights: [
      "Ending violence against women",
      "Protecting refugee and migrant rights",
      "Fighting for equality and inclusion",
    ],
  },
]

const approaches = [
  {
    title: "Research",
    description: "We investigate and document human rights violations with rigorous methodology and evidence-based reporting to expose the truth.",
    image: "/images/amnesty-research-investigation.jpg",
  },
  {
    title: "Campaigning",
    description: "We mobilize global activism and public pressure to demand accountability and lasting change from governments and institutions.",
    image: "/images/amnesty-advocacy-campaign.jpg",
  },
  {
    title: "Direct Support",
    description: "We provide emergency assistance and long-term solidarity to survivors and human rights defenders facing threats and persecution.",
    image: "/images/amnesty-community-support.jpg",
  },
]

export default function WhatWeDoPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-black py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl text-balance text-yellow-400">
              What We Do
            </h1>
            <p className="mt-6 text-xl text-white/90 leading-relaxed">
              We investigate human rights abuses, campaign for justice, and support survivors and defenders around the world. Amnesty International stands with the oppressed and demands accountability from those in power.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
                Our Integrated Approach
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Human rights violations are systematic and interconnected. That's why Amnesty International combines research, campaigning, and direct support to deliver maximum impact. We expose abuses, mobilize global activism, and stand with those demanding their rights.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Our global network of activists, researchers, and supporters gives us unique power to hold governments and institutions accountable, regardless of borders or politics.
              </p>
              <Button asChild className="mt-6 bg-yellow-400 text-black hover:bg-yellow-300 font-semibold">
                <Link href="#focus-areas">
                  Explore Our Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/amnesty-integrated-solutions.jpg"
                alt="Amnesty International's integrated approach to human rights"
                width={400}
                height={400}
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">How We Work</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Amnesty International combines three complementary approaches to maximize human rights impact globally.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {approaches.map((approach) => (
              <Card key={approach.title} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={approach.image}
                    alt={approach.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <h3 className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-xl font-bold text-white">
                    {approach.title}
                  </h3>
                </div>
                <CardContent className="pt-6">
                  <CardDescription className="text-base leading-relaxed">
                    {approach.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work Areas */}
      <section id="focus-areas" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Our Work Areas</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover how Amnesty International defends human rights across key focus areas globally.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {workAreas.map((area) => (
              <Card key={area.title} className="group overflow-hidden border-0 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-4">
                    {area.description}
                  </CardDescription>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                    {area.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={area.href}
                    className="inline-flex items-center text-sm font-semibold text-yellow-600 hover:text-yellow-700"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 lg:py-24 bg-black text-white border-t-4 border-yellow-400">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold md:text-4xl text-yellow-400">Our Global Impact</h2>
            <p className="mt-4 text-lg text-white/90">
              Millions of people worldwide fighting for justice, freedom, and dignity.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400">10M+</div>
              <p className="mt-2 text-white/80">Activists and supporters globally</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400">190+</div>
              <p className="mt-2 text-white/80">Countries with Amnesty presence</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400">100+</div>
              <p className="mt-2 text-white/80">Countries investigated annually</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400">100+</div>
              <p className="mt-2 text-white/80">Campaigns active every year</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold">
              <Link href="/news">
                Read Our Latest Reports
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">Join the Movement</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Become part of the global Amnesty International movement fighting for human rights, justice, and dignity worldwide.
          </p>
          <Button asChild size="lg" className="mt-8 bg-yellow-400 text-black hover:bg-yellow-300 font-semibold">
            <Link href="/issues">
              Take Action Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
