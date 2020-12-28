import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
  Carousel,
} from "antd";

import Layout from "../layouts";

const FormItem = Form.Item;
const contentStyle = {
  height: "250px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const Option = Select.Option;

export default function Home() {
  return (
    <Layout layout="other">
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <Form layout="vertical">
        <FormItem
          label="Input Number"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <InputNumber
            size="large"
            min={1}
            max={10}
            style={{ width: 100 }}
            defaultValue={3}
            name="inputNumber"
          />
          <a href="#">Link</a>
        </FormItem>

        <FormItem
          label="Switch"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Switch defaultChecked />
        </FormItem>

        <FormItem
          label="Slider"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Slider defaultValue={70} />
        </FormItem>

        <FormItem
          label="Select"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Select size="large" defaultValue="lucy" style={{ width: 192 }}>
            <Option value="jack">jack</Option>
            <Option value="lucy">lucy</Option>
            <Option value="disabled" disabled>
              disabled
            </Option>
            <Option value="yiminghe">yiminghe</Option>
          </Select>
        </FormItem>

        <FormItem
          label="DatePicker"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <DatePicker name="startDate" />
        </FormItem>
        <FormItem style={{ marginTop: 48 }} wrapperCol={{ span: 8, offset: 8 }}>
          <Button size="large" type="primary" htmlType="submit">
            OK
          </Button>
          <Button size="large" style={{ marginLeft: 8 }}>
            Cancel
          </Button>
        </FormItem>
      </Form>
    </Layout>
  );
}