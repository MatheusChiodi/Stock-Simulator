import { useState } from 'react';

export default function MyInput({
  title,
  inputType,
  inputPlaceholder,
  inputName,
  inputId,
  value,
  setValue,
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
    <div className="border-[1px] border-[#eee] p-2 w-[100%] rounded-lg text-center shadow-sm h-[100%]">
      <p className="text-[14px] font-bold">{title}</p>
      <div className="flex flex-row">
        <div className="h-[34px] w-[40px] bg-[#f8fafb] border-[1px] border-[#eee] rounded-l-lg mt-2 flex justify-center items-center">
          <i className="fa-regular fa-pen-to-square text-[#ccc]"></i>
        </div>
        <input
          type={inputType}
          placeholder={inputPlaceholder}
          name={inputName}
          id={inputId}
          value={value}
          onChange={handleChange}
          className="text-[#9ca3af] w-[90%] text-center border-[1px] border-[#eee] rounded-r-lg p-1 mt-2 transition-all duration-500 focus:outline-none focus:border-[#ccc]"
        />
      </div>
    </div>
  );
}
