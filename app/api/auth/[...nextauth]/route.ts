import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        userIdOrEmail: { label: 'userIdOrEmail', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              userIdOrEmail: credentials.userIdOrEmail ?? '',
              password: credentials.password,
            }),
          }
        );

        const user = await res.json();

        if (res.ok && user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token = { ...user };
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
    async signIn({ user }) {
      if (user) {
        return true;
      } else {
        console.error('SignIn error: Invalid credentials');
        return false;
      }
    },
  },

  secret: process.env.NEXTAUTH_SECRET!,
});
export { handler as GET, handler as POST };
