import { useState } from 'react';
import useInput from '../../Hooks/useInput';
import LaporCheckItem from './LaporCheckItem';


function LaporCheckForm() {
  const [laporanId, setLaporanId] = useInput('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Logic untuk mengecek laporan berdasarkan laporanId
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // console.log(`Mengecek laporan dengan ID: ${laporanId}`);
  };

  return (
    <div className="lapor-check-form">
      <h1>Cek Laporan-mu disini</h1>
      <form className="form-input" onSubmit={handleSubmit}>
        <label>
          ID Laporan:
          <input
            type="text"
            value={laporanId}
            onChange={setLaporanId}
            placeholder='Contoh id: "123456"'
          />
        </label>
        <button type="submit">Cek Laporan</button>
      </form>
      {isSubmitted && <LaporCheckItem laporanId={laporanId} />}
    </div>
  );
}

export default LaporCheckForm;