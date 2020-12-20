import React from 'react';
import { List, NavBar, Icon, WhiteSpace, Button, Flex, WingBlank } from 'antd-mobile';
import { useHistory } from "react-router-dom";

const Item = List.Item;

const ViewVehicleRoute = () => {

  const history = useHistory();

  return (<div>
    <NavBar
      mode="light"
      onLeftClick={() => history.goBack()}
      icon={<Icon type="left" />}
    >Vehicle CAB 2587</NavBar>
    <List>
      <Item extra={'Sedan'}>Type</Item>
      <Item extra={'Tesla'}>Make</Item>
      <Item extra={'Modal X'}>Modal</Item>
      <Item extra={'0123456789'}>Chassis</Item>
      <Item extra={'2000'}>Year Of Manufacture</Item>
      <Item extra={'9912345678V'}>NIC</Item>
    </List>
    <WhiteSpace size="lg" />
    <WingBlank>
      <Flex>
        <Flex.Item>
          <Button type="primary">Check In</Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="warning">Check Out</Button>
        </Flex.Item>
      </Flex>
    </WingBlank>
  </div>);
};

export default ViewVehicleRoute;
