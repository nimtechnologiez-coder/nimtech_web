import React from "react";
import "../Styles/BlogNewsSection.css";

// SVG logo
const LogoSvg = () => (
  <svg width="38" height="52" viewBox="0 0 38 52" fill="none">
    <path d="M2 15L18.5 2L35.5 15" stroke="#fff" strokeWidth="5" strokeLinejoin="round"/>
    <path d="M19 1.5V41.5" stroke="#fff" strokeWidth="5" strokeLinecap="round"/>
    <path d="M2 28L19 41L36 28" stroke="#fff" strokeWidth="5" strokeLinejoin="round"/>
  </svg>
);

const BlogNewsPage = () => (
  <div className="blog-news-page">
    {/* Blog News Section */}
    <section className="blog-news-section">
      <div className="bn-left-col">
        <div className="bn-logo"><LogoSvg /></div>
        <div className="bn-insights">Insights</div>
        <div className="bn-title-row">
          <span className="bn-title-main">Blog and&nbsp;</span>
          <span className="bn-title-news">News</span>
        </div>
        <div className="bn-desc">
          Here’s our take on the latest topics pertaining to digital growth and 360° technology accelerations that any business most likely needs.
        </div>
        <button className="bn-read-btn">
          READ MORE <span>&#8594;</span>
        </button>
      </div>
      <div className="bn-right-col">
        <div className="bn-post-card">
          <div className="bn-post-title">
            Complete Website Development Checklist From Planning To Launch
          </div>
          <div className="bn-post-date">June 28, 2025</div>
          <div className="bn-post-desc">
            Your Go-To Website Development Checklist From Planning To Execution If you are creating a website, there is a lot to think about,
          </div>
          <div className="bn-post-read">
            READ MORE
          </div>
        </div>
      </div>
    </section>

    {/* Blog List */}
    <div className="blog-list">
      <div className="blog-row">
        <div className="blog-img-wrap">
          {/* Image placeholder */}
        </div>
        <div className="blog-info">
          <div className="blog-title">
            A Complete Guide To Medicine Delivery App Development Costs
          </div>
          <div className="blog-date">June 24, 2025</div>
          <div className="blog-desc">
            The Ultimate Guide To Medicine Delivery App Development Cost In 2025 Buying medicine online is now a common practice around the world.
          </div>
          <div className="blog-read-link">READ MORE</div>
        </div>
      </div>

      <div className="blog-row">
        <div className="blog-img-wrap">
          {/* Image placeholder */}
        </div>
        <div className="blog-info">
          <div className="blog-title">
            Digital Marketing For Pharma Companies: Strategies That Work In 2025
          </div>
          <div className="blog-date">June 20, 2025</div>
          <div className="blog-desc">
            Powerful Strategies Of 2025 For Digital Marketing For Pharma Companies Working in pharmaceuticals and still juggling with traditional marketing techniques? 2025 will
          </div>
          <div className="blog-read-link">READ MORE</div>
        </div>
      </div>
    </div>

    {/* CTA Section */}
    <section className="cta-section">
      <div className="cta-inner">
        <div className="cta-label">Ready to get started?</div>
        <h2>
          Be it any of your digital needs,<br />
          we'll provide you the solution <br />
          you're looking for.
        </h2>
        <button className="cta-btn">
          Let's Connect <span className="cta-arrow">&#8594;</span>
        </button>
      </div>
    </section>
  </div>
);

export default BlogNewsPage;
