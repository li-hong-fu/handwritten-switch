<template>
  <div class="home-page">
    <div class="user-section">
      <el-row :gutter="40">
        <el-col :lg="12">
          <div class="grid-content">
            <h3 class="sub-title">能力简介</h3>
            <ul class="user-power">
              <li>
                1、精通 HTML、CSS、JavaScript 基础，高效还原设计稿，高质量实现业务逻辑交互，遵守代码规范。
              </li>
              <li>2、掌握并专注于使用 Vue、Element-ui 等基础框架进行研发，按极客已有规范严谨研发。</li>
              <li>3、掌握移动端开发，能兼容移动版H5、微信小程序移动版产品（Vant）。</li>
              <li>4、熟悉前端工程化搭建、webpack、Glup、Git。</li>
              <li>
                5、熟悉后端 Node.js，能操作
                Express、Koa能快速启动项目、独立敏捷开发。
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :lg="12">
          <div class="grid-content">
            <h3 class="sub-title">技能清单</h3>
            <ul class="user-power">
              <li>
                Web开发：
                <el-tag size="small">HTML</el-tag>
                <el-tag size="small">CSS</el-tag>
                <el-tag size="small" type="danger">JavaScript</el-tag>
              </li>
              <li>
                Web框架：
                <el-tag size="small" type="danger">Node.js</el-tag>
                <el-tag size="small">Express</el-tag>
                <el-tag size="small">Koa2</el-tag>
              </li>
              <li>
                前端框架：
                <el-tag size="small">jQuery</el-tag>
                <el-tag size="small" type="danger">Vue.js</el-tag>
                <el-tag size="small">Element UI</el-tag>
                <el-tag size="small" type="danger">微信小程序</el-tag>
              </li>
              <li>
                前端工具：
                <el-tag size="small">Webpack</el-tag>
                <el-tag size="small">Gulp</el-tag>
                <el-tag size="small">Vue CLI3</el-tag>
              </li>
              <li>
                数据存储：
                <el-tag size="small">MySQL</el-tag>
              </li>
              <li>
                版本管理：
                <el-tag size="small">Git</el-tag>
                <el-tag size="small">Github</el-tag>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="work-section">
      <h3 class="sub-title">项目经验</h3>
      <div class="block">
        <el-timeline>
          <el-timeline-item
            type="success"
            timestamp="2020.04 ～ 2020.07 扎克斯科技 - 前端开发，负责内部系统及外部业务的前端开发。"
            placement="top"
          >
            <el-row :gutter="40">
              <el-col :lg="12">
                <div class="grid-content">
                  <el-card>
                    <h4 class="card-title">
                      极客 - EDU（Emma）后台管理
                    </h4>
                    <p class="card-text">
                      <span>项目描述：</span
                      >EDU 是一个连接企业和学校的一个平台。整套体系的过程都是可跟踪和量化，学生的能力水平、技能广度	都通过项目来验证，有效的和企业进行人才匹配。
                    </p>
                    <p class="card-text">
                      <span>项目成就：</span>通过本项目，对 Node.js有更深入的了解。同时对Vue 、Axios 及 Element-Ui有实战行的应用。在技术点上还涉及到 MySQL数据库 和其他后端框架
                      Egg.js 的融合。
                    </p>
                  </el-card>
                </div>
              </el-col>
              <el-col :lg="12">
                <div class="grid-content">
                  <el-card>
                    <h4 class="card-title">
                      扎克斯 - IMS 数据管理
                    </h4>
                    <p class="card-text">
                      <span>项目描述：</span
                      >通过后台配置的内容在前台中进行展示，支撑企业的信息发布和信息管理。以及承接这类营销落地页收集用	户的购买行为信息，并进行跟踪、统计、反馈的管理系统。
                    </p>
                    <p class="card-text">
                      <span>项目成就：</span>通过本项目，在 Node.js 环境中使用 Express 快速搭建服务框架，并熟悉简单的 MySQL 数据库操作，可以完成数据的增删改查以及连表查询数据。同时，我们还对后端中 MVC 有深入的了解和实际的运用，懂得了在一个项目中数据是如何从数据库渲染到页面，页面是如何与服务端进行交互从而影响数据的变化。
                    </p>
                  </el-card>
                </div>
              </el-col>
            </el-row>
          </el-timeline-item>
          <el-timeline-item
            type="success"
            timestamp=""
            placement="top"
          >
            <el-row :gutter="40">
              <el-col :lg="12">
                <div class="grid-content">
                  <el-card>
                    <h4 class="card-title">
                      探月学院 - OKR 小程序
                    </h4>
                    <p class="card-text">
                      <span>项目描述：</span
                      >OKR 为探月学院内部研发的目标管理的系统，能够将目标管理自上而下贯穿到基层。通过要设定一个“目标”（Objective），然后，设定若干可以量化的“关键结果”（Key Results），用来帮助实现目标。
                    </p>
                    <p class="card-text">
                      <span>项目成就：</span>通过本项目首先对 OKR 有一个初步的认识，之前没有丁点概念，也熟悉企业的管理机制。在项目中使用 Koa2 来构建简易的 API，对 Nodejs API 的生产有更熟悉的运用，同时对小程序开发有一定的了解，能够完成负责业务场景下的小程序研发工作。
                    </p>
                  </el-card>
                </div>
              </el-col>
              <el-col :lg="12">
                <div class="grid-content">
                  <el-card>
                    <h4 class="card-title">
                      云微博
                    </h4>
                    <p class="card-text">
                      <span>项目描述：</span
                      >使用云开发音视频小程序，在腾讯云平台上对小程序的数据进行存储与操作，仿照微信朋友圈，完	成文字、音视频的发布与评论功能。
                    </p>
                    <p class="card-text">
                      <span>项目成就：</span>对微信小程序开发中云函数、云存储、云数据库集合的有进一步的了解，同时给我带来最大的影响是，前端在构建自己独立的项目时候，不需要依赖后端的接口来实现数据的获取和存储，或者一直在测试着自己的本地的假数据，可以独立完成项目开发。
                    </p>
                  </el-card>
                </div>
              </el-col>
            </el-row>
          </el-timeline-item>
          <el-timeline-item
            type="success"
            timestamp=""
            placement="top"
          >
            <el-row :gutter="40">
              <el-col :lg="12">
                <div class="grid-content">
                  <el-card>
                    <h4 class="card-title">
                      Toppro 未来用功 - 官网开发
                    </h4>
                    <p class="card-text">
                      <span>项目描述：</span
                      >Toppro 是个按小时算价的外包平台，企业充值提需求，然后分包兼职/全职的专家程序员。项目包含	前中后台，前台营销展示、中台给专家/雇主查看、录入数据，后台管理人员进行信息管理。
                    </p>
                    <p class="card-text">
                      <span>项目成就：</span>通过本项目，在HTML与Less的运用更加精准，从而在往后的页面编写布局方面有更好的体现。本项目重点在于Swipter轮播滚动，让我在今后在程序编写逻辑中得到更大的提升。
                    </p>
                  </el-card>
                </div>
              </el-col>
              <el-col :lg="12">
                <div class="grid-content">
                  <el-card>
                    <h4 class="card-title">
                      极客 - H5课程 
                    </h4>
                    <p class="card-text">
                      <span>项目描述：</span
                      >极客移动项目 H5 主要承载课程的播放以及营销直播的相关业务属性。
                    </p>
                    <p class="card-text">
                      <span>项目成就：</span>通过本项目，对 Vue.js、Vue CLI、Vue router、及 avnt-Ui有更深入的实战行的应用。技术点涉及到flexible与pxtorem的使用，让我对移动端业务更加熟悉。
                    </p>
                  </el-card>
                </div>
              </el-col>
            </el-row>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style type="text/css" lang="less" scoped>
.home-page {
  padding: 40px;
  .sub-title {
    font-size: 18px;
    margin-bottom: 16px;
  }
  .card-title {
    font-size: 16px;
    margin-bottom: 8px;
  }
  .card-text {
    font-size: 14px;
    color: #666;
    margin: 8px 0;
    span{
      font-size: 14px;
      color: #333;
      font-weight: 600;
      display: block;
    }
    a{
      color: #333;
      text-decoration: none;
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }
  }
  .user-power {
    list-style: none;
  }
  .grid-content {
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 2;
  }
  .el-tag {
    margin-right: 8px;
  }
}
</style>