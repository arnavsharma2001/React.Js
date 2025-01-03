import React from 'react';

function Button({children,goClick,text}) {
    return (
        <div>
            {children}
            <button onClick={goClick}>
                {text}
            </button>
            
        </div>
    );
}

export default Button;


// import React from 'react';

// function Button(props) {
//     return (
//         <div>
//             {props.children}
//             <button onClick={props.goClick}>
//                 {props.text}
//             </button>
            
//         </div>
//     );
// }

// export default Button;