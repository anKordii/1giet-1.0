import { supabase } from '../../lib/initSupabase';
import {NameGenerator} from "../../backend";

const sleep = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 350);
});

export default async function anime(req, res) {
  const { body, method } = req;
  const { product, amount } = body;

  if (method === "POST") {
    if (!product || !amount || amount && amount <= 0 || amount && amount >= 25) {
      return res.status(422).json({
        message: "Proszę wypełnić wymagane pola.",
      });
    }
    try {
        const productData = await supabase.from('products').select().eq('name', product).single()
        const { data, error } = await supabase.from('orders').insert({ product: product, amount: Number(amount), buyer: NameGenerator(), image: productData.data.image}).single();
        if(error){
            await sleep();
            return res.status(500).json({message: res.error, status: 500});
        }
        await sleep();
        return res.status(200).json({message: 'Przyjęto zamówienie', status: 200, response: data});

    } catch (error) {
        await sleep();
        return res.status(500).json({message: error.message, status: 500});
    }
  }
  return res.status(404).send("Not found");
};
