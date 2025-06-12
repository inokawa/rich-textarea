import type { StoryObj } from "@storybook/react-vite";
import React from "react";
import { useForm } from "react-hook-form";
import { RichTextarea } from "../../src";

export default {
  component: RichTextarea,
};

const style = { width: "600px", height: "400px" };

export const Default: StoryObj = {
  name: "With React Hook Form",
  render: () => {
    const {
      handleSubmit,
      register,
      formState: { errors },
    } = useForm();

    return (
      <form onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
        <RichTextarea
          {...register("text", {
            required: true,
            validate: (v) => v.toLowerCase().includes("hook"),
          })}
          defaultValue="Hello react-hook-form"
          style={style}
        >
          {(v) => {
            return v.split("").map((t, i) => (
              <span
                key={i}
                style={{
                  color: "hook".includes(t.toLowerCase())
                    ? "violet"
                    : undefined,
                }}
              >
                {t}
              </span>
            ));
          }}
        </RichTextarea>
        {errors.text?.type === "required" && (
          <span style={{ color: "red" }}>This field is required</span>
        )}
        {errors.text?.type === "validate" && (
          <span style={{ color: "red" }}>Text must include hook</span>
        )}
        <button type="submit">submit</button>
      </form>
    );
  },
};
