// import React from 'react';
// import { Component } from 'react';
//
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         {this.props.children}
//       </div>
//     );
//   }
// }

export default React => ({ ...props }) =>
 <div>
   { props.children }
 </div> ;

// export default React => ({ ...props }) => {
//   const myApp = () =>
//       <div>
//         { props.children }
//       </div>
//   ;
//   myApp.propTypes = {
//     children: React.PropTypes.node
//   };
//
//   return myApp;
// };

 // export default React => {
 //
 //   const {
 //     string, shape, func
 //   } = React.PropTypes;
 //
 //   const hello = ({ helloClass, subject = 'World', actions: { setMode } }) => {
 //     return (
 //       <p className={ helloClass } onClick={ () => setMode('edit') }>Hello, { subject }!</p>
 //     );
 //   };
 //
 //   hello.propTypes = {
 //     helloClass: string.isRequired,
 //     subject: string,
 //     actions: shape({
 //       setMode: func.isRequired
 //     })
 //   };
 //
 //   return hello;
 // };
