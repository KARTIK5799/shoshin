
import PropTypes from 'prop-types'; 
import  moreIcon from '../../assets/pin.svg'
import   pinIcon from '../../assets/more.svg'
import styles from './Card.module.css'; 

const Card = ({ type, data }) => {
  const renderCardContent = () => {
    switch (type) {
      case 'colored':
        return <ColoredCard {...data} />;
      case 'chart':
        return <ChartedCard {...data} />;
      case 'announcement':
        return <AnnouncementCard {...data} />;
      case 'schedule':
        return <ScheduleCard {...data} />;
      case 'recentActivity':
        return <RecentActivityCard {...data} />;
      default:
        return <div>Invalid card type</div>;
    }
  };

  return <div className={styles.card}>{renderCardContent()}</div>;
};


Card.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};


const ColoredCard = ({ title, color, number, suggestion ,suggestionColor}) => (
  <div
    style={{ backgroundColor: color, padding: '20px', borderRadius: '8px' }}
    className={styles.colouredCard}
  >
    <h2 className={styles.coloredCardTitle}>{title}</h2>
    <p className={styles.coloredCardNumber}>{number}</p>
    <p className={styles.coloredCardSuggestion} style={{ color: suggestionColor}}>{suggestion}</p>
  </div>
);


ColoredCard.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  suggestion: PropTypes.string.isRequired,
  suggestionColor: PropTypes.string.isRequired,
};


const ChartedCard = ({ title, image, number, men, women, growth }) => (
  <div className={styles.chartCard}>
    <div className={styles.leftSideCardSec}>
      <h2 className={styles.chartedCardTitle}>{title}</h2>
      <p className={styles.chartedCardNumber}>{number}</p>
      <p className={styles.chartedCardSubheading}>{men} Men</p>
      <p className={styles.chartedCardSubheading}>{women} Women</p>
    </div>
    <div className={styles.rightSideCardSec}>
      <img src={image} alt="Chart" />
      <div className={styles.differenceTab}>
        {growth} Past month
      </div>
    </div>
  </div>
);


ChartedCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  men: PropTypes.number.isRequired,
  women: PropTypes.number.isRequired,
  growth: PropTypes.string.isRequired,
};


const AnnouncementCard = ({ announcements }) => (
  <div className={styles.announcementCard}>
    <div className={styles.announcementCardTitleSection}>
      <h2 className={styles.announcementCardTitle}>Announcement</h2>
      <select>
        <option>Today, 13 Sep 2021</option>
      </select>
    </div>

    <div className={styles.announcementSection}>
      {announcements.map((item, index) => (
        <div className={styles.announcement} key={index}>
          <div>
            <h2 className={styles.announcementTitle}>{item.title}</h2>
            <p className={styles.announcementTime}>{item.time}</p>
          </div>
          <div className={styles.iconSection}>
            <img src={pinIcon} alt="Pin Icon" />
            <img src={moreIcon} alt="More Icon" />
          </div>
        </div>
      ))}
    </div>

    <div className={styles.announcementCardSeeAllSection}>
      <p>See All Announcements</p>
    </div>
  </div>
);


AnnouncementCard.propTypes = {
  announcements: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    })
  ).isRequired,
};



const ScheduleCard = ({ schedule }) => (
  <div className={styles.scheduleCard}>
    <div className={styles.scheduleCardTitleSection}>
      <h2 className={styles.scheduleCardTitle}>Upcoming Schedule</h2>
      <select>
        <option>Today, 13 Sep 2021</option>
      </select>
    </div>

    <div className={styles.scheduleSection}>
      {schedule.map((item, index) => (
        <div className={styles.schedule} key={index}>
          <div>
            <h2 className={styles.scheduleTitle}>{item.task}</h2>
            <p className={styles.scheduleTime}>{item.time}</p>
          </div>
          <div className={styles.iconSection}>
            <img src={moreIcon} alt="More Icon" />
          </div>
        </div>
      ))}
    </div>

    <div className={styles.scheduleCardSeeAllSection}>
      <p>Create new schedule</p>
    </div>
  </div>
);

ScheduleCard.propTypes = {
  schedule: PropTypes.arrayOf(
    PropTypes.shape({
      task: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    })
  ).isRequired,
};





const RecentActivityCard = ({ RecentActivityTime, todaysActivity }) => (
  <div className={styles.recentActivityCard}>
    <h2 className={styles.recentActivityCardTitle}>Recently Activities</h2>
    <p className={styles.recentActivityCardTime}>{RecentActivityTime}</p>
    <h3 className={styles.recentActivityCardSubheading}>You Posted a New Job</h3>
    <p className={styles.recentActivityCardText}>
      Kindly check the requirements and terms of work and make sure everything is right.
    </p>
    <div className={styles.recentActivityCardSeeAllSection}>
      <p className={styles.recentActivityCardSeeAllSectionText}>
        Today you made {todaysActivity} Activities
      </p>
      <button className={styles.recentActivityCardSeeAllSectionButton}>See All Activity</button>
    </div>
  </div>
);

RecentActivityCard.propTypes = {
  RecentActivityTime: PropTypes.string.isRequired,
  todaysActivity: PropTypes.number.isRequired,
};



export default Card;
