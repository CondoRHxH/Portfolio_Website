import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useLanguage } from '../context/LanguageContext';
import '../assets/styles/Timeline.scss'

function Timeline() {
  const { t } = useLanguage();

  return (
    <div id="history">
      <div className="items-container">
        <h1>{t.timeline.title}</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date={t.timeline.finalYear}
            iconStyle={{ background: '#6d28d9', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">{t.timeline.eng}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t.timeline.engSchool}</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={t.timeline.thirdYear}
            iconStyle={{ background: '#6d28d9', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">{t.timeline.english}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t.timeline.englishSchool}</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2024"
            iconStyle={{ background: '#6d28d9', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">{t.timeline.tech}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t.timeline.techSchool}</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2022"
            iconStyle={{ background: '#6d28d9', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">{t.timeline.bac}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t.timeline.bacSchool}</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2009 - 2015"
            iconStyle={{ background: '#6d28d9', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">{t.timeline.diploma}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t.timeline.diplomaSchool}</h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;