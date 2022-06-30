$(document).ready(function () {
  //siblings(): Tìm tất cả anh chị em ruột cùng cấp, ngoại trừ chính nó
  $('.second').siblings().css("background","yellow");
  $('.title').siblings().css('background', 'red');
  //siblings('.selected'): Tìm tất cả anh chị em có cùng class được chọn như nó
  $('.content-detail').siblings('.content-detail').css('background', 'green');
});
