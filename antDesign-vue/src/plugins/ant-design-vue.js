import Vue from 'vue'
import { LocaleProvider, Layout, Menu, Icon, Dropdown, Avatar, Breadcrumb, Divider, Badge, Tabs } from 'ant-design-vue'
import { Pagination, Button, Popconfirm, Tag, Alert, Card, Progress, Spin, Drawer, Popover, Tooltip } from 'ant-design-vue'
import { Form, Input, InputNumber, Radio, Checkbox, Select, Switch, TimePicker, DatePicker, Cascader, Table, Row, Col } from 'ant-design-vue'
import { Message, Modal } from 'ant-design-vue'
import { Rate } from 'ant-design-vue'

Vue.use(Avatar)
Vue.use(Layout)
Vue.use(Icon)
Vue.use(Menu)
Vue.use(LocaleProvider)
Vue.use(Pagination)
Vue.use(Dropdown)
Vue.use(Button)
Vue.use(Tabs)
Vue.use(Row)
Vue.use(Col)
Vue.use(Form)
Vue.use(Input)
Vue.use(DatePicker)
Vue.use(InputNumber)
Vue.use(Radio)
Vue.use(Select)
Vue.use(Switch)
Vue.use(Checkbox)
Vue.use(Cascader)
Vue.use(TimePicker)
Vue.use(Table)
Vue.use(Breadcrumb)
Vue.use(Popconfirm)
Vue.use(Tag)
Vue.use(Divider)
Vue.use(Badge)
Vue.use(Popover)
Vue.use(Alert)
Vue.use(Card)
Vue.use(Spin)
Vue.use(Progress)
Vue.use(Modal)
Vue.use(Drawer)
Vue.use(Tooltip)
Vue.use(Rate)

Object.defineProperties(Vue.prototype, {
  $message: {
    value: Message,
    writable: false
  },
  $confirm: {
    value: Modal.confirm,
    writable: false
  }
})