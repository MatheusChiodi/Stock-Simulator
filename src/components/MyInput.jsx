import { useState } from 'react';

export default function MyInput({
  title,
  inputType,
  inputPlaceholder,
  inputName,
  inputId,
  value,
  setValue
}) {
  
  // Função para formatar o valor como moeda
  const formatCurrency = (value) => {
    const numericValue = parseFloat(value.replace(/\D/g, '')) / 100;
    return numericValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  // Handler para mudança de valor no input
  const handleChange = (event) => {
    const { value } = event.target;
    const formatted = formatCurrency(value);
    setValue(formatted);
  };

  return (
    <div className="border-[1px] border-[#eee] p-2 w-[100%] rounded-lg text-center shadow-sm">
      <p className="text-[14px] font-bold">{title}</p>
      <input
        type={inputType}
        placeholder={inputPlaceholder}
        name={inputName}
        id={inputId}
        value={value}
        onChange={handleChange}
        className="text-[#9ca3af] w-full text-center border-[1px] border-[#eee] rounded-lg p-1 mt-2 transition-all duration-500 focus:outline-none focus:border-[#ccc]"
      />
    </div>
  );
}
