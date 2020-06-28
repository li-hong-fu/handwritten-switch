<template>
  <el-aside class="page-sider">
    <div class="user-info">
      <div class="user-avatar">
        <img src="../../assets/avatar.jpg" class="user-avatar-png">
      </div>
      <p class="user-name">黎鸿福</p>
      <p class="user-status">Front end Engineer</p>
    </div>
    <div class="user-info">
      <div class="user-info-title">个人信息</div>
      <div class="user-info-text">
        <i class="el-icon-trophy"></i>
        <span>毕业院校：中央广播电视大学（大专）</span>
      </div>
      <div class="user-info-text">
        <i class="el-icon-present"></i>
        <span>出生年月：1990.06.07（广州）</span>
      </div>
      <div class="user-info-text">
        <i class="el-icon-position"></i>
        <span>意向城市：广州</span>
      </div>
      <div class="user-info-text">
        <i class="el-icon-mobile-phone"></i>
        <span>联系方式：13265117700</span>
      </div>
      <div class="user-info-text">
        <i class="el-icon-wind-power"></i>
        <span>应聘职位：前端研发工程师</span>
      </div>
      <div class="user-info-text">
        <i class="el-icon-bank-card"></i>
        <span>期望月薪：8~10k</span>
      </div>
    </div>
    <div class="user-info">
      <div class="user-info-title">实习经历</div>
      <div class="user-info-text">
        <i class="el-icon-office-building"></i>
        <span>2019 扎克斯科技 - 前端实习</span>
      </div>
    </div>
  </el-aside>
</template>

<style lang="less" scoped>
.page-sider{
  padding: 20px 40px 40px;
  background-color: #5770ff;
  color: #ffffff;
  height: 100%;
  .user-info{
    margin: 40px 0;
    .user-avatar{
      text-align: center;
      .user-avatar-png{
        width: 110px;
        height: 110px;
        border-radius: 50%;
        margin-bottom: 20px;
      }
    }
    .user-name{
      font-size: 24px;
      font-weight: 500;
      text-align: center;
    }
    .user-status{
      margin-top: 8px;
      font-size: 16px;
      font-weight: 400;
      text-align: center;
    }
    .user-info-title{
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 8px;
    }
    .user-info-text{
      font-size: 14px;
      line-height: 2;
      i{
        margin-right: 8px;
        vertical-align: middle;
      }
    }
  }
}
</style>