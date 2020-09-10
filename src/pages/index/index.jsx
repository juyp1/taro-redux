import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { AtDrawer, AtList, AtListItem, AtNavBar } from "taro-ui";
import { showDreawer, cateGoryList } from "../../actions/menu.js";
import "./index.less";
import Topic from "../component/topic/index";

@connect(
  function (store) {
    return { ...store.menu };
  },
  function (dispatch) {
    return {
      showMenu() {
        dispatch(showDreawer());
      },
      menulist(index = 1) {
        dispatch(cateGoryList(index));
      },
    };
  }
)
class Index extends Component {
  state = {
    menutype: "",
  };
  componentWillMount() {
    this.props.menulist && this.props.menulist();
  }

  showDreawers() {
    this.props.showMenu && this.props.showMenu();
  }
  onClose() {
    this.props.showMenu && this.props.showMenu();
  }
  handleIndex(index) {
    this.setState({
      menutype: index,
    });
    this.props.menulist && this.props.menulist(index);
    this.child.handlechange();
    this.onClose();
  }
  handleUserInfo() {
    Taro.navigateTo({
      url: "/pages/signin/index",
    });
  }
  render() {
    const { showdarew, catedata } = this.props;
    return (
      <View>
        <AtDrawer show={showdarew} mask>
          <AtList>
            {catedata.map((item, index) => {
              return (
                <AtListItem
                  title={item.title}
                  key={index}
                  onClick={this.handleIndex.bind(this, item.id)}
                />
              );
            })}
          </AtList>
        </AtDrawer>
        <AtNavBar
          onClickRgIconSt={this.handleUserInfo.bind(this)}
          onClickLeftIcon={this.showDreawers.bind(this)}
          color='#000'
          title='首页'
          rightFirstIconType='user'
          leftIconType='home'
        ></AtNavBar>
        <Topic
          menutype={this.state.menutype}
          onRef={(ref) => {
            this.child = ref;
          }}
        />
      </View>
    );
  }
}

export default Index;
