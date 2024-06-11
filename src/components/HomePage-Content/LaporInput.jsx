// import React from "react";
import PropTypes from "prop-types";
import useInput from '../../Hooks/useInput';
function LaporInput({ lapor }) {
  const [kepada, onKepadaChange] = useInput("");
  const [Judul, onJudulChange] = useInput("");
  const [Isi, onIsiChange] = useInput("");
  const [Date, onDateChange] = useInput("");
  const [Lokasi, onLokasiChange] = useInput("");
  const [telp, onTelpChange] = useInput("");
  const [Lampiran] = useInput("");
  const [kategoriId, setKategoriId] = useInput("");

  return (
    <form className="form-input">
      <select value={kategoriId} onChange={setKategoriId}>
        <option value="1">Kategori 1: Pengaduan Gangguan</option>
        <option value="2">Kategori 2: Permohonan Pasang Baru</option>
        <option value="3">Kategori 3: Permintaan Informasi</option>
      </select>
      <input
        type="text"
        value={kepada}
        onChange={onKepadaChange}
        placeholder="Ketik Kepada PDAM di Daerah*"
      />
      <input
        type="text"
        value={Judul}
        onChange={onJudulChange}
        placeholder="Ketik Judul Laporan Anda*"
      />
      <input
        type="date"
        value={Date}
        onChange={onDateChange}
      />
      <input
        type="text"
        value={Lokasi}
        onChange={onLokasiChange}
        placeholder="Ketik Lokasi Kejadian*"
      />
      <input
        type="tel"
        value={telp}
        onChange={onTelpChange}
        placeholder="Nomor yang dapat di hubungi, contoh: 081234567890*"
      />
      <textarea
        type="text"
        value={Isi}
        onChange={onIsiChange}
        placeholder="Ketik isi Laporan Anda*"
      />
      <input type="file" value={Lampiran} placeholder="Upload Lampiran" />
      <button
        type="button"
        onClick={() => lapor({ Judul, Isi, Date, Lokasi, Lampiran })}
      >
        Lapor!
      </button>
    </form>
  );
}

LaporInput.propTypes = {
  lapor: PropTypes.func.isRequired,
};

export default LaporInput;
