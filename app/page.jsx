import Hero from "@/components/Hero";
import ReportAnalysis from "@/components/ReportAnalysis";
import Migration from "@/components/Migration";
import DemoRequisition from "@/components/DemoRequisition";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ReportAnalysis />
      <Migration />
      <DemoRequisition />
      <Pricing />
    </div>
  );
}
