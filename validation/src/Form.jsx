import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./Form.css";

const validation = z.object({
  name: z.string().min(2, "min 2 characters").max(25, "max 25 characters"),
  email: z.string().email(),
  password: z
    .string()
    .min(6, "min 6 characters")
    .regex(/[a-z]/, "small character required")
    .regex(/[A-Z]/, "large character required")
    .regex(/[@%&_?$]/, "single special character required"),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validation),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("Form submitted successfully:", data);
  };

  let value = watch();

  const getBorder = (name) => {
    if (errors[name]) {
      return "1px solid red";
    } else if (value[name] && !errors[name]) {
      return "1px solid green";
    } else {
      return "1px solid black";
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          {...register("name")}
          style={{ border: getBorder("name") }}
        />
        {errors.name && <p>{errors.name.message}</p>}
        <br />
        
        <label htmlFor="email">Email</label>
        <input type="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
        <br />
        
        <label htmlFor="password">Password</label>
        <input type="text" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
        <br />
        
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
