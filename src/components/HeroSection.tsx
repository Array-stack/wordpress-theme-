import React from "react";
import PropertySearch from "./PropertySearch";

interface HeroSectionProps {
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
  onSearch?: (filters: any) => void;
}

const HeroSection = ({
  backgroundImage = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  title = "Find Your Dream Home",
  subtitle = "Search properties for sale and to rent in your area",
  onSearch = () => {},
}: HeroSectionProps) => {
  return (
    <div className="relative h-[600px] w-full bg-gray-900">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full w-full">
        <div className="mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mb-8 text-lg text-gray-200 md:text-xl">{subtitle}</p>

          {/* Search Component */}
          <div className="w-full max-w-[1200px]">
            <PropertySearch onSearch={onSearch} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
