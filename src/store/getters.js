const getters = {
  map: state => state.map.map,
  currentComponent: state => state.map.currentComponent,
  landAnimation: state => state.map.landAnimation,
  chooseType: state => state.map.chooseType,
  coopInfo: state => state.base.coopInfo,
  onlineStatus: state => state.base.onlineStatus,

  rightShow: state => state.showDrawer.rightShow,
  warnShow: state => state.showDrawer.warnShow,
  leftShow: state => state.showDrawer.leftShow,
  fullWidth: state => state.showDrawer.fullWidth,

  //机械设备
  xjjList: state => state.equip.xjjList,
  gcjList: state => state.equip.gcjList,
  zyjList: state => state.equip.zyjList,
  zngcjList: state => state.equip.zngcjList,
  xhcList: state => state.equip.xhcList,
  pwjList: state => state.equip.pwjList,
  wrjList: state => state.equip.wrjList,
  wjjList: state => state.equip.wjjList,
  fsjList: state => state.equip.fsjList,
  sfjList: state => state.equip.sfjList,
  //环境监控设备
  scdList: state => state.env.scdList,
  zhwlList: state => state.env.zhwlList,

  trailInfo: state => state.equip.trailInfo,
  trailBase: state => state.equip.trailBase
};
export default getters;
