import { PrismaClient } from "prisma";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "john.doe@example.com",
    },
  });

  const pool = await prisma.pool.create({
    data: {
      title: "Example Pool",
      code: "EXAMPLE1",
      owenerId: user.id,
      participants: {
        create: {
          userId: user.id,
        },
      },
    },
  });

  const game = await prisma.pool.create({
    data: {
      date: "2022-11-04T17:30:45.507Z",
      homeTeam: "BR",
      visitorTeam: "US",
    },
  });
  const game = await prisma.pool.create({
    data: {
      date: "2022-11-03T17:30:45.507Z",
      homeTeam: "AR",
      visitorTeam: "DE",
    },
  });
}

main();
