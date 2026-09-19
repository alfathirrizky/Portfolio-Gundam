export default function ProjectCard({ colorTheme, tags, title, description, link, onOpen, images }) {
  return (
    <div className="w-full h-full flex flex-col bg-white border border-gray-200 p-2 relative group shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgb(0,0,0,0.12)] transition-shadow">
      <div className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 ${colorTheme.border} z-10 transition-transform group-hover:-translate-x-1 group-hover:translate-y-1`}></div>
      <div className="h-56 shrink-0 bg-gray-50 relative overflow-hidden">
        {images && typeof images[0] === 'string' ? (
          <img src={images[0]} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 font-mono border border-dashed border-gray-300 m-2 bg-white">
            <svg className="w-8 h-8 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            <span>IMG_NOT_FOUND</span>
          </div>
        )}
      </div>
      <div className="p-2 flex flex-col flex-1">
        <div className="flex gap-2 mb-4">
          {tags.map((tag, i) => (
            <span key={i} className={`text-[8px] font-mono px-2 py-1 ${tag.style}`}>
              {tag.name}
            </span>
          ))}
        </div>
        <h3 className={`text-xl font-bold text-gray-900 mb-2 uppercase tracking-wide ${colorTheme.textHover} transition-colors line-clamp-2`}>{title}</h3>
        <p className="text-gray-600 text-xs mb-4 line-clamp-3">
          {description}
        </p>
        <button onClick={onOpen} className={`mt-auto inline-flex items-center gap-2 text-xs font-bold text-gray-900 uppercase tracking-widest ${colorTheme.textHover} transition-colors cursor-pointer`}>
          Access System <span className={colorTheme.text}>&rarr;</span>
        </button>
      </div>
    </div>
  );
}
