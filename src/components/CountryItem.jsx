function CountryItem({ country }) {
  return (
    <li className="content-center flex-col item-style p-4">
      <span className="text-2xl">{country.emoji}</span>
      <span className="font-bold">{country.country}</span>
    </li>
  );
}

export default CountryItem;
