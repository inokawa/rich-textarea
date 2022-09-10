import { StoryObj } from "@storybook/react";
import { useFormik } from "formik";
import { RichTextarea } from "../../src";

export default {
  component: RichTextarea,
};

const style = { width: "600px", height: "400px" };

export const WithFormik: StoryObj = {
  render: () => {
    const formik = useFormik({
      initialValues: { text: "Hello formik" },
      onSubmit: (data) => alert(JSON.stringify(data)),
      validate(values) {
        if (!values.text) {
          return { text: "This field is required" };
        }
        if (!values.text.toLowerCase().includes("formik")) {
          return { text: "Text must include formik" };
        }
      },
    });
    return (
      <form onSubmit={formik.handleSubmit}>
        <RichTextarea
          style={style}
          name="text"
          onChange={formik.handleChange}
          value={formik.values.text}
        >
          {(v) => {
            return v.split("").map((t, i) => (
              <span
                key={i}
                style={{
                  color: "formik".includes(t.toLowerCase())
                    ? "blue"
                    : undefined,
                }}
              >
                {t}
              </span>
            ));
          }}
        </RichTextarea>
        {formik.errors.text && (
          <span style={{ color: "red" }}>{formik.errors.text}</span>
        )}
        <button type="submit">submit</button>
      </form>
    );
  },
};
