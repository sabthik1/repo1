# CricketLive - Live Cricket Streaming Website

A modern, responsive cricket streaming website built with HTML, CSS, and JavaScript. This project provides a beautiful and interactive platform for watching live cricket matches with real-time updates and match information.

## 🏏 Features

### Live Streaming
- **Video Player**: Custom video player with controls (play/pause, volume, fullscreen)
- **Live Matches**: Real-time display of ongoing cricket matches
- **Match Information**: Live scoreboards, player statistics, and match status
- **Interactive Controls**: Full video player controls with smooth animations

### Match Management
- **Live Matches**: Display current ongoing matches with live scores
- **Upcoming Matches**: Schedule of future matches with reminder functionality
- **Match Cards**: Beautiful cards showing team information, scores, and match status
- **Reminder System**: Set reminders for upcoming matches

### User Interface
- **Modern Design**: Clean, modern UI with gradient backgrounds and smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Navigation**: Smooth scrolling navigation with active state highlighting
- **Animations**: CSS animations and transitions for enhanced user experience

### Interactive Features
- **Schedule Tabs**: Filter matches by Today, Tomorrow, or This Week
- **Live Updates**: Simulated real-time score and statistics updates
- **Notifications**: Toast notifications for user actions
- **Newsletter**: Email subscription functionality with validation

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. The website will load with all functionality ready to use

### File Structure
```
cricket-streaming-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🎨 Design Features

### Color Scheme
- **Primary Blue**: #1e40af (Navigation, buttons)
- **Success Green**: #059669 (Success states, live indicators)
- **Error Red**: #dc2626 (Live match indicators, errors)
- **Neutral Grays**: Various shades for text and backgrounds

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Font sizes adjust for different screen sizes

### Animations
- **Ball Bounce**: Cricket ball animation in hero section
- **Pulse Effect**: Live indicator pulsing animation
- **Hover Effects**: Smooth transitions on interactive elements
- **Loading States**: Button loading animations

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: Full feature set with side-by-side layouts
- **Tablet**: Adjusted layouts with maintained functionality
- **Mobile**: Stacked layouts with touch-friendly interactions

### Breakpoints
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔧 Functionality

### Navigation
- Smooth scrolling to sections
- Active state highlighting
- Mobile-responsive menu

### Match Cards
- Live match indicators
- Team information and scores
- Watch live functionality
- Reminder system

### Video Player
- Play/pause controls
- Volume control with slider
- Fullscreen functionality
- Settings panel

### Schedule System
- Tabbed interface (Today, Tomorrow, This Week)
- Dynamic content loading
- Reminder functionality
- Match details and venues

### Live Updates
- Simulated score updates every 30 seconds
- Statistics updates every 15 seconds
- Real-time match status changes

## 🎯 User Experience

### Accessibility
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Focus indicators

### Performance
- Optimized CSS animations
- Debounced scroll events
- Efficient DOM manipulation
- Minimal JavaScript footprint

### Notifications
- Toast notifications for user actions
- Auto-dismiss after 5 seconds
- Manual close functionality
- Success and error states

## 🛠️ Customization

### Adding New Matches
To add new matches, modify the match data in the HTML or update the JavaScript schedule data:

```javascript
const scheduleData = {
    'Today': [
        {
            date: 'Today',
            time: '8:00 PM IST',
            teams: 'Team A vs Team B',
            venue: 'Stadium Name, City'
        }
    ]
};
```

### Styling Customization
The CSS uses CSS custom properties for easy theming:

```css
:root {
    --primary-color: #1e40af;
    --success-color: #059669;
    --error-color: #dc2626;
}
```

### Adding Real Streaming
To integrate real streaming functionality:

1. Replace the placeholder video player with actual video streaming
2. Integrate with streaming APIs (YouTube, Vimeo, etc.)
3. Add WebRTC for real-time streaming
4. Implement authentication for premium content

## 📊 Browser Support

- **Chrome**: 80+
- **Firefox**: 75+
- **Safari**: 13+
- **Edge**: 80+

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎉 Acknowledgments

- **Font Awesome**: Icons
- **Google Fonts**: Inter font family
- **Cricket Icons**: Custom cricket-themed icons
- **CSS Grid & Flexbox**: Modern layout techniques

## 📞 Support

For support or questions:
- Create an issue on GitHub
- Contact the development team
- Check the documentation

---

**CricketLive** - Your ultimate destination for live cricket streaming and match updates! 🏏⚡