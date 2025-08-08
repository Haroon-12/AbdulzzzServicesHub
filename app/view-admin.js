// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

// async function main() {
//   const newAdmin = await prisma.adminUser.create({
//     data: {
//       username: 'admin1',
//       password: 'securepassword123', // Use a hashed password in production!
//     },
//   });

//   console.log('✅ Admin created:', newAdmin);
// }

// main()
//   .catch((e) => {
//     console.error('❌ Error:', e);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });





import bcrypt from 'bcryptjs';

const passwordToHash = 'admin123'; // Replace with your real password

const hashPassword = async () => {
  const hashed = await bcrypt.hash(passwordToHash, 10);
  console.log('Hashed Password:', hashed);
};

hashPassword();

const res = await fetch('/api/admin/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    username: 'admin',
    password: 'your_password'
  })
});

const data = await res.json();
console.log(data);

