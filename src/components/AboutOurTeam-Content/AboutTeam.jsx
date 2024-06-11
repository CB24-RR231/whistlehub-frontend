import whistlehublogo from '../../assets/logo-black.png';

function AboutTeam() {
  return (
    <div className="about-team__content">
      <div className="about-team__image">
        <img src={whistlehublogo} alt="logo" className="logo-image" />
      </div>
      <div className="about-team__text">
        <h1>Tentang Tim Whistlehub</h1>
        <h4>Whistlehub disusun oleh tim yang terdiri dari
          4 orang yang mencakup pengembang, dukungan, dan designer.</h4>
        <p>Whistlehub adalah website yang didirikan oleh Developer Indonesia sejak 2024.</p>
        <p>Ini adalah platform yang memungkinkan masyarakat Indonesia melaporkan masalah dengan PDAM.</p>
        <p style={{ marginTop: '20px' }}>Jika Anda memiliki pertanyaan atau masalah tentang Whistlehub,
          Anda dapat menghubungi kami sebagai berikut.</p>
        <p><strong>Melalui Email:</strong> CB24-RR231@dicoding.org</p>
      </div>
    </div>
  );
}

export default AboutTeam;