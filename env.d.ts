export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      USER_TOKEN_JWT_PRIVATE_KEY: string;
      MONGODB_SERVER_URL: string;
      MONGODB_DATABASE_NAME: string;
      RAZORPAY_MERCHANT_KEY: string;
      RAZORPAY_MERCHANT_SECRET: string;
      OGD_ALL_INDIA_PINCODE_DIRECTORY_API_KEY: string;
      GCP_CALENDAR_API_KEY: string;
    }
  }
}
