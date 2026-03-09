import AnimateOnScroll from '../ui/AnimateOnScroll';

const problems = [
  {
    emoji: '🍚',
    title: '뭘 먹어야 할지 모르겠다',
    desc: '매일 식단 고민에 지쳐 결국 아무거나 먹게 됩니다.',
  },
  {
    emoji: '📱',
    title: '유튜브 운동, 3일이면 포기',
    desc: '혼자 따라하면 자세도 맞는지 모르고 동기부여도 사라집니다.',
  },
  {
    emoji: '⚖️',
    title: '체중은 재는데 변화가 없다',
    desc: '뭐가 문제인지 몰라서 같은 실수를 반복합니다.',
  },
  {
    emoji: '🍻',
    title: '회식과 야근의 무한반복',
    desc: '직장인 생활에 맞는 현실적인 방법이 필요합니다.',
  },
];

export default function ProblemSection() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-lg mx-auto">
        <AnimateOnScroll>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-3">
            혹시 이런 상황 아닌가요?
          </h2>
          <p className="text-text-muted text-center mb-12">
            직장인 다이어트가 실패하는 진짜 이유
          </p>
        </AnimateOnScroll>

        <div className="space-y-4">
          {problems.map(({ emoji, title, desc }, i) => (
            <AnimateOnScroll key={title} delay={i * 0.1}>
              <div className="bg-bg-card rounded-2xl p-5 border border-border hover:border-accent-orange/30 transition">
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">{emoji}</span>
                  <div>
                    <p className="font-bold text-text-primary mb-1">{title}</p>
                    <p className="text-text-secondary text-sm">{desc}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.5}>
          <p className="text-center mt-10 text-text-secondary">
            의지만으로는 안 됩니다.
            <br />
            <span className="text-accent-green font-bold">전문 코치의 관리</span>가 필요합니다.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
