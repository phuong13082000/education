import { Search } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

const teachers = [
  {
    id: 1,
    author: { name: "jonh dei", avatar: "pic-2.jpg", role: "developer" },
    totalPlaylist: 4,
    totalVideo: 18,
    totalLike: 1208,
  },
  {
    id: 2,
    author: { name: "jonh dei", avatar: "pic-3.jpg", role: "developer" },
    totalPlaylist: 4,
    totalVideo: 18,
    totalLike: 1208,
  },
  {
    id: 3,
    author: { name: "jonh dei", avatar: "pic-4.jpg", role: "developer" },
    totalPlaylist: 4,
    totalVideo: 18,
    totalLike: 1208,
  },
  {
    id: 4,
    author: { name: "jonh dei", avatar: "pic-5.jpg", role: "developer" },
    totalPlaylist: 4,
    totalVideo: 18,
    totalLike: 1208,
  },
  {
    id: 5,
    author: { name: "jonh dei", avatar: "pic-6.jpg", role: "developer" },
    totalPlaylist: 4,
    totalVideo: 18,
    totalLike: 1208,
  },
  {
    id: 6,
    author: { name: "jonh dei", avatar: "pic-7.jpg", role: "developer" },
    totalPlaylist: 4,
    totalVideo: 18,
    totalLike: 1208,
  },
  {
    id: 7,
    author: { name: "jonh dei", avatar: "pic-8.jpg", role: "developer" },
    totalPlaylist: 4,
    totalVideo: 18,
    totalLike: 1208,
  },
];

export default function Teachers() {
  return (
    <>
      <section>
        <h1 className="heading">Expert Teachers</h1>

        <form
          action="#"
          method="post"
          className="mb-5 rounded-[5px] bg-background flex p-[15px_20px] items-center gap-4"
        >
          <Input
            type="text"
            name="search_tutor"
            placeholder="search tutors..."
            maxLength={100}
            required
            className="text-lg"
          />
          <Button type="submit" size="icon" variant="ghost">
            <Search className="h-5 w-5" />
          </Button>
        </form>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-start">
          <div className="bg-card rounded-[5px] p-5 text-center">
            <h3 className="text-[25px] pb-[5px]">Become A Tutor</h3>
            <p className="leading-[1.7] p-[5px_0] text-gray-500 text-[17px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              itaque ipsam fuga ex et aliquam.
            </p>
            {/* register */}
            <Button>Get Started</Button>
          </div>

          {teachers &&
            teachers.map((item, id) => (
              <div className="bg-card rounded-[5px] p-5" key={id}>
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="size-12">
                    <AvatarImage
                      src={item.author.avatar}
                      alt={item.author.name}
                      className="object-cover"
                    />
                    <AvatarFallback>
                      {item.author.name ? item.author.name.charAt(0) : "?"}
                    </AvatarFallback>{" "}
                  </Avatar>
                  <div>
                    <h3 className="text-[18px] text-foreground mb-0.5">
                      {item.author.name}
                    </h3>
                    <span className="text-[13px] text-gray-500">
                      {item.author.role}
                    </span>
                  </div>
                </div>
                <p className="p-[5px_0] text-[17px]">
                  total playlists : <span>{item.totalPlaylist}</span>
                </p>
                <p className="p-[5px_0] text-[17px]">
                  total videos : <span>{item.totalVideo}</span>
                </p>
                <p className="p-[5px_0] text-[17px]">
                  total likes : <span>{item.totalLike}</span>
                </p>
                {/* teacher profile */}
                <Button className="mt-3">
                  View Profile
                </Button>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}
