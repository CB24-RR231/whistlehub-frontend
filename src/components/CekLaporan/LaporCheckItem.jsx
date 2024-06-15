import PropTypes from 'prop-types';
import { formatDate } from '../../utils/formatDate';

function LaporCheckItem({ laporan }) {
  if (!laporan) {
    return <div>Laporan tidak ditemukan</div>;
  }

  return (
    <>
      <h2>Detail Laporan</h2>
      <div className="lapor-check-item">
        <div className="item">
          <span className="label">Laporan kepada:</span>
          <span className="value">{laporan.kepada}</span>
        </div>
        <div className="item">
          <span className="label">Judul laporan:</span>
          <span className="value">{laporan.judul}</span>
        </div>
        <div className="item">
          <span className="label">Tanggal pelaporan:</span>
          <span className="value">{formatDate(laporan.created_at)}</span>
        </div>
        <div className="item">
          <span className="label">Lokasi kejadian:</span>
          <span className="value">{laporan.lokasi}</span>
        </div>
        <div className="item">
          <span className="label">Isi laporan:</span>
          <span className="value">{laporan.isi}</span>
        </div>
      </div>
    </>
  );
}

LaporCheckItem.propTypes = {
  laporan: PropTypes.shape({
    id: PropTypes.number.isRequired,
    kategori_id: PropTypes.number.isRequired,
    kepada: PropTypes.string.isRequired,
    judul: PropTypes.string.isRequired,
    isi: PropTypes.string.isRequired,
    lokasi: PropTypes.string.isRequired,
    telp: PropTypes.string,
    lampiran: PropTypes.string,
    bukti_selesai: PropTypes.string,
    review: PropTypes.string,
    status: PropTypes.string,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
  })
};

export default LaporCheckItem;