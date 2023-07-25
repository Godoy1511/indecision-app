class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleVisibilityToggle() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleVisibilityToggle}>
                    {this.state.visibility ? "Hide details" : "Show details"}
                </button>
                {this.state.visibility &&
                    <div>
                        <p>Details for you, bitch!</p>
                    </div>
                }
            </div>
        );
    }
};

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"))


// console.log("Visibility Toggle App")

// const appRoot = document.getElementById('app');

// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility
//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>
//                 {visibility ? "Hide details" : "Show details"}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>Hey. These are some details you can now see!</p>
//                 </div>
//             )}
//         </div>
//     )
//     ReactDOM.render(template, appRoot);
// };

// render();


