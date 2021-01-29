import React, { Component } from "react";
import {
  Button,
  Form,
  Input,
  Message,
  Row,
  Tooltip,
  Upload,
  Icon,
  message,
} from "antd";
import { connect } from "react-redux";
import { Eye, HelpCircle, Mail, Triangle, User } from "react-feather";
import ImageUploader from "../lib/uploading";

import Link from "next/link";
import Router from "next/router";
import TextArea from "antd/lib/input/TextArea";

const FormItem = Form.Item;

class Signup extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    address: "",
    picture: "",
    password: "",
    about: "",
  };

  uploadResponse = (data) => {
    this.setState({ picture: data.picture });
  };

  uploadRemove = (data) => {
    this.setState({ picture: data.picture });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { form } = this.props;
    return (
      <Row
        type="flex"
        align="middle"
        justify="center"
        className="px-3 bg-white"
        style={{ minHeight: "100vh" }}
      >
        <div style={{ maxWidth: "400px", zIndex: 2, minWidth: "300px" }}>
          <div className="text-center mt-5 mb-5">
            <Link href="/">
              <a className="brand mr-0">
                {/* <Triangle size={32} strokeWidth={1} /> */}
                <img
                  src="/images/logo.png"
                  style={{ height: "8rem" }}
                  alt="Servo Logo"
                />
              </a>
            </Link>
            <h5 className="mb-0 mt-3">Sign up</h5>

            <p className="text-muted">create a new account</p>
          </div>

          <Form
            layout="vertical"
            onSubmit={(e) => {
              e.preventDefault();
              form.validateFields((err, values) => {
                values.picture = this.state.picture;
                // console.log(values)
                if (!err) {
                  this.props.inProgress();
                  Message.warning("Loading...").then(() =>
                    this.props.register(values)
                  );
                }
              });
            }}
          >
            <FormItem label={<span>First Name</span>}>
              {form.getFieldDecorator("firstname", {
                rules: [
                  {
                    required: true,
                    message: "Please input your firstname!",
                    whitespace: true,
                  },
                ],
              })(
                <Input
                  prefix={
                    <User
                      size={16}
                      strokeWidth={1}
                      style={{ color: "rgba(0,0,0,.25)" }}
                    />
                  }
                  name="firstname"
                  placeholder="First Name"
                />
              )}
            </FormItem>

            <FormItem label={<span>Last Name</span>}>
              {form.getFieldDecorator("lastname", {
                rules: [
                  {
                    required: true,
                    message: "Please input your lastname!",
                    whitespace: true,
                  },
                ],
              })(
                <Input
                  prefix={
                    <User
                      size={16}
                      strokeWidth={1}
                      style={{ color: "rgba(0,0,0,.25)" }}
                    />
                  }
                  name="lastname"
                  placeholder="Last Name"
                />
              )}
            </FormItem>
            <FormItem label="Email">
              {form.getFieldDecorator("email", {
                rules: [
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ],
              })(
                <Input
                  prefix={
                    <Mail
                      size={16}
                      strokeWidth={1}
                      style={{ color: "rgba(0,0,0,.25)" }}
                    />
                  }
                  type="email"
                  placeholder="Email"
                />
              )}
            </FormItem>

            <FormItem label={<span>Address</span>}>
              {form.getFieldDecorator("address", {
                rules: [
                  {
                    required: true,
                    message: "Please input your address!",
                    whitespace: true,
                  },
                ],
              })(
                <Input
                  prefix={
                    <User
                      size={16}
                      strokeWidth={1}
                      style={{ color: "rgba(0,0,0,.25)" }}
                    />
                  }
                  name="address"
                  placeholder="Address"
                />
              )}
            </FormItem>

            <FormItem label={<span>Phone Number</span>}>
              {form.getFieldDecorator("phonenumber", {
                rules: [
                  {
                    required: true,
                    message: "Please input your phone number!",
                    whitespace: true,
                  },
                ],
              })(
                <Input
                  prefix={
                    <User
                      size={16}
                      strokeWidth={1}
                      style={{ color: "rgba(0,0,0,.25)" }}
                    />
                  }
                  name="phonenumber"
                  placeholder="Phone Number"
                />
              )}
            </FormItem>

            <FormItem label="Password">
              {form.getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" },
                ],
                onChange: this.handleChange,
              })(
                <Input
                  prefix={
                    <Eye
                      size={16}
                      strokeWidth={1}
                      style={{ color: "rgba(0,0,0,.25)" }}
                    />
                  }
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              )}
            </FormItem>

            <FormItem label="Confirm password">
              {form.getFieldDecorator("confirm", {
                rules: [
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  {
                    validator: (rule, value, callback) => {
                      if (value && value !== form.getFieldValue("password")) {
                        callback("Passwords don't match!");
                      } else {
                        callback();
                      }
                    },
                  },
                ],
              })(
                <Input
                  prefix={
                    <Eye
                      size={16}
                      strokeWidth={1}
                      style={{ color: "rgba(0,0,0,.25)" }}
                    />
                  }
                  type="password"
                  placeholder="Confirm password"
                />
              )}
            </FormItem>

            <FormItem label="Picture">
              {form.getFieldDecorator("picture", {
                rules: [
                  {
                    required: false,
                    message: "Please Upload your Profile Picture!",
                  },
                ],
              })(
                <ImageUploader
                  uploadResponse={this.uploadResponse}
                  uploadRemove={this.uploadRemove}
                />
              )}
            </FormItem>

            <FormItem label={"About"}>
              {form.getFieldDecorator("about", {
                rules: [
                  {
                    required: true,
                    message: "Please write about yourself!",
                    whitespace: true,
                  },
                ],
              })(
                <TextArea
                  prefix={
                    <User
                      size={16}
                      strokeWidth={1}
                      style={{ color: "rgba(0,0,0,.25)" }}
                    />
                  }
                  onChange={this.handleChange}
                  placeholder="About"
                />
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" block className="mt-3">
                Sign Up
              </Button>
            </FormItem>

            <div className="text-center mb-5">
              <small className="text-muted">
                <span>Already have an account?</span>{" "}
                <Link href="/signin">
                  <a>&nbsp;Login Now!</a>
                </Link>
              </small>
            </div>
          </Form>
          <div
            className="mt-5 mb-2"
            style={{
              textAlign: "center",
              textTransform: "capitalize",
              fontSize: "12px",
            }}
          >
            <p>
              <b>A product of Sostein</b>
            </p>
            &copy;ODBS Technology 2020
          </div>
        </div>
      </Row>
    );
  }
}

export default Signup;
