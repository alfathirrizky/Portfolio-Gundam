import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import ProjectCard from './components/ProjectCard'
import CertificateCard from './components/CertificateCard'

const projectsData = [
  {
    colorTheme: { border: 'border-blue-600', bgHover: 'bg-blue-500/10', textHover: 'group-hover:text-blue-600', text: 'text-blue-600' },
    tags: [
      { name: 'Power Apps', style: 'bg-purple-50 text-purple-600 border-purple-200' }
    ],
    title: 'Dashboard Internal DPIKSP',
    description: 'Dashboard Internal DPIKSP dikembangkan dengan tujuan utama untuk mendigitalisasi, memusatkan, dan meningkatkan efisiensi operasional harian divisi di lingkungan internal Bank Indonesia.',
    link: '#',
    images: [
      '/dashboard internal dpiksp/1.png',
      '/dashboard internal dpiksp/2.png',
      '/dashboard internal dpiksp/3.png',
      '/dashboard internal dpiksp/4.png',
      '/dashboard internal dpiksp/5.png',
      '/dashboard internal dpiksp/6.png',
      '/dashboard internal dpiksp/7.png',
      '/dashboard internal dpiksp/8.png',
      '/dashboard internal dpiksp/9.png',
      '/dashboard internal dpiksp/10.png',
      '/dashboard internal dpiksp/11.png',
      '/dashboard internal dpiksp/12.png'
    ]
  },
  {
    colorTheme: { border: 'border-amber-500', bgHover: 'bg-amber-500/10', textHover: 'group-hover:text-amber-500', text: 'text-amber-500' },
    tags: [
      { name: 'Power Apps', style: 'bg-amber-50 text-amber-600 border-amber-200' },
      { name: 'Power BI', style: 'bg-red-50 text-red-600 border-red-200' }
    ],
    title: 'Dashboard Monitoring Digitalisasi Sistem Pembayaran',
    description: 'Dashboard Monitoring Sistem Pembayaran dikembangkan dengan tujuan utama untuk menyediakan pusat pemantauan analitik terpadu yang mendukung inisiatif strategis Bank Indonesia dalam mengakselerasi digitalisasi sistem pembayaran regional. Secara spesifik, sistem berbasis Microsoft Power Apps ini dirancang untuk melacak indikator kinerja pembayaran secara real-time, mengevaluasi efektivitas jangkauan program edukasi publik, serta memvisualisasikan tren perkembangan ekosistem digital daerah.',
    link: '#',
    images: [
      '/Monitoring Digitalisasi Sistem Pembayaran/1.png',
      '/Monitoring Digitalisasi Sistem Pembayaran/2.png',
      '/Monitoring Digitalisasi Sistem Pembayaran/3.png',
      '/Monitoring Digitalisasi Sistem Pembayaran/4.png',
      '/Monitoring Digitalisasi Sistem Pembayaran/5.png',
      '/Monitoring Digitalisasi Sistem Pembayaran/6.png',
      '/Monitoring Digitalisasi Sistem Pembayaran/7.png',
      '/Monitoring Digitalisasi Sistem Pembayaran/8.png',
      '/Monitoring Digitalisasi Sistem Pembayaran/9.png',
      '/Monitoring Digitalisasi Sistem Pembayaran/10.png'
    ]
  },
  {
    colorTheme: { border: 'border-green-500', bgHover: 'bg-green-500/10', textHover: 'group-hover:text-green-500', text: 'text-green-500' },
    tags: [
      { name: 'MERN Stack', style: 'bg-purple-50 text-purple-600 border-purple-200' },
      { name: 'Python', style: 'bg-pink-50 text-pink-600 border-pink-200' }
    ],
    title: 'HealthDash',
    description: 'HealthDash adalah aplikasi survei dan analitik data berbasis web yang dirancang untuk mengumpulkan, memproses, dan mengklasifikasikan data secara cerdas. Sistem ini mengintegrasikan model algoritma klasifikasi Decision Tree untuk menganalisis pola dari hasil kuesioner secara otomatis dan menghasilkan wawasan analitik yang terstruktur. Dikembangkan melalui pendekatan metodologi prototyping, sistem ini dirancang agar adaptif terhadap kebutuhan pengguna melalui iterasi pengujian yang cepat, menjadikannya platform yang andal untuk penelitian, evaluasi data, dan pengambilan keputusan yang berlandaskan pada pemodelan klasifikasi.',
    link: '#',
    images: [
      '/HealthDash/Home Page.png',
      '/HealthDash/Survei Page.png',
      '/HealthDash/1.png',
      '/HealthDash/2.png',

    ]
  },
  {
    colorTheme: { border: 'border-pink-500', bgHover: 'bg-pink-500/10', textHover: 'group-hover:text-pink-500', text: 'text-pink-500' },
    tags: [
      { name: 'Figma', style: 'bg-purple-50 text-purple-600 border-purple-200' },
      { name: 'UI/UX', style: 'bg-pink-50 text-pink-600 border-pink-200' }
    ],
    title: 'TenanginDulu',
    description: '"Tenangin Dulu" dirancang secara komprehensif menggunakan Figma sebagai solusi digital inovatif yang berfokus pada peningkatan kesadaran dan dukungan kesehatan mental bagi anak muda.',
    link: '#',
    images: ['/gemastik (2).png']
  },
  {
    colorTheme: { border: 'border-blue-800', bgHover: 'bg-blue-800/10', textHover: 'group-hover:text-blue-800', text: 'text-blue-800' },
    tags: [
      { name: 'Laravel', style: 'bg-red-50 text-red-600 border-red-200' },
      { name: 'Filament', style: 'bg-orange-50 text-orange-600 border-orange-200' }
    ],
    title: 'ALCarRent',
    description: 'ALCarRent adalah sistem informasi manajemen penyewaan mobil berbasis web yang dirancang untuk mendigitalisasi dan menyederhanakan alur proses reservasi kendaraan.',
    link: '#',
    images: [
      '/alcarrent/3.png',
      '/alcarrent/1.png',
      '/alcarrent/2.png',
    ]
  },
  {
    colorTheme: { border: 'border-blue-800', bgHover: 'bg-blue-800/10', textHover: 'group-hover:text-blue-800', text: 'text-blue-800' },
    tags: [
      { name: 'Javascript', style: 'bg-orange-50 text-orange-600 border-orange-200' },
      { name: 'Gemini API', style: 'bg-blue-50 text-blue-600 border-blue-200' }
    ],
    title: 'FIKSP CHATBOT',
    description: '@FIKSP_BOT adalah asisten virtual interaktif berbasis Telegram yang dikembangkan menggunakan framework Node.js (Telegraf) dan ditenagai oleh integrasi Gemini AI API. Chatbot ini dirancang sebagai solusi produktivitas cerdas yang memanfaatkan teknik Retrieval-Augmented Generation (RAG) untuk mengeksekusi berbagai tugas analitik dan administratif secara otomatis. Fitur utama sistem ini mencakup kemampuan untuk melakukan kueri data pada dataset Excel, merangkum dokumen PDF, mentranskripsi video YouTube, dan memproses input pesan suara. Selain itu, chatbot ini juga dilengkapi dengan fungsionalitas manajemen waktu yang terintegrasi langsung dengan Google Calendar untuk kemudahan penjadwalan, menjadikannya platform asisten digital yang responsif, adaptif, dan multifungsi.',
    link: '#',
    images: [
      '/chatbot/1.png',
      '/chatbot/2.png',
      '/chatbot/3.png',
      '/chatbot/4.png',
      '/chatbot/5.png',
      '/chatbot/6.png',
      '/chatbot/7.png'
    ]
  },

];

