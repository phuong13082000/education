import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

export default function Profile() {
  return (
    <>
      <section>
        <h1 className="heading">Your Profile</h1>

        <div className="bg-card rounded-[5px] p-5">
          <div className="text-center mb-5">
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
            {/* update */}
            <Button className="mt-3">
              <Link to="#">Update Profile</Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="bg-border rounded-[5px] p-5 flex-[1_1_250px]">
              <div className="flex items-center gap-5 mb-2.5">
                <div className="bg-foreground text-background rounded-[5px] h-[50px] w-[50px] flex items-center justify-center">
                  <i className="fas fa-bookmark text-[20px]" />
                </div>
                <div>
                  <span className="text-[25px]">4</span>
                  <p className="text-[17px]">saved playlist</p>
                </div>
              </div>
              <Button>View Playlist</Button>
            </div>

            <div className="bg-border rounded-[5px] p-5 flex-[1_1_250px]">
              <div className="flex items-center gap-5 mb-2.5">
                <div className="bg-foreground text-background rounded-[5px] h-[50px] w-[50px] flex items-center justify-center">
                  <i className="fas fa-heart text-[20px]" />
                </div>
                <div>
                  <span className="text-[25px]">33</span>
                  <p className="text-[17px]">videos liked</p>
                </div>
              </div>
              <Button>View Liked</Button>
            </div>

            <div className="bg-border rounded-[5px] p-5 flex-[1_1_250px]">
              <div className="flex items-center gap-5 mb-2.5">
                <div className="bg-foreground text-background rounded-[5px] h-[50px] w-[50px] flex items-center justify-center">
                  <i className="fas fa-comment text-[20px]" />
                </div>
                <div>
                  <span className="text-[25px]">12</span>
                  <p className="text-[17px]">videos comments</p>
                </div>
              </div>
              <Button>View Comments</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
