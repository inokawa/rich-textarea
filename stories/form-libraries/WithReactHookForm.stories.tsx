import { StoryObj } from "@storybook/react";
import { useForm, Controller } from "react-hook-form";
import { RichTextarea } from "../../src";

export default {
  component: RichTextarea,
};

const style = { width: "600px", height: "400px" };

export const WithReactHookForm: StoryObj = {
  render: () => {
    const {
      handleSubmit,
      control,
      formState: { errors },
    } = useForm();
    return (
      <form onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
        <Controller
          defaultValue="Hello react-hook-form"
          control={control}
          name="text"
          rules={{
            required: true,
            validate: (v) => v.toLowerCase().includes("hook"),
          }}
          render={({ field: { ref, onChange, onBlur, value } }) => (
            <RichTextarea
              ref={ref}
              value={value}
              style={style}
              onChange={onChange}
              onBlur={onBlur}
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
          )}
        />
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
