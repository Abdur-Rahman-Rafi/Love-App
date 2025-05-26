import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const photos = [
  '/pic_01.jpg',
  '/pic_02.jpg',
  '/pic_03.jpg',
  '/pic_04.jpg',
  '/pic_05.jpg'
];

const timelineEvents = [
  {
    date: 'April 10, 2022',
    title: 'Our Love Journey Started',
    description: 'The day our eyes met and hearts connected.'
  },
  {
    date: 'April 11, 2022',
    title: 'First Date',
    description: 'Our magical first date under the starlit sky.'
  },
  {
    date: 'April 10, 2023',
    title: 'One Year Anniversary',
    description: 'Celebrating one year of pure love and happiness.'
  },
  {
    date: 'April 10, 2024',
    title: 'Two Year Anniversary',
    description: 'Celebrating one year of pure love and happiness.'
  },
  {
    date: 'April 10, 2025',
    title: 'Three Year Anniversary',
    description: 'Celebrating one year of pure love and happiness.'
  }
];

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Breakup info example
  const breakupCount = 3;
  const breakupReasons = [
    'Misunderstanding',
    'Distance',
    'Busy schedules'
  ];
  const goodDays = 25;

  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = Math.random() * 100 + 'vw';
      document.querySelector('.floating-hearts').appendChild(heart);
      setTimeout(() => heart.remove(), 4000);
    };

    const interval = setInterval(createHeart, 300);
    return () => clearInterval(interval);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="relative graffiti-container">
      <div className="floating-hearts" />

      {/* Graffiti borders */}
      <div className="graffiti-border top-border" />
      <div className="graffiti-border right-border" />
      <div className="graffiti-border bottom-border" />
      <div className="graffiti-border left-border" />

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex flex-wrap justify-center gap-6">
          {['Home', 'Our Story', 'Gallery', 'Love Letter', 'Timeline', 'BreakUp Counter'].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase().replace(/ /g, '-')}
              smooth={true}
              duration={500}
              className="nav-link text-pink-600 hover:text-pink-800 text-base sm:text-lg font-semibold cursor-pointer"
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>

      {/* Breaking News Ticker */}
      <div
        className="breaking-news bg-pink-600 text-white font-bold uppercase text-sm sm:text-base py-2 overflow-hidden whitespace-nowrap relative"
        style={{ top: '64px', position: 'fixed', width: '100%', zIndex: 60 }}
      >
        <motion.div
          className="inline-block"
          animate={{ x: ['100%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
        >
          BreakUp Counter: {breakupCount} | Reasons of Breakup: {breakupReasons.join(' • ')} | Total Good Days this Month: {goodDays}
        </motion.div>
      </div>

      {/* Push content down by navbar + ticker height */}
      <div style={{ paddingTop: '112px' }} />

      {/* Content sections */}
      <section id="home" className="section px-4 sm:px-8 md:px-16 lg:px-32 max-w-screen-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-pink-600 mb-8">
            Srabony Mim
          </h1>
          <div className="max-w-full mx-auto rounded-xl shadow-xl overflow-hidden">
            <Slider {...sliderSettings}>
              {photos.map((photo, index) => (
                <div key={index} className="px-2">
                  <img
                    src={photo}
                    alt={`Us ${index + 1}`}
                    className="rounded-xl shadow-lg w-full h-auto object-cover"
                    style={{ maxHeight: '700px' }}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </section>

      <section
        id="our-story"
        className="section bg-pink-50 py-20 px-4 sm:px-8 md:px-16 lg:px-32 max-w-screen-md mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-8 text-pink-600">Our Story</h2>
          <p className="text-lg leading-relaxed text-gray-700 max-w-xl mx-auto italic">
            It all began on a chilly winter day, when fate brought us together by chance.
            From that moment, every laugh, every smile, and every shared secret knitted our hearts closer.
            We've built memories through adventures, quiet moments, and endless support — proving that true love
            grows stronger with time.
            <br />
            <br />
            Here’s to us — a journey of love, friendship, and dreams coming true.
          </p>
        </motion.div>
      </section>

      <section id="love-letter" className="section bg-white py-20 px-4 sm:px-8 md:px-16 lg:px-32 max-w-screen-md mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-pink-700">My Love Letter to You</h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700 italic">
            Dear Srabony,
            <br />
            <br />
            Every moment with you feels like a beautiful dream come true.
            Your smile lights up my world, and your love makes my heart complete.
            You are my sunshine, my happiness, and my everything.
            <br />
            <br />
            Forever yours,
            <br />
            Rafi
          </p>
        </motion.div>
      </section>

      <section id="timeline" className="section px-4 sm:px-8 md:px-16 lg:px-32 max-w-screen-lg mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-pink-600">Our Journey</h2>
        <VerticalTimeline>
          {timelineEvents.map((event, index) => (
            <VerticalTimelineElement
              key={index}
              date={event.date}
              iconStyle={{ background: '#ff6b81', color: '#fff' }}
              contentStyle={{ background: '#fff', color: '#2f3542' }}
              contentArrowStyle={{ borderRight: '7px solid #ff6b81' }}
            >
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p>{event.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </section>

      <footer className="bg-white py-8 text-center px-4 sm:px-8">
        <p className="text-lg italic text-pink-700">"Forever Yours, Rafi"</p>
        <audio
          controls
          className="mt-4 mx-auto"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src="/song1.mp3" type="audio/mpeg" />
        </audio>
      </footer>

      {/* CSS Styles */}
      <style jsx>{`
        /* Graffiti border base */
        .graffiti-border {
          position: fixed;
          pointer-events: none;
          z-index: 10;
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
          filter: drop-shadow(0 0 3px #ff2e63);
          opacity: 0.75;
        }

        .top-border {
          top: 0;
          left: 0;
          width: 100%;
          height: 60px;
          background-image: url('/graffiti-top.svg');
        }

        .right-border {
          top: 0;
          right: 0;
          width: 60px;
          height: 100%;
          background-image: url('/graffiti-right.svg');
        }

        .bottom-border {
          bottom: 0;
          left: 0;
          width: 100%;
          height: 60px;
          background-image: url('/graffiti-bottom.svg');
        }

        .left-border {
          top: 0;
          left: 0;
          width: 60px;
          height: 100%;
          background-image: url('/graffiti-left.svg');
        }

        /* Heart animation style (existing) */
        .heart {
          position: fixed;
          bottom: 0;
          width: 15px;
          height: 15px;
          background: #ff6b81;
          transform: rotate(45deg);
          animation: floatUp 4s linear forwards;
          z-index: 1;
          opacity: 0.8;
        }
        .heart::before,
        .heart::after {
          content: "";
          position: absolute;
          width: 15px;
          height: 15px;
          background: #ff6b81;
          border-radius: 50%;
        }
        .heart::before {
          top: -7.5px;
          left: 0;
        }
        .heart::after {
          left: 7.5px;
          top: 0;
        }
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(45deg);
            opacity: 0.8;
          }
          100% {
            transform: translateY(-120vh) rotate(45deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
