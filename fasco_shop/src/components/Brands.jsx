import logoShanel from "../assets/images/logo-chanel.svg";
import logoLouisVuitton from "../assets/images/logo-louis-vuitton.svg";
import logoPrada from "../assets/images/logo-prada.svg";
import logoCalvinKlein from "../assets/images/logo-calvin-klein.svg";
import logoDenim from "../assets/images/logo-denim.svg";

export default function Brands() {
  return (
    <>
      <section className='max-w-7xl mx-auto flex justify-between flex-wrap my-20 gap-5'>
        <img src={logoShanel} alt='chanel' />
        <img src={logoLouisVuitton} alt='louis-vuitton' />
        <img src={logoPrada} alt='prada' />
        <img src={logoCalvinKlein} alt='calvin-klein' />
        <img src={logoDenim} alt='denim' />
      </section>
    </>
  );
}
