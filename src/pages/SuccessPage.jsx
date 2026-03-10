import { useSearchParams } from 'react-router-dom';

export default function SuccessPage() {
  const [searchParams] = useSearchParams();
  const paymentId = searchParams.get('paymentId');

  return (
    <div className="bg-bg-primary min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 rounded-full bg-accent-green/20 flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl font-extrabold text-text-primary mb-3">
          구독 완료!
        </h1>
        <p className="text-text-secondary leading-relaxed mb-8">
          무사의습관 구독이 시작되었습니다.
          <br />
          코치가 곧 <span className="text-accent-green font-semibold">카카오톡으로 연락</span>드립니다.
        </p>

        <div className="bg-bg-card rounded-2xl p-6 border border-border text-left space-y-4 mb-8">
          <h2 className="font-bold text-text-primary text-center mb-4">다음 단계</h2>
          <div className="flex items-start gap-3">
            <span className="shrink-0 w-7 h-7 rounded-full bg-accent-green/20 text-accent-green text-sm font-bold flex items-center justify-center">1</span>
            <div>
              <p className="text-text-primary font-semibold text-sm">코치 연락 대기</p>
              <p className="text-text-muted text-xs">24시간 이내에 카카오톡으로 코치가 연락드립니다.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="shrink-0 w-7 h-7 rounded-full bg-accent-green/20 text-accent-green text-sm font-bold flex items-center justify-center">2</span>
            <div>
              <p className="text-text-primary font-semibold text-sm">초기 상담</p>
              <p className="text-text-muted text-xs">현재 체중, 목표, 생활 패턴을 파악합니다.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="shrink-0 w-7 h-7 rounded-full bg-accent-green/20 text-accent-green text-sm font-bold flex items-center justify-center">3</span>
            <div>
              <p className="text-text-primary font-semibold text-sm">맞춤 미션 시작</p>
              <p className="text-text-muted text-xs">다음 날부터 매일 아침 식단·운동 미션이 전달됩니다.</p>
            </div>
          </div>
        </div>

        <a href="/" className="block text-text-muted text-sm hover:text-text-secondary transition">
          메인으로 돌아가기
        </a>

        {paymentId && (
          <div className="mt-8 bg-bg-card rounded-xl p-4 border border-border">
            <p className="text-text-muted text-xs">결제번호: {paymentId}</p>
          </div>
        )}
      </div>
    </div>
  );
}
