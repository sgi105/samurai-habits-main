import AnimateOnScroll from '../ui/AnimateOnScroll';
import Button from '../ui/Button';

export default function FinalCTASection({ onCTA }) {
  return (
    <section className="px-6 py-24">
      <div className="max-w-lg mx-auto text-center">
        <AnimateOnScroll>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            지금 시작하지 않으면
            <br />
            <span className="text-accent-orange">한 달 뒤에도 같은 고민</span>을 합니다.
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <p className="text-text-secondary leading-relaxed mb-10">
            어차피 빼야 할 살이라면,
            <br />
            전문 코치와 함께 확실하게 시작하세요.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <Button onClick={onCTA} className="w-full animate-pulse-glow">
            월 99,000원으로 시작하기
          </Button>
          <p className="text-text-muted text-xs mt-4">
            7일 이내 전액 환불 보장 · 언제든 해지 가능
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
