import type { StoryObj } from "@storybook/react-vite";
import React from "react";
import { useForm } from "@tanstack/react-form";
import { RichTextarea } from "../../src";

export default {
  component: RichTextarea,
};

const style = { width: "600px", height: "400px" };

export const Default: StoryObj = {
  name: "With Tanstack Form",
  render: () => {
    const form = useForm({
      defaultValues: { text: "Hello tanstack" },
      onSubmit: (data) => alert(JSON.stringify(data.value)),
    });
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <form.Field
          name="text"
          validators={{
            onChange: ({ value }) => {
              if (!value) {
                return "This field is required";
              }
              if (!value.toLowerCase().includes("tanstack")) {
                return "Text must include tanstack";
              }
            },
          }}
        >
          {(field) => (
            <>
              <RichTextarea
                style={style}
                name={field.name}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
              >
                {(v) => {
                  return v.split("").map((t, i) => (
                    <span
                      key={i}
                      style={{
                        color: "tanstack".includes(t.toLowerCase())
                          ? "tan"
                          : undefined,
                      }}
                    >
                      {t}
                    </span>
                  ));
                }}
              </RichTextarea>
              {field.state.meta.errors && (
                <span style={{ color: "red" }}>
                  {field.state.meta.errors.join(", ")}
                </span>
              )}
            </>
          )}
        </form.Field>
        <button type="submit">submit</button>
      </form>
    );
  },
};
