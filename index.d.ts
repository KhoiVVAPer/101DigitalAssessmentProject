declare module "*.png";
declare module "*.svg";

declare module "@env" {
  export const ENV: "dev" | "prod";
  export const BASE_URL: string;
  export const CLIENT_ID: string;
  export const CLIENT_SECRET: string;
}
