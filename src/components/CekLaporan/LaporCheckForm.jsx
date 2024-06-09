import useInput from '../../Hooks/useInput';


function LaporCheckForm() {
  const [laporanId, setLaporanId] = useInput('');

  // Logic untuk mengecek laporan berdasarkan laporanId
  const handleSubmit = (e) => {
    e.preventDefault();
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
    </div>
  );
}

export default LaporCheckForm;