import styles from './App.module.css';
import Card from './components/Card/Card';
import NavBar from './components/NavBar/NavBar';

function App() {
  const coloredCards = [
    { title: 'Available Position', color: '#ffefe7', number: 24, suggestion: '4 Urgently needed', suggestionColor: '#FF5151' },
    { title: 'New Employees', color: '#e8f0fb', number: 24, suggestion: '4 Active hiring', suggestionColor: '#3786F1' },
    { title: 'Department', color: '#fdebf9', number: 4, suggestion: '4 Departments', suggestionColor: '#EE61CF' },
  ];

  const chartedCards = [
    { title: 'Total Employees', image: 'src/assets/graph.png', number: 216, men: 120, women: 96, growth: '+2%' },
    { title: 'Talent Request', image: 'src/assets/graph.png', number: 16, men: 6, women: 10, growth: '+5%' },
  ];

  const announcements = [
    { title: 'Outing schedule for every department', time: '5 Minutes ago' },
    { title: 'Meeting HR Department', time: 'Yesterday, 12:30 PM' },
    { title: 'IT Department needs two more UX/UI Designers', time: 'Yesterday 09:15 AM' },
    { title: 'IT Department needs two more UX/UI Designers', time: 'Yesterday 09:15 AM' },
  ];

  const schedules = [
    { time: 'Today, 10:30 AM', task: 'Interview with candidates' },
    { time: 'Today, 11:30 AM', task: 'Meeting with product designer' },
    { time: '13 Sept 2021', task: 'Review candidate applications' },
  ];

  const recentActivities = [
    { RecentActivityTime: '10:40 AM, Fri 10 Sept 2021', todaysActivity: 10 }
  ];
  

  return (
    <>
      <NavBar />
      <main className={styles.dashboardSection}>
        <h1>Dashboard</h1>
        <div className={styles.mainDashboard}>
          <div className={styles.leftSide}>
            <div className={styles.coloredCards}>
              {coloredCards.map((card, index) => (
                <Card key={index} type="colored" data={card} />
              ))}
            </div>

            <div className={styles.chartCards}>
              {chartedCards.map((card, index) => (
                <Card key={index} type="chart" data={card} />
              ))}
            </div>

            <div className={styles.announcementSection}>
              <Card type="announcement" data={{ announcements }} />
            </div>
          </div>

          <div className={styles.rightSide}>
            <div className={styles.activitySection}>
            <Card type="recentActivity" data={recentActivities[0]} />
            </div>

            <div className={styles.scheduleSection}>
              <Card type="schedule" data={{ schedule: schedules }} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
