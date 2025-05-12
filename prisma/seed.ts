import { PrismaClient } from '@prisma/client';
import { fakerAR as faker } from '@faker-js/faker';

const prisma = new PrismaClient();

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
  return faker.phone.number( );
}
async function main() {
  const students = Array.from({ length: 100 }, () => ({
    name: faker.person.fullName(),
    age: faker.number.int({ min: 5, max: 19 }),
    levelQuran: faker.helpers.arrayElement(quranLevels),
    address: faker.helpers.arrayElement(validAddresses),
    phoneWhatsapp: faker.datatype.boolean() ? generatePhoneNumber() : null,
    degree: faker.datatype.boolean() ? faker.number.int({ min: 70, max: 100 }) : null,
    ranking: faker.datatype.boolean() ? faker.number.int({ min: 1, max: 20 }) : null,
    teacherId: null,
    isActive: true,
  }));

  await prisma.student.createMany({
    data: students,
    skipDuplicates: true, // optional: ignores if same student already inserted
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
