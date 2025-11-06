import { tOutPut } from '../utils/transactionOutput';
import { TransactionType } from '../utils/constants';
import { getTradeAMM } from '../utils/decodeTransaction';

export class DataHandler {
  async handleTransaction(data: any) {
    try {
      const result = await tOutPut(data);
      if (result.signature == '') {
        return;
      }

      const amm = getTradeAMM(result?.meta?.logMessages);

      console.log(`AMM: ${amm} | Signature: ${result.signature}`);
      if (amm == TransactionType.Unknown) {
        console.log(result);
      }

      console.log(result);
    } catch (error) {
      console.error('Error handling transaction', error);
    }
  }
}
