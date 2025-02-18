import React from "react";
import { Card } from "./ui/card";
import { Home, Building2, Building } from "lucide-react";

interface PropertyType {
  icon: React.ReactNode;
  label: string;
  count: number;
}

interface PropertyTypeSelectorProps {
  propertyTypes?: PropertyType[];
  onSelect?: (type: string) => void;
  selectedType?: string;
}

const PropertyTypeSelector = ({
  propertyTypes = [
    { icon: <Home className="w-6 h-6" />, label: "Houses", count: 156 },
    { icon: <Building2 className="w-6 h-6" />, label: "Apartments", count: 89 },
    { icon: <Building className="w-6 h-6" />, label: "Commercial", count: 45 },
  ],
  onSelect = () => {},
  selectedType = "",
}: PropertyTypeSelectorProps) => {
  return (
    <div className="w-full max-w-[1200px] bg-white p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {propertyTypes.map((type) => (
          <Card
            key={type.label}
            className={`p-4 cursor-pointer transition-all hover:shadow-md ${
              selectedType === type.label.toLowerCase()
                ? "border-primary ring-2 ring-primary/20"
                : ""
            }`}
            onClick={() => onSelect(type.label.toLowerCase())}
          >
            <div className="flex items-center gap-4">
              <div
                className={`p-3 rounded-full ${
                  selectedType === type.label.toLowerCase()
                    ? "bg-primary/10 text-primary"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {type.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{type.label}</h3>
                <p className="text-sm text-gray-500">
                  {type.count} Properties Available
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PropertyTypeSelector;
