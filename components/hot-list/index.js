
Component ({

  /**
   * 组件的属性列表
   */
  properties: {
    banner: Object
  },

  observers: {
    'banner': function (banner) {
      if (!banner) {
        return
      }
      if (banner.items.length === 0) {
        return
      }
      const left = banner.items.find(i=>i.name === 'left')
      const rightTop = banner.items.find(i=>i.name === 'right-top')
      const rightBottom = banner.items.find(i=>i.name ==='right-bottom')
      this.setData({
        left,
        rightTop,
        rightBottom
      })
    }
  },

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }

 
})