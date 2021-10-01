import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import HOFImage from './../../assets/images/house.png'
import Jisc from './../../assets/images/jisc.png'
import Exeter from './../../assets/images/exeter.png'
import Brexit from './../../assets/images/brexit.png'
import Torquay from './../../assets/images/torquay.png'





const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: "People we've worked with",
    paragraph: 'And thats just a few.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="">
                      <img  src={HOFImage}></img>
                </div>
                
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="">
                  <p className="text-sm mb-0">
                  <img  src={Jisc}></img>
                      </p>
                </div>
                
              </div>
            </div>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="">
                  <p className="text-sm mb-0">
                  <img  src={Exeter}></img>
                      </p>
                </div>
                
              </div>
            </div>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="">
                  <p className="text-sm mb-0">
                  <img  src={Brexit}></img>
                      </p>
                </div>
                
              </div>
            </div>
            <div className="tiles-item reveal-from-left" data-reveal-delay="200">

              <div className="tiles-item-inner">
                <div className="">
                  <p className="text-sm mb-0">
                  <a href='https://torquayheights.co.uk/'>

                  <img  src={Torquay} alt='Torquay'></img>
                  </a>

                   </p>
                </div>
               
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;