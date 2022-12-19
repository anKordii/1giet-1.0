import React from "react";
import {Slider, Latest, Orders, Products} from "../components/home";
import { supabase } from '../lib/initSupabase';

function giet({latest, orders, produkty}) {
  return (
    <>
        <Slider />
        <div className="container-fluid p-5">
            <div className="row justify-content-center">
                <div className="col-12 pb-5">
                    <div className='text-center p-3'>
                        <h1>xadrian1giet Store</h1>
                        <a href="https://wickr.com/@xadrian1giet">wickr.com/@xadrian1giet</a>
                    </div>
                </div>
            </div>
        </div>
        <Latest anime={latest}/>
        <Products anime={produkty} />
        <Orders anime={orders}/>
    </>
  )
}
export async function getServerSideProps() {
  const { data, error } = await supabase.from('products').select().limit(12).order('id', { ascending: false });

  const orders = await supabase.from('orders').select().limit(12).order('id', { ascending: false });

  const produkty = await supabase.from('products').select();

  return { props: {
    latest: data || [],
    orders: orders.data || [],
    produkty: produkty.data || []
  }}

}
export default giet;
