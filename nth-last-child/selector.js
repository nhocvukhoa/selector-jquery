$(document).ready(function () {
  //nth-last-child(n): lấy ra phần tử từ vị trí cuối cùng (n chạy ngược từ dưới lên)
  //n=1 => vị trí cuối cùng, n=2 => vị trí trước vị trị cuối
  $(".paragraph-content p:nth-last-child(2)").css("background", "green");
});
