import { Course } from "../components/course";

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
  {
    id: 7,
    title: "complete PHP tutorial",
    thumb: "thumb-7.png",
    totalVideo: "10",
    author: {
      name: "john deo",
      avatar: "pic-8.jpg",
      createAt: "21-10-2022",
    },
  },
  {
    id: 8,
    title: "complete MySql tutorial",
    thumb: "thumb-8.png",
    totalVideo: "10",
    author: {
      name: "john deo",
      avatar: "pic-9.jpg",
      createAt: "21-10-2022",
    },
  },
  {
    id: 9,
    title: "complete React tutorial",
    thumb: "thumb-9.png",
    totalVideo: "10",
    author: {
      name: "john deo",
      avatar: "pic-1.jpg",
      createAt: "21-10-2022",
    },
  },
];

export default function Courses() {
  return (
    <>
      <section>
        <h1 className="text-[25px] text-foreground mb-6 border-b-[0.1rem] border-b-[rgba(0,0,0,0.2)] border-solid pb-4">
          Our Courses
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-start">
          {courses &&
            courses.map((course) => <Course key={course.id} {...course} />)}
        </div>
      </section>
    </>
  );
}
