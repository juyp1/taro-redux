import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Button, Text } from "@tarojs/components";
import { AtButton, AtInput, AtAvatar } from "taro-ui";
import { userAccesstoken } from "../../actions/users";
import Taro from "@tarojs/taro";
import "./index.less";

@connect(
  function (store) {
    return { ...store.users };
  },
  function (dispatch) {
    return {
      signintoken(params) {
        dispatch(userAccesstoken(params));
      },
    };
  }
)
class Index extends Component {
  state = {
    accesstoken: "083d2549-0cb1-4c9b-9636-1047ad6a19e6",
    username:'',
    activate:''
  };
  componentWillReceiveProps(props) {
    
    if (props.result.success) {
      this.setState({
        activate:props.result.avatar_url,
        username:props.result.loginname
      })
      Taro.showToast({
        icon: "none",
        title: "登录成功",
        duration: 3000,
      });
    } else {
      Taro.showToast({
        icon: "none",
        title: "登录失败",
        duration: 3000,
      });
    }
  }
  handleChange = (value) => {
    console.log(value);
    this.setState({
      accesstoken: value,
    });
  };
  loginToken() {
    this.props.signintoken(this.state);
  }
  render() {
    
     const {username,activate}=this.state
    return (
      <View>
        <AtInput
          name='value'
          title='验证token'
          type='text'
          placeholder='请输入token信息'
          value={this.state.accesstoken}
          onChange={this.handleChange.bind(this)}
        />
        <AtButton type='primary' onClick={this.loginToken.bind(this)}>
          验证
        </AtButton>
        <View className='userInfo-container'>
          <View className='userinfo-active'>
            <AtAvatar circle image={activate}></AtAvatar>
          </View>
          <View>
            <Text>{username}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Index;
