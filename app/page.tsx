import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Users, Globe2, Leaf, Building2, Heart, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const impactStats = [
  { value: "170+", label: "Countries & Territories", icon: Globe2 },
  { value: "1.4B", label: "People Supported", icon: Users },
  { value: "5,000+", label: "Active Projects", icon: Building2 },
  { value: "100M", label: "Lives Improved Annually", icon: Heart },
]

const focusAreas = [
  {
    title: "Sustainable Development",
    description: "Helping countries achieve the 2030 Agenda and the Sustainable Development Goals.",
    icon: Leaf,
    href: "/what-we-do#sustainable-development",
    color: "bg-green-600",
  },
  {
    title: "Climate Action",
    description: "Supporting climate adaptation, mitigation, and the transition to clean energy.",
    icon: Zap,
    href: "/issues/climate",
    color: "bg-blue-600",
  },
  {
    title: "Governance",
    description: "Strengthening democratic governance and building effective, accountable institutions.",
    icon: Building2,
    href: "/issues/governance",
    color: "bg-amber-600",
  },
  {
    title: "Crisis Response",
    description: "Responding to crises and building resilience for communities worldwide.",
    icon: Heart,
    href: "/issues/crisis",
    color: "bg-red-600",
  },
]

const latestStories = [
  {
    title: "Women's Rights Defenders Lead Global Campaign",
    excerpt: "Amnesty International amplifies the voices of women fighting for equality, justice, and dignity worldwide.",
    image: "/images/amnesty-womens-rights.jpg",
    date: "January 28, 2026",
    category: "Gender Equality",
    slug: "womens-rights-defenders",
  },
  {
    title: "Global Activism Movements Demand Human Rights",
    excerpt: "Communities around the world join Amnesty International in demanding justice, freedom, and accountability from governments.",
    image: "/images/amnesty-freedom-march.jpg",
    date: "January 25, 2026",
    category: "Human Rights",
    slug: "global-activism-movements",
  },
  {
    title: "Grassroots Campaigns Spark Real Change",
    excerpt: "Local communities and activists work with Amnesty International to defend human rights and protect the vulnerable.",
    image: "/images/amnesty-grassroots.jpg",
    date: "January 22, 2026",
    category: "Justice",
    slug: "grassroots-campaigns-change",
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/amnesty-hero-background.jpg"
            alt="Global activists and human rights defenders united for justice and freedom"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-balance">
              Defending Human Rights Around the World
            </h1>
            <p className="mt-6 text-lg text-white/90 md:text-xl leading-relaxed">
              Amnesty International campaigns for justice, freedom, and dignity in every country and community we serve. We expose abuse, support survivors, and push for lasting change.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold">
                <Link href="/what-we-do">
                  Explore Our Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 bg-transparent">
                <Link href="/news">Latest Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat) => (
              <div key={stat.label} className="text-center text-white">
                <stat.icon className="mx-auto h-10 w-10 mb-4 text-yellow-400" />
                <div className="text-4xl font-bold md:text-5xl text-yellow-400">{stat.value}</div>
                <div className="mt-2 text-sm uppercase tracking-wide text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Focus Areas */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">What We Do</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our work spans multiple areas of sustainable development, from climate action to 
              governance, all interconnected in the pursuit of progress.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area) => (
              <Card key={area.title} className="group overflow-hidden border-0 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                <div className={`${area.color} p-4`}>
                  <area.icon className="h-10 w-10 text-white" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{area.description}</CardDescription>
                  <Link 
                    href={area.href} 
                    className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:underline"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
              <Link href="/what-we-do">View All Focus Areas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Stories */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Latest Stories</h2>
              <p className="mt-2 text-lg text-muted-foreground">
                News, features, and impact stories from around the world.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/news">View All Stories</Link>
            </Button>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {latestStories.map((story) => (
              <article key={story.slug} className="group overflow-hidden rounded-lg bg-card shadow-md transition-all hover:shadow-xl">
                <Link href={`/news/${story.slug}`}>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-black">
                        {story.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <time className="text-sm text-muted-foreground">{story.date}</time>
                    <h3 className="mt-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors text-balance">
                      {story.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground line-clamp-2">{story.excerpt}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Report */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center bg-card rounded-2xl p-8 lg:p-12 shadow-lg">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/mpi-2025-coverpage-crop.jpg"
                alt="Multidimensional Poverty Index 2025 Report Cover"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                Featured Report
              </span>
              <h2 className="mt-4 text-2xl font-bold text-foreground md:text-3xl text-balance">
                Global Multidimensional Poverty Index 2025
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                The latest data reveals both progress and challenges in the fight against multidimensional 
                poverty. Explore trends, regional insights, and policy recommendations for accelerating 
                poverty reduction worldwide.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold">
                  <Link href="/resources/mpi-2025">
                    Read the Report
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-yellow-400 text-yellow-600 hover:bg-yellow-50">
                  <Link href="/resources">Browse All Publications</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 lg:py-24 bg-black border-t-4 border-yellow-400">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center text-white">
            <h2 className="text-3xl font-bold md:text-4xl text-yellow-400">Stay Connected</h2>
            <p className="mt-4 text-lg text-white/90">
              Subscribe to our newsletter for the latest news, stories, and updates on our work around the world.
            </p>
            <form className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-md border-2 border-yellow-400 bg-transparent px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <Button type="submit" className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold px-8">
                Subscribe
              </Button>
            </form>
            <p className="mt-4 text-sm text-white/70">
              By subscribing, you agree to receive communications from Amnesty International. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Good Stories Banner */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/good-stories.png"
            alt="Collage of impact stories from around the world"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#5a7247]/80" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold md:text-5xl text-balance">Stories of Progress and Hope</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Discover the human stories behind our work—real people, real impact, real change.
          </p>
          <Button asChild size="lg" className="mt-8 bg-white text-[#5a7247] hover:bg-white/90">
            <Link href="/news">
              Explore Good Stories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
