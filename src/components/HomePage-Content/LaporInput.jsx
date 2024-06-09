// import React from "react";
import PropTypes from "prop-types";
import useInput from '../../Hooks/useInput';

function LaporInput({ lapor }) {
  const [Judul, onJudulChange] = useInput("");
  const [Isi, onIsiChange] = useInput("");
  const [Date, onDateChange] = useInput("");
  const [Lokasi, onLokasiChange] = useInput("");
  const [Lampiran] = useInput("");

  return (
    <form className="form-input">
      <input
        type="text"
        value={Judul}
        onChange={onJudulChange}
        placeholder="Ketik Judul Laporan Anda*"
      />
      <input
        type="text"
        value={Date}
        onChange={onDateChange}
        placeholder="Pilih Tanggal Kejadian*"
      />
      <input
        type="text"
        value={Lokasi}
        onChange={onLokasiChange}
        placeholder="Ketik Lokasi Kejadian*"
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
