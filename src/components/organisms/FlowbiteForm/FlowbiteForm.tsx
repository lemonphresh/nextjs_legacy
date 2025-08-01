"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";

const FlowbiteForm: React.FC = () => {
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email1") as string;
    const password = formData.get("password1") as string;

    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // clear errors and handle form submission
    setErrors({});
    const data = {
      email,
      password,
      remember: formData.get("remember") === "on",
    };
    console.log("Form submitted:", data);
  };

  return (
    <form
      noValidate // disable browser's built-in validation
      className="flex max-w-md flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1">Your email</Label>
        </div>
        <TextInput
          color={errors.email ? "failure" : undefined}
          id="email1"
          name="email1"
          placeholder="name@flowbite.com"
          type="email"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1">Your password</Label>
        </div>
        <TextInput
          color={errors.password ? "failure" : undefined}
          id="password1"
          name="password1"
          type="password"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" name="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default FlowbiteForm;
