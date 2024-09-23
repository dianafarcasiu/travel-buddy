function CountryItem({ country }) {
  return (
    <li className="content-center flex-col text-zinc-200 bg-zinc-600 p-4 rounded-xl border-l-4 border-amber-500">
      <span className="text-2xl">{country.emoji}</span>
      <span className="font-bold">{country.country}</span>
    </li>
  );
}

export default CountryItem;
