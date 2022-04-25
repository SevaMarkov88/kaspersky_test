function FirstSection() {
  return (
    <section className="first-section">
      <div className="content-block content-block__first-section">
        <div className="first-section__text-block">
          <h1 className="first-section__title">Don’t let malware defeat you</h1>
          <div className="first-section__line"> </div>
          <h2 className="first-section__subtitle">Protect your devices with a&nbsp;security suite made for gamers</h2>
          <div className="first-section__paragraph">
            <svg className="first-section__arrow" width="20" height="20" viewBox="0 0 20 20" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M18.1253 6.13103L7.97281 16.1908L2 10.1173L4.13898 8.01376L8.00032 11.9402L16.0137 4L18.1253 6.13103Z"
                    fill="#00A88E"/>
            </svg>
            <p className="first-section__text">Gaming mode:
              <span className="first-section__span"> Ensures optimal PC&nbsp;performance while you play</span>
            </p>
          </div>
          <div className="first-section__paragraph">
            <svg className="first-section__arrow" width="20" height="20" viewBox="0 0 20 20" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M18.1253 6.13103L7.97281 16.1908L2 10.1173L4.13898 8.01376L8.00032 11.9402L16.0137 4L18.1253 6.13103Z"
                    fill="#00A88E"/>
            </svg>
          <p className="first-section__text">100% detection rate:
            <span className="first-section__span"> Never misses a threat</span>
          </p>
          </div>
          <div className="first-section__paragraph">
            <svg className="first-section__arrow" width="20" height="20" viewBox="0 0 20 20" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M18.1253 6.13103L7.97281 16.1908L2 10.1173L4.13898 8.01376L8.00032 11.9402L16.0137 4L18.1253 6.13103Z"
                    fill="#00A88E"/>
            </svg>
          <p className="first-section__text">Cutting-edge cybersecurity:
            <span className="first-section__span"> Runs on AI overseen by world-leading threat analysts</span>
          </p>
          </div>
        </div>
        <div className="first-section__img">
          <img src={require("../images/First-section-bg.png")} alt="Player"/>
        </div>
      </div>
    </section>
  )
}

export default FirstSection;
