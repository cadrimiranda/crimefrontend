const DataCircle = ({ value, text }: { value: number; text: string }) => {
  return (
    <div className="crime-datacircle crime-pos-flex crime-pos-center-center crime-pos-column">
      <span className="crime-datacircle-value">{value}</span>
      <span>{text}</span>
    </div>
  );
};

export { DataCircle };
