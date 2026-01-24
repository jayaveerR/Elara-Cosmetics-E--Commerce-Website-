import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PromoBanner = () => {
  return (
    <section className="py-16 md:py-20 bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Left Banner - Gift Sets */}
          <Link
            to="/category/gifting"
            className="group relative overflow-hidden aspect-[16/9] md:aspect-[4/3]"
          >
            <img
              src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&h=600&fit=crop"
              alt="Luxury Gift Sets"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12 text-primary-foreground">
              <p className="text-xs uppercase tracking-wide-luxury text-gold-light mb-3">
                Exclusive Collection
              </p>
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-3 max-w-xs">
                Luxury Gift Sets
              </h3>
              <p className="text-sm text-primary-foreground/80 mb-4 max-w-xs">
                Curated hampers for every occasion
              </p>
              <span className="inline-flex items-center gap-2 text-sm uppercase tracking-luxury group-hover:gap-3 transition-all">
                Shop Now
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>

          {/* Right Banner - Wellness */}
          <Link
            to="/category/wellness"
            className="group relative overflow-hidden aspect-[16/9] md:aspect-[4/3]"
          >
            <img
              src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&h=600&fit=crop"
              alt="Wellness Rituals"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12 text-primary-foreground">
              <p className="text-xs uppercase tracking-wide-luxury text-gold-light mb-3">
                Holistic Beauty
              </p>
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-3 max-w-xs">
                Wellness Rituals
              </h3>
              <p className="text-sm text-primary-foreground/80 mb-4 max-w-xs">
                Aromatherapy & bath essentials
              </p>
              <span className="inline-flex items-center gap-2 text-sm uppercase tracking-luxury group-hover:gap-3 transition-all">
                Explore
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>

        {/* Single Wide Banner */}
        <div className="mt-6 md:mt-8">
          <Link
            to="/category/face?subcategory=serums"
            className="group relative block overflow-hidden aspect-[21/9]"
          >
            <img
              src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1400&h=600&fit=crop"
              alt="Kumkumadi Collection"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="p-8 md:p-16 text-primary-foreground max-w-2xl">
                <p className="text-xs uppercase tracking-wide-luxury text-gold-light mb-3">
                  The Royal Beauty Secret
                </p>
                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
                  Kumkumadi Collection
                </h3>
                <p className="text-sm md:text-base text-primary-foreground/80 mb-6 max-w-md">
                  Discover the legendary saffron-infused formulations used by Indian royalty for centuries
                </p>
                <span className="btn-luxury inline-flex items-center gap-2">
                  Discover the Collection
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
