import React, { useContext } from "react";
import { Formik } from "formik";
import { Helmet } from "react-helmet-async";
import MainContext from "../../../context/context";
import axios from "axios";


const Add = () => {
  const { data, setData } = useContext(MainContext);

  return (
    <div>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <Formik
        initialValues={{ image: "", title: "", price: "", description: "", category: "men" }}
        onSubmit={(values, { resetForm }) => {
          axios
            .post("http://localhost:5000/api/shoppers", {
              title: values.title,
              price: values.price,
              image: values.image,
              description: values.description,
              category: values.category,
            })
            .then((res) => {
              setData([...data, res.data]);
              resetForm();
            })
            .catch((error) => {
              console.error("There was an error adding the product!", error);
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form
            className="container pt-5 d-flex flex-column gap-5 "
            onSubmit={handleSubmit}
          >
            
            <input
              type="text"
              name="title"
              placeholder="Enter title"
              className="form-control"
              id="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            {errors.title && touched.title && <div className="text-danger">{errors.title}</div>}

           
            <input
              type="text"
              name="description"
              placeholder="Enter description"
              className="form-control"
              id="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            {errors.description && touched.description && <div className="text-danger">{errors.description}</div>}

            
            <input
              type="text"
              name="image"
              placeholder="Enter image url"
              className="form-control"
              id="image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image}
            />
            {errors.image && touched.image && <div className="text-danger">{errors.image}</div>}

            
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Enter price"
              className="form-control"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
            />
            {errors.price && touched.price && <div className="text-danger">{errors.price}</div>}

           
            <button style={{width:"100px"}} className="btn btn-primary mt-3" type="submit">
              ADD
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Add;