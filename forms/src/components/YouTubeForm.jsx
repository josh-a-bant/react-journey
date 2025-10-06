import { useForm } from "react-hook-form";

const YouTubeForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    await delay(2);
    console.log(data);

    if (data.username === "amit" || data.username === "kanhu") {
      setError("myForm", { message: "This user is blocked" });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      {isSubmitting && <div>loading...</div>}

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <label htmlFor="username">
          User Name{" "}
          {errors.username && (
            <span className="text-red-500 text-xs">
              {errors.username.message}
            </span>
          )}
        </label>
        <input
          type="text"
          className="border"
          placeholder="enter username"
          {...register("username", {
            required: { value: true, message: "username is required" },
            minLength: { value: 3, message: "min length is 3" },
            maxLength: { value: 8, message: "max length is 8" },
          })}
        />

        <label htmlFor="password">
          Password{" "}
          {errors.password && (
            <span className="text-red-500 text-xs">
              {errors.password.message}
            </span>
          )}
        </label>
        <input
          type="password"
          className="border"
          placeholder="enter password"
          {...register("password", {
            required: { value: true, message: "password is required" },
            minLength: { value: 5, message: "min length of password is 5" },
          })}
        />

        <input
          disabled={isSubmitting}
          type="submit"
          value="Submit"
          className="border mt-4 bg-gray-400"
        />
        {errors.myForm && (
          <span className="text-red-500 text-xs">{errors.myForm.message}</span>
        )}
      </form>
    </div>
  );
};

export default YouTubeForm;
