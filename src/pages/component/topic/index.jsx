import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Button, Text } from "@tarojs/components";
import { getTopicslist,getTopicslistPage } from "../../../actions/home";
import { AtList, AtListItem,AtLoadMore } from "taro-ui";

@connect(
  function (store) {
    return { ...store.home, tab: store.menu.currindex };
  },
  function (dispatch) {
    return {
      homelist(params) {
        dispatch(getTopicslist(params));
      },
      loadlist(params){
        dispatch(getTopicslistPage(params))
      }
    };
  },
)
class Index extends Component {
  state={
    status:"more"
  }
  handlechange() {
      this.initList()
  }
  componentWillMount() {
    this.initList()
  }
  initList(){
    this.props.params.page=1
    this.props.params.tab = this.props.menutype;
    this.props.homelist && this.props.homelist(this.props.params);
  }
  // 继续加载页面
  handleloadmore(){
 
    // this.props.params.tab = this.props.tab;
    
     
     this.props.loadlist && this.props.loadlist(this.props.params);
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
        <AtLoadMore
          onClick={this.handleloadmore.bind(this)}
          status={this.state.status}
        />
      </View>
    );
  }
}

export default Index;
