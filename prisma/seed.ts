import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL! }),
});

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Htet",
      email: "htet@example.com",
      password: "hashed-password-placeholder",
      role: "member",
      tasks: {
        create: [
          {
            title: "Design dashboard layout",
            description: "Create a clean overview page for tasks and tickets.",
            status: "In Progress",
            priority: "High",
            assignee: "Htet",
          },
          {
            title: "Build login form UI",
            description: "Create reusable input and button components.",
            status: "Done",
            priority: "Medium",
            assignee: "Htet",
          },
          {
            title: "Prepare task page shell",
            description: "Set up task page structure with reusable sections.",
            status: "Todo",
            priority: "Medium",
            assignee: "Htet",
          },
        ],
      },
      tickets: {
        create: [
          {
            subject: "Login page spacing issue",
            description: "Spacing is inconsistent on smaller screens.",
            priority: "High",
            status: "Open",
            requester: "Aung Aung",
          },
          {
            subject: "Task card alignment on mobile",
            description: "Cards wrap awkwardly on narrow layouts.",
            priority: "Medium",
            status: "In Review",
            requester: "Aung Aung",
          },
          {
            subject: "Add empty state for tickets",
            description: "Need a better empty state message.",
            priority: "Low",
            status: "Closed",
            requester: "Aung Aung",
          },
        ],
      },
    },
  });

  console.log("Seeded user:", user.email);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });