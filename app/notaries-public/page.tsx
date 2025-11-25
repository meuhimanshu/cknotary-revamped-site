import { Award, Briefcase, Heart, Shield, Scale, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundGrid } from "@/components/ui/background-grid";

export default function NotariesPublicPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[300px] sm:min-h-[400px] flex items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-primary/90 dark:from-primary/10 dark:via-primary/5 dark:to-background text-primary-foreground dark:text-foreground w-full overflow-hidden antialiased">
        {/* Subtle Background Image - Professional Theme */}
        <div className="absolute inset-0 opacity-[0.07] dark:opacity-[0.03]">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop')",
              filter: "grayscale(65%)",
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
                Meet Our Notaries
              </h1>
              <p className="mx-auto max-w-[700px] text-base sm:text-lg md:text-xl text-primary-foreground/90 dark:text-foreground/80 px-4">
                Experienced professionals dedicated to serving the Okanagan Valley
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Team Profiles */}
      <section className="py-12 sm:py-16 md:py-24 bg-background w-full">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Chelsea Kramer Profile */}
            <FadeIn>
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 sm:p-8 flex flex-col items-center justify-center">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden mb-4 ring-4 ring-primary/20">
                    <img 
                      src="/CK-2.jpg" 
                      alt="Chelsea Kramer - Notary Public"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-center">Chelsea Kramer</h3>
                  <p className="text-sm text-muted-foreground text-center">Notary Public, M.A.</p>
                </div>
                <CardContent className="p-6 sm:p-8 flex-1">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-base sm:text-lg mb-2">Education & Awards</p>
                        <p className="text-muted-foreground text-sm">
                          Chelsea brings enthusiasm and energy to her practice. She holds a Master&apos;s Degree in 
                          Applied Legal Studies and was awarded the highest overall marks in the program, as well as 
                          the highest marks in the Wills & Trusts examination.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Briefcase className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-base sm:text-lg mb-2">Professional Experience</p>
                        <p className="text-muted-foreground text-sm">
                          Prior to becoming a notary, Chelsea worked as a licensed realtor with Re/Max Vernon for 
                          six years. This valuable real estate experience gives her unique insight into property 
                          transactions and the needs of buyers and sellers.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-base sm:text-lg mb-2">Community Connection</p>
                        <p className="text-muted-foreground text-sm">
                          Chelsea has lived in Vernon for 30 years and is deeply connected to the community. 
                          She understands the local market and the unique needs of Okanagan Valley residents.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Phyllis Simon Profile */}
            <FadeIn delay={0.2}>
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 sm:p-8 flex flex-col items-center justify-center">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden mb-4 ring-4 ring-primary/20">
                    <img 
                      src="/PS-2.jpg" 
                      alt="Phyllis Simon - Notary Public"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-center">Phyllis Simon</h3>
                  <p className="text-sm text-muted-foreground text-center">Notary Public</p>
                </div>
                <CardContent className="p-6 sm:p-8 flex-1">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-base sm:text-lg mb-2">Passion & Dedication</p>
                        <p className="text-muted-foreground text-sm">
                          Phyllis has worked in legal services her whole life and loves what she does. 
                          She has no plans to retire and continues to bring enthusiasm and expertise to every client interaction.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Briefcase className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-base sm:text-lg mb-2">Areas of Expertise</p>
                        <p className="text-muted-foreground text-sm">
                          Phyllis assists clients with land and property transactions, bringing decades of experience 
                          to every conveyancing matter. She also has extensive expertise in preparing end-of-life 
                          planning documents, helping families protect their loved ones.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-base sm:text-lg mb-2">Trusted Service</p>
                        <p className="text-muted-foreground text-sm">
                          With a lifetime of legal service experience, Phyllis brings wisdom, attention to detail, 
                          and a genuine commitment to helping clients navigate important legal matters with confidence.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* BC Notaries Information */}
      <section className="py-12 sm:py-16 md:py-24 bg-muted/50 w-full">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="text-center space-y-4 mb-12">
                <div className="flex justify-center mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                    <Scale className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl font-[family-name:var(--font-playfair)] px-4">
                  BC Notaries – A Trusted Tradition
                </h2>
                <p className="text-muted-foreground text-base md:text-lg px-4">
                  Understanding the notary public profession in British Columbia
                </p>
              </div>
            </FadeIn>

            <div className="space-y-6">
              <FadeIn delay={0.2}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Scale className="h-5 w-5 text-primary" />
                      2000 Years of History
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      The notary profession has a rich history spanning over 2000 years. Notaries have long served 
                      as trusted legal professionals, providing essential services to communities around the world.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.3}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-primary" />
                      Governed by the Notaries Act
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      BC notaries are governed by the Notaries Act of British Columbia. This legislation limits the 
                      number of practising notaries in the province and requires all notaries to carry professional 
                      liability insurance, ensuring the highest standards of service and protection for clients.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.4}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-primary" />
                      Diverse Backgrounds
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      BC notaries come from diverse professional backgrounds, bringing a wealth of experience to their 
                      practice. This diversity ensures that notaries can understand and meet the varied needs of their clients.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.5}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Heart className="h-5 w-5 text-primary" />
                      Community Involvement
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Many BC notaries are actively involved in their communities through fundraising initiatives, 
                      business associations, youth sports programs, and other volunteer activities. This commitment 
                      to community service reflects the profession&apos;s dedication to making a positive impact beyond 
                      legal services.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Standards & Professional Excellence */}
      <section className="py-12 sm:py-16 md:py-24 bg-background w-full">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <Card className="border-primary/20">
                <CardContent className="pt-8">
                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="space-y-3">
                      <div className="flex justify-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <Shield className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <h3 className="font-semibold text-lg">Fully Insured</h3>
                      <p className="text-sm text-muted-foreground">
                        Professional liability insurance protects every client
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <Award className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <h3 className="font-semibold text-lg">Highly Trained</h3>
                      <p className="text-sm text-muted-foreground">
                        Rigorous education and ongoing professional development
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <Scale className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <h3 className="font-semibold text-lg">Regulated</h3>
                      <p className="text-sm text-muted-foreground">
                        Governed by provincial legislation and professional standards
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}


