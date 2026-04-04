import { lazy, Suspense, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Footer from "@/components/Footer";
import StartupDealsPromo from "@/components/StartupDealsPromo";

const ImageCarousel = lazy(() => import("@/components/ImageCarousel"));
const About = lazy(() => import("@/components/About"));
const Packages = lazy(() => import("@/components/Packages"));
const EntryPoints = lazy(() => import("@/components/EntryPoints"));
const Process = lazy(() => import("@/components/Process"));
const FreeStartupTools = lazy(() => import("@/components/FreeStartupTools"));
const InvestorPerspective = lazy(() => import("@/components/InvestorPerspective"));
const Resources = lazy(() => import("@/components/Resources"));
const FAQ = lazy(() => import("@/components/FAQ"));
const FinalCTA = lazy(() => import("@/components/FinalCTA"));

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "auto", block: "start" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen opacity-100 transition-opacity duration-500">
      <div className="ambient-orb orb-1" aria-hidden="true" />
      <div className="ambient-orb orb-2" aria-hidden="true" />
      <Helmet>
        <title>Foundterra | Pitch Deck & Fundraising Advisory for Founders</title>
        <meta
          name="description"
          content="Foundterra helps founders build investor-ready pitch decks, financial models, and fundraising strategy for pre-seed and seed rounds."
        />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-[220px]" aria-hidden="true" />}>
          <ImageCarousel />
        </Suspense>
        <StartupDealsPromo />
        <div className="pb-12">
          <Problem />
        </div>
        <Suspense fallback={<div className="h-24" aria-hidden="true" />}><div className="pb-12">
          <About />
        </div></Suspense>
        <Suspense fallback={<div className="h-24" aria-hidden="true" />}><div className="pb-12">
          <Packages />
        </div></Suspense>
        <Suspense fallback={<div className="h-24" aria-hidden="true" />}><div className="pb-12">
          <EntryPoints />
        </div></Suspense>
        <Suspense fallback={<div className="h-24" aria-hidden="true" />}><div className="pb-12">
          <FreeStartupTools highlighted />
        </div></Suspense>
        <Suspense fallback={<div className="h-24" aria-hidden="true" />}><div className="pb-12">
          <Process />
        </div></Suspense>
        <Suspense fallback={<div className="h-24" aria-hidden="true" />}><div className="pb-12">
          <InvestorPerspective />
        </div></Suspense>
        <Suspense fallback={<div className="h-24" aria-hidden="true" />}><div className="pb-12">
          <Resources />
        </div></Suspense>
        <Suspense fallback={<div className="h-24" aria-hidden="true" />}><FAQ /></Suspense>
        <Suspense fallback={<div className="h-24" aria-hidden="true" />}><FinalCTA /></Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
