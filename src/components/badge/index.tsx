import './style.scss';

interface IBadge {
  type: 'invoice' | 'arrived',
  text: string
}
export const Badge = ({type, text}: IBadge) => {
  return <div className={`badge ${type}`}>{text}</div>
}