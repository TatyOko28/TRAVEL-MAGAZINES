import React from 'react';
import './WelcomePage.scss';  // Import the Sass file for styling

function WelcomePage() {
  return (
    <div className="welcome-page">
      <div className="text-section top">
        <h1 className='h1'>Welcome to Yue Club</h1>
        <p>一个人的私人定制旅行无贩卖品</p>
      </div>
      <div className="text-section middle">
        <p>我们提供品质、深度、专业的私人旅行服务。</p>
        <p>在全球旅行11年，稳定超60个国家。</p>
        <p>团队100%拥有海外学习工作经历。。</p>
      </div>
      <div className="text-section bottom">
        <div className="featured-products">
          <h2>Featured Products</h2>
          <p>独家推介</p>
          <p>一个产品只是我们信心的作品，每一个细节都是我们的用心。</p>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
