import React from 'react';
export default function DigitsBtn(dispatch, Operation) {
    
        return( 
      < div >
            <button onClick={() => dispatch({
                type: Actions.Choose, pay: { Operation }
            })}>{Operation} </button>
       </div >  
        
    );

}
// import React from 'react'

// const OperationBtn = (dispatch, Operation) => {
//   return (
//       <div> <button onClick={() => dispatch({
//           type: Actions.Choose
//       , pay: { Operation }
//             })}>{Operation} </button></div>
//   )
// }

// export default OperationBtn


