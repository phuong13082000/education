import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";

const reviews = [
  {
    id: 1,
    author: {
      name: "shaikh asna",
      createdAt: "22-10-2022",
      avatar: "pic-1.jpg",
    },
    comment: "this is a comment",
  },
  {
    id: 2,
    author: {
      name: "shaikh asna",
      createdAt: "22-10-2022",
      avatar: "pic-2.jpg",
    },
    comment: "this is a comment",
  },
  {
    id: 3,
    author: {
      name: "shaikh asna",
      createdAt: "22-10-2022",
      avatar: "pic-3.jpg",
    },
    comment: "this is a comment",
  },
  {
    id: 4,
    author: {
      name: "shaikh asna",
      createdAt: "22-10-2022",
      avatar: "pic-4.jpg",
    },
    comment: "this is a comment",
  },
  {
    id: 5,
    author: {
      name: "shaikh asna",
      createdAt: "22-10-2022",
      avatar: "pic-5.jpg",
    },
    comment: "this is a comment",
  },
  {
    id: 6,
    author: {
      name: "shaikh asna",
      createdAt: "22-10-2022",
      avatar: "pic-2.jpg",
    },
    comment: "this is a comment",
  },
];

export default function WatchVideo() {
  return (
    <>
      <section>
        <div className="rounded-[5px] p-5">
          <div className="relative mb-4">
            <video
              src="vid-1.mp4"
              controls
              poster="post-1-1.png"
              id="video"
              className="rounded-[5px] w-full object-contain"
            ></video>
          </div>

          <h3 className="text-[20px]">complete HTML tutorial (part 01)</h3>

          <div className="flex mt-4 mb-5 border-b-1 border-b-border border-solid pb-4 gap-6 items-center">
            <p className="text-[16px]">
              <i className="fas fa-calendar mr-2.5"></i>
              <span>22-10-2022</span>
            </p>
            
            <p className="text-[16px]">
              <i className="fas fa-heart mr-2.5"></i>
              <span>44 likes</span>
            </p>
          </div>

          <div className="flex items-center gap-5 mb-2.5">
            <img
              src="pic-2.jpg"
              alt=""
              className="rounded-full h-[50px] w-[50px] object-cover"
            />
            <div>
              <h3 className="text-[20px] mb-0.5">john deo</h3>
              <span className="text-[15px]">developer</span>
            </div>
          </div>

          <form
            action="#"
            method="post"
            className="flex items-center justify-between gap-4"
          >
            <Button className="p-[10px_15px] text-[18px]">
              <Link to="/playlist">View Playlist</Link>
            </Button>

            <Button className="p-[10px_15px] text-[18px]">
              <i className="far fa-heart mr-2.5"></i>
              <span>Like</span>
            </Button>
          </form>

          <p className="leading-[1.5] text-[17px] mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
            labore ratione, hic exercitationem mollitia obcaecati culpa dolor
            placeat provident porro. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Aliquid iure autem non fugit sint. A, sequi rerum
            architecto dolor fugiat illo, iure velit nihil laboriosam cupiditate
            voluptatum facere cumque nemo!
          </p>
        </div>
      </section>

      <section>
        <h1 className="heading">5 comments</h1>

        <form action="#" className="bg-card rounded-[5px] p-5 mb-[30px]">
          <h3 className="text-[20px] mb-2.5">Add Comments</h3>
          <Textarea
            name="comment_box"
            placeholder="enter your comment"
            required
            className="h-[200px] resize-none m-[5px_0]"
          ></Textarea>

          <Button type="submit" className="mt-3">
            Add Comment
          </Button>
        </form>

        <h1 className="heading">User Comments</h1>

        <div className="grid gap-6 bg-card p-5 rounded-[5px]">
          {reviews &&
            reviews.map((item, id) => (
              <div key={id}>
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={item.author.avatar}
                    alt=""
                    className="h-[50px] w-[50px] rounded-full"
                  />
                  <div>
                    <h3 className="text-[20px] mb-0.5">{item.author.name}</h3>
                    <span className="text-[15px]">{item.author.createdAt}</span>
                  </div>
                </div>

                <div
                  className="
                relative z-0 rounded-[5px] bg-border p-[10px_15px] m-[5px_0] text-[18px] leading-[1.5] whitespace-pre-line
                before:content-[''] before:absolute before:top-[-12px] before:left-[15px]
                before:h-[12px] before:w-5 before:bg-border before:[clip-path:polygon(50%_0%,0%_100%,100%_100%)]
              "
                >
                  {item.comment}
                </div>

                <form action="#" className="flex gap-2.5">
                  <Button type="submit" className="mt-2.5">
                    Edit Comment
                  </Button>

                  <Button
                    type="submit"
                    variant="destructive"
                    className="mt-2.5"
                  >
                    Delete Comment
                  </Button>
                </form>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}
