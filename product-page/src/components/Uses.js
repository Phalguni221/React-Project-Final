
export default function Uses (props) {
    const listReasons = props.reasons.map((eachReasons) => <li>{eachReasons}</li>)
    return (
        <div className="instructions">
            <title>Uses of REST-RANT</title>
        <ol>
            <li>Informs users of different restaurants of various cuisines</li>
            <li>Users can easily comment about the restaruant that they have eaten at</li>
            <li>Showcases the advancement and usage of Back-End development techniques and APIs for realife application</li>
        </ol>
         <p>What other uses do you think are relevant? List them below</p>
         <ul>{listReasons}</ul>
        </div>
    )

    }