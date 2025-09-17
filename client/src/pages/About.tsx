import { Button } from "../components/ui/button";

const reviews = [
  {
    id: 1,
    star: 0.5,
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur. Sed ullam iusto eveniet qui aut quibusdam vero voluptate liberofacilis fuga. Eligendi eaque molestiae modi?",
    author: {
      name: "ano puty",
      avatar: "pic-2.jpg",
    },
  },
  {
    id: 2,
    star: 1.5,
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur. Sed ullam iusto eveniet qui aut quibusdam vero voluptate liberofacilis fuga. Eligendi eaque molestiae modi?",
    author: {
      name: "ano puty",
      avatar: "pic-3.jpg",
    },
  },
  {
    id: 3,
    star: 2.5,
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur. Sed ullam iusto eveniet qui aut quibusdam vero voluptate liberofacilis fuga. Eligendi eaque molestiae modi?",
    author: {
      name: "ano puty",
      avatar: "pic-4.jpg",
    },
  },
  {
    id: 4,
    star: 3.5,
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur. Sed ullam iusto eveniet qui aut quibusdam vero voluptate liberofacilis fuga. Eligendi eaque molestiae modi?",
    author: {
      name: "ano puty",
      avatar: "pic-5.jpg",
    },
  },
  {
    id: 5,
    star: 4.5,
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur. Sed ullam iusto eveniet qui aut quibusdam vero voluptate liberofacilis fuga. Eligendi eaque molestiae modi?",
    author: {
      name: "ano puty",
      avatar: "pic-6.jpg",
    },
  },
  {
    id: 6,
    star: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur. Sed ullam iusto eveniet qui aut quibusdam vero voluptate liberofacilis fuga. Eligendi eaque molestiae modi?",
    author: {
      name: "ano puty",
      avatar: "pic-7.jpg",
    },
  },
];

function StarRating({ rating }: { rating: number }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    } else if (rating >= i - 0.5) {
      stars.push(<i key={i} className="fas fa-star-half-alt"></i>);
    } else {
      stars.push(<i key={i} className="far fa-star"></i>);
    }
  }

  return stars;
}

export default function About() {
  return (
    <>
      <section>
        <div className="flex items-center flex-wrap gap-4">
          <div className="flex-[1_1_40px]">
            <img src="about-img.svg" alt="" className="w-full h-[500px]" />
          </div>

          <div className="flex-[1_1_40px]">
            <h3 className="text-3xl text-foreground">Why Choose Us?</h3>
            <p className="text-[17px] leading-loose text-foreground p-[10px_0]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
              dolorum quasi illo? Distinctio expedita commodi, nemo a quam error
              repellendus sint, fugiat quis numquam eum eveniet sequi aspernatur
              quaerat tenetur.
            </p>
            <Button>Our Courses</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-start mt-8">
          <div className="rounded-[5px] bg-card p-5 flex items-center gap-6">
            <i className="fas fa-graduation-cap text-[40px]"></i>
            <div>
              <h3 className="text-[25px] mb-1">+10k</h3>
              <p className="text-[17px]">online courses</p>
            </div>
          </div>

          <div className="rounded-[5px] bg-card p-5 flex items-center gap-6">
            <i className="fas fa-user-graduate text-[40px]"></i>
            <div>
              <h3 className="text-[25px] mb-1">+40k</h3>
              <p className="text-[17px]">brilliant students</p>
            </div>
          </div>

          <div className="rounded-[5px] bg-card p-5 flex items-center gap-6">
            <i className="fas fa-chalkboard-user text-[40px]"></i>
            <div>
              <h3 className="text-[25px] mb-1">+2k</h3>
              <p className="text-[17px]">expert tutors</p>
            </div>
          </div>

          <div className="rounded-[5px] bg-card p-5 flex items-center gap-6">
            <i className="fas fa-briefcase text-[40px]"></i>
            <div>
              <h3 className="text-[25px] mb-1">100%</h3>
              <p className="text-[17px]">job placement</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h1 className="text-[25px] text-foreground mb-6 border-b-[0.1rem] border-b-[rgba(0,0,0,0.2)] border-solid pb-4">
          Student's Reviews
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-start">
          {reviews &&
            reviews.map((item, id) => (
              <div className="rounded-[5px] bg-card p-5" key={id}>
                <p className="leading-[1.7] text-[17px]">{item.review}</p>
                <div className="mt-5 flex items-center gap-4">
                  <img
                    src={item.author.avatar}
                    alt={item.author.name}
                    className="size-[50px] object-cover rounded-full"
                  />
                  <div>
                    <h3 className="text-[20px] mb-1">{item.author.name}</h3>
                    <div className="text-[15px] text-yellow-500">
                      <StarRating rating={item.star} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}
