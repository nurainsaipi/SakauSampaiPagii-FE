export default function Card({ children, className = '', ...props }) {
  return (
    <div className={`bg-white rounded-livora shadow-livora-soft p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}