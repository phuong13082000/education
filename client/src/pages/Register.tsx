import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function Register() {
  return (
    <>
      <section className="min-h-[calc(100vh_-_20rem)] flex items-center justify-center">
        <form
          action="#"
          method="post"
          encType="multipart/form-data"
          className="bg-card rounded-[5px] p-5 w-[500px]"
        >
          <h3 className="text-2xl text-center">Register Now</h3>
          <p className="text-[17px] pt-2.5">
            your name <span>*</span>
          </p>
          <Input
            type="name"
            name="name"
            placeholder="enter your name"
            required
            maxLength={50}
            className="m-[10px_0] p-3.5"
          />

          <p className="text-[17px] pt-2.5">
            your email <span>*</span>
          </p>
          <Input
            type="email"
            name="email"
            placeholder="enter your email"
            required
            maxLength={50}
            className="m-[10px_0] p-3.5"
          />

          <p className="text-[17px] pt-2.5">
            your password <span>*</span>
          </p>
          <Input
            type="password"
            name="password"
            placeholder="enter your password"
            required
            maxLength={20}
            className="m-[10px_0] p-3.5"
          />

          <p className="text-[17px] pt-2.5">
            confirm password <span>*</span>
          </p>
          <Input
            type="password"
            name="c_pass"
            placeholder="confirm your password"
            required
            maxLength={20}
            className="m-[10px_0] p-3.5"
          />
          <Button type="submit" className="w-full mt-2.5">
            Register New
          </Button>
        </form>
      </section>
    </>
  );
}
