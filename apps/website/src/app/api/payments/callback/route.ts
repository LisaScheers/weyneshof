import { type NextApiRequest, type NextApiResponse } from 'next';
import { mollieClient } from '../../../../mollie';
import { PaymentStatus } from '@mollie/api-client/dist/types/src/data/payments/data';
import { notImplemented, todo } from '../../../../todo';
// docs: https://docs.mollie.com/overview/webhooks
export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  notImplemented('GET /api/payments/callback not implemented');
};

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  // get id from form data

  const id = req.body.id as string;
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
  res.status(200).end();
};
