import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient();
async function createMockData() {

    for (let i = 0; i < 10; i++) {
        await prisma.productCategory.create({
            data: {
                Name: faker.commerce.department(),
                Description: faker.commerce.productDescription(),
            },
        });
    }


    for (let i = 0; i < 50; i++) {
        await prisma.product.create({
            data: {
                Name: faker.commerce.productName(),
                Description: faker.commerce.productDescription(),
                Price: faker.number.int(({ min: 10, max: 1000 })).toFixed(2),
                CategoryID: faker.number.int({ min: 1, max: 10 }),
            },
        });
    }



}
createMockData()
    .catch((e) => {
        console.error(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
