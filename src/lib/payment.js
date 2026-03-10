const STORE_ID = import.meta.env.VITE_PORTONE_STORE_ID || '';
const CHANNEL_KEY = import.meta.env.VITE_PORTONE_CHANNEL_KEY || '';

export const PLANS = {
  monthly: {
    name: '월 구독',
    orderName: '무사의습관 월 구독',
    price: 99000,
    priceLabel: '99,000',
    unit: '원/월',
  },
  quarterly: {
    name: '3개월 일괄',
    orderName: '무사의습관 3개월 이용권',
    price: 249000,
    priceLabel: '249,000',
    unit: '원/3개월',
    monthlyEquiv: '83,000',
    badge: '17% 할인',
  },
};

export async function requestPayment(userInfo = {}, planKey = 'monthly') {
  if (!window.PortOne) {
    throw new Error('PortOne SDK 로딩 실패');
  }

  const plan = PLANS[planKey];
  const paymentId = `payment-${crypto.randomUUID()}`;

  const response = await window.PortOne.requestPayment({
    storeId: STORE_ID,
    channelKey: CHANNEL_KEY,
    paymentId,
    orderName: plan.orderName,
    totalAmount: plan.price,
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
