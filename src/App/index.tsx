import React from 'react';
import Dashboard from './components/Dashboard';
import { DropdownButton, Row, Dropdown, Tab, Nav } from 'react-bootstrap';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
export default class App extends React.Component<any, any> {
  @observable currentDashboard = 0;
  @observable dashboards = [0];

  @action
  addDashboard = () => {
    this.dashboards.push(this.dashboards.length);
    this.currentDashboard = this.dashboards.length - 1;
  };

  render() {
    return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="0">
        <header className="mb-2 mr-5 mt-3">
          <Row>
            <DropdownButton
              id="dropdown-item-button"
              title={`Dashboard №${this.currentDashboard + 1}`}
            >
              <Nav variant="pills" className="flex-column">
                {this.dashboards.map((value, index) => (
                  <Dropdown.Item
                    onClick={() => (this.currentDashboard = index)}
                    as="button"
                    id={index}
                  >
                    <Nav.Item>
                      <Nav.Link eventKey={index}>
                        {' '}
                        Dashboard №{index + 1}
                      </Nav.Link>
                    </Nav.Item>
                  </Dropdown.Item>
                ))}
                <Dropdown.Item as="button" onClick={this.addDashboard}>
                  <Nav.Item>
                    <Nav.Link eventKey={this.dashboards.length}>
                      {' '}
                      Add Dashboard
                    </Nav.Link>
                  </Nav.Item>
                </Dropdown.Item>
              </Nav>
            </DropdownButton>
          </Row>
        </header>
        <Tab.Content>
          {this.dashboards.map((value, index) => {
            return (
              <Tab.Pane eventKey={index}>
                <Dashboard />
              </Tab.Pane>
            );
          })}
        </Tab.Content>
      </Tab.Container>
    );
  }
}
