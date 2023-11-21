import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
    const params = useParams();
    const [mascota, setMascota] = useState({});
    useEffect(() => {
    const URL =
    "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
    fetch(URL)
    .then((data) => data.json())
    .then((data) => {
        setMascota(data.find((mascota) => mascota.id === Number(params.mascotaId)));
    });
    },
    [params.mascotaId]);
    return (
        <div className="main">
        {/* <Mascota mascota={mascota}></Mascota> */}
            <h1>{mascota.nombre}</h1>
            <img src={mascota.foto} style={{ height: "14rem" }} alt="foto-mascota"></img>
            <h2>{mascota.raza}</h2>
        </div>
        );
}
