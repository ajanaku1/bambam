import ContactPanel from "@/components/ContactPanel";
import Positioning from "@/components/Positioning";
import PracticeSection from "@/components/PracticeSection";
import ProductRegister from "@/components/ProductRegister";
import ResultsLedger from "@/components/ResultsLedger";
import SideIndex from "@/components/SideIndex";

export default function Home(): React.JSX.Element {
  return (
    <div className="portfolio-shell">
      <SideIndex />
      <main className="portfolio-content" id="main">
        <Positioning />
        <ProductRegister />
        <ResultsLedger />
        <PracticeSection />
        <ContactPanel />
        <footer className="site-footer">
          <span>Signal &amp; Substance / 2026</span>
          <span>Designed and built by Bambam</span>
        </footer>
      </main>
    </div>
  );
}
