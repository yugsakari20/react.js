import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const validation = z.object({
  studentName: z.string().min(2, "min 2 characters").max(25, "max 25 characters"),
  studentEmail: z.string().email(),
  studentPassword: z
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

  const createStudent = async ({ studentName, studentEmail, studentPassword }) => {
    let res = await axios.post("http://localhost:3000/student", {
      username: studentName,
      email: studentEmail,
      password: studentPassword,
    });
    console.log(res);
  };

  const onSubmit = (data) => {
    if (data) {
      createStudent(data);
    }
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
        <label htmlFor="">Student Name</label>
        <input
          type="text"
          {...register("studentName")}
        />
        {errors.studentName && <p>{errors.studentName.message}</p>}
        <br />
        <label>Student Email: </label>
        <input type="email" {...register("studentEmail")} />
        {errors.studentEmail && <p>{errors.studentEmail.message}</p>}
        <br />
        <label htmlFor="">Student Password</label>
        <input type="text" {...register("studentPassword")} />
        {errors.studentPassword && <p>{errors.studentPassword.message}</p>}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
