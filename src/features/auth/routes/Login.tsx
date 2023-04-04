import { useLogin } from '@/lib/auth'
import { Form, Button, Input } from 'antd'
import { LoginCredentialsDTO } from '../api'

export const Login = () => {
  const loginFn = useLogin()
  const onFinish = (data: LoginCredentialsDTO) => {
    console.log(data, 'LoginProps')
    loginFn.mutate(data)
  }

  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-[500px] h-[500px] bg-gray-200">
        <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
          <Form.Item label="Username" name="userName">
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
