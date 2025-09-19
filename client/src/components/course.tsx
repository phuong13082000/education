import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

type Author = {
  name: string;
  avatar: string;
  createAt: string;
};

type CourseProp = {
  title: string;
  thumb: string;
  totalVideo: string;
  author?: Author;
};

export const Course = ({ title, thumb, totalVideo, author }: CourseProp) => {
  return (
    <div className="bg-card rounded-[0.5rem] p-5">
      {author && (
        <div className="flex items-center gap-4 mb-6">
          <Avatar className="size-12">
            <AvatarImage
              src={author.avatar}
              alt={author.name}
              className="object-cover"
            />
            <AvatarFallback>
              {author.name ? author.name.charAt(0) : "?"}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-[18px] text-foreground mb-0.5">
              {author.name}
            </h3>
            <span className="text-[13px] text-gray-500">{author.createAt}</span>
          </div>
        </div>
      )}

      <div className="relative">
        <img
          src={thumb}
          alt={title}
          className="w-full h-52 object-cover rounded-[5px]"
        />
        <Badge className="absolute top-2.5 left-2.5 rounded-[5px] p-[5px_15px] bg-[rgba(0,0,0,.3)] text-white text-[15px]">
          {totalVideo} videos
        </Badge>
      </div>

      <h3 className="text-[20px] text-foreground pb-1.5 pt-2.5">{title}</h3>
      <Button>
        <Link to="/playlist">View Playlist</Link>
      </Button>
    </div>
  );
};
