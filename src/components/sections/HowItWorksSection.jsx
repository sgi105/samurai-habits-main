import AnimateOnScroll from '../ui/AnimateOnScroll';

const steps = [
  {
    num: '01',
    title: '구독 시작',
    desc: '간단한 정보 입력 후 결제하면 코치가 바로 연락드립니다.',
  },
  {
    num: '02',
    title: '매일 미션 수행',
    desc: '아침마다 맞춤 식단·운동 미션이 전달됩니다. 인증 사진을 보내면 코치가 피드백을 드려요.',
  },
  {
    num: '03',
    title: '주간 리포트 확인',
    desc: '매주 체중 변화와 미션 수행률을 분석한 리포트를 받아보세요. 다음 주 전략도 함께 안내됩니다.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-lg mx-auto">
        <AnimateOnScroll>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-12">
            이렇게 진행됩니다
          </h2>
        </AnimateOnScroll>

        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {steps.map(({ num, title, desc }, i) => (
              <AnimateOnScroll key={num} animation="animate-slide-in-left" delay={i * 0.15}>
                <div className="flex gap-5">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-accent-green text-bg-primary font-bold text-sm flex items-center justify-center relative z-10">
                    {num}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-bold text-text-primary text-lg mb-1">{title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
