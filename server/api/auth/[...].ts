import Credentials from "@auth/core/providers/credentials";
import { NuxtAuthHandler } from "#auth";
import { prisma } from "../../utils/prisma";
import bcrypt from "bcryptjs";

export default NuxtAuthHandler({
  providers: [
    Credentials({
      name: "credentials",
      credentials: { email: {}, password: { type: "password" } },
      authorize: async (creds) => {
        if (!creds?.email || !creds?.password) return null;
        const user = await prisma.user.findUnique({
          where: { email: creds.email },
        });
        if (!user) return null;
        const ok = await bcrypt.compare(creds.password, user.hashedPw);
        return ok ? { id: user.id, email: user.email } : null;
      },
    }),
  ],
  pages: { signIn: "/login" },
});
    