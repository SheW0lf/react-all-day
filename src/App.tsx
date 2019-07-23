import * as React from "react";
import { connect } from "react-redux";
import "./App.css";
import { RootState } from "./redux/reducers";
import { INCREMENT } from "./redux/constants";

interface ConnectProps {
  counter: number;
  dispatch: any; //needed to add dispatch to props, but wasn't sure what Typescript would 'type' it as.
}

type Props = {} & ConnectProps;

export class App extends React.PureComponent<Props> {
  render() {
    return (
      <>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Counter App</h1>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="level">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Counter</p>
                <p className="title">{this.props.counter}</p>
              </div>
            </div>
          </div>
          {/* Challenge 5: <div className="notification is-danger" /> */}
          <div className="field is-grouped">
            <p className="control">
              <button className="button" id="increment-btn" onClick={() => this.props.dispatch({ type: INCREMENT, payload: this.props.counter})}>
                Click to increment
              </button>
            </p>
            <p className="control">
              <button className="button" id="delay-increment-btn">
                Click to increment slowly
              </button>
            </p>
            <p className="control">
              <button className="button" id="remote-fetch-btn">
                Click to fetch server-side
              </button>
            </p>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  counter: state.counter.value
});


export default connect(mapStateToProps)(App);
