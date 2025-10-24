export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/notes/:path*", // protect notes routes
    "/dashboard/:path*", // optional if you have a dashboard route
  ],
};
