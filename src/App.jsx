import { lazy, Suspense } from "react";
import Hero from "./components/sections/Hero";
import ScrollToTop from "./components/ui/ScrollToTop";
import LazyWhenVisible from "./components/layout/LazyWhenVisible";

const GlobalReach = lazy(() => import("./components/sections/GlobalReach"));
const FeeFreeForever = lazy(() => import("./components/sections/FeeFreeForever"));
const ShowcaseTalents = lazy(() => import("./components/sections/ShowcaseTalents"));
const HelpCta = lazy(() => import("./components/sections/HelpCta"));
const CommonQuestions = lazy(() => import("./components/sections/CommonQuestions"));
const OneClickAway = lazy(() => import("./components/sections/OneClickAway"));
const Footer = lazy(() => import("./components/sections/Footer"));

function App() {
  return (
    <>
      <main className="overflow-x-clip">
        <Hero />
        <Suspense fallback={null}>
          <LazyWhenVisible minHeight={520} rootMargin="0px 0px -120px 0px">
            <GlobalReach />
          </LazyWhenVisible>
          <LazyWhenVisible minHeight={520} rootMargin="0px 0px -120px 0px">
            <FeeFreeForever />
          </LazyWhenVisible>
          <LazyWhenVisible minHeight={520} rootMargin="0px 0px -120px 0px">
            <ShowcaseTalents />
          </LazyWhenVisible>
          <LazyWhenVisible minHeight={560} rootMargin="0px 0px -120px 0px">
            <HelpCta />
          </LazyWhenVisible>
          <LazyWhenVisible minHeight={480} rootMargin="0px 0px -120px 0px">
            <CommonQuestions />
          </LazyWhenVisible>
          <div className="relative overflow-x-clip overflow-y-visible">
            <LazyWhenVisible minHeight={420} rootMargin="0px 0px -120px 0px">
              <OneClickAway />
            </LazyWhenVisible>
            <LazyWhenVisible minHeight={280} rootMargin="0px 0px -120px 0px">
              <Footer />
            </LazyWhenVisible>
          </div>
        </Suspense>
      </main>
      <ScrollToTop />
    </>
  );
}

export default App;
