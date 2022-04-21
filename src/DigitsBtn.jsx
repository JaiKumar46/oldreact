
import React from 'react'

const DigitsBtn = (dispatch, digits) => {
    return <div>
      <button onClick={() => dispatch({
          type:Actions.Add_digits ,pay:{digits}
        })}>{digits} </button>
  </div>;
};

export default DigitsBtn