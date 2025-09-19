import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function UpdateProfile() {
  return (
    <>
      <section className="min-h-[calc(100vh_-_20rem)] flex items-center justify-center">
        <form
          action="#"
          method="post"
          encType="multipart/form-data"
          className="bg-card rounded-[5px] p-5 w-[500px]"
        >
          <h3 className="text-2xl text-center">Update Profile</h3>

          <p className="text-[17px] pt-2.5">update name</p>
          <Input
            type="text"
            name="name"
            placeholder="shaikh anas"
            maxLength={50}
            className="m-[10px_0] p-3.5"
          />

          <p className="text-[17px] pt-2.5">update email</p>
          <Input
            type="email"
            name="email"
            placeholder="shaikh@gmail.come"
            maxLength={50}
            className="m-[10px_0] p-3.5"
          />

          <p className="text-[17px] pt-2.5">previous password</p>
          <Input
            type="password"
            name="old_pass"
            placeholder="enter your old password"
            maxLength={20}
            className="m-[10px_0] p-3.5"
          />

          <p className="text-[17px] pt-2.5">new password</p>
          <Input
            type="password"
            name="new_pass"
            placeholder="enter your old password"
            maxLength={20}
            className="m-[10px_0] p-3.5"
          />

          <p className="text-[17px] pt-2.5">confirm password</p>
          <Input
            type="password"
            name="c_pass"
            placeholder="confirm your new password"
            maxLength={20}
            className="m-[10px_0] p-3.5"
          />

          <p className="text-[17px] pt-2.5">update pic</p>
          <Input type="file" accept="image/*" className="m-[10px_0]" />

          <Button type="submit" className="mt-2.5">Update Profile</Button>
        </form>
      </section>
    </>
  );
}
