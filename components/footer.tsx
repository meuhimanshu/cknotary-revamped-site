import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ExternalLink,
  Github,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50 w-full">
      <div className="container mx-auto max-w-7xl py-12 md:py-16 px-4 md:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="mb-2">
              <Image 
                src="/cklogo.png" 
                alt="Chelsea Kramer Notary Corporation" 
                width={180}
                height={54}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A notary's word is as good as gold. We're here to help you with all your
              legal documentation needs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2.5 text-sm items-center sm:items-start">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/estate-planning" className="text-muted-foreground hover:text-primary transition-colors">
                Estate Planning
              </Link>
              <Link href="/real-estate" className="text-muted-foreground hover:text-primary transition-colors">
                Real Estate
              </Link>
              <Link href="/notaries-public" className="text-muted-foreground hover:text-primary transition-colors">
                Notaries Public
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2 justify-center sm:justify-start">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div className="text-center sm:text-left">
                  <p>101 – 5145 26th Street</p>
                  <p>Vernon, BC</p>
                </div>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:250-542-1111" className="hover:text-primary transition-colors">
                  250-542-1111
                </a>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@cknotary.ca" className="hover:text-primary transition-colors break-all">
                  info@cknotary.ca
                </a>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold">Office Hours</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2 justify-center sm:justify-start">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div className="text-center sm:text-left">
                  <p>Monday – Friday</p>
                  <p>8:30 AM – 4:30 PM</p>
                </div>
              </div>
              <div className="space-y-1 pt-2 border-t border-border text-center sm:text-left">
                <p className="font-medium text-foreground">Drop-ins Welcome:</p>
                <p>Tuesday & Thursday</p>
                <p>11:00 AM – 12:00 PM</p>
              </div>
              <div className="space-y-1 pt-2 text-center sm:text-left">
                <p>✓ Free Parking Available</p>
                <p>✓ Wheelchair Accessible</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 space-y-6 border-t border-border pt-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3 text-center lg:text-left">
              <p className="text-sm font-semibold text-foreground">Demo Revamp Notice</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This site is a demo revamp of the original Chelsea Kramer Notary experience. Head to the official website below for the live services.
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <a
                  href="https://cknotary.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-border/80 bg-foreground/5 dark:bg-foreground/15 p-2 text-foreground shadow-sm transition-colors hover:border-primary hover:text-primary hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  aria-label="Visit the original Chelsea Kramer Notary website"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
              </div>

            <div className="space-y-3 text-center lg:text-left">
              <p className="text-sm font-semibold text-foreground">About the Creator</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Revamp built by <span className="font-semibold text-foreground">Himanshu Singh</span> — always a learner and still learning. Discover more of his work or connect through the links below.
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <a
                  href="https://github.com/meuhimanshu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-border/80 bg-foreground/5 dark:bg-foreground/15 p-2 text-foreground shadow-sm transition-colors hover:border-primary hover:text-primary hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  aria-label="Himanshu Singh on GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://huesofhimanshu.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-border/80 bg-foreground/5 dark:bg-foreground/15 px-3 py-2 text-xs font-semibold text-foreground shadow-sm transition-colors hover:border-primary hover:text-primary hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Portfolio
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 text-center sm:text-left">
            <p className="text-sm text-muted-foreground">
              Built for demonstration purposes. For notarization needs, please use the official Chelsea Kramer Notary website.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
