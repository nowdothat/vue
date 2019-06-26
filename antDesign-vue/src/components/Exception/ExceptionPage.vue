<template>
  <div class="view-wrapper">
    <div class="exception">
      <div class="cover">
        <img class="img-responsive" :src="config[type].img" />
      </div>
      <div class="content">
        <h1>{{ config[type].title }}</h1>
        <div class="desc">{{ config[type].desc }}</div>
        <div class="action">
          <a-button type="primary" @click="handleToHome">返回首页</a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import types from './type'

export default {
  name: 'Exception',
  props: {
    type: {
      type: String,
      default: '404'
    }
  },
  data() {
    return {
      config: types
    }
  },
  methods: {
    handleToHome() {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="less" scoped>
.exception {
  display: flex;
  align-items: center;
  height: 80%;
  min-height: 500px;
  margin: 0 16px;
  .cover {
    flex: 0 0 62%;
    width: 62.5%;
    display: inline-block;
    padding-right: 140px;
    > img {
      float: right;
      max-width: 420px;
    }
  }
  .content {
    display: inline-block;
    flex: auto;
    h1 {
      color: #434e59;
      font-size: 72px;
      font-weight: 600;
      line-height: 72px;
      margin-bottom: 24px;
    }
    .desc {
      color: rgba(0, 0, 0, 0.45);
      font-size: 20px;
      line-height: 28px;
      margin-bottom: 16px;
    }
  }
  @media screen and (max-width: 1200px) {
    .cover {
      padding-right: 52px;
    }
  }
  @media screen and (max-width: 576px) {
    & {
      display: block;
      text-align: center;
      margin: -40px 16px 0 16px;
    }
    .cover {
      width: 88%;
      margin: 0 auto 24px;
      padding-right: 0;
    }
  }
}
.mobile {
  .exception {
    margin-top: 30px;
    .img {
      padding-right: unset;

      img {
        height: 40%;
        max-width: 80%;
      }
    }
  }
}
</style>
