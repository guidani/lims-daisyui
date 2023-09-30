export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">LIMS</h1>
          <p className="mb-5">
            Torne-se o estímulo para a inovação tecnológica.
          </p>
          <p className="mb-5">
            Seja co-criador da nova geração de soluções tecnológicas.
          </p>
          <p className="mb-5">
            Dê início à revolução com suas contribuições e ideias.
          </p>

          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
}
