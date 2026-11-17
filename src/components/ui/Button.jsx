import { Link } from 'react-router-dom';

export default function Button({ to, variant = 'primary', size = 'md', className = '', children, ...props }) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-livora bg-livora-green-dark text-white px-5 py-3 shadow-livora-soft transition-transform hover:-translate-y-0.5';
  
  if (to) {
    return <Link to={to} className={`${base} ${className}`} {...props}>{children}</Link>;
  }
  
  return (
    <button className={`${base} ${className}`} {...props}>
      {children}
    </button>
  );
}