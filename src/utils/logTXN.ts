export function searchForInitialize2(transaction: any) {
  const logMessages = transaction.meta?.logMessages || [];
  if (logMessages.some((log) => log.includes(''))) {
    return transaction;
  }
}
