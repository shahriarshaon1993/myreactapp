import Emoji from "./components/compositions/Emoji";
import Bracket from "./components/compositions/Bracket";
import Text from "./components/compositions/Text";

function App() {
    return (
        <Emoji>
            {({ addEmoji }) => (
                <Bracket>
                    {({ addBracket }) => (
                        <Text addEmoji={addEmoji} addBracket={addBracket} />
                    )}
                </Bracket>
            )}
        </Emoji>
    );
}

export default App;
