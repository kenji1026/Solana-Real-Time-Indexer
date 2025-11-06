import base58 from 'bs58';
import {
  TransactionType,
  JUPITER_PROGRAM_ID,
  RAYDIUM_AMM_PROGRAM_ID,
  RAYDIUM_CLMM_PROGRAM_ID,
  RAYDIUM_CPMM_PROGRAM_ID,
  MOONSHOT_PROGRAM_ID,
  PUMP_FUN_PROGRAM_ID,
  PUMP_SWAP_AMM_PROGRAM_ID,
  METEORA_DAMM_V2_PROGRAM_ID,
  METEORA_DBC_PROGRAM_ID,
  METEORA_DLMM_PROGRAM_ID,
  ORCA_WHIRLPOOL_PROGRAM_ID,
} from './constants';

export function decodeTransact(data: any) {
  const output = data ? base58.encode(Buffer.from(data, 'base64')) : '';
  return output;
}

export function getTradeAMM(logMessages: string[]) {
  const foundTypes: TransactionType[] = [];

  const dex = logMessages.some((message, index) => {
    if (index > 0 && logMessages[index - 1].includes(`Program ${JUPITER_PROGRAM_ID} invoke`)) {
      foundTypes.push(TransactionType.JUPITER);
      return;
    } else if (
      index > 0 &&
      logMessages[index - 1].includes(`Program ${MOONSHOT_PROGRAM_ID} invoke`)
    ) {
      foundTypes.push(TransactionType.MOONSHOT);
      return;
    } else if (
      index > 0 &&
      logMessages[index - 1].includes(`Program ${RAYDIUM_AMM_PROGRAM_ID} invoke`)
    ) {
      foundTypes.push(TransactionType.RAYDIUM_AMM);
      return;
    } else if (
      index > 0 &&
      logMessages[index - 1].includes(`Program ${RAYDIUM_CLMM_PROGRAM_ID} invoke`)
    ) {
      foundTypes.push(TransactionType.RAYDIUM_CLMM);
      return;
    } else if (
      index > 0 &&
      logMessages[index - 1].includes(`Program ${RAYDIUM_CPMM_PROGRAM_ID} invoke`)
    ) {
      foundTypes.push(TransactionType.RAYDIUM_CPMM);
      return;
    } else if (
      index > 0 &&
      logMessages[index - 1].includes(`Program ${PUMP_FUN_PROGRAM_ID} invoke`)
    ) {
      foundTypes.push(TransactionType.PUMP_FUN);
      return;
    } else if (
      index > 0 &&
      logMessages[index - 1].includes(`Program ${PUMP_SWAP_AMM_PROGRAM_ID} invoke`)
    ) {
      foundTypes.push(TransactionType.PUMP_SWAP);
      return;
    } else if (
      index > 0 &&
      logMessages[index - 1].includes(`Program ${METEORA_DAMM_V2_PROGRAM_ID} invoke`)
    ) {
      foundTypes.push(TransactionType.METEORA_DAMM_V2);
      return;
    } else if (
      index > 0 &&
      logMessages[index - 1].includes(`Program ${METEORA_DBC_PROGRAM_ID} invoke`)
    ) {
      foundTypes.push(TransactionType.METEORA_DBC);
      return;
    } else if (
      index > 0 &&
      logMessages[index - 1].includes(`Program ${METEORA_DLMM_PROGRAM_ID} invoke`)
    ) {
      foundTypes.push(TransactionType.METEORA_DLMM);
      return;
    } else if (
      index > 0 &&
      logMessages[index - 1].includes(`Program ${ORCA_WHIRLPOOL_PROGRAM_ID} invoke`)
    ) {
      foundTypes.push(TransactionType.ORCA_WHIRLPOOL);
      return;
    }
  });

  // Return the first found type or Unknown if none found
  return foundTypes.length > 0 ? foundTypes[0] : TransactionType.Unknown;
}
