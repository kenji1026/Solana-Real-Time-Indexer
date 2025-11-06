import * as dotenv from 'dotenv';
import { YellowstoneClient } from './grpc/client';
import { createTokenSubscription } from './grpc/subscriptions';

dotenv.config();

async function main() {
  try {
    const client = new YellowstoneClient();
    const subscription = createTokenSubscription([]);

    await client.subscribe(subscription);
  } catch (error) {
    console.error('Fatal error starting indexer', error);
    process.exit(1);
  }
}

process.on('SIGINT', async () => {
  try {
    process.exit(0);
  } catch (error) {
    console.error('Error during shutdown', error);
    process.exit(1);
  }
});

process.on('SIGTERM', async () => {
  try {
    process.exit(0);
  } catch (error) {
    console.error('Error during shutdown', error);
    process.exit(1);
  }
});

main().catch((error) => {
  console.error('Unhandled error in main', error);
  process.exit(1);
});
