export default function CertificateCard({ colorTheme, issuer, issuerStyle, year, title, credentialId, link, onOpen, image }) {
  return (
    <div className="w-full bg-white border border-gray-200 p-3 relative group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] transition-all duration-300 transform hover:-translate-y-1">
      <div className={`absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 ${colorTheme.border} z-10 transition-transform group-hover:-translate-x-1 group-hover:translate-y-1`}></div>
      <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-gray-300 z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"></div>
      
      <div className="h-48 md:h-60 bg-gray-100 relative overflow-hidden mb-4 border border-dashed border-gray-300">
        {image ? (
          image.endsWith('.pdf') ? (
            <object data={image} type="application/pdf" className="w-full h-full">
              <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 font-mono bg-white p-4 text-center">
                <span className="text-xs mb-2">PDF Viewer not supported</span>
                <a href={image} target="_blank" rel="noreferrer" className="text-blue-500 underline text-xs">Download PDF</a>
              </div>
            </object>
          ) : (
            <img src={image} alt={title} className="w-full h-full object-cover" />
          )
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 font-mono bg-white">
            <svg className="w-10 h-10 mb-2 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
            <span>CERT_IMAGE_NOT_FOUND</span>
          </div>
        )}
      </div>

      <div className="px-4 pb-4">
        <div className="flex justify-between items-start mb-2">
          <span className={`text-[10px] font-mono px-2 py-1 ${issuerStyle}`}>{issuer}</span>
          <span className="text-[10px] font-mono text-gray-500">{year}</span>
        </div>
        <h3 className={`text-lg font-bold text-gray-900 mb-1 leading-tight ${colorTheme.textHover} transition-colors`}>{title}</h3>
        <p className="text-xs font-mono text-gray-400 mb-4">ID: {credentialId}</p>
        
        <button onClick={onOpen} className={`inline-flex items-center justify-center w-full py-2 bg-gray-900 text-white text-xs font-bold uppercase tracking-widest ${colorTheme.buttonHover} transition-colors group cursor-pointer`}>
          View Credential
        </button>
      </div>
    </div>
  );
}
