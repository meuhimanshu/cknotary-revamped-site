import { ArrowRight, Phone, FileCheck, Home as HomeIcon, Key, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundGrid } from "@/components/ui/background-grid";
import { RealEstateServices } from "@/components/ui/real-estate-services";

export default function RealEstatePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[350px] sm:min-h-[450px] flex items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-primary/90 dark:from-primary/10 dark:via-primary/5 dark:to-background text-primary-foreground dark:text-foreground w-full overflow-hidden antialiased">
        {/* Subtle Background Image - Home/Property Theme */}
        <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.03]">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&auto=format&fit=crop')",
              filter: "grayscale(60%)",
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
                Get Peace of Mind for Your Real Estate Transaction
              </h1>
              <p className="mx-auto max-w-[700px] text-base sm:text-lg md:text-xl text-primary-foreground/90 dark:text-foreground/80 px-4">
                Expert guidance for buying, selling, or refinancing your property
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What's Next Timeline */}
      <section className="py-12 sm:py-16 md:py-24 bg-background w-full overflow-visible">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 overflow-visible">
          <FadeIn>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl font-[family-name:var(--font-playfair)]">
                What&apos;s Next?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground text-base md:text-lg">
                Follow these simple steps for a smooth transaction
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-8 sm:gap-10 md:grid-cols-3 max-w-6xl mx-auto pt-8 overflow-visible">
            <FadeIn delay={0.1} className="overflow-visible">
              <Card className="relative h-full pt-6 overflow-visible">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl shadow-lg z-10">
                  1
                </div>
                <CardHeader className="pt-8 pb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 mb-4 mx-auto">
                    <Phone className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-center text-xl">Contact Our Office Early</CardTitle>
                </CardHeader>
                <CardContent className="text-center pb-8">
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Reach out as soon as you have an accepted offer. The earlier we start, the smoother your transaction will be.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2} className="overflow-visible">
              <Card className="relative h-full pt-6 overflow-visible">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl shadow-lg z-10">
                  2
                </div>
                <CardHeader className="pt-8 pb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 mb-4 mx-auto">
                    <FileCheck className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-center text-xl">Sign Paperwork</CardTitle>
                </CardHeader>
                <CardContent className="text-center pb-8">
                  <p className="text-muted-foreground text-base leading-relaxed">
                    You&apos;ll come in to sign documents 1-3 days before your closing date. We&apos;ll explain everything clearly.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.3} className="overflow-visible">
              <Card className="relative h-full pt-6 overflow-visible">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl shadow-lg z-10">
                  3
                </div>
                <CardHeader className="pt-8 pb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 mb-4 mx-auto">
                    <Key className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-center text-xl">Bring Valid ID</CardTitle>
                </CardHeader>
                <CardContent className="text-center pb-8">
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Remember to bring two pieces of valid government-issued identification to your signing appointment.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Service Explanation */}
      <section className="py-12 sm:py-16 md:py-24 bg-muted/50 w-full">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
            <FadeIn direction="left">
              <div className="space-y-4 text-center lg:text-left">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl font-[family-name:var(--font-playfair)] px-4 lg:px-0">
                  Expert Real Estate Services
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed px-4 lg:px-0">
                  Notaries public in BC receive in-depth training on transferring land, buildings, manufactured homes, 
                  and strata properties. Our goal is to eliminate the stress and confusion that can accompany the 
                  purchase, sale, or mortgage of real property.
                </p>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed px-4 lg:px-0">
                  Whether you&apos;re a first-time buyer or an experienced investor, we&apos;ll guide you through every 
                  step of the process. Contact us once your purchase-and-sale agreement is finalized, and we&apos;ll 
                  take care of the rest.
                </p>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-medium px-4 lg:px-0">
                  We proudly serve the Okanagan Valley and are committed to making your real estate transaction 
                  as smooth as possible.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle>Stress-Free Process</CardTitle>
                        <CardDescription className="mt-2">
                          We handle all the complex paperwork and legal requirements so you can focus on your move
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <HomeIcon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle>Local Expertise</CardTitle>
                        <CardDescription className="mt-2">
                          Deep knowledge of the Okanagan Valley real estate market and local regulations
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <FileCheck className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle>Thorough & Accurate</CardTitle>
                        <CardDescription className="mt-2">
                          Every detail is checked and verified to ensure your transaction proceeds smoothly
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services - Expandable with Carousel */}
      <section className="py-12 sm:py-16 md:py-24 bg-background w-full overflow-visible">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <FadeIn>
            <div className="text-center space-y-3 mb-10 sm:mb-12 px-2 sm:px-0">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl font-[family-name:var(--font-playfair)]">
                Our Real Estate Services
              </h2>
              <p className="mx-auto max-w-[800px] text-muted-foreground text-sm md:text-base leading-relaxed">
                Comprehensive conveyancing services for all your property needs. Click each service to learn more about how we can help you.
              </p>
            </div>
          </FadeIn>

          <RealEstateServices />
        </div>
      </section>

      {/* Testimonial/Callout */}
      <section className="py-12 sm:py-16 md:py-24 bg-muted/50 w-full">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <FadeIn>
            <Card className="max-w-3xl mx-auto border-primary/20">
              <CardContent className="pt-8">
                <blockquote className="space-y-4">
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed italic">
                    "Your home purchase is likely the largest financial transaction you&apos;ll ever make. 
                    Choosing the right professional to guide you through the process is crucial. 
                    We&apos;re committed to providing you with expert service, clear communication, and peace of mind."
                  </p>
                  <footer className="text-sm font-semibold text-primary">
                    — Chelsea Kramer, Notary Public M.A.
                  </footer>
                </blockquote>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-24 bg-primary dark:bg-primary/10 text-primary-foreground dark:text-foreground w-full">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl font-[family-name:var(--font-playfair)] px-4">
                Ready to Start Your Transaction?
              </h2>
              <p className="text-base sm:text-lg text-primary-foreground/90 dark:text-foreground/80 px-4">
                Contact us today to discuss your real estate needs. We&apos;re here to make your transaction smooth and stress-free.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row justify-center pt-4 px-4">
                <Button size="lg" asChild className="bg-[#D4AF37] hover:bg-[#B8941F] text-primary dark:text-primary w-full sm:w-auto shadow-lg shadow-[#D4AF37]/20">
                  <Link href="/contact">
                    Contact Us Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent border-2 border-primary-foreground dark:border-foreground text-primary-foreground dark:text-foreground hover:bg-primary-foreground/10 dark:hover:bg-foreground/10 w-full sm:w-auto">
                  <a href="tel:250-542-1111">
                    Call 250-542-1111
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


