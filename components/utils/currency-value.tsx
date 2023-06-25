export default function CurrencyValue({ value }: { value: number }) {
  return value.toLocaleString("nl", { maximumFractionDigits: 2, currency: "EUR", style: "currency"});
};
