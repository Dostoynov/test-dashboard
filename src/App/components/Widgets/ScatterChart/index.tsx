import { observer } from 'mobx-react';
import React from 'react';
import {
  ResponsiveContainer,
  ScatterChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Scatter,
} from 'recharts';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { lazyInject } from '../../../../IoC';
import { ScatterChartStore } from './ScatterChartStore';

interface Props {
  key?: string;
}

@observer
class ScatterChartWidget extends React.Component<Props, any> {
  @lazyInject(ScatterChartStore)
  private readonly store!: ScatterChartStore;

  render() {
    return (
      <>
        <ResponsiveContainer width="99%" height="70%">
          <ScatterChart>
            <XAxis type="number" dataKey="x" name="stature" unit="cm" />
            <YAxis type="number" dataKey="y" name="weight" unit="kg" />
            <CartesianGrid />
            <Scatter name="A school" data={this.store.data} fill="#ff7300" />
          </ScatterChart>
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

export default ScatterChartWidget;
