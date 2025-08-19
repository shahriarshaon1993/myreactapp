import WithCounter from "./HOC/WithCounter";

const ClickCounter = (props) => {
    const { count, incrementCount } = props;

    return (
        <div>
            <button type="button" onClick={incrementCount}>
                Clicked {count} Times
            </button>
        </div>
    );
};

export default WithCounter(ClickCounter);
