import { useScrollReveal } from "../../hooks/useScrollReveal";

const FAQ_ANSWER =
  "Actually beard single-origin coffee, twee 90\u2019s PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90\u2019s, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party";

const FAQ_ITEMS = [
  { question: "Do I have to sign a long-term contract?" },
  { question: "Can I pay for a whole year?" },
  { question: "What if I need help?" },
];

function CommonQuestions() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section
      ref={ref}
      aria-labelledby="common-questions-title"
      className="overflow-hidden bg-brand-white pb-16 md:pb-20 lg:pb-[100px] [content-visibility:auto] [contain-intrinsic-size:auto_640px]"
    >
      <div
        className={`reveal page-x mx-auto mt-16 w-full max-w-[1040px] sm:mt-20 lg:mt-[100px] ${
          isVisible ? "reveal-visible" : ""
        }`}
      >
        <div className="flex flex-col gap-10 lg:gap-[48.5px]">
          <h2
            id="common-questions-title"
            className="max-w-[404px] text-[28px] font-medium leading-9 tracking-[0px] text-global-ink sm:text-[32px] sm:leading-10 lg:text-[40px] lg:leading-[52px]"
          >
            Common Questions
          </h2>

          {FAQ_ITEMS.map(({ question }) => (
            <div key={question} className="w-full">
              <h3 className="max-w-[377px] text-base font-medium leading-7 tracking-[0px] text-global-ink lg:text-[19px] lg:leading-[35px]">
                {question}
              </h3>
              <p className="mt-3 w-full text-base font-normal leading-7 tracking-[0px] text-faq-copy lg:mt-[12px] lg:text-[19px] lg:leading-[35px]">
                {FAQ_ANSWER}
              </p>
            </div>
          ))}

          <a
            href="#"
            className="inline-flex h-[67px] w-[185px] items-center justify-center rounded-[16px] border-2 border-faq-button-border text-base font-semibold leading-[21px] tracking-[0px] text-[#1E3E85] transition-opacity hover:opacity-80"
          >
            More Questions
          </a>
        </div>
      </div>
    </section>
  );
}

export default CommonQuestions;
