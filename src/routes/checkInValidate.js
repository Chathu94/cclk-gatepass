import React, { useState, useCallback } from 'react';
import {
  NavBar,
  Icon,
  SegmentedControl,
  WingBlank,
  WhiteSpace,
  List,
  Modal,
  Checkbox,
  TextareaItem,
  ImagePicker,
  InputItem,
  Flex, Button
} from 'antd-mobile';
import { Link, useHistory } from "react-router-dom";
import './checkIn.css';

const { Item } = List;
const { CheckboxItem } = Checkbox;

const CheckInVehicleValidateRoute = () => {
  const history = useHistory();
  const [handoverCustomer, setHandoverCustomer] = useState(true);
  const [vehicleNo, setVehicleNo] = useState('');
  const [engineNo, setEngineNo] = useState('');
  const [chassisNo, setChassisNo] = useState('');

  return (<div>
    <NavBar
      mode="light"
      onLeftClick={() => history.goBack()}
      icon={<Icon type="left" />}
    >Check In CAB 2587</NavBar>
    <WingBlank>
      <List renderHeader={() => 'Handover By'}>
        <Item extra={'K S P Saman'}>Customer Name</Item>
        <Item extra={'xxxxxxx'}>Contract</Item>
        <CheckboxItem checked={handoverCustomer} onChange={() => setHandoverCustomer(true)}>
          Customer
        </CheckboxItem>
        <CheckboxItem checked={!handoverCustomer} onChange={() => setHandoverCustomer(false)}>
          Seizing Officer
        </CheckboxItem>
        <InputItem
          clear
          placeholder=""
          textAlign="right"
        >Serial No</InputItem>
      </List>
      <List renderHeader={() => 'Vehicle No'}>
        <Item extra={'WP-KS 2548'}>ERP 2</Item>
        <CheckboxItem checked={vehicleNo === 'WP-KS 2548'} onChange={() => setVehicleNo('WP-KS 2548')}>
          Same as above
        </CheckboxItem>
        <InputItem
          clear
          placeholder=""
          textAlign="right"
          value={vehicleNo}
          onChange={t => setVehicleNo(t)}
        />
      </List>
      <List renderHeader={() => 'Engine No'}>
        <Item extra={'hjk - 274824282348'}>ERP 2</Item>
        <CheckboxItem checked={vehicleNo === 'hjk - 274824282348'} onChange={() => setVehicleNo('hjk - 274824282348')}>
          Same as above
        </CheckboxItem>
        <InputItem
          clear
          placeholder=""
          textAlign="right"
          value={engineNo}
          onChange={t => setEngineNo(t)}
        />
      </List>
      <List renderHeader={() => 'Chassis No'}>
        <Item extra={'gds - 2234234'}>ERP 2</Item>
        <CheckboxItem checked={vehicleNo === 'gds - 2234234'} onChange={() => setVehicleNo('gds - 2234234')}>
          Same as above
        </CheckboxItem>
        <InputItem
          clear
          placeholder=""
          textAlign="right"
          value={chassisNo}
          onChange={t => setChassisNo(t)}
        />
      </List>
      <List renderHeader={() => 'Handover Information'}>
        <InputItem
          clear
          placeholder=""
          textAlign="right"
          type="number"
          pattern="[0-9]*"
        >Mileage</InputItem>
        <CheckboxItem>
          Insurance
        </CheckboxItem>
        <CheckboxItem>
          Key
        </CheckboxItem>
      </List>
      <List renderHeader={() => 'Seizing Information'}>
        <InputItem
          clear
          placeholder=""
          textAlign="right"
        >Entry No</InputItem>
        <InputItem
          clear
          placeholder="Recommendation"
          textAlign="right"
        />
        <TextareaItem
          placeholder="Notes"
          type="text"
          rows={3}
          count={300}
        />
      </List>
      <WhiteSpace />
      <Link to="/checkIn">
        <Button type="primary">Next</Button>
      </Link>
      <WhiteSpace />
    </WingBlank>
  </div>);
};

export default CheckInVehicleValidateRoute;

