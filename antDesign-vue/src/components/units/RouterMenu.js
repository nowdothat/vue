export default {
  name: 'RouterMenu',
  props: {
    menus: {
      type: Array,
      required: true
    },
    mode: {
      type: String,
      default: 'inline'
    },
    theme: {
      type: String,
      default: 'dark'
    },
    inlineCollapsed: Boolean
  },
  data() {
    this.MenuNode = null
    this.preventUpdateKeys = false
    return {
      curRoutePath: this.$route.path,
      selectedKeys: []
    }
  },
  watch: {
    $route(newVal) {
      if(this.preventUpdateKeys) {
        this.preventUpdateKeys = false
        return
      }
      const path = newVal.path
      const  { menus } = this
      let getSelectKeys = data => {
        return data.map(item => {
          if(item.subs && item.subs.length) {
            getSelectKeys(item.subs)
          }else if (path === item.direct || path.includes(item.direct)) {
            this.selectedKeys = [item.key]
          }
        })
      }
      getSelectKeys(menus)
    }
  },
  created() {
    this.updateMenuNode()
  },
  methods: {
    renderMenuItem(data) {
      let Tag = data.direct ? 'router-link' : 'span'
      const props = {to: {path: data.direct}}
      const attrs = {href: data.direct}
      return (
        <a-menu-item key={data.key}>
          <Tag {...{ props, attrs }}>
            {data.icon && <a-icon type={data.icon} />}
            <span>{data.name}</span>
          </Tag>
        </a-menu-item>
      )
    },
    renderSubMenu(data, renderMenu) {
      let MenuItems = renderMenu(data.subs)
      return (
        <a-sub-menu key={data.key}>
          <span slot="title">
            {data.icon && <a-icon type={data.icon} />}
            <span>{data.name}</span>
          </span>
          {/* 将子值再渲染一波 */}
          {MenuItems}
        </a-sub-menu>
      )
    },
    renderMenu(data) {
      if (!data.length) return
      const  {renderMenuItem, renderSubMenu, curRoutePath } = this
      return data.map(item => {
        if(item.subs && item.subs.length) {
          return renderSubMenu(item, this.renderMenu)
        }else {
          if(curRoutePath === item.direct || curRoutePath.includes(item.direct)) {
            this.selectedKeys = [item.key]
          }
          return renderMenuItem(item)
        }
      })
    },
    updateMenuNode() {
      this.MenuNode = this.renderMenu(this.menus)
    },
    handleSelect(obj) {
      this.preventUpdateKeys = true
      this.selectedKeys = obj.selectedKeys
    },  
  },
  render() {
    const {inlineCollapsed, mode, theme } = this.$props
    const props = {inlineCollapsed, mode, theme, selectedKeys: this.selectedKeys}
    const on = {
      select: this.handleSelect
    }
    return (
      <a-menu defaultSelectedKeys={['/workplace']} defaultOpenKeys={['sub1']} {...{ props, on: on }}>
        {this.MenuNode}
      </a-menu>
    )
  }
}