import React from "react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Plus, Menu } from "lucide-react";

interface StickyHeaderProps {
  logo?: string;
  onAddPropertyClick?: () => void;
}

const StickyHeader = ({
  logo = "/vite.svg",
  onAddPropertyClick = () => {},
}: StickyHeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-white border-b z-50 px-4">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Navigation - Desktop */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Buy</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <NavigationMenuLink
                      className="block p-2 hover:bg-accent rounded-md"
                      href="/search?type=house"
                    >
                      Houses for Sale
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className="block p-2 hover:bg-accent rounded-md"
                      href="/search?type=apartment"
                    >
                      Apartments for Sale
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className="block p-2 hover:bg-accent rounded-md"
                      href="/search?type=commercial"
                    >
                      Commercial Properties
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Rent</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <NavigationMenuLink
                      className="block p-2 hover:bg-accent rounded-md"
                      href="/rent?type=house"
                    >
                      Houses for Rent
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className="block p-2 hover:bg-accent rounded-md"
                      href="/rent?type=apartment"
                    >
                      Apartments for Rent
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className="block p-2 hover:bg-accent rounded-md"
                  href="/agents"
                >
                  Agents
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className="block p-2 hover:bg-accent rounded-md"
                  href="/about"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Add Property Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Button
            onClick={onAddPropertyClick}
            className="hidden md:flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Property
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default StickyHeader;
