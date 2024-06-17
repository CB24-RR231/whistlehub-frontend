import PropTypes from 'prop-types';
import { formatDate } from '../../utils/formatDate';
function LaporCheckItem({ laporan }) {

  if (!laporan) {
    return <div>Laporan tidak ditemukan, silahkan cek id anda</div>;
  }

  const renderLampiran = () => {
    if (!laporan.lampiran) {
      return <div>Tidak ada file/image yang dilampirkan</div>; // No lampiran provided
    }

    // Taking lampiran from backend
    const lampiranUrl = `https://backendhub.lotaf.id/storage/${laporan.lampiran}`;
    const extension = laporan.lampiran.split('.').pop().toLowerCase();

    // Check if the extension is an image type
    if (['jpeg', 'jpg', 'png'].includes(extension)) {
      return <img src={lampiranUrl} alt="Lampiran" className="lampiran-image" />;
    } else {
      // For other file types, provide a download link
      return (
        <div className="lampiran-file">
          <a href={lampiranUrl} target="_blank" rel="noopener noreferrer">
            Download Lampiran
          </a>
        </div>
      );
    }
  };

  const renderBuktiSelesai = () => {
    if (!laporan.bukti_selesai) {
      return <div>Tidak ada file/image yang dilampirkan</div>; // No bukti provided
    }

    // take bukti_selesai from backend
    const buktiSelesaiUrl = `https://backendhub.lotaf.id/storage/${laporan.bukti_selesai}`;
    const extension = laporan.lampiran.split('.').pop().toLowerCase();

    // Check if the extension is an image type
    if (['jpeg', 'jpg', 'png'].includes(extension)) {
      return <img src={buktiSelesaiUrl} alt="Lampiran" className="lampiran-image" />;
    } else {
      // For other file types, provide a download link
      return (
        <div className="lampiran-file">
          <a href={buktiSelesaiUrl} target="_blank" rel="noopener noreferrer">
            Download Lampiran
          </a>
        </div>
      );
    }
  };

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
          <span className="value">{formatDate(laporan.tanggal_kejadian)}</span>
        </div>
        <div className="item">
          <span className="label">Lokasi kejadian:</span>
          <span className="value">{laporan.lokasi}</span>
        </div>
        <div className="item">
          <span className="label">Isi laporan:</span>
          <span className="value">{laporan.isi}</span>
        </div>
        <div className="item">
          <span className="label">Status:</span>
          <span className={`value ${laporan.status === 1 ? "green" : "red"}`} >{laporan.status === 1 ? "Laporan sudah diproses" : "Laporan masih di review"}</span>
        </div>
        <div className="item image-or-file">
          <span className="label">Lampiran:</span>
          <span className="value">
            {renderLampiran()}
          </span>
        </div>
        <div className="item image-or-file">
          <span className="label">Bukti Selesai:</span>
          <span className="value">
            {renderBuktiSelesai(laporan.bukti_selesai)}
          </span>
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
    status: PropTypes.number,
    tanggal_kejadian: PropTypes.string.isRequired,
    bukti_selesai: PropTypes.string,
  })
};

export default LaporCheckItem;