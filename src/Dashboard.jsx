import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import chatgptIcon from './assets/chatgpt.png';
import perplexityIcon from './assets/perplexity.png';
import claudeIcon from './assets/claude bot.png';
import copilotIcon from './assets/copilot.png';
import upArrow from './assets/up.png';
import downArrow from './assets/down.png';
import promptsIcon from './assets/prompts.png';
import citationsIcon from './assets/citations.png';
import visibilityIcon from './assets/visibility.png';
import contentIcon from './assets/content.png';
import crawlersIcon from './assets/crawlers.png';
import analyticsIcon from './assets/anlytics.png';
import teamIcon from './assets/team.png';

const Dashboard = () => {
  // Generate data for stacked bar chart with 15-minute intervals using real values
  const generateChartData = () => {
    const times = [];
    const startHour = 1;
    const endHour = 23;
    
    // Total values from the cards
    const chatGPTTotal = 11454;
    const perplexityTotal = 5950;
    const claudeTotal = 4391;
    const copilotTotal = 3504;
    
    // Generate time slots with distributed values
    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minute = 15; minute <= 45; minute += 30) {
        const timeStr = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        
        // Distribute totals across time slots with realistic patterns
        const timeSlot = (hour - startHour) * 2 + (minute === 15 ? 0 : 1);
        const totalSlots = (endHour - startHour + 1) * 2;
        
        // Create realistic distribution with peaks during business hours
        let multiplier = 1;
        if (hour >= 10 && hour <= 18) {
          multiplier = 1.5 + Math.random() * 0.5; // Higher during business hours
        } else if (hour >= 19 && hour <= 21) {
          multiplier = 1.2 + Math.random() * 0.3; // Moderate in evening
        } else {
          multiplier = 0.3 + Math.random() * 0.4; // Lower at night/early morning
        }
        
        const chatGPT = Math.floor((chatGPTTotal / totalSlots) * multiplier);
        const perplexity = Math.floor((perplexityTotal / totalSlots) * multiplier);
        const claude = Math.floor((claudeTotal / totalSlots) * multiplier);
        const copilot = Math.floor((copilotTotal / totalSlots) * multiplier);
        
        times.push({
          time: timeStr,
          ChatGPT: chatGPT,
          Perplexity: perplexity,
          Claude: claude,
          Copilot: copilot
        });
      }
    }
    return times;
  };

  const chartData = generateChartData();
  const styles = {
    container: {
      display: 'flex',
      height: '100vh',
      backgroundColor: '#f8fafc',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      overflow: 'hidden'
    },
    sidebar: {
      width: '256px',
      backgroundColor: 'white',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      padding: '16px'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '32px'
    },
    logoIcon: {
      width: '32px',
      height: '32px',
      backgroundColor: '#f97316',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '8px'
    },
    mainContent: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={{width: '200px', backgroundColor: 'white', borderRight: '1px solid #e5e7eb', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div>
          {/* Zapier Logo and Dropdown */}
          <div style={{display: 'flex', alignItems: 'center', padding: '8px', marginBottom: '24px', border: '1px solid #e5e7eb', borderRadius: '8px', cursor: 'pointer', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <div style={{width: '24px', height: '24px', backgroundColor: '#ff4f00', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '8px'}}>
                <span style={{color: 'white', fontWeight: 'bold', fontSize: '14px'}}>Z</span>
              </div>
              <span style={{fontWeight: '600', fontSize: '16px', color: '#111827'}}>Zapier</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" style={{width: '16px', height: '16px', color: '#6b7280'}}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
            </svg>
          </div>

          {/* Navigation Items */}
          <nav style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
            <a href="#" style={{display: 'flex', alignItems: 'center', padding: '10px 12px', borderRadius: '6px', textDecoration: 'none', color: '#374151', fontSize: '15px', fontWeight: '500'}}>
              <img src={visibilityIcon} alt="Visibility" style={{width: '20px', height: '20px', marginRight: '12px'}} />
              Visibility
            </a>
            <a href="#" style={{display: 'flex', alignItems: 'center', padding: '10px 12px', borderRadius: '6px', textDecoration: 'none', color: '#374151', fontSize: '15px', fontWeight: '500'}}>
              <img src={promptsIcon} alt="Prompts" style={{width: '20px', height: '20px', marginRight: '12px'}} />
              Prompts
            </a>
            <a href="#" style={{display: 'flex', alignItems: 'center', padding: '10px 12px', borderRadius: '6px', textDecoration: 'none', color: '#374151', fontSize: '15px', fontWeight: '500'}}>
              <img src={contentIcon} alt="Content" style={{width: '20px', height: '20px', marginRight: '12px'}} />
              Content
            </a>
            <a href="#" style={{display: 'flex', alignItems: 'center', padding: '10px 12px', borderRadius: '6px', textDecoration: 'none', color: '#374151', fontSize: '15px', fontWeight: '500', backgroundColor: '#f3f4f6', position: 'relative'}}>
              <img src={crawlersIcon} alt="Crawlers" style={{width: '20px', height: '20px', marginRight: '12px'}} />
              Crawlers
              <div style={{position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)', width: '3px', height: '20px', backgroundColor: '#3b82f6', borderRadius: '2px'}}></div>
            </a>
            <a href="#" style={{display: 'flex', alignItems: 'center', padding: '10px 12px', borderRadius: '6px', textDecoration: 'none', color: '#374151', fontSize: '15px', fontWeight: '500'}}>
              <img src={citationsIcon} alt="Citations" style={{width: '20px', height: '20px', marginRight: '12px'}} />
              Citations
            </a>
            <a href="#" style={{display: 'flex', alignItems: 'center', padding: '10px 12px', borderRadius: '6px', textDecoration: 'none', color: '#374151', fontSize: '15px', fontWeight: '500'}}>
              <img src={analyticsIcon} alt="Analytics" style={{width: '20px', height: '20px', marginRight: '12px'}} />
              Analytics
            </a>
          </nav>
        </div>

        {/* Team Link */}
        <div>
          <a href="#" style={{display: 'flex', alignItems: 'center', padding: '10px 12px', borderRadius: '6px', textDecoration: 'none', color: '#374151', fontSize: '15px', fontWeight: '500'}}>
            <img src={teamIcon} alt="Team" style={{width: '20px', height: '20px', marginRight: '12px'}} />
            Team
          </a>
        </div>
      </div>

      {/* Main content */}
      <div style={styles.mainContent}>
        {/* Header */}
        <div style={{backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={{width: '4px', height: '24px', backgroundColor: '#3b82f6', borderRadius: '2px', marginRight: '12px'}}></div>
            <h1 style={{fontSize: '20px', fontWeight: '600', color: '#111827', margin: 0}}>Crawler logs citation tracking</h1>
          </div>
          <div style={{display: 'flex', gap: '8px'}}>
            <button style={{display: 'flex', alignItems: 'center', padding: '8px 12px', borderRadius: '6px', border: '1px solid #e5e7eb', backgroundColor: '#f9fafb', color: '#374151', fontSize: '14px', fontWeight: '500', cursor: 'pointer'}}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" style={{width: '16px', height: '16px', marginRight: '8px', color: '#6b7280'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.035-.259a3.375 3.375 0 002.456-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.422-1.422L13.5 18.75l1.183-.394a2.25 2.25 0 001.422-1.422L16.875 15l.394 1.183a2.25 2.25 0 001.422 1.422l1.183.394-1.183.394a2.25 2.25 0 00-1.422 1.422z" />
              </svg>
              Models
            </button>
            <button style={{display: 'flex', alignItems: 'center', padding: '8px 12px', borderRadius: '6px', border: '1px solid #e5e7eb', backgroundColor: '#f9fafb', color: '#374151', fontSize: '14px', fontWeight: '500', cursor: 'pointer'}}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" style={{width: '16px', height: '16px', marginRight: '8px', color: '#6b7280'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M12 12.75h.008v.008H12v-.008zM12 15.75h.008v.008H12v-.008zM12 9h.008v.008H12V9zm3 12.75h.008v.008H15v-.008zM15 9h.008v.008H15V9zm3 12.75h.008v.008H18v-.008zM15 12.75h.008v.008H15v-.008z" />
              </svg>
              Last 7 days
            </button>
          </div>
        </div>

        {/* Dashboard content */}
        <div style={{flex: 1, padding: '12px', overflow: 'hidden'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '16px'}}>
            {/* ChatGPT Card */}
            <div style={{backgroundColor: 'white', padding: '16px', borderRadius: '8px', border: '1px solid #e5e7eb', minHeight: '60px'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <img src={chatgptIcon} alt="ChatGPT" style={{width: '18px', height: '18px', marginRight: '8px'}} />
                  <span style={{fontSize: '16px', fontWeight: '500', color: '#111827'}}>ChatGPT</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', color: '#10b981', fontSize: '14px', fontWeight: '500'}}>
                  +12%
                  <img src={upArrow} alt="Up" style={{width: '16px', height: '16px', marginLeft: '4px'}} />
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <div style={{width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#3b82f6', marginRight: '8px'}}></div>
                <span style={{fontSize: '20px', fontWeight: '600', color: '#111827'}}>11,454</span>
              </div>
            </div>

            {/* Perplexity Card */}
            <div style={{backgroundColor: 'white', padding: '16px', borderRadius: '8px', border: '1px solid #e5e7eb', minHeight: '60px'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <img src={perplexityIcon} alt="Perplexity" style={{width: '18px', height: '18px', marginRight: '8px'}} />
                  <span style={{fontSize: '16px', fontWeight: '500', color: '#111827'}}>Perplexity</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', color: '#10b981', fontSize: '14px', fontWeight: '500'}}>
                  +5%
                  <img src={upArrow} alt="Up" style={{width: '16px', height: '16px', marginLeft: '4px'}} />
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <div style={{width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#06b6d4', marginRight: '8px'}}></div>
                <span style={{fontSize: '20px', fontWeight: '600', color: '#111827'}}>5,950</span>
              </div>
            </div>

            {/* Claude Bot Card */}
            <div style={{backgroundColor: 'white', padding: '16px', borderRadius: '8px', border: '1px solid #e5e7eb', minHeight: '60px'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <img src={claudeIcon} alt="Claude Bot" style={{width: '18px', height: '18px', marginRight: '8px'}} />
                  <span style={{fontSize: '16px', fontWeight: '500', color: '#111827'}}>Claude Bot</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', color: '#ef4444', fontSize: '14px', fontWeight: '500'}}>
                  -3%
                  <img src={downArrow} alt="Down" style={{width: '16px', height: '16px', marginLeft: '4px'}} />
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <div style={{width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#cc785c', marginRight: '8px'}}></div>
                <span style={{fontSize: '20px', fontWeight: '600', color: '#111827'}}>4,391</span>
              </div>
            </div>

            {/* Copilot Card */}
            <div style={{backgroundColor: 'white', padding: '16px', borderRadius: '8px', border: '1px solid #e5e7eb', minHeight: '60px'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <img src={copilotIcon} alt="Copilot" style={{width: '18px', height: '18px', marginRight: '8px'}} />
                  <span style={{fontSize: '16px', fontWeight: '500', color: '#111827'}}>Copilot</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', color: '#10b981', fontSize: '14px', fontWeight: '500'}}>
                  +8%
                  <img src={upArrow} alt="Up" style={{width: '16px', height: '16px', marginLeft: '4px'}} />
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <div style={{width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ec4899', marginRight: '8px'}}></div>
                <span style={{fontSize: '20px', fontWeight: '600', color: '#111827'}}>3,504</span>
              </div>
            </div>
          </div>

          {/* Chart - Full Width */}
          <div style={{backgroundColor: 'white', padding: '12px', borderRadius: '8px', border: '1px solid #e5e7eb', marginBottom: '16px'}}>
            <h3 style={{fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '12px'}}>Citations by time</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
                <XAxis 
                  dataKey="time" 
                  tick={{ fontSize: 12 }}
                  interval={preserveInterval => {
                    const index = preserveInterval;
                    return index % 8 === 0; // Show every 8th label to avoid overcrowding
                  }}
                />
                <Tooltip />
                <ReferenceLine y={800} stroke="#666" strokeDasharray="3 3" />
                <Bar dataKey="ChatGPT" stackId="a" fill="#3b82f6" />
                <Bar dataKey="Perplexity" stackId="a" fill="#06b6d4" />
                <Bar dataKey="Claude" stackId="a" fill="#f97316" />
                <Bar dataKey="Copilot" stackId="a" fill="#ec4899" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Top Pages and Citation Sources - Side by Side */}
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>
            {/* Top Pages */}
            <div style={{backgroundColor: 'white', padding: '16px', borderRadius: '12px', border: '1px solid #e5e7eb'}}>
              <h3 style={{fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '16px'}}>Top Pages</h3>
              <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', backgroundColor: 'white', borderRadius: '8px', position: 'relative', overflow: 'hidden'}}>
                  <div style={{position: 'absolute', top: 0, left: 0, height: '100%', width: '100%', backgroundColor: '#f3f4f6', borderRadius: '8px'}}></div>
                  <div style={{position: 'absolute', top: 0, left: 0, height: '100%', width: '85%', backgroundColor: '#e5e7eb', borderRadius: '8px'}}></div>
                  <span style={{fontSize: '14px', color: '#111827', position: 'relative', zIndex: 1}}>/</span>
                  <span style={{fontSize: '14px', fontWeight: '600', color: '#111827', position: 'relative', zIndex: 1}}>3,436</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', backgroundColor: 'white', borderRadius: '8px', position: 'relative', overflow: 'hidden'}}>
                  <div style={{position: 'absolute', top: 0, left: 0, height: '100%', width: '100%', backgroundColor: '#f3f4f6', borderRadius: '8px'}}></div>
                  <div style={{position: 'absolute', top: 0, left: 0, height: '100%', width: '55%', backgroundColor: '#e5e7eb', borderRadius: '8px'}}></div>
                  <span style={{fontSize: '14px', color: '#111827', position: 'relative', zIndex: 1}}>/blog/what-is-ai-search</span>
                  <span style={{fontSize: '14px', fontWeight: '600', color: '#111827', position: 'relative', zIndex: 1}}>2,196</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', backgroundColor: 'white', borderRadius: '8px', position: 'relative', overflow: 'hidden'}}>
                  <div style={{position: 'absolute', top: 0, left: 0, height: '100%', width: '100%', backgroundColor: '#f3f4f6', borderRadius: '8px'}}></div>
                  <div style={{position: 'absolute', top: 0, left: 0, height: '100%', width: '52%', backgroundColor: '#e5e7eb', borderRadius: '8px'}}></div>
                  <span style={{fontSize: '14px', color: '#111827', position: 'relative', zIndex: 1}}>/pricing</span>
                  <span style={{fontSize: '14px', fontWeight: '600', color: '#111827', position: 'relative', zIndex: 1}}>2,102</span>
                </div>
              </div>
            </div>

            {/* Citation Sources */}
            <div style={{backgroundColor: 'white', padding: '16px', borderRadius: '12px', border: '1px solid #e5e7eb'}}>
              <h3 style={{fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '16px'}}>Citation Sources</h3>
              <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', backgroundColor: 'white', borderRadius: '8px', position: 'relative', overflow: 'hidden'}}>
                  <div style={{position: 'absolute', top: 0, left: 0, height: '100%', width: '100%', backgroundColor: '#f3f4f6', borderRadius: '8px'}}></div>
                  <div style={{position: 'absolute', top: 0, left: 0, height: '100%', width: '85%', backgroundColor: '#e5e7eb', borderRadius: '8px'}}></div>
                  <span style={{fontSize: '14px', color: '#111827', position: 'relative', zIndex: 1}}>ChatGPT</span>
                  <span style={{fontSize: '14px', fontWeight: '600', color: '#111827', position: 'relative', zIndex: 1}}>11,454</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', backgroundColor: 'white', borderRadius: '8px', position: 'relative', overflow: 'hidden'}}>
                  <div style={{position: 'absolute', top: 0, left: 0, height: '100%', width: '100%', backgroundColor: '#f3f4f6', borderRadius: '8px'}}></div>
                  <div style={{position: 'absolute', top: 0, left: 0, height: '100%', width: '44%', backgroundColor: '#e5e7eb', borderRadius: '8px'}}></div>
                  <span style={{fontSize: '14px', color: '#111827', position: 'relative', zIndex: 1}}>Perplexity</span>
                  <span style={{fontSize: '14px', fontWeight: '600', color: '#111827', position: 'relative', zIndex: 1}}>5,950</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', backgroundColor: 'white', borderRadius: '8px', position: 'relative', overflow: 'hidden'}}>
                  <div style={{position: 'absolute', top: 0, left: 0, height: '100%', width: '100%', backgroundColor: '#f3f4f6', borderRadius: '8px'}}></div>
                  <div style={{position: 'absolute', top: 0, left: 0, height: '100%', width: '26%', backgroundColor: '#e5e7eb', borderRadius: '8px'}}></div>
                  <span style={{fontSize: '14px', color: '#111827', position: 'relative', zIndex: 1}}>Copilot</span>
                  <span style={{fontSize: '14px', fontWeight: '600', color: '#111827', position: 'relative', zIndex: 1}}>3,504</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;