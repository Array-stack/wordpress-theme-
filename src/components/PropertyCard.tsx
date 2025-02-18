import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface PropertyCardProps {
  image?: string;
  title?: string;
  price?: number;
  beds?: number;
  baths?: number;
  sqft?: number;
  isFavorite?: boolean;
  onFavoriteClick?: () => void;
}

const PropertyCard = ({
  image = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
  title = "Modern Family Home",
  price = 750000,
  beds = 4,
  baths = 3,
  sqft = 2500,
  isFavorite = false,
  onFavoriteClick = () => {},
}: PropertyCardProps) => {
  return (
    <Card className="w-[380px] overflow-hidden bg-white">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-[250px] w-full object-cover"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 bg-white/80 hover:bg-white"
          onClick={onFavoriteClick}
        >
          <Heart
            className={cn(
              "h-5 w-5",
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-600",
            )}
          />
        </Button>
      </div>

      <CardContent className="p-4">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-2xl font-bold text-primary">
          ${price.toLocaleString()}
        </p>
      </CardContent>

      <CardFooter className="grid grid-cols-3 gap-4 border-t p-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <span className="font-semibold">{beds}</span> Beds
        </div>
        <div className="flex items-center gap-1">
          <span className="font-semibold">{baths}</span> Baths
        </div>
        <div className="flex items-center gap-1">
          <span className="font-semibold">{sqft.toLocaleString()}</span> Sqft
        </div>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
