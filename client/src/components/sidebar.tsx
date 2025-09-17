import { useIsMobile } from "../hooks/use-mobile";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

const menuItems = [
  { name: "Home", icon: "fas fa-home", href: "/" },
  { name: "About", icon: "fas fa-info-circle", href: "/about" },
  { name: "Courses", icon: "fas fa-graduation-cap", href: "#" },
  { name: "Teachers", icon: "fas fa-chalkboard-user", href: "#" },
  { name: "Contact", icon: "fas fa-headset", href: "#" },
];

type Sidebar = {
  open: boolean;
  onClose: () => void;
};

export const Sidebar = ({ open, onClose }: Sidebar) => {
  const isMobile = useIsMobile();

  return (
    <>
      {/* Overlay <=1200px */}
      {open && isMobile && (
        <div
          className="fixed inset-0 bg-black/80 z-[1100] transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      <div
        className={`
          fixed top-0 left-0 h-screen w-[300px] bg-background 
          border-r-[0.1rem] border-r-[rgba(0,0,0,0.2)] border-solid 
          z-[1200] transform transition-transform duration-300 ease-in-out
          overflow-y-auto overscroll-contain
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-4 flex justify-between items-center">
          <span></span>
          <Button
            variant="outline"
            size="sm"
            onClick={onClose}
            className="max-[1200px]:block"
          >
            ✕
          </Button>
        </div>

        <div className="p-[30px_20px] text-center">
          <Avatar className="size-28 mx-auto mb-2.5">
            <AvatarImage
              src="pic-1.jpg"
              alt="user-avatar"
              className="object-contain"
            />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <h3 className="text-[20px] text-foreground overflow-hidden text-ellipsis whitespace-nowrap mx-auto">
            ano qty
          </h3>
          <p className="text-[18px] text-[#888] mx-auto">student</p>
          <Button size="lg" className="w-full mx-auto mt-2 block">
            View Profile
          </Button>
        </div>

        <nav>
          {menuItems.map((item, id) => (
            <a
              key={id}
              href={item.href}
              className="group block p-5 text-[20px]"
            >
              <i
                className={`${item.icon} mr-4 text-foreground transition-all duration-200 group-hover:mr-8`}
              />
              <span className="text-foreground group-hover:text-gray-500">
                {item.name}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};
