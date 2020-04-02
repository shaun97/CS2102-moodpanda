//Basic React Imports
import React, { Component } from 'react';

import InfoCard from '../../utils/InfoCard';
import NavSideBar from '../../utils/SideBar';
import TopHeader from '../../utils/TopHeader';
import Summary from './SummaryTab/SummaryInfo';
import Customer from './CustomerInfoTab/CustomerInfo';
// import './RiderView.css';


class FDSManagerView extends Component {
  constructor() {
    super();
    this.state = {
      menu: [
        { name: "Summary", icon: "home" },
        { name: "Customer Info", icon: "home" },
        { name: "Rider Info", icon: "home" }
      ],
      info: [
        { header: "Total Salary", details: "$1000" },
        { header: "Total Hours", details: "24" },
        { header: "Total Orders", details: "100" }
      ],
      activeTab: 'Summary',
      currentMonth: '',
    };
    this.changeActiveTab = this.changeActiveTab.bind(this);
  }

  componentDidMount() {
    var d = new Date();
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var n = month[d.getMonth()];

    this.setState({
      currentMonth: n
    });
  };

  changeActiveTab(event) {
    this.setState({
      activeTab: event.currentTarget.id,
    })
  };

  render() {
    let tab;
    switch (this.state.activeTab) {
      case 'Summary':
        tab = <Summary month={this.state.currentMonth}></Summary>
        break;
      case 'Customer Info':
        tab = <Customer></Customer>
        break;
      case 'Rider Info':
        tab = <Summary></Summary>
        break;
    }
    return (
      <div className="riderDetails">
        <TopHeader user="Manager" />
        <NavSideBar handleChangeTab={this.changeActiveTab} navTabs={this.state.menu}/>
        <div style={{ marginLeft: '160px' }}>
          {tab}
        </div>
      </div>
    );
  }
}

export default FDSManagerView;

