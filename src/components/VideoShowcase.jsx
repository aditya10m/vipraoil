const VideoShowcase = () => {
  return (
    <section className="py-20 sm:py-32 px-6 sm:px-10 lg:px-24">
      
      <div className="glass rounded-[30px] sm:rounded-[40px] overflow-hidden relative">
        
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[250px] sm:h-[450px] lg:h-[700px] object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

      </div>
    </section>
  );
};

export default VideoShowcase;