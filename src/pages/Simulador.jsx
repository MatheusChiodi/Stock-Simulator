import { useEffect, useState } from 'react';

import MyInput from '../components/MyInput';

export default function Simulador() {
  const [valorPorCota, setValorPorCota] = useState(0);
  const [ultimoRendimento, setUltimoRendimento] = useState(0);
  const [valorInvestido, setValorInvestido] = useState(0);
  const [quantidadeCotas, setQuantidadeCotas] = useState(0);
  const [rendaMensal, setRendaMensal] = useState(0);

  const formatCurrency = (value) => {
    const numericValue = parseFloat(value.replace(/\D/g, '')) / 100;
    return numericValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  useEffect(() => {
    let valorPorCotaFloat = 0;
    let ultimoRendimentoFloat = 0;
    let valorInvestidoFloat = 0;

    if (valorPorCota != 0 && valorPorCota != '') {
      valorPorCotaFloat = parseFloat(valorPorCota.replace(/\D/g, '')) / 100;
    }
    if (ultimoRendimento != 0 && ultimoRendimento != '') {
      ultimoRendimentoFloat =
        parseFloat(ultimoRendimento.replace(/\D/g, '')) / 100;
    }
    if (valorInvestido != 0 && valorInvestido != '') {
      valorInvestidoFloat = parseFloat(valorInvestido.replace(/\D/g, '')) / 100;
    }

    if (valorPorCotaFloat > 0 && valorInvestidoFloat > 0) {
      const quantidadeCotas = valorInvestidoFloat / valorPorCotaFloat;
      setQuantidadeCotas(parseInt(quantidadeCotas.toFixed(2)));
    }
    if (ultimoRendimentoFloat > 0 && quantidadeCotas > 0) {
      const rendaMensal = ultimoRendimentoFloat * quantidadeCotas;
      setRendaMensal(formatCurrency(rendaMensal.toFixed(2)));
    }
  }, [valorPorCota, ultimoRendimento, valorInvestido,quantidadeCotas]);

  return (
    <div className="w-full h-full overflow-auto m-0 p-0 flex flex-col justify-between gap-3">
      <div className="p-[1px] md:p-4 flex flex-col md:flex-row justify-between gap-3">
        <MyInput
          title="Valor (Por 1 cota)"
          inputType="text"
          inputPlaceholder="R$ 0,00"
          inputName="valorPorCota"
          inputId="valorPorCota"
          value={valorPorCota}
          setValue={setValorPorCota}
        />
        <MyInput
          title="Ultimo rendimento"
          inputType="text"
          inputPlaceholder="R$ 0,00"
          inputName="ultimoRendimento"
          inputId="ultimoRendimento"
          value={ultimoRendimento}
          setValue={setUltimoRendimento}
        />
      </div>
      <div className="p-[1px] md:p-4 flex flex-col md:flex-row justify-between gap-3">
        <MyInput
          title="Valor investido"
          inputType="text"
          inputPlaceholder="R$ 0,00"
          inputName="valorInvestido"
          inputId="valorInvestido"
          value={valorInvestido}
          setValue={setValorInvestido}
        />
        <div className="border-[1px] border-[#eee] p-2 w-[100%] rounded-lg text-center shadow-sm">
          <p className="text-[14px] font-bold">Quantidade de cotas</p>
          <p
            className="text-[#9ca3af] w-full text-center border-[1px] border-[#eee] rounded-lg p-1 mt-2 transition-all duration-500"
            id="quantidadeCotas"
          >
            {quantidadeCotas}
          </p>
        </div>
      </div>
      <div className="p-[1px] md:p-4">
        <div className="border-[1px] border-[#eee] p-2 w-[100%] rounded-lg text-center shadow-sm">
          <p className="text-[14px] font-bold">Renda mensal</p>
          <p className="text-[#9ca3af] w-full text-center border-[1px] border-[#eee] rounded-lg p-1 mt-2 transition-all duration-500">
            {rendaMensal}
          </p>
        </div>
      </div>
    </div>
  );
}
