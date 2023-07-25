const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    ); 
};

// O Action de cima e de baixo são iguais. Da pra fazer do jeito de cima quando é stateless. O jeito de cima é mais leve.

// class Action extends React.Component {
//     render() {
//       return (
//         <div>
//             <button
//                 onClick={this.props.handlePick}
//                 disabled={!this.props.hasOptions}
//             >
//                 What should I do?
//             </button>
//         </div>
//       );  
//     }
// }