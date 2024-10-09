import { ErrorMessage, Field, Form, Formik } from "formik";
import { FeedbackSchema } from "../../utils/schema";
import styles from "./ContactForm.module.css";

const ContactForm = (props) => {
  const { addingСontacts } = props;

  const value = {
    name: "",
    number: "",
  };

  const fieldValue = (value, actions) => {
    addingСontacts(value);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={value}
      validationSchema={FeedbackSchema}
      onSubmit={fieldValue}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          <span>Name</span>
          <Field className={styles.input} type="text" name="name" />
          <ErrorMessage
            className={styles.errorMessage}
            name="name"
            component="span"
          />
        </label>
        <label className={styles.label}>
          <span>Number</span>
          <Field className={styles.input} type="text" name="number" />
          <ErrorMessage
            className={styles.errorMessage}
            name="number"
            component="span"
          />
        </label>
        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
