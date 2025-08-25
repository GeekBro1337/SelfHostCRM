import { prisma } from "@/server/utils/prisma";
import bcrypt from "bcryptjs";
import { z } from "zod";

const bodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default defineEventHandler(async (event) => {
  const data = await readBody(event);
  const { email, password } = bodySchema.parse(data);

  const exists = await prisma.user.findUnique({ where: { email } });
  if (exists)
    throw createError({
      statusCode: 409,
      statusMessage: "Email already in use",
    });

  const hashedPw = await bcrypt.hash(password, 12);
  await prisma.user.create({ data: { email, hashedPw } });

  return { ok: true };
});
