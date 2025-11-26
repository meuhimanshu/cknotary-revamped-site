import { ArrowRight, CheckCircle, IdCard, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundGrid } from "@/components/ui/background-grid";
import { EstatePlanningServices } from "@/components/ui/estate-planning-services";

export default function EstatePlanningPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[350px] sm:min-h-[450px] flex items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-primary/90 dark:from-primary/10 dark:via-primary/5 dark:to-background text-primary-foreground dark:text-foreground w-full overflow-hidden antialiased">
        {/* Subtle Background Image - Family/Elderly Theme */}
        <div className="absolute inset-0 opacity-[0.09] dark:opacity-[0.03]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1600&auto=format&fit=crop')",
              filter: "grayscale(70%)",
            }}
          />
        </div>

        {/* Spotlight Effect */}
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#D4AF37" />

        {/* Background Grid */}
        <BackgroundGrid />

        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent dark:from-background/80 dark:via-transparent dark:to-transparent opacity-50" />

        <div className="container mx-auto max-w-7xl relative z-10 px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] px-4 text-primary-foreground dark:text-foreground">
                Give Your Family Peace of Mind
              </h1>
              <p className="mx-auto max-w-[700px] text-base sm:text-lg md:text-xl text-primary-foreground/90 dark:text-foreground/80 px-4">
                Preparing for a time when you cannot communicate your wishes is one of the most important things you can do
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 sm:py-16 md:py-24 bg-background w-full">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <FadeIn>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                One of the most important things you can do for yourself and your loved ones is to prepare in advance for a time when you are unable to effectively communicate and make decisions regarding your own needs and wishes. Consider these required documents:
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Essential Documents - Expandable with Carousel */}
      <section className="py-12 sm:py-16 md:py-24 bg-background w-full overflow-visible">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <FadeIn>
            <div className="text-center space-y-3 mb-10 sm:mb-12 px-2 sm:px-0">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl font-[family-name:var(--font-playfair)]">
                Essential Legal Documents
              </h2>
              <p className="mx-auto max-w-[800px] text-muted-foreground text-sm md:text-base leading-relaxed">
                These three critical documents protect you and your loved ones. Click each to learn more about how they secure your future.
              </p>
            </div>
          </FadeIn>

          <EstatePlanningServices />
        </div>
      </section>

      {/* Appointment Preparation */}
      <section className="py-12 sm:py-16 md:py-24 bg-background w-full">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12 max-w-5xl mx-auto">
            <FadeIn>
              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <IdCard className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Come to Your Appointment With:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Current ID – your Driver's Licence or BC ID and a Services Card</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>The full legal names and complete mailing addresses of your children or any other persons you wish to appoint to various tasks</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>What to Expect</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <p>
                      Expect to spend an hour on your first visit. Your Notary will take the time to get information from you and will set out possible options for your consideration. You may quickly be ready to give instructions or you may need to consider your options and have discussions with your family members before making your final decision.
                    </p>
                    <p>
                      Take all the time you need and ask your questions. Cost will be based on the documents you choose and the time spent with your Notary Public.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Making an Appointment */}
      <section className="py-12 sm:py-16 md:py-24 bg-muted/50 w-full">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <FadeIn>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)]">Making an Appointment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  You do not need to have all of the answers! Personal planning is not that difficult especially when you are assisted by a trusted and experienced Notary Public.
                </p>
                <p>
                  You only need to call and make an appointment to start the conversation. Concise legally documented instructions will save costly and time consuming legal intervention in the future.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Preparation Checklist */}
      <section className="py-12 sm:py-16 md:py-24 bg-background w-full">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <FadeIn>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-4 font-[family-name:var(--font-playfair)] px-4">
                Things to do before you meet with your Notary Public:
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <CardDescription className="mt-2 text-base">
                        Choose a trusted friend or relative to be the Executor and one to be an Alternate Executor (in case the first person cannot act or continue to act). Ask if they would be willing to act for you in this capacity and obtain their full legal names.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <CardDescription className="mt-2 text-base">
                        If you have minor children (under 19) you will need to appoint Guardians who will act in the event both you and your spouse have died. Choose a person (or a couple) to be the Guardians and a second person (or couple) who would act as Alternate Guardians (in case the first couple are unable to act or to continue to act). Ask if they would be willing to act for you in this capacity and obtain their full legal names.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <CardDescription className="mt-2 text-base">
                        Prepare a list of the full legal names of your children and any other beneficiaries. If a charitable organization is to be a beneficiary obtain their correct legal name, address and registered charitable number (if available).
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </FadeIn>

            <FadeIn delay={0.4}>
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <CardDescription className="mt-2 text-base">
                        Think about whether you would like your remains to be buried or cremated. If you are undecided your Will can be prepared without including this information.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Reassurance & CTA */}
      <section className="py-12 sm:py-16 md:py-24 bg-primary dark:bg-primary/10 text-primary-foreground dark:text-foreground w-full">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl font-[family-name:var(--font-playfair)] px-4">
                End of life planning will be easier than you imagined with the help of your Notary Public.
              </h2>
              <p className="text-base sm:text-lg text-primary-foreground/90 dark:text-foreground/80 px-4 italic">
                There are other considerations which your Notary Public will discuss with you at your first meeting.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row justify-center pt-4 px-4">
                <Button size="lg" asChild className="bg-[#D4AF37] hover:bg-[#B8941F] text-primary dark:text-primary w-full sm:w-auto shadow-lg shadow-[#D4AF37]/20">
                  <Link href="/contact">
                    Book Your Appointment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent border-2 border-primary-foreground dark:border-foreground text-primary-foreground dark:text-foreground hover:bg-primary-foreground/10 dark:hover:bg-foreground/10 w-full sm:w-auto">
                  <a href="tel:555-123-4567">
                    Call 555-123-4567
                  </a>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}


