"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn } from "@/components/ui/fade-in";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundGrid } from "@/components/ui/background-grid";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[300px] sm:min-h-[400px] flex items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-primary/90 dark:from-primary/10 dark:via-primary/5 dark:to-background text-primary-foreground dark:text-foreground w-full overflow-hidden antialiased">
        {/* Subtle Background Image */}
        <div className="absolute inset-0 opacity-[0.07] dark:opacity-[0.03]">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&auto=format&fit=crop')",
              filter: "grayscale(60%)",
            }}
          />
        </div>
        
        {/* Spotlight Effect */}
        <Spotlight className="-top-40 left-0 md:left-40 md:-top-20" fill="#D4AF37" />
        
        {/* Background Grid */}
        <BackgroundGrid />
        
        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent dark:from-background/80 dark:via-transparent dark:to-transparent opacity-50" />
        
        <div className="container mx-auto max-w-7xl relative z-10 px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] px-4 text-primary-foreground dark:text-foreground">
                Get in Touch
              </h1>
              <p className="mx-auto max-w-[700px] text-base sm:text-lg md:text-xl text-primary-foreground/90 dark:text-foreground/80 px-4">
                We&apos;re here to answer your questions and help with your legal needs
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12 sm:py-16 md:py-24 bg-background w-full">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12 sm:mb-16">
            <FadeIn delay={0.1}>
              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-2">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="tel:250-542-1111"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    250-542-1111
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Fax: 250-542-1112
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-2">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:info@cknotary.ca"
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    info@cknotary.ca
                  </a>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-2">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <address className="not-italic text-muted-foreground">
                    101 – 5145 26th Street
                    <br />
                    Vernon, BC
                  </address>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.4}>
              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-2">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Monday – Friday
                    <br />
                    8:30 AM – 4:30 PM
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          {/* Form and Map Grid */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <FadeIn>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-12 space-y-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Message Sent!</h3>
                      <p className="text-muted-foreground text-center">
                        Thank you for contacting us. We&apos;ll respond shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="(250) 555-0123"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="How can we help you?"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </FadeIn>

            {/* Map and Additional Info */}
            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Visit Our Office</CardTitle>
                    <CardDescription>
                      We&apos;re located in the heart of Vernon
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2579.123!2d-119.272!3d50.267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDE2JzAxLjIiTiAxMTnCsDE2JzE5LjIiVw!5e0!3m2!1sen!2sca!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Office Location Map"
                      ></iframe>
                    </div>
                    <div className="mt-4 space-y-2">
                      <p className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Free parking available
                      </p>
                      <p className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Wheelchair accessible
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary dark:bg-primary/10 text-primary-foreground dark:text-foreground">
                  <CardHeader>
                    <CardTitle>Drop-In Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-primary-foreground/90 dark:text-foreground/80 mb-2">
                      No appointment necessary!
                    </p>
                    <p className="font-semibold text-lg">
                      Tuesday & Thursday
                      <br />
                      11:00 AM – 12:00 PM
                    </p>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-12 sm:py-16 bg-muted/50 w-full">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl font-[family-name:var(--font-playfair)] px-4">
                How Can We Help You?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground px-4">
                Whether you need estate planning, real estate services, or notarizations, 
                we&apos;re here to provide expert guidance and personalized service.
              </p>
              <div className="px-4">
                <Button size="lg" asChild className="w-full sm:w-auto">
                  <a href="tel:250-542-1111" className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call Today: 250-542-1111
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


