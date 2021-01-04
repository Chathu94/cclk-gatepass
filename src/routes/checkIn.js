import React, { useState, useCallback } from 'react';
import { NavBar, Icon, SegmentedControl, WingBlank, WhiteSpace, List, Modal, Checkbox, TextareaItem, ImagePicker } from 'antd-mobile';
import { useHistory } from "react-router-dom";
import './checkIn.css';

const Item = List.Item;

const Lights = [
  'Hood Lamps',
  'Side Lamps',
  'Inspection Lamps',
  'Tail Lamps',
  'Park/ Signal Lamps',
  'No Plate Lamp',
  'Dash Board Lights 1',
  'Dash Board Lights 2',
  'Ignition Lights',
  'Fog Lamps',
  'Head Lamps',
  'Extra Break Lights',
  'Other Lamps'
];

const Electrics = [
  'Horn (Air/ Electronics)',
  'Radio/ Cassette (Make)',
  'CD Player (Make)',
  'CD Charger',
  'Vehicle TV (Make)',
  'Sub-Woofer',
  'Reverse Camera',
  'Power Antenna',
  'Speakers',
  'AC Unites (Single/ Dual)',
  'Cigarette Lighter',
  'Battery',
  'Clock',
  'Cool Box',
  'Alternator',
  'Starter Motor'
];

const Tyres = [
  'Front Left Tyre (Make)',
  'Front Right Tyre (Make)',
  'Rear Left Tyre (Make)',
  'Rear Right Tyre (Make)',
  'Spare Wheel (Make)',
  'Alloy Wheels - Wheel Cups',
];

const Tools = [
  'Jacks/ Handles',
  'Wheel Brush',
  'Screw Drivers',
  'Plug Box Spanner',
  'Shifters'
];

const Fittings = [
  'Wiper Motor',
  'Front Wiper',
  'Rear Wiper',
  'Wiper Washer Nozzle',
  'Number Plate',
  'Sun Wisers',
  'Caps (Petrol/ Diesel Tank 1',
  'Caps (Petrol/ Diesel Tank 2',
  'Break Oil Cap',
  'Gear Knobs',
  'Radiator Cap',
  'Oil Cap',
  'Ash Tray',
  'Hub Caps',
  'Fire Extinguishers',
  'Side Mirrors',
  'Arial',
  'Door Handle',
  'Door Wiser (Right)',
  'Door Wiser (Left)',
  'Mud Covers',
  'Rear Spoilers',
  'Roller Bar',
  'Head Light Wiper',
  'Front Bu Er',
  'Rear Bu Er',
  'Room Mirror',
  'Seats',
  'Head Rests',
  'Carpets',
  'Hood Tacks',
  'Ladder',
  'Safety Belts',
  'Door Locks',
  'Wind Screen - Front/ Rear'
];

const Tractor = [
  'Rotter',
  'Mud Wheel',
  'Rear Wheel',
  'Rear Sear',
  'Bonnet',
  'Belt',
  'Belt Guard',
  'Accelerator Adjustment',
  'Gear Oil Cap',
  'Gear Baller',
  'Mud Wheel Rod'
];

const Segments = {
  Lights,
  Electrics,
  Tyres,
  Tools,
  Fittings,
  Tractor
};

const SegmentArray = ['Lights', 'Electrics', 'Tyres', 'Tools', 'Fittings', 'Tractor'];

const CheckInVehicleRoute = () => {
  const history = useHistory();
  const [allSets, setAllSets] = useState({ Lights: {}, Electrics: {}, Tyres: {}, Tools: {}, Fittings: {}, Tractor: {} });
  const [activeItem, setActiveItem] = useState(undefined);
  const [activeSet, setActiveSet] = useState(Lights);
  const [activeSetIndex, setActiveSetIndex] = useState(0);

  const onCloseModal = useCallback(() => {
    setAllSets(cd => ({ ...cd, [SegmentArray[activeSetIndex]]: { ...cd[SegmentArray[activeSetIndex]], [activeItem?.name]: activeItem?.data } }))
    setActiveItem(undefined);
  }, [activeItem, activeSetIndex]);

  return (<div>
    <NavBar
      mode="light"
      onLeftClick={() => history.goBack()}
      icon={<Icon type="left" />}
    >Check In CAB 2587</NavBar>
    <WingBlank>
      <SegmentedControl selectedIndex={activeSetIndex} values={SegmentArray} onValueChange={v => {
        setActiveSet(Segments[v]);
        setActiveSetIndex(SegmentArray.indexOf(v));
      }} />
      <WhiteSpace size="lg" />
      <List className="my-list">
        {activeSet.map(name => <Item key={name} arrow="horizontal" platform="android" extra={<Icon style={{ top: 10 }} size="xs" type={allSets[SegmentArray[activeSetIndex]]?.[name]?.checked ? "check" : "cross"} />} onClick={() => {
          setActiveItem({
            name,
            data: allSets[SegmentArray[activeSetIndex]]?.[name] ?? {
              checked: false,
              remarks: '',
              images: [],
            }
          });
        }}>{name}</Item>)}
      </List>
      <Modal
        visible={activeItem}
        transparent
        popup
        animationType="slide-up"
        maskClosable={false}
        onClose={onCloseModal}
        title={activeItem?.name}
        footer={[{ text: 'Ok', onPress: onCloseModal }]}
      >
        <List>
          <Checkbox.CheckboxItem checked={activeItem?.data?.checked} onChange={(e) => setActiveItem(i => ({ ...i, data: { ...i.data, checked: e.target.checked } }))}>
            Checked
          </Checkbox.CheckboxItem>
          <TextareaItem
            placeholder="Remarks"
            type="text"
            rows={3}
            count={300}
            value={activeItem?.data?.remarks}
            onChange={remarks => setActiveItem(i => ({ ...i, data: { ...i.data, remarks } }))}
          />
          <List.Item>
            <ImagePicker
              length="6"
              files={activeItem?.data?.images}
              onChange={images => setActiveItem(i => ({ ...i, data: { ...i.data, images } }))}
            />
          </List.Item>
        </List>
      </Modal>
    </WingBlank>
  </div>);
};

export default CheckInVehicleRoute;

