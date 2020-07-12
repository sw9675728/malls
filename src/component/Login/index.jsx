import React, { Component } from 'react';
import './index.less';
import { Form, Input, Button, Checkbox ,Alert} from 'antd';
import utils from './../../utils'
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 10 },
};
const tailLayout = {
    wrapperCol: { offset: 4, span: 16 },
};
class Login extends Component {
    onFinish = values => {
        utils.storage.set("userInfo",values)
        // this.props.history.push('/')
        console.log(this)
        // window.location.href='/'
        window.location.replace("/")
        // this.props.history.replace("/");


    }
    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    render() {
        return (
            <div>
                <div className='Login'>
                    <img src="http://testclubshop.liantuobank.com/assets/images/login_b.jpg" alt="" className='logo' />
                    <div className='Login-form'>
                        <div className='Login-form-main'>
                            <h2 className='postTitle'>商户登陆</h2>

                            <Form
                                name="basic"
                                initialValues={{ remember: true }}
                                onFinish={this.onFinish.bind(this)}
                                onFinishFailed={this.onFinishFailed.bind(this)}
                            >
                                <Form.Item
                                    name="username"
                                    rules={[{ required: true, message: '请填写账号!' }]}
                                    className='inputs'
                                >
                                    <Input placeholder='账号' className='inputs' />
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: '请输入密码!' }]}
                                    className='inputs'
                                >
                                    <Input.Password placeholder='密码'/>
                                </Form.Item>

                                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                    <Checkbox>记住账号</Checkbox>
                                </Form.Item>

                                <Form.Item {...tailLayout} className='submitbtn'>
                                    <Button type="primary" htmlType="submit" size='large'>
                                        登录
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;
