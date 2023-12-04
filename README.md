# Shopping Cart App

First, run the development server:

```bash
# run the local MySQL database
docker compose up -d

# for destroy the container
docker compose down

# install deps
npm i
# or
bun i

# then run

npx prisma db push && npm run dev
# or
bunx prisma db push && bun dev
```

Open <http://localhost:3000> with your browser to see the result.

## Credentials

For sign-in,

- ~~email: <modone7203@eachart.com>~~
- ~~password: modone7203~~

## Production

Project demo link: ~~https://comprehensive-shopping-cart-system.vercel.app~~

> Can't create an order because I've removed prod db.

## Tech

- Bun Runtime :rocket:
- Next.js 14 :heart_eyes:
- Daisy UI (plan to move in shadcn/ui)
- TailwindCSS
- Clerk
- Prisma
- MySQL (production: PlanetScale)
- Vercel :heart:

## Responsive

- Desktop Only

## Todo

- [ ] Responsive
- [ ] improve app state design
- [ ] cart items stored in localStorage
- [ ] improve schema design
- [ ] admin dashboard view and authorization
- [ ] admin order status (PENDING = default, PROCESSING, COMPLETED) management
