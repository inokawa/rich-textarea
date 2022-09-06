import { useFormik } from "formik";
import { RichTextarea } from "../src";

export default {
  title: "with library",
};

const style = { width: "600px", height: "400px" };

export const WithFormik = () => {
  const formik = useFormik({
    initialValues: { text: "Hello formik" },
    onSubmit: (data) => alert(JSON.stringify(data)),
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
      <button type="submit">submit</button>
    </form>
  );
};
