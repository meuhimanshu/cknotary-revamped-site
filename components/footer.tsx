import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, Facebook } from "lucide-react";

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
        <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-border pt-8 sm:flex-row sm:justify-between">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Chelsea Kramer Notary Public. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://www.facebook.com/CKNotary/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


