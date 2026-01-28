import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Import ingredient images to use for category icons
import roseImg from "@/assets/ingredients/rose.png";
import coconutImg from "@/assets/ingredients/coconut.png";
import jasmine from "@/assets/ingredients/jasmine.png";
import sandalwoodImg from "@/assets/ingredients/sandalwood.png";
import saffronImg from "@/assets/ingredients/saffron.png";
import honeyImg from "@/assets/ingredients/honey.png";

// Category data with local images
const categoryData = [
  {
    id: "face",
    name: "Face",
    image: roseImg,
  },
  {
    id: "body",
    name: "Body",
    image: coconutImg,
  },
  {
    id: "hair",
    name: "Hair",
    image: jasmine,
  },
  {
    id: "wellness",
    name: "Wellness",
    image: sandalwoodImg,
  },
  {
    id: "makeup",
    name: "Makeup",
    image: saffronImg,
  },
  {
    id: "gifting",
    name: "Gifting",
    image: honeyImg,
  },
];

const CategoryIcons = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore our curated collections of Ayurvedic beauty essentials
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
          {categoryData.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/category/${category.id}`}
                className="group text-center block"
              >
                <div className="relative w-20 h-20 md:w-28 md:h-28 mx-auto mb-4 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-colors duration-300 bg-secondary/30">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-sm md:text-base text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryIcons;
