import { useEffect, useMemo, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NotFound from "./NotFound";

type CheckoutConfig = {
  title: string;
  subtitle: string;
  mode: "subscription" | "hosted_button";
  hostedButtonId?: string;
  planId?: string;
  clientId: string;
};

const ONE_TIME_CLIENT_ID = "BAALg_f4pdt00DM89Q_Vbdxw5WE6phPXXwGpQRAw2Gb5sWTLKKEjtaD4FfZlOL-loELTtSxRKISWv-b3gY";
const SUBSCRIPTION_CLIENT_ID = "AVZ2SWVdIkzPSWFnKHCrMuXV2_iBe07YhUwqwUpTN243w8dXMxofdb7n-UGYESrHjPZl5TrKwEJ-zfl-";

const CHECKOUTS: Record<string, CheckoutConfig> = {
  "pitch-deck-review": {
    title: "Pitch Deck Diagnostic — $100",
    subtitle: "Secure one-time PayPal payment for your pitch deck diagnostic.",
    mode: "hosted_button",
    hostedButtonId: "4Z4FYK6LEB9TQ",
    clientId: ONE_TIME_CLIENT_ID,
  },
  "subscription-300": {
    title: "Fundraising Starter — $300/month",
    subtitle: "Secure PayPal subscription checkout.",
    mode: "subscription",
    planId: "P-5VJ08946PJ297241ENHXYISA",
    clientId: SUBSCRIPTION_CLIENT_ID,
  },
  "subscription-500": {
    title: "Investor-Ready Support — $500/month",
    subtitle: "Secure PayPal subscription checkout.",
    mode: "subscription",
    planId: "P-2ES992737D663040RNHXYKRY",
    clientId: SUBSCRIPTION_CLIENT_ID,
  },
  "subscription-1000": {
    title: "Active Raise Partner — $1,000/month",
    subtitle: "Secure PayPal subscription checkout.",
    mode: "subscription",
    planId: "P-6DK88186011743254NHXYMCY",
    clientId: SUBSCRIPTION_CLIENT_ID,
  },
  "pitch-deck-creation": {
    title: "Investor-Ready Pitch Deck Creation — $1,500",
    subtitle: "Secure one-time PayPal payment for full deck creation.",
    mode: "hosted_button",
    hostedButtonId: "6EYTHM7EMSBFS",
    clientId: ONE_TIME_CLIENT_ID,
  },
};

const Checkout = () => {
  const { checkoutId } = useParams();
  const containerRef = useRef<HTMLDivElement>(null);
  const config = useMemo(() => (checkoutId ? CHECKOUTS[checkoutId] : undefined), [checkoutId]);

  useEffect(() => {
    if (!config || !containerRef.current) return;

    const script = document.createElement("script");
    script.src =
      config.mode === "subscription"
        ? `https://www.paypal.com/sdk/js?client-id=${config.clientId}&vault=true&intent=subscription`
        : `https://www.paypal.com/sdk/js?client-id=${config.clientId}&components=hosted-buttons&disable-funding=venmo&currency=USD`;
    script.async = true;
    script.dataset.sdkIntegrationSource = "button-factory";

    const renderButtons = () => {
      const paypalApi = (window as Window & { paypal?: any }).paypal;
      if (!paypalApi || !containerRef.current) return;

      containerRef.current.innerHTML = "";

      if (config.mode === "hosted_button") {
        paypalApi.HostedButtons({ hostedButtonId: config.hostedButtonId }).render(containerRef.current);
        return;
      }

      paypalApi
        .Buttons({
          style: { shape: "pill", color: "gold", layout: "vertical", label: "subscribe" },
          createSubscription: (_data: unknown, actions: any) =>
            actions.subscription.create({
              plan_id: config.planId,
            }),
        })
        .render(containerRef.current);
    };

    script.onload = renderButtons;
    document.body.appendChild(script);

    return () => {
      if (containerRef.current) containerRef.current.innerHTML = "";
      script.remove();
    };
  }, [config]);

  if (!config) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{config.title} | Foundterra</title>
        <meta name="description" content={config.subtitle} />
      </Helmet>

      <Header />
      <main className="container-max pt-28 pb-20">
        <section className="max-w-2xl mx-auto glass-card p-8 sm:p-10 text-center">
          <h1 className="text-3xl sm:text-5xl font-serif mb-4">{config.title}</h1>
          <p className="text-muted-foreground mb-8">{config.subtitle}</p>
          <div ref={containerRef} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
