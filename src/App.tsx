import "./styles/reset.css";
import "./styles/index.css";
import "./styles/utils.css";

import {
  GeneralSection,
  Sidebar,
  Header,
  AvailabilitySection,
  MediaSection,
  ProductDetailsSection,
  VariantsSection,
  OtherSection
} from "./components";

export default function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <GeneralSection />
        <AvailabilitySection />
        <MediaSection />
        <ProductDetailsSection />
        <VariantsSection />
        <OtherSection />
      </main>
    </>
  );
}
