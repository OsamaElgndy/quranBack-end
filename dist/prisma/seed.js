"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const faker_1 = require("@faker-js/faker");
const prisma = new client_1.PrismaClient();
const quranLevels = [
    'القرآن كامل ← ١٨ سنة',
    'نصف قرآن ← ١٥ سنة',
    'ربع قرآن ← ١٣ سنة',
    'خمس أجزاء ← ١١ سنة',
    'ثلاث أجزاء ← ٩ سنوات',
    'جزء النبأ ← ٧ سنوات',
];
const validAddresses = ['دلبشان', 'خارج القرية'];
function generatePhoneNumber() {
    return faker_1.fakerAR.phone.number();
}
async function main() {
    const students = Array.from({ length: 100 }, () => ({
        name: faker_1.fakerAR.person.fullName(),
        age: faker_1.fakerAR.number.int({ min: 5, max: 19 }),
        levelQuran: faker_1.fakerAR.helpers.arrayElement(quranLevels),
        address: faker_1.fakerAR.helpers.arrayElement(validAddresses),
        phoneWhatsapp: faker_1.fakerAR.datatype.boolean() ? generatePhoneNumber() : null,
        degree: faker_1.fakerAR.datatype.boolean() ? faker_1.fakerAR.number.int({ min: 70, max: 100 }) : null,
        ranking: faker_1.fakerAR.datatype.boolean() ? faker_1.fakerAR.number.int({ min: 1, max: 20 }) : null,
        teacherId: null,
        isActive: true,
    }));
    await prisma.student.createMany({
        data: students,
        skipDuplicates: true,
    });
    console.log('✅ Seeded 100 students with valid Arabic data');
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map