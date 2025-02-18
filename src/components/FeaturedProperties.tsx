import React from "react";
import PropertyCard from "./PropertyCard";

interface Property {
  id: string;
  image: string;
  title: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  isFavorite: boolean;
}

interface FeaturedPropertiesProps {
  properties?: Property[];
  onFavoriteToggle?: (propertyId: string) => void;
}

const defaultProperties: Property[] = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3",
    title: "Modern Family Home",
    price: 750000,
    beds: 4,
    baths: 3,
    sqft: 2500,
    isFavorite: false,
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3",
    title: "Luxury Penthouse",
    price: 1250000,
    beds: 3,
    baths: 2,
    sqft: 2000,
    isFavorite: false,
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3",
    title: "Cozy Cottage",
    price: 450000,
    beds: 2,
    baths: 1,
    sqft: 1200,
    isFavorite: false,
  },
];

const FeaturedProperties = ({
  properties = defaultProperties,
  onFavoriteToggle = () => {},
}: FeaturedPropertiesProps) => {
  return (
    <div className="w-full max-w-[1200px] mx-auto bg-gray-50 p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Featured Properties
        </h2>
        <p className="text-gray-600 mt-2">
          Discover our handpicked selection of premium properties
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            image={property.image}
            title={property.title}
            price={property.price}
            beds={property.beds}
            baths={property.baths}
            sqft={property.sqft}
            isFavorite={property.isFavorite}
            onFavoriteClick={() => onFavoriteToggle(property.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
