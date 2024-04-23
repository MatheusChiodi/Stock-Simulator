import { useEffect, useState } from 'react';

import MyInput from '../components/MyInput';

export default function MetodoBarsi() {
  const [anoPosterior1, setAnoPosterior1] = useState(0);
  const [anoPosterior2, setAnoPosterior2] = useState(0);
  const [anoPosterior3, setAnoPosterior3] = useState(0);
  const [anoPosteriorTotal, setAnoPosteriorTotal] = useState(0);
  const [anoPosteriorTotalDivididoPor3, setAnoPosteriorTotalDivididoPor3] =
    useState(0);
  const [precoTeto, setPrecoTeto] = useState(0);

  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();

  const formatCurrency = (value) => {
    const numericValue = parseFloat(value.replace(/\D/g, '')) / 100;
    return numericValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  useEffect(() => {
    let anoPosterior1Float = 0;
    let anoPosterior2Float = 0;
    let anoPosterior3Float = 0;

    if (anoPosterior1 != 0 && anoPosterior1 != '') {
      anoPosterior1Float = parseFloat(anoPosterior1.replace(/\D/g, '')) / 100;
    }
    if (anoPosterior2 != 0 && anoPosterior2 != '') {
      anoPosterior2Float = parseFloat(anoPosterior2.replace(/\D/g, '')) / 100;
    }
    if (anoPosterior3 != 0 && anoPosterior3 != '') {
      anoPosterior3Float = parseFloat(anoPosterior3.replace(/\D/g, '')) / 100;
    }

    if (
      anoPosterior1Float > 0 &&
      anoPosterior2Float > 0 &&
      anoPosterior3Float > 0
    ) {
      const anoPosteriorTotal =
        anoPosterior1Float + anoPosterior2Float + anoPosterior3Float;
      setAnoPosteriorTotal(anoPosteriorTotal.toFixed(2));
      console.log(anoPosteriorTotal.toFixed(2));

      const anoPosteriorTotalDivididoPor3 = anoPosteriorTotal / 3;
      setAnoPosteriorTotalDivididoPor3(
        anoPosteriorTotalDivididoPor3.toFixed(2)
      );
      console.log(anoPosteriorTotalDivididoPor3.toFixed(2));

      const anoPosteriorTotalDivididoPor6Porcento =
        (anoPosteriorTotalDivididoPor3 * 100) / 6;
      setPrecoTeto(
        formatCurrency(anoPosteriorTotalDivididoPor6Porcento.toFixed(2))
      );

      console.log(anoPosteriorTotalDivididoPor6Porcento.toFixed(2));
    }
  }, [anoPosterior1, anoPosterior2, anoPosterior3]);

  return (
    <div className="w-full h-full overflow-auto m-0 p-0 flex flex-col justify-center gap-3">
      <div>
        <p className="font-bold w-full text-center mb-2 md:mb-0">
          Dividendos pagos nos ultimos 3 anos
        </p>
        <div className="p-[1px] md:p-4 flex flex-col md:flex-row justify-between gap-3 border-b border-[#eee] mb-3">
          <MyInput
            title={`Dividendos totais ano ${anoAtual - 1}`}
            inputType="text"
            inputPlaceholder="R$ 0,00"
            inputName="anoPosterior1"
            inputId="anoPosterior1"
            value={anoPosterior1}
            setValue={setAnoPosterior1}
          />
          <MyInput
            title={`Dividendos totais ano ${anoAtual - 2}`}
            inputType="text"
            inputPlaceholder="R$ 0,00"
            inputName="anoPosterior2"
            inputId="anoPosterior2"
            value={anoPosterior2}
            setValue={setAnoPosterior2}
          />
          <MyInput
            title={`Dividendos totais ano ${anoAtual - 3}`}
            inputType="text"
            inputPlaceholder="R$ 0,00"
            inputName="anoPosterior3"
            inputId="anoPosterior3"
            value={anoPosterior3}
            setValue={setAnoPosterior3}
          />
        </div>

        <div className="px-[1px] md:px-4 w-full">
          <div className="border-[1px] border-[#eee] p-2 w-[100%] rounded-lg text-center shadow-sm">
            <p className="text-[14px] font-bold">Preço teto</p>
            <p
              className="text-[#9ca3af] w-full text-center border-[1px] border-[#eee] rounded-lg p-1 mt-2 transition-all duration-500"
              id="precoTeto"
            >
              {precoTeto}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
