

function Bst(props){

    return (
        <>
            <div className="container">

                <div className="node-value">
                    <p>value={props.value}</p>
                </div>
                <div className="node-references">
                    <div className="node-references-left">
                        <p>leftNode= {props.left}</p>
                    </div>
                    <div className="node-references-right">
                        <p>rightNode={props.right}</p>
                    </div>
                </div>
            </div>
        </>
    )


}

export default Bst