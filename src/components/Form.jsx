import React from "react";

class Form extends React.Component {
    state = {
        title: "JavaScript",
        text: "JavaScript is awesome",
        library: "React",
        isAwesome: true,
    };

    handleChange = (e) => {
        if (e.target.name === "title") {
            this.setState({
                title: e.target.value,
            });
        } else if (e.target.name === "text") {
            this.setState({
                text: e.target.value,
            });
        } else if (e.target.name === "library") {
            this.setState({
                library: e.target.value,
            });
        } else if (e.target.name === "isAwesome") {
            this.setState({
                isAwesome: e.target.checked,
            });
        } else {
            console.log("nothing here");
        }
    };

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    render() {
        const { title, text, library, isAwesome } = this.state;

        return (
            <>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter title"
                            value={title}
                            onChange={this.handleChange}
                        />
                    </div>
                    <br />
                    <div>
                        <textarea
                            name="text"
                            value={text}
                            onChange={this.handleChange}
                        />
                    </div>
                    <br />
                    <div>
                        <select
                            name="library"
                            value={library}
                            onChange={this.handleChange}
                        >
                            <option value="React">React</option>
                            <option value="VueJs">VueJs</option>
                        </select>
                    </div>
                    <br />
                    <div>
                        <input
                            type="checkbox"
                            name="isAwesome"
                            checked={isAwesome}
                            onChange={this.handleChange}
                        />
                    </div>
                    <br />
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </>
        );
    }
}

export default Form;
