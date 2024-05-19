import { mollieClient } from '../../../../mollie';
import { notImplemented, todo } from '../../../../todo';
import { PaymentStatus } from '@mollie/api-client';
import { type NextRequest, NextResponse } from 'next/server';
// docs: https://docs.mollie.com/overview/webhooks
export const GET = async (req: NextRequest | Request) => {
  notImplemented('GET /api/payments/callback not implemented');
  return NextResponse.json({
    message: 'GET /api/payments/callback not implemented',
  });
};

export const POST = async (req: NextRequest | Request) => {
  // get id from form data

  const bodyReader = req.body?.getReader();
  if (!bodyReader) {
    throw new Error('No body reader');
  }

  const { value } = await bodyReader.read();
  if (!value) {
    throw new Error('No value');
  }

  const id = new TextDecoder().decode(value);

  try {
    const payment = await mollieClient.payments.get(id);
    switch (payment.status) {
      case PaymentStatus.open:
        // The payment is open
        todo('Handle open payment');
        break;
      case PaymentStatus.paid:
        // The payment is paid
        todo('Handle paid payment');
        break;
      case PaymentStatus.canceled:
        // The payment was canceled
        todo('Handle canceled payment');
        break;
      case PaymentStatus.failed:
        // The payment has failed
        todo('Handle failed payment');
        break;
      case PaymentStatus.expired:
        // The payment has expired
        todo('Handle expired payment');
        break;
      case PaymentStatus.pending:
        // The payment is pending
        todo('Handle pending payment');
        break;
      case PaymentStatus.authorized:
        // The payment is authorized
        todo('Handle authorized payment');
        break;
      default:
        // The payment is in some other state
        todo('Handle other payment');
        break;
    }
  } catch (error) {
    console.error(error);
  }

  return NextResponse.json({
    message: 'POST /api/payments/callback not implemented',
  });
};
