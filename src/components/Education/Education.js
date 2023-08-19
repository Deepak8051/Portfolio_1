import React, { Component } from 'react';
import classes from './Education.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { MdSchool } from 'react-icons/md';

import { FaSchool } from 'react-icons/fa';

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id='education'>
        <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.head}>MY JOURNEY</span>
          <section className={classes.container}>
            <div className={classes.container_content}>
              <div className={classes.row}>
                <div className={classes.row_md_12}>
                  <div className={classes.timeline_centered}>
                  <ScrollAnimation
                  offset={0}
                  animateIn='fadeInLeft'
                  duration={2.4}
                  animateOnce={true}
                  initiallyVisible={true}
                >
                  <article className={classes.timeline_entry}>
                    <div className={classes.timeline_icon}>
                      <MdSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Post Graduation at Bangalore Institute of technology <span>2021-2023</span>
                      </h2>
                      <p>
                        I completed my Post Graduation in MCA(Master of Computer Application)
                        from <a href='https://bit-bangalore.edu.in/'>MCA</a> with overall 7.6 CGPA.
                      </p>
                    </div>
                  </article>
                </ScrollAnimation>
                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={classes.timeline_icon}>
                          <MdSchool />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Undergraduation at Marwari College Bhagalpur Bihar <span>2017-2021</span>
                          </h2>
                          <p>
                            I completed my undergraduation in BCA(Bachelor of Computer Application)
                            from <a href='https://www.marwaricollegebgp.ac.in/'>BCA</a> with overall 70.25%.
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}>
                          <FaSchool />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Higher Education <span>2015-2017</span>
                          </h2>
                          <p>
                            I have completed my higher education From Bhagalpur National college Bhagalpur with major subjects as
                            Physics,Chemistry & Maths.{' '}
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>

            
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Education;
