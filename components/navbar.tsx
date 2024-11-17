"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <Rocket className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <span className="font-bold text-xl">Boom Fractional</span>
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Invest</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <Link href="/properties" className="group grid h-auto w-full items-center justify-start gap-1 p-4 hover:bg-accent hover:text-accent-foreground">
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        Browse Properties
                      </div>
                      <div className="line-clamp-2 text-sm text-muted-foreground">
                        Explore our curated selection of investment properties
                      </div>
                    </Link>
                    <Link href="/how-it-works" className="group grid h-auto w-full items-center justify-start gap-1 p-4 hover:bg-accent hover:text-accent-foreground">
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        How It Works
                      </div>
                      <div className="line-clamp-2 text-sm text-muted-foreground">
                        Learn about our investment process and returns
                      </div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button variant="ghost" asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700" asChild>
            <Link href="/sign-up">Get Started</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}