import { useForm } from "react-hook-form";

const YouTubeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("form submitted", data);
  };
  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <label htmlFor="username">
          Usernam
          <span className="text-red-500 text-xs ml-2">
            {errors.username?.message}
          </span>
        </label>

        <input
          type="text"
          className="border rounded-md"
          {...register("username", { required: "username is required" })}
        />

        <label htmlFor="email" className="mt-5">
          E-mail
        </label>
        <input
          type="email"
          className="border rounded-md"
          {...register("email", {
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "invalid email",
            },
            validate: {
              notAccepted: (fieldValue) => {
                return fieldValue !== "jk@gmail.com" || "Enter different email";
              },
              badDomain: (fieldValue) => {
                return (
                  !fieldValue.endsWith("baddomain.com") ||
                  "this domain not supported"
                );
              },
            },
          })}
        />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>

        <label htmlFor="channel" className="mt-5">
          Channel
        </label>
        <input
          type="text"
          className="border rounded-md"
          {...register("channel", { required: "channel name is required" })}
        />
        <p className="text-red-500 text-sm">{errors.channel?.message}</p>

        <input type="submit" className="border mt-5 rounded-md " />
      </form>
    </div>
  );
};

export default YouTubeForm;
