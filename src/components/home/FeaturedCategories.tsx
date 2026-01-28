import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import collectionShowcase from "@/assets/hero/collection-showcase.png";
import productShowcase from "@/assets/hero/product-showcase.png";

const categories = [
  {
    id: "hair",
    name: "Hair Care",
    description: "Nourishing treatments for lustrous, healthy hair",
    image: collectionShowcase,
    link: "/category/hair",
  },
  {
    id: "face",
    name: "Face Care",
    description: "Radiant skincare rooted in Ayurvedic wisdom",
    image: productShowcase,
    link: "/category/face",
  },
];

const FeaturedCategories = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-[0.3em] text-primary/70 uppercase mb-3 block">
            Explore Our Collections
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground">
            Featured Categories
          </h2>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link
                to={category.link}
                className="group block relative overflow-hidden rounded-lg aspect-[4/3] md:aspect-[16/10]"
              >
                {/* Background Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <h3 className="font-serif text-2xl md:text-3xl text-white mb-2 group-hover:text-primary-foreground transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base mb-4 max-w-xs">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-white text-sm font-medium group-hover:gap-3 transition-all">
                    Shop Collection
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
