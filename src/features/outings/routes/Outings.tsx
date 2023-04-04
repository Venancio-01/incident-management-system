import { Form, Button, Input, Table } from 'antd'
import { Add } from '../components'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date'
  },
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time'
  }
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    date: 32,
    time: 'New York No. 1 Lake Park'
  }
]

export const Outings = () => {
  const [visible, setVisible] = useState(false)
  const handleAdd = () => {
    setVisible(false)
  }

  return (
    <div>
      <Add visible={visible} onOk={handleAdd} />
      <div className="flex mb-4">
        <Form layout="inline" className="flex-1">
          <Form.Item label={<label className="text-normal">Name</label>} name="name">
            <Input placeholder="Name" />
          </Form.Item>
        </Form>

        <div className="w-[200px] flex justify-center">
          <Button type="primary">查询</Button>
          <Button>重置</Button>
        </div>
      </div>
      <div className="mb-4">
        <Button type="primary" onClick={() => setVisible(true)}>
          添加
        </Button>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}
