import { observer } from 'mobx-react';
import React from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { lazyInject } from '../../../../IoC';
import { LineChartStore } from './LineChartStore';

interface Props {
  key?: string;
}

@observer
class LineChartWidget extends React.Component<Props, any> {
  @lazyInject(LineChartStore)
  private readonly store!: LineChartStore;

  render() {
    return (
      <>
        <ResponsiveContainer width="99%" height="70%">
          <LineChart data={this.store.data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
        </ResponsiveContainer>
        <InputGroup className="mb-3">
          <FormControl
            type="number"
            placeholder="Enter number"
            aria-label="Enter number"
            aria-describedby="basic-addon2"
            onChange={e =>
              (this.store.params.coefficient = Number(e.target.value))
            }
          />
          <InputGroup.Append>
            <Button
              variant="outline-secondary"
              onClick={this.store.multiplyValues}
            >
              Submit
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </>
    );
  }
}

export default LineChartWidget;
