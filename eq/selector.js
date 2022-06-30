$(document).ready(function () {
  //eq(n): Xác định thành phần ở vị trí thứ n với n có thể âm, n=0 là vị trí đầu tiên, n=-1 là vị trí cuối cùng
  $('.list1 li').eq(3).css('background', 'green');
  $('.list2 li').eq(-4).css('background', 'red');
});
