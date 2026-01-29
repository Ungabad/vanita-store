import React from 'react'
import { Card } from '@/components';

const products = [
  {
    id: 1,
    title: "Rising Sun Crochet Jacket",
    subtitle: "Women's Outerwear",
    meta: "1 Colour",
    price: 149.99,
    imageSrc: "/crochet/IMG_20251109_151109867_HDR_PORTRAIT~2.webp",
    badge: { label: "New", tone: "orange" as const },
  },
  {
    id: 2,
    title: "cutesy grape crochet slippers",
    subtitle: "Women's Footwear",
    meta: "1 Colour",
    price: 129.99,
    imageSrc: "/crochet/cutesy-grape-crochet-slippers.webp",
    badge: { label: "Hot", tone: "red" as const },
  },
  {
    id: 3,
    title: "Crochet Mesh Ruffle Hat Designer Inspired",
    subtitle: "Women's Accessories",
    meta: "1 Colour",
    price: 159.99,
    imageSrc: "/crochet/20240514_175857.webp",
    badge: { label: "Trending", tone: "green" as const },
  },
  {
    id: 4,
    title: "Carnelian Custom Earings",
    subtitle: "Women's Accessories",
    meta: "1 Colour",
    price: 139.99,
    imageSrc: "/jewelry/IMG20250517191610.webp",
  },
  {
    id: 5,
    title: "Tweedy Custom Earings",
    subtitle: "Women's Accessories",
    meta: "1 Colour",
    price: 139.99,
    imageSrc: "/jewelry/20230418_211129.webp",
  },
  {
    id: 6,
    title: "Melanin Adidas Custom Earings",
    subtitle: "Women's Accessories",
    meta: "1 Colour",
    price: 139.99,
    imageSrc: "/jewelry/20210115_070928.webp",
  },
];

const Latest = () => {
  return (
    <div>
              {/* PRODUCTS SECTION */}
      <section aria-labelledby="latest" className="p-12">
        <h2 id="latest" className="mb-6 text-heading-3 text-dark-900">
          Latest Creations
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Card
              key={p.id}
              title={p.title}
              subtitle={p.subtitle}
              meta={p.meta}
              imageSrc={p.imageSrc}
              price={p.price}
              badge={p.badge}
              href={`/products/${p.id}`}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Latest