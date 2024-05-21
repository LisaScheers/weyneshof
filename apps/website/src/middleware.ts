import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware({
  signInUrl: '/login',
  signUpUrl: '/register',
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api)(.*)'],
};
