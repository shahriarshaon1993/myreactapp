import WithCounter from "./HOC/WithCounter";

const HoverCounter = (props) => {
    const { count, incrementCount } = props;

    return (
        <div>
            <h1 onMouseOver={incrementCount}>Hovered {count} Times</h1>
        </div>
    );
};

export default WithCounter(HoverCounter);
