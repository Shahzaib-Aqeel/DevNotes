export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/notes/:path*"], // protect /notes and any subroutes
};
