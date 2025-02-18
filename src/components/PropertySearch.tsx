import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Slider } from "./ui/slider";
import { Search, Home, Building2, Building } from "lucide-react";

interface PropertySearchProps {
  onSearch?: (filters: SearchFilters) => void;
}

interface SearchFilters {
  propertyType: string;
  location: string;
  priceRange: number[];
  beds: string;
  baths: string;
}

const PropertySearch = ({ onSearch = () => {} }: PropertySearchProps) => {
  const [filters, setFilters] = React.useState<SearchFilters>({
    propertyType: "any",
    location: "",
    priceRange: [0, 1000000],
    beds: "any",
    baths: "any",
  });

  const handleSearch = () => {
    onSearch(filters);
  };

  return (
    <div className="w-full max-w-[1200px] bg-white rounded-lg shadow-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Property Type Select */}
        <Select
          value={filters.propertyType}
          onValueChange={(value) =>
            setFilters({ ...filters, propertyType: value })
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Property Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">
              <div className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                <span>Any Type</span>
              </div>
            </SelectItem>
            <SelectItem value="house">
              <div className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                <span>House</span>
              </div>
            </SelectItem>
            <SelectItem value="apartment">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>Apartment</span>
              </div>
            </SelectItem>
            <SelectItem value="commercial">
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4" />
                <span>Commercial</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>

        {/* Location Input */}
        <Input
          type="text"
          placeholder="Location"
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          className="w-full"
        />

        {/* Price Range Slider */}
        <div className="col-span-1 lg:col-span-1">
          <Slider
            defaultValue={[0, 1000000]}
            max={1000000}
            step={10000}
            value={filters.priceRange}
            onValueChange={(value) =>
              setFilters({ ...filters, priceRange: value })
            }
            className="w-full"
          />
          <div className="text-sm text-gray-500 mt-1">
            ${filters.priceRange[0].toLocaleString()} - $
            {filters.priceRange[1].toLocaleString()}
          </div>
        </div>

        {/* Beds Select */}
        <Select
          value={filters.beds}
          onValueChange={(value) => setFilters({ ...filters, beds: value })}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Beds" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any Beds</SelectItem>
            <SelectItem value="1">1+ Beds</SelectItem>
            <SelectItem value="2">2+ Beds</SelectItem>
            <SelectItem value="3">3+ Beds</SelectItem>
            <SelectItem value="4">4+ Beds</SelectItem>
          </SelectContent>
        </Select>

        {/* Baths Select */}
        <Select
          value={filters.baths}
          onValueChange={(value) => setFilters({ ...filters, baths: value })}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Baths" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any Baths</SelectItem>
            <SelectItem value="1">1+ Baths</SelectItem>
            <SelectItem value="2">2+ Baths</SelectItem>
            <SelectItem value="3">3+ Baths</SelectItem>
            <SelectItem value="4">4+ Baths</SelectItem>
          </SelectContent>
        </Select>

        {/* Search Button - Full width on mobile, auto on larger screens */}
        <div className="col-span-1 md:col-span-2 lg:col-span-5 flex justify-center">
          <Button
            onClick={handleSearch}
            className="w-full md:w-auto px-8"
            size="lg"
          >
            <Search className="w-4 h-4 mr-2" />
            Search Properties
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertySearch;
