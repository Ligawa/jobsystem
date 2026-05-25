import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Target, Eye, Shield, Users, Globe2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Amnesty International",
  description: "Learn about Amnesty International's mission, history, and work defending human rights and demanding justice worldwide.",
}

const coreValues = [
  {
    title: "Integrity",
    description: "We act honestly and transparently in all our dealings, maintaining the highest ethical standards.",
    icon: Shield,
  },
  {
    title: "Professionalism",
    description: "We demonstrate expertise, competence, and dedication in every aspect of our work.",
    icon: Target,
  },
  {
    title: "Respect for Diversity",
    description: "We embrace and celebrate diversity, fostering inclusive environments everywhere we operate.",
    icon: Users,
  },
]

const leadership = [
  {
    name: "Amnesty International Leadership",
    role: "Global Team",
    image: "/images/adc-bio.jpg",
    bio: "Amnesty International's global team campaigns for human rights, supports survivors of abuse, and pushes institutions to uphold justice and dignity.",
  },
]

const timeline = [
  {
    year: "1961",
    title: "Amnesty International Founded",
    description: "Amnesty International was founded to defend people wherever justice is denied and human rights are under threat.",
  },
  {
    year: "1977",
    title: "The Nobel Peace Prize",
    description: "Amnesty International was awarded the Nobel Peace Prize for its work promoting human rights and ending abuse.",
  },
  {
    year: "1998",
    title: "International Campaigning",
    description: "Our global campaigns expanded to support survivors, expose abuse, and challenge governments around the world.",
  },
  {
    year: "2020",
    title: "Digital Advocacy",
    description: "Amnesty International strengthened its global advocacy and rapid response work with digital tools and community-led campaigns.",
  },
  {
    year: "2025",
    title: "Human Rights in Action",
    description: "Today, Amnesty International continues to defend dignity, demand accountability, and mobilize people everywhere for justice.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#0468B1] py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl text-balance">
              About Amnesty International
            </h1>
            <p className="mt-6 text-xl text-white/90 leading-relaxed">
              Amnesty International works in every region of the world to protect people from abuse, expose injustice, and demand accountability from those in power.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-primary">
                <Target className="h-6 w-6" />
                <span className="text-sm font-semibold uppercase tracking-wider">Our Mission</span>
              </div>
              <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
                Defending Human Rights. Protecting Dignity. Demanding Justice.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Amnesty International works with communities, partners, and supporters to expose abuse and challenge systems that deny people their rights. We put pressure on governments and institutions to act, while standing with individuals and families affected by injustice.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Our campaigns, research, and advocacy help ensure that people everywhere can live with freedom, safety, and the right to be heard.
              </p>
            </div>
            <div className="flex flex-col justify-center rounded-2xl bg-muted/50 p-8 lg:p-12">
              <div className="inline-flex items-center gap-2 text-primary">
                <Eye className="h-6 w-6" />
                <span className="text-sm font-semibold uppercase tracking-wider">Our Vision</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-foreground md:text-3xl text-balance">
                A World Where Rights Are Protected
              </h3>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                We envision a world where every person can live free from fear, discrimination, and abuse—where dignity is respected and justice is reachable for all.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">170+</div>
                  <div className="mt-1 text-sm text-muted-foreground">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">17K+</div>
                  <div className="mt-1 text-sm text-muted-foreground">Staff</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">60</div>
                  <div className="mt-1 text-sm text-muted-foreground">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Our Core Values</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              These principles guide everything we do, from policy advice to project implementation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {coreValues.map((value) => (
              <Card key={value.title} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-4 rounded-full bg-primary/10 p-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
                A Legacy of Human Rights Action
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Since 1961, Amnesty International has been at the forefront of the global human rights movement, adapting to new threats while staying faithful to the protection of dignity and justice.
              </p>
              <div className="relative mt-8 aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/images/undp60-crop.jpg"
                  alt="Amnesty International history"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={item.year} className="relative pl-12">
                    <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {index + 1}
                    </div>
                    <div className="rounded-lg bg-card p-6 shadow-md">
                      <div className="text-sm font-semibold text-primary">{item.year}</div>
                      <h3 className="mt-1 text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Our Leadership</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Meet the leaders guiding UNEDP's global mission for sustainable development.
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            {leadership.map((leader) => (
              <Card key={leader.name} className="overflow-hidden border-0 shadow-xl">
                <div className="grid md:grid-cols-2">
                  <div className="relative aspect-square md:aspect-auto">
                    <Image
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-8">
                    <h3 className="text-2xl font-bold text-foreground">{leader.name}</h3>
                    <p className="mt-1 text-primary font-semibold">{leader.role}</p>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{leader.bio}</p>
                    <Button asChild className="mt-6 w-fit bg-[#0468B1] hover:bg-[#035a9c]">
                      <Link href="/about/leadership">
                        Full Leadership Team
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Framework */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Strategic Plan 2022-2025</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our strategic plan outlines how we will support countries to achieve the SDGs and 
              build forward better from the compound crises of our time.
            </p>
            
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-green-50 p-6 text-center">
                <Globe2 className="mx-auto h-10 w-10 text-green-600" />
                <h3 className="mt-4 font-semibold text-foreground">Structural Transformation</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Supporting inclusive and sustainable development pathways
                </p>
              </div>
              <div className="rounded-lg bg-blue-50 p-6 text-center">
                <Users className="mx-auto h-10 w-10 text-blue-600" />
                <h3 className="mt-4 font-semibold text-foreground">Leaving No One Behind</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Ensuring the most vulnerable are included in progress
                </p>
              </div>
              <div className="rounded-lg bg-amber-50 p-6 text-center">
                <Heart className="mx-auto h-10 w-10 text-amber-600" />
                <h3 className="mt-4 font-semibold text-foreground">Building Resilience</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Strengthening capacity to prevent and respond to crises
                </p>
              </div>
            </div>

            <Button asChild size="lg" className="mt-10 bg-[#0468B1] hover:bg-[#035a9c]">
              <Link href="/resources/strategic-plan">
                Read the Strategic Plan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
