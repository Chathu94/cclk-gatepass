import React, { useState } from 'react';
import { List, NavBar, Icon, Button, InputItem, Drawer, WingBlank, Flex, WhiteSpace, Modal } from 'antd-mobile';
import { useHistory, Link } from "react-router-dom";
import './home.css';

const prompt = Modal.prompt;
const Item = List.Item;
const Brief = Item.Brief;

const sidebar = (<div>
  <WhiteSpace size="lg" />
  <WingBlank>
    <Flex>
      <img className="profile-image" src="https://www.nailseatowncouncil.gov.uk/wp-content/uploads/blank-profile-picture-973460_1280.jpg" />
      <Flex.Item>
        <span>Hashan Chathuranga</span>
      </Flex.Item>
    </Flex>
  </WingBlank>
  <WhiteSpace size="lg" />
  <List>
    <List.Item
      onClick={() => prompt('Check Out Vehicle', 'please enter gatepass number',
        [
          {
            text: 'Close',
            onPress: () => {},
          },
          {
            text: 'Print',
            onPress: value => new Promise((resolve, reject) => {

            }),
          },
        ], 'default', null, ['gatepass number'])}
      thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
      multipleLine
    >Check Out</List.Item>
    <Link to="/checkInValidate">
      <List.Item
        thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
        multipleLine
      >Check In</List.Item>
    </Link>
    <Link to="/login">
      <List.Item
        thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
        multipleLine
      >Sign Out</List.Item>
    </Link>
  </List>
</div>);

const HomeRoute = () => {

  const [showFilters, setShowFilters] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const history = useHistory();

  return (<div>
    <NavBar
      mode="light"
      rightContent={[
        <Button onClick={() => setShowFilters(cs => !cs)} key="0" type="ghost" size="small">
          <Icon type="search" style={{ marginTop: '4px' }} />
        </Button>
      ]}
      icon={<Icon type="ellipsis" />}
      onLeftClick={() => setShowDrawer(cs => !cs)}
    >CCL GatePass</NavBar>
    <div className="relative">
      <Drawer
        className="main-drawer"
        style={{ minHeight: document.documentElement.clientHeight }}
        enableDragHandle
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
        sidebar={sidebar}
        open={showDrawer}
        onOpenChange={() => setShowDrawer(cs => !cs)}
      >
        Click upper-left corner
      </Drawer>
      {showFilters ? <List renderHeader={() => 'Filters'}>
        <InputItem
          clear
          placeholder=""
          textAlign="right"
          type="number"
          pattern="[0-9]*"
        >Contract #</InputItem>
        <InputItem
          clear
          placeholder=""
          textAlign="right"
          type="text"
          pattern="[A-Za-z0-9]*"
        >Vehicle No</InputItem>
      </List> : null}
      <List renderHeader={showFilters ? () => 'Vehicles' : null}>
        <Item
          arrow="horizontal"
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          multipleLine
          onClick={() => history.push('/view')}
        >
          Toyota FB15 <Brief>CAB 2587 / 12345</Brief>
        </Item>
        <Item
          arrow="horizontal"
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          multipleLine
          onClick={() => history.push('/view')}
        >
          Toyota FB15 <Brief>CAB 2587 / 12345</Brief>
        </Item>
        <Item
          arrow="horizontal"
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          multipleLine
          onClick={() => history.push('/view')}
        >
          Toyota FB15 <Brief>CAB 2587 / 12345</Brief>
        </Item>
        <Item
          arrow="horizontal"
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          multipleLine
          onClick={() => history.push('/view')}
        >
          Toyota FB15 <Brief>CAB 2587 / 12345</Brief>
        </Item>
        <Item
          arrow="horizontal"
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          multipleLine
          onClick={() => history.push('/view')}
        >
          Toyota FB15 <Brief>CAB 2587 / 12345</Brief>
        </Item>
        <Item
          arrow="horizontal"
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          multipleLine
          onClick={() => history.push('/view')}
        >
          Toyota FB15 <Brief>CAB 2587 / 12345</Brief>
        </Item>
        <Item
          arrow="horizontal"
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          multipleLine
          onClick={() => history.push('/view')}
        >
          Toyota FB15 <Brief>CAB 2587 / 12345</Brief>
        </Item>
        <Item
          arrow="horizontal"
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          multipleLine
          onClick={() => history.push('/view')}
        >
          Toyota FB15 <Brief>CAB 2587 / 12345</Brief>
        </Item>
        <Item
          arrow="horizontal"
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          multipleLine
          onClick={() => history.push('/view')}
        >
          Toyota FB15 <Brief>CAB 2587 / 12345</Brief>
        </Item>
        <Item
          arrow="horizontal"
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          multipleLine
          onClick={() => history.push('/view')}
        >
          Toyota FB15 <Brief>CAB 2587 / 12345</Brief>
        </Item>
        <Item
          arrow="horizontal"
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          multipleLine
          onClick={() => history.push('/view')}
        >
          Toyota FB15 <Brief>CAB 2587 / 12345</Brief>
        </Item>
        <Item
          arrow="horizontal"
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          multipleLine
          onClick={() => history.push('/view')}
        >
          Toyota FB15 <Brief>CAB 2587 / 12345</Brief>
        </Item>
        <Item
          arrow="horizontal"
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          multipleLine
          onClick={() => history.push('/view')}
        >
          Toyota FB15 <Brief>CAB 2587 / 12345</Brief>
        </Item>
      </List>
    </div>
  </div>);
};

export default HomeRoute;
