import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

export default function Contact() {
  return (
    <>
      <section>
        <div className="flex items-center flex-wrap gap-4">
          <div className="flex-[1_1_500px]">
            <img src="contact-img.svg" alt="" className="w-full" />
          </div>

          <form
            action="#"
            method="post"
            className="flex-[1_1_300px] bg-background p-5 text-center"
          >
            <h3 className="mb-2.5 text-[25px]">Get In Touch</h3>
            <Input
              type="text"
              placeholder="enter your name"
              name="name"
              required
              maxLength={50}
              className="m-[10px_0] p-3.5 text-[18px]"
            />
            <Input
              type="email"
              placeholder="enter your email"
              name="email"
              required
              maxLength={50}
              className="m-[10px_0] p-3.5 text-[18px]"
            />
            <Input
              type="number"
              placeholder="enter your number"
              name="number"
              required
              maxLength={50}
              className="m-[10px_0] p-3.5 text-[18px]"
            />
            <Textarea
              name="msg"
              className="m-[10px_0] p-3.5 text-[18px] h-[200px] resize-none"
              placeholder="enter your message"
              required
              maxLength={1000}
              cols={30}
              rows={10}
            ></Textarea>
            <Button type="submit" size="lg" className="mt-3">
              Send Message
            </Button>
          </form>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-start mt-12">
          <div className="text-center bg-card rounded-[5px] p-[30px]">
            <i className="fas fa-phone text-[30px] mb-2.5"></i>
            <h3 className="text-[20px] m-[10px_0]">phone number</h3>
            <Button variant="link" className="pt-[5px] text-[18px]">
              123-456-7890
            </Button>
            <Button variant="link" className="pt-[5px] text-[18px]">
              111-222-3333
            </Button>
          </div>

          <div className="text-center bg-card rounded-[5px] p-[30px]">
            <i className="fas fa-envelope text-[30px] mb-2.5"></i>
            <h3 className="text-[20px] m-[10px_0]">email address</h3>
            <Button variant="link" className="pt-[5px] text-[18px]">
              admin1@gmail.com
            </Button>
            <Button variant="link" className="pt-[5px] text-[18px]">
              admin2@gmail.com
            </Button>
          </div>

          <div className="text-center bg-card rounded-[5px] p-[30px]">
            <i className="fas fa-map-marker-alt text-[30px] mb-2.5"></i>
            <h3 className="text-[20px] m-[10px_0]">office address</h3>
            <Button variant="link" className="pt-[5px] text-[18px]">
              Lorem ipsum dolor sit amet.
            </Button>
            <Button variant="link" className="pt-[5px] text-[18px]">
              Lorem ipsum dolor sit amet.
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
