import AnimateOnScroll from '../ui/AnimateOnScroll';
import Button from '../ui/Button';

const features = [
  '매일 맞춤 식단·운동 미션',
  '1:1 코칭 피드백 (무제한)',
  '커뮤니티 단톡방 참여',
  '주간 체중 분석 리포트',
  '초기 상담 & 목표 설정',
  '7일 이내 전액 환불 보장',
];

export default function PricingSection({ onCTA }) {
  return (
    <section className="px-6 py-20 bg-bg-card/50">
      <div className="max-w-lg mx-auto">
        <AnimateOnScroll>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-12">
            합리적인 가격으로
            <br />
            <span className="text-accent-green">프리미엄 코칭</span>을 받으세요
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-scale-in">
          <div className="bg-bg-card rounded-2xl border-2 border-accent-green p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-accent-green text-bg-primary text-xs font-bold px-4 py-1.5 rounded-bl-xl">
              BEST
            </div>

            <p className="text-text-muted text-sm mb-2">월 구독</p>
            <div className="flex items-end gap-2 mb-6">
              <span className="text-4xl font-extrabold text-text-primary">99,000</span>
              <span className="text-text-muted text-lg mb-1">원/월</span>
            </div>

            <div className="space-y-3 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-secondary text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button onClick={onCTA} className="w-full">
              지금 구독 시작하기
            </Button>

            <p className="text-text-muted text-xs text-center mt-4">
              언제든 해지 가능 · 추가 비용 없음
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
