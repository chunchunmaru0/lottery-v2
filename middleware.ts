import authConfig from "./auth.config";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);
export default auth((req) => {
  // req.auth
  const isLoggedIn = !!req.auth;
  console.log("isLoggedIn", isLoggedIn);
  console.log("ROUTE:", req.nextUrl.pathname);
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
