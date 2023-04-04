import { Form, Input, Modal } from 'antd'
import { useReasons } from '../api'

type ModalProps = {
  visible: boolean
  onOk: () => void
}

type FormState = {
  name: string
}

export const Add = ({ visible, onOk }: ModalProps) => {
  const reasonQuery = useReasons({ reasonId: '' })
  const handleCancel = () => {
    onOk()
  }

  const handleFinish = (data: FormState) => {
    console.log(data, 'finish')
  }

  if (reasonQuery.isLoading) {
    return <div>loading</div>
  }

  return (
    <>
      <Modal title="Basic Modal" open={visible} onOk={onOk} onCancel={handleCancel}>
        <Form onFinish={handleFinish}>
          <Form.Item label="军衔" name="rank">
            <Input placeholder="军衔" />
          </Form.Item>

          <Form.Item label="省" name="province">
            <Input placeholder="省" />
          </Form.Item>

          <Form.Item label="市" name="city">
            <Input placeholder="市" />
          </Form.Item>

          <Form.Item label="地址" name="address">
            <Input placeholder="军衔" />
          </Form.Item>

          <Form.Item label="外出原因" name="typeId">
            <Input placeholder="外出原因" />
          </Form.Item>

          <Form.Item label="外出日期" name="startDay">
            <Input placeholder="外出日期" />
          </Form.Item>

          <Form.Item label="预计归队日期" name="returnDay">
            <Input placeholder="预计归队日期" />
          </Form.Item>

          <Form.Item label="军衔" name="rank">
            <Input placeholder="军衔" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}
