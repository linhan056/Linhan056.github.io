// script.js

// 墨水晕开效果 (全局点击)
document.addEventListener('click', function (e) {
  const ripple = document.createElement('span');
  ripple.className = 'ink-ripple-effect';
  ripple.style.left = e.pageX + 'px';
  ripple.style.top = e.pageY + 'px';
  ripple.style.position = 'absolute';
  ripple.style.width = '10px';
  ripple.style.height = '10px';
  ripple.style.borderRadius = '50%';
  ripple.style.background = 'rgba(200,159,104,0.3)';
  ripple.style.transform = 'scale(0)';
  ripple.style.transition = 'transform 0.5s, opacity 0.5s';
  ripple.style.pointerEvents = 'none';
  ripple.style.zIndex = '9999';
  document.body.appendChild(ripple);
  setTimeout(() => {
    ripple.style.transform = 'scale(20)';
    ripple.style.opacity = '0';
  }, 10);
  setTimeout(() => {
    ripple.remove();
  }, 500);
});

// 档案过滤模拟 (仅演示)
document.querySelectorAll('.filter-tag').forEach(tag => {
  tag.addEventListener('click', function () {
    document.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    // 此处可添加实际过滤逻辑，目前仅作UI演示
  });
});


// 访客留言提交模拟
const msgForm = document.querySelector('.message-box');
if (msgForm) {
  const btn = msgForm.querySelector('.btn');
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    const textarea = msgForm.querySelector('textarea');
    if (textarea.value.trim() !== '') {
      alert('感谢分享。你的记忆，或许就是下一份档案的起点。');
      textarea.value = '';
    } else {
      alert('请留下你的线索。');
    }
  });
}

// 404页面彩蛋触发（这里简化，实际上可在404.html实现）
console.log('提示：查看源代码注释，或许有意外发现。');