import React from "react";
import styles from "../modules/anime_page.module.css";

var LeftBar = function({anime}) {
    return (
      <>
                  <div className='col-12 col-sm-3 col-lg-2 me-3'>
                    <div className={styles.anime_cover_box} width="265px" height="373px">
                      <img src={anime.image} className="shadow-sm" />
                    </div>
                    <div className='mt-4 mb-2'>
                      <h1 className='fs-6'>Informacje</h1>
                      <div className={`${styles.anime_info} shadow-sm p-2 fs-6`}>
                        <div className='mb-2 m-1'>
                          <h4 className='fs-6 p-0 m-0'>Cena</h4>
                          <p className='p-0 m-0'>{anime.price},00 zł</p>
                        </div>
                        <div className='mb-2 m-1'>
                          <h4 className='fs-6 p-0 m-0'>Miara</h4>
                          <p className='p-0 m-0'>{anime.price_type}</p>
                        </div>
                        <div className='mb-2 m-1'>
                          <h4 className='fs-6 p-0 m-0'>Dostępne od</h4>
                          <p className='p-0 m-0'>{new Date(anime.created_at).toLocaleDateString("pl")}</p>
                        </div>
                      </div>
                    </div>
                    <div className='mt-4 mb-2'>
                      <h1 className='fs-6'>Kontakt</h1>
                      <span className={`${styles.docchi_button} w-100 shadow-sm d-block`} target="_blank" rel="noreferrer">
                          @xadrian1giet
                      </span>
                    </div>
                  </div>
      </>
    )
}
export default LeftBar;
