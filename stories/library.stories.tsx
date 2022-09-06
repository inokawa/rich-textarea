import { useFormik } from "formik";
import { useForm, Controller } from "react-hook-form";
import { RichTextarea } from "../src";

export default {
  title: "with library",
};

const style = { width: "600px", height: "400px" };

export const WithFormik = () => {
  const formik = useFormik({
    initialValues: { text: "Hello formik" },
    onSubmit: (data) => alert(JSON.stringify(data)),
    validate(values) {
      if (!values.text) {
        return { text: "This field is required" };
      }
      if (!values.text.toLowerCase().includes("formik")) {
        return { text: "Text must be include formik" };
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
                color: "formik".includes(t.toLowerCase()) ? "blue" : undefined,
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
};

export const WithReactHookForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      text: "Hello react-hook-form",
    },
  });
  const onSubmit = (data) => alert(JSON.stringify(data));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
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
        <span style={{ color: "red" }}>Text must be include hook</span>
      )}
      <button type="submit">submit</button>
    </form>
  );
};
