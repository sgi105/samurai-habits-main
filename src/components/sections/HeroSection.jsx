import AnimateOnScroll from '../ui/AnimateOnScroll';
import Button from '../ui/Button';

export default function HeroSection({ onCTA }) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,255,136,0.08)_0%,_transparent_70%)]" />

      <div className="max-w-lg mx-auto text-center relative z-10">
        <AnimateOnScroll>
          <p className="text-accent-green text-sm font-semibold tracking-wide mb-4">
            직장인 맞춤 다이어트 코칭
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            혼자 하는 다이어트는
            <br />
            <span className="text-accent-green">이제 그만.</span>
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <p className="text-text-secondary text-lg leading-relaxed mb-10">
            매일 맞춤 식단·운동 미션, 1:1 코칭 피드백,
            <br />
            주간 체중 리포트까지.
            <br />
            <span className="text-text-primary font-semibold">월 99,000원</span>으로 시작하세요.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3}>
          <Button onClick={onCTA} className="w-full animate-pulse-glow">
            지금 구독 시작하기
          </Button>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.4}>
          <div className="flex justify-center gap-8 mt-12">
            {[
              { icon: '📋', label: '맞춤 미션' },
              { icon: '💬', label: '1:1 코칭' },
              { icon: '📊', label: '주간 리포트' },
            ].map(({ icon, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl mb-2">{icon}</div>
                <p className="text-text-muted text-xs">{label}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
