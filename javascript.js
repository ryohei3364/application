function loadContent(page) {
  // 這裡選擇要更新的容器：.container
  var container = document.querySelector(".container");

  // 根據不同的頁面選項來替換 .container 的內容
  if (page === "project") {
    container.innerHTML = `
          <h2>作品分享</h2>
          <h3>第一屆TBIA生物開放資料數據松競賽</h3>
          <div class="project-gallery">
            <p>今年7月是我第一次參加數據分析競賽，當時接觸Python約半年多，讓我對於利用Python進行數據分析產生了興趣。因為參加競賽是能快速熟悉領域的一個方式，
            又有免費的專業工作坊能參加，抱持著多學多做、也能藉機增加自己的專案經驗的念頭，於是就決定報名參賽了。<br>
            因為我的主題 ｢鳥類新聞偏好議題｣ 需要爬取新聞網的鳥類資料，過程中複習了彭彭老師的爬蟲教學影片，工作坊學到了使用Tableau作圖表視覺化，很榮幸最後能得
            到競賽 ｢最佳人氣獎｣ 。 
            </p>
            <a href="https://tbiadata.tw/news/detail/16" target="_blank"><img src="./images/news-1.jpg" alt="新聞發佈" width="100%" /></a>
            <img src="./images/project-1.jpg" width="100%" alt="參賽海報" />
          </div>
        `;
  } else if (page === "video") {
    container.innerHTML = `
          <h2>我的影片</h2>
          <iframe src="https://www.youtube.com/embed/bd9MSQnSqSA" width="100%" height="400px" frameborder="0" allowfullscreen></iframe>
        `;
  }
}
