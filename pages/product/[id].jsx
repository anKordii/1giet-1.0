import React, { useEffect, useState } from "react";
import {NotificationManager} from 'react-notifications';

import {SEO} from "../../backend";
import { supabase } from '../../lib/initSupabase';
import styles from '../../components/modules/anime_page.module.css';
import {LeftBar, BackgroundAnime } from '../../components/product';

const ProductPage = ({slug, product}) => {
  const [productPrice, setProductPrice] = useState(null);
  const [promoCode, setPromoCode] = useState(null)

  const buyProduct = async (e) => {
    e.preventDefault();
    const howmuch = e.target.amount.value;

    try {
      const res = await fetch('/api/buy', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            product: product.name, 
            amount: howmuch
          }),
      });
      const data = await res.json();
      NotificationManager.success(`Zamówienie na x${howmuch} ${product.name} zostało przyjęte!`);
      setTimeout(() => {
        window.location.reload(false)
      }, 1000);
    } catch (error) {
      NotificationManager.error(error.message)
    }
  };

  function fakeCode(e){
    e.preventDefault();

    const input = document.querySelector(`input[name="promo"]`)

    if(input.value.toLowerCase() !== "whitexmas20"){
      NotificationManager.error("Nie znany kod promocyjny")
    }else{
      const priceToUse = productPrice || product.price;
      
      setProductPrice(Math.trunc(priceToUse - (priceToUse * .20)));
      setPromoCode(true);
      input.disabled = true;
      e.target.disabled = true;
      input.style.background = "var(--docchi-nav)";
      NotificationManager.success(`Zastosowano kod promocyjny ${input.value}`)
    }
  }

  function priceUpdate(e){
    e.preventDefault();
    const count = product.price * Number(e.target.value);

    if(promoCode === null){
      setProductPrice(count)
    }else{
      setProductPrice(Math.trunc(count - (count * .20)))
    }
  }

  return (
    <>
      <SEO data={
        {
          "title": `${product.name}`, 
          "description": product.description,
          "url": `/product/${product.slug}`
        }} 
      />
      <BackgroundAnime bg={product.image} />
      <div className={'container-fluid p-sm-5 p-3'}>
        <div className="row position-relative justify-content-center">
          <div className='col-10'>
            <div className='p-2'>
              <div className={`${styles.prebreadcrumb}`}>
                <nav>
                  <ol className={styles.breadcrumb}>
                    <li className={styles.breadcrumb_item}>
                      <a href="/">Home</a>
                    </li>
                    <li className={styles.breadcrumb_item}>
                      Product
                    </li>
                    <li className={styles.breadcrumb_item}>
                      <a href={"/product/"+product.slug}>{product.name}</a>
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="pt-1 pb-1">
                <div className='row'>
                  <LeftBar anime={product} />
                  <div className='col-12 col-sm-8 mt-sm-0 mt-4'>
                    <div className='row'>
                      <div className='col-12'>
                        <div className='pb-2 d-flex flex-wrap'>
                          <span className={`${styles.stats} ms-1 me-1 shadow-sm`}>
                            Najlepsza w okolicy
                          </span>
                          <span className={`${styles.stats} ${styles.ranking} ms-1 me-1 shadow-sm`}>
                            Zweryfikowany sprzedawca
                          </span>
                        </div>
                      </div>
                      <div className='col-sm-12 col-lg-6 col-12'>
                        <div className='pt-2 pb-2'>
                          <h1 className='fs-4 fw-bolder'>{product.name}</h1>
                        </div>
                        <div className='pt-4 pb-2'>
                          <h1 className='fs-5 fw-bolder'>Opis</h1>
                          <div className='m-0 p-0 fs-6'><p>{product.description}</p></div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-5'>
                        <div className='pt-2 pb-2'>
                          <h1 className='fs-6 fw-bolder'>Zakupy</h1>
                          <form onSubmit={e => buyProduct(e)}>
                            <div>
                              <label>Ilość produktu</label>
                              <input type="number" className={`${styles.input_standard} form-control`} defaultValue={1} required name="amount" onChange={priceUpdate} max={15} min={1} />
                            </div>
                            <div className="mt-2">
                              <label>Kod promocyjny</label>
                              <div className="d-flex align-items-center">
                                <input type="text" className={`${styles.input_standard} form-control d-inline w-50`} name="promo" />
                                <button type="button" onClick={fakeCode} className={`${styles.docchi_button} d-inline ms-2`} style={{backgroundColor: "var(--docchi-anime)"}}>Zastosuj</button>
                              </div>
                            </div>
                            <div className="pt-4">
                              <h1 className="fs-6">Szacowana cena: <strong style={{color: "var(--docchi-main)"}}>{productPrice || product.price},00 zł</strong></h1>
                            </div>
                            <div className="pt-2">
                              <button type="submit" className={`${styles.docchi_button}`}>Potwierdź zakupy</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps({query}) {
  const slug = query.id.toLowerCase();

  const { data, error } = await supabase.from('products').select().eq('slug', slug).single()
  
  if(error){
    return{
      notFound: true
    }
  }

  return { props: {
    slug: slug, 
    product: data || []
  }}

}
export default ProductPage;