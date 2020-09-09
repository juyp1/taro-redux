import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Button, Text } from "@tarojs/components";
import { getTopicslist } from "../../../actions/home";
import { AtList, AtListItem } from "taro-ui";

@connect(
  function (store) {
    return { ...store.home, tab: store.menu.currindex };
  },
  function (dispatch) {
    return {
      homelist(params) {
        dispatch(getTopicslist(params));
      },
    };
  }
)
class Index extends Component {
  handlechange() {
    this.props.params.tab = this.props.menutype;
    this.props.homelist && this.props.homelist(this.props.params);
  }
  componentWillMount() {
    this.props.params.tab = this.props.tab;
    this.props.homelist && this.props.homelist(this.props.params);
  }
  componentDidMount() {
    this.props.onRef(this);
  }
  render() {
    console.log(this.props);
    const { list } = this.props;
    return (
      <View>
        <AtList>
          {list.map((item, index) => {
            return (
              <AtListItem
                key={index}
                title={item.title}
                arrow='right'
                thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
              />
            );
          })}
        </AtList>
      </View>
    );
  }
}

export default Index;
