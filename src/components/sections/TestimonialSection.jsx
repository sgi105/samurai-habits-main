import AnimateOnScroll from '../ui/AnimateOnScroll';

const testimonials = [
  {
    name: '김○현',
    age: 34,
    job: 'IT 개발자',
    text: '매일 뭘 먹어야 할지 고민하지 않아도 되니까 너무 편해요. 코치님 피드백 덕분에 2달 만에 7kg 감량했습니다.',
    result: '-7kg / 2개월',
  },
  {
    name: '이○준',
    age: 31,
    job: '마케터',
    text: '회식이 많은데도 가능한 식단을 알려줘서 실천할 수 있었어요. 주간 리포트 보면서 동기부여 제대로 됩니다.',
    result: '-5kg / 1개월',
  },
  {
    name: '박○서',
    age: 29,
    job: '디자이너',
    text: '혼자 운동할 때는 3일이면 포기했는데, 코치님이 매일 확인해주시니까 한 달 넘게 꾸준히 하고 있어요.',
    result: '-4kg / 1개월',
  },
];

export default function TestimonialSection() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-lg mx-auto">
        <AnimateOnScroll>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-3">
            실제 회원 후기
          </h2>
          <p className="text-text-muted text-center mb-12">
            무사의습관과 함께 변화한 분들
          </p>
        </AnimateOnScroll>

        <div className="space-y-4">
          {testimonials.map(({ name, age, job, text, result }, i) => (
            <AnimateOnScroll key={name} delay={i * 0.1}>
              <div className="bg-bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-bold text-text-primary">{name}</p>
                    <p className="text-text-muted text-xs">{age}세 · {job}</p>
                  </div>
                  <span className="text-accent-green font-bold text-sm bg-accent-green/10 px-3 py-1 rounded-full">
                    {result}
                  </span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">"{text}"</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
