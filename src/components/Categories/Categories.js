// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { FiChevronRight } from "react-icons/fi";
// import "./Categories.css";

// const Categories = () => {
//   const [jobs, setJobs] = useState([]);
//   const [categories, setCategories] = useState([]);
//   useEffect(() => {
//     fetch("https://still-cliffs-68775.herokuapp.com/jobs")
//       .then((res) => res.json())
//       .then((data) => {
//         const categoryList = data.map((category) => category.category);
//         console.log(categoryList);
//         const uniqueCategories = [...new Set(categoryList)];

//         let categoriesJobsList = [];
//         for (let categoryName of uniqueCategories) {
//           const similarCategories = categoryList.filter(
//             (category) => category === categoryName
//           );
//           const jobCategory = {
//             categoryName: categoryName,
//             totaljobs: similarCategories.length,
//           };
//           categoriesJobsList.push(jobCategory);
//         }
//         setCategories(categoriesJobsList);
//       });
//   }, []);

//   return (
//     <div className="category-container">
//       {/* <h2 className="text-center mb-3">Find a Job in Your Field</h2> */}
//       <div className="cardbg">
//         <div className="category-bg row row-cols-lg-3 row-cols-md-3 row-cols-1 justify-content-center">
//           {categories.map((category) => (
//             <div>
//               <div class="box my-3">
//                 <h3 className="justify-content-between">
//                   <Link
//                     className="category-title"
//                     to={`/categoryjobs/${category.categoryName}`}
//                   >
//                     {category}
//                   </Link>
//                   <FiChevronRight style={{ color: "brown" }} />
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Categories;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdDoubleArrow } from "react-icons/md";
import "./Categories.css";

const Categories = () => {
  const [jobs, setJobs] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://still-cliffs-68775.herokuapp.com/jobs")
      .then((res) => res.json())
      .then((data) => {
        const categoryList = data.map((category) => category.category);
        console.log(categoryList);
        const uniqueCategories = [...new Set(categoryList)];

        let categoriesJobsList = [];
        for (let categoryName of uniqueCategories) {
          const similarCategories = categoryList.filter(
            (category) => category === categoryName
          );
          const jobCategory = {
            categoryName: categoryName,
            totaljobs: similarCategories.length,
          };
          categoriesJobsList.push(jobCategory);
        }
        setCategories(categoriesJobsList);
      });
  }, []);

  return (
    <div className="category-container">
      {/* <h2 className="text-center mb-3">Find a Job in Your Field</h2> */}
      <div className="cardbg">
        <div className="category-bg row row-cols-lg-3 row-cols-md-3 row-cols-1">
          {categories.map((category) => (
            <div>
              <div class="box text-center my-3">
                <h3>
                  <Link
                    className="category-title"
                    to={`/categoryjobs/${category.categoryName}`}
                  >
                    {category.categoryName}
                    <span className="jobcount">{category.totaljobs}</span>
                    <MdDoubleArrow
                      className="ms-3"
                      style={{ color: "brown" }}
                    />
                  </Link>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
