import React, {Component} from 'react';
import { connect } from 'dva';
import {Tabs,Form, Input, Icon, Button} from 'antd';
import indexPage from "../models/indexPage";
// import styles from './IndexPage.css';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

//链接model，对应namespace
@connect(state => ({
  indexPage: state.indexPage,
}))

class IndexPage extends Component{
  handleSubmit = (state) =>{
    this.props.form.validateFields({ force: true },
      (err, values) => {
        if (!err) {
          this.props.dispatch({
            type: 'indexPage/login',
            payload: {
              name : values.userName,
              password : values.passWord
            }
          });console.log(indexPage)
        }
      }
    );
  }
  render(){
    const {getFieldDecorator} = this.props.form;
    return(
      <Tabs defaultActiveKey={"1"} size={"small"}>
        <TabPane tab="登录" key="1">
          <Form className={"login"} onSubmit={this.handleSubmit}>
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{required:true, message: 'Please input your username!'}],
              })(
                <Input type={'text'} prefix={<Icon type={'user'} />} placeholder={"请输入账号"}/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('passWord', {
                rules: [{required:true, message: 'Please input your password!'}]
              })(
                <Input type={'password'} prefix={<Icon type={'lock'}/>} placeholder={'请输入密码'} />
              )}
            </FormItem>
            <FormItem>
              <Button type={'primary'} onClick={this.handleSubmit}>登录</Button>
            </FormItem>
          </Form>
        </TabPane>
        <TabPane tab="注册" key="2">
          <Form>
            <FormItem labelCol={{span:2}} wrapperCol={{span:16}} label={'userName'} validateStatus={'success'} hasFeedback={true}>
              {getFieldDecorator('userName',{
                rules: [{required: true, message: 'please input your username!'}]
              })(
                <Input type={'text'} placeholder={'请设置账号'}/>
              )}
            </FormItem>
            <FormItem labelCol={{span:2}} wrapperCol={{span:16}} label={'passWord'} validateStatus={'success'} hasFeedback={true}>
              {getFieldDecorator('passWord',{
                rules: [{required: true, message: 'please input your password!'}]
              })(
                <Input type={'text'} placeholder={'请设置密码'}/>
              )}
            </FormItem>
            <FormItem>
              <Button type={'primary'}>注册</Button>
            </FormItem>
          </Form>
        </TabPane>
      </Tabs>
    )
  }
}

const WrappedIndexPage = Form.create()(IndexPage);

export default(WrappedIndexPage);

