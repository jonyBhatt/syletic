import { PrismaClient } from '../src/generated/prisma/client.js'
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL || 'file:./dev.db',
})

const prisma = new PrismaClient({ adapter })

// Simple random helpers
const randomItem = (arr: string | any[]) =>
  arr[Math.floor(Math.random() * arr.length)]

const propertyTypes = ['HOUSE', 'FLAT', 'LAND', 'COMMERCIAL']
const cities = [
  'Amberkhana',
  'Zindabazar',
  'Tilagor',
  'Subidbazar',
  'Uposhohor',
]

const unsplashImages = [
  'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
  'https://images.unsplash.com/photo-1572120360610-d971b9d7767c',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
  'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
  'https://images.unsplash.com/photo-1599423300746-b62533397364',
]

async function main() {
  console.log('🌱 Seeding database...')

  // Clear DB (order matters بسبب FK)
  await prisma.inquiry.deleteMany()
  await prisma.favorite.deleteMany()
  await prisma.image.deleteMany()
  await prisma.property.deleteMany()
  await prisma.seller.deleteMany()
  await prisma.user.deleteMany()

  // 👤 Create Users
  const users = await Promise.all([
    prisma.user.create({
      data: {
        name: 'Rahim Uddin',
        email: 'rahim@example.com',
        password: 'hashed_password',
        phone: '01700000001',
        role: 'SELLER',
      },
    }),
    prisma.user.create({
      data: {
        name: 'Karim Ahmed',
        email: 'karim@example.com',
        password: 'hashed_password',
        phone: '01700000002',
        role: 'BUYER',
      },
    }),
    prisma.user.create({
      data: {
        name: 'Sadia Rahman',
        email: 'sadia@example.com',
        password: 'hashed_password',
        phone: '01700000003',
        role: 'AGENT',
      },
    }),
  ])

  // 🧑‍💼 Create Seller Profiles (for seller + agent)
  const sellers = await Promise.all([
    prisma.seller.create({
      data: {
        user_id: users[0].id,
        is_verified: true,
        experience: 5,
      },
    }),
    prisma.seller.create({
      data: {
        user_id: users[2].id,
        is_verified: true,
        experience: 3,
        company_name: 'Sylhet Properties Ltd.',
      },
    }),
  ])

  // 🏠 Create Properties
  const properties = []

  for (let i = 0; i < 6; i++) {
    const owner = randomItem([users[0], users[2]])

    const property = await prisma.property.create({
      data: {
        title: `Modern ${randomItem(propertyTypes)} in ${randomItem(cities)}`,
        description: 'A beautiful property located in a prime area of Sylhet.',
        price: Math.floor(Math.random() * 10000000) + 2000000,
        currency: 'BDT',
        address: `${randomItem(cities)}, Sylhet`,
        property_type: randomItem(propertyTypes),
        status: 'ACTIVE',
        bedrooms: Math.floor(Math.random() * 5) + 1,
        bathrooms: Math.floor(Math.random() * 3) + 1,
        size: Math.floor(Math.random() * 3000) + 800,
        owner_id: owner.id,
      },
    })

    properties.push(property)

    // 🖼 Add Images
    const imageCount = Math.floor(Math.random() * 3) + 1

    for (let j = 0; j < imageCount; j++) {
      await prisma.image.create({
        data: {
          url: randomItem(unsplashImages),
          property_id: property.id,
        },
      })
    }
  }

  // ❤️ Favorites
  await prisma.favorite.create({
    data: {
      user_id: users[1].id,
      property_id: properties[0].id,
    },
  })

  // 💬 Inquiry
  await prisma.inquiry.create({
    data: {
      user_id: users[1].id,
      property_id: properties[1].id,
      message: 'I am interested in this property. Please contact me.',
    },
  })

  console.log('✅ Seeding completed successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
