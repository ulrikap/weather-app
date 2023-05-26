const KeyValueList = ({ items }: { items: Record<PropertyKey, string> }) => {
  return (
    <div className="grid container gap-4 grid-cols-2 grid-rows-2 h-full items-center">
      {Object.keys(items).map((item) => (
        <div key={item}>
          <h1 className="font-bold">
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </h1>
          <p>{items[item]}</p>
        </div>
      ))}
    </div>
  );
};

export default KeyValueList;
