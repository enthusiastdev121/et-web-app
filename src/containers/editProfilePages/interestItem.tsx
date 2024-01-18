export default function InterestItem({ item, onClick, setSub }: any) {
  return (
    <div
      onClick={() => {
        onClick();
        setSub(item.sub);
      }}
    >
      <div className="relative-item">
        <input type="checkbox" id={item.id} className="absolute opacity-0" />
        <label htmlFor={item.id}>{item.label}</label>
      </div>
    </div>
  );
}
