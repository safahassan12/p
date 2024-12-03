// إضافة وظيفة عند الضغط على الزر
function startAction() {
    // إظهار رسالة ترحيب
    alert("مرحبًا بك! استمتع باستكشاف التطبيق.");
    
    // إضافة تأثير على الزر بعد الضغط
    const button = document.querySelector('.arrow-button');
    button.style.backgroundColor = '#333';
    button.style.color = '#fff';
    button.style.transform = 'scale(1.1)';
    
    // إعادة الشكل بعد فترة قصيرة
    setTimeout(() => {
      button.style.backgroundColor = 'white';
      button.style.color = '#333';
      button.style.transform = 'scale(1)';
    }, 200);
  }
  
  // تغيير النص تلقائيًا بعد التحميل
  document.addEventListener('DOMContentLoaded', () => {
    const welcomeText = document.querySelector('.welcome-text');
    const subtitle = document.querySelector('.subtitle');
  
    setTimeout(() => {
      welcomeText.textContent = 'Ready to Learn!';
      subtitle.textContent = 'Click below to begin!';
    }, 3000);
  });