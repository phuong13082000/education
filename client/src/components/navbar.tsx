import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";

type NavbarProp = {
  onToggleSidebar: () => void;
};

export const Navbar = ({ onToggleSidebar }: NavbarProp) => {
  const [showSearch, setShowSearch] = useState<boolean>(false);

  return (
    <header className="sticky top-0 left-0 right-0 bg-background z-[1000] border-b-[0.1rem] border-b-[rgba(0,0,0,0.2)] border-solid">
      <section className="flex items-center justify-between relative p-[15px_20px] m-[0_auto] max-w-[1200px]">
        <a href="/" className="text-2xl text-foreground">
          Educa.
        </a>

        <form
          action="#"
          method="post"
          className="hidden md:flex w-[500px] rounded-[5px] p-[15px_20px] gap-5"
        >
          <Input
            type="text"
            name="search_box"
            placeholder="Search courses..."
            maxLength={100}
            required
            className="text-lg"
          />
          <Button type="submit" size="icon" variant="ghost">
            <Search className="h-5 w-5" />
          </Button>
        </form>

        <div>
          <Button
            variant="outline"
            className="ml-2 size-11"
            onClick={onToggleSidebar}
          >
            <span className="fas fa-bars"></span>
          </Button>
          <Button
            variant="outline"
            className="ml-2 size-11 md:hidden"
            onClick={() => setShowSearch(!showSearch)}
          >
            <span className="fas fa-search"></span>
          </Button>
          <ThemeToggle />
        </div>

        {/* Form mobile toggle */}
        {showSearch && (
          <form
            action="#"
            method="post"
            className="absolute top-full left-0 right-0 flex md:hidden bg-background p-4 gap-2 shadow"
          >
            <Input
              type="text"
              name="search_box"
              placeholder="Search courses..."
              maxLength={100}
              required
              className="flex-1"
            />
            <Button type="submit" size="icon" variant="outline">
              <Search className="h-5 w-5" />
            </Button>
          </form>
        )}
      </section>
    </header>
  );
};
