import { Link } from "react-router-dom";
import ProductCard from "@/components/product/ProductCard";
import { Product } from "@/data/products";

interface RelatedProductsProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

const RelatedProducts = ({
  products,
  title = "You May Also Like",
  subtitle = "Complete Your Ritual",
}: RelatedProductsProps) => {
  if (products.length === 0) return null;

  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wide-luxury text-primary mb-2">
            {subtitle}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            {title}
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
