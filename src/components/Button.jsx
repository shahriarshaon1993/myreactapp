import React from "react";

class Button extends React.Component {
    shouldComponentUpdate(nextProps) {
        const { change: currentChange, locale: currentLocale } = this.props;
        const { change: nextChange, locale: nextLocal } = nextProps;

        if (currentChange === nextChange && currentLocale === nextLocal) {
            return false;
        }

        return true;
    }

    render() {
        const { change, locale, show } = this.props;

        return (
            <>
                <button type="button" onClick={() => change(locale)}>
                    {locale === "bn-BD" ? "Change Click" : "ঘড়ি পরিবর্তন করুন"}
                </button>

                <p>{show && "Hello, I am true!"}</p>
            </>
        );
    }
}

export default Button;
