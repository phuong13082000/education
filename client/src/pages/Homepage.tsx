import { Course } from "../components/course";
import { Button } from "../components/ui/button";

const categories = [
  { id: 1, icon: "fas fa-code", title: "development" },
  { id: 2, icon: "fas fa-chart-simple", title: "business" },
  { id: 3, icon: "fas fa-pen", title: "design" },
  { id: 4, icon: "fas fa-chart-line", title: "marketing" },
  { id: 5, icon: "fas fa-music", title: "music" },
  { id: 6, icon: "fas fa-camera", title: "photography" },
  { id: 7, icon: "fas fa-cog", title: "software" },
  { id: 8, icon: "fas fa-vial", title: "science" },
];

const topics = [
  { id: 1, icon: "fab fa-html5", title: "html" },
  { id: 2, icon: "fab fa-css3", title: "css" },
  { id: 3, icon: "fab fa-js", title: "javascript" },
  { id: 4, icon: "fab fa-react", title: "react" },
  { id: 5, icon: "fab fa-php", title: "php" },
  { id: 6, icon: "fab fa-bootstrap", title: "bootstrap" },
];

const courses = [
  {
    id: 1,
    title: "complete HTML tutorial",
    thumb: "thumb-1.png",
    totalVideo: "10",
    author: {
      name: "john deo",
      avatar: "pic-2.jpg",
      createAt: "21-10-2022",
    },
  },
  {
    id: 2,
    title: "complete CSS tutorial",
    thumb: "thumb-2.png",
    totalVideo: "10",
    author: {
      name: "john deo",
      avatar: "pic-3.jpg",
      createAt: "21-10-2022",
    },
  },
  {
    id: 3,
    title: "complete JS tutorial",
    thumb: "thumb-3.png",
    totalVideo: "10",
    author: {
      name: "john deo",
      avatar: "pic-4.jpg",
      createAt: "21-10-2022",
    },
  },
  {
    id: 4,
    title: "complete Boostrap tutorial",
    thumb: "thumb-4.png",
    totalVideo: "10",
    author: {
      name: "john deo",
      avatar: "pic-5.jpg",
      createAt: "21-10-2022",
    },
  },
  {
    id: 5,
    title: "complete Jquery tutorial",
    thumb: "thumb-5.png",
    totalVideo: "10",
    author: {
      name: "john deo",
      avatar: "pic-6.jpg",
      createAt: "21-10-2022",
    },
  },
  {
    id: 6,
    title: "complete SASS tutorial",
    thumb: "thumb-6.png",
    totalVideo: "10",
    author: {
      name: "john deo",
      avatar: "pic-7.jpg",
      createAt: "21-10-2022",
    },
  },
];

export default function Homepage() {
  return (
    <>
      <section>
        <h1 className="text-[25px] text-foreground mb-6 border-b-[0.1rem] border-b-[rgba(0,0,0,0.2)] border-solid pb-4">
          Quick Options
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-start">
          <div className="bg-card rounded-[0.5rem] p-5">
            <h3 className="text-[20px] text-foreground">Likes And Comments</h3>
            <p className="text-gray-400 text-[17px] mt-4">
              Total Like: <span>25</span>
            </p>
            <Button size="lg">View Likes</Button>
            <p className="text-gray-400 text-[17px] mt-4">
              Total Comments: <span>25</span>
            </p>
            <Button size="lg">View Comments</Button>
            <p className="text-gray-400 text-[17px] mt-4">
              Save Playlists: <span>25</span>
            </p>
            <Button size="lg">View Playlists</Button>
          </div>

          <div className="bg-card rounded-[0.5rem] p-5">
            <h3 className="text-[20px] text-foreground">Top Categories</h3>
            <div className="flex flex-wrap gap-4 mt-5">
              {categories &&
                categories.map((item, id) => (
                  <Button variant="ghost" key={id}>
                    <i className={item.icon}></i>
                    <span>{item.title}</span>
                  </Button>
                ))}
            </div>
          </div>

          <div className="bg-card rounded-[0.5rem] p-5">
            <h3 className="text-[20px] text-foreground">Popular Topics</h3>
            <div className="flex flex-wrap gap-4 mt-5">
              {topics &&
                topics.map((item, id) => (
                  <Button variant="ghost" key={id}>
                    <i className={item.icon}></i>
                    <span>{item.title}</span>
                  </Button>
                ))}
            </div>
          </div>

          <div className="bg-card rounded-[0.5rem] p-5">
            <h3 className="text-[20px] text-foreground">Become A Tutor</h3>
            <p className="px-0 py-4 text-[18px] text-gray-500 leading-loose">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis, nam?
            </p>
            <Button size="lg">Get Started</Button>
          </div>
        </div>
      </section>

      <section>
        <h1 className="text-[25px] text-foreground mb-6 border-b-[0.1rem] border-b-[rgba(0,0,0,0.2)] border-solid pb-4">
          Our Courses
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-start">
          {courses &&
            courses.map((course) => <Course key={course.id} {...course} />)}
        </div>

        <div className="text-center mt-[20px]">
          <Button size="lg">View All Couses</Button>
        </div>
      </section>
    </>
  );
}
