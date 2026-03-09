import AnimateOnScroll from '../ui/AnimateOnScroll';
import AccordionItem from '../ui/AccordionItem';
import { faqData } from '../../data/faq';

export default function FAQSection() {
  return (
    <section className="px-6 py-20 bg-bg-card/50">
      <div className="max-w-lg mx-auto">
        <AnimateOnScroll>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-12">
            자주 묻는 질문
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div>
            {faqData.map(({ question, answer }) => (
              <AccordionItem key={question} question={question} answer={answer} />
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
