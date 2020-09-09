import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Button, Text } from "@tarojs/components";
import { AtButton, AtDrawer } from "taro-ui";
import { showDreawer, cateGoryList } from "../../actions/menu.js";
import "./index.less";
import Topic from '../component/topic/index'

@connect(
  function (store) {
    return { ...store.menu };
  },
  function (dispatch) {
    return {
      showMenu() {
        dispatch(showDreawer());
      },
      menulist(index=1) {
        dispatch(cateGoryList(index));
      },
    };
  }
)
class Index extends Component {
  state = {
    menutype:''
  }
  componentWillMount() {
    this.props.menulist && this.props.menulist();
  }

  showDreawers() {
    this.props.showMenu && this.props.showMenu();
  }
  onClose() {
    this.props.showMenu && this.props.showMenu();
 
  }
  handleIndex(index){
    this.setState({
      menutype:index
    })
    this.props.menulist && this.props.menulist(index);
    this.child.handlechange()
    this.onClose()
  }
  render() {
    const { showdarew, catedata } = this.props;
    return (
      <View>
        <AtDrawer show={showdarew} mask>
          {catedata.map((item, index) => {
            return (
              <View className='drawer-item' key={index} onClick={this.handleIndex.bind(this,item.id)}>
                {item.title}
              </View>
            );
          })}
        </AtDrawer>
        <AtButton type='primary' onClick={this.showDreawers.bind(this)}>
         分类
        </AtButton>
        <Topic menutype={this.state.menutype} onRef={(ref)=>{ this.child = ref}} />
      </View>
    );
  }
}

export default Index;
