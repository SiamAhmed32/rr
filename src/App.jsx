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

function SectionFallback({ minHeight }) {
  return <div aria-hidden style={{ minHeight }} />;
}

function App() {
  return (
    <>
      <main className="overflow-x-clip">
        <Hero />
        <LazyWhenVisible minHeight={520} rootMargin="0px 0px -120px 0px">
          <Suspense fallback={<SectionFallback minHeight={520} />}>
            <GlobalReach />
          </Suspense>
        </LazyWhenVisible>
        <LazyWhenVisible minHeight={520} rootMargin="0px 0px -120px 0px">
          <Suspense fallback={<SectionFallback minHeight={520} />}>
            <FeeFreeForever />
          </Suspense>
        </LazyWhenVisible>
        <LazyWhenVisible minHeight={520} rootMargin="0px 0px -120px 0px">
          <Suspense fallback={<SectionFallback minHeight={520} />}>
            <ShowcaseTalents />
          </Suspense>
        </LazyWhenVisible>
        <LazyWhenVisible minHeight={560} rootMargin="0px 0px -120px 0px">
          <Suspense fallback={<SectionFallback minHeight={560} />}>
            <HelpCta />
          </Suspense>
        </LazyWhenVisible>
        <LazyWhenVisible minHeight={480} rootMargin="0px 0px -120px 0px">
          <Suspense fallback={<SectionFallback minHeight={480} />}>
            <CommonQuestions />
          </Suspense>
        </LazyWhenVisible>
        <div className="relative overflow-x-clip overflow-y-visible">
          <LazyWhenVisible minHeight={420} rootMargin="0px 0px -120px 0px">
            <Suspense fallback={<SectionFallback minHeight={420} />}>
              <OneClickAway />
            </Suspense>
          </LazyWhenVisible>
          <LazyWhenVisible minHeight={280} rootMargin="0px 0px -120px 0px">
            <Suspense fallback={<SectionFallback minHeight={280} />}>
              <Footer />
            </Suspense>
          </LazyWhenVisible>
        </div>
      </main>
      <ScrollToTop />
    </>
  );
}

export default App;
