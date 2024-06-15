import LaporCheckForm from "../components/CekLaporan/LaporCheckForm";
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetLaporans } from "../states/laporans/action";
import { useEffect } from "react";

function CheckLaporPage() {
  const dispatch = useDispatch();

  const laporans = useSelector((state) => state.laporans);
  useEffect(() => {
    dispatch(asyncGetLaporans());
  }, [dispatch]);

  return (
    <section className="check-lapor-page">
      <LaporCheckForm />
    </section>
  );
}

export default CheckLaporPage