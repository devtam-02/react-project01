import React from "react";
import logo from "../logo.svg";
import "../App.scss";
// class Testss extends React.Component {
//   handleClick = () => {
//     console.log(this.state);
//   };
//   handleOnChangeName = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };
//   render() {
//     console.log(">>> call render: ", this.props);
//     let { name, age, address, arr } = this.props;
//     return (
//       <>
//         <div className="job-list">
//           {arr.map((item, index) => {
//             return (
//               <div key={item.id}>
//                 {item.name} : {item.des}
//               </div>
//             );
//           })}
//         </div>
//       </>
//     );
//   }
// }
const Testss = (props) => {
  let { name, age, address, arr } = props;
  return (
    <>
      <div className="job-list">
        {arr.map((item, index) => {
          return (
            <div key={item.id}>
              {item.name} : {item.des}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Testss;
