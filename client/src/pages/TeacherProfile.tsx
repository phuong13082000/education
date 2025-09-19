import { Course } from "../components/course";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

const courses = [
  {
    id: 1,
    title: "complete HTML tutorial",
    thumb: "thumb-1.png",
    totalVideo: "10",
  },
  {
    id: 2,
    title: "complete CSS tutorial",
    thumb: "thumb-2.png",
    totalVideo: "10",
  },
  {
    id: 3,
    title: "complete JS tutorial",
    thumb: "thumb-3.png",
    totalVideo: "10",
  },
  {
    id: 4,
    title: "complete Boostrap tutorial",
    thumb: "thumb-4.png",
    totalVideo: "10",
  },
];

export default function TeacherProfile() {
  return (
    <>
      <section>
        <h1 className="heading">Profile Details</h1>

        <div className="text-center bg-card rounded-[5px] p-5">
          <div>
            <Avatar className="size-28 mx-auto mb-2.5">
              <AvatarImage
                src="pic-2.jpg"
                alt="user-avatar"
                className="object-contain"
              />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <h3 className="text-[20px] text-foreground overflow-hidden text-ellipsis whitespace-nowrap mx-auto">
              ano qty
            </h3>
            <p className="text-[18px] text-[#888] mx-auto">developer</p>
          </div>
          <div className="flex flex-wrap gap-4 mt-5">
            <p className="flex-[1_1_200px] rounded-[5px] bg-border p-[12px_20px] text-[18px]">
              total playlists : <span>4</span>
            </p>
            <p className="flex-[1_1_200px] rounded-[5px] bg-border p-[12px_20px] text-[18px]">
              total videos : <span>18</span>
            </p>
            <p className="flex-[1_1_200px] rounded-[5px] bg-border p-[12px_20px] text-[18px]">
              total likes : <span>1208</span>
            </p>
            <p className="flex-[1_1_200px] rounded-[5px] bg-border p-[12px_20px] text-[18px]">
              total comments : <span>52</span>
            </p>
          </div>
        </div>
      </section>

      <section>
        <h1 className="heading">Our Courses</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-start">
          {courses &&
            courses.map((course) => <Course key={course.id} {...course} />)}
        </div>
      </section>
    </>
  );
}
