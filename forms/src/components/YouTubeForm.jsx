import { useForm } from "react-hook-form";

const YouTubeForm = () => {
  const form = useForm();

  return (
    <div className="max-w-md mx-auto mt-10">
      <form action="" className="flex flex-col">
        <label htmlFor="username">Usernam</label>
        <input type="text" name="username" className="border rounded-md" />

        <label htmlFor="email" className="mt-5">
          E-mail
        </label>
        <input type="email" name="email" className="border rounded-md" />

        <label htmlFor="channel" className="mt-5">
          Channel
        </label>
        <input type="text" name="channel" className="border rounded-md" />

        <input type="submit" className="border mt-5 rounded-md " />
      </form>
    </div>
  );
};

export default YouTubeForm;
