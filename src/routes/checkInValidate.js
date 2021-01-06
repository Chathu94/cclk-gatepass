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
  Picker, Button
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
  const [insurance, setInsurance] = useState(undefined);
  const [key, setKey] = useState(undefined);
  const [images, setImages] = useState([]);
  const [showExtra, setShowExtra] = useState(false);

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
      {showExtra ? <>
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
          <Item extra={'hjk-27482428'}>ERP 2</Item>
          <CheckboxItem checked={engineNo === 'hjk-27482428'} onChange={() => setEngineNo('hjk-27482428')}>
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
          <CheckboxItem checked={chassisNo === 'gds - 2234234'} onChange={() => setChassisNo('gds - 2234234')}>
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
          <Picker onOk={setInsurance} okText="OK" dismissText="Close" extra={!insurance ? "Select" : insurance} data={[{ label: 'Yes', value: 'Yes' }, { label: 'No', value: 'No' }]} cols={1}>
            <List.Item arrow="horizontal">Insurance</List.Item>
          </Picker>
          <Picker onOk={setKey} okText="OK" dismissText="Close" extra={!key ? "Select" : key} data={[{ label: 'Yes', value: 'Yes' }, { label: 'No', value: 'No' }]} cols={1}>
            <List.Item arrow="horizontal">Key</List.Item>
          </Picker>
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
          <List.Item>
            <ImagePicker
              length="6"
              files={images}
              onChange={setImages}
            />
          </List.Item>
        </List>
        <WhiteSpace />
        <Link to="/checkIn">
          <Button type="primary">Next</Button>
        </Link>
        <WhiteSpace />
      </> : <>
        <WhiteSpace />
        <Button onClick={() => setShowExtra(true)} type="primary">Search</Button>
        <WhiteSpace />
      </>}
    </WingBlank>
  </div>);
};

export default CheckInVehicleValidateRoute;

