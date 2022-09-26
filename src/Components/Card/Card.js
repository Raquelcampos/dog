import React, { useState } from "react";
import axios from "axios";
import * as S from "./style";

export default function Dogs() {
    const [dog, setDog] = useState();

    const [status, setStatus] = useState(false);

    function getDogs() {
        axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
            setDog(response.data.message);
            setStatus(true);
        });
    }
    return (
        <S.Container>
            <button
                onClick={() => {
                    getDogs();
                }}
            >
                Click to relax!
            </button>
            <S.Figure>{status && <S.Image src={dog} alt="dog photos" />}</S.Figure>
        </S.Container>
    );
}