const certificatesData = [
  {
    colorTheme: { border: 'border-amber-500', bgHover: 'bg-amber-500/5', textHover: 'group-hover:text-amber-500', buttonHover: 'hover:bg-amber-500' },
    issuer: 'Internal Bank Indonesia',
    issuerStyle: 'bg-amber-50 text-amber-600 border-amber-200',
    year: '2026',
    title: 'Sertifikat Magang Bank Indonesia',
    credentialId: 'GCA-1029384756',
    link: '#',
    image: '/sertifikatMagang.png'
  },
  {
    colorTheme: { border: 'border-amber-500', bgHover: 'bg-amber-500/5', textHover: 'group-hover:text-amber-500', buttonHover: 'hover:bg-amber-500' },
    issuer: 'BNSP',
    issuerStyle: 'bg-amber-50 text-amber-600 border-amber-200',
    year: '2026',
    title: 'Sertifikat BNSP',
    credentialId: 'GCA-1029384756',
    link: '#',
    image: '/BNSP.jpeg'
  },
  {
    colorTheme: { border: 'border-amber-500', bgHover: 'bg-amber-500/5', textHover: 'group-hover:text-amber-500', buttonHover: 'hover:bg-amber-500' },
    issuer: 'Dicoding',
    issuerStyle: 'bg-amber-50 text-amber-600 border-amber-200',
    year: '2023',
    title: 'Sertifikat Manajemen Proyek',
    credentialId: 'GCA-1029384756',
    link: '#',
    image: '/ManajemenProyek.png'
  },
  {
    colorTheme: { border: 'border-amber-500', bgHover: 'bg-amber-500/5', textHover: 'group-hover:text-amber-500', buttonHover: 'hover:bg-amber-500' },
    issuer: 'Dicoding',
    issuerStyle: 'bg-amber-50 text-amber-600 border-amber-200',
    year: '2024',
    title: 'Sertifikat Python',
    credentialId: 'GCA-1029384756',
    link: '#',
    image: '/python.png'
  },
  {
    colorTheme: { border: 'border-blue-500', bgHover: 'bg-blue-500/5', textHover: 'group-hover:text-blue-500', buttonHover: 'hover:bg-blue-500' },
    issuer: 'Dicoding',
    issuerStyle: 'bg-blue-50 text-blue-600 border-blue-200',
    year: '2024',
    title: 'Data Analis',
    credentialId: 'MFC-2029384756',
    link: '#',
    image: '/dataanalis.png'
  },
  {
    colorTheme: { border: 'border-red-500', bgHover: 'bg-red-500/5', textHover: 'group-hover:text-red-500', buttonHover: 'hover:bg-red-500' },
    issuer: 'Kemendikbudristek',
    issuerStyle: 'bg-red-50 text-red-600 border-red-200',
    year: '2025',
    title: 'Gemastik',
    credentialId: 'DC-3029384756',
    link: '#',
    image: '/gemastik.png'
  },
  {
    colorTheme: { border: 'border-red-500', bgHover: 'bg-red-500/5', textHover: 'group-hover:text-red-500', buttonHover: 'hover:bg-red-500' },
    issuer: 'Kemendikbudristek',
    issuerStyle: 'bg-red-50 text-red-600 border-red-200',
    year: '2023',
    title: 'Pemrograman SQL',
    credentialId: 'DC-3029384756',
    link: '#',
    image: '/sql.png'
  },
  {
    colorTheme: { border: 'border-red-500', bgHover: 'bg-red-500/5', textHover: 'group-hover:text-red-500', buttonHover: 'hover:bg-red-500' },
    issuer: 'Kemendikbudristek',
    issuerStyle: 'bg-red-50 text-red-600 border-red-200',
    year: '2025',
    title: 'PKM-PM',
    credentialId: 'DC-3029384756',
    link: '#',
    image: '/pkmpm.jpg'
  }
];

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="Hero min-h-screen w-full relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/background.jpg')` }}>
          <div className="absolute inset-0 bg-white/80"></div>
          <div className="relative z-10 flex flex-col md:flex-row min-h-screen items-center justify-between px-6 lg:px-40 gap-12 pt-32 pb-16 md:py-20">
            <div className="flex-1 max-w-2xl text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="h-2 w-2 bg-blue-600 rounded-full animate-pulse shadow-[0_0_8px_rgba(37,99,235,0.8)]"></div>
                <p className="text-blue-600 tracking-widest text-xs font-bold uppercase">System Initialized // Status: Online</p>
                <div className='h-1 bg-red-500 w-67'></div>
              </div>
              <h1 className='text-5xl lg:text-7xl font-extrabold text-white tracking-tighter leading-none mb-6'>
                BRIDGING <span className="text-blue-600">DATA</span>,<br />
                <span className="text-amber-500">DESIGN</span> & <span className="text-white">DEV</span>
              </h1>
              <p className="text-base lg:text-lg text-gray-700 font-medium leading-relaxed mb-8 max-w-xl mx-auto md:mx-0 font-sans">
                I transform complex datasets into intuitive UI/UX designs and build them into high-performance, interactive web applications.
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <a href="#Projects" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 uppercase tracking-widest text-sm transition-all hover:-translate-y-1 shadow-lg shadow-blue-500/30">
                  Explore Projects
                </a>
              </div>
              <div className="flex justify-center md:justify-start gap-6 mt-10 text-xs font-bold text-gray-500 tracking-widest uppercase">
                <a href="https://github.com/alfathirrizky" className="hover:text-blue-600 transition-colors">Github</a>
                <a href="https://www.linkedin.com/in/alfathir-rizky-harsya/" className="hover:text-blue-600 transition-colors">LinkedIn</a>
              </div>
            </div>
            <div className='bg-white rounded-xl p-6 w-full max-w-sm shadow-2xl relative border border-gray-200 shrink-0'>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-blue-600 rounded-tr-xl"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-blue-600 rounded-bl-xl"></div>
              <div className="flex justify-between items-center mb-5 border-b border-gray-100 pb-3">
                <h2 className='text-xs font-bold text-gray-500 tracking-widest uppercase'>Pilot Profile //</h2>
                <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.8)]"></div>
              </div>
              <div className="overflow-hidden rounded-lg mb-5 border-2 border-gray-100">
                <img src="/pilot.png" alt="Alfathir Rizky Harsya" className='w-full h-70 object-cover hover:scale-110 transition-transform duration-700' />
              </div>
              <div className='flex flex-col gap-1 text-xs md:text-sm uppercase tracking-wide'>
                <div className='flex justify-between items-center border-b border-gray-50 pb-2'>
                  <p className="font-bold text-gray-500 text-xs">Nama:</p>
                  <p className="font-bold text-red-500 text-right text-xs">Alfathir Rizky Harsya</p>
                </div>
                <div className='flex justify-between items-center border-b border-gray-50 pb-2'>
                  <p className="font-bold text-gray-500 text-xs">Domisili:</p>
                  <p className="font-bold text-blue-600 text-right text-xs">Kota Tangerang, Banten</p>
                </div>
                <div className='flex justify-between items-center'>
                  <p className="font-bold text-gray-500 text-xs">Status:</p>
                  <p className="font-bold text-yellow-500 text-right text-xs">Fresh Graduate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='min-h-screen bg-white text-gray-900 py-24 px-6 lg:px-40 relative overflow-hidden' id='About'>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[40px_40px]"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-16">
              <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-widest uppercase">
                <span className="text-red-500">02 //</span> About
              </h2>
              <div className="h-0.5 flex-1 bg-linear-to-r from-red-500 to-transparent"></div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Wadah 3D Model Viewer */}
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-50 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-200 flex justify-center items-center overflow-hidden relative shrink-0">
                {/* Aksen Sudut Mekanikal */}
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-500 mt-2 mr-2 z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-500 mb-2 ml-2 z-10 pointer-events-none"></div>

                {/* Komponen Model 3D (Ganti 'src' dengan file .glb/.gltf Anda di folder public) */}
                <model-viewer
                  src="rx-93_nu_gundam.glb"
                  alt="3D Robot Model"
                  auto-rotate="true"
                  camera-controls="true"
                  style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
                ></model-viewer>
              </div>

              {/* Teks Deskripsi */}
              <div className="flex-1 bg-white border border-gray-100 p-6 md:p-8 shadow-xl rounded-xl relative group">
                <p className="font-mono text-xs md:text-sm text-red-500 mb-3 tracking-widest uppercase flex items-center gap-2">
                  <span className="animate-pulse">_</span> PERSONAL_LOG
                </p>
                <p className="text-sm md:text-base font-sans text-gray-700 leading-relaxed max-w-2xl">
                  Saya seorang mahasiswa sistem informasi dengan keahlian di frontend development, UI/UX design, dan analisis data. Terbiasa membangun antarmuka web yang responsif, merancang pengalaman pengguna berbasis riset, serta mengolah dan memvisualisasikan data untuk menghasilkan insight yang dapat ditindaklanjuti. Cepat beradaptasi, senang belajar teknologi baru, dan terbiasa bekerja dalam tim lintas disiplin.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className='py-24 px-6 lg:px-40 relative bg-slate-50 text-gray-900 border-y border-gray-200'>
          {/* Latar Belakang Dot */}
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(0,0,0,0.05) 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
              <div className="flex items-center gap-4 w-full md:w-auto">
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-widest uppercase">
                  <span className="text-gray-400">#</span> SYSTEM_TOOLS
                </h2>
              </div>
              <p className="font-mono text-xs md:text-sm text-gray-500 hidden md:block">
                // ACTIVE_TECHNOLOGIES_AND_FRAMEWORKS
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {[
                { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
                { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
                { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
                { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
                { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
                { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
                { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
                { name: 'Ms Excel', icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Microsoft_Office_Excel_%282019%E2%80%932025%29.svg' },
                { name: 'Power Apps', icon: 'https://msicons.com/icons/power-platform/PowerApps_scalable.svg' },
                { name: 'Power BI', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
                { name: 'Canva', icon: 'https://www.vectorlogo.zone/logos/canva/canva-ar21.svg' },
                { name: 'GitHub', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' }
              ].map((tool, idx) => (
                <div key={idx} className="bg-white border border-gray-200 p-4 relative group hover:border-blue-500 transition-colors shadow-sm flex flex-col items-center justify-center h-28 hover:-translate-y-1 transform duration-300 gap-3">
                  {/* Sudut Mekanikal */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gray-300 group-hover:border-blue-500 transition-colors"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gray-300 group-hover:border-blue-500 transition-colors"></div>

                  {/* Logo Tool */}
                  <img src={tool.icon} alt={tool.name} className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" />

                  {/* Nama Tool */}
                  <span className="font-mono font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-center text-xs md:text-sm">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='min-h-screen bg-white text-gray-900 py-24 px-6 lg:px-40 relative overflow-hidden' id='Projects'>
          {/* Latar Belakang Garis Diagonal */}
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.02) 0, rgba(0,0,0,0.02) 2px, transparent 2px, transparent 8px)' }}></div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-16">
              <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-widest uppercase">
                <span className="text-blue-600">03 //</span> Projects
              </h2>
              <div className="h-0.5 flex-1 bg-linear-to-r from-blue-600 to-transparent"></div>
            </div>

            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">

              {projectsData.map((project, idx) => (
                <ProjectCard key={idx} {...project} onOpen={() => {
                  setSelectedProject(project);
                  setCurrentImageIndex(0);
                }} />
              ))}

            </div>
          </div>
        </div>
        <div className='min-h-screen bg-gray-50 text-gray-900 py-24 px-6 lg:px-40 relative overflow-hidden' id='Certificate'>
          {/* Latar Belakang Titik/Dot Matrix */}
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(0,0,0,0.05) 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-16">
              <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-widest uppercase">
                <span className="text-amber-500">04 //</span> Certificates
              </h2>
              <div className="h-0.5 flex-1 bg-linear-to-r from-amber-500 to-transparent"></div>
            </div>

            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-10 pt-4">

              {certificatesData.map((cert, idx) => (
                <CertificateCard key={idx} {...cert} onOpen={() => setSelectedCertificate(cert)} />
              ))}

            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="bg-gray-950 text-gray-400 py-12 px-6 lg:px-40 relative border-t-2 border-gray-900 overflow-hidden">
          {/* Latar Belakang Garis */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            backgroundPosition: 'center center'
          }}></div>

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3 mb-4">
                <img className="h-8 md:h-10 opacity-80" src="/logo.png" alt="Logo" />
                <h2 className="text-xl font-bold text-white tracking-widest">PORTFOLIO</h2>
              </div>
              <p className="font-mono text-xs text-gray-500 max-w-xs text-center md:text-left mb-4">
                SYSTEM_LOG: Front-end engineering and design portfolio initialized. Built with React and Tailwind CSS.
              </p>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
                <p className="text-green-500 font-mono text-[10px] tracking-widest uppercase">All Systems Operational</p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="flex gap-4 mb-2">
                {/* GitHub */}
                <a href="https://github.com/alfathirrizky" className="w-10 h-10 border border-gray-800 bg-gray-900 flex items-center justify-center text-gray-400 hover:text-blue-500 hover:border-blue-500 transition-colors group relative">
                  <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gray-500 group-hover:border-blue-500 transition-colors"></span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/alfathir-rizky-harsya/" className="w-10 h-10 border border-gray-800 bg-gray-900 flex items-center justify-center text-gray-400 hover:text-blue-500 hover:border-blue-500 transition-colors group relative">
                  <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gray-500 group-hover:border-blue-500 transition-colors"></span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest text-center md:text-right">
                &copy; 2026 Portfolio. All rights reserved.<br />
                <span className="text-gray-700">Design ID: RX-78</span>
              </p>
            </div>
          </div>

          {/* Aksen Bawah */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-blue-900 to-transparent"></div>
        </footer>

        {/* Modal Pop-up untuk Project Detail */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 bg-gray-950/80 backdrop-blur-sm animate-modal-backdrop">
            <div className="bg-white max-w-5xl w-full border border-gray-200 shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh] animate-modal-content">
              {/* Aksen Modal */}
              <div className={`absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 ${selectedProject.colorTheme.border}`}></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-white">
                <div className="h-full w-1/3 bg-gray-900"></div>
              </div>

              {/* Header Modal */}
              <div className="px-6 pt-2 pb-3 md:px-8 md:pt-4 flex justify-between items-start border-b border-gray-100">
                <div className="pr-8">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {selectedProject.tags.map((tag, i) => (
                      <span key={i} className={`text-[8px] font-mono px-2 py-1 ${tag.style}`}>
                        {tag.name}
                      </span>
                    ))}
                  </div>
                  <h2 className={`text-lg md:text-xl font-extrabold uppercase tracking-widest text-gray-900`}>
                    {selectedProject.title}
                  </h2>
                </div>
                <button onClick={() => setSelectedProject(null)} className="text-gray-400 hover:text-red-500 transition-colors p-2 cursor-pointer bg-gray-50 hover:bg-red-50 rounded-full shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>

              {/* Body Modal */}
              <div className="px-6 pt-4 pb-6 md:px-8 md:pt-5 md:pb-8 overflow-y-auto scrollbar-hide">
                <div className="h-48 md:h-72 lg:h-96 bg-gray-50 border border-gray-300 mb-6 relative overflow-hidden group">

                  {/* Carousel Images Area */}
                  <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out">
                    {selectedProject.images && selectedProject.images.map((img, i) => (
                      <div
                        key={i}
                        className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ${i === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                      >
                        {typeof img === 'string' ? (
                          <img src={img} alt={`Screenshot ${i + 1}`} className="w-full h-full object-contain" />
                        ) : (
                          <>
                            <svg className="w-12 h-12 mb-3 opacity-50 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            <span className="text-gray-400 font-mono font-bold tracking-widest">PROJECT_IMG_0{img}</span>
                          </>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Carousel Controls */}
                  {selectedProject.images && selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                      </button>

                      {/* Carousel Indicators */}
                      <div className="absolute bottom-4 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex gap-2">
                        {selectedProject.images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentImageIndex(i)}
                            className={`w-2 h-2 rounded-full transition-all ${i === currentImageIndex ? 'bg-blue-600 w-4' : 'bg-gray-300 hover:bg-gray-400'}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <h3 className="text-xs font-bold text-gray-900 mb-2 uppercase tracking-widest">System Overview</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6 font-sans">
                  {selectedProject.description}
                </p>
              </div>

              {/* Footer Modal */}
              <div className="p-2 md:p-2 bg-gray-50 border-t border-gray-200 flex flex-wrap justify-end">
                <button onClick={() => setSelectedProject(null)} className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-bold uppercase tracking-widest text-xs hover:bg-gray-200 transition-colors cursor-pointer w-full md:w-auto">
                  Close Terminal
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Pop-up untuk Certificate Detail */}
        {selectedCertificate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/80 backdrop-blur-sm animate-modal-backdrop">
            <div className="bg-white max-w-2xl w-full border border-gray-200 shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh] animate-modal-content">
              {/* Aksen Modal */}
              <div className={`absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 ${selectedCertificate.colorTheme.border}`}></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-200">
                <div className="h-full w-1/3 bg-gray-900"></div>
              </div>

              {/* Header Modal */}
              <div className="p-6 md:p-8 flex justify-between items-start border-b border-gray-100">
                <div className="pr-8">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className={`text-[10px] font-mono px-2 py-1 ${selectedCertificate.issuerStyle}`}>
                      {selectedCertificate.issuer}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-1 bg-gray-100 text-gray-600 border border-gray-200">
                      {selectedCertificate.year}
                    </span>
                  </div>
                  <h2 className={`text-2xl md:text-3xl font-extrabold uppercase tracking-widest text-gray-900`}>
                    {selectedCertificate.title}
                  </h2>
                  <p className="text-xs font-mono text-gray-500 mt-2">ID: {selectedCertificate.credentialId}</p>
                </div>
                <button onClick={() => setSelectedCertificate(null)} className="text-gray-400 hover:text-red-500 transition-colors p-2 cursor-pointer bg-gray-50 hover:bg-red-50 rounded-full shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>

              {/* Body Modal */}
              <div className="p-6 md:p-8 overflow-y-auto scrollbar-hide">
                <div className="h-64 md:h-80 bg-gray-50 border border-dashed border-gray-300 mb-6 flex flex-col items-center justify-center text-gray-400 font-mono relative overflow-hidden">
                  {selectedCertificate.image ? (
                    selectedCertificate.image.endsWith('.pdf') ? (
                      <object data={selectedCertificate.image} type="application/pdf" className="w-full h-full relative z-10">
                        <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 font-mono bg-white p-4 text-center">
                          <span className="text-xs mb-2">PDF Viewer not supported</span>
                          <a href={selectedCertificate.image} target="_blank" rel="noreferrer" className="text-blue-500 underline text-xs">Download PDF</a>
                        </div>
                      </object>
                    ) : (
                      <img src={selectedCertificate.image} alt={selectedCertificate.title} className="w-full h-full object-contain relative z-10" />
                    )
                  ) : (
                    <>
                      <svg className="w-16 h-16 mb-4 opacity-30 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                      <span className="relative z-10 text-sm">CERT_IMAGE_NOT_FOUND</span>
                    </>
                  )}
                </div>
              </div>

              {/* Footer Modal */}
              <div className="p-4 md:p-6 bg-gray-50 border-t border-gray-200 flex flex-wrap justify-end gap-4">
                <button onClick={() => setSelectedCertificate(null)} className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-bold uppercase tracking-widest text-xs hover:bg-gray-200 transition-colors cursor-pointer w-full md:w-auto">
                  Close Terminal
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default App
