import { Link } from "react-router-dom";

const ingredients = [
  {
    name: "Saffron",
    sanskritName: "Kumkuma",
    benefit: "Brightening & Radiance",
    image: "https://images.unsplash.com/photo-1599909533165-8fb13c00d9ce?w=400&h=400&fit=crop",
    description: "The most precious spice, known for imparting a luminous glow",
  },
  {
    name: "Sandalwood",
    sanskritName: "Chandana",
    benefit: "Cooling & Soothing",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",
    description: "Sacred wood revered for its calming and skin-healing properties",
  },
  {
    name: "Turmeric",
    sanskritName: "Haridra",
    benefit: "Purifying & Healing",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&h=400&fit=crop",
    description: "Golden spice with powerful anti-inflammatory benefits",
  },
  {
    name: "Jasmine",
    sanskritName: "Mallika",
    benefit: "Hydrating & Aromatic",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=400&fit=crop",
    description: "Divine flower essence for deep skin nourishment",
  },
];

const IngredientsSpotlight = () => {
  return (
    <section className="py-20 bg-cream-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wide-luxury text-primary mb-3">
            Nature's Treasures
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Sacred Ingredients
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We source the finest botanicals from across India, honoring ancient Ayurvedic wisdom in every formulation
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {ingredients.map((ingredient, index) => (
            <div
              key={ingredient.name}
              className="group text-center fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative mb-6 overflow-hidden rounded-full aspect-square max-w-[200px] mx-auto border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
                <img
                  src={ingredient.image}
                  alt={ingredient.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
              </div>

              {/* Sanskrit Name */}
              <p className="text-xs uppercase tracking-wide-luxury text-primary mb-1">
                {ingredient.sanskritName}
              </p>

              {/* Name */}
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">
                {ingredient.name}
              </h3>

              {/* Benefit */}
              <p className="text-sm font-medium text-primary mb-2">
                {ingredient.benefit}
              </p>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {ingredient.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/ingredients"
            className="btn-outline-luxury inline-block"
          >
            Explore All Ingredients
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSpotlight;
