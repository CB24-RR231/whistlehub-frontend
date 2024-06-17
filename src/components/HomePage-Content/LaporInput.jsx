import { useDispatch } from "react-redux";
import { asyncAddLaporan } from "../../states/laporans/action";
import useInput from '../../Hooks/useInput';
import { useState } from "react";

function LaporInput() {
  const [kepada, onKepadaChange] = useInput("");
  const [Judul, onJudulChange] = useInput("");
  const [Isi, onIsiChange] = useInput("");
  const [Date, onDateChange] = useInput("");
  const [Lokasi, onLokasiChange] = useInput("");
  const [telp, onTelpChange] = useInput("");
  const [kategoriId, onKategoriIdChange] = useInput("");
  const [Lampiran, setLampiran] = useState(null); // State to hold the selected file


  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("kategori_id", kategoriId);
    formData.append("kepada", kepada);
    formData.append("judul", Judul);
    formData.append("isi", Isi);
    formData.append("lokasi", Lokasi);
    formData.append("telp", telp);
    formData.append("lampiran", Lampiran);
    formData.append("date", Date);

    // Console log the formData object
    console.log("Form Data:", formData);
    console.log("Judul:", Judul);

    await dispatch(asyncAddLaporan(formData));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setLampiran(file);
  };

  return (
    <form className="form-input">
      <select value={kategoriId} onChange={onKategoriIdChange}>
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
      <input
        type="file"
        onChange={handleFileChange}
        placeholder="Upload Lampiran"
        accept=".jpg,.jpeg,.png,.gif,.pdf" // acceptable file types
      />
      <button
        type="button"
        onClick={handleSubmit}
      >
        Lapor!
      </button>
    </form>
  );
}

export default LaporInput;
