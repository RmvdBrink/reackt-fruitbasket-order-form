import React from 'react';

function StartButton({children, type, clickHandler, isDisabled}) {
    return (
        <>


            <button type={type}
                    onClick={clickHandler}
                    disabled={isDisabled || false}
                    >{children}</button>




        </>
    );
}

export default StartButton;