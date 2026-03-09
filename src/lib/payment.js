const STORE_ID = import.meta.env.VITE_PORTONE_STORE_ID || '';
const CHANNEL_KEY = import.meta.env.VITE_PORTONE_CHANNEL_KEY || '';

export async function requestPayment(userInfo = {}) {
  if (!window.PortOne) {
    throw new Error('PortOne SDK 로딩 실패');
  }

  const paymentId = `payment-${crypto.randomUUID()}`;

  const response = await window.PortOne.requestPayment({
    storeId: STORE_ID,
    channelKey: CHANNEL_KEY,
    paymentId,
    orderName: '사무라이 해빗 월 구독',
    totalAmount: 99000,
    currency: 'CURRENCY_KRW',
    payMethod: 'CARD',
    customer: {
      fullName: userInfo.name || '',
    },
    redirectUrl: `${window.location.origin}/success`,
  });

  if (response.code !== undefined) {
    const error = new Error(response.message);
    error.code = response.code;
    throw error;
  }

  window.location.href = `${window.location.origin}/success?paymentId=${response.paymentId}`;
}
