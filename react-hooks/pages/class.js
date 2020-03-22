import styles from "./index.css";

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  onChange = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div className={styles.classDome}>
        <h1>Class Dome</h1>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.onChange}>
          Click me
        </button>
      </div>
    );
  }
}
export default Example;
