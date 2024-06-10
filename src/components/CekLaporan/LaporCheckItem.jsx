import PropTypes from 'prop-types';

function LaporCheckItem({ laporanId }) {
  return (
    <>
      <h2>Detail Laporan</h2>
      <div className="lapor-check-item">
        <div className="item">
          <span className="label">ID Laporan:</span>
          <span className="value">{laporanId}</span>
        </div>
        <div className="item">
          <span className="label">Judul laporan:</span>
          <span className="value">[Masukkan judul laporan di sini]</span>
        </div>
        <div className="item">
          <span className="label">Tanggal pelaporan:</span>
          <span className="value">[Masukkan tanggal pelaporan di sini]</span>
        </div>
        <div className="item">
          <span className="label">Lokasi laporan:</span>
          <span className="value">[Masukkan lokasi laporan di sini]</span>
        </div>
        <div className="item">
          <span className="label">Isi laporan:</span>
          <span className="value">[Masukkan isi laporan di sini]</span>
        </div>
      </div>
    </>
  );
}

LaporCheckItem.propTypes = {
  laporanId: PropTypes.string.isRequired,
};

export default LaporCheckItem;
