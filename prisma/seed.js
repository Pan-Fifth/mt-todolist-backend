import { prisma } from '../config/prismaClient.js'


async function main() {
    await prisma.todo.deleteMany()
    await prisma.user.deleteMany()
    await prisma.$executeRawUnsafe(`TRUNCATE TABLE "Todo", "User" RESTART IDENTITY CASCADE `)

    const studentNames = [
        "Pop", "Fame", "Kanaan", "Sun", "Fiat", "Mac", "Prem", "Name", "Jenny", "Copter", "Best", "Ro", "Boss", "Nok", "Dech", "Noom", "Pu", "Got", "Fah",
        "Allie", "Pan", "Nape"
    ];

    await prisma.user.createMany({
        data: studentNames.map((a, i) => ({
            username: `${a}${i + 1}`,
            password: `password${i + 1}`,
        })),
    })


    const users = await prisma.user.findMany({
        select: { id: true },
    })

    const todosTitle = ["Prepare stuffs for weekend hangout", "Refactor Midterm Project", "Learn JavaScript", "Learn React", "Watch cartoon for rest", ""]

    for (const user of users) {
        await prisma.todo.createMany({
            data: Array.from({ length: 5 }).map((_, index) => ({
                content: todosTitle[index],
                isdone: Math.random() < 0.5,
                userId: user.id,
            })),
        })
    }

    console.log("🌱 Seed completed safely")
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error("Prisma seed error", e)
        await prisma.$disconnect()
        process.exit(1)
    })