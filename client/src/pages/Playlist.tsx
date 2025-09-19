import { Link } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

const playlists = [
  { id: 1, title: "complete HTML tutorial (part 01)", thumb: "post-1-1.png" },
  { id: 2, title: "complete HTML tutorial (part 02)", thumb: "post-1-2.png" },
  { id: 3, title: "complete HTML tutorial (part 03)", thumb: "post-1-3.png" },
  { id: 4, title: "complete HTML tutorial (part 04)", thumb: "post-1-4.png" },
  { id: 5, title: "complete HTML tutorial (part 05)", thumb: "post-1-5.png" },
  { id: 6, title: "complete HTML tutorial (part 06)", thumb: "post-1-6.png" },
];

export default function Playlist() {
  return (
    <>
      <section>
        <h1 className="heading">Playlist Details</h1>

        <div className="flex items-end gap-[30px] flex-wrap bg-card p-5">
          <div className="flex-[1_1_400px]">
            <form action="#" method="post" className="mb-4">
              <Button type="submit">
                <i className="far fa-bookmark text-[20px] mr-2"></i>{" "}
                <span className="text-[18px]">Save Playlist</span>
              </Button>
            </form>

            <div className="relative">
              <img src="thumb-1.png" alt="" />
              <Badge className="absolute top-2.5 left-2.5 rounded-[5px] p-[5px_15px] bg-[rgba(0,0,0,.3)] text-white text-[15px]">
                10 videos
              </Badge>
            </div>
          </div>

          <div className="flex-[1_1_400px]">
            <div className="flex items-center gap-5 mb-5">
              <img
                src="pic-2.jpg"
                alt=""
                className="h-[70px] w-[70px] rounded-full object-cover"
              />
              <div>
                <h3 className="text-[20px] mb-0.5">john deo</h3>
                <span className="text-[15px]">21-10-2022</span>
              </div>
            </div>

            <div>
              <h3 className="text-[20px]">complete HTML tutorial</h3>
              <p className="p-[10px_0] leading-loose text-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
                minus reiciendis, error sunt veritatis exercitationem deserunt
                velit doloribus itaque voluptate.
              </p>
              <Button>
                <Link to="/teacher-profile">View Profile</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h1 className="heading">Playlist Videos</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center relative">
          {playlists &&
            playlists.map((item, id) => (
              <Link
                className="bg-card rounded-[5px] p-5 relative group"
                to="/watch-video"
                key={id}
              >
                <i
                  className="absolute top-5 left-5 right-5 h-[200px] rounded-[5px]
                   bg-[rgba(0,0,0,0.3)] text-[5rem] text-white 
                   hidden items-center justify-center 
                   group-hover:flex"
                >
                  <i className="fas fa-play"></i>
                </i>
                <img
                  src={item.thumb}
                  alt=""
                  className="w-full h-[200px] object-cover rounded-[5px]"
                />
                <h3 className="mt-4 text-[18px]">{item.title}</h3>
              </Link>
            ))}
        </div>
      </section>
    </>
  );
}
