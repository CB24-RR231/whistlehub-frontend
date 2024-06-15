import { useState, useEffect } from 'react';
import useInput from '../../Hooks/useInput';
import LaporCheckItem from './LaporCheckItem';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetLaporans } from "../../states/laporans/action";

function LaporCheckForm() {
  const [laporanId, setLaporanId] = useInput('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [filteredLaporan, setFilteredLaporan] = useState(null);

  const dispatch = useDispatch();
  const laporans = useSelector((state) => state.laporans);

  useEffect(() => {
    dispatch(asyncGetLaporans());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Filter laporan berdasarkan laporans.id yang sesuai
    const foundLaporan = laporans.find((laporan) => laporan.id === parseInt(laporanId));
    setFilteredLaporan(foundLaporan);
    setIsSubmitted(true);
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
      {isSubmitted && <LaporCheckItem laporan={filteredLaporan} />}
    </div>
  );
}

export default LaporCheckForm;