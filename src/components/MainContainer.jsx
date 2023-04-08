import Header from './Header';

export default function MainContainer({ children }) {
  return (
    <div className='fullPage'>
      <Header />
      <div>
        {children}
      </div>
    </div>
  )
}