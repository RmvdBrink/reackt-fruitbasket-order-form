import React from 'react';
import "./stylesbutton.css";
function Buttons({fruitValue, type, fruitName, decrement, increment, isDisabled, classEnabled, classEnabledIn }) {
    return (
        <>
            <h2>{fruitName}</h2>
            <button
            type={type}
            onClick={decrement}
            className={classEnabled}
            disabled={isDisabled}
            >-</button>
            {fruitValue}
        <button
            type={type}
            onClick={increment}
            className={classEnabledIn}
        >+</button>
        </>
    );
}

export default Buttons;
//manier van school mee functies aan de component kant
// import React from 'react';
// import Button from './Button';
//
// function Counter({ setFruitCount, fruitCount }) {
//     return (
//         <>
//             <Button type="button" disabled={fruitCount === 0} clickHandler={() => setFruitCount(fruitCount - 1)}>
//                 -
//             </Button>
//             <p>{fruitCount}</p>
//             <Button type="button" clickHandler={() => setFruitCount(fruitCount + 1)}>
//                 +
//             </Button>
//         </>
//     );
// }
//
// export default Counter;

//
// <h2>🍓Aardbeien</h2>
// <button type="button" disabled={stateStraw === 0} onClick={() => setStateStraw(stateStraw - 1)}>
//     -
// </button>
// <p>{stateStraw}</p>
// <button type="button" onClick={() => setStateStraw(stateStraw + 1)}>
//     +
// </button>