import React from "react";
import { ShoppingCart, Search, Heart } from "lucide-react";

/*
AB Selections – Amazon-style Handloom Website (Enhanced Frontend)
• Premium UI
• Mobile-first
• Clean cards, hover effects, banners
• Empty product placeholders
*/

const categories = [
  { name: "Bedsheets", desc: "Soft cotton & premium prints" },
  { name: "Sofa Covers", desc: "Stylish protection for sofas" },
  { name: "Cushion Covers", desc: "Elegant cushion designs" },
  { name: "Curtains", desc: "Window & door curtains" },
  { name: "Towels (All Types)", desc: "Bath, hand & face towels" },
  { name: "Blankets", desc: "Warm & cozy blankets" },
  { name: "Quilts (Single & Double Bed)", desc: "Comfort for all seasons" },
  { name: "Table Covers", desc: "Dining & decorative covers" }
];

export default function ABSelections() {
  const whatsappNumber = "91XXXXXXXXXX"; // add later

  const orderOnWhatsApp = (category) => {
    const msg = `Hello AB Selections, I am interested in your ${category}. Please share details.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`);
  };

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Header */}
      <header className="bg-neutral-900 text-white p-4 sticky top-0 z-50 shadow-xl">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">AB Selections</h1>
          <div className="flex items-center gap-3">
            <Search />
            <ShoppingCart />
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section
        className="relative h-[70vh] flex items-center justify-center text-center border-b border-neutral-800"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1615874959474-d609969a20ed')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-wide text-white">
            Premium Handloom Collection
          </h2>
          <p className="mt-2 text-sm sm:text-base tracking-widest uppercase text-neutral-300">By Kulwinder Singh</p>
          <p className="mt-5 text-lg sm:text-xl text-neutral-300">
            Bedsheets • Curtains • Towels • Blankets & More
          </p>
          <button
            className="mt-8 px-8 py-3 bg-white text-black rounded-full text-lg font-semibold hover:bg-neutral-200 transition"
          >
            Explore Collection
          </button>
        </div>
      </section>

      {/* Categories Sections */}
      {categories.map((cat) => (
        <section key={cat.name} className="p-6">
          <div className="mb-4">
  <h2 className="text-2xl font-bold text-white">{cat.name}</h2>
  <p className="text-neutral-300 text-sm">{cat.desc}</p>
</div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Empty Product Boxes */}
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-neutral-900 border border-neutral-800 rounded-2xl hover:border-neutral-600 transition-all duration-300 flex flex-col"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-neutral-800 flex items-center justify-center text-neutral-400 rounded-t-2xl">
                  Product Image
                </div>

                {/* Product Info */}
                <div className="p-4 flex flex-col gap-3">
                  <div className="h-4 bg-neutral-700 rounded w-3/4"></div>
                  <button
                    onClick={() => orderOnWhatsApp(cat.name)}
                    className="mt-2 bg-white text-black py-2 rounded-xl hover:bg-neutral-200 transition"
                  >
                    <span className="flex items-center justify-center gap-2"><Heart size={16} /> Order on WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer className="bg-black text-white text-center p-6 mt-8 border-t border-neutral-800">
        <p className="font-semibold">AB Selections</p>
        <p className="text-sm text-gray-400">Premium Handloom & Home Furnishings</p>
        <p className="mt-1 text-xs text-neutral-500">Owner: Kulwinder Singh</p>
      </footer>
    </div>
  );
}
