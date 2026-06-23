
"use client";

import * as React from "react";
import { Navigation } from "./navigation";
import { Hero } from "./hero";
import { TrustedBy } from "./trusted-by";
import { Solutions } from "./solutions";
import { PlatformOverview } from "./platform-overview";
import { FeaturesGrid } from "./features-grid";
import { HowItWorks } from "./how-it-works";
import { WhyChooseUs } from "./why-choose-us";
import { Analytics } from "./analytics";
import { Testimonials } from "./testimonials";
import { Security } from "./security";
import { FAQ } from "./faq";
import { FinalCTA } from "./final-cta";
import { Footer } from "./footer";

export default function LandingPageV2() {
  return (
    <div className="bg-white text-slate-900 antialiased">
      <Navigation />
      <main>
        <Hero />
        <TrustedBy />
        <Solutions />
        <PlatformOverview />
        <FeaturesGrid />
        <HowItWorks />
        <WhyChooseUs />
        <Analytics />
        <Testimonials />
        <Security />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
