import * as React from "react";

export interface Props {
  values: number[];
}

export class Breadcrumb extends React.PureComponent<Props> {
  render() {
    const { values } = this.props;
    return (
      <div className="breadcrumb">
        <ul>
          {values.map((num, i) => <li key={i}>{num.toFixed(3)}</li>)}
        </ul>
      </div>
    );
  }
}
