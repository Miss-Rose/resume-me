import {useState, useEffect} from "react";
import './myPage.css';
import { Header } from "../../components/header/Header.jsx";
import {Main} from "../../components/main/Main.jsx";
import {useFetchData} from "../../api/fetchData.js";

function MyPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const {data, loading} = useFetchData();

  return (
    <>
      <div className="highlight"
           style={{top: mousePosition.y, left: mousePosition.x}}>
      </div>
      <div>
        <Header/>
        <Main cvdata={data} loading={loading} />
      </div>
    </>
  )
}

export default MyPage
