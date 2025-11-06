import * as dotenv from 'dotenv';

dotenv.config();

async function main() {}

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
