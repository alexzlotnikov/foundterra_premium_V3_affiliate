import { Link } from "react-router-dom";

const RelatedServices = () => (
  <section className="container-max px-4 pb-12">
    <h2 className="text-2xl font-serif mb-4">Related Services for Founders</h2>
    <div className="flex flex-wrap gap-3 text-sm">
      <Link className="underline" to="/deck-architect">Investor-ready pitch deck structure generator</Link>
      <Link className="underline" to="/financial-model">Financial model tool for fundraising rounds</Link>
      <Link className="underline" to="/investor-ready">Investor-readiness quiz for startup founders</Link>
      <Link className="underline" to="/pitch-review">Free pitch deck review and VC score</Link>
    </div>
  </section>
);

export default RelatedServices;
