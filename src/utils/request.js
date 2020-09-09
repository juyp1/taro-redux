import Taro from '@tarojs/taro';
 
import  {Api} from './config.js'

export function getJSON (url, data) {
   Taro.showLoading();
   return Taro.request({ url: `${Api}${url}`, data: data, method: 'GET' }).then(result => {
      Taro.hideLoading();
      return result;
   });
}
export function postJSON (url, data) {
   Taro.showLoading();
   return Taro.request({
      header: {
         'content-type': 'application/json'
      }, url: `${Api}${url}`, data: data, method: 'POST'
   }).then(result => {
      Taro.hideLoading();
      return result;
   });
}
