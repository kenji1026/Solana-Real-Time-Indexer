import { SubscribeRequest, CommitmentLevel } from '@triton-one/yellowstone-grpc';

export function createTokenSubscription(tokenMints: string[]): SubscribeRequest {
  return {
    slots: {},
    accounts: {
      //   'token-accounts': {
      //     account: ['3XxBbBk65C7iZB6PXn8DJt1mX51jkfhdp7UKbCtUpump'],
      //     owner: [], //['TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'],
      //     filters: [],
      //   },
    },
    transactions: {
      pumpFun: {
        vote: false,
        failed: false,
        accountInclude: ['8A14vjcoD8EuZuzeYZXXNgqGfoaEi8CayY6paX5hytwN'], // 3ndjN1nJVUKGrJBc1hhVpER6kWTZKHdyDrPyCJyX3CXK
        accountExclude: [],
        accountRequired: [],
      },
    },
    transactionsStatus: {},
    blocks: {},
    blocksMeta: {},
    accountsDataSlice: [],
    entry: {},
    commitment: CommitmentLevel.CONFIRMED,
    ping: undefined,
  };
}

export function createPingSubscription(): SubscribeRequest {
  return {
    slots: {},
    accounts: {},
    transactions: {},
    transactionsStatus: {},
    blocks: {},
    blocksMeta: {},
    accountsDataSlice: [],
    entry: {},
    commitment: undefined,
    ping: { id: 1 },
  };
}
