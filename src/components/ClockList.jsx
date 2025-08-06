import Clock from "./Clock";

export default function ClockList({ quantities = [] }) {
    return (
        <>
            {quantities.map((key) => (
                <Clock key={key} />
            ))}
        </>
    );
}